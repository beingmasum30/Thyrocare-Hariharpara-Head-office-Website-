import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Product, Booking, BookingStatus } from '../types';
import { initialProducts } from '../data/initialProducts';
import { calculateFinalPrice } from '../utils/pricing';
import { firestoreService, testFirestoreConnection } from './firebase';

const STORAGE_KEYS = {
  PRODUCTS: 'thyrocare_products_v1',
  BOOKINGS: 'thyrocare_bookings_v1',
  USERS: 'thyrocare_users_v1',
  CONFIG: 'thyrocare_config_v1'
};

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl !== 'https://your-project.supabase.co' &&
    !supabaseUrl.includes('your-project')
  );
};

export const supabase: SupabaseClient | null = isSupabaseConfigured()
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Initialize Firestore connection test
testFirestoreConnection();

// ================= LOCAL STORAGE HELPERS =================
function getLocalProducts(): Product[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(initialProducts));
      return initialProducts;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(initialProducts));
    return initialProducts;
  } catch (e) {
    console.error('Error reading products from localStorage:', e);
    return initialProducts;
  }
}

function setLocalProducts(products: Product[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  } catch (e) {
    console.error('Error saving products to localStorage:', e);
  }
}

function getLocalBookings(): Booking[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error reading bookings from localStorage:', e);
    return [];
  }
}

function setLocalBookings(bookings: Booking[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
  } catch (e) {
    console.error('Error saving bookings to localStorage:', e);
  }
}

function getLocalUsers(): import('../types').UserProfile[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USERS);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error reading users from localStorage:', e);
    return [];
  }
}

function setLocalUsers(users: import('../types').UserProfile[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  } catch (e) {
    console.error('Error saving users to localStorage:', e);
  }
}

// ================= UNIFIED API WITH FIRESTORE REALTIME =================
export const dbService = {
  /**
   * Fetch all active products
   */
  async getProducts(): Promise<Product[]> {
    return getLocalProducts();
  },

  /**
   * Save (create or update) a product
   */
  async saveProduct(product: Product): Promise<Product> {
    const finalPrice = calculateFinalPrice(
      product.mrp,
      product.discount_type,
      product.discount_value
    );
    const updated: Product = {
      ...product,
      final_price: finalPrice,
      updated_at: new Date().toISOString()
    };

    // Save to Firestore Database for Realtime Sync
    try {
      await firestoreService.saveProduct(updated);
    } catch (err) {
      console.warn('Firestore saveProduct warning:', err);
    }

    const current = getLocalProducts();
    const index = current.findIndex(p => p.id === updated.id || p.test_code === updated.test_code);
    if (index >= 0) {
      current[index] = updated;
    } else {
      current.push(updated);
    }
    setLocalProducts(current);
    return updated;
  },

  /**
   * Delete product
   */
  async deleteProduct(id: string): Promise<void> {
    try {
      await firestoreService.deleteProduct(id);
    } catch (err) {
      console.warn('Firestore deleteProduct warning:', err);
    }

    const current = getLocalProducts();
    const filtered = current.filter(p => p.id !== id);
    setLocalProducts(filtered);
  },

  /**
   * Reset catalogue to default verified Thyrocare test list
   */
  async resetToDefault(): Promise<Product[]> {
    setLocalProducts(initialProducts);
    return initialProducts;
  },

  /**
   * Get all customer booking orders
   */
  async getBookings(): Promise<Booking[]> {
    return getLocalBookings();
  },

  /**
   * Save a new customer booking to Firestore and Local Storage
   */
  async saveBooking(booking: Booking): Promise<Booking> {
    // Save to Firestore Realtime Database
    try {
      await firestoreService.saveBooking(booking);
    } catch (err) {
      console.warn('Firestore saveBooking warning:', err);
    }

    const current = getLocalBookings();
    const updatedList = [booking, ...current];
    setLocalBookings(updatedList);
    return booking;
  },

  /**
   * Update status of an order in Firestore
   */
  async updateBookingStatus(id: string, status: BookingStatus): Promise<void> {
    try {
      await firestoreService.updateBookingStatus(id, status);
    } catch (err) {
      console.warn('Firestore updateBookingStatus warning:', err);
    }

    const current = getLocalBookings();
    const item = current.find(b => b.id === id);
    if (item) {
      item.booking_status = status;
      setLocalBookings(current);
    }
  },

  /**
   * Bulk import catalogue from JSON or CSV
   */
  async importProducts(imported: Product[]): Promise<number> {
    const validated = imported.map(p => ({
      ...p,
      final_price: calculateFinalPrice(p.mrp, p.discount_type || 'percentage', p.discount_value || 0),
      is_active: p.is_active !== false
    }));

    for (const p of validated) {
      try {
        await firestoreService.saveProduct(p);
      } catch (e) {
        // continue
      }
    }

    const current = getLocalProducts();
    const map = new Map<string, Product>();
    current.forEach(p => map.set(p.test_code, p));
    validated.forEach(p => map.set(p.test_code, p));
    const merged = Array.from(map.values());
    setLocalProducts(merged);
    return validated.length;
  },

  /**
   * Get user profile by email
   */
  async getUserByEmail(email: string): Promise<import('../types').UserProfile | null> {
    const cleanEmail = email.trim().toLowerCase();
    const users = getLocalUsers();
    return users.find(u => u.email && u.email.trim().toLowerCase() === cleanEmail) || null;
  },

  /**
   * Get user profile by phone or email
   */
  async getUserProfile(identifier: string): Promise<import('../types').UserProfile | null> {
    const clean = identifier.trim().toLowerCase();
    const cleanPhone = identifier.replace(/\D/g, '');
    const users = getLocalUsers();
    return users.find(u => 
      (u.email && u.email.trim().toLowerCase() === clean) ||
      (cleanPhone && u.phone && u.phone.replace(/\D/g, '') === cleanPhone)
    ) || null;
  },

  /**
   * Save or update user profile
   */
  async saveUserProfile(profile: import('../types').UserProfile): Promise<import('../types').UserProfile> {
    const cleanEmail = profile.email ? profile.email.trim().toLowerCase() : '';
    const current = getLocalUsers();
    const existingIndex = current.findIndex(u => 
      (cleanEmail && u.email && u.email.trim().toLowerCase() === cleanEmail) || 
      u.id === profile.id
    );
    
    if (existingIndex >= 0) {
      current[existingIndex] = { ...current[existingIndex], ...profile };
    } else {
      current.push(profile);
    }
    setLocalUsers(current);
    return profile;
  },

  /**
   * Get bookings matching a patient's user_id, email or phone
   */
  async getBookingsForUser(identifier: { email?: string; userId?: string; phone?: string }): Promise<Booking[]> {
    const cleanPhone = identifier.phone?.replace(/\D/g, '');
    const all = await this.getBookings();
    return all.filter(b => {
      const matchUser = identifier.userId && b.user_id === identifier.userId;
      const matchPhone = cleanPhone && b.phone && b.phone.replace(/\D/g, '') === cleanPhone;
      return matchUser || matchPhone;
    });
  },

  /**
   * Legacy phone helper for backward compatibility
   */
  async getBookingsForPhone(phone: string, userId?: string): Promise<Booking[]> {
    return this.getBookingsForUser({ phone, userId });
  }
};
