export type ProductCategory = 'package' | 'profile' | 'test';

export type DiscountType = 'percentage' | 'fixed' | 'none';

export interface Product {
  id: string;
  test_code: string;
  name: string;
  name_bn: string;
  category: ProductCategory;
  mrp: number; // MRP as mandated (never 'Your Rate')
  discount_type: DiscountType;
  discount_value: number; // percentage (e.g. 25) or fixed rupees (e.g. 200)
  final_price: number;
  description: string;
  description_bn?: string;
  fasting_required?: boolean;
  fasting_duration?: string;
  sample_type?: string;
  turnaround_time?: string;
  parameters_count?: number;
  included_tests?: string[];
  is_popular?: boolean;
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type BookingStatus = 
  | 'Pending' 
  | 'Contacted' 
  | 'Confirmed' 
  | 'Sample Collected' 
  | 'Completed' 
  | 'Cancelled';

export type CollectionPreference = 
  | 'Home Sample Collection' 
  | 'Visit Collection Centre';

export interface BookingItem {
  product_id: string;
  product_name: string;
  test_code: string;
  price: number;
  quantity: number;
}

export interface Booking {
  id: string;
  user_id?: string;
  patient_name: string;
  age: number | string;
  gender: 'Male' | 'Female' | 'Other';
  phone: string;
  address: string;
  pincode?: string;
  area?: string;
  latitude?: number;
  longitude?: number;
  gps_accuracy?: number;
  maps_link?: string;
  location_mode?: 'gps' | 'manual';
  collection_type: CollectionPreference;
  preferred_date: string;
  additional_instructions?: string;
  doctor_ref?: string;
  subtotal: number;
  total_discount: number;
  final_total: number;
  booking_status: BookingStatus;
  whatsapp_opened: boolean;
  created_at: string;
  items: BookingItem[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  auth_provider: 'google' | 'email';
  is_verified: boolean;
  age?: number | string;
  gender?: 'Male' | 'Female' | 'Other';
  address?: string;
  pincode?: string;
  area?: string;
  created_at: string;
}

export type Language = 'en' | 'bn';

