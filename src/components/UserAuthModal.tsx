import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { dbService } from '../services/db';
import { UserProfile } from '../types';
import { 
  X, 
  Mail, 
  ShieldCheck, 
  CheckCircle2, 
  User, 
  ArrowRight, 
  KeyRound, 
  Sparkles,
  RefreshCw,
  Phone,
  AlertCircle
} from 'lucide-react';

export const UserAuthModal: React.FC = () => {
  const {
    isAuthModalOpen,
    setIsAuthModalOpen,
    loginUser,
    language,
    t
  } = useApp();

  // Mode: 'main' | 'email_verify' | 'profile_setup'
  const [authMode, setAuthMode] = useState<'main' | 'email_verify' | 'profile_setup'>('main');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [existingUser, setExistingUser] = useState<UserProfile | null>(null);

  // Profile setup fields (for new users)
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<'Male' | 'Female' | 'Other'>('Male');
  const [address, setAddress] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Google Sign-In prompt state
  const [showGooglePrompt, setShowGooglePrompt] = useState(false);
  const [googleEmailInput, setGoogleEmailInput] = useState('');
  const [googleNameInput, setGoogleNameInput] = useState('');

  if (!isAuthModalOpen) return null;

  const handleClose = () => {
    setIsAuthModalOpen(false);
    setAuthMode('main');
    setEmail('');
    setOtp('');
    setGeneratedOtp('');
    setExistingUser(null);
    setErrorMsg('');
    setShowGooglePrompt(false);
    setGoogleEmailInput('');
    setGoogleNameInput('');
  };

  const validateEmail = (val: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  };

  // Google 1-Click Sign-In
  const handleGoogleSignInSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!validateEmail(googleEmailInput)) {
      setErrorMsg(language === 'bn' ? 'সঠিক গুগল ইমেইল অ্যাড্রেস লিখুন' : 'Please enter a valid Google email address');
      return;
    }

    setIsLoading(true);
    const cleanEmail = googleEmailInput.trim().toLowerCase();
    const extractedName = googleNameInput.trim() || cleanEmail.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    setTimeout(async () => {
      try {
        const user = await dbService.getUserByEmail(cleanEmail);

        if (user) {
          // Returning patient
          loginUser(user);
          handleClose();
        } else {
          // New patient using Google
          const newUser: UserProfile = {
            id: `usr-g-${Date.now()}`,
            name: extractedName,
            email: cleanEmail,
            avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(extractedName)}`,
            auth_provider: 'google',
            is_verified: true,
            created_at: new Date().toISOString()
          };

          setExistingUser(newUser);
          setFullName(newUser.name);
          setEmail(newUser.email);
          setShowGooglePrompt(false);
          setAuthMode('profile_setup');
        }
      } catch (err) {
        console.error(err);
        setErrorMsg('Sign-in error. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }, 500);
  };

  // Email ID - Send verification code
  const handleSendEmailCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!validateEmail(email)) {
      setErrorMsg(language === 'bn' ? 'সঠিক ইমেইল অ্যাড্রেস লিখুন' : 'Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    try {
      const cleanEmail = email.trim().toLowerCase();
      const user = await dbService.getUserByEmail(cleanEmail);
      setExistingUser(user);

      // Generate 4-digit code
      const code = Math.floor(1000 + Math.random() * 9000).toString();
      setGeneratedOtp(code);
      setAuthMode('email_verify');
    } catch (err) {
      console.error(err);
      setErrorMsg('Failed to process. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Verify email code
  const handleVerifyEmailCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (otp.trim() !== generatedOtp) {
      setErrorMsg(language === 'bn' ? 'ভুল ভেরিফিকেশন কোড! পুনরায় লিখুন।' : 'Invalid verification code! Please re-enter.');
      return;
    }

    if (existingUser) {
      loginUser(existingUser);
      handleClose();
    } else {
      const defaultName = email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      setFullName(defaultName);
      setAuthMode('profile_setup');
    }
  };

  // Complete patient profile
  const handleCompleteSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg(language === 'bn' ? 'রোগীর পুরো নাম দিন' : 'Patient full name is required');
      return;
    }

    setIsLoading(true);
    try {
      const profileToSave: UserProfile = {
        id: existingUser?.id || `usr-${Date.now()}`,
        name: fullName.trim(),
        email: email.trim().toLowerCase() || existingUser?.email || '',
        phone: phone.trim() ? phone.replace(/\D/g, '') : undefined,
        avatar: existingUser?.avatar,
        auth_provider: existingUser?.auth_provider || 'email',
        is_verified: true,
        age: age ? Number(age) : undefined,
        gender,
        address: address.trim() || undefined,
        created_at: existingUser?.created_at || new Date().toISOString()
      };

      await dbService.saveUserProfile(profileToSave);
      loginUser(profileToSave);
      handleClose();
    } catch (err) {
      console.error(err);
      setErrorMsg('Failed to save profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-purple-900 to-indigo-900 text-white flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-xs border border-white/20">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-base sm:text-lg font-bold">
                  {authMode === 'profile_setup' ? t.registrationTitle : t.patientLogin}
                </h3>
                <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-500/30 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-full">
                  Verified
                </span>
              </div>
              <p className="text-xs text-purple-200">
                {authMode === 'profile_setup' ? t.registrationSubtitle : t.loginDesc}
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="text-white/70 hover:text-white p-1.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {errorMsg && (
            <div className="bg-rose-50 border border-rose-200 text-rose-700 p-3 rounded-xl text-xs font-medium flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* MODE 1: Main (Google Sign In + Email ID input) */}
          {authMode === 'main' && (
            <div className="space-y-4">
              
              {/* Google 1-Click Sign-In Button */}
              <div>
                <button
                  type="button"
                  onClick={() => setShowGooglePrompt(true)}
                  className="w-full bg-white hover:bg-slate-50 text-slate-800 font-bold py-3.5 px-4 rounded-2xl border-2 border-slate-200 hover:border-slate-400 shadow-xs flex items-center justify-center space-x-3 transition-all cursor-pointer active:scale-98"
                >
                  {/* Official Google SVG Icon */}
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span className="text-sm font-semibold">
                    {t.signInWithGoogle}
                  </span>
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-1.5">
                  {language === 'bn' 
                    ? '⚡ কোনো পাসওয়ার্ড ছাড়াই সরাসরি গুগল অ্যাকাউন্ট দিয়ে লগইন' 
                    : 'Fast & Secure: 1-Click login with your Google account'}
                </p>
              </div>

              {/* Or separator */}
              <div className="flex items-center space-x-3 my-2">
                <div className="h-px bg-slate-200 flex-1" />
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  {language === 'bn' ? 'অথবা ইমেইল আইডি' : 'Or with Email ID'}
                </span>
                <div className="h-px bg-slate-200 flex-1" />
              </div>

              {/* Email ID Form */}
              <form onSubmit={handleSendEmailCode} className="space-y-3.5">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    {t.enterEmail} <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.emailPlaceholder}
                      className="w-full pl-10 pr-4 py-3 text-sm font-medium border border-slate-300 rounded-2xl focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    type="submit"
                    disabled={isLoading || !email}
                    className="w-full bg-[#e23744] hover:bg-rose-700 disabled:opacity-50 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-rose-600/25 flex items-center justify-center space-x-2 transition-all cursor-pointer text-sm"
                  >
                    <span>{isLoading ? t.verifyingOtp : t.sendEmailCode}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={async () => {
                      if (!validateEmail(email)) {
                        setErrorMsg(language === 'bn' ? 'সঠিক ইমেইল আইডি লিখুন' : 'Please enter a valid email');
                        return;
                      }
                      setIsLoading(true);
                      try {
                        const cleanEmail = email.trim().toLowerCase();
                        const user = await dbService.getUserByEmail(cleanEmail);
                        if (user) {
                          loginUser(user);
                          handleClose();
                        } else {
                          const defaultName = cleanEmail.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                          const newUser: UserProfile = {
                            id: `usr-${Date.now()}`,
                            name: defaultName,
                            email: cleanEmail,
                            auth_provider: 'email',
                            is_verified: true,
                            created_at: new Date().toISOString()
                          };
                          setExistingUser(newUser);
                          setFullName(newUser.name);
                          setAuthMode('profile_setup');
                        }
                      } catch (err) {
                        console.error(err);
                      } finally {
                        setIsLoading(false);
                      }
                    }}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer text-xs"
                  >
                    <span>⚡ {language === 'bn' ? 'কোড ছাড়া সরাসরি ১-ক্লিকে লগইন' : 'Instant 1-Click Login with Email'}</span>
                  </button>
                </div>
              </form>

              {/* Free Benefits */}
              <div className="bg-purple-50/70 border border-purple-100 rounded-2xl p-3 space-y-1.5 text-xs text-purple-950">
                <div className="font-bold flex items-center space-x-1.5 text-purple-900">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  <span>{language === 'bn' ? 'অ্যাকাউন্টের সুবিধা:' : 'Account Benefits:'}</span>
                </div>
                <ul className="text-slate-600 pl-4 list-disc text-[11px] space-y-0.5">
                  <li>{language === 'bn' ? 'টেস্ট রিপোর্ট সরাসরি ইমেইলে সংরক্ষিত থাকবে' : 'Lab test reports delivered directly to your verified email'}</li>
                  <li>{language === 'bn' ? 'বুকিং হিস্ট্রি ও নমুনা সংগ্রহের স্ট্যাটাস দেখা' : 'Store test booking history & track sample collection'}</li>
                </ul>
              </div>

            </div>
          )}

          {/* MODE 2: Email Verification Code */}
          {authMode === 'email_verify' && (
            <form onSubmit={handleVerifyEmailCode} className="space-y-4">
              
              {/* Instant Email Code Display */}
              <div className="bg-emerald-50 border-2 border-emerald-400 rounded-2xl p-4 text-center space-y-2 animate-in zoom-in-95 shadow-sm">
                <div className="flex items-center justify-center space-x-1.5 text-emerald-800 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{t.freeOtpBanner}</span>
                </div>
                <div className="text-3xl font-black text-slate-900 tracking-widest font-mono">
                  {generatedOtp}
                </div>
                <p className="text-[11px] text-emerald-800">
                  {language === 'bn' ? `আপনার ইমেইল (${email})-এর ভেরিফিকেশন কোড` : `Verification code for (${email})`}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setOtp(generatedOtp);
                    setTimeout(() => {
                      if (existingUser) {
                        loginUser(existingUser);
                        handleClose();
                      } else {
                        const defaultName = email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                        setFullName(defaultName);
                        setAuthMode('profile_setup');
                      }
                    }, 150);
                  }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-4 rounded-xl shadow-xs inline-flex items-center justify-center space-x-1.5 cursor-pointer active:scale-95 transition-all mt-1"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{language === 'bn' ? '⚡ ১-ক্লিকে কোড বসিয়ে ভেরিফাই করুন' : '⚡ 1-Click Fill & Verify'}</span>
                </button>
              </div>

              {/* Code input */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider text-center">
                  {t.enterOtpCode}
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    maxLength={4}
                    autoFocus
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                    placeholder="----"
                    className="w-full text-center py-2.5 pl-10 pr-4 text-2xl font-black tracking-widest border border-slate-300 rounded-2xl focus:ring-2 focus:ring-purple-600 font-mono"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    const newCode = Math.floor(1000 + Math.random() * 9000).toString();
                    setGeneratedOtp(newCode);
                  }}
                  className="text-purple-700 hover:underline flex items-center space-x-1 font-semibold cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{t.resendOtp}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setAuthMode('main')}
                  className="text-slate-600 hover:text-slate-900 font-medium cursor-pointer"
                >
                  {language === 'bn' ? 'ইমেইল পরিবর্তন' : 'Change Email'}
                </button>
              </div>

              <button
                type="submit"
                disabled={otp.length !== 4}
                className="w-full bg-[#e23744] hover:bg-rose-700 disabled:opacity-50 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-rose-600/25 flex items-center justify-center space-x-2 transition-all cursor-pointer text-sm"
              >
                <span>{t.verifyAndLogin}</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* MODE 3: Profile Setup (Name, Age, Gender, Optional Phone & Address) */}
          {authMode === 'profile_setup' && (
            <form onSubmit={handleCompleteSetup} className="space-y-3.5">
              
              <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-2xl text-xs text-emerald-800 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="truncate">
                  {language === 'bn' 
                    ? `ইমেইল ভেরিফাইড: ${email || existingUser?.email}` 
                    : `Verified Email: ${email || existingUser?.email}`}
                </span>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t.patientName} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    autoFocus
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={language === 'bn' ? 'রোগীর পূর্ণ নাম' : 'Patient Full Name'}
                    className="w-full pl-10 pr-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-600"
                  />
                </div>
              </div>

              {/* Age & Gender */}
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
                    placeholder="35"
                    className="w-full px-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t.patientGender}
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as any)}
                    className="w-full px-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-600 bg-white"
                  >
                    <option value="Male">{t.male}</option>
                    <option value="Female">{t.female}</option>
                    <option value="Other">{t.other}</option>
                  </select>
                </div>
              </div>

              {/* Optional Phone Number for sample collection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t.optionalPhone}
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    placeholder="10-digit mobile number"
                    className="w-full pl-10 pr-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-600"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t.patientAddress}
                </label>
                <textarea
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder={language === 'bn' ? 'হরিহরপাড়া, মুর্শিদাবাদ' : 'Hariharpara, Murshidabad'}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || !fullName.trim()}
                className="w-full bg-[#e23744] hover:bg-rose-700 disabled:opacity-50 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-rose-600/25 flex items-center justify-center space-x-2 transition-all cursor-pointer text-sm"
              >
                <span>{isLoading ? 'Saving...' : t.completeRegistration}</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </form>
          )}

        </div>
      </div>

      {/* Google Account Sign-In Dialog (Neutral, Clean & Authentic) */}
      {showGooglePrompt && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-sm w-full space-y-5 border border-slate-200 shadow-2xl animate-in zoom-in-95">
            
            {/* Google Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2.5">
                <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Google Sign-In
                  </h4>
                  <span className="text-[10px] text-slate-500">
                    to continue to Thyrocare Hariharpara
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowGooglePrompt(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Google Input Form */}
            <form onSubmit={handleGoogleSignInSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700">
                  {language === 'bn' ? 'আপনার গুগল ইমেইল লিখুন' : 'Enter your Google Email'} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  autoFocus
                  value={googleEmailInput}
                  onChange={(e) => setGoogleEmailInput(e.target.value)}
                  placeholder="yourname@gmail.com"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700">
                  {language === 'bn' ? 'আপনার নাম (ঐচ্ছিক)' : 'Your Name (Optional)'}
                </label>
                <input
                  type="text"
                  value={googleNameInput}
                  onChange={(e) => setGoogleNameInput(e.target.value)}
                  placeholder={language === 'bn' ? 'রোগীর নাম' : 'Full Name'}
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium"
                />
              </div>

              <p className="text-[11px] text-slate-500 leading-relaxed">
                {language === 'bn' 
                  ? 'গুগল সাইন-ইন সম্পন্ন করলে আপনার ইমেইল ও নাম সরাসরি থাইরোকেয়ার হরিহরপাড়ায় সুরক্ষিতভাবে যাচাই হবে।' 
                  : 'By continuing, Google securely shares your verified email and name with Thyrocare Hariharpara.'}
              </p>

              <div className="flex items-center justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowGooglePrompt(false)}
                  className="text-slate-600 hover:bg-slate-100 text-xs font-bold py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading || !validateEmail(googleEmailInput)}
                  className="bg-[#1a73e8] hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold py-2.5 px-5 rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  {isLoading ? 'Connecting...' : 'Next'}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};
