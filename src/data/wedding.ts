// Content for the wedding catering demo. Laras Rasa is a fictional business:
// names, prices, reviews and the address are made up.

export const biz = {
  name: 'Laras Rasa Catering',
  short: 'Laras Rasa',
  tagline: 'Pesta lancar, tamu kenyang, keluarga tenang.',
  area: 'Kartasura · Solo Raya',
  address: 'Jl. Laras Rasa No. 8, Kartasura, Sukoharjo (alamat fiktif)',
  rating: '4,8',
  reviews: 312,
};

export const perks = ['Gratis test food', 'Gratis sinoman & peralatan saji', 'Gratis transport se-Solo Raya'];

export const reasons = [
  { big: `★ ${biz.rating}`, label: `dari ${biz.reviews} ulasan Google` },
  { big: '1.200+', label: 'acara sejak 2016' },
  { big: '< 15 menit', label: 'rata-rata admin membalas' },
  { big: 'Bersertifikat', label: 'halal dan laik higiene' },
];

export const services = [
  {
    title: 'Catering Wedding',
    desc: 'Prasmanan dan piring terbang khas Solo untuk resepsi, lengkap dengan sinoman dan peralatan saji.',
    tags: 'Resepsi · Ngunduh mantu · Lamaran',
    icon: 'M3 18h18M5 18a7 7 0 0114 0M12 9V7M10 7h4',
  },
  {
    title: 'Nasi Box',
    desc: 'Nasi kotak untuk acara kantor, pengajian, syukuran, dan rombongan wisata.',
    tags: 'Kantor · Pengajian · Syukuran',
    icon: 'M3 7l9-4 9 4v10l-9 4-9-4V7zM3 7l9 4 9-4M12 11v10',
  },
  {
    title: 'Snack Box',
    desc: 'Kue basah dan jajanan pasar dalam box untuk rapat, arisan, dan acara keluarga.',
    tags: 'Rapat · Arisan · Pengajian',
    icon: 'M5 10h14l-1.5 9h-11L5 10zM7 10a5 5 0 0110 0M9 14h6',
  },
  {
    title: 'Tumpeng & Hampers',
    desc: 'Tumpeng syukuran dan hampers makanan untuk ulang tahun, peresmian, dan hari raya.',
    tags: 'Syukuran · Peresmian · Hari raya',
    icon: 'M12 3l7 16H5l7-16zM4 19h16',
  },
];

/** Course order of a Solo-style "piring terbang" reception. */
export const courses = [
  { name: 'Unjukan', dish: 'Teh manis hangat dan air mineral', time: 'Tamu duduk' },
  { name: 'Snack', dish: 'Sus vla, lemper, dan risoles dalam piring kecil', time: '+10 menit' },
  { name: 'Sup', dish: 'Sup matahari atau sup manten', time: '+25 menit' },
  { name: 'Hidangan utama', dish: 'Selat Solo atau nasi dengan galantin dan acar', time: '+40 menit' },
  { name: 'Pencuci mulut', dish: 'Es buah atau es puter', time: '+55 menit' },
];

export const packages = [
  {
    name: 'Piring Terbang',
    sub: 'Khas resepsi Solo',
    price: 38_000,
    unit: 'per tamu',
    items: ['5 urutan hidangan, diantar sinoman', 'Minimal 300 tamu', 'Gratis sinoman & peralatan saji', 'Gratis test food untuk 4 orang'],
    highlight: true,
  },
  {
    name: 'Prasmanan Wedding',
    sub: 'Untuk resepsi dan lamaran',
    price: 32_000,
    unit: 'per pax',
    items: ['Nasi, 3 lauk, sayur, buah, minuman', '2 stand gubukan (mis. bakso, siomay)', 'Meja saji dan dekor meja', 'Gratis transport se-Solo Raya'],
    highlight: false,
  },
  {
    name: 'Nasi Box',
    sub: 'Kantor, pengajian, syukuran',
    price: 22_000,
    unit: 'per box',
    items: ['Nasi, 2 lauk, sayur, sambal, buah', 'Minimal 30 box', 'Kemasan food grade, tahan sampai malam', 'Antar gratis radius 15 km'],
    highlight: false,
  },
];

export const testimonials = [
  { name: 'Dinda & Raka', role: 'Resepsi 600 tamu, Solo', text: 'Piring terbangnya tepat waktu dari unjukan sampai es buah. Tamu dari luar kota sampai tanya nama catering-nya.' },
  { name: 'Bu Retno', role: 'Ngunduh mantu, Klaten', text: 'Test food-nya bikin yakin. Waktu tamu ternyata lebih banyak, tim langsung menambah porsi tanpa drama.' },
  { name: 'PT Sinar Kartasura', role: 'Nasi box 250 kotak', text: 'Pesan H-2 masih bisa, kotaknya rapi, dan semua lauk masih enak waktu acara selesai sore.' },
];

export const steps = [
  ['Cek tanggal', 'Isi form di bawah. Tanggal, jenis acara, dan jumlah tamu langsung terkirim ke WhatsApp admin.'],
  ['Test food gratis', 'Cicipi menu pilihan bersama keluarga sebelum memutuskan.'],
  ['DP 30%', 'Tanggal terkunci. Menu dan jumlah porsi masih bisa diubah sampai H-7.'],
  ['Hari H beres', 'Tim sinoman datang 3 jam sebelum acara. Anda tinggal menikmati pesta.'],
];

export const areas = ['Solo', 'Sukoharjo', 'Karanganyar', 'Boyolali', 'Klaten', 'Sragen', 'Wonogiri'];

export const hours = [
  ['Senin – Sabtu', '08.00–17.00'],
  ['Minggu', '08.00–12.00 (janji test food)'],
];

export const faqs = [
  ['Apakah bisa test food dulu?', 'Bisa, gratis untuk 4 orang bagi paket wedding. Jadwalnya diatur lewat WhatsApp.'],
  ['Berapa lama sebelumnya harus booking?', 'Untuk wedding idealnya 3–6 bulan sebelumnya, terutama di bulan ramai pernikahan. Nasi box bisa H-2.'],
  ['Bagaimana kalau tamu lebih banyak dari perkiraan?', 'Kami selalu menyiapkan cadangan 5%. Tambahan di luar itu dihitung per porsi setelah acara.'],
  ['Melayani di luar Solo Raya?', 'Bisa untuk acara minimal 500 tamu, dengan biaya transport sesuai jarak.'],
  ['Bagaimana cara pembayaran?', 'DP 30% saat booking, pelunasan H-3. Transfer bank, QRIS, atau Virtual Account.'],
];
