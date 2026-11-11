import React, { useState, useRef, useEffect, useMemo } from 'react';
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
  UserCheck,
  Plus,
  Sparkles,
  Clock,
  ArrowRight
} from 'lucide-react';
import { WHATSAPP_PHONE } from '../utils/whatsapp';
import { formatCurrency } from '../utils/pricing';
import { ThyrocareLogo } from './ThyrocareLogo';
import { Product } from '../types';

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
    setIsLocationModalOpen,
    products,
    addToCart,
    isInCart,
    setSelectedProduct
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Scroll shadow effect listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Compute live search results from active products
  const liveSearchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return products.filter((p) => {
      if (p.is_active === false) return false;
      return (
        p.name.toLowerCase().includes(q) ||
        (p.name_bn && p.name_bn.toLowerCase().includes(q)) ||
        p.test_code.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.included_tests && p.included_tests.some((t) => t.toLowerCase().includes(q)))
      );
    });
  }, [products, searchQuery]);

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
    <header className={`sticky top-0 z-40 bg-white border-b border-slate-200 transition-all duration-300 text-slate-900 ${
      isScrolled ? 'shadow-md bg-white/95 backdrop-blur-xs' : 'shadow-xs'
    }`}>
      
      {/* 1. TOP NAVBAR: Menu | Thyrocare Logo | Language Switcher | Patient Account | Cart Icon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-16 py-1.5 gap-2">
          
          {/* Left: Hamburger Menu + Official Logo */}
          <div className="flex items-center space-x-1.5 sm:space-x-3 min-w-0">
            {/* Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer shrink-0"
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
              <ThyrocareLogo size="md" theme="light" showTagline={true} showBranch={true} />
            </div>
          </div>

          {/* Right: Language Toggle + Free User Login / Profile + Cart Icon */}
          <div className="flex items-center space-x-1.5 sm:space-x-2.5 shrink-0">
            
            {/* Ultra-compact Bilingual Switcher (EN / বাংলা) */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-md border border-slate-200 text-[10px] font-bold">
              <button
                onClick={() => setLanguage('en')}
                className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#e23744] text-white shadow-2xs font-black'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('bn')}
                className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                  language === 'bn'
                    ? 'bg-[#e23744] text-white shadow-2xs font-black'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                বাং
              </button>
            </div>

            {/* Free Patient Login or Active Profile Button */}
            {currentUser ? (
              <button
                onClick={() => setIsProfileModalOpen(true)}
                className="flex items-center space-x-1.5 py-1 px-2 sm:px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 rounded-xl transition-all cursor-pointer text-xs font-bold"
                title="View Patient Profile & Bookings"
              >
                <div className="w-5 h-5 rounded-full bg-[#e23744] text-white flex items-center justify-center text-[10px] font-bold">
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
                className="flex items-center space-x-1 py-1 px-2 sm:px-2.5 bg-slate-100 hover:bg-rose-50 text-slate-800 hover:text-[#e23744] border border-slate-200 rounded-xl transition-all cursor-pointer text-xs font-bold"
                title="Free Patient Login"
              >
                <User className="w-3.5 h-3.5 text-slate-600" />
                <span className="text-[11px] sm:text-xs">
                  {language === 'bn' ? 'লগইন' : 'Login'}
                </span>
                <span className="hidden md:inline text-[9px] bg-emerald-100 text-emerald-800 border border-emerald-300 px-1 rounded-sm uppercase font-black">
                  Free
                </span>
              </button>
            )}

            {/* Shopping Cart Icon with Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-1.5 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all cursor-pointer shrink-0"
              aria-label="View Cart"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-[#e23744] text-white font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* 2. LOCATION & HEALTH CONCERN STRIP */}
      <div className="bg-slate-50/90 border-t border-b border-slate-200 text-xs text-slate-700">
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
            <span className="hidden sm:inline text-slate-500 font-normal">
              ({selectedVillage.gram_panchayat})
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-500 shrink-0 group-hover:text-[#e23744]" />
          </button>

          {/* Vertical Divider */}
          <div className="h-4 w-px bg-slate-200 mx-2" />

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

      {/* 3. BIG ROUNDED SEARCH BAR WITH INSTANT LIVE RESULTS DROPDOWN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3" ref={searchContainerRef}>
        <div className="relative">
          <div className="relative flex items-center bg-white border border-slate-300 rounded-2xl shadow-xs focus-within:border-[#e23744] focus-within:ring-2 focus-within:ring-rose-500/10 transition-all">
            <Search className="w-5 h-5 text-slate-400 ml-4 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchFocused(true);
              }}
              onFocus={() => setIsSearchFocused(true)}
              placeholder={language === 'bn' ? 'টেস্ট বা হেলথ প্যাকেজ সার্চ করুন (যেমন: CBC, Thyroid, Sugar, Lipid)...' : 'Search for Tests/Packages (e.g. CBC, Thyroid, Sugar, Lipid)...'}
              className="w-full py-3 pl-3 pr-10 text-sm text-slate-900 placeholder-slate-400 bg-transparent rounded-2xl focus:outline-hidden"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="p-2 text-slate-400 hover:text-slate-600 mr-2 cursor-pointer"
                title="Clear Search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Live Search Results Dropdown Popup */}
          {isSearchFocused && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
              
              {/* If Query entered: show matching tests */}
              {searchQuery.trim().length > 0 ? (
                <div>
                  {/* Results Header */}
                  <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700">
                      {language === 'bn'
                        ? `${liveSearchResults.length} টি টেস্ট ও প্যাকেজ পাওয়া গেছে "${searchQuery}" এর জন্য`
                        : `${liveSearchResults.length} tests & packages found for "${searchQuery}"`}
                    </span>
                    <button
                      onClick={() => setIsSearchFocused(false)}
                      className="text-slate-400 hover:text-slate-600 font-semibold cursor-pointer"
                    >
                      {language === 'bn' ? 'বন্ধ করুন' : 'Close'}
                    </button>
                  </div>

                  {/* Results List */}
                  {liveSearchResults.length > 0 ? (
                    <div className="max-h-[60vh] overflow-y-auto divide-y divide-slate-100">
                      {liveSearchResults.slice(0, 8).map((product) => {
                        const inCart = isInCart(product.id);
                        return (
                          <div
                            key={product.id}
                            className="p-3 sm:p-3.5 hover:bg-rose-50/50 transition-colors flex items-center justify-between gap-3 group"
                          >
                            {/* Product Info */}
                            <div 
                              className="min-w-0 flex-1 cursor-pointer"
                              onClick={() => {
                                setSelectedProduct(product);
                                setIsSearchFocused(false);
                              }}
                            >
                              <div className="flex items-center space-x-2 mb-1 flex-wrap gap-y-1">
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                                  product.category === 'package' 
                                    ? 'bg-purple-100 text-purple-900 border border-purple-200' 
                                    : product.category === 'profile'
                                    ? 'bg-indigo-100 text-indigo-900 border border-indigo-200'
                                    : 'bg-rose-100 text-rose-900 border border-rose-200'
                                }`}>
                                  {product.category}
                                </span>
                                <span className="font-mono text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                                  {product.test_code}
                                </span>
                                {product.parameters_count && (
                                  <span className="text-[10px] text-slate-500 font-semibold">
                                    • {product.parameters_count} {language === 'bn' ? 'প্যারামিটার' : 'tests'}
                                  </span>
                                )}
                              </div>

                              <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#e23744] transition-colors truncate">
                                {language === 'bn' && product.name_bn ? product.name_bn : product.name}
                              </h4>
                              {language === 'bn' && product.name_bn && (
                                <p className="text-xs text-slate-500 truncate mt-0.5">
                                  {product.name}
                                </p>
                              )}
                            </div>

                            {/* Price & Action */}
                            <div className="flex items-center space-x-3 shrink-0">
                              <div className="text-right">
                                <div className="text-sm font-black text-purple-900">
                                  {formatCurrency(product.final_price)}
                                </div>
                                {product.mrp > product.final_price && (
                                  <div className="text-[11px] text-slate-400 line-through">
                                    {formatCurrency(product.mrp)}
                                  </div>
                                )}
                              </div>

                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  addToCart(product);
                                }}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-1 shadow-2xs ${
                                  inCart
                                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                                    : 'bg-[#e23744] hover:bg-rose-700 text-white shadow-xs'
                                }`}
                              >
                                {inCart ? (
                                  <>
                                    <Check className="w-3.5 h-3.5" />
                                    <span>{language === 'bn' ? 'যুক্ত' : 'Added'}</span>
                                  </>
                                ) : (
                                  <>
                                    <Plus className="w-3.5 h-3.5" />
                                    <span>{language === 'bn' ? 'বুক' : 'Book'}</span>
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        );
                      })}

                      {/* View All in Catalogue CTA */}
                      <button
                        onClick={() => {
                          setIsSearchFocused(false);
                          scrollTo('catalog', 'all');
                        }}
                        className="w-full py-3 px-4 bg-slate-50 hover:bg-rose-50 text-xs font-bold text-[#e23744] flex items-center justify-center space-x-1.5 transition-colors cursor-pointer border-t border-slate-100"
                      >
                        <span>
                          {language === 'bn' 
                            ? `সকল ${liveSearchResults.length} টি টেস্ট ক্যাটালগে দেখুন` 
                            : `View all ${liveSearchResults.length} results in Catalogue`}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    /* No results found state */
                    <div className="p-6 text-center space-y-3">
                      <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto">
                        <Search className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">
                          {language === 'bn' ? 'কোন টেস্ট পাওয়া যায়নি' : 'No matching tests found'}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                          {language === 'bn'
                            ? `"${searchQuery}" এর জন্য কিছু মেলেনি। অনুগ্রহ করে নিচের জনপ্রিয় টেস্টগুলো থেকে বেছে নিন:`
                            : `We couldn't find tests matching "${searchQuery}". Try selecting from popular searches below:`}
                        </p>
                      </div>

                      {/* Quick popular search pills */}
                      <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                        {['CBC', 'Thyroid', 'Lipid', 'HbA1c Sugar', 'Liver (LFT)', 'Vitamin D', 'Aarogyam'].map((term) => (
                          <button
                            key={term}
                            onClick={() => setSearchQuery(term)}
                            className="px-2.5 py-1 bg-slate-100 hover:bg-rose-100 text-slate-700 hover:text-[#e23744] text-xs rounded-lg font-semibold transition-colors cursor-pointer"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* When search input is empty but focused: show instant recommendations */
                <div className="p-4 space-y-3">
                  <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>{language === 'bn' ? 'জনপ্রিয় টেস্ট ও প্যাকেজ' : 'Popular Diagnostic Searches'}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: 'CBC (রক্ত পরীক্ষা)', query: 'CBC' },
                      { label: 'থাইরয়েড (TSH)', query: 'Thyroid' },
                      { label: 'লিপিড / কোলেস্টেরল', query: 'Lipid' },
                      { label: 'সুগার (HbA1c / ডায়াবেটিস)', query: 'HbA1c' },
                      { label: 'লিভার ফাংশন (LFT)', query: 'Liver' },
                      { label: 'কিডনি ফাংশন (KFT)', query: 'KFT' },
                      { label: 'ভিটামিন D ও B12', query: 'Vitamin' },
                      { label: 'আরোগ্যম ফুল বডি', query: 'Aarogyam' }
                    ].map((item) => (
                      <button
                        key={item.query}
                        onClick={() => {
                          setSearchQuery(item.query);
                        }}
                        className="px-3 py-1.5 bg-slate-50 hover:bg-rose-50 text-slate-700 hover:text-[#e23744] border border-slate-200 hover:border-rose-200 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-2xs"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>
      </div>

      {/* Navigation Drawer Menu / Sidebar with smooth scrolling and fixed backdrop */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-16 bg-slate-950/40 backdrop-blur-xs z-40 animate-in fade-in duration-150"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Smoothly Scrollable Drawer Container */}
          <div 
            className="fixed top-16 left-0 bottom-0 w-full sm:w-80 z-50 bg-white overflow-y-auto overscroll-contain shadow-2xl flex flex-col animate-in slide-in-from-top-2 duration-200 border-r border-slate-200"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="p-4 space-y-2 pb-28">
              {/* Drawer Top Header with Close */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {language === 'bn' ? 'মেনু ও সেবা সমূহ' : 'Navigation & Services'}
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Patient Account Quick Action */}
              <div className="p-2.5 mb-2 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
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

              {/* Navigation Links */}
              <button
                onClick={() => scrollTo('hero')}
                className="w-full text-left px-3.5 py-3 text-slate-800 font-semibold hover:bg-rose-50 hover:text-[#e23744] rounded-xl flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>{t.navHome}</span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </button>
              <button
                onClick={() => scrollTo('packages', 'package')}
                className="w-full text-left px-3.5 py-3 text-[#e23744] font-bold hover:bg-rose-50 rounded-xl flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>{t.navPackages} (Aarogyam)</span>
                <ChevronRight className="w-4 h-4 text-rose-300" />
              </button>
              <button
                onClick={() => scrollTo('catalog', 'all')}
                className="w-full text-left px-3.5 py-3 text-slate-800 font-semibold hover:bg-rose-50 hover:text-[#e23744] rounded-xl flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>{t.navAllTests}</span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </button>
              <button
                onClick={() => scrollTo('health-concerns')}
                className="w-full text-left px-3.5 py-3 text-slate-800 font-semibold hover:bg-rose-50 hover:text-[#e23744] rounded-xl flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>{language === 'bn' ? 'সমস্যা ও লক্ষণ অনুসারে টেস্ট' : 'Browse By Health Concern'}</span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </button>
              <button
                onClick={() => scrollTo('sample-collection')}
                className="w-full text-left px-3.5 py-3 text-slate-800 font-semibold hover:bg-rose-50 hover:text-[#e23744] rounded-xl flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>{t.collectionOptionsTitle}</span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="w-full text-left px-3.5 py-3 text-slate-800 font-semibold hover:bg-rose-50 hover:text-[#e23744] rounded-xl flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>{t.navContact} (হরিহরপাড়া সেন্টার)</span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </button>

              {/* Village selector link */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsLocationModalOpen(true);
                  }}
                  className="w-full text-left p-3 bg-rose-50/70 border border-rose-200/80 rounded-2xl flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center space-x-2 truncate">
                    <MapPin className="w-4 h-4 text-[#e23744] shrink-0" />
                    <div className="text-xs truncate">
                      <span className="font-bold text-slate-900 block truncate">
                        {language === 'bn' ? selectedVillage.name_bn : selectedVillage.name_en} ({selectedVillage.pincode})
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {language === 'bn' ? 'গ্রাম বা এলাকা পরিবর্তন করুন' : 'Change Village / PIN'}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-rose-400 shrink-0" />
                </button>
              </div>

              {/* Helpline direct call button */}
              <div className="pt-3 border-t border-slate-100">
                <a
                  href={`tel:+917864028283`}
                  className="w-full text-xs font-bold text-[#e23744] flex items-center justify-center space-x-2 py-3 px-3 bg-rose-50 hover:bg-rose-100 rounded-xl border border-rose-200 transition-colors shadow-2xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>হরিহরপাড়া হেল্পলাইন: +91 7864028283</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}

    </header>
  );
};
