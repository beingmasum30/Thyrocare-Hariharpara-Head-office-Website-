import React from 'react';
import { useApp } from '../context/AppContext';
import { Home, Search, ShoppingBag, MessageSquare, User } from 'lucide-react';
import { WHATSAPP_PHONE } from '../utils/whatsapp';

export const StickyMobileNav: React.FC = () => {
  const { 
    cartCount, 
    setIsCartOpen, 
    t, 
    language, 
    currentUser, 
    setIsAuthModalOpen, 
    setIsProfileModalOpen 
  } = useApp();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const focusSearch = () => {
    scrollTo('catalog');
    const input = document.getElementById('search-tests-input');
    if (input) {
      input.focus();
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl py-1 px-2">
      <div className="flex items-center justify-around">
        {/* Home */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex flex-col items-center justify-center py-1 px-2 text-slate-600 hover:text-[#e23744] active:scale-95 transition-all cursor-pointer"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-medium mt-0.5">{t.navHome}</span>
        </button>

        {/* Search */}
        <button
          onClick={focusSearch}
          className="flex flex-col items-center justify-center py-1 px-2 text-slate-600 hover:text-[#e23744] active:scale-95 transition-all cursor-pointer"
        >
          <Search className="w-5 h-5" />
          <span className="text-[10px] font-medium mt-0.5">{language === 'bn' ? 'খুঁজুন' : 'Search'}</span>
        </button>

        {/* Cart */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center justify-center py-1 px-2 text-slate-600 hover:text-[#e23744] active:scale-95 transition-all cursor-pointer"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2.5 bg-[#e23744] text-white font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center border border-white">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-medium mt-0.5">{t.cart}</span>
        </button>

        {/* Free Patient Account / Login */}
        <button
          onClick={() => {
            if (currentUser) {
              setIsProfileModalOpen(true);
            } else {
              setIsAuthModalOpen(true);
            }
          }}
          className={`flex flex-col items-center justify-center py-1 px-2 active:scale-95 transition-all cursor-pointer ${
            currentUser ? 'text-purple-700' : 'text-slate-600 hover:text-[#e23744]'
          }`}
        >
          <div className="relative">
            {currentUser ? (
              <div className="w-5 h-5 rounded-full bg-purple-700 text-white flex items-center justify-center text-[10px] font-bold">
                {currentUser.name.charAt(0).toUpperCase()}
              </div>
            ) : (
              <User className="w-5 h-5" />
            )}
            {currentUser && (
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-white" />
            )}
          </div>
          <span className="text-[10px] font-medium mt-0.5">
            {currentUser 
              ? (language === 'bn' ? 'প্রোফাইল' : 'Profile') 
              : (language === 'bn' ? 'লগইন' : 'Login')}
          </span>
        </button>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hello Thyrocare Hariharpara, I want to book a blood test / health checkup.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-2 text-emerald-600 hover:text-emerald-700 active:scale-95 transition-all cursor-pointer"
        >
          <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
          </div>
          <span className="text-[10px] font-semibold text-emerald-700 mt-0.5">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
};

