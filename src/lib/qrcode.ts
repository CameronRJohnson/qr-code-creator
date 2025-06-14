// Simple QR code generator using qrcode library
import QRCode from 'qrcode';
import { writable } from 'svelte/store';

export const qrDataUrl = writable('');

export async function generateQRCode(text: string) {
  if (!text) {
    qrDataUrl.set('');
    return;
  }
  try {
    const url = await QRCode.toDataURL(text, { margin: 2, color: { dark: '#fff', light: '#222' } });
    qrDataUrl.set(url);
  } catch (err) {
    qrDataUrl.set('');
  }
}
