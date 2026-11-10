import React from 'react';
import { useApp } from '../context/AppContext';
import { formatCurrency, calculateSavings, calculateSavingsPercentage } from '../utils/pricing';
import { ScrollReveal } from './ScrollReveal';
import { 
  Sparkles, 
  Check, 
  Plus, 
  Clock, 
  ShieldCheck, 
  Layers, 
  ArrowRight,
  Droplet
} from 'lucide-react';

export const PopularPackagesSection: React.FC = () => {
  const { 
    products, 
    language, 
    t, 
    addToCart, 
    isInCart, 
    setSelectedProduct,
    setSelectedCategory 
  } = useApp();

  const packages = products.filter(p => p.category === 'package' && p.is_active !== false);

  const scrollToCatalog = () => {
    setSelectedCategory('package');
    const elem = document.getElementById('catalog');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-12 sm:py-16 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#e23744] bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {language === 'bn' ? 'সম্পূর্ণ স্বাস্থ্য সুরক্ষা' : 'Comprehensive Preventive Wellness'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {language === 'bn' ? 'জনপ্রিয় সম্পূর্ণ বডি হেলথ প্যাকেজ' : 'Popular Full Body Health Packages'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              {language === 'bn' 
                ? 'থাইরোকেয়ার আরোগ্যম প্যাকেজ: ভিটামিন, থাইরয়েড, লিভার, কিডনি, লিপিড এবং সিবিসি সহ সর্বাধুনিক ডায়াগনস্টিক চেকআপ।'
                : 'Thyrocare Aarogyam packages covering essential organ profiles, vitamins, diabetic markers, and blood elements.'}
            </p>
          </div>

          <button
            onClick={scrollToCatalog}
            className="self-start md:self-end text-xs sm:text-sm font-bold text-[#e23744] hover:text-[#c82333] flex items-center space-x-1.5 group cursor-pointer"
          >
            <span>{language === 'bn' ? 'সব প্যাকেজ দেখুন' : 'Explore All Packages'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {packages.slice(0, 6).map((pkg, idx) => {
            const inCart = isInCart(pkg.id);
            const savings = calculateSavings(pkg.mrp, pkg.final_price);
            const savingsPercent = calculateSavingsPercentage(pkg.mrp, pkg.final_price);
            const displayName = language === 'bn' && pkg.name_bn ? pkg.name_bn : pkg.name;

            return (
              <ScrollReveal key={pkg.id} animation="zoom-in" delay={idx * 70}>
                <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-rose-200 transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full">
                  {/* Header with badge */}
                  <div className="p-5 sm:p-6 pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black uppercase tracking-wider text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                        {pkg.test_code}
                      </span>
                      {savingsPercent > 0 && (
                        <span className="bg-[#e23744] text-white text-xs font-black px-3 py-1 rounded-full shadow-2xs">
                          {savingsPercent}% OFF
                        </span>
                      )}
                    </div>

                    <h3 
                      onClick={() => setSelectedProduct(pkg)}
                      className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#e23744] transition-colors cursor-pointer leading-snug"
                    >
                      {displayName}
                    </h3>

                    <div className="mt-2.5 flex items-center space-x-3 text-xs text-slate-600">
                      <span className="inline-flex items-center font-bold text-[#e23744] bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                        <Layers className="w-3.5 h-3.5 mr-1" />
                        {pkg.parameters_count} {t.parameters}
                      </span>
                      {pkg.fasting_required && (
                        <span className="inline-flex items-center text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          <Clock className="w-3 h-3 mr-1" />
                          {t.fastingRequired}
                        </span>
                      )}
                    </div>

                    {/* Included Profiles / Tests Snippet */}
                    {pkg.included_tests && pkg.included_tests.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          {language === 'bn' ? 'প্রধান অন্তর্ভুক্ত টেস্টসমূহ:' : 'Key Included Profiles:'}
                        </p>
                        <ul className="text-xs text-slate-700 space-y-1">
                          {pkg.included_tests.slice(0, 4).map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-center space-x-1.5 truncate">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#e23744] shrink-0" />
                              <span className="truncate">{item}</span>
                            </li>
                          ))}
                          {pkg.included_tests.length > 4 && (
                            <li className="text-[11px] font-semibold text-[#e23744] pt-0.5">
                              + {pkg.included_tests.length - 4} {language === 'bn' ? 'টি আরও টেস্ট অন্তর্ভুক্ত' : 'more tests included'}
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Footer with Pricing and Action */}
                  <div className="p-5 sm:p-6 pt-3 bg-slate-50/70 border-t border-slate-100 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <div className="flex items-baseline space-x-2">
                          <span className="text-xl sm:text-2xl font-black text-slate-900">
                            {formatCurrency(pkg.final_price)}
                          </span>
                          <span className="text-xs text-slate-400 line-through">
                            {formatCurrency(pkg.mrp)}
                          </span>
                        </div>
                        <p className="text-[11px] text-emerald-700 font-bold">
                          {t.save} {formatCurrency(savings)}
                        </p>
                      </div>

                      <button
                        onClick={() => setSelectedProduct(pkg)}
                        className="text-xs font-semibold text-slate-600 hover:text-[#e23744] underline underline-offset-2 cursor-pointer"
                      >
                        {t.viewDetails}
                      </button>
                    </div>

                    <button
                      onClick={() => addToCart(pkg)}
                      className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                        inCart
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                          : 'bg-[#e23744] hover:bg-[#c82333] text-white shadow-sm active:scale-98'
                      }`}
                    >
                      {inCart ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>{t.inCart}</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>{t.addToCart}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
