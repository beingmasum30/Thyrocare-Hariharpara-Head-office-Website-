import React from 'react';
import { useApp } from '../context/AppContext';
import { Home, Building2, Check, ArrowRight, MapPin } from 'lucide-react';

export const SampleCollectionSection: React.FC = () => {
  const { t, setSelectedCategory, setIsLocationModalOpen } = useApp();

  const scrollToCatalog = () => {
    setSelectedCategory('all');
    const elem = document.getElementById('catalog');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sample-collection" className="py-14 sm:py-20 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.collectionOptionsTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t.collectionOptionsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Home Sample Collection */}
          <div className="bg-gradient-to-br from-purple-50/70 via-white to-slate-50 rounded-3xl p-7 sm:p-8 border-2 border-purple-200 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-700 text-white flex items-center justify-center shadow-md">
                  <Home className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-900 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
                  {t.homeCollectionBadge}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {t.homeCollectionTitle}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {t.homeCollectionDesc}
                </p>
              </div>

              <ul className="space-y-2.5 pt-2">
                {t.homeCollectionPointers.map((p, i) => (
                  <li key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={scrollToCatalog}
              className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3.5 px-4 rounded-xl shadow-md flex items-center justify-center space-x-2 transition-all cursor-pointer text-sm"
            >
              <span>Book Home Collection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Centre Visit */}
          <div className="bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 rounded-3xl p-7 sm:p-8 border-2 border-slate-200 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-indigo-700 text-white flex items-center justify-center shadow-md">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-900 bg-indigo-100 px-3 py-1 rounded-full border border-indigo-200">
                  {t.centreVisitBadge}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {t.centreVisitTitle}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {t.centreVisitDesc}
                </p>
              </div>

              <ul className="space-y-2.5 pt-2">
                {t.centreVisitPointers.map((p, i) => (
                  <li key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={scrollToCatalog}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-4 rounded-xl shadow-md flex items-center justify-center space-x-2 transition-all cursor-pointer text-sm"
            >
              <span>Explore Tests & Visit Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Hariharpara & Nowda Block Village & PIN Code Directory Coverage Banner */}
        <div className="mt-8 p-5 sm:p-6 bg-gradient-to-r from-rose-50 via-white to-indigo-50/50 rounded-3xl border border-rose-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#e23744] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                <span className="font-black text-sm sm:text-base text-slate-900">
                  হরিহরপাড়া ও নওদা ব্লকের প্রতিটি গ্রামে ফ্রি হোম স্যাম্পল কালেকশন
                </span>
                <span className="text-[11px] font-bold bg-[#e23744] text-white px-2 py-0.5 rounded-full">
                  PIN: 742166, 742182, 742175, 742165, 742121, 742122
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                হরিহরপাড়া সদর, চোয়া, রুকুনপুর, আমতলা বাজার, নওদা, বালি, ত্রিমোহিনী, কেদারচাঁদপুর, চাঁদপুর, রায়পুর, মধুবনা, সারঙ্গপুর ও পাটকাবাড়ী সহ উভয় ব্লকের ৯০টি গ্রামে আমাদের প্রশিক্ষিত টেকনিশিয়ান বাড়ি গিয়ে রক্ত ও প্রস্রাব নমুনা সংগ্রহ করেন।
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsLocationModalOpen(true)}
            className="w-full md:w-auto px-5 py-2.5 bg-white hover:bg-rose-50 border border-rose-200 text-[#e23744] font-black rounded-2xl transition-all cursor-pointer text-xs sm:text-sm shrink-0 shadow-2xs hover:shadow-xs flex items-center justify-center space-x-2"
          >
            <MapPin className="w-4 h-4 text-[#e23744]" />
            <span>গ্রাম ও পিন তালিকা দেখুন</span>
          </button>
        </div>

      </div>
    </section>
  );
};
