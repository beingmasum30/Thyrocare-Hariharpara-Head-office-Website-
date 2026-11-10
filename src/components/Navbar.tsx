import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Menu, 
  X, 
  ShoppingCart, 
  MapPin, 
  ChevronDown, 
  ChevronRight, 
  Search, 
  Phone,
  ShieldCheck,
  Check,
  User,
  UserCheck
} from 'lucide-react';
import { WHATSAPP_PHONE } from '../utils/whatsapp';
import { formatCurrency } from '../utils/pricing';
import { ThyrocareLogo } from './ThyrocareLogo';

export const Navbar: React.FC = () => {
  const { 
    language, 
    setLanguage, 
    t, 
    cartCount, 
    cartTotal,
    setIsCartOpen,
    currentUser,
    setIsAuthModalOpen,
    setIsProfileModalOpen,
    searchQuery,
    setSearchQuery,
    setSelectedCategory,
    selectedVillage,
    setIsLocationModalOpen
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string, categoryFilter?: string) => {
    if (categoryFilter) {
      setSelectedCategory(categoryFilter);
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200/90 shadow-2xs">
      
      {/* 1. TOP NAVBAR: Menu | Thyrocare Logo | Language Switcher | Patient Account | Cart Icon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          
          {/* Left: Hamburger Menu + Official Logo */}
          <div className="flex items-center space-x-1.5 sm:space-x-3 min-w-0">
            {/* Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-slate-800 hover:text-[#e23744] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer shrink-0"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>

            {/* Official Thyrocare Logo with HARIHARPARA directly below */}
            <div 
              onClick={() => scrollTo('hero')} 
              title="Thyrocare Hariharpara"
              className="cursor-pointer select-none group shrink-0 min-w-0"
            >
              <ThyrocareLogo size="md" showTagline={false} showBranch={true} variant="badge" />
            </div>
          </div>

          {/* Right: Language Toggle + Free User Login / Profile + Cart Icon */}
          <div className="flex items-center space-x-1.5 sm:space-x-2.5 shrink-0">
            
            {/* Bilingual Switcher (EN / বাংলা) */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-[11px] sm:text-xs font-semibold">
              <button
                onClick={() => setLanguage('en')}
                className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#e23744] text-white shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('bn')}
                className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md transition-all cursor-pointer ${
                  language === 'bn'
                    ? 'bg-[#e23744] text-white shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                বাংলা
              </button>
            </div>

            {/* Free Patient Login or Active Profile Button */}
            {currentUser ? (
              <button
                onClick={() => setIsProfileModalOpen(true)}
                className="flex items-center space-x-1.5 py-1 px-2 sm:px-2.5 bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200 rounded-xl transition-all cursor-pointer text-xs font-bold"
                title="View Patient Profile & Bookings"
              >
                <div className="w-5 h-5 rounded-full bg-purple-700 text-white flex items-center justify-center text-[10px] font-bold">
                  {currentUser.name.charAt(0).toUpperCase()}
                </div>
                <span className="hidden sm:inline truncate max-w-[80px]">
                  {currentUser.name.split(' ')[0]}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </button>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center space-x-1 py-1 px-2 sm:px-2.5 bg-slate-100 hover:bg-rose-50 text-slate-800 hover:text-[#e23744] border border-slate-200 hover:border-rose-200 rounded-xl transition-all cursor-pointer text-xs font-bold"
                title="Free Patient Login"
              >
                <User className="w-3.5 h-3.5 text-slate-600" />
                <span className="text-[11px] sm:text-xs">
                  {language === 'bn' ? 'লগইন' : 'Login'}
                </span>
                <span className="hidden md:inline text-[9px] bg-emerald-100 text-emerald-800 px-1 rounded-sm uppercase font-black">
                  Free
                </span>
              </button>
            )}

            {/* Shopping Cart Icon with Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-1.5 text-slate-800 hover:text-[#e23744] hover:bg-slate-100 rounded-xl transition-all cursor-pointer shrink-0"
              aria-label="View Cart"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
              {cartCount > 0 && (
                <span className="absolute 0 top-0.5 right-0.5 bg-[#e23744] text-white font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* 2. LOCATION & HEALTH CONCERN STRIP matching screenshot */}
      <div className="bg-slate-50/90 border-t border-b border-slate-200/80 text-xs text-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
          
          {/* Left: Location Pin Dropdown */}
          <button
            onClick={() => setIsLocationModalOpen(true)}
            className="flex items-center space-x-1.5 hover:text-[#e23744] transition-colors py-1 cursor-pointer font-medium truncate max-w-[65%] sm:max-w-none group"
            title={language === 'bn' ? 'গ্রাম বা পিনকোড পরিবর্তন করতে ক্লিক করুন' : 'Click to select Village / PIN code'}
          >
            <MapPin className="w-4 h-4 text-[#e23744] shrink-0" />
            <span className="truncate font-bold text-slate-900 group-hover:text-[#e23744]">
              {selectedVillage.pincode}, {language === 'bn' ? selectedVillage.name_bn : selectedVillage.name_en}
            </span>
            <span className="hidden sm:inline text-slate-400 font-normal">
              ({selectedVillage.gram_panchayat})
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 group-hover:text-[#e23744]" />
          </button>

          {/* Vertical Divider */}
          <div className="h-4 w-px bg-slate-300 mx-2" />

          {/* Right: Browse By Health Concern shortcut */}
          <button
            onClick={() => {
              const el = document.getElementById('health-concerns');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center space-x-1 hover:text-[#e23744] transition-colors py-1 cursor-pointer font-semibold text-slate-700 shrink-0"
          >
            <span>{language === 'bn' ? 'সমস্যা অনুযায়ী টেস্ট' : 'Browse By Health Concern'}</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>

        </div>
      </div>

      {/* 3. BIG ROUNDED SEARCH BAR matching screenshot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="relative flex items-center bg-white border border-slate-300 rounded-2xl shadow-xs focus-within:border-[#e23744] focus-within:ring-2 focus-within:ring-rose-500/10 transition-all">
          <Search className="w-5 h-5 text-slate-400 ml-4 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              const el = document.getElementById('catalog');
              if (el && !searchQuery) {
                // Keep input in view
              }
            }}
            placeholder={language === 'bn' ? 'টেস্ট বা হেলথ প্যাকেজ সার্চ করুন...' : 'Search for Tests/Packages'}
            className="w-full py-3 pl-3 pr-10 text-sm text-slate-900 placeholder-slate-400 bg-transparent rounded-2xl focus:outline-hidden"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="p-2 text-slate-400 hover:text-slate-600 mr-2"
              title="Clear Search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {/* Patient Account Quick Action */}
            <div className="p-2 mb-2 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
              <div className="flex items-center space-x-2.5 min-w-0">
                <div className="w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-xs shrink-0">
                  {currentUser ? currentUser.name.charAt(0).toUpperCase() : <User className="w-4 h-4" />}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-900 truncate">
                    {currentUser ? currentUser.name : (language === 'bn' ? 'পেশেন্ট ফ্রি লগইন' : 'Patient Free Login')}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate max-w-[160px]">
                    {currentUser 
                      ? (currentUser.email || (currentUser.phone ? `+91 ${currentUser.phone}` : 'Verified Account')) 
                      : (language === 'bn' ? 'গুগল বা ইমেইল দিয়ে লগইন করুন' : 'Login with Google or Email')}
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (currentUser) {
                    setIsProfileModalOpen(true);
                  } else {
                    setIsAuthModalOpen(true);
                  }
                }}
                className="bg-[#e23744] hover:bg-rose-700 text-white text-xs font-bold py-1.5 px-3 rounded-xl shadow-xs shrink-0 cursor-pointer"
              >
                {currentUser ? (language === 'bn' ? 'প্রোফাইল' : 'Profile') : (language === 'bn' ? 'লগইন' : 'Login')}
              </button>
            </div>

            <button
              onClick={() => scrollTo('hero')}
              className="w-full text-left px-3 py-2.5 text-slate-800 font-semibold hover:bg-rose-50 hover:text-[#e23744] rounded-xl"
            >
              {t.navHome}
            </button>
            <button
              onClick={() => scrollTo('packages', 'package')}
              className="w-full text-left px-3 py-2.5 text-[#e23744] font-bold hover:bg-rose-50 rounded-xl"
            >
              {t.navPackages} (Aarogyam)
            </button>
            <button
              onClick={() => scrollTo('catalog', 'all')}
              className="w-full text-left px-3 py-2.5 text-slate-800 font-semibold hover:bg-rose-50 hover:text-[#e23744] rounded-xl"
            >
              {t.navAllTests}
            </button>
            <button
              onClick={() => scrollTo('health-concerns')}
              className="w-full text-left px-3 py-2.5 text-slate-800 font-semibold hover:bg-rose-50 hover:text-[#e23744] rounded-xl"
            >
              {language === 'bn' ? 'সমস্যা ও লক্ষণ অনুসারে' : 'Browse By Health Concern'}
            </button>
            <button
              onClick={() => scrollTo('sample-collection')}
              className="w-full text-left px-3 py-2.5 text-slate-800 font-semibold hover:bg-rose-50 hover:text-[#e23744] rounded-xl"
            >
              {t.collectionOptionsTitle}
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="w-full text-left px-3 py-2.5 text-slate-800 font-semibold hover:bg-rose-50 hover:text-[#e23744] rounded-xl"
            >
              {t.navContact} (Hariharpara)
            </button>

            <div className="pt-3 border-t border-slate-100">
              <a
                href={`tel:+917864028283`}
                className="w-full text-xs font-bold text-[#e23744] flex items-center justify-center space-x-2 py-2.5 px-3 bg-rose-50 hover:bg-rose-100 rounded-xl border border-rose-200 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>হরিহরপাড়া হেল্পলাইন: +91 7864028283</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </header>
  );
};
