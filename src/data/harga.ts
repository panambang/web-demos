/**
 * Pricelist for the website service. Prices are "mulai dari" (starting from).
 * Set WA_NUMBER (e.g. '6281234567890', no + or spaces) to send chats to your
 * own WhatsApp; while it's empty the buttons open WhatsApp without a number.
 */
export const WA_NUMBER = '';

export const EMAIL = 'ppanambang@gmail.com';
export const mailto = (subject: string) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;

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
    blurb: 'Satu halaman untuk promosi produk, iklan Instagram/TikTok, atau acara. Dirancang untuk satu tujuan: mengajak pengunjung menghubungi Anda lewat WhatsApp.',
    demo: { href: 'catering', label: 'Lihat contoh: Dapur Sehari' },
    pakets: [
      {
        name: 'Hemat',
        price: 1_500_000,
        time: '3–5 hari kerja',
        features: ['1 halaman, hingga 6 bagian', 'Tombol WhatsApp', 'Tampilan responsif di HP', '1 kali revisi'],
      },
      {
        name: 'Bisnis',
        price: 3_500_000,
        time: '7–10 hari kerja',
        featured: true,
        features: [
          'Desain khusus sesuai brand, hingga 10 bagian',
          'Formulir kontak',
          'Pemasangan Meta Pixel dan Google Analytics 4',
          'SEO dasar',
          '2 kali revisi',
        ],
      },
    ],
  },
  {
    id: 'company-profile',
    title: 'Company Profile',
    blurb: 'Website resmi untuk klinik, kantor, sekolah, atau usaha jasa. Membuat bisnis Anda tampil profesional, tepercaya, dan mudah ditemukan di Google.',
    demo: { href: 'klinik', label: 'Lihat contoh: Klinik Gigi Arunika' },
    pakets: [
      {
        name: 'Starter',
        price: 4_500_000,
        time: 'sekitar 2 minggu',
        features: [
          '5 halaman',
          'Halaman berita dan galeri yang bisa Anda perbarui sendiri',
          'Peta lokasi Google Maps dan tombol WhatsApp',
          'Pengaturan Google Business Profile',
          '2 kali revisi',
        ],
      },
      {
        name: 'Pro',
        price: 9_000_000,
        time: '3–4 minggu',
        featured: true,
        features: [
          '8–12 halaman',
          'Dua bahasa (Indonesia dan Inggris)',
          'Blog',
          'Desain khusus sesuai brand',
          'Optimasi kecepatan dan SEO',
          '3 kali revisi',
        ],
      },
    ],
  },
  {
    id: 'toko-online',
    title: 'Toko Online',
    blurb: 'Berjualan di website sendiri tanpa potongan komisi marketplace. Mulai dari katalog WhatsApp, lalu kembangkan menjadi toko online lengkap.',
    demo: { href: 'toko', label: 'Lihat contoh: Kopi Lereng' },
    pakets: [
      {
        name: 'Katalog WhatsApp',
        price: 4_000_000,
        time: 'sekitar 2 minggu',
        features: [
          'Hingga 50 produk',
          'Kategori produk',
          'Keranjang belanja, pesanan langsung terkirim ke WhatsApp',
          '2 kali revisi',
        ],
      },
      {
        name: 'Toko Lengkap',
        price: 12_000_000,
        time: '4–6 minggu',
        featured: true,
        features: [
          'Toko online berbasis WooCommerce',
          'Pembayaran QRIS, Virtual Account, dan e-wallet (Midtrans/Xendit)',
          'Ongkos kirim otomatis (JNE, SiCepat, J&T, dan lainnya)',
          'Input hingga 50 produk',
          'Pelatihan pengelolaan toko',
        ],
      },
      {
        name: 'Custom / Integrasi',
        price: 35_000_000,
        from: true,
        time: 'sesuai proyek',
        features: [
          'Sistem backend khusus',
          'Sinkronisasi stok dengan marketplace',
          'Integrasi dengan ERP atau sistem internal',
          'Harga sesuai kebutuhan proyek',
        ],
      },
    ],
  },
];

export const included = [
  { title: 'Domain .com dan hosting 1 tahun', desc: 'Domain didaftarkan atas nama Anda sebagai pemilik.' },
  { title: 'Sertifikat SSL (https)', desc: 'Koneksi aman untuk formulir dan pembayaran, dengan ikon gembok di browser.' },
  { title: 'Cepat diakses dari HP', desc: 'Dioptimalkan untuk HP Android dan jaringan seluler.' },
  { title: 'Garansi perbaikan 30 hari', desc: 'Jika ada kesalahan setelah website tayang, saya perbaiki tanpa biaya.' },
];

export const addons = [
  { name: 'Halaman tambahan', price: 'Rp400.000 / halaman' },
  { name: 'Input produk', price: 'Rp7.500 / produk' },
  { name: 'Revisi di luar paket', price: 'Rp200.000 / jam' },
  { name: 'Penulisan konten (copywriting) dan desain logo', price: 'Sesuai kebutuhan' },
];

export const maintenance = [
  {
    name: 'Basic',
    price: 300_000,
    features: ['Perpanjangan domain dan hosting', 'Pencadangan (backup) rutin', 'Pembaruan keamanan', 'Pemantauan website 24 jam'],
  },
  {
    name: 'Bisnis',
    price: 600_000,
    featured: true,
    features: ['Semua layanan paket Basic', 'Perubahan konten hingga 2 jam per bulan', 'Laporan bulanan'],
  },
  {
    name: 'Toko',
    price: 1_250_000,
    features: [
      'Semua layanan paket Bisnis',
      'Penanganan kendala plugin, pembayaran, dan ongkos kirim',
      'Pembaruan produk skala kecil',
    ],
  },
];

export const steps = [
  { title: 'Konsultasi gratis', desc: 'Ceritakan bisnis dan kebutuhan Anda lewat WhatsApp.' },
  { title: 'Penawaran', desc: 'Saya kirimkan rincian pekerjaan, biaya, dan jadwal secara tertulis.' },
  { title: 'Uang muka 50%', desc: 'Pengerjaan dimulai setelah uang muka dan materi (teks, foto, logo) diterima.' },
  { title: 'Desain dan pengembangan', desc: 'Anda dapat memantau perkembangan website secara online.' },
  { title: 'Revisi', desc: 'Sesuai jumlah revisi pada paket yang dipilih.' },
  { title: 'Pelunasan dan peluncuran', desc: 'Setelah pelunasan 50%, website ditayangkan dan seluruh akses diserahkan kepada Anda.' },
];

export const faqs = [
  {
    q: 'Mengapa harga tertulis "mulai dari"?',
    a: 'Harga tersebut berlaku untuk isi standar setiap paket. Jika ada fitur atau halaman tambahan, biayanya saya hitung dan cantumkan dengan jelas di penawaran sebelum pengerjaan dimulai. Tidak ada biaya tersembunyi.',
  },
  {
    q: 'Apa saja yang perlu saya siapkan?',
    a: 'Logo, foto produk atau tempat usaha, deskripsi singkat bisnis, serta daftar produk atau layanan. Jika belum ada, saya bisa membantu dengan tambahan biaya untuk penulisan konten dan desain logo.',
  },
  {
    q: 'Berapa biaya di tahun kedua?',
    a: 'Untuk landing page dan company profile sekitar Rp300.000 per tahun (domain dan hosting). Untuk toko online WooCommerce sekitar Rp1,2 juta per tahun. Biaya ini sudah termasuk jika Anda berlangganan paket pemeliharaan bulanan.',
  },
  {
    q: 'Apakah saya bisa mengubah isi website sendiri?',
    a: 'Bisa, untuk paket Company Profile dan Toko Online. Anda mendapatkan akses panel admin beserta pelatihan singkat. Untuk landing page, perubahan biasanya saya kerjakan, atau melalui paket pemeliharaan.',
  },
  {
    q: 'Berapa biaya payment gateway?',
    a: 'Tidak ada biaya bulanan, hanya potongan per transaksi dari Midtrans/Xendit, misalnya QRIS 0,7% dan Virtual Account Rp4.000 per transaksi. Dana langsung masuk ke rekening Anda.',
  },
  {
    q: 'Saya sudah berjualan di Shopee/Tokopedia. Apakah masih perlu toko online sendiri?',
    a: 'Toko online sendiri melengkapi marketplace, bukan menggantikannya. Pelanggan setia dapat membeli langsung tanpa potongan komisi, dan Anda memiliki data pelanggan sendiri.',
  },
];
