import React from 'react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';
import { formatCurrency, calculateSavings, calculateSavingsPercentage } from '../utils/pricing';
import { 
  Plus, 
  Check, 
  Info, 
  Clock, 
  Droplet, 
  Flame, 
  Sparkles,
  ShieldAlert
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const { 
    language, 
    t, 
    addToCart, 
    isInCart, 
    setSelectedProduct 
  } = useApp();

  const inCart = isInCart(product.id);
  const savings = calculateSavings(product.mrp, product.final_price);
  const savingsPercent = calculateSavingsPercentage(product.mrp, product.final_price);
  const hasDiscount = savings > 0;

  const displayName = language === 'bn' && product.name_bn ? product.name_bn : product.name;
  const displayDesc = language === 'bn' && product.description_bn ? product.description_bn : product.description;

  return (
    <div 
      className={`group relative bg-white rounded-2xl border transition-all duration-200 flex flex-col justify-between hover:shadow-lg ${
        featured 
          ? 'border-rose-200 shadow-sm ring-1 ring-rose-100' 
          : 'border-slate-200 shadow-2xs hover:border-[#e23744]/40'
      }`}
    >
      {/* Top Banner & Badges */}
      <div className="p-4 sm:p-5 pb-3">
        <div className="flex items-start justify-between gap-2 mb-2.5">
          {/* Category / Test Code Pill */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-200">
              {product.test_code}
            </span>
            {product.is_popular && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200">
                <Sparkles className="w-3 h-3 mr-1 text-amber-600" />
                Popular
              </span>
            )}
            {product.parameters_count && product.parameters_count > 1 && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold bg-rose-50 text-[#e23744] border border-rose-200">
                {product.parameters_count} {t.parameters}
              </span>
            )}
          </div>

          {/* Discount Badge */}
          {hasDiscount && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-black bg-rose-50 text-[#e23744] border border-rose-200 shrink-0">
              {product.discount_type === 'percentage' 
                ? `${product.discount_value}% ${t.off}` 
                : `${formatCurrency(product.discount_value)} ${t.off}`}
            </span>
          )}
        </div>

        {/* Product Title */}
        <h3 
          onClick={() => setSelectedProduct(product)}
          className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#e23744] transition-colors cursor-pointer line-clamp-2 leading-snug"
          title={displayName}
        >
          {displayName}
        </h3>

        {/* Short Description */}
        <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
          {displayDesc}
        </p>

        {/* Metadata badges (Sample & Fasting) */}
        <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex flex-wrap gap-1.5 text-[10px] text-slate-600">
          {product.fasting_required ? (
            <span className="inline-flex items-center text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 font-medium">
              <Clock className="w-3 h-3 mr-1 text-amber-600" />
              {t.fastingRequired}
            </span>
          ) : (
            <span className="inline-flex items-center text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200">
              {t.noFasting}
            </span>
          )}

          {product.sample_type && (
            <span className="inline-flex items-center text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200">
              <Droplet className="w-3 h-3 mr-1 text-[#e23744]" />
              {product.sample_type}
            </span>
          )}
        </div>
      </div>

      {/* Pricing & Actions Footer */}
      <div className="p-4 sm:p-5 pt-3 bg-slate-50/70 rounded-b-2xl border-t border-slate-100 mt-2 space-y-2.5">
        {/* Pricing Display */}
        <div className="flex items-baseline justify-between">
          <div>
            <div className="flex items-baseline space-x-2">
              <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {formatCurrency(product.final_price)}
              </span>
              {hasDiscount && (
                <span className="text-xs text-slate-400 line-through font-medium">
                  {formatCurrency(product.mrp)}
                </span>
              )}
            </div>
            {hasDiscount && (
              <p className="text-[11px] text-emerald-700 font-bold">
                {t.save} {formatCurrency(savings)} ({savingsPercent}%)
              </p>
            )}
          </div>

          <button
            onClick={() => setSelectedProduct(product)}
            className="text-slate-400 hover:text-[#e23744] p-1 rounded-lg hover:bg-white transition-colors"
            title={t.viewDetails}
            aria-label={t.viewDetails}
          >
            <Info className="w-4 h-4" />
          </button>
        </div>

        {/* Buttons: Add to Cart and View Details */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setSelectedProduct(product)}
            className="w-full text-xs font-semibold py-2 px-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition-colors flex items-center justify-center cursor-pointer"
          >
            {t.viewDetails}
          </button>

          <button
            onClick={() => addToCart(product)}
            className={`w-full text-xs font-bold py-2 px-2.5 rounded-xl transition-all flex items-center justify-center space-x-1 cursor-pointer ${
              inCart
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                : 'bg-[#e23744] hover:bg-[#c82333] text-white shadow-sm active:scale-95'
            }`}
          >
            {inCart ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>{t.inCart}</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>{t.addToCart}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
