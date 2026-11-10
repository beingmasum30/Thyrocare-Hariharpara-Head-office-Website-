import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  PhoneCall, 
  HeartPulse 
} from 'lucide-react';
import { WHATSAPP_PHONE } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  const { language, t, setSelectedCategory } = useApp();

  const scrollTo = (id: string, categoryFilter?: string) => {
    if (categoryFilter) {
      setSelectedCategory(categoryFilter);
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-purple-50/70 via-white to-slate-50 pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-slate-200/60">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-purple-300/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-indigo-300/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headings & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 bg-purple-100/80 border border-purple-200 text-purple-900 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-purple-700" />
              <span>{t.heroBadge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {language === 'bn' ? (
                  <>
                    <span className="block text-purple-800">{t.heroTitle}</span>
                    <span className="text-2xl sm:text-4xl text-slate-800 font-bold mt-2 block">
                      {t.heroSubtitle}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="block text-purple-800">{t.heroTitle}</span>
                    <span className="text-2xl sm:text-4xl text-slate-800 font-bold mt-2 block">
                      {t.heroSubtitle}
                    </span>
                  </>
                )}
              </h1>
              <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed pt-2">
                {t.heroDescription}
              </p>
            </div>

            {/* Buttons: Explore Tests, View Health Packages, Book on WhatsApp */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              {/* Explore Tests */}
              <button
                onClick={() => scrollTo('catalog', 'test')}
                className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-5 py-3 rounded-xl shadow-lg shadow-purple-700/25 flex items-center space-x-2 active:scale-95 transition-all text-sm sm:text-base cursor-pointer"
              >
                <span>{t.exploreTests}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* View Health Packages */}
              <button
                onClick={() => scrollTo('packages', 'package')}
                className="bg-white hover:bg-slate-50 text-purple-900 border-2 border-purple-200 font-semibold px-5 py-3 rounded-xl shadow-xs flex items-center space-x-2 active:scale-95 transition-all text-sm sm:text-base cursor-pointer"
              >
                <span>{t.viewPackages}</span>
              </button>

              {/* Book on WhatsApp */}
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hello Thyrocare Hariharpara, I want to book a diagnostic test / health package.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-3 rounded-xl shadow-lg shadow-emerald-600/25 flex items-center space-x-2 active:scale-95 transition-all text-sm sm:text-base"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>{t.bookOnWhatsapp}</span>
              </a>
            </div>

            {/* Key Trust Highlights */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  {t.nablAccredited}
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  {t.barcodedSamples}
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  {t.quickReports}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Feature Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl shadow-purple-900/10 border border-purple-100 space-y-5">
                
                {/* Header of Card */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-700 to-indigo-600 flex items-center justify-center text-white shadow-md">
                      <HeartPulse className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
                        {language === 'bn' ? 'বিশ্বস্ত ডায়াগনস্টিক সেবা' : 'Verified Collection Partner'}
                      </span>
                      <h2 className="text-lg font-bold text-slate-900">
                        Thyrocare Hariharpara
                      </h2>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Open 7 Days
                  </span>
                </div>

                {/* Local Info Highlights */}
                <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start space-x-2.5">
                    <MapPin className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900 font-semibold">
                        {language === 'bn' ? 'সেন্টারের অবস্থান:' : 'Centre Location:'}
                      </strong>{' '}
                      Near Bus Stand, Hariharpara, Murshidabad (PIN: 742166)
                    </span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Clock className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>
                      <strong className="text-slate-900 font-semibold">
                        {language === 'bn' ? 'সময়সূচী:' : 'Timing:'}
                      </strong>{' '}
                      7:00 AM – 8:00 PM (Monday to Sunday)
                    </span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <PhoneCall className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>
                      <strong className="text-slate-900 font-semibold">
                        {language === 'bn' ? 'হেল্পলাইন:' : 'Helpline:'}
                      </strong>{' '}
                      +91 7864028283
                    </span>
                  </div>
                </div>

                {/* Featured promo callout */}
                <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-4 rounded-2xl shadow-md space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-purple-200 uppercase tracking-wide">
                      {language === 'bn' ? 'জনপ্রিয় সম্পূর্ণ বডি চেকআপ' : 'Top Full Body Checkup'}
                    </span>
                    <span className="bg-amber-400 text-slate-950 font-black text-[11px] px-2 py-0.5 rounded-full">
                      35% OFF
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {language === 'bn' ? 'আরোগ্যম ১.৩ (ভিটামিন ডি ও বি১২ সহ)' : 'Aarogyam 1.3 with Vitamin D & B12'}
                  </h3>
                  <p className="text-xs text-purple-200">
                    91 Parameters • Thyroid, Lipid, Liver, Kidney, Sugar & CBC
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-purple-800/80">
                    <div>
                      <span className="text-xs text-purple-300 line-through mr-2">₹2,500</span>
                      <span className="text-xl font-extrabold text-amber-300">₹1,625</span>
                    </div>
                    <button
                      onClick={() => scrollTo('packages', 'package')}
                      className="bg-white text-purple-900 hover:bg-purple-50 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                    >
                      {language === 'bn' ? 'প্যাকেজ দেখুন' : 'View Package'}
                    </button>
                  </div>
                </div>

                {/* Authorized Franchise Disclaimer Notice */}
                <p className="text-[11px] text-slate-500 leading-tight">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400 inline mr-1" />
                  {t.authorizedDisclaimer}
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
