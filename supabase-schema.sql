-- ====================================================================
-- THYROCARE HARIHARPARA - SUPABASE DATABASE SCHEMA
-- Diagnostic Test Booking & Catalogue System
-- Location: Hariharpara, Murshidabad, West Bengal
-- WhatsApp: +91 7864028283
-- ====================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS public.products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    test_code VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    name_bn VARCHAR(255),
    category VARCHAR(50) NOT NULL CHECK (category IN ('package', 'profile', 'test')),
    mrp NUMERIC(10, 2) NOT NULL CHECK (mrp >= 0),
    discount_type VARCHAR(20) DEFAULT 'percentage' CHECK (discount_type IN ('percentage', 'fixed', 'none')),
    discount_value NUMERIC(10, 2) DEFAULT 0 CHECK (discount_value >= 0),
    final_price NUMERIC(10, 2) NOT NULL CHECK (final_price >= 0),
    description TEXT,
    description_bn TEXT,
    fasting_required BOOLEAN DEFAULT false,
    fasting_duration VARCHAR(50),
    sample_type VARCHAR(100) DEFAULT 'Blood / Serum',
    turnaround_time VARCHAR(100) DEFAULT '24 - 48 Hours',
    parameters_count INTEGER DEFAULT 1,
    included_tests TEXT[],
    is_popular BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. BOOKINGS TABLE
CREATE TABLE IF NOT EXISTS public.bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    patient_name VARCHAR(255) NOT NULL,
    age INTEGER NOT NULL CHECK (age > 0 AND age <= 130),
    gender VARCHAR(20) NOT NULL CHECK (gender IN ('Male', 'Female', 'Other')),
    phone VARCHAR(20) NOT NULL,
    address TEXT NOT NULL,
    collection_type VARCHAR(50) NOT NULL CHECK (collection_type IN ('Home Sample Collection', 'Visit Collection Centre')),
    preferred_date DATE NOT NULL,
    additional_instructions TEXT,
    doctor_ref VARCHAR(255),
    subtotal NUMERIC(10, 2) NOT NULL DEFAULT 0,
    total_discount NUMERIC(10, 2) NOT NULL DEFAULT 0,
    final_total NUMERIC(10, 2) NOT NULL DEFAULT 0,
    booking_status VARCHAR(50) DEFAULT 'Pending' CHECK (booking_status IN ('Pending', 'Contacted', 'Confirmed', 'Sample Collected', 'Completed', 'Cancelled')),
    whatsapp_opened BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. BOOKING ITEMS TABLE
CREATE TABLE IF NOT EXISTS public.booking_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    booking_id UUID NOT NULL REFERENCES public.bookings(id) ON DELETE CASCADE,
    product_id UUID REFERENCES public.products(id) ON DELETE SET NULL,
    product_name VARCHAR(255) NOT NULL,
    test_code VARCHAR(50) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1 CHECK (quantity > 0)
);

-- 5. ADMIN USERS TABLE
CREATE TABLE IF NOT EXISTS public.admin_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255),
    role VARCHAR(50) DEFAULT 'admin' CHECK (role IN ('superadmin', 'admin', 'operator')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. INDEXES FOR PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_products_category ON public.products(category);
CREATE INDEX IF NOT EXISTS idx_products_is_popular ON public.products(is_popular);
CREATE INDEX IF NOT EXISTS idx_products_is_active ON public.products(is_active);
CREATE INDEX IF NOT EXISTS idx_products_test_code ON public.products(test_code);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON public.bookings(booking_status);
CREATE INDEX IF NOT EXISTS idx_bookings_phone ON public.bookings(phone);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON public.bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_booking_items_booking_id ON public.booking_items(booking_id);

-- 7. ROW LEVEL SECURITY (RLS)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.booking_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Products: Everyone can read active products; Authenticated Admins can modify
CREATE POLICY "Public can view active products" 
ON public.products FOR SELECT 
USING (is_active = true OR auth.role() = 'authenticated');

CREATE POLICY "Admins can manage products" 
ON public.products FOR ALL 
USING (auth.role() = 'authenticated');

-- Bookings: Customers can insert their booking; Admins can read and update
CREATE POLICY "Public can insert bookings" 
ON public.bookings FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view and update bookings" 
ON public.bookings FOR ALL 
USING (auth.role() = 'authenticated');

-- Booking Items: Public can insert; Admins can view/modify
CREATE POLICY "Public can insert booking items" 
ON public.booking_items FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view booking items" 
ON public.booking_items FOR ALL 
USING (auth.role() = 'authenticated');
