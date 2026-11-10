import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  CalendarCheck, 
  Home, 
  Tag, 
  MessageSquare, 
  Award, 
  Headphones 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { t } = useApp();

  const features = [
    {
      icon: CalendarCheck,
      title: t.feature1Title,
      desc: t.feature1Desc,
      color: 'bg-purple-100 text-purple-700'
    },
    {
      icon: Home,
      title: t.feature2Title,
      desc: t.feature2Desc,
      color: 'bg-indigo-100 text-indigo-700'
    },
    {
      icon: Tag,
      title: t.feature3Title,
      desc: t.feature3Desc,
      color: 'bg-emerald-100 text-emerald-700'
    },
    {
      icon: MessageSquare,
      title: t.feature4Title,
      desc: t.feature4Desc,
      color: 'bg-teal-100 text-teal-700'
    },
    {
      icon: Award,
      title: t.feature5Title,
      desc: t.feature5Desc,
      color: 'bg-amber-100 text-amber-700'
    },
    {
      icon: Headphones,
      title: t.feature6Title,
      desc: t.feature6Desc,
      color: 'bg-blue-100 text-blue-700'
    }
  ];

  return (
    <section id="why-choose" className="py-14 sm:py-20 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.whyChooseTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t.whyChooseSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div 
                key={i}
                className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:border-purple-200 hover:shadow-lg hover:bg-white transition-all duration-200 space-y-3"
              >
                <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center shadow-xs`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {f.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
