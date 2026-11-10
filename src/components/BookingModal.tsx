import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CollectionPreference, Booking } from '../types';
import { formatCurrency } from '../utils/pricing';
import { generateWhatsAppLink, WHATSAPP_PHONE } from '../utils/whatsapp';
import { dbService } from '../services/db';
import { notificationService } from '../services/notifications';
import { formatVillageFullAddress } from '../data/hariharparaLocations';
import { 
  X, 
  MessageSquare, 
  Calendar, 
  User, 
  Phone, 
  Home, 
  Building2, 
  FileText, 
  ShieldCheck, 
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Navigation,
  Crosshair,
  Loader2
} from 'lucide-react';

export const BookingModal: React.FC = () => {
  const {
    isBookingOpen,
    setIsBookingOpen,
    cart,
    cartSubtotal,
    cartDiscount,
    cartTotal,
    clearCart,
    language,
    t,
    showNotification,
    currentUser,
    setIsAuthModalOpen,
    selectedVillage,
    setIsLocationModalOpen,
    saveNewAddressAndArea
  } = useApp();

  // Form fields initialized with currentUser if available
  const [patientName, setPatientName] = useState(() => currentUser?.name || '');
  const [age, setAge] = useState<string | number>(() => currentUser?.age ? String(currentUser.age) : '');
  const [gender, setGender] = useState<'Male' | 'Female' | 'Other'>(() => currentUser?.gender || 'Male');
  const [phone, setPhone] = useState(() => currentUser?.phone || '');
  const [areaName, setAreaName] = useState(() => {
    return currentUser?.area || (language === 'bn' ? selectedVillage.name_bn : selectedVillage.name_en);
  });
  const [pincode, setPincode] = useState(() => {
    return currentUser?.pincode || selectedVillage.pincode;
  });
  const [address, setAddress] = useState(() => {
    if (currentUser?.address) return currentUser.address;
    return formatVillageFullAddress(selectedVillage, language);
  });
  const [saveToProfile, setSaveToProfile] = useState(true);
  const [collectionType, setCollectionType] = useState<CollectionPreference>('Home Sample Collection');
  const [preferredDate, setPreferredDate] = useState(() => {
    // Tomorrow's date as default
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [additionalInstructions, setAdditionalInstructions] = useState('');
  const [doctorRef, setDoctorRef] = useState('');

  // GPS Location State
  const [locationMode, setLocationMode] = useState<'manual' | 'gps'>('manual');
  const [latitude, setLatitude] = useState<number | undefined>();
  const [longitude, setLongitude] = useState<number | undefined>();
  const [gpsAccuracy, setGpsAccuracy] = useState<number | undefined>();
  const [mapsLink, setMapsLink] = useState<string>('');
  const [isLocatingGps, setIsLocatingGps] = useState(false);
  const [gpsError, setGpsError] = useState<string>('');

  // Auto-fill fields if user logs in while modal is open
  React.useEffect(() => {
    if (currentUser) {
      if (!patientName) setPatientName(currentUser.name);
      if (!phone && currentUser.phone) setPhone(currentUser.phone);
      if (!age && currentUser.age) setAge(String(currentUser.age));
      if (currentUser.gender) setGender(currentUser.gender);
      if (currentUser.address) setAddress(currentUser.address);
      if (currentUser.pincode) setPincode(currentUser.pincode);
      if (currentUser.area) setAreaName(currentUser.area);
    }
  }, [currentUser]);

  // Sync address, area, and pincode when selectedVillage updates
  React.useEffect(() => {
    if (selectedVillage) {
      setAreaName(language === 'bn' ? selectedVillage.name_bn : selectedVillage.name_en);
      setPincode(selectedVillage.pincode);
      if (!address || address.includes('গ্রাম:') || address.includes('Vill:')) {
        setAddress(formatVillageFullAddress(selectedVillage, language));
      }
    }
  }, [selectedVillage, language]);

  // Fetch Current Live GPS Location
  const handleGetLiveLocation = () => {
    if (!navigator.geolocation) {
      setGpsError(
        language === 'bn'
          ? 'আপনার ব্রাউজার বা ডিভাইসে GPS অবস্থান সনাক্তকরণ ব্যবস্থা নেই।'
          : 'GPS Geolocation is not supported by your browser.'
      );
      return;
    }

    setIsLocatingGps(true);
    setGpsError('');

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const accuracy = Math.round(pos.coords.accuracy);
        const link = `https://maps.google.com/?q=${lat},${lng}`;

        setLatitude(lat);
        setLongitude(lng);
        setGpsAccuracy(accuracy);
        setMapsLink(link);
        setLocationMode('gps');
        setIsLocatingGps(false);

        // If address is generic, prepend/append GPS note
        if (!address || address.includes('গ্রাম:') || address.includes('Vill:')) {
          setAddress(
            language === 'bn'
              ? `${formatVillageFullAddress(selectedVillage, language)} (লাইভ GPS কোঅর্ডিনেটস যুক্ত করা হয়েছে)`
              : `${formatVillageFullAddress(selectedVillage, language)} (Live GPS coordinates attached)`
          );
        }

        showNotification(
          language === 'bn'
            ? `লাইভ GPS লোকেশন সফলভাবে সংযুক্ত হয়েছে! (নির্ভুলতা: ±${accuracy}m)`
            : `Live GPS location attached! (Accuracy: ±${accuracy}m)`,
          'success'
        );
      },
      (err) => {
        setIsLocatingGps(false);
        let msg = language === 'bn' 
          ? 'GPS লোকেশন সনাক্ত করা যায়নি। অনুগ্রহ করে ডিভাইসের লোকেশন চালু করুন অথবা ম্যানুয়াল ঠিকানা দিন।' 
          : 'Unable to retrieve GPS location. Please check location permissions or enter address manually.';

        if (err.code === err.PERMISSION_DENIED) {
          msg = language === 'bn'
            ? 'লোকেশন পারমিশন মেলেনি। ব্রাউজারে লোকেশন পারমিশন এলাউ (Allow) করুন অথবা নিচের ফর্ম থেকে এলাকা নির্বাচন করুন।'
            : 'Location permission denied. Please allow location access or choose village manually.';
        } else if (err.code === err.TIMEOUT) {
          msg = language === 'bn'
            ? 'GPS লোকেশন খুঁজতে সময় বেশি লেগেছে। অনুগ্রহ করে পুনরায় চেষ্টা করুন।'
            : 'GPS location request timed out. Please try again.';
        }
        setGpsError(msg);
      },
      {
        enableHighAccuracy: true,
        timeout: 12000,
        maximumAge: 0
      }
    );
  };



  // Status & Validation
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<{
    booking: Booking;
    whatsappUrl: string;
  } | null>(null);

  if (!isBookingOpen) return null;

  const validatePhone = (num: string): boolean => {
    // 10 digits Indian phone
    const clean = num.replace(/\D/g, '');
    return clean.length === 10;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Validation
    if (!patientName.trim()) {
      setErrorMsg(t.validationErrorRequired + ' (Patient Name)');
      return;
    }
    if (!age || Number(age) <= 0 || Number(age) > 120) {
      setErrorMsg(t.validationErrorRequired + ' (Valid Age)');
      return;
    }
    if (!validatePhone(phone)) {
      setErrorMsg(t.validationErrorPhone);
      return;
    }
    if (!address.trim()) {
      setErrorMsg(t.validationErrorRequired + ' (Address)');
      return;
    }
    if (!preferredDate) {
      setErrorMsg(t.validationErrorRequired + ' (Preferred Date)');
      return;
    }
    if (cart.length === 0) {
      setErrorMsg('Your cart is empty. Please add at least one test.');
      return;
    }

    setIsSubmitting(true);

    try {
      const finalAddress = address.trim();
      const finalArea = areaName.trim() || selectedVillage.name_bn;
      const finalPin = pincode.trim() || selectedVillage.pincode;

      // Automatically save new address, area and PIN code in system
      if (saveToProfile) {
        try {
          await saveNewAddressAndArea(finalAddress, finalPin, finalArea);
        } catch (saveErr) {
          console.warn('Auto-saving address to system:', saveErr);
        }
      }

      // Build Booking Object
      const bookingRecord: Booking = {
        id: `book-${Date.now()}`,
        user_id: currentUser?.id,
        patient_name: patientName.trim(),
        age: Number(age),
        gender,
        phone: phone.trim(),
        address: finalAddress,
        pincode: finalPin,
        area: finalArea,
        latitude,
        longitude,
        gps_accuracy: gpsAccuracy,
        maps_link: mapsLink || (latitude && longitude ? `https://maps.google.com/?q=${latitude},${longitude}` : undefined),
        location_mode: locationMode,
        collection_type: collectionType,
        preferred_date: preferredDate,
        additional_instructions: additionalInstructions.trim() || undefined,
        doctor_ref: doctorRef.trim() || undefined,
        subtotal: cartSubtotal,
        total_discount: cartDiscount,
        final_total: cartTotal,
        booking_status: 'Pending',
        whatsapp_opened: true,
        created_at: new Date().toISOString(),
        items: cart.map(item => ({
          product_id: item.product.id,
          product_name: item.product.name,
          test_code: item.product.test_code,
          price: item.product.final_price,
          quantity: item.quantity
        }))
      };

      // Save to database
      await dbService.saveBooking(bookingRecord);

      // Trigger Web Push Notification
      try {
        await notificationService.notifyBookingCreated(patientName.trim(), cartTotal);
      } catch (e) {
        console.warn('Push notification error:', e);
      }

      // Generate WhatsApp URL
      const whatsappUrl = generateWhatsAppLink(bookingRecord);

      // Open WhatsApp in new window
      window.open(whatsappUrl, '_blank');

      // Clear cart
      clearCart();

      // Show instruction state
      setSubmittedBooking({
        booking: bookingRecord,
        whatsappUrl
      });

      showNotification(
        language === 'bn' 
          ? 'বুকিং তৈরি হয়েছে! অনুগ্রহ করে হোয়াটসঅ্যাপে মেসেজটি সেন্ড করুন।' 
          : 'Booking generated! Please send the message on WhatsApp to confirm.',
        'success'
      );
    } catch (err) {
      console.error('Booking submission error:', err);
      setErrorMsg('Failed to process booking. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsBookingOpen(false);
    setSubmittedBooking(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto">
      <div 
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-700 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <MessageSquare className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {t.bookingModalTitle}
              </h3>
              <p className="text-xs text-slate-500">
                {t.bookingModalSubtitle}
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-slate-600 p-2 rounded-xl hover:bg-slate-200/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 overflow-y-auto max-h-[75vh]">
          {submittedBooking ? (
            /* Post-Booking WhatsApp Instruction View - Strict Anti-False Confirmation Rule */
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  {language === 'bn' ? 'স্ট্যাটাস: হোয়াটসঅ্যাপ কনফার্মেশন অপেক্ষমান' : 'Status: Pending Confirmation'}
                </span>
                <h4 className="text-xl font-black text-slate-900">
                  {language === 'bn' 
                    ? 'আপনার বুকিং রিকোয়েস্ট সফলভাবে তৈরি হয়েছে!' 
                    : 'Booking Request Successfully Generated!'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  {language === 'bn' 
                    ? 'হোয়াটসঅ্যাপ মেসেজটি খুলে গেছে। বুকিং নিশ্চিত করতে অনুগ্রহ করে হোয়াটসঅ্যাপে “Send” বাটনে চাপ দিন। আমাদের হরিহরপাড়া প্রতিনিধি কিছুক্ষণের মধ্যেই আপনার সময় কনফার্ম করবেন।'
                    : 'Your WhatsApp chat has opened with the pre-filled booking details. Please press the "Send" button in WhatsApp to submit your request to our Hariharpara team.'}
                </p>
              </div>

              {/* Order Summary Snapshot */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs sm:text-sm space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-500">{t.patientName}:</span>
                  <span className="font-bold text-slate-900">{submittedBooking.booking.patient_name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{t.collectionPreference}:</span>
                  <span className="font-bold text-slate-900">{submittedBooking.booking.collection_type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{t.preferredDate}:</span>
                  <span className="font-bold text-slate-900">{submittedBooking.booking.preferred_date}</span>
                </div>
                {submittedBooking.booking.maps_link && (
                  <div className="flex justify-between items-center bg-emerald-50 text-emerald-800 p-2 rounded-xl text-xs border border-emerald-200">
                    <span className="font-semibold flex items-center gap-1">
                      <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                      {language === 'bn' ? 'লাইভ GPS লিংক হোয়াটসঅ্যাপে প্রেরিত:' : 'Live GPS Link attached:'}
                    </span>
                    <a 
                      href={submittedBooking.booking.maps_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-900 underline flex items-center gap-0.5"
                    >
                      <span>Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
                <div className="flex justify-between border-t border-slate-200 pt-2 font-bold">
                  <span className="text-slate-700">{t.payableAmount}:</span>
                  <span className="text-purple-900 text-base">{formatCurrency(submittedBooking.booking.final_total)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 space-y-2.5 max-w-md mx-auto">
                <a
                  href={submittedBooking.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-emerald-600/25 flex items-center justify-center space-x-2 transition-all"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>
                    {language === 'bn' ? 'হোয়াটসঅ্যাপে পুনরায় খুলুন' : 'Re-open in WhatsApp'}
                  </span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>

                <button
                  onClick={handleClose}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 px-4 rounded-xl transition-colors text-xs sm:text-sm"
                >
                  {language === 'bn' ? 'সম্পন্ন / বন্ধ করুন' : 'Done / Close Window'}
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Free Account Quick Notice / Auto-fill status */}
              {currentUser ? (
                <div className="bg-purple-50 border border-purple-200 text-purple-900 p-3 rounded-2xl text-xs flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                    <span>
                      {language === 'bn' 
                        ? `আপনার ফ্রি অ্যাকাউন্ট (${currentUser.name}) থেকে তথ্য পূরণ করা হয়েছে।` 
                        : `Details auto-filled from your free account (${currentUser.name}).`}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-200 text-purple-900 px-2 py-0.5 rounded-full shrink-0">
                    Auto-filled
                  </span>
                </div>
              ) : (
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-2xl text-xs flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-slate-700">
                    <User className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>
                      {language === 'bn' ? 'আগে টেস্ট বুক করেছিলেন?' : 'Have an account?'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsAuthModalOpen(true)}
                    className="text-[#e23744] hover:underline font-bold text-xs cursor-pointer"
                  >
                    {language === 'bn' ? 'ফ্রি লগইন করুন' : 'Free Login to Autofill'}
                  </button>
                </div>
              )}

              {/* Error Alert */}
              {errorMsg && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 p-3 rounded-xl text-xs flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Patient Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t.patientName} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder={t.patientNamePlaceholder}
                    className="w-full pl-10 pr-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>

              {/* Age & Gender */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t.age} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    max="125"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder={t.agePlaceholder}
                    className="w-full px-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t.gender} <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as any)}
                    className="w-full px-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
                  >
                    <option value="Male">{t.male}</option>
                    <option value="Female">{t.female}</option>
                    <option value="Other">{t.other}</option>
                  </select>
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t.phone} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-xs font-bold text-slate-500">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    placeholder={t.phonePlaceholder}
                    className="w-full pl-12 pr-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>

              {/* Collection Preference: Home Sample Collection vs Visit Centre */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t.collectionPreference} <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className={`flex items-center space-x-3 p-3 rounded-2xl border cursor-pointer transition-all ${
                      collectionType === 'Home Sample Collection'
                        ? 'border-purple-600 bg-purple-50/80 ring-2 ring-purple-600/20'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="collectionType"
                      checked={collectionType === 'Home Sample Collection'}
                      onChange={() => setCollectionType('Home Sample Collection')}
                      className="text-purple-600 focus:ring-purple-500"
                    />
                    <div className="text-xs">
                      <div className="flex items-center space-x-1.5 font-bold text-slate-900">
                        <Home className="w-3.5 h-3.5 text-purple-600" />
                        <span>{language === 'bn' ? 'বাড়িতে নমুনা সংগ্রহ' : 'Home Sample Collection'}</span>
                      </div>
                      <span className="text-[11px] text-slate-500 block mt-0.5">
                        {language === 'bn' ? 'টেকনিশিয়ান বাড়িতে আসবেন' : 'Phlebotomist visits doorstep'}
                      </span>
                    </div>
                  </label>

                  <label
                    className={`flex items-center space-x-3 p-3 rounded-2xl border cursor-pointer transition-all ${
                      collectionType === 'Visit Collection Centre'
                        ? 'border-purple-600 bg-purple-50/80 ring-2 ring-purple-600/20'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="collectionType"
                      checked={collectionType === 'Visit Collection Centre'}
                      onChange={() => setCollectionType('Visit Collection Centre')}
                      className="text-purple-600 focus:ring-purple-500"
                    />
                    <div className="text-xs">
                      <div className="flex items-center space-x-1.5 font-bold text-slate-900">
                        <Building2 className="w-3.5 h-3.5 text-indigo-600" />
                        <span>{language === 'bn' ? 'কালেকশন সেন্টারে আসুন' : 'Visit Collection Centre'}</span>
                      </div>
                      <span className="text-[11px] text-slate-500 block mt-0.5">
                        {language === 'bn' ? 'হরিহরপাড়া বাসস্ট্যান্ড সংলগ্ন' : 'Near Hariharpara Bus Stand'}
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Address & Location Mode: GPS Live Location vs Manual Directory Selection */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#e23744]" />
                    <span>{t.address} / {language === 'bn' ? 'নমুনা সংগ্রহের ঠিকানা' : 'Sample Collection Address'}</span>
                    <span className="text-rose-500">*</span>
                  </label>

                  {/* Mode switcher tabs */}
                  <div className="flex items-center p-0.5 bg-slate-100 rounded-xl border border-slate-200 text-[11px] font-bold">
                    <button
                      type="button"
                      onClick={() => {
                        setLocationMode('gps');
                        if (!latitude) handleGetLiveLocation();
                      }}
                      className={`px-2.5 py-1 rounded-lg transition-all flex items-center space-x-1 cursor-pointer ${
                        locationMode === 'gps'
                          ? 'bg-[#e23744] text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Crosshair className="w-3 h-3" />
                      <span>{language === 'bn' ? 'বর্তমান GPS' : 'Current GPS'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setLocationMode('manual')}
                      className={`px-2.5 py-1 rounded-lg transition-all flex items-center space-x-1 cursor-pointer ${
                        locationMode === 'manual'
                          ? 'bg-[#e23744] text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <MapPin className="w-3 h-3" />
                      <span>{language === 'bn' ? 'ম্যানুয়াল গ্রাম' : 'Manual / Village'}</span>
                    </button>
                  </div>
                </div>

                {/* GPS Mode Card */}
                {locationMode === 'gps' && (
                  <div className="p-3.5 bg-gradient-to-br from-rose-50/80 via-white to-purple-50/50 border border-rose-200 rounded-2xl space-y-2.5 shadow-2xs">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h5 className="text-xs font-black text-slate-900 flex items-center space-x-1.5">
                          <Navigation className="w-3.5 h-3.5 text-[#e23744]" />
                          <span>
                            {language === 'bn' 
                              ? 'স্যাটেলাইট GPS লোকেশন ট্র্যাকিং' 
                              : 'Satellite GPS Location Tracking'}
                          </span>
                        </h5>
                        <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                          {language === 'bn'
                            ? 'আপনার ডিভাইসের বর্তমান লোকেশন যুক্ত করুন। এটি অ্যাডমিনের হোয়াটসঅ্যাপে লাইভ ম্যাপস লিংক হিসেবে পাঠানো হবে।'
                            : 'Capture your current GPS location to send a direct Google Maps navigation link to our admin & phlebotomist.'}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={handleGetLiveLocation}
                        disabled={isLocatingGps}
                        className="px-3 py-1.5 bg-[#e23744] hover:bg-[#c82333] disabled:bg-rose-300 text-white font-bold text-xs rounded-xl shadow-xs flex items-center space-x-1.5 shrink-0 cursor-pointer transition-all"
                      >
                        {isLocatingGps ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            <span>{language === 'bn' ? 'সনাক্ত হচ্ছে...' : 'Locating...'}</span>
                          </>
                        ) : (
                          <>
                            <Crosshair className="w-3.5 h-3.5" />
                            <span>{latitude ? (language === 'bn' ? 'পুনরায় স্ক্যান' : 'Re-scan') : (language === 'bn' ? 'লোকেশন নিন' : 'Get Location')}</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* GPS Error alert */}
                    {gpsError && (
                      <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start space-x-2">
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div className="flex-1 text-[11px]">
                          <span>{gpsError}</span>
                          <button
                            type="button"
                            onClick={() => setLocationMode('manual')}
                            className="block font-bold text-[#e23744] hover:underline mt-1 cursor-pointer"
                          >
                            {language === 'bn' ? '➔ নিচের তালিকা থেকে গ্রাম বেছে নিন' : '➔ Switch to manual village directory'}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* GPS Success Card */}
                    {latitude && longitude && (
                      <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1.5">
                        <div className="flex items-center justify-between flex-wrap gap-1">
                          <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-900">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{language === 'bn' ? 'লাইভ GPS সফলভাবে যুক্ত হয়েছে!' : 'Live GPS Location Attached!'}</span>
                          </div>
                          {gpsAccuracy && (
                            <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-300">
                              {language === 'bn' ? `নির্ভুলতা: ±${gpsAccuracy}m` : `Accuracy: ±${gpsAccuracy}m`}
                            </span>
                          )}
                        </div>

                        <div className="text-[11px] text-emerald-800 flex items-center justify-between flex-wrap gap-2 pt-1 border-t border-emerald-200/60">
                          <span className="font-mono text-[10px] bg-white/80 px-2 py-0.5 rounded border border-emerald-200">
                            {latitude.toFixed(6)}, {longitude.toFixed(6)}
                          </span>

                          <a
                            href={mapsLink || `https://maps.google.com/?q=${latitude},${longitude}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 text-emerald-700 hover:text-emerald-900 font-bold underline cursor-pointer"
                          >
                            <span>Google Maps-এ দেখুন</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Village Directory Reference Card (Hariharpara & Nowda Blocks) */}
                <div className="p-2.5 bg-rose-50/70 border border-rose-200/80 rounded-2xl flex items-center justify-between gap-2">
                  <div className="flex items-center space-x-2 min-w-0">
                    <div className="w-7 h-7 rounded-xl bg-[#e23744] text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0 text-xs">
                      <div className="font-bold text-slate-900 truncate">
                        {language === 'bn' ? selectedVillage.name_bn : selectedVillage.name_en} ({selectedVillage.gram_panchayat})
                      </div>
                      <div className="text-[11px] text-slate-500 flex items-center space-x-1">
                        <span className="font-bold text-rose-700">PIN: {selectedVillage.pincode}</span>
                        <span>•</span>
                        <span className="truncate">{selectedVillage.branch_post_office} ({selectedVillage.block || 'Hariharpara'})</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsLocationModalOpen(true)}
                    className="px-2.5 py-1 bg-white hover:bg-rose-100 text-[#e23744] font-bold text-xs rounded-xl border border-rose-200 transition-colors cursor-pointer shrink-0 shadow-2xs"
                  >
                    {language === 'bn' ? 'গ্রাম বদলান' : 'Change Village'}
                  </button>
                </div>

                {/* Area & PIN Code Editable Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                      {language === 'bn' ? 'গ্রাম / এলাকা / পাড়া' : 'Area / Village / Para'} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={areaName}
                      onChange={(e) => setAreaName(e.target.value)}
                      placeholder={language === 'bn' ? 'গ্রাম বা এলাকার নাম' : 'Village / Area name'}
                      className="w-full px-3 py-1.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500/20 focus:border-[#e23744]"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-0.5">
                      <label className="text-[11px] font-bold text-slate-700">
                        {language === 'bn' ? 'পিনকোড (৬ ডিজিট)' : 'PIN Code'} <span className="text-rose-500">*</span>
                      </label>
                      <div className="flex space-x-1 text-[10px] overflow-x-auto pb-0.5">
                        {['742166', '742182', '742175', '742165', '742121', '742122'].map((pin) => (
                          <button
                            key={pin}
                            type="button"
                            onClick={() => setPincode(pin)}
                            className={`px-1.5 py-0.2 rounded-sm text-[10px] font-semibold transition-colors shrink-0 ${
                              pincode === pin ? 'bg-[#e23744] text-white font-bold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            {pin}
                          </button>
                        ))}
                      </div>
                    </div>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                      placeholder="742166"
                      className="w-full px-3 py-1.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500/20 focus:border-[#e23744]"
                    />
                  </div>
                </div>

                {/* Full Address / Landmark Textarea */}
                <div>
                  <div className="flex items-center justify-between mb-0.5">
                    <label className="text-[11px] font-bold text-slate-700">
                      {language === 'bn' ? 'বাড়ি নং / রাস্তা / ল্যান্ডমার্ক ও বিস্তারিত ঠিকানা' : 'House / Street / Landmark & Full Address'} <span className="text-rose-500">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        const full = formatVillageFullAddress(selectedVillage, language);
                        setAddress(full);
                        setAreaName(language === 'bn' ? selectedVillage.name_bn : selectedVillage.name_en);
                        setPincode(selectedVillage.pincode);
                      }}
                      className="text-[10px] font-bold text-[#e23744] hover:underline cursor-pointer"
                    >
                      {language === 'bn' ? 'গ্রামের ঠিকানা অটো-পূরণ' : 'Autofill Selected Village'}
                    </button>
                  </div>
                  <textarea
                    rows={2}
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder={language === 'bn' ? 'বাড়ি নং, রাস্তার নাম, স্কুলের নিকটে বা ল্যান্ডমার্ক লিখুন (যেমন: প্রাইমারি স্কুলের পাশে, লাল গেট)...' : t.addressPlaceholder}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-[#e23744]"
                  />
                </div>

                {/* Save New Address to System Checkbox */}
                <label className="flex items-center space-x-2 pt-0.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={saveToProfile}
                    onChange={(e) => setSaveToProfile(e.target.checked)}
                    className="w-4 h-4 text-[#e23744] rounded-md border-slate-300 focus:ring-rose-500"
                  />
                  <span className="text-xs text-slate-600 font-medium">
                    {language === 'bn' 
                      ? 'ভবিষ্যতের জন্য এই ঠিকানা, এলাকা ও পিনকোড সিস্টেমে সেভ রাখুন' 
                      : 'Save this address, area & PIN code in system for future bookings'}
                  </span>
                </label>
              </div>

              {/* Preferred Collection Date */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t.preferredDate} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>

              {/* Optional Doctor / Prescription Ref */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t.doctorRef}
                </label>
                <input
                  type="text"
                  value={doctorRef}
                  onChange={(e) => setDoctorRef(e.target.value)}
                  placeholder={t.doctorRefPlaceholder}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              {/* Optional Additional Instructions */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t.additionalInstructions}
                </label>
                <input
                  type="text"
                  value={additionalInstructions}
                  onChange={(e) => setAdditionalInstructions(e.target.value)}
                  placeholder={t.additionalPlaceholder}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              {/* Selected Tests Summary in Form */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-1.5">
                <span className="font-bold text-slate-700 block">
                  {language === 'bn' ? 'নির্বাচিত টেস্ট তালিকা:' : 'Selected Tests / Packages:'}
                </span>
                <ul className="space-y-1 text-slate-600">
                  {cart.map((c, i) => (
                    <li key={i} className="flex justify-between">
                      <span className="truncate pr-2">
                        {c.quantity > 1 ? `(${c.quantity}x) ` : ''}
                        {c.product.name}
                      </span>
                      <span className="font-bold text-slate-900 shrink-0">
                        {formatCurrency(c.product.final_price * c.quantity)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-200">
                  <span>{t.payableAmount}</span>
                  <span className="text-purple-900">{formatCurrency(cartTotal)}</span>
                </div>
              </div>

              {/* Notice */}
              <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl text-[11px] text-emerald-800 flex items-start space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{t.whatsappNotice}</span>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-600/25 flex items-center justify-center space-x-2 transition-all cursor-pointer text-sm sm:text-base active:scale-98"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>
                  {isSubmitting ? 'Generating Booking...' : t.confirmOnWhatsapp}
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
