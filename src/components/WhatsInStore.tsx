import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  FlaskConical, 
  HeartHandshake, 
  Tag, 
  TicketPercent, 
  Check, 
  X,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const WhatsInStore: React.FC = () => {
  const { language, setSelectedCategory, showNotification } = useApp();
  const [couponModalOpen, setCouponModalOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  const scrollToCatalog = (category: string) => {
    setSelectedCategory(category);
    const elem = document.getElementById('catalog');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPackages = () => {
    setSelectedCategory('package');
    const elem = document.getElementById('packages');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'THYRO20' || code === 'HARIHAR25' || code === 'FRESH10') {
      setAppliedCoupon(code);
      showNotification(`Coupon "${code}" activated! Enjoy extra franchise discount.`, 'success');
    } else {
      showNotification('Invalid coupon code. Try "THYRO20" or "HARIHAR25"', 'error');
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          {language === 'bn' ? 'আপনার জন্য বিশেষ অফার' : "What's In Store For You"}
        </h3>
        <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
          {language === 'bn' ? 'দ্রুত নেভিগেশন' : 'Quick Actions'}
        </span>
      </div>

      {/* 4 Cards Grid exactly like screenshot */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        
        {/* Card 1: All Tests */}
        <div
          onClick={() => scrollToCatalog('all')}
          className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col items-center justify-center text-center cursor-pointer group active:scale-95"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
            {/* Custom stylized test tubes illustration */}
            <div className="relative">
              <FlaskConical className="w-8 h-8 text-blue-600" />
              <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-rose-500 rounded-full border-2 border-white" />
            </div>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {language === 'bn' ? 'সকল টেস্ট' : 'All Tests'}
          </h4>
          <span className="text-[11px] text-slate-400 mt-0.5">
            {language === 'bn' ? 'একক ও প্রোফাইল' : 'Blood & Urine'}
          </span>
        </div>

        {/* Card 2: Health Packages */}
        <div
          onClick={scrollToPackages}
          className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-rose-200 transition-all flex flex-col items-center justify-center text-center cursor-pointer group active:scale-95"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
            {/* Red Heart with Medical Cross */}
            <div className="w-9 h-9 rounded-xl bg-[#e23744] text-white flex items-center justify-center shadow-xs">
              <span className="text-xl font-bold leading-none">+</span>
            </div>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#e23744] transition-colors">
            {language === 'bn' ? 'হেলথ প্যাকেজ' : 'Health Packages'}
          </h4>
          <span className="text-[11px] text-slate-400 mt-0.5">
            {language === 'bn' ? 'আরোগ্যম ফুল বডি' : 'Full Body Aarogyam'}
          </span>
        </div>

        {/* Card 3: Buy 1 Get 1 Free */}
        <div
          onClick={() => scrollToCatalog('package')}
          className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-amber-200 transition-all flex flex-col items-center justify-center text-center cursor-pointer group active:scale-95"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
            <div className="px-2 py-1 bg-amber-500 text-slate-950 text-xs font-black rounded-lg shadow-xs flex items-center space-x-0.5">
              <span>1+1</span>
            </div>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
            {language === 'bn' ? '১ কিনলে ১ ফ্রি' : 'Buy 1 Get 1 Free'}
          </h4>
          <span className="text-[11px] text-slate-400 mt-0.5">
            {language === 'bn' ? 'কম্বো অফার' : 'Combo Packages'}
          </span>
        </div>

        {/* Card 4: Redeem A Coupon */}
        <div
          onClick={() => setCouponModalOpen(true)}
          className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-cyan-200 transition-all flex flex-col items-center justify-center text-center cursor-pointer group active:scale-95"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
            <TicketPercent className="w-8 h-8 text-cyan-600" />
          </div>
          <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
            {language === 'bn' ? 'কুপন রিডিম করুন' : 'Redeem A Coupon'}
          </h4>
          <span className="text-[11px] text-slate-400 mt-0.5">
            {appliedCoupon ? `Applied: ${appliedCoupon}` : (language === 'bn' ? 'অতিরিক্ত ছাড়' : 'Promo Codes')}
          </span>
        </div>

      </div>

      {/* Coupon Modal */}
      {couponModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full space-y-5 border border-slate-200 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center space-x-2">
                <TicketPercent className="w-6 h-6 text-[#e23744]" />
                <h4 className="text-lg font-bold text-slate-900">
                  {language === 'bn' ? 'কুপন ও বিশেষ ছাড়' : 'Redeem Diagnostic Coupon'}
                </h4>
              </div>
              <button 
                onClick={() => setCouponModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Enter your promotional coupon code or select an active coupon code below to apply instant franchise savings.
            </p>

            <form onSubmit={handleApplyCoupon} className="space-y-3">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                  placeholder="Enter coupon code (e.g. THYRO20)"
                  className="flex-1 px-3.5 py-2.5 text-xs font-mono font-bold uppercase border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#e23744] focus:outline-hidden"
                />
                <button
                  type="submit"
                  className="bg-[#0f172a] hover:bg-black text-white text-xs font-bold px-4 py-2.5 rounded-xl cursor-pointer"
                >
                  Apply
                </button>
              </div>
            </form>

            {/* Active Coupon Cards */}
            <div className="space-y-2 pt-2 border-t">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Available Coupons
              </span>

              <div 
                onClick={() => { setCouponCode('THYRO20'); }}
                className="bg-purple-50 p-3 rounded-xl border border-purple-200 flex items-center justify-between cursor-pointer hover:bg-purple-100/70 transition-colors"
              >
                <div>
                  <span className="font-mono font-black text-xs text-purple-900">THYRO20</span>
                  <p className="text-[11px] text-purple-700">Extra 20% off on all Aarogyam Health Packages</p>
                </div>
                <span className="text-xs font-bold text-purple-800 underline">Use</span>
              </div>

              <div 
                onClick={() => { setCouponCode('HARIHAR25'); }}
                className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 flex items-center justify-between cursor-pointer hover:bg-emerald-100/70 transition-colors"
              >
                <div>
                  <span className="font-mono font-black text-xs text-emerald-900">HARIHAR25</span>
                  <p className="text-[11px] text-emerald-700">Free Home Sample Collection in Hariharpara & Nowda</p>
                </div>
                <span className="text-xs font-bold text-emerald-800 underline">Use</span>
              </div>
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setCouponModalOpen(false)}
                className="text-xs font-bold text-slate-600 hover:text-slate-900 px-4 py-2"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
