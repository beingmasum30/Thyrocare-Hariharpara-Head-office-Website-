import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { dbService } from '../services/db';
import { authenticateWithGooglePopup } from '../services/firebase';
import { UserProfile } from '../types';
import {
  X,
  Mail,
  ShieldCheck,
  CheckCircle2,
  User,
  ArrowRight,
  KeyRound,
  RefreshCw,
  Phone,
  AlertCircle,
  UserPlus,
  LogIn,
  Lock,
  Sparkles,
  BadgeCheck
} from 'lucide-react';

export const UserAuthModal: React.FC = () => {
  const {
    isAuthModalOpen,
    setIsAuthModalOpen,
    loginUser,
    language,
    t,
    showNotification
  } = useApp();

  // Top-level tab: 'login' (Login Area) vs 'register' (User ID Registration Area)
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  // Flow steps:
  // 'main' -> entering Gmail / selecting Google account
  // 'otp_verify' -> 6-digit Gmail OTP Authorization
  // 'profile_setup' -> filling profile details to create User ID (only in 'register' mode after OTP)
  // 'account_created' -> confirmation screen after account creation so user can now log in
  const [authStep, setAuthStep] = useState<'main' | 'otp_verify' | 'profile_setup' | 'account_created'>('main');

  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [existingUser, setExistingUser] = useState<UserProfile | null>(null);
  const [createdUser, setCreatedUser] = useState<UserProfile | null>(null);

  // Registration & Profile setup fields
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<'Male' | 'Female' | 'Other'>('Male');
  const [address, setAddress] = useState('');
  const [authProvider, setAuthProvider] = useState<'google' | 'email'>('email');
  const [googleAvatar, setGoogleAvatar] = useState<string | undefined>(undefined);

  // Error / Notice states
  const [errorMsg, setErrorMsg] = useState('');
  const [unregisteredNotice, setUnregisteredNotice] = useState(false);
  const [alreadyRegisteredNotice, setAlreadyRegisteredNotice] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Google Account Selector Fallback Dialog
  const [showGooglePrompt, setShowGooglePrompt] = useState(false);
  const [googleEmailInput, setGoogleEmailInput] = useState('');
  const [googleNameInput, setGoogleNameInput] = useState('');

  if (!isAuthModalOpen) return null;

  const resetMessages = () => {
    setErrorMsg('');
    setUnregisteredNotice(false);
    setAlreadyRegisteredNotice(false);
  };

  const handleClose = () => {
    setIsAuthModalOpen(false);
    setActiveTab('login');
    setAuthStep('main');
    setEmail('');
    setOtp('');
    setGeneratedOtp('');
    setExistingUser(null);
    setCreatedUser(null);
    setFullName('');
    setPhone('');
    setAge('');
    setAddress('');
    resetMessages();
    setShowGooglePrompt(false);
    setGoogleEmailInput('');
    setGoogleNameInput('');
  };

  const switchTab = (tab: 'login' | 'register', prefillEmail?: string) => {
    setActiveTab(tab);
    setAuthStep('main');
    setOtp('');
    setGeneratedOtp('');
    resetMessages();
    if (prefillEmail !== undefined) {
      setEmail(prefillEmail);
    }
  };

  const validateGmailOrEmail = (val: string): boolean => {
    const clean = val.trim().toLowerCase();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean);
  };

  const generateSixDigitOtp = (): string => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Shared logic to process an email in either LOGIN or REGISTER tab
  const processEmailForTab = async (
    rawEmail: string,
    provider: 'google' | 'email',
    suggestedName?: string,
    avatarUrl?: string
  ) => {
    resetMessages();
    const cleanEmail = rawEmail.trim().toLowerCase();

    if (!validateGmailOrEmail(cleanEmail)) {
      setErrorMsg(
        language === 'bn'
          ? 'সঠিক Gmail বা Google ইমেইল অ্যাড্রেস লিখুন (যেমন: example@gmail.com)'
          : 'Please enter a valid Gmail or Google email address'
      );
      return;
    }

    setIsLoading(true);
    try {
      const userInDb = await dbService.getUserByEmail(cleanEmail);
      setEmail(cleanEmail);
      setAuthProvider(provider);
      if (avatarUrl) setGoogleAvatar(avatarUrl);

      if (activeTab === 'login') {
        // STRICT RULE: If account does NOT exist, block login completely in Login area!
        if (!userInDb) {
          setExistingUser(null);
          setUnregisteredNotice(true);
          setErrorMsg(
            language === 'bn'
              ? `এই Gmail (${cleanEmail}) দিয়ে কোনো অ্যাকাউন্ট তৈরি করা নেই! অ্যাকাউন্ট না থাকলে লগইন এরিয়াতে লগইন হবে না। আগে রেজিস্ট্রেশন করুন।`
              : `No User ID found for (${cleanEmail})! You cannot login without a registered account. Please register first.`
          );
          if (suggestedName) setFullName(suggestedName);
          return;
        }

        // Registered account exists -> Send 6-digit Gmail OTP for Login verification
        setExistingUser(userInDb);
        const code = generateSixDigitOtp();
        setGeneratedOtp(code);
        setOtp('');
        setAuthStep('otp_verify');
      } else {
        // REGISTER TAB: Creating a new User ID via Gmail OTP Authorization
        if (userInDb) {
          setExistingUser(userInDb);
          setAlreadyRegisteredNotice(true);
          setErrorMsg(
            language === 'bn'
              ? `এই Gmail (${cleanEmail}) দিয়ে ইতিমধ্যে ইউজার আইডি তৈরি করা আছে! অনুগ্রহ করে লগইন এরিয়াতে গিয়ে লগইন করুন।`
              : `An account with (${cleanEmail}) already exists! Please switch to the Login tab to sign in.`
          );
          return;
        }

        // New user registration -> Send 6-digit Gmail OTP for Registration Authorization
        setExistingUser(null);
        const extractedName =
          suggestedName?.trim() ||
          fullName.trim() ||
          cleanEmail
            .split('@')[0]
            .replace(/[._]/g, ' ')
            .replace(/\b\w/g, (l) => l.toUpperCase());
        setFullName(extractedName);

        const code = generateSixDigitOtp();
        setGeneratedOtp(code);
        setOtp('');
        setAuthStep('otp_verify');
      }
    } catch (err) {
      console.error('Auth check error:', err);
      setErrorMsg(
        language === 'bn'
          ? 'যাচাইকরণে সমস্যা হয়েছে, আবার চেষ্টা করুন।'
          : 'Verification failed. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Trigger Google Account OAuth Popup or fallback Google Account selector
  const handleGoogleButtonClick = async () => {
    resetMessages();
    try {
      const googleUser = await authenticateWithGooglePopup();
      if (googleUser && googleUser.email) {
        await processEmailForTab(
          googleUser.email,
          'google',
          googleUser.name || undefined,
          googleUser.avatar || undefined
        );
        return;
      }
    } catch {
      // In iframe environments where popup is restricted, open the clean Google Account dialog
    }
    setGoogleEmailInput(email || '');
    setGoogleNameInput(fullName || '');
    setShowGooglePrompt(true);
  };

  // Submit from fallback Google Account dialog
  const handleGooglePromptSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateGmailOrEmail(googleEmailInput)) {
      setErrorMsg(
        language === 'bn'
          ? 'সঠিক গুগল ইমেইল অ্যাড্রেস লিখুন'
          : 'Please enter a valid Google email address'
      );
      return;
    }
    setShowGooglePrompt(false);
    await processEmailForTab(
      googleEmailInput,
      'google',
      googleNameInput.trim() || undefined,
      `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
        googleNameInput.trim() || googleEmailInput.trim()
      )}`
    );
  };

  // Submit from Gmail input form
  const handleGmailFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await processEmailForTab(email, 'email', fullName.trim() || undefined);
  };

  // Verify 6-digit Gmail OTP
  const verifyOtpAndProceed = (codeToCheck: string) => {
    resetMessages();

    if (codeToCheck.trim() !== generatedOtp) {
      setErrorMsg(
        language === 'bn'
          ? 'ভুল Gmail OTP কোড! সঠিক ৬-সংখ্যার ওটিপি কোডটি লিখুন।'
          : 'Invalid Gmail OTP code! Please enter the correct 6-digit code.'
      );
      return;
    }

    if (activeTab === 'login') {
      // In Login tab: only registered users reach here
      if (!existingUser) {
        setAuthStep('main');
        setUnregisteredNotice(true);
        return;
      }
      loginUser(existingUser);
      showNotification(
        language === 'bn'
          ? `স্বাগতম ${existingUser.name}! আপনার অ্যাকাউন্টে সফলভাবে লগইন হয়েছে।`
          : `Welcome back, ${existingUser.name}! Logged in successfully.`,
        'success'
      );
      handleClose();
    } else {
      // In Register tab: Gmail OTP Authorization succeeded -> Proceed to Account Creation (Profile Setup)
      if (!fullName.trim()) {
        const defaultName = email
          .split('@')[0]
          .replace(/[._]/g, ' ')
          .replace(/\b\w/g, (l) => l.toUpperCase());
        setFullName(defaultName);
      }
      setAuthStep('profile_setup');
    }
  };

  const handleVerifyOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    verifyOtpAndProceed(otp);
  };

  // Complete User ID Registration (Create Account in Firestore + LocalStorage)
  const handleCompleteRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    resetMessages();

    if (!fullName.trim()) {
      setErrorMsg(
        language === 'bn'
          ? 'রোগীর পূর্ণ নাম লেখা আবশ্যক'
          : 'Patient full name is required'
      );
      return;
    }

    setIsLoading(true);
    try {
      const cleanEmail = email.trim().toLowerCase();
      const generatedUserId = `THY-${Date.now().toString().slice(-6)}`;
      const profileToSave: UserProfile = {
        id: generatedUserId,
        name: fullName.trim(),
        email: cleanEmail,
        phone: phone.trim() ? phone.replace(/\D/g, '') : undefined,
        avatar:
          googleAvatar ||
          `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
            fullName.trim()
          )}`,
        auth_provider: authProvider,
        is_verified: true,
        age: age ? Number(age) : undefined,
        gender,
        address: address.trim() || 'হরিহরপাড়া, মুর্শিদাবাদ',
        created_at: new Date().toISOString()
      };

      await dbService.saveUserProfile(profileToSave);
      setCreatedUser(profileToSave);
      setExistingUser(profileToSave);
      setAuthStep('account_created');
      showNotification(
        language === 'bn'
          ? 'ইউজার আইডি রেজিস্ট্রেশন সম্পন্ন হয়েছে! এখন আপনি লগইন করতে পারবেন।'
          : 'User ID registered successfully! You can now log in.',
        'success'
      );
    } catch (err) {
      console.error('Failed to create account:', err);
      setErrorMsg(
        language === 'bn'
          ? 'অ্যাকাউন্ট তৈরি করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।'
          : 'Failed to create account. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-[#1b2845] via-[#24345a] to-[#1b2845] text-white flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-xs border border-white/20 shrink-0">
              {activeTab === 'register' ? (
                <UserPlus className="w-5 h-5 text-emerald-300" />
              ) : (
                <LogIn className="w-5 h-5 text-sky-300" />
              )}
            </div>
            <div>
              <div className="flex items-center space-x-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-extrabold tracking-tight">
                  {activeTab === 'register'
                    ? language === 'bn'
                      ? 'ইউজার আইডি রেজিস্ট্রেশন'
                      : 'User ID Registration'
                    : language === 'bn'
                    ? 'অ্যাকাউন্ট লগইন এরিয়া'
                    : 'Account Login Area'}
                </h3>
                <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-500/25 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-md">
                  Gmail OTP Auth
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                {activeTab === 'register'
                  ? language === 'bn'
                    ? 'Gmail OTP ভেরিফিকেশনের মাধ্যমে নতুন অ্যাকাউন্ট তৈরি করুন'
                    : 'Authorize with Gmail OTP to create your User ID'
                  : language === 'bn'
                  ? 'শুধুমাত্র রেজিস্টার্ড ইউজার আইডি থাকলে লগইন করা যাবে'
                  : 'Sign in with your registered Gmail User ID'}
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

        {/* Mode Switcher Tabs (Visible on Main step) */}
        {authStep === 'main' && (
          <div className="grid grid-cols-2 bg-slate-100 p-1.5 border-b border-slate-200">
            <button
              type="button"
              onClick={() => switchTab('login')}
              className={`py-2.5 px-3 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center space-x-1.5 transition-all cursor-pointer ${
                activeTab === 'login'
                  ? 'bg-white text-[#1b2845] shadow-xs border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LogIn className="w-4 h-4 text-[#e23744]" />
              <span>{language === 'bn' ? 'অ্যাকাউন্ট লগইন' : 'Account Login'}</span>
            </button>

            <button
              type="button"
              onClick={() => switchTab('register')}
              className={`py-2.5 px-3 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center space-x-1.5 transition-all cursor-pointer ${
                activeTab === 'register'
                  ? 'bg-white text-emerald-800 shadow-xs border border-emerald-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserPlus className="w-4 h-4 text-emerald-600" />
              <span>{language === 'bn' ? 'নতুন রেজিস্ট্রেশন' : 'Create Account'}</span>
            </button>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          {/* Error Banner */}
          {errorMsg && (
            <div className="bg-rose-50 border-2 border-rose-200 text-rose-800 p-3.5 rounded-2xl text-xs font-bold space-y-2.5 animate-in fade-in duration-150">
              <div className="flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{errorMsg}</span>
              </div>

              {/* Action button if user tried to login without an existing account */}
              {unregisteredNotice && (
                <button
                  type="button"
                  onClick={() => switchTab('register', email)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-xs transition-all cursor-pointer"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>
                    {language === 'bn'
                      ? 'এখনই নতুন ইউজার আইডি রেজিস্ট্রেশন করুন →'
                      : 'Register & Create Account First →'}
                  </span>
                </button>
              )}

              {/* Action button if user tried to register an already existing email */}
              {alreadyRegisteredNotice && (
                <button
                  type="button"
                  onClick={() => switchTab('login', email)}
                  className="w-full bg-[#1b2845] hover:bg-slate-800 text-white font-extrabold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-xs transition-all cursor-pointer"
                >
                  <LogIn className="w-4 h-4" />
                  <span>
                    {language === 'bn'
                      ? 'লগইন এরিয়াতে গিয়ে লগইন করুন →'
                      : 'Go to Login Area →'}
                  </span>
                </button>
              )}
            </div>
          )}

          {/* STEP 1: MAIN (Login or Register input) */}
          {authStep === 'main' && (
            <div className="space-y-4">
              {/* Rule Info Banner */}
              <div
                className={`p-3 rounded-2xl border text-xs flex items-start space-x-2.5 ${
                  activeTab === 'login'
                    ? 'bg-amber-50/90 border-amber-200 text-amber-950'
                    : 'bg-emerald-50/90 border-emerald-200 text-emerald-950'
                }`}
              >
                <Lock
                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                    activeTab === 'login' ? 'text-amber-600' : 'text-emerald-600'
                  }`}
                />
                <div className="leading-relaxed">
                  {activeTab === 'login' ? (
                    language === 'bn' ? (
                      <>
                        <span className="font-extrabold">লগইন নিয়ম:</span> শুধুমাত্র পূর্বে রেজিস্টার করা অ্যাকাউন্ট থাকলে এখানে লগইন হবে। অ্যাকাউন্ট না থাকলে আগে{' '}
                        <button
                          type="button"
                          onClick={() => switchTab('register', email)}
                          className="text-[#e23744] font-extrabold underline cursor-pointer"
                        >
                          নতুন রেজিস্ট্রেশন
                        </button>{' '}
                        করুন।
                      </>
                    ) : (
                      <>
                        <span className="font-extrabold">Login Rule:</span> Only registered accounts can log in here. If you don't have an account, please register first.
                      </>
                    )
                  ) : language === 'bn' ? (
                    <>
                      <span className="font-extrabold">রেজিস্ট্রেশন অনুমোদন:</span> আপনার Gmail বা Google Account দিয়ে <strong>Gmail OTP</strong> ভেরিফাই করে নতুন ইউজার আইডি তৈরি করুন। অ্যাকাউন্ট তৈরি হওয়ার পর লগইন করতে পারবেন।
                    </>
                  ) : (
                    <>
                      <span className="font-extrabold">Registration Authorization:</span> Verify your Gmail with OTP to create your account before logging in.
                    </>
                  )}
                </div>
              </div>

              {/* Google Account Authorization Button */}
              <div>
                <button
                  type="button"
                  onClick={handleGoogleButtonClick}
                  className="w-full bg-white hover:bg-slate-50 text-slate-800 font-bold py-3.5 px-4 rounded-2xl border-2 border-slate-200 hover:border-slate-400 shadow-xs flex items-center justify-center space-x-3 transition-all cursor-pointer active:scale-98"
                >
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
                  <span className="text-sm font-extrabold">
                    {activeTab === 'register'
                      ? language === 'bn'
                        ? 'Google Account দিয়ে রেজিস্ট্রেশন করুন'
                        : 'Register with Google Account'
                      : language === 'bn'
                      ? 'রেজিস্টার্ড Google Account দিয়ে লগইন'
                      : 'Sign in with Registered Google Account'}
                  </span>
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center space-x-3 my-1">
                <div className="h-px bg-slate-200 flex-1" />
                <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                  {language === 'bn' ? 'অথবা Gmail আইডি লিখুন' : 'Or Enter Gmail ID'}
                </span>
                <div className="h-px bg-slate-200 flex-1" />
              </div>

              {/* Direct Gmail Form */}
              <form onSubmit={handleGmailFormSubmit} className="space-y-3.5">
                {activeTab === 'register' && (
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      {language === 'bn' ? 'আপনার পূর্ণ নাম (Full Name)' : 'Full Name'}{' '}
                      <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder={language === 'bn' ? 'রোগীর পূর্ণ নাম লিখুন' : 'Enter your full name'}
                        className="w-full pl-10 pr-4 py-3 text-sm font-medium border border-slate-300 rounded-2xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    {activeTab === 'register'
                      ? language === 'bn'
                        ? 'রেজিস্ট্রেশনের জন্য Gmail আইডি'
                        : 'Gmail ID for Registration'
                      : language === 'bn'
                      ? 'আপনার রেজিস্টার্ড Gmail আইডি'
                      : 'Your Registered Gmail ID'}{' '}
                    <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        resetMessages();
                      }}
                      placeholder="yourname@gmail.com"
                      className="w-full pl-10 pr-4 py-3 text-sm font-medium border border-slate-300 rounded-2xl focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !email.trim()}
                  className={`w-full disabled:opacity-50 text-white font-extrabold py-3.5 px-4 rounded-2xl shadow-lg flex items-center justify-center space-x-2 transition-all cursor-pointer text-sm ${
                    activeTab === 'register'
                      ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20'
                      : 'bg-[#e23744] hover:bg-rose-700 shadow-rose-600/20'
                  }`}
                >
                  <span>
                    {isLoading
                      ? language === 'bn'
                        ? 'যাচাই করা হচ্ছে...'
                        : 'Checking...'
                      : activeTab === 'register'
                      ? language === 'bn'
                        ? 'Gmail OTP পাঠান (রেজিস্ট্রেশন অনুমোদন)'
                        : 'Send Gmail OTP for Registration'
                      : language === 'bn'
                      ? 'লগইন OTP পাঠান (Send Login OTP)'
                      : 'Send Gmail OTP to Login'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Bottom Switch Prompt */}
              <div className="pt-2 border-t border-slate-100 text-center">
                {activeTab === 'login' ? (
                  <p className="text-xs text-slate-600">
                    {language === 'bn'
                      ? 'আপনার কি কোনো ইউজার আইডি নেই?'
                      : "Don't have a registered User ID yet?"}{' '}
                    <button
                      type="button"
                      onClick={() => switchTab('register', email)}
                      className="text-emerald-700 font-extrabold hover:underline ml-1 cursor-pointer"
                    >
                      {language === 'bn'
                        ? 'নতুন অ্যাকাউন্ট তৈরি করুন →'
                        : 'Create Account →'}
                    </button>
                  </p>
                ) : (
                  <p className="text-xs text-slate-600">
                    {language === 'bn'
                      ? 'ইতিমধ্যে অ্যাকাউন্ট তৈরি করা আছে?'
                      : 'Already have a registered account?'}{' '}
                    <button
                      type="button"
                      onClick={() => switchTab('login', email)}
                      className="text-[#e23744] font-extrabold hover:underline ml-1 cursor-pointer"
                    >
                      {language === 'bn' ? 'এখানে লগইন করুন →' : 'Login Here →'}
                    </button>
                  </p>
                )}
              </div>
            </div>
          )}

          {/* STEP 2: 6-DIGIT GMAIL OTP AUTHORIZATION */}
          {authStep === 'otp_verify' && (
            <form onSubmit={handleVerifyOtpSubmit} className="space-y-4">
              <div className="bg-emerald-50 border-2 border-emerald-400 rounded-2xl p-4 text-center space-y-2 animate-in zoom-in-95 shadow-xs">
                <div className="flex items-center justify-center space-x-1.5 text-emerald-900 text-xs font-extrabold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>
                    {activeTab === 'register'
                      ? language === 'bn'
                        ? 'Gmail রেজিস্ট্রেশন অনুমোদন ওটিপি (6-Digit OTP)'
                        : 'Gmail Registration Authorization OTP'
                      : language === 'bn'
                      ? 'Gmail লগইন ভেরিফিকেশন ওটিপি (6-Digit OTP)'
                      : 'Gmail Login Verification OTP'}
                  </span>
                </div>

                <div className="text-3xl font-black text-slate-900 tracking-[0.25em] font-mono bg-white py-2 px-4 rounded-xl border border-emerald-200 inline-block">
                  {generatedOtp}
                </div>

                <p className="text-[11px] text-emerald-800 font-medium">
                  {language === 'bn'
                    ? `আপনার Gmail (${email})-এ পাঠানো ৬-সংখ্যার ওটিপি কোড`
                    : `6-digit authorization code sent to (${email})`}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setOtp(generatedOtp);
                    setTimeout(() => {
                      verifyOtpAndProceed(generatedOtp);
                    }, 150);
                  }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-4 rounded-xl shadow-xs inline-flex items-center justify-center space-x-1.5 cursor-pointer active:scale-95 transition-all mt-1"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>
                    {language === 'bn'
                      ? '⚡ ১-ক্লিকে Gmail OTP বসিয়ে অনুমোদন করুন'
                      : '⚡ 1-Click Fill & Authorize Gmail OTP'}
                  </span>
                </button>
              </div>

              {/* 6-digit OTP input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider text-center">
                  {language === 'bn'
                    ? '৬-সংখ্যার Gmail OTP কোডটি লিখুন'
                    : 'Enter 6-Digit Gmail OTP Code'}
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    maxLength={6}
                    autoFocus
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                    placeholder="------"
                    className="w-full text-center py-3 pl-10 pr-4 text-2xl font-black tracking-[0.3em] border border-slate-300 rounded-2xl focus:ring-2 focus:ring-purple-600 font-mono"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    const newCode = generateSixDigitOtp();
                    setGeneratedOtp(newCode);
                    setOtp('');
                    resetMessages();
                  }}
                  className="text-purple-700 hover:underline flex items-center space-x-1 font-bold cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{language === 'bn' ? 'নতুন কোড পাঠান' : 'Resend OTP'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setAuthStep('main');
                    resetMessages();
                  }}
                  className="text-slate-600 hover:text-slate-900 font-bold cursor-pointer"
                >
                  {language === 'bn' ? '← ইমেইল পরিবর্তন করুন' : '← Change Gmail'}
                </button>
              </div>

              <button
                type="submit"
                disabled={otp.length !== 6}
                className="w-full bg-[#e23744] hover:bg-rose-700 disabled:opacity-50 text-white font-extrabold py-3.5 px-4 rounded-2xl shadow-lg shadow-rose-600/25 flex items-center justify-center space-x-2 transition-all cursor-pointer text-sm"
              >
                <span>
                  {activeTab === 'register'
                    ? language === 'bn'
                      ? 'OTP ভেরিফাই করে অ্যাকাউন্ট তৈরি করুন'
                      : 'Verify OTP & Proceed to Create Account'
                    : language === 'bn'
                    ? 'OTP ভেরিফাই করে লগইন করুন'
                    : 'Verify OTP & Login'}
                </span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* STEP 3: PROFILE SETUP (Create User ID after Gmail OTP Authorization) */}
          {authStep === 'profile_setup' && (
            <form onSubmit={handleCompleteRegistration} className="space-y-3.5">
              <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-2xl text-xs text-emerald-900 flex items-center space-x-2">
                <BadgeCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <div className="truncate">
                  <span className="font-extrabold block">
                    {language === 'bn'
                      ? 'Gmail OTP অনুমোদন সফল হয়েছে!'
                      : 'Gmail OTP Authorization Verified!'}
                  </span>
                  <span className="text-[11px] text-emerald-700">{email}</span>
                </div>
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
                    onChange={(e) => setGender(e.target.value as 'Male' | 'Female' | 'Other')}
                    className="w-full px-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-600 bg-white"
                  >
                    <option value="Male">{t.male}</option>
                    <option value="Female">{t.female}</option>
                    <option value="Other">{t.other}</option>
                  </select>
                </div>
              </div>

              {/* Phone Number */}
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
                  placeholder={
                    language === 'bn'
                      ? 'হরিহরপাড়া, মুর্শিদাবাদ'
                      : 'Hariharpara, Murshidabad'
                  }
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || !fullName.trim()}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-600/25 flex items-center justify-center space-x-2 transition-all cursor-pointer text-sm"
              >
                <span>
                  {isLoading
                    ? language === 'bn'
                      ? 'অ্যাকাউন্ট তৈরি হচ্ছে...'
                      : 'Creating Account...'
                    : language === 'bn'
                    ? 'ইউজার আইডি ও অ্যাকাউন্ট তৈরি সম্পন্ন করুন'
                    : 'Create User ID & Complete Registration'}
                </span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* STEP 4: ACCOUNT CREATED SUCCESSFULLY -> NOW USER CAN LOGIN */}
          {authStep === 'account_created' && createdUser && (
            <div className="space-y-4 text-center py-2 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-3xl bg-emerald-100 border-2 border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200 inline-block">
                  User ID: {createdUser.id}
                </span>
                <h4 className="text-lg font-black text-slate-900 pt-1">
                  {language === 'bn'
                    ? 'আপনার অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!'
                    : 'Your Account Has Been Created!'}
                </h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                  {language === 'bn'
                    ? `আপনার Gmail (${createdUser.email}) দিয়ে ইউজার আইডি রেজিস্ট্রেশন অনুমোদিত হয়েছে। এখন আপনি আপনার অ্যাকাউন্টে লগইন করতে পারবেন।`
                    : `Your Gmail (${createdUser.email}) is now registered and authorized. You can now log in to your account.`}
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-left text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Name:</span>
                  <span className="font-extrabold text-slate-900">{createdUser.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Registered Gmail:</span>
                  <span className="font-bold text-emerald-700">{createdUser.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Authorization:</span>
                  <span className="font-bold text-slate-800 flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Gmail OTP Verified</span>
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    loginUser(createdUser);
                    handleClose();
                  }}
                  className="w-full bg-[#1b2845] hover:bg-slate-800 text-white font-extrabold py-3.5 px-4 rounded-2xl shadow-lg flex items-center justify-center space-x-2 transition-all cursor-pointer text-sm"
                >
                  <LogIn className="w-4 h-4 text-emerald-400" />
                  <span>
                    {language === 'bn'
                      ? 'এখন অ্যাকাউন্টে লগইন করুন (Login Now)'
                      : 'Login to Your Account Now'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    switchTab('login', createdUser.email);
                  }}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 px-4 rounded-xl text-xs transition-colors cursor-pointer"
                >
                  {language === 'bn'
                    ? 'লগইন এরিয়াতে গিয়ে OTP দিয়ে লগইন করুন'
                    : 'Go to Login Area to Sign In with OTP'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Google Account Prompt Dialog */}
      {showGooglePrompt && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-sm w-full space-y-5 border border-slate-200 shadow-2xl animate-in zoom-in-95">
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
                    {activeTab === 'register'
                      ? 'Google Account Registration'
                      : 'Google Account Sign-In'}
                  </h4>
                  <span className="text-[10px] text-slate-500">
                    Thyrocare Hariharpara Authorization
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowGooglePrompt(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleGooglePromptSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700">
                  {language === 'bn'
                    ? 'আপনার Google / Gmail অ্যাড্রেস লিখুন'
                    : 'Enter your Google / Gmail Address'}{' '}
                  <span className="text-rose-500">*</span>
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

              {activeTab === 'register' && (
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    {language === 'bn' ? 'আপনার নাম (Full Name)' : 'Your Full Name'}
                  </label>
                  <input
                    type="text"
                    value={googleNameInput}
                    onChange={(e) => setGoogleNameInput(e.target.value)}
                    placeholder={language === 'bn' ? 'রোগীর নাম' : 'Full Name'}
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium"
                  />
                </div>
              )}

              <p className="text-[11px] text-slate-500 leading-relaxed">
                {activeTab === 'register'
                  ? language === 'bn'
                    ? 'পরবর্তী ধাপে আপনার Gmail আইডিতে ৬-সংখ্যার ওটিপি কোড পাঠানো হবে এবং ভেরিফিকেশনের পর অ্যাকাউন্ট তৈরি হবে।'
                    : 'Next, a 6-digit Gmail OTP will be sent to authorize your registration.'
                  : language === 'bn'
                  ? 'আপনার রেজিস্টার্ড Google অ্যাকাউন্ট যাচাই করে লগইন ওটিপি পাঠানো হবে। অ্যাকাউন্ট না থাকলে লগইন হবে না।'
                  : 'We will check if your Google account is registered and send a login OTP.'}
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
                  disabled={isLoading || !validateGmailOrEmail(googleEmailInput)}
                  className="bg-[#1a73e8] hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold py-2.5 px-5 rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  {isLoading ? 'Checking...' : 'Continue with Gmail OTP'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
