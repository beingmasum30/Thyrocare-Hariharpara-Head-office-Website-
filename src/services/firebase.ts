import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  onSnapshot, 
  updateDoc, 
  deleteDoc,
  getDocFromServer,
  query,
  where,
  orderBy
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';
import { Booking, Product, BookingStatus } from '../types';

// Initialize Firebase App
export const app = initializeApp(firebaseConfig);

// Initialize Firestore Database with explicit Database ID
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Connection test helper
export async function testFirestoreConnection(): Promise<boolean> {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
    console.log('🔥 Firestore connection successful!');
    return true;
  } catch (error) {
    if (error instanceof Error && error.message.includes('offline')) {
      console.warn('Firestore client is offline.');
    }
    return false;
  }
}

// Real-time Firestore Service for Patient Bookings and Product Catalogue
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
        // Sort newest first
        bookingsData.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        onUpdate(bookingsData);
      },
      (error) => {
        console.error('Real-time bookings sync error:', error);
      }
    );
  },

  // Save / Create a new booking
  async saveBooking(booking: Booking): Promise<void> {
    const docRef = doc(db, 'bookings', booking.id);
    await setDoc(docRef, booking);
  },

  // Update booking status in real-time
  async updateBookingStatus(bookingId: string, status: BookingStatus): Promise<void> {
    const docRef = doc(db, 'bookings', bookingId);
    await updateDoc(docRef, { booking_status: status });
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
        console.error('Real-time user bookings error:', error);
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
        console.error('Real-time products sync error:', error);
      }
    );
  },

  // Save product to Firestore
  async saveProduct(product: Product): Promise<void> {
    const docRef = doc(db, 'products', product.id);
    await setDoc(docRef, product);
  },

  // Delete product from Firestore
  async deleteProduct(productId: string): Promise<void> {
    const docRef = doc(db, 'products', productId);
    await deleteDoc(docRef);
  }
};
