import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 p-3 bg-slate-900/90 hover:bg-slate-950 text-white rounded-2xl shadow-xl border border-slate-700/80 backdrop-blur-xs transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center group"
    >
      <ChevronUp className="w-5 h-5 text-amber-400 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
};
