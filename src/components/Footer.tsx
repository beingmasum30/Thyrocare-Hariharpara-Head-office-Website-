import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Activity, ShieldCheck, Heart, X } from 'lucide-react';
import { WHATSAPP_PHONE } from '../utils/whatsapp';
import { ThyrocareLogo } from './ThyrocareLogo';

export const Footer: React.FC = () => {
  const { language, t, setSelectedCategory } = useApp();
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollTo = (id: string, cat?: string) => {
    if (cat) setSelectedCategory(cat);
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-20 md:pb-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Disclaimer */}
          <div className="space-y-4">
            <ThyrocareLogo theme="dark" size="lg" showBranch={true} showTagline={true} />

            <p className="text-xs text-slate-400 leading-relaxed">
              {t.brandTagline}. {language === 'bn' 
                ? 'হরিহরপাড়া ও সংলগ্ন অঞ্চলের মানুষের জন্য নির্ভুল ও সাশ্রয়ী প্যাথলজিক্যাল রক্ত পরীক্ষা সেবা।' 
                : 'Providing certified, high-precision pathology and preventive health screening services to the people of Murshidabad.'}
            </p>

            {/* Franchise Notice */}
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80 text-[11px] text-slate-400 leading-relaxed">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400 inline mr-1" />
              <strong className="text-white">{t.authorizedPartner}:</strong>{' '}
              <span className="text-amber-300 font-extrabold bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-700/80 mr-1">
                Franchise Partner Code: P7523
              </span>
              {t.authorizedDisclaimer}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => scrollTo('hero')} 
                  className="hover:text-purple-400 transition-colors"
                >
                  {t.navHome}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('packages', 'package')} 
                  className="hover:text-purple-400 transition-colors"
                >
                  {t.navPackages}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('catalog', 'all')} 
                  className="hover:text-purple-400 transition-colors"
                >
                  {t.navAllTests}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('sample-collection')} 
                  className="hover:text-purple-400 transition-colors"
                >
                  {t.collectionOptionsTitle}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('why-choose')} 
                  className="hover:text-purple-400 transition-colors"
                >
                  {t.navAbout}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('contact')} 
                  className="hover:text-purple-400 transition-colors"
                >
                  {t.navContact}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Diagnostic Tests */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Popular Profiles
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Thyroid Profile Total (T3, T4, TSH)</li>
              <li>Complete Blood Count (CBC / Hemogram)</li>
              <li>Lipid Profile (Cholesterol & Heart)</li>
              <li>Liver Function Test (LFT)</li>
              <li>Kidney Function Test (KFT / RFT)</li>
              <li>HbA1c & Diabetic Profile</li>
              <li>Vitamin D & Vitamin B12 Profile</li>
              <li>Aarogyam Full Body Health Checkups</li>
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.navContact}
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p>
                <strong className="text-slate-200">Address:</strong><br />
                Main Road, Near Bus Stand, Hariharpara, Murshidabad, West Bengal - 742166
              </p>
              <p>
                <strong className="text-slate-200">Phone & WhatsApp:</strong><br />
                <a 
                  href={`https://wa.me/${WHATSAPP_PHONE}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  +91 7864028283
                </a>
              </p>
              <p>
                <strong className="text-slate-200">Hours:</strong><br />
                Mon - Sun: 7:00 AM – 8:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar with legal & copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Thyrocare Hariharpara. {t.allRightsReserved}
          </p>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-slate-300 underline underline-offset-2 transition-colors cursor-pointer"
            >
              {t.privacyPolicy}
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-slate-300 underline underline-offset-2 transition-colors cursor-pointer"
            >
              {t.termsConditions}
            </button>
          </div>
        </div>

      </div>

      {/* Legal Modal (Privacy Policy / Terms) */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white text-slate-900 w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[80vh] overflow-y-auto space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-lg font-bold">
                {legalModal === 'privacy' ? t.privacyPolicy : t.termsConditions}
              </h3>
              <button 
                onClick={() => setLegalModal(null)} 
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    <strong>1. Information Collection:</strong> We collect patient names, contact numbers, and delivery addresses solely for scheduling sample collections and delivering test reports via WhatsApp or email.
                  </p>
                  <p>
                    <strong>2. Confidentiality:</strong> Your diagnostic test data and medical reports are treated with strict confidentiality in accordance with medical ethics and Indian data protection guidelines.
                  </p>
                  <p>
                    <strong>3. Third-Party Labs:</strong> Patient specimens are securely transported and processed at NABL/CAP-accredited central reference laboratories operated by Thyrocare Technologies Limited.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Authorized Franchise Status:</strong> Thyrocare Hariharpara operates as an authorized diagnostic collection franchise. We are not the corporate headquarters of Thyrocare Technologies Limited.
                  </p>
                  <p>
                    <strong>2. Booking & Confirmation:</strong> All test booking requests generated through this website are preliminary requests sent via WhatsApp. Official appointment confirmation and time slots are finalized directly with our local coordinator.
                  </p>
                  <p>
                    <strong>3. Preparation & Fasting:</strong> Certain tests (e.g., Fasting Glucose, Lipid Profile, Aarogyam) require 10-12 hours of overnight fasting. Patients are advised to adhere to medical instructions prior to sample draws.
                  </p>
                </>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="bg-purple-700 text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-purple-800"
              >
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
