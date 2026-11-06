// Content for the catering landing page demo.

export const pains = [
  { emoji: '⏰', title: 'Tidak sempat masak', desc: 'Berangkat pagi, pulang malam. Ujung-ujungnya pesan makanan yang itu-itu lagi.' },
  { emoji: '💸', title: 'Jajan siang makin mahal', desc: 'Makan siang plus ongkir bisa Rp60–80 ribu sekali makan.' },
  { emoji: '🥗', title: 'Mau makan sehat tapi bingung', desc: 'Tidak tahu harus makan apa, berapa kalori, dan porsinya.' },
];

export const menu = [
  { day: 'Senin', dish: 'Ayam bakar madu, nasi merah, tumis buncis', kcal: 520, tone: 'bg-orange-100' },
  { day: 'Selasa', dish: 'Ikan dori sambal matah, nasi shirataki, sayur asem', kcal: 450, tone: 'bg-lime-100' },
  { day: 'Rabu', dish: 'Beef teriyaki, nasi merah, brokoli wortel', kcal: 560, tone: 'bg-amber-100' },
  { day: 'Kamis', dish: 'Pepes tahu jamur, telur balado, urap sayur', kcal: 470, tone: 'bg-emerald-100' },
  { day: 'Jumat', dish: 'Chicken katsu oven, salad wijen, kentang panggang', kcal: 540, tone: 'bg-yellow-100' },
];

export const packages = [
  {
    name: 'Coba Dulu',
    days: '5 hari',
    price: 275000,
    per: 55000,
    items: ['1x makan siang per hari', 'Menu berganti setiap hari', 'Gratis ongkir minggu pertama'],
    highlight: false,
  },
  {
    name: 'Langganan Bulanan',
    days: '20 hari',
    price: 1000000,
    per: 50000,
    items: ['1x makan siang per hari', 'Bebas pilih hari libur', 'Gratis ongkir area layanan', 'Bisa jeda kalau cuti'],
    highlight: true,
  },
  {
    name: 'Program Diet',
    days: '20 hari',
    price: 1800000,
    per: 45000,
    items: ['Makan siang + makan malam', 'Total 1.100–1.300 kkal/hari', 'Konsultasi ahli gizi via WhatsApp', 'Gratis ongkir area layanan'],
    highlight: false,
  },
];

export const steps = [
  ['Pilih paket', 'Klik tombol pesan di paket yang Anda mau.'],
  ['Chat admin', 'Kirim alamat dan tanggal mulai lewat WhatsApp.'],
  ['Bayar', 'Transfer, QRIS, atau e-wallet. Konfirmasi otomatis.'],
  ['Makanan datang', 'Diantar sebelum jam 11.30 dalam kemasan food grade.'],
];

export const testimonials = [
  { name: 'Dewi A.', role: 'Karyawan swasta, Kuningan', text: 'Sudah 3 bulan langganan. Turun 4 kg tanpa merasa diet, dan tidak pusing mikir makan siang.' },
  { name: 'Fajar R.', role: 'Startup, SCBD', text: 'Rasanya enak, bukan makanan diet yang hambar. Porsinya pas, datang selalu tepat waktu.' },
  { name: 'Lia M.', role: 'Ibu bekerja, Tebet', text: 'Bisa jeda waktu anak sakit dan saya WFH. Adminnya cepat balas.' },
];

export const areas = ['Jakarta Selatan', 'Jakarta Pusat', 'Jakarta Barat (sebagian)', 'Tangerang Selatan (BSD, Bintaro)'];

export const faqs = [
  ['Jam berapa makanan diantar?', 'Makan siang tiba pukul 10.30–11.30. Paket diet: makan malam diantar bersamaan dan cukup dihangatkan.'],
  ['Bisa request tanpa seafood atau pedas?', 'Bisa. Tulis pantangan saat chat admin, menu akan disesuaikan tanpa biaya tambahan.'],
  ['Kalau saya libur atau cuti?', 'Kabari admin paling lambat H-1 pukul 15.00, jatah hari itu dipindah ke hari lain.'],
  ['Bagaimana cara bayar?', 'Transfer bank, Virtual Account, QRIS, GoPay, OVO, atau DANA.'],
];
