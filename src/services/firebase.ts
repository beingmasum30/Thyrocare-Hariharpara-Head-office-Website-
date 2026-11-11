import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDoc,
  getDocs, 
  onSnapshot, 
  updateDoc, 
  deleteDoc,
  getDocFromServer,
  query,
  where
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';
import { Booking, Product, BookingStatus, UserProfile } from '../types';

// Initialize Firebase App
export const app = initializeApp(firebaseConfig);

// Initialize Firestore Database with explicit Database ID
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

// Initialize Firebase Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Helper to strip undefined properties before writing to Firestore
function cleanUndefined<T extends Record<string, any>>(obj: T): T {
  const cleaned: any = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined) {
      cleaned[key] = obj[key];
    }
  });
  return cleaned as T;
}

// Connection test helper
export async function testFirestoreConnection(): Promise<boolean> {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
    return true;
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
    return false;
  }
}

// Authenticate with Google Popup
export async function authenticateWithGooglePopup(): Promise<{ email: string; name: string; avatar?: string; uid: string } | null> {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    if (user && user.email) {
      return {
        email: user.email.trim().toLowerCase(),
        name: user.displayName || user.email.split('@')[0],
        avatar: user.photoURL || undefined,
        uid: user.uid
      };
    }
    return null;
  } catch (err) {
    console.warn('Google popup sign-in fallback:', err);
    return null;
  }
}

// Real-time Firestore Service for Patient Bookings, User Accounts and Product Catalogue
export const firestoreService = {
  // Real-time listener for all bookings (for Staff / Admin Dashboard)
  subscribeBookings(onUpdate: (bookings: Booking[]) => void) {
    const colRef = collection(db, 'bookings');
    return onSnapshot(
      colRef,
      (snapshot) => {
        const bookingsData: Booking[] = [];
        snapshot.forEach((docSnap) => {
          bookingsData.push(docSnap.data() as Booking);
        });
        bookingsData.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        onUpdate(bookingsData);
      },
      (error) => {
        handleFirestoreError(error, OperationType.GET, 'bookings');
      }
    );
  },

  // Save / Create a new booking
  async saveBooking(booking: Booking): Promise<void> {
    const path = `bookings/${booking.id}`;
    try {
      const docRef = doc(db, 'bookings', booking.id);
      await setDoc(docRef, cleanUndefined(booking));
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  },

  // Update booking status in real-time
  async updateBookingStatus(bookingId: string, status: BookingStatus): Promise<void> {
    const path = `bookings/${bookingId}`;
    try {
      const docRef = doc(db, 'bookings', bookingId);
      await updateDoc(docRef, { booking_status: status });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, path);
    }
  },

  // Update booking report Google Drive link in real-time
  async updateBookingReportLink(bookingId: string, reportDriveLink: string, status?: BookingStatus): Promise<void> {
    const path = `bookings/${bookingId}`;
    try {
      const docRef = doc(db, 'bookings', bookingId);
      const cleanLink = reportDriveLink.trim();
      const payload: Record<string, any> = {
        report_drive_link: cleanLink,
        report_uploaded_at: cleanLink ? new Date().toISOString() : ''
      };
      if (status) {
        payload.booking_status = status;
      }
      await updateDoc(docRef, payload);
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, path);
    }
  },

  // Real-time listener for patient's own bookings
  subscribeUserBookings(userEmail: string, onUpdate: (bookings: Booking[]) => void) {
    const colRef = collection(db, 'bookings');
    return onSnapshot(
      colRef,
      (snapshot) => {
        const userBookings: Booking[] = [];
        snapshot.forEach((docSnap) => {
          const data = docSnap.data() as any;
          if (data.user_email?.toLowerCase() === userEmail.toLowerCase() || data.email?.toLowerCase() === userEmail.toLowerCase()) {
            userBookings.push(data as Booking);
          }
        });
        userBookings.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        onUpdate(userBookings);
      },
      (error) => {
        handleFirestoreError(error, OperationType.GET, 'bookings');
      }
    );
  },

  // Real-time listener for Product Catalogue
  subscribeProducts(onUpdate: (products: Product[]) => void) {
    const colRef = collection(db, 'products');
    return onSnapshot(
      colRef,
      (snapshot) => {
        const productsList: Product[] = [];
        snapshot.forEach((docSnap) => {
          productsList.push(docSnap.data() as Product);
        });
        if (productsList.length > 0) {
          onUpdate(productsList);
        }
      },
      (error) => {
        handleFirestoreError(error, OperationType.GET, 'products');
      }
    );
  },

  // Save product to Firestore
  async saveProduct(product: Product): Promise<void> {
    const path = `products/${product.id}`;
    try {
      const docRef = doc(db, 'products', product.id);
      await setDoc(docRef, cleanUndefined(product));
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  },

  // Delete product from Firestore
  async deleteProduct(productId: string): Promise<void> {
    const path = `products/${productId}`;
    try {
      const docRef = doc(db, 'products', productId);
      await deleteDoc(docRef);
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
    }
  },

  // Get registered user account by email from Firestore
  async getUserByEmail(email: string): Promise<UserProfile | null> {
    const cleanEmail = email.trim().toLowerCase();
    try {
      // Check deterministic email-keyed doc or query by email field
      const q = query(collection(db, 'users'), where('email', '==', cleanEmail));
      const snap = await getDocs(q);
      if (!snap.empty) {
        return snap.docs[0].data() as UserProfile;
      }
      return null;
    } catch (error) {
      console.warn('Firestore getUserByEmail fallback:', error);
      return null;
    }
  },

  // Save registered user account to Firestore
  async saveUserProfile(profile: UserProfile): Promise<void> {
    const path = `users/${profile.id}`;
    try {
      const docRef = doc(db, 'users', profile.id);
      await setDoc(docRef, cleanUndefined({
        ...profile,
        email: profile.email.trim().toLowerCase()
      }));
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  },

  // Permanently delete registered user account from Firestore
  async deleteUserProfile(userId: string, email?: string): Promise<void> {
    try {
      const docRef = doc(db, 'users', userId);
      await deleteDoc(docRef);
      if (email) {
        const cleanEmail = email.trim().toLowerCase();
        const q = query(collection(db, 'users'), where('email', '==', cleanEmail));
        const snap = await getDocs(q);
        for (const d of snap.docs) {
          await deleteDoc(doc(db, 'users', d.id));
        }
      }
    } catch (error) {
      console.warn('Firestore deleteUserProfile warning:', error);
    }
  }
};

