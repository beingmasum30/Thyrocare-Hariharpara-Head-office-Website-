import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ChevronLeft, ChevronRight, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

import { FastTypingBanner } from './FastTypingBanner';

export const HeroCarousel: React.FC = () => {
  const { language, setSelectedCategory, setSelectedProduct, products, addToCart } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'slide-bogo',
      tag: language === 'bn' ? 'বিশেষ অফার' : 'Special Offer',
      title: language === 'bn' ? 'Buy 1 Get 1 FREE' : 'Buy 1 Get 1 FREE',
      subtitle: language === 'bn' ? 'বি অ্যাডভান্সড, বি আনস্টপেবল' : 'Be Advanced, Be Unstoppable',
      desc: language === 'bn' 
        ? 'অ্যাডভান্সড ফুল বডি চেকআপ ও ভিটামিন টেস্ট (৯২টি টেস্ট)' 
        : 'Advanced Full Body Checkup With Vitamins (92 Tests)',
      box1: { label: language === 'bn' ? '১ জনের জন্য @' : 'Book for 1 @', oldPrice: '₹2,200', newPrice: '₹1,440' },
      box2: { label: language === 'bn' ? '২ জনের জন্য @' : 'Book for 2 @', oldPrice: '₹4,400', newPrice: '₹2,200' },
      targetCode: 'AAROG13',
      bgGradient: 'from-amber-50 via-rose-50/60 to-orange-50',
      accentColor: 'bg-[#e23744]',
      badgeText: language === 'bn' ? 'সবচেয়ে জনপ্রিয়' : 'Trending Now'
    },
    {
      id: 'slide-aarogyam',
      tag: language === 'bn' ? 'আরোগ্যম ১.১' : 'Aarogyam 1.1',
      title: language === 'bn' ? 'সম্পূর্ণ বডি চেকআপ ও সিবিসি' : 'Full Body Checkup with CBC',
      subtitle: language === 'bn' ? 'থাইরয়েড, লিভার, কিডনি, লিপিড ও হিমোগ্রাম' : 'Thyroid, Liver, Kidney, Lipid & Complete Blood Count',
      desc: language === 'bn' 
        ? '৬১টি গুরুত্বপূর্ণ প্যারামিটার - ২৪ ঘণ্টার মধ্যে হোয়াটসঅ্যাপে রিপোর্ট' 
        : '61 Essential Health Parameters - Reports on WhatsApp within 24h',
      box1: { label: language === 'bn' ? 'মূল্য @' : 'Our Price @', oldPrice: '₹1,400', newPrice: '₹980' },
      box2: { label: language === 'bn' ? 'সাশ্রয়' : 'Discount', oldPrice: '', newPrice: '30% OFF' },
      targetCode: 'AAROG11',
      bgGradient: 'from-red-50 via-white to-pink-50',
      accentColor: 'bg-[#e23744]',
      badgeText: 'NABL Certified'
    },
    {
      id: 'slide-diabetes',
      tag: language === 'bn' ? 'ডায়াবেটিস ও হার্ট' : 'Diabetes & Heart',
      title: language === 'bn' ? 'ডায়াবেটিস ও কোলেস্টেরল প্রোফাইল' : 'Diabetic & Cardiac Screening',
      subtitle: language === 'bn' ? 'HbA1c + ফাস্টিং সুগার + লিপিড প্রোফাইল' : 'HbA1c + Fasting Sugar + Complete Lipid Profile',
      desc: language === 'bn' 
        ? 'গত ৩ মাসের গড় সুগার ও হার্টের স্বাস্থ্য পরীক্ষা মাত্র কয়েক মিনিটে' 
        : 'Monitor 3-month average sugar and cardiovascular risk factors effortlessly',
      box1: { label: language === 'bn' ? 'প্যাকেজ মূল্য @' : 'Package @', oldPrice: '₹1,150', newPrice: '₹750' },
      box2: { label: language === 'bn' ? 'সাশ্রয়' : 'Savings', oldPrice: '', newPrice: '35% OFF' },
      targetCode: 'DIAPRO',
      bgGradient: 'from-blue-50 via-indigo-50/50 to-white',
      accentColor: 'bg-indigo-600',
      badgeText: 'Doctor Recommended'
    },
    {
      id: 'slide-home',
      tag: language === 'bn' ? 'হোম কালেকশন' : 'Home Collection',
      title: language === 'bn' ? 'হরিহরপাড়ায় বাড়িতে রক্তের নমুনা সংগ্রহ' : 'Doorstep Blood Collection in Hariharpara',
      subtitle: language === 'bn' ? 'প্রশিক্ষিত টেকনিশিয়ান ও জীবাণুমুক্ত কিট' : 'Certified Phlebotomist with Sterile Vacuum Tubes',
      desc: language === 'bn' 
        ? '১০০% বারকোডেড টিউব, সম্পূর্ণ নিরাপদ ও ঝামেলামুক্ত সার্ভিস' 
        : '100% Barcoded sample handling ensuring zero mix-ups, right at your home',
      box1: { label: language === 'bn' ? 'হোম ভিজিট' : 'Doorstep Visit', oldPrice: '', newPrice: 'Available' },
      box2: { label: language === 'bn' ? 'সময়' : 'Time Slots', oldPrice: '', newPrice: '7 AM - 8 PM' },
      targetCode: 'all',
      bgGradient: 'from-emerald-50 via-teal-50/40 to-white',
      accentColor: 'bg-emerald-600',
      badgeText: 'Safe & Hygienic'
    }
  ];

  // Auto rotate carousel every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  const handleBookNow = (targetCode: string) => {
    if (targetCode === 'all') {
      const el = document.getElementById('catalog');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const found = products.find(p => p.test_code === targetCode);
    if (found) {
      addToCart(found);
      const el = document.getElementById('catalog');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setSelectedCategory('package');
      const el = document.getElementById('packages');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-3 pb-6 max-w-7xl mx-auto">
      {/* Fast Typing Animated Graphics FX Banner */}
      <FastTypingBanner />

      {/* Carousel Container */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-md">
        
        {/* Active Slide Card */}
        <div className={`p-6 sm:p-9 bg-gradient-to-r ${slide.bgGradient} transition-all duration-500 relative min-h-[280px] sm:min-h-[300px] flex flex-col justify-between`}>
          
          {/* Top Tag and Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2 max-w-full overflow-hidden">
            <span className="inline-block bg-[#e23744] text-white text-[11px] sm:text-xs font-black px-3 py-0.5 sm:py-1 rounded-r-full rounded-l-md uppercase tracking-wider shadow-xs shrink-0">
              {slide.tag}
            </span>

            <span className="inline-flex items-center space-x-1 text-[10px] sm:text-[11px] font-bold text-slate-700 bg-white/95 backdrop-blur-xs px-2.5 py-0.5 sm:py-1 rounded-full border border-slate-200 shadow-2xs shrink-0 max-w-full">
              <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />
              <span className="truncate">{slide.badgeText}</span>
            </span>
          </div>

          {/* Main Slide Content */}
          <div className="my-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Texts */}
            <div className="md:col-span-8 space-y-2">
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {slide.title}
              </h2>
              <p className="text-xs sm:text-sm font-bold text-[#e23744] uppercase tracking-wide">
                {slide.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-normal leading-relaxed">
                {slide.desc}
              </p>

              {/* Price comparison boxes matching screenshot */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <div className="bg-white/95 border border-slate-200/90 rounded-xl px-3 py-1.5 shadow-2xs text-xs">
                  <span className="text-slate-500 text-[11px] block">{slide.box1.label}</span>
                  <div className="flex items-baseline space-x-1.5 font-bold">
                    {slide.box1.oldPrice && (
                      <span className="text-slate-400 line-through text-[11px]">{slide.box1.oldPrice}</span>
                    )}
                    <span className="text-slate-900 text-sm font-black">{slide.box1.newPrice}</span>
                  </div>
                </div>

                <div className="bg-white/95 border border-slate-200/90 rounded-xl px-3 py-1.5 shadow-2xs text-xs">
                  <span className="text-slate-500 text-[11px] block">{slide.box2.label}</span>
                  <div className="flex items-baseline space-x-1.5 font-bold">
                    {slide.box2.oldPrice && (
                      <span className="text-slate-400 line-through text-[11px]">{slide.box2.oldPrice}</span>
                    )}
                    <span className="text-[#e23744] text-sm font-black">{slide.box2.newPrice}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Action Button & Graphic Accent */}
            <div className="md:col-span-4 flex flex-col sm:items-end justify-center">
              <button
                onClick={() => handleBookNow(slide.targetCode)}
                className="bg-[#0f172a] hover:bg-black text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>{language === 'bn' ? 'এখনই বুক করুন' : 'Book Now'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-[10px] text-slate-400 mt-1.5">
                *T&C apply • Murshidabad doorstep
              </span>
            </div>

          </div>

          {/* Bottom Pagination Bar: 4/6 Pill and Dots */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-200/60">
            <span className="text-[11px] font-bold text-slate-700 bg-white/80 px-2.5 py-0.5 rounded-full border border-slate-200 shadow-2xs">
              {currentSlide + 1} / {slides.length}
            </span>

            {/* Dots */}
            <div className="flex items-center space-x-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentSlide === idx 
                      ? 'w-6 bg-[#e23744]' 
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Left / Right arrows */}
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)}
                className="p-1 rounded-full bg-white/80 hover:bg-white text-slate-700 border border-slate-200 transition-colors shadow-2xs cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
                className="p-1 rounded-full bg-white/80 hover:bg-white text-slate-700 border border-slate-200 transition-colors shadow-2xs cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
