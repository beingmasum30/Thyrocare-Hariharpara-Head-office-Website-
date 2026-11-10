import { DiscountType } from '../types';

/**
 * Calculates final price according to exact business rules:
 * - If percentage: MRP - (MRP * Discount / 100)
 * - If fixed: MRP - Fixed Discount
 * - If none: MRP
 * Never allows final price to become negative.
 */
export function calculateFinalPrice(
  mrp: number,
  discountType: DiscountType,
  discountValue: number
): number {
  if (mrp <= 0) return 0;
  if (!discountType || discountType === 'none' || discountValue <= 0) {
    return Math.round(mrp);
  }

  let finalPrice = mrp;
  if (discountType === 'percentage') {
    finalPrice = mrp - (mrp * discountValue) / 100;
  } else if (discountType === 'fixed') {
    finalPrice = mrp - discountValue;
  }

  return Math.max(0, Math.round(finalPrice));
}

/**
 * Calculates the saved amount in Rupees
 */
export function calculateSavings(
  mrp: number,
  finalPrice: number
): number {
  return Math.max(0, Math.round(mrp - finalPrice));
}

/**
 * Calculates effective savings percentage
 */
export function calculateSavingsPercentage(
  mrp: number,
  finalPrice: number
): number {
  if (mrp <= 0 || finalPrice >= mrp) return 0;
  return Math.round(((mrp - finalPrice) / mrp) * 100);
}

/**
 * Formats Indian Rupee currency
 */
export function formatCurrency(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}
