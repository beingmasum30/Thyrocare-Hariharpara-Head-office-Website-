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
import { ScrollReveal } from './components/ScrollReveal';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTopButton } from './components/BackToTopButton';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

const MainLayout: React.FC = () => {
  const { notification, setIsAdminOpen } = useApp();

  // Ensure Admin Login never opens automatically on page load in desktop browsers.
  // Clean any stale /admin, #admin, or ?admin from browser URL history/autocomplete on mount.
  React.useEffect(() => {
    setIsAdminOpen(false);

    const pathname = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    const search = window.location.search.toLowerCase();

    if (
      pathname.includes('admin') ||
      pathname.includes('portal') ||
      hash.includes('admin') ||
      search.includes('admin') ||
      search.includes('portal')
    ) {
      window.history.replaceState(null, '', '/');
    }

    const handleHashChange = () => {
      const currentHash = window.location.hash.toLowerCase();
      if (currentHash === '#admin' || currentHash === '#admin-portal' || currentHash === '#/admin') {
        setIsAdminOpen(true);
        window.history.replaceState(null, '', '/');
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        setIsAdminOpen(true);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setIsAdminOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfdfd] text-slate-900 font-sans selection:bg-[#e23744] selection:text-white pb-16 md:pb-0">
      {/* Top Scroll Reading Progress Indicator */}
      <ScrollProgress />

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

      {/* Hero Promotional Banner Carousel with initial page load fade-in animation */}
      <ScrollReveal animation="fade-in" duration={600}>
        <HeroCarousel />
      </ScrollReveal>

      {/* "What's In Store For You" */}
      <ScrollReveal animation="fade-up" delay={50}>
        <WhatsInStore />
      </ScrollReveal>

      {/* "Browse By Health Concern" */}
      <ScrollReveal animation="fade-left" delay={100}>
        <HealthConcerns />
      </ScrollReveal>

      {/* "Request Callback" Prominent Button */}
      <ScrollReveal animation="zoom-in" delay={120}>
        <RequestCallbackBar />
      </ScrollReveal>

      {/* Popular Health Packages */}
      <ScrollReveal animation="fade-up" delay={100}>
        <PopularPackagesSection />
      </ScrollReveal>

      {/* All Tests & Package Catalogue with Search & Filter */}
      <ScrollReveal animation="fade-down" delay={100}>
        <CatalogueSection />
      </ScrollReveal>

      {/* Why Choose Us */}
      <ScrollReveal animation="fade-right" delay={100}>
        <WhyChooseUs />
      </ScrollReveal>

      {/* How It Works */}
      <ScrollReveal animation="fade-up" delay={100}>
        <HowItWorks />
      </ScrollReveal>

      {/* Sample Collection Options */}
      <ScrollReveal animation="fade-left" delay={100}>
        <SampleCollectionSection />
      </ScrollReveal>

      {/* Contact & Hariharpara Location */}
      <ScrollReveal animation="zoom-in" delay={100}>
        <ContactSection />
      </ScrollReveal>

      {/* Footer */}
      <ScrollReveal animation="fade-in" delay={100}>
        <Footer />
      </ScrollReveal>

      {/* Floating Back to Top Button */}
      <BackToTopButton />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Sticky Mobile Bottom Navigation */}
      <StickyMobileNav />

      {/* Modals & Drawers */}
      <ProductDetailModal />
      <CartDrawer />
      <BookingModal />
      <UserAuthModal />
      <UserProfileModal />
      <AdminDashboard />
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
