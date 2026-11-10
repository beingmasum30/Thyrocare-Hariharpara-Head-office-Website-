import React, { useState, useEffect, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, Zap, ShieldCheck, Award } from 'lucide-react';

export const FastTypingBanner: React.FC = () => {
  const { language } = useApp();

  const phrases = useMemo(() => {
    return language === 'bn' ? [
      "হরিহরপাড়া ও নওদা ব্লকে ১০০% নির্ভুল ব্লাড টেস্ট ও হোম কালেকশন সেবা।",
      "অ্যাডভান্সড ভিটামিন, থাইরয়েড ও ফুল বডি চেকআপে ৫০% পর্যন্ত বিশেষ ছাড়!",
      "২৪ ঘণ্টার মধ্যে সরাসরি হোয়াটসঅ্যাপে NABL স্বীকৃত ডিজিটাল ল্যাব রিপোর্ট।",
      "হাইজিন সার্টিফাইড টেকনিশিয়ান দ্বারা ১০০% বারকোডেড টিউবে নমুনা সংগ্রহ।"
    ] : [
      "100% Accurate Blood Tests & Doorstep Sample Collection in Hariharpara.",
      "Save up to 50% OFF on Aarogyam Full Body & Vitamin Health Checkups!",
      "NABL Accredited Lab Reports Delivered Directly on WhatsApp within 24 Hours.",
      "Hygiene Certified Phlebotomists with 100% Barcoded Sterile Vacuum Tubes."
    ];
  }, [language]);

  const [phraseIndex, setPhraseIndex] = useState(0);

  // Smooth slide rotate every 4 seconds without any typing animation
  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex(prev => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [phrases.length]);

  const currentPhrase = phrases[phraseIndex % phrases.length];

  return (
    <div className="w-full max-w-full overflow-hidden bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 text-white rounded-2xl p-2.5 sm:p-3.5 mb-2.5 border border-rose-500/30 shadow-md relative group box-border">
      
      {/* Background Subtle Sparkle FX */}
      <div className="absolute top-0 right-0 -mt-2 -mr-2 w-16 h-16 bg-rose-500/10 rounded-full blur-lg pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-2 -ml-2 w-16 h-16 bg-purple-500/10 rounded-full blur-lg pointer-events-none" />

      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 max-w-full overflow-hidden">
        
        {/* Left Badge & Steady Clean Message */}
        <div className="flex items-center space-x-2.5 min-w-0 max-w-full flex-1 overflow-hidden">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#e23744] to-amber-500 flex items-center justify-center shrink-0 shadow-xs shadow-rose-600/30">
            <Zap className="w-3.5 h-3.5 text-white fill-current" />
          </div>

          <div className="min-w-0 flex-1 overflow-hidden">
            <div className="flex items-center space-x-1.5 text-[9px] sm:text-[10px] uppercase font-black tracking-wider text-amber-400 max-w-full overflow-hidden">
              <Sparkles className="w-3 h-3 text-amber-300 shrink-0" />
              <span className="truncate max-w-[200px] sm:max-w-none">THYROCARE HARIHARPARA ANNOUNCEMENT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            </div>

            {/* Steady Text Display with solid high contrast white text */}
            <div className="text-[11px] sm:text-xs font-bold text-white mt-0.5 tracking-tight min-h-[18px] max-w-full overflow-hidden leading-tight truncate">
              <span className="text-white font-extrabold truncate block">
                {currentPhrase}
              </span>
            </div>
          </div>
        </div>

        {/* Right Quality Seals & Partner Code */}
        <div className="flex flex-wrap items-center gap-1.5 shrink-0 text-[9px] sm:text-[10px] font-bold text-slate-300 bg-slate-800/90 px-2 py-0.5 rounded-lg border border-slate-700 max-w-full">
          <span className="text-amber-400 font-extrabold bg-amber-950/60 px-1.5 py-0.2 rounded border border-amber-800/60 whitespace-nowrap">
            Partner: P7523
          </span>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="flex items-center space-x-1 whitespace-nowrap">
            <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>NABL Accredited</span>
          </span>
        </div>

      </div>
    </div>
  );
};
