import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { WhatsInStore } from './components/WhatsInStore';
import { HealthConcerns } from './components/HealthConcerns';
import { RequestCallbackBar } from './components/RequestCallbackBar';
import { PopularPackagesSection } from './components/PopularPackagesSection';
import { CatalogueSection } from './components/CatalogueSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { SampleCollectionSection } from './components/SampleCollectionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StickyMobileNav } from './components/StickyMobileNav';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { BookingModal } from './components/BookingModal';
import { AdminDashboard } from './components/AdminDashboard';
import { UserAuthModal } from './components/UserAuthModal';
import { UserProfileModal } from './components/UserProfileModal';
import { VillageSelectionModal } from './components/VillageSelectionModal';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

const MainLayout: React.FC = () => {
  const { notification, setIsAdminOpen } = useApp();

  // Direct Web URL Access Listeners for Thyrocare Hariharpara Admin Portal:
  // 1. Pathname: /admin, /admin-portal, /portal
  // 2. Hash: #admin, #admin-portal, #/admin
  // 3. Search query: ?admin, ?admin=login, ?portal=admin
  // 4. Keyboard Shortcut: Ctrl + Shift + A (or Cmd + Shift + A)
  React.useEffect(() => {
    const checkAdminRoute = () => {
      const pathname = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();

      const isAdminUrl = 
        pathname === '/admin' ||
        pathname === '/admin/' ||
        pathname.startsWith('/admin') ||
        pathname === '/admin-portal' ||
        pathname === '/portal' ||
        hash === '#admin' ||
        hash === '#admin-portal' ||
        hash === '#/admin' ||
        search.includes('admin=') ||
        search === '?admin' ||
        search.includes('portal=admin');

      if (isAdminUrl) {
        setIsAdminOpen(true);
      }
    };

    checkAdminRoute();
    window.addEventListener('hashchange', checkAdminRoute);
    window.addEventListener('popstate', checkAdminRoute);

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        setIsAdminOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('hashchange', checkAdminRoute);
      window.removeEventListener('popstate', checkAdminRoute);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setIsAdminOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfdfd] text-slate-900 font-sans selection:bg-[#e23744] selection:text-white pb-16 md:pb-0">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-4 right-4 z-60 max-w-sm bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center space-x-2.5 animate-in slide-in-from-top-2 duration-200">
          {notification.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
          {notification.type === 'error' && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />}
          {notification.type === 'info' && <Info className="w-5 h-5 text-blue-400 shrink-0" />}
          <span className="text-xs font-semibold">{notification.message}</span>
        </div>
      )}

      {/* Main Navigation Bar (Logo, Menu, Location Selector, Search Bar) */}
      <Navbar />

      {/* Hero Promotional Banner Carousel (Matching reference screenshot) */}
      <HeroCarousel />

      {/* "What's In Store For You" (4 Action Cards matching reference screenshot) */}
      <WhatsInStore />

      {/* "Browse By Health Concern" (matching reference screenshot) */}
      <HealthConcerns />

      {/* "Request Callback" Prominent Button (matching reference screenshot) */}
      <RequestCallbackBar />

      {/* Popular Health Packages (Aarogyam Packages) */}
      <PopularPackagesSection />

      {/* All Tests & Package Catalogue with Search & Filter */}
      <CatalogueSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* How It Works (Search -> Cart -> Details -> WhatsApp) */}
      <HowItWorks />

      {/* Sample Collection Options (Home Sample Collection vs Centre Visit) */}
      <SampleCollectionSection />

      {/* Contact & Hariharpara Location */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button (matching bottom-right of reference screenshot) */}
      <FloatingWhatsApp />

      {/* Sticky Mobile Bottom Navigation */}
      <StickyMobileNav />

      {/* Product Detail Modal */}
      <ProductDetailModal />

      {/* Shopping Cart Drawer */}
      <CartDrawer />

      {/* WhatsApp Patient Booking Modal */}
      <BookingModal />

      {/* Free User Authentication Modal */}
      <UserAuthModal />

      {/* Patient Profile & Order History Modal */}
      <UserProfileModal />

      {/* Secure Admin Dashboard */}
      <AdminDashboard />

      {/* Village and PIN Code Directory Selection Modal */}
      <VillageSelectionModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
