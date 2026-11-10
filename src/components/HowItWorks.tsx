import React from 'react';
import { useApp } from '../context/AppContext';
import { ScrollReveal } from './ScrollReveal';
import { Search, ShoppingBag, UserCheck, MessageSquare } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const { t } = useApp();

  const steps = [
    {
      icon: Search,
      step: '01',
      title: t.step1Title,
      desc: t.step1Desc
    },
    {
      icon: ShoppingBag,
      step: '02',
      title: t.step2Title,
      desc: t.step2Desc
    },
    {
      icon: UserCheck,
      step: '03',
      title: t.step3Title,
      desc: t.step3Desc
    },
    {
      icon: MessageSquare,
      step: '04',
      title: t.step4Title,
      desc: t.step4Desc
    }
  ];

  return (
    <section id="how-it-works" className="py-14 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            Simple & Transparent
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.howItWorksTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t.howItWorksSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <div 
                  className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black text-slate-300">
                        {s.step}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-purple-700">
                    Step {idx + 1} of 4
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
