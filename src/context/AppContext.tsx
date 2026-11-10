import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Language, Booking, UserProfile } from '../types';
import { translations } from '../utils/translations';
import { dbService } from '../services/db';
import { firestoreService } from '../services/firebase';
import { HariharparaVillage, DEFAULT_VILLAGE, getVillageById, saveCustomVillage } from '../data/hariharparaLocations';

interface AppContextType {
  // Language
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['en'];

  // Area & Village Location
  selectedVillage: HariharparaVillage;
  setSelectedVillage: (village: HariharparaVillage) => void;
  saveNewAddressAndArea: (address: string, pincode: string, areaName: string) => Promise<HariharparaVillage>;
  isLocationModalOpen: boolean;
  setIsLocationModalOpen: (open: boolean) => void;

  // Products
  products: Product[];
  isLoadingProducts: boolean;
  reloadProducts: () => Promise<void>;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isInCart: (productId: string) => boolean;
  cartCount: number;
  cartSubtotal: number;
  cartDiscount: number;
  cartTotal: number;

  // Selected Product for Details Modal
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;

  // Modals
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isBookingOpen: boolean;
  setIsBookingOpen: (open: boolean) => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  isProfileModalOpen: boolean;
  setIsProfileModalOpen: (open: boolean) => void;

  // Free User Authentication
  currentUser: import('../types').UserProfile | null;
  loginUser: (user: import('../types').UserProfile) => void;
  logoutUser: () => void;
  updateUserProfile: (updates: Partial<import('../types').UserProfile>) => Promise<import('../types').UserProfile>;

  // Search & Navigation
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;

  // Notifications
  notification: { message: string; type: 'success' | 'info' | 'error' } | null;
  showNotification: (message: string, type?: 'success' | 'info' | 'error') => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'thyrocare_cart_v1';
const LANG_STORAGE_KEY = 'thyrocare_lang_v1';
const USER_SESSION_KEY = 'thyrocare_user_session_v1';
const VILLAGE_STORAGE_KEY = 'thyrocare_village_v2';


export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Language
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      return (saved === 'bn' || saved === 'en') ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch (e) {
      console.error(e);
    }
  };

  const t = translations[language];

  // Hariharpara Village / Location (Directory of 48 villages from PDF)
  const [selectedVillage, setSelectedVillageState] = useState<HariharparaVillage>(() => {
    try {
      const savedId = localStorage.getItem(VILLAGE_STORAGE_KEY);
      if (savedId) {
        return getVillageById(savedId);
      }
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_VILLAGE;
  });

  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  const setSelectedVillage = (village: HariharparaVillage) => {
    setSelectedVillageState(village);
    try {
      localStorage.setItem(VILLAGE_STORAGE_KEY, village.id);
    } catch (e) {
      console.error(e);
    }
    showNotification(
      language === 'bn' 
        ? `${village.name_bn} এলাকা নির্বাচিত হয়েছে (পিন: ${village.pincode})` 
        : `Selected ${village.name_en} (PIN: ${village.pincode})`,
      'success'
    );
  };

  // User Authentication (Free)
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem(USER_SESSION_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const loginUser = (user: UserProfile) => {
    setCurrentUser(user);
    try {
      localStorage.setItem(USER_SESSION_KEY, JSON.stringify(user));
    } catch (e) {
      console.error('Failed to save session:', e);
    }
    showNotification(
      language === 'bn' ? 'সফলভাবে লগইন করা হয়েছে!' : `Welcome back, ${user.name}!`,
      'success'
    );
  };

  const logoutUser = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem(USER_SESSION_KEY);
    } catch (e) {
      console.error(e);
    }
    showNotification(
      language === 'bn' ? 'লগআউট সম্পন্ন হয়েছে' : 'Logged out successfully',
      'info'
    );
  };

  const updateUserProfile = async (updates: Partial<UserProfile>): Promise<UserProfile> => {
    if (!currentUser) throw new Error('No user logged in');
    const updated: UserProfile = {
      ...currentUser,
      ...updates
    };
    await dbService.saveUserProfile(updated);
    setCurrentUser(updated);
    try {
      localStorage.setItem(USER_SESSION_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    showNotification(
      language === 'bn' ? 'প্রোফাইল আপডেট হয়েছে' : 'Profile updated successfully',
      'success'
    );
    return updated;
  };

  const saveNewAddressAndArea = async (address: string, pincode: string, areaName: string): Promise<HariharparaVillage> => {
    const cleanPin = (pincode || '742166').trim();
    const cleanArea = (areaName || '').trim() || address.trim().split(',')[0] || 'হরিহরপাড়া এলাকা';
    const cleanAddress = address.trim();

    // 1. Save to custom village directory
    const village = saveCustomVillage({
      name: cleanArea,
      pincode: cleanPin,
      landmark: cleanAddress.slice(0, 40)
    });

    // 2. Set as active selected village
    setSelectedVillageState(village);
    try {
      localStorage.setItem(VILLAGE_STORAGE_KEY, village.id);
      localStorage.setItem('thyrocare_saved_address', cleanAddress);
      localStorage.setItem('thyrocare_saved_pincode', cleanPin);
      localStorage.setItem('thyrocare_saved_area', cleanArea);
    } catch (e) {
      console.error(e);
    }

    // 3. Persist to logged-in user profile if exists
    if (currentUser) {
      try {
        const updated: UserProfile = {
          ...currentUser,
          address: cleanAddress,
          pincode: cleanPin,
          area: cleanArea
        };
        await dbService.saveUserProfile(updated);
        setCurrentUser(updated);
        localStorage.setItem(USER_SESSION_KEY, JSON.stringify(updated));
      } catch (err) {
        console.warn('Could not auto-save to user profile:', err);
      }
    }

    showNotification(
      language === 'bn'
        ? `নতুন ঠিকানা (${cleanArea}, পিন: ${cleanPin}) সিস্টেমে সংরক্ষিত হয়েছে!`
        : `New address (${cleanArea}, PIN: ${cleanPin}) saved to system!`,
      'success'
    );

    return village;
  };


  // Products & Firestore Real-time Sync
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  const reloadProducts = async () => {
    setIsLoadingProducts(true);
    try {
      const data = await dbService.getProducts();
      setProducts(data);
    } catch (e) {
      console.error('Failed to load products:', e);
    } finally {
      setIsLoadingProducts(false);
    }
  };

  useEffect(() => {
    reloadProducts();

    // Subscribe to Firestore Realtime product changes
    const unsubscribe = firestoreService.subscribeProducts((liveProducts: Product[]) => {
      if (liveProducts && liveProducts.length > 0) {
        setProducts(liveProducts);
      }
    });

    return () => unsubscribe();
  }, []);

  // Cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart:', e);
    }
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showNotification(
      language === 'bn'
        ? `"${product.name_bn || product.name}" কার্টে যোগ করা হয়েছে`
        : `"${product.name}" added to cart`,
      'success'
    );
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (productId: string) => {
    return cart.some(item => item.product.id === productId);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const cartSubtotal = cart.reduce(
    (acc, item) => acc + item.product.mrp * item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (acc, item) => acc + item.product.final_price * item.quantity,
    0
  );

  const cartDiscount = Math.max(0, cartSubtotal - cartTotal);

  // Modals & Navigation
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Notifications
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);

  const showNotification = (message: string, type: 'success' | 'info' | 'error' = 'info') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(prev => (prev?.message === message ? null : prev));
    }, 3500);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        t,
        selectedVillage,
        setSelectedVillage,
        saveNewAddressAndArea,
        isLocationModalOpen,
        setIsLocationModalOpen,
        products,
        isLoadingProducts,
        reloadProducts,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isInCart,
        cartCount,
        cartSubtotal,
        cartDiscount,
        cartTotal,
        selectedProduct,
        setSelectedProduct,
        isCartOpen,
        setIsCartOpen,
        isBookingOpen,
        setIsBookingOpen,
        isAdminOpen,
        setIsAdminOpen,
        isAuthModalOpen,
        setIsAuthModalOpen,
        isProfileModalOpen,
        setIsProfileModalOpen,
        currentUser,
        loginUser,
        logoutUser,
        updateUserProfile,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        notification,
        showNotification
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
