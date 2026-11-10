import React from 'react';
import { useApp } from '../context/AppContext';
import { formatCurrency } from '../utils/pricing';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  ShoppingBag, 
  Sparkles,
  ShieldCheck 
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    setIsBookingOpen,
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartSubtotal,
    cartDiscount,
    cartTotal,
    language,
    t
  } = useApp();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-slate-200">
          
          {/* Header */}
          <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-purple-700 text-white flex items-center justify-center shadow-xs">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {t.cartTitle}
                </h3>
                <span className="text-xs text-slate-500 font-medium">
                  {cartCount} {t.items}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-200/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 divide-y divide-slate-100">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    {t.cartEmpty}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs">
                    {language === 'bn' 
                      ? 'টেস্ট ও হেলথ প্যাকেজ খুঁজে কার্টে যোগ করুন।' 
                      : 'Explore diagnostic tests & health packages to add them to your cart.'}
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  {t.continueShopping}
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => {
                  const displayName = language === 'bn' && item.product.name_bn 
                    ? item.product.name_bn 
                    : item.product.name;
                  const itemSavings = (item.product.mrp - item.product.final_price) * item.quantity;

                  return (
                    <div key={item.product.id} className="pt-3 first:pt-0">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                            {item.product.test_code}
                          </span>
                          <h4 className="text-sm font-bold text-slate-900 mt-1 leading-snug">
                            {displayName}
                          </h4>
                          <div className="flex items-baseline space-x-2 mt-1">
                            <span className="text-base font-black text-slate-900">
                              {formatCurrency(item.product.final_price * item.quantity)}
                            </span>
                            {itemSavings > 0 && (
                              <span className="text-xs text-slate-400 line-through">
                                {formatCurrency(item.product.mrp * item.quantity)}
                              </span>
                            )}
                          </div>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-slate-400 hover:text-rose-600 p-1.5 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Quantity Controller */}
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-50">
                        <span className="text-xs text-slate-500 font-medium">
                          {language === 'bn' ? 'রোগী / ব্যক্তির সংখ্যা:' : 'Patients / Quantity:'}
                        </span>
                        <div className="flex items-center space-x-2 bg-slate-100 p-1 rounded-lg border border-slate-200">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-6 h-6 rounded bg-white text-slate-700 flex items-center justify-center hover:bg-slate-200 transition-colors shadow-2xs"
                            title="Decrease"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-6 text-center text-slate-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-6 h-6 rounded bg-white text-slate-700 flex items-center justify-center hover:bg-slate-200 transition-colors shadow-2xs"
                            title="Increase"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Clear Cart Button */}
                <div className="pt-2 text-right">
                  <button
                    onClick={() => {
                      if (window.confirm(t.confirmClear)) {
                        clearCart();
                      }
                    }}
                    className="text-xs text-rose-600 hover:text-rose-800 font-semibold inline-flex items-center space-x-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>{t.clearCart}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer Summary & Checkout CTA */}
          {cart.length > 0 && (
            <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 space-y-4">
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>{t.itemTotal}</span>
                  <span className="font-semibold text-slate-900">{formatCurrency(cartSubtotal)}</span>
                </div>
                {cartDiscount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>{t.totalDiscount}</span>
                    <span>- {formatCurrency(cartDiscount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-black text-slate-900 pt-2 border-t border-slate-200">
                  <span>{t.payableAmount}</span>
                  <span className="text-purple-900 text-lg">{formatCurrency(cartTotal)}</span>
                </div>
              </div>

              {/* Home collection reminder */}
              <div className="flex items-center space-x-2 text-[11px] text-slate-500 bg-purple-50/70 p-2.5 rounded-xl border border-purple-100">
                <ShieldCheck className="w-4 h-4 text-purple-700 shrink-0" />
                <span>
                  {language === 'bn' 
                    ? 'হরিহরপাড়ায় হোম কালেকশন বা সেন্টারে ভিজিট উভয়ের জন্যই প্রযোজ্য।' 
                    : 'Valid for doorstep collection in Hariharpara or centre walk-in.'}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-2 pt-1">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsBookingOpen(true);
                  }}
                  className="w-full bg-[#e23744] hover:bg-[#c82333] text-white font-bold py-3.5 px-4 rounded-xl shadow-md flex items-center justify-center space-x-2 transition-all cursor-pointer text-sm"
                >
                  <span>{t.proceedToBooking}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-center text-xs font-semibold text-slate-600 hover:text-slate-900 py-1"
                >
                  {t.continueShopping}
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
