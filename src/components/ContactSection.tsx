import React from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, Phone, Clock, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { WHATSAPP_PHONE } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const { language, t } = useApp();

  return (
    <section id="contact" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
            {language === 'bn' ? 'সরাসরি যোগাযোগ' : 'Find Us in Hariharpara'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.contactTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Centre Address */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {t.addressTitle}
                  </h4>
                  <p className="text-sm font-semibold text-slate-900 mt-1 leading-snug">
                    {t.addressValue}
                  </p>
                  <span className="text-xs text-purple-700 font-medium block mt-1">
                    Landmark: Near Hariharpara Central Bus Stand
                  </span>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {t.phoneTitle}
                  </h4>
                  <p className="text-base font-bold text-slate-900 mt-1">
                    +91 7864028283
                  </p>
                  <span className="text-xs text-emerald-700 font-medium block mt-0.5">
                    WhatsApp Booking & Urgent Inquiries
                  </span>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {t.hoursTitle}
                  </h4>
                  <p className="text-sm font-semibold text-slate-900 mt-1">
                    {t.hoursValue}
                  </p>
                  <span className="text-xs text-indigo-700 font-medium block mt-0.5">
                    Open 365 Days including Sundays & Public Holidays
                  </span>
                </div>
              </div>

            </div>

            {/* Direct Action Buttons */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hello Thyrocare Hariharpara, I want to book a blood test or inquiry.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-md flex items-center justify-center space-x-2 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>{t.openInWhatsApp}</span>
              </a>

              <a
                href="tel:+917864028283"
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 7864028283</span>
              </a>
            </div>

          </div>

          {/* Location Map Interactive Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-md flex flex-col justify-between overflow-hidden">
            <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-16/10 sm:aspect-16/9 flex items-center justify-center">
              <iframe
                title="Hariharpara Diagnostic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14620.046522301292!2d88.4150!3d24.0543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f977d2e0f2d659%3A0xb35a968eb1a47348!2sHariharpara%2C%20West%20Bengal%20742166!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
            </div>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-slate-900">
                  Hariharpara, Murshidabad, West Bengal
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=Hariharpara+Murshidabad+West+Bengal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 hover:text-purple-900 font-bold inline-flex items-center space-x-1"
              >
                <span>{t.getDirections}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
