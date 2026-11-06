// Catalog, shipping and payment data for the store demo.
// In production: products from WooCommerce/CMS, rates from Biteship/RajaOngkir,
// payments through Midtrans/Xendit Snap.

export type Kind = 'bag' | 'drip' | 'bottle' | 'dripper' | 'grinder';
export type Category = 'biji' | 'drip' | 'coldbrew' | 'alat';

export interface Product {
  id: string;
  name: string;
  origin: string;
  notes: string;
  size: string;
  price: number;
  category: Category;
  kind: Kind;
  color: string;
  accent: string;
  grind?: boolean;
  badge?: string;
}

export const categories: [Category | 'semua', string][] = [
  ['semua', 'Semua'],
  ['biji', 'Biji Kopi'],
  ['drip', 'Drip Bag'],
  ['coldbrew', 'Cold Brew'],
  ['alat', 'Alat Seduh'],
];

export const products: Product[] = [
  { id: 'gayo', name: 'Gayo Wine', origin: 'Aceh · Natural', notes: 'Anggur, cokelat hitam', size: '200 g', price: 115000, category: 'biji', kind: 'bag', color: '#7f1d1d', accent: '#fca5a5', grind: true, badge: 'Terlaris' },
  { id: 'toraja', name: 'Toraja Sapan', origin: 'Sulawesi Selatan · Washed', notes: 'Rempah, karamel', size: '200 g', price: 105000, category: 'biji', kind: 'bag', color: '#78350f', accent: '#fcd34d', grind: true },
  { id: 'kintamani', name: 'Kintamani', origin: 'Bali · Honey', notes: 'Jeruk, gula aren', size: '200 g', price: 98000, category: 'biji', kind: 'bag', color: '#c2410c', accent: '#fed7aa', grind: true, badge: 'Baru' },
  { id: 'bajawa', name: 'Flores Bajawa', origin: 'NTT · Washed', notes: 'Kacang, cokelat susu', size: '200 g', price: 95000, category: 'biji', kind: 'bag', color: '#365314', accent: '#d9f99d', grind: true },
  { id: 'preanger', name: 'Java Preanger', origin: 'Jawa Barat · Semi-washed', notes: 'Teh hitam, madu', size: '200 g', price: 92000, category: 'biji', kind: 'bag', color: '#1e3a8a', accent: '#bfdbfe', grind: true },
  { id: 'temanggung', name: 'Robusta Temanggung', origin: 'Jawa Tengah · Fine Robusta', notes: 'Cokelat, kacang mete', size: '200 g', price: 65000, category: 'biji', kind: 'bag', color: '#292524', accent: '#d6d3d1', grind: true },
  { id: 'drip-sampler', name: 'Drip Bag Sampler', origin: '5 origin × 2', notes: 'Tinggal seduh air panas', size: '10 pcs', price: 85000, category: 'drip', kind: 'drip', color: '#a16207', accent: '#fef08a' },
  { id: 'drip-gayo', name: 'Drip Bag Gayo', origin: 'Aceh', notes: 'Buah merah, manis', size: '10 pcs', price: 90000, category: 'drip', kind: 'drip', color: '#7f1d1d', accent: '#fecaca' },
  { id: 'cb-kintamani', name: 'Cold Brew Kintamani', origin: 'Siap minum', notes: 'Segar, jeruk', size: '1 liter', price: 120000, category: 'coldbrew', kind: 'bottle', color: '#c2410c', accent: '#ffedd5' },
  { id: 'cb-aren', name: 'Cold Brew Susu Aren', origin: 'Siap minum', notes: 'Creamy, gula aren', size: '4 × 250 ml', price: 96000, category: 'coldbrew', kind: 'bottle', color: '#92400e', accent: '#fef3c7' },
  { id: 'dripper', name: 'Dripper Keramik 02', origin: 'Alat seduh', notes: 'Untuk 1–4 cangkir', size: '1 pcs', price: 185000, category: 'alat', kind: 'dripper', color: '#f5f5f4', accent: '#a8a29e' },
  { id: 'grinder', name: 'Grinder Manual Burr', origin: 'Alat seduh', notes: 'Burr stainless, 6 level', size: '1 pcs', price: 450000, category: 'alat', kind: 'grinder', color: '#44403c', accent: '#d6d3d1' },
];

export const grinds = ['Biji utuh', 'Giling V60 / pour over', 'Giling espresso', 'Giling tubruk / french press'];

/** Mock REG shipping per kg by destination. Production: Biteship / RajaOngkir API. */
export const cities: { name: string; zone: 'jkt' | 'jabo' | 'luar'; reg: number; eta: string }[] = [
  { name: 'Jakarta', zone: 'jkt', reg: 12000, eta: '1–2 hari' },
  { name: 'Bogor / Depok / Tangerang / Bekasi', zone: 'jabo', reg: 15000, eta: '1–2 hari' },
  { name: 'Bandung', zone: 'luar', reg: 18000, eta: '2–3 hari' },
  { name: 'Semarang', zone: 'luar', reg: 22000, eta: '2–3 hari' },
  { name: 'Yogyakarta', zone: 'luar', reg: 22000, eta: '2–3 hari' },
  { name: 'Surabaya', zone: 'luar', reg: 24000, eta: '2–4 hari' },
  { name: 'Denpasar', zone: 'luar', reg: 30000, eta: '3–4 hari' },
  { name: 'Medan', zone: 'luar', reg: 38000, eta: '3–5 hari' },
  { name: 'Makassar', zone: 'luar', reg: 42000, eta: '3–5 hari' },
];

export const couriers = [
  { id: 'jne', name: 'JNE REG', factor: 1 },
  { id: 'sicepat', name: 'SiCepat REG', factor: 0.95 },
  { id: 'jnt', name: 'J&T EZ', factor: 1 },
  { id: 'instant', name: 'Instant (motor, Jakarta saja)', factor: 0 },
];

export const FREE_SHIPPING_MIN = 250000;
export const INSTANT_FLAT = 35000;

export const payments = [
  { id: 'qris', name: 'QRIS', desc: 'Scan dari aplikasi bank atau e-wallet apa saja' },
  { id: 'va-bca', name: 'Virtual Account BCA', desc: 'Dicek otomatis, tanpa kirim bukti transfer' },
  { id: 'va-mandiri', name: 'Virtual Account Mandiri', desc: 'Dicek otomatis, tanpa kirim bukti transfer' },
  { id: 'va-bri', name: 'Virtual Account BRI', desc: 'Dicek otomatis, tanpa kirim bukti transfer' },
  { id: 'ewallet', name: 'GoPay / ShopeePay / DANA / OVO', desc: 'Diarahkan ke aplikasi e-wallet' },
];
