import React from 'react';
import { useApp } from '../context/AppContext';
import { formatCurrency, calculateSavings, calculateSavingsPercentage } from '../utils/pricing';
import { 
  X, 
  Clock, 
  Droplet, 
  Layers, 
  Sparkles, 
  Plus, 
  Check, 
  ShieldCheck, 
  FileText,
  AlertCircle 
} from 'lucide-react';

export const ProductDetailModal: React.FC = () => {
  const { 
    selectedProduct, 
    setSelectedProduct, 
    language, 
    t, 
    addToCart, 
    isInCart 
  } = useApp();

  if (!selectedProduct) return null;

  const inCart = isInCart(selectedProduct.id);
  const savings = calculateSavings(selectedProduct.mrp, selectedProduct.final_price);
  const savingsPercent = calculateSavingsPercentage(selectedProduct.mrp, selectedProduct.final_price);
  const displayName = language === 'bn' && selectedProduct.name_bn ? selectedProduct.name_bn : selectedProduct.name;
  const displayDesc = language === 'bn' && selectedProduct.description_bn ? selectedProduct.description_bn : selectedProduct.description;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-slate-100 flex items-start justify-between bg-slate-50/70">
          <div>
            <div className="flex items-center space-x-2 mb-1.5">
              <span className="text-xs font-black uppercase tracking-wider text-purple-900 bg-purple-100 px-2.5 py-0.5 rounded-md border border-purple-200">
                {selectedProduct.test_code}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-200/80 px-2 py-0.5 rounded-md">
                {selectedProduct.category}
              </span>
              {selectedProduct.is_popular && (
                <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                  ★ Popular
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
              {displayName}
            </h3>
          </div>

          <button
            onClick={() => setSelectedProduct(null)}
            className="text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-200/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          
          {/* Price & Savings Highlight Banner */}
          <div className="bg-purple-50/80 border border-purple-200/90 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-purple-900 uppercase tracking-wider block">
                {language === 'bn' ? 'বিশেষ ফ্র্যাঞ্চাইজি মূল্য' : 'Thyrocare Franchise Offer'}
              </span>
              <div className="flex items-baseline space-x-3 mt-0.5">
                <span className="text-3xl font-black text-purple-900">
                  {formatCurrency(selectedProduct.final_price)}
                </span>
                {savings > 0 && (
                  <span className="text-base text-slate-400 line-through">
                    {formatCurrency(selectedProduct.mrp)}
                  </span>
                )}
              </div>
            </div>

            {savings > 0 && (
              <div className="text-right">
                <span className="inline-block bg-rose-600 text-white font-bold text-xs px-3 py-1 rounded-full shadow-xs">
                  {savingsPercent}% OFF
                </span>
                <p className="text-xs text-emerald-700 font-bold mt-1">
                  {t.save} {formatCurrency(savings)}
                </p>
              </div>
            )}
          </div>

          {/* Test Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {t.clinicalSignificance}
            </h4>
            <p className="text-slate-700 leading-relaxed">
              {displayDesc}
            </p>
          </div>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {selectedProduct.parameters_count && (
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 font-medium block">
                    {t.parameters}
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    {selectedProduct.parameters_count} Tests / Analytes
                  </span>
                </div>
              </div>
            )}

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                <Droplet className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-500 font-medium block">
                  {t.sampleType}
                </span>
                <span className="text-sm font-bold text-slate-900">
                  {selectedProduct.sample_type || 'Blood / Serum'}
                </span>
              </div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-500 font-medium block">
                  {t.fastingRequired}
                </span>
                <span className="text-sm font-bold text-slate-900">
                  {selectedProduct.fasting_required 
                    ? selectedProduct.fasting_duration || '10-12 hrs fasting required' 
                    : t.noFasting}
                </span>
              </div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-500 font-medium block">
                  {t.turnaroundTime}
                </span>
                <span className="text-sm font-bold text-slate-900">
                  {selectedProduct.turnaround_time || '24 - 48 Hours'}
                </span>
              </div>
            </div>
          </div>

          {/* Included Tests List if package/profile */}
          {selectedProduct.included_tests && selectedProduct.included_tests.length > 0 && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {t.includedProfiles} ({selectedProduct.included_tests.length})
              </h4>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 max-h-48 overflow-y-auto">
                <ul className="space-y-2 text-xs sm:text-sm">
                  {selectedProduct.included_tests.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-slate-800">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Sample collection note */}
          <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-4 flex items-start space-x-3 text-xs text-indigo-900">
            <AlertCircle className="w-4 h-4 text-indigo-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {language === 'bn' 
                ? 'হরিহরপাড়া ও পার্শ্ববর্তী অঞ্চলের জন্য বিনামূল্যে বা নামমাত্র মূল্যে হোম স্যাম্পল কালেকশন উপলব্ধ। রিপোর্ট সরাসরি হোয়াটসঅ্যাপ ও ইমেইলে সরবরাহ করা হয়।' 
                : 'Home sample collection is available in Hariharpara and surrounding areas. Barcoded sample tubes ensure zero sample mix-up, and digital reports are sent to your WhatsApp.'}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={() => setSelectedProduct(null)}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 rounded-xl transition-colors cursor-pointer"
          >
            {t.close}
          </button>

          <button
            onClick={() => {
              addToCart(selectedProduct);
              setSelectedProduct(null);
            }}
            className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center space-x-2 cursor-pointer ${
              inCart
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                : 'bg-[#e23744] hover:bg-[#c82333] text-white shadow-sm active:scale-95'
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
    </div>
  );
};
