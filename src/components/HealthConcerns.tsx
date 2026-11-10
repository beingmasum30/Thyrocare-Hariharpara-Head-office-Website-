import React from 'react';
import { useApp } from '../context/AppContext';
import { ScrollReveal } from './ScrollReveal';
import { 
  Activity, 
  Droplet, 
  Heart, 
  Stethoscope, 
  ShieldAlert, 
  Sparkles, 
  Sun, 
  Thermometer, 
  UserCheck 
} from 'lucide-react';

export const HealthConcerns: React.FC = () => {
  const { language, setSearchQuery, setSelectedCategory } = useApp();

  const concerns = [
    {
      id: 'thyroid',
      name: language === 'bn' ? 'থাইরয়েড' : 'Thyroid',
      query: 'thyroid',
      icon: Activity,
      color: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      id: 'diabetes',
      name: language === 'bn' ? 'ডায়াবেটিস' : 'Diabetes',
      query: 'hba1c',
      icon: Droplet,
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      id: 'heart',
      name: language === 'bn' ? 'হার্ট ও কোলেস্টেরল' : 'Heart / Cardiac',
      query: 'lipid',
      icon: Heart,
      color: 'bg-rose-50 text-rose-700 border-rose-200'
    },
    {
      id: 'liver',
      name: language === 'bn' ? 'লিভার যত্ন' : 'Liver Care',
      query: 'liver',
      icon: Stethoscope,
      color: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      id: 'kidney',
      name: language === 'bn' ? 'কিডনি পরীক্ষা' : 'Kidney Health',
      query: 'kidney',
      icon: Droplet,
      color: 'bg-teal-50 text-teal-700 border-teal-200'
    },
    {
      id: 'vitamins',
      name: language === 'bn' ? 'ভিটামিন ও হাড়' : 'Vitamins & Bones',
      query: 'vitamin',
      icon: Sun,
      color: 'bg-orange-50 text-orange-700 border-orange-200'
    },
    {
      id: 'women',
      name: language === 'bn' ? 'নারী স্বাস্থ্য' : 'Women Health',
      query: 'female',
      icon: Sparkles,
      color: 'bg-pink-50 text-pink-700 border-pink-200'
    },
    {
      id: 'fever',
      name: language === 'bn' ? 'জ্বর ও ইনফেকশন' : 'Fever & Infection',
      query: 'fever',
      icon: Thermometer,
      color: 'bg-red-50 text-red-700 border-red-200'
    },
    {
      id: 'senior',
      name: language === 'bn' ? 'প্রবীণ স্বাস্থ্য' : 'Senior Citizen',
      query: 'senior',
      icon: UserCheck,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    }
  ];

  const handleSelectConcern = (query: string) => {
    setSelectedCategory('all');
    setSearchQuery(query);
    const elem = document.getElementById('catalog');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="health-concerns" className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
      {/* Header matching screenshot: "Browse By Health Concern" */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          {language === 'bn' ? 'সমস্যা ও লক্ষণ অনুসারে খুঁজুন' : 'Browse By Health Concern'}
        </h3>
        <button
          onClick={() => {
            setSelectedCategory('all');
            setSearchQuery('');
            const elem = document.getElementById('catalog');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-xs font-bold text-[#e23744] hover:underline cursor-pointer"
        >
          {language === 'bn' ? 'সকল টেস্ট দেখুন' : 'View All'}
        </button>
      </div>

      {/* Horizontal Scroll / Grid of Concerns */}
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3">
        {concerns.map((c, idx) => {
          const Icon = c.icon;
          return (
            <ScrollReveal key={c.id} animation="fade-up" delay={idx * 50}>
              <div
                onClick={() => handleSelectConcern(c.query)}
                className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#e23744]/40 transition-all flex flex-col items-center justify-center text-center cursor-pointer group active:scale-95 h-full"
              >
                <div className={`w-12 h-12 rounded-xl ${c.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform border`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-800 group-hover:text-[#e23744] transition-colors leading-tight">
                  {c.name}
                </span>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};
