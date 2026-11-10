import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { dbService } from '../services/db';
import { Booking, BookingStatus } from '../types';
import { formatCurrency } from '../utils/pricing';
import { WHATSAPP_PHONE } from '../utils/whatsapp';
import { 
  X, 
  User, 
  Calendar, 
  MapPin, 
  Phone, 
  LogOut, 
  Edit3, 
  Save, 
  Clock, 
  CheckCircle2, 
  FileText, 
  MessageSquare, 
  Home, 
  Building2,
  ChevronRight,
  RefreshCw,
  ShoppingBag
} from 'lucide-react';

export const UserProfileModal: React.FC = () => {
  const {
    isProfileModalOpen,
    setIsProfileModalOpen,
    currentUser,
    logoutUser,
    updateUserProfile,
    language,
    t,
    setIsBookingOpen,
    setIsCartOpen,
    saveNewAddressAndArea
  } = useApp();

  const [activeTab, setActiveTab] = useState<'bookings' | 'profile'>('bookings');
  const [userBookings, setUserBookings] = useState<Booking[]>([]);
  const [isLoadingBookings, setIsLoadingBookings] = useState(false);

  // Edit profile state
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState<string | number>('');
  const [gender, setGender] = useState<'Male' | 'Female' | 'Other'>('Male');
  const [address, setAddress] = useState('');
  const [area, setArea] = useState('');
  const [pincode, setPincode] = useState('');

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setPhone(currentUser.phone || '');
      setAge(currentUser.age || '');
      setGender(currentUser.gender || 'Male');
      setAddress(currentUser.address || '');
      setArea(currentUser.area || '');
      setPincode(currentUser.pincode || '');
      loadBookings();
    }
  }, [currentUser, isProfileModalOpen]);

  const loadBookings = async () => {
    if (!currentUser) return;
    setIsLoadingBookings(true);
    try {
      const records = await dbService.getBookingsForUser({
        email: currentUser.email,
        userId: currentUser.id,
        phone: currentUser.phone
      });
      setUserBookings(records);
    } catch (e) {
      console.error('Failed to load user bookings:', e);
    } finally {
      setIsLoadingBookings(false);
    }
  };

  if (!isProfileModalOpen || !currentUser) return null;

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const cleanAddress = address.trim();
      const cleanArea = area.trim() || 'হরিহরপাড়া এলাকা';
      const cleanPin = pincode.trim() || '742166';

      await updateUserProfile({
        name: name.trim(),
        phone: phone ? phone.replace(/\D/g, '') : undefined,
        age: age ? Number(age) : undefined,
        gender,
        address: cleanAddress,
        area: cleanArea,
        pincode: cleanPin
      });

      if (cleanAddress || cleanArea) {
        await saveNewAddressAndArea(cleanAddress, cleanPin, cleanArea);
      }

      setIsEditing(false);
    } catch (e) {
      console.error(e);
    }
  };

  const getStatusBadge = (status: BookingStatus) => {
    switch (status) {
      case 'Completed':
        return <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center space-x-1 border border-emerald-200">
          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
          <span>Completed</span>
        </span>;
      case 'Sample Collected':
        return <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center space-x-1 border border-blue-200">
          <Clock className="w-3 h-3 text-blue-600" />
          <span>Sample Collected</span>
        </span>;
      case 'Confirmed':
        return <span className="bg-purple-100 text-purple-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center space-x-1 border border-purple-200">
          <CheckCircle2 className="w-3 h-3 text-purple-600" />
          <span>Confirmed</span>
        </span>;
      default:
        return <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center space-x-1 border border-amber-200">
          <Clock className="w-3 h-3 text-amber-600" />
          <span>Pending</span>
        </span>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-rose-600 flex items-center justify-center text-white font-black text-xl shadow-md border border-white/20 overflow-hidden">
              {currentUser.avatar ? (
                <img src={currentUser.avatar} alt={currentUser.name} className="w-full h-full object-cover" />
              ) : (
                currentUser.name.charAt(0).toUpperCase()
              )}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-bold text-white">
                  {currentUser.name}
                </h3>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center space-x-1">
                  <span>✓</span>
                  <span>{currentUser.auth_provider === 'google' ? 'Google Verified' : 'Email Verified'}</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center space-x-2 mt-0.5">
                <span>{currentUser.email}</span>
                {currentUser.phone && (
                  <>
                    <span>•</span>
                    <span>+91 {currentUser.phone}</span>
                  </>
                )}
                {currentUser.address && (
                  <>
                    <span>•</span>
                    <span className="truncate max-w-[150px]">{currentUser.address}</span>
                  </>
                )}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsProfileModalOpen(false)}
            className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switchers */}
        <div className="flex border-b border-slate-200 bg-slate-50/70 px-6 pt-2">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`py-3 px-4 font-bold text-xs sm:text-sm border-b-2 cursor-pointer transition-colors flex items-center space-x-2 ${
              activeTab === 'bookings'
                ? 'border-[#e23744] text-[#e23744]'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>{t.myBookings}</span>
            <span className="bg-slate-200 text-slate-700 text-[10px] font-bold px-1.5 py-0.2 rounded-full">
              {userBookings.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`py-3 px-4 font-bold text-xs sm:text-sm border-b-2 cursor-pointer transition-colors flex items-center space-x-2 ${
              activeTab === 'profile'
                ? 'border-[#e23744] text-[#e23744]'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <User className="w-4 h-4" />
            <span>{language === 'bn' ? 'রোগীর প্রোফাইল' : 'Patient Profile'}</span>
          </button>
        </div>

        {/* Tab content */}
        <div className="p-6 overflow-y-auto space-y-4">
          
          {/* TAB 1: My Bookings */}
          {activeTab === 'bookings' && (
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  {language === 'bn' ? 'সকল পূর্ববর্তী ও বর্তমান বুকিং' : 'All Test Booking Orders'}
                </span>
                <button
                  onClick={loadBookings}
                  className="text-xs text-purple-700 hover:underline flex items-center space-x-1 cursor-pointer font-medium"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>{language === 'bn' ? 'রিফ্রেশ' : 'Refresh'}</span>
                </button>
              </div>

              {isLoadingBookings ? (
                <div className="text-center py-8 text-xs text-slate-400">
                  Loading bookings...
                </div>
              ) : userBookings.length === 0 ? (
                <div className="text-center py-10 bg-slate-50 rounded-2xl border border-dashed border-slate-200 p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-rose-50 text-[#e23744] flex items-center justify-center mx-auto">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">
                    {t.noBookingsFound}
                  </h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    {language === 'bn' 
                      ? 'যেকোনো টেস্ট বা আরোগ্যম হেলথ প্যাকেজ সিলেক্ট করে কার্টে যোগ করুন এবং সরাসরি হরিহরপাড়ায় আপনার বাড়িতে কালেকশন করান।'
                      : 'Explore our catalog and book home sample collection anywhere across Hariharpara.'}
                  </p>
                  <button
                    onClick={() => {
                      setIsProfileModalOpen(false);
                      const el = document.getElementById('catalog');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-[#e23744] text-white text-xs font-bold py-2 px-4 rounded-xl shadow-xs hover:bg-rose-700 transition-all cursor-pointer"
                  >
                    {t.exploreTests}
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {userBookings.map((b) => (
                    <div
                      key={b.id}
                      className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-3 hover:border-purple-300 transition-colors"
                    >
                      {/* Top row */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-xs font-bold text-slate-500">
                            #{b.id.slice(-6)}
                          </span>
                          <span className="text-[11px] text-slate-400">
                            {new Date(b.created_at).toLocaleDateString(language === 'bn' ? 'bn-IN' : 'en-IN', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                        {getStatusBadge(b.booking_status)}
                      </div>

                      {/* Items list */}
                      <div className="space-y-1">
                        {b.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between text-xs">
                            <span className="text-slate-800 font-semibold truncate pr-2">
                              {item.quantity > 1 ? `(${item.quantity}x) ` : ''}
                              {item.product_name}
                            </span>
                            <span className="font-mono font-bold text-slate-900 shrink-0">
                              {formatCurrency(item.price * item.quantity)}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Collection & Total row */}
                      <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl text-xs">
                        <div className="flex items-center space-x-1.5 text-slate-600">
                          {b.collection_type === 'Home Sample Collection' ? (
                            <Home className="w-3.5 h-3.5 text-purple-600" />
                          ) : (
                            <Building2 className="w-3.5 h-3.5 text-indigo-600" />
                          )}
                          <span className="font-medium text-[11px]">{b.collection_type}</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <span className="text-slate-500 text-[11px]">{t.payableAmount}:</span>
                          <span className="font-black text-purple-950 text-sm">
                            {formatCurrency(b.final_total)}
                          </span>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] text-slate-500">
                          Date: <span className="font-semibold text-slate-800">{b.preferred_date}</span>
                        </span>

                        <a
                          href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                            `Hello Thyrocare Hariharpara, I want to check report / booking status for #${b.id.slice(-6)} (Patient: ${b.patient_name}).`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold py-1.5 px-3 rounded-lg flex items-center space-x-1.5 border border-emerald-200 transition-colors"
                        >
                          <MessageSquare className="w-3.5 h-3.5 fill-current" />
                          <span>{t.quickSupportWhatsapp}</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Patient Profile Details */}
          {activeTab === 'profile' && (
            <div className="space-y-4">
              {!isEditing ? (
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between items-center py-1 border-b border-slate-200">
                      <span className="text-slate-500 font-medium">{t.patientName}</span>
                      <span className="font-bold text-slate-900">{currentUser.name}</span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-200">
                      <span className="text-slate-500 font-medium">{t.enterEmail}</span>
                      <span className="font-bold text-slate-900 flex items-center space-x-1.5">
                        <span>{currentUser.email}</span>
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded-full">
                          Verified
                        </span>
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-200">
                      <span className="text-slate-500 font-medium">Login Method</span>
                      <span className="font-semibold text-slate-700 capitalize">
                        {currentUser.auth_provider === 'google' ? 'Google Account' : 'Email ID'}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-200">
                      <span className="text-slate-500 font-medium">{t.phone}</span>
                      <span className="font-bold text-slate-900">
                        {currentUser.phone ? `+91 ${currentUser.phone}` : <span className="text-slate-400 font-normal">Not provided</span>}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-200">
                      <span className="text-slate-500 font-medium">{t.age}</span>
                      <span className="font-bold text-slate-900">{currentUser.age ? `${currentUser.age} Years` : 'Not specified'}</span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-200">
                      <span className="text-slate-500 font-medium">{t.gender}</span>
                      <span className="font-bold text-slate-900">{currentUser.gender || 'Not specified'}</span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-200">
                      <span className="text-slate-500 font-medium">গ্রাম / এলাকা (Area)</span>
                      <span className="font-bold text-slate-900">{currentUser.area || 'হরিহরপাড়া সদর'}</span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-200">
                      <span className="text-slate-500 font-medium">পিনকোড (PIN Code)</span>
                      <span className="font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200 text-xs">
                        {currentUser.pincode || '742166'}
                      </span>
                    </div>

                    <div className="flex justify-between items-start py-1">
                      <span className="text-slate-500 font-medium">{t.address}</span>
                      <span className="font-bold text-slate-900 text-right max-w-[60%]">
                        {currentUser.address || 'হরিহরপাড়া, মুর্শিদাবাদ'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 pt-2">
                    <button
                      onClick={() => {
                        setName(currentUser.name);
                        setPhone(currentUser.phone || '');
                        setAge(currentUser.age || '');
                        setGender(currentUser.gender || 'Male');
                        setAddress(currentUser.address || '');
                        setArea(currentUser.area || '');
                        setPincode(currentUser.pincode || '');
                        setIsEditing(true);
                      }}
                      className="flex-1 bg-purple-700 hover:bg-purple-800 text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center space-x-2 text-xs sm:text-sm cursor-pointer transition-colors"
                    >
                      <Edit3 className="w-4 h-4" />
                      <span>{t.editProfile}</span>
                    </button>

                    <button
                      onClick={() => {
                        logoutUser();
                        setIsProfileModalOpen(false);
                      }}
                      className="bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold py-2.5 px-4 rounded-xl flex items-center justify-center space-x-1.5 text-xs sm:text-sm border border-rose-200 cursor-pointer transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>{t.logout}</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Edit Form */
                <form onSubmit={handleSaveProfile} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      {t.patientName} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      {t.optionalPhone}
                    </label>
                    <input
                      type="tel"
                      maxLength={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                      placeholder="e.g. 7864028283"
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        {t.patientAge}
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="125"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        {t.patientGender}
                      </label>
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value as any)}
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-600 bg-white"
                      >
                        <option value="Male">{t.male}</option>
                        <option value="Female">{t.female}</option>
                        <option value="Other">{t.other}</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        গ্রাম / এলাকা (Area / Village)
                      </label>
                      <input
                        type="text"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        placeholder="উদা: হরিহরপাড়া, চোয়া..."
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        পিনকোড (PIN Code)
                      </label>
                      <input
                        type="text"
                        maxLength={6}
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                        placeholder="742166"
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      {t.patientAddress} (বাড়ি / রাস্তা / ল্যান্ডমার্ক)
                    </label>
                    <textarea
                      rows={2}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="বাড়ি নং, রাস্তার নাম বা বিস্তারিত ঠিকানা লিখুন..."
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  <div className="flex items-center space-x-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center space-x-2 text-xs sm:text-sm cursor-pointer transition-colors shadow-xs"
                    >
                      <Save className="w-4 h-4" />
                      <span>{t.saveChanges}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 px-4 rounded-xl text-xs sm:text-sm cursor-pointer transition-colors"
                    >
                      {t.close}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
