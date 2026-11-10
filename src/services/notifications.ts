/**
 * Firebase Cloud Messaging (FCM) & Web Push Notification Service
 * Configured with VAPID Cloud Public Key
 */

export const FIREBASE_VAPID_KEY = 
  import.meta.env.VITE_FIREBASE_VAPID_KEY || 
  'BJPL917-E2ikEZblwIHUlVVZ0zvvOKfNP2YQo-zE2Z9TeojdN7zqQOPw_vBO6-GGvWvDoKkYa1QMcxSfOLX0IEQ';

const PUSH_TOKEN_KEY = 'thyrocare_fcm_token_v1';
const PUSH_ENABLED_KEY = 'thyrocare_push_enabled_v1';

function urlBase64ToUint8Array(base64String: string): ArrayBuffer {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const buffer = new ArrayBuffer(rawData.length);
  const outputArray = new Uint8Array(buffer);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return buffer;
}

export const notificationService = {
  /**
   * Check if web notifications are supported in this browser
   */
  isSupported(): boolean {
    return 'Notification' in window && 'serviceWorker' in navigator && 'PushManager' in window;
  },

  /**
   * Get current permission state
   */
  getPermission(): NotificationPermission {
    if (!('Notification' in window)) return 'denied';
    return Notification.permission;
  },

  /**
   * Register service worker and subscribe with VAPID Key
   */
  async requestPermissionAndSubscribe(): Promise<{ success: boolean; token?: string; error?: string }> {
    if (!this.isSupported()) {
      return { success: false, error: 'Web notifications not supported in this browser' };
    }

    try {
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        return { success: false, error: 'Notification permission was denied' };
      }

      // Register the Service Worker
      const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
      await navigator.serviceWorker.ready;

      // Subscribe to PushManager using the Firebase VAPID Key
      let subscription = await registration.pushManager.getSubscription();
      if (!subscription) {
        subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(FIREBASE_VAPID_KEY)
        });
      }

      const token = JSON.stringify(subscription);
      localStorage.setItem(PUSH_TOKEN_KEY, token);
      localStorage.setItem(PUSH_ENABLED_KEY, 'true');

      return { success: true, token };
    } catch (err: any) {
      console.error('Failed to subscribe to Web Push / FCM:', err);
      return { success: false, error: err.message || 'Push subscription failed' };
    }
  },

  /**
   * Send a local/in-app notification test
   */
  async sendLocalNotification(title: string, body: string, url: string = '/'): Promise<boolean> {
    if (!('Notification' in window)) return false;

    if (Notification.permission === 'granted') {
      try {
        if ('serviceWorker' in navigator) {
          const reg = await navigator.serviceWorker.getRegistration();
          if (reg) {
            await reg.showNotification(title, {
              body,
              icon: '/logo.png',
              badge: '/logo.png',
              data: { url }
            });
            return true;
          }
        }
        new Notification(title, { body });
        return true;
      } catch (e) {
        console.error('Error displaying notification:', e);
        return false;
      }
    }
    return false;
  },

  /**
   * Notify on new booking
   */
  async notifyBookingCreated(patientName: string, total: number) {
    await this.sendLocalNotification(
      'Thyrocare Hariharpara – Booking Created',
      `Booking request for ${patientName} (₹${total}) generated. Opening WhatsApp to confirm slot.`,
      '#orders'
    );
  },

  /**
   * Notify on booking status change
   */
  async notifyStatusUpdate(patientName: string, status: string) {
    await this.sendLocalNotification(
      `Thyrocare Update: Status changed to "${status}"`,
      `Patient: ${patientName}. Our Hariharpara team is coordinating your sample collection.`
    );
  }
};
