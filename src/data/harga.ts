/**
 * Pricelist for the website service. Prices are "mulai dari" (starting from).
 * Set WA_NUMBER (e.g. '6281234567890', no + or spaces) to send chats to your
 * own WhatsApp; while it's empty the buttons open WhatsApp without a number.
 */
export const WA_NUMBER = '';

export const waTo = (text: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export type Paket = {
  name: string;
  price: number;
  from?: boolean; // show "mulai" prefix more prominently (custom work)
  time: string;
  features: string[];
  featured?: boolean;
};

export type Kategori = {
  id: string;
  title: string;
  blurb: string;
  demo?: { href: string; label: string };
  pakets: Paket[];
};

export const kategori: Kategori[] = [
  {
    id: 'landing-page',
    title: 'Landing Page',
    blurb: 'Satu halaman untuk promosi produk, iklan Instagram/TikTok, atau event. Fokus ke satu tujuan: chat WhatsApp.',
    demo: { href: 'catering', label: 'Contoh: Dapur Sehari' },
    pakets: [
      {
        name: 'Hemat',
        price: 1_500_000,
        time: '3–5 hari kerja',
        features: ['1 halaman, maks. 6 section', 'Tombol WhatsApp', 'Tampilan rapi di HP', '1x revisi'],
      },
      {
        name: 'Bisnis',
        price: 3_500_000,
        time: '7–10 hari kerja',
        featured: true,
        features: [
          'Desain custom, maks. 10 section',
          'Form kontak',
          'Meta Pixel + Google Analytics 4',
          'SEO dasar',
          '2x revisi',
        ],
      },
    ],
  },
  {
    id: 'company-profile',
    title: 'Company Profile',
    blurb: 'Website resmi untuk klinik, kantor, sekolah, atau jasa. Bikin bisnis terlihat terpercaya dan mudah ditemukan di Google.',
    demo: { href: 'klinik', label: 'Contoh: Klinik Gigi Arunika' },
    pakets: [
      {
        name: 'Starter',
        price: 4_500_000,
        time: '± 2 minggu',
        features: [
          '5 halaman',
          'CMS berita / galeri (bisa diisi sendiri)',
          'Google Maps + WhatsApp',
          'Setup Google Business Profile',
          '2x revisi',
        ],
      },
      {
        name: 'Pro',
        price: 9_000_000,
        time: '3–4 minggu',
        featured: true,
        features: [
          '8–12 halaman',
          '2 bahasa (Indonesia / Inggris)',
          'Blog',
          'Desain custom',
          'Optimasi kecepatan + SEO',
          '3x revisi',
        ],
      },
    ],
  },
  {
    id: 'toko-online',
    title: 'Toko Online',
    blurb: 'Jualan di website sendiri, tanpa potongan marketplace. Bisa mulai dari katalog WhatsApp, lalu naik ke toko lengkap.',
    demo: { href: 'toko', label: 'Contoh: Kopi Lereng' },
    pakets: [
      {
        name: 'Katalog WhatsApp',
        price: 4_000_000,
        time: '± 2 minggu',
        features: ['Maks. 50 produk', 'Kategori produk', 'Keranjang → pesanan masuk ke WhatsApp', '2x revisi'],
      },
      {
        name: 'Toko Lengkap',
        price: 12_000_000,
        time: '4–6 minggu',
        featured: true,
        features: [
          'WooCommerce',
          'Bayar via QRIS, Virtual Account, e-wallet (Midtrans / Xendit)',
          'Cek ongkir otomatis (JNE, SiCepat, J&T, dll.)',
          'Upload 50 produk',
          'Pelatihan admin',
        ],
      },
      {
        name: 'Custom / Integrasi',
        price: 35_000_000,
        from: true,
        time: 'sesuai proyek',
        features: ['Backend custom', 'Sinkron stok dengan marketplace', 'Integrasi ERP / sistem internal', 'Penawaran per proyek'],
      },
    ],
  },
];

export const included = [
  { title: 'Domain .com + hosting 1 tahun', desc: 'Domain terdaftar atas nama Anda, bukan atas nama kami.' },
  { title: 'SSL (https)', desc: 'Gembok hijau di browser, aman untuk form dan pembayaran.' },
  { title: 'Ringan di HP', desc: 'Dioptimalkan untuk HP Android dan internet seluler.' },
  { title: 'Garansi bug 30 hari', desc: 'Ada yang error setelah online? Kami perbaiki gratis.' },
];

export const addons = [
  { name: 'Halaman tambahan', price: 'Rp400.000 / halaman' },
  { name: 'Upload produk', price: 'Rp7.500 / produk' },
  { name: 'Revisi tambahan', price: 'Rp200.000 / jam' },
  { name: 'Copywriting & logo', price: 'Sesuai permintaan' },
];

export const maintenance = [
  {
    name: 'Basic',
    price: 300_000,
    features: ['Perpanjangan domain + hosting', 'Backup rutin', 'Update keamanan', 'Monitoring website 24 jam'],
  },
  {
    name: 'Bisnis',
    price: 600_000,
    featured: true,
    features: ['Semua isi Basic', '2 jam edit konten / bulan', 'Laporan bulanan'],
  },
  {
    name: 'Toko',
    price: 1_250_000,
    features: ['Semua isi Bisnis', 'Penanganan masalah plugin, pembayaran & ongkir', 'Update produk kecil'],
  },
];

export const steps = [
  { title: 'Konsultasi gratis', desc: 'Ceritakan bisnis dan kebutuhan Anda lewat WhatsApp.' },
  { title: 'Penawaran', desc: 'Kami kirim rincian pekerjaan, harga, dan jadwal yang jelas.' },
  { title: 'DP 50%', desc: 'Pengerjaan dimulai setelah DP dan materi (teks, foto, logo) diterima.' },
  { title: 'Desain & pengerjaan', desc: 'Anda bisa melihat progres website secara online.' },
  { title: 'Revisi', desc: 'Sesuai jumlah revisi di paket yang dipilih.' },
  { title: 'Pelunasan & online', desc: 'Setelah lunas 50%, website online dan semua akses diserahkan.' },
];

export const faqs = [
  {
    q: 'Kenapa harganya "mulai dari"?',
    a: 'Harga di atas untuk kebutuhan standar paket. Kalau ada fitur atau halaman tambahan, kami hitung dan tulis jelas di penawaran sebelum mulai. Tidak ada biaya tersembunyi.',
  },
  {
    q: 'Apa yang perlu saya siapkan?',
    a: 'Logo, foto produk atau tempat usaha, teks singkat tentang bisnis, dan daftar produk/layanan. Belum punya? Kami bantu dengan biaya tambahan copywriting dan desain logo.',
  },
  {
    q: 'Tahun kedua bayar berapa?',
    a: 'Untuk landing page dan company profile sekitar Rp300.000/tahun (domain + hosting). Toko online WooCommerce sekitar Rp1,2 juta/tahun. Atau ambil paket perawatan bulanan yang sudah termasuk perpanjangan.',
  },
  {
    q: 'Apakah saya bisa mengubah isi website sendiri?',
    a: 'Bisa, untuk Company Profile dan Toko Online. Anda dapat panel admin dan pelatihan singkat. Landing page biasanya kami yang update, atau lewat paket perawatan.',
  },
  {
    q: 'Biaya payment gateway berapa?',
    a: 'Tidak ada biaya bulanan. Potongan per transaksi dari Midtrans/Xendit, contohnya QRIS 0,7% dan Virtual Account Rp4.000 per transaksi. Dana masuk ke rekening Anda sendiri.',
  },
  {
    q: 'Kalau saya sudah jualan di Shopee/Tokopedia, perlu toko sendiri?',
    a: 'Toko sendiri melengkapi marketplace, bukan menggantikan. Pelanggan setia bisa beli langsung tanpa potongan komisi, dan Anda punya data pelanggan sendiri.',
  },
];
