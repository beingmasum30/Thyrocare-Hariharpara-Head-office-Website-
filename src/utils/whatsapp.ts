import { Booking } from '../types';
import { formatCurrency } from './pricing';

export const WHATSAPP_PHONE = '917864028283';

/**
 * Builds the exact required WhatsApp pre-filled text
 */
export function buildWhatsAppBookingMessage(booking: Booking): string {
  const itemsText = booking.items
    .map((item, index) => {
      const lineTotal = item.price * item.quantity;
      const qtyStr = item.quantity > 1 ? ` (Qty: ${item.quantity})` : '';
      return `${index + 1}. ${item.product_name} – ${item.test_code} – ${formatCurrency(lineTotal)}${qtyStr}`;
    })
    .join('\n');

  const message = `THYROCARE HARIHARPARA – BOOKING REQUEST
Patient Name: ${booking.patient_name}
Age: ${booking.age}
Gender: ${booking.gender}
Mobile: ${booking.phone}
Address: ${booking.address}${booking.area ? `\nArea/Village: ${booking.area}` : ''}${booking.pincode ? `\nPIN Code: ${booking.pincode}` : ''}${booking.maps_link ? `\n📍 Google Maps Live Location: ${booking.maps_link}` : (booking.latitude && booking.longitude ? `\n📍 Google Maps Live Location: https://maps.google.com/?q=${booking.latitude},${booking.longitude}` : '')}
Collection Preference: ${booking.collection_type}
Preferred Date: ${booking.preferred_date}
Selected Tests/Packages:
${itemsText}
Subtotal: ${formatCurrency(booking.subtotal)}
Total Discount: ${formatCurrency(booking.total_discount)}
Final Total: ${formatCurrency(booking.final_total)}
Additional Instructions: ${booking.additional_instructions ? booking.additional_instructions : 'None'}
${booking.doctor_ref ? `Doctor/Prescription Ref: ${booking.doctor_ref}\n` : ''}Booking Status: Pending Confirmation`;

  return message;
}

/**
 * Generates the wa.me click-to-chat link
 */
export function generateWhatsAppLink(booking: Booking): string {
  const message = buildWhatsAppBookingMessage(booking);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
}

/**
 * Simple quick chat link for general inquiries
 */
export function generateQuickChatLink(customText?: string): string {
  const text = customText || 'Hello Thyrocare Hariharpara, I have an inquiry regarding blood tests / health packages.';
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}
