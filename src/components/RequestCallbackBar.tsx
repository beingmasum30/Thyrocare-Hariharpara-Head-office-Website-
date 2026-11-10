import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PhoneCall, X, MessageSquare, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_PHONE } from '../utils/whatsapp';

export const RequestCallbackBar: React.FC = () => {
  const { language, showNotification } = useApp();
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [time, setTime] = useState('Morning (8 AM - 12 PM)');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.replace(/\D/g, '').length !== 10) {
      alert('Please enter your name and a valid 10-digit mobile number.');
      return;
    }

    const message = `THYROCARE HARIHARPARA – CALLBACK REQUEST
Patient Name: ${name.trim()}
Mobile: ${phone.trim()}
Preferred Time: ${time}
Location: Hariharpara / Murshidabad`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`, '_blank');
    setSubmitted(true);
    showNotification('Callback request received! Opening WhatsApp to connect with our team.', 'success');
  };

  return (
    <>
      {/* Prominent Callback Button Section matching the bottom of the screenshot */}
      <section className="px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        <button
          onClick={() => {
            setSubmitted(false);
            setModalOpen(true);
          }}
          className="w-full py-3.5 px-6 rounded-2xl border-2 border-[#e23744] text-[#e23744] hover:bg-rose-50 font-bold text-sm sm:text-base transition-all shadow-xs active:scale-98 flex items-center justify-center space-x-2 cursor-pointer bg-white"
        >
          <PhoneCall className="w-5 h-5 text-[#e23744]" />
          <span>
            {language === 'bn' ? 'কলব্যাক অনুরোধ করুন (Request Callback)' : 'Request Callback'}
          </span>
        </button>
      </section>

      {/* Callback Request Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full space-y-4 border border-slate-200 shadow-2xl animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-9 h-9 rounded-xl bg-rose-100 text-[#e23744] flex items-center justify-center">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    {language === 'bn' ? 'কলব্যাক অনুরোধ' : 'Request Callback'}
                  </h4>
                  <span className="text-[11px] text-slate-500">
                    Thyrocare Hariharpara Helpline
                  </span>
                </div>
              </div>

              <button
                onClick={() => setModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h5 className="text-base font-bold text-slate-900">
                  {language === 'bn' ? 'অনুরোধ গৃহীত হয়েছে' : 'Callback Request Sent!'}
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our Hariharpara health advisor will call you shortly at +91 {phone}.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="mt-3 bg-slate-900 text-white text-xs font-bold px-5 py-2.5 rounded-xl"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Your Full Name"
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#e23744]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 font-bold text-slate-400">+91</span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                      placeholder="10-digit mobile number"
                      className="w-full pl-11 pr-3 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#e23744]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Preferred Time to Receive Call
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-xl bg-white"
                  >
                    <option value="Immediately (Within 15 mins)">Immediately (Within 15 mins)</option>
                    <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#e23744] hover:bg-[#c82333] text-white font-bold py-3 rounded-xl shadow-md flex items-center justify-center space-x-2 cursor-pointer transition-all active:scale-98"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Send Callback Request via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
