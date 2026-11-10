# Thyrocare Hariharpara – Diagnostic Booking Website

A mobile-first diagnostic test booking website for **Thyrocare Hariharpara**, Murshidabad, West Bengal, India.

## Business Details
- **Name:** Thyrocare Hariharpara
- **Type:** Diagnostic Test Booking & Sample Collection Service
- **Location:** Main Road, Near Bus Stand, Hariharpara, Murshidabad, West Bengal - 742166
- **WhatsApp Booking Helpline:** [+91 7864028283](https://wa.me/917864028283)
- **Languages:** Bengali (বাংলা) & English (EN)
- **Sample Collection:**
  - 🏡 Home Sample Collection (doorstep phlebotomist service)
  - 🏥 Visit Collection Centre (Hariharpara centre walk-in)
- **Legal Status:** Authorized Independent Franchise Collection Centre for Thyrocare Technologies Limited. (All samples processed at NABL/CAP-accredited central reference laboratories).

---

## Key Features

1. **Dual Language Support (Bengali & English)**
   - Instant language toggle in header with persistent storage.
   - All tests, categories, badges, booking instructions, and error messages translated.

2. **Accurate Pricing & Discount System**
   - Strictly enforces MRP compliance (never exposes internal "Your Rate").
   - Final Price calculated as:
     - Percentage: `MRP - (MRP * Discount% / 100)`
     - Fixed: `MRP - Fixed Discount`
     - Never allows negative prices.
   - Original MRP with strikethrough and calculated savings badge.

3. **Catalogue with Real-Time Instant Search & Filters**
   - Over 40+ authentic Thyrocare tests and packages (Aarogyam 1.1, 1.2, 1.3, 1.7, 1.8, Thyroid Total/Free, Lipid Profile, LFT, KFT/RFT, CBC, HbA1c, Vitamin D/B12, etc.).
   - Filter by: All, Health Packages, Profiles, Individual Tests, Popular Tests.
   - Sort by: Featured, Price Low to High, Price High to Low, Alphabetical.

4. **Persistent Shopping Cart**
   - Add/remove tests, adjust patient quantity.
   - Subtotal, total franchise discount, and final payable amount.
   - LocalStorage synchronization prevents data loss on page refresh.

5. **Patient Booking Form & WhatsApp Integration**
   - Validates Patient Name, Age, Gender, 10-digit Indian mobile number, full address, collection preference, and preferred collection date.
   - Direct click-to-chat integration sending formatted WhatsApp message to `+91 7864028283`.
   - Strictly adheres to no-false-confirmation rule (clearly instructs user to send the WhatsApp message for slot confirmation).

6. **Secure Admin Dashboard**
   - Protected staff access (Default passcode: `thyrocare2026`).
   - Order Management: view all patient orders, filter by status (`Pending`, `Contacted`, `Confirmed`, `Sample Collected`, `Completed`, `Cancelled`), click-to-chat with patients.
   - Product Management: Add, edit, delete tests, update codes, change MRP, adjust discounts, toggle active/popular status.
   - Bulk Discount Tool: Apply festival percentage/rupee discount across categories.
   - Catalogue Import/Export: Download CSV/JSON, upload new price lists.
   - Supabase Database Inspector: Full SQL schema viewer and copy-to-clipboard.

7. **Advanced SEO & Social Sharing**
   - Canonical URL, OpenGraph tags, Twitter card tags.
   - Embedded Schema.org `MedicalBusiness` / `DiagnosticLab` JSON-LD.
   - `public/robots.txt` and `public/sitemap.xml`.

---

## Tech Stack
- **Framework:** React 19 / Vite / TypeScript
- **Styling:** Tailwind CSS (White background, purple `#6b21a8` and deep blue accents)
- **Icons:** Lucide React
- **Database:** Supabase (PostgreSQL with RLS) + Offline LocalStorage Fallback
- **Hosting:** Vercel

---

## Environment Variables

Copy `.env.example` to `.env`:

```bash
# WhatsApp booking destination phone number
VITE_WHATSAPP_PHONE="917864028283"
VITE_BUSINESS_NAME="Thyrocare Hariharpara"
VITE_BUSINESS_LOCATION="Hariharpara, Murshidabad, West Bengal"

# Supabase database (Optional: if omitted, app runs in local storage demo mode)
VITE_SUPABASE_URL="https://your-project.supabase.co"
VITE_SUPABASE_ANON_KEY="your-anon-key"
```

---

## Supabase Database Setup

1. Create a project at [supabase.com](https://supabase.com).
2. Open the **SQL Editor** in your Supabase dashboard.
3. Open `supabase-schema.sql` from this repository, paste its contents, and click **Run**.
4. Copy your project's URL and Anon Key from **Project Settings > API** into your `.env` file.

The schema creates:
- `products`: Product catalogue with test codes, MRP, discounts, fasting, sample type.
- `bookings`: Patient booking records with status tracking.
- `booking_items`: Individual tests/packages per booking.
- `admin_users`: Administrative roles.
- Row Level Security (RLS) policies for security.

---

## Vercel Deployment Instructions

1. Push your repository to GitHub or GitLab.
2. Sign in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Select your repository.
4. Set Framework Preset to **Vite** (Build Command: `npm run build`, Output Directory: `dist`).
5. Under **Environment Variables**, add:
   - `VITE_WHATSAPP_PHONE`: `917864028283`
   - `VITE_SUPABASE_URL`: (your Supabase URL)
   - `VITE_SUPABASE_ANON_KEY`: (your Supabase Anon Key)
6. Click **Deploy**. Your website will be live worldwide in seconds!
