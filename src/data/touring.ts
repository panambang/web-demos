// Content for the touring club demo. Jejak Aspal Touring Club is fictional:
// names, numbers, addresses, events and prices are made up.
//
// Photos are hotlinked from the Unsplash CDN (free under the Unsplash License),
// sized per breakpoint with its URL params. People in the photos are not the
// fictional board members, so board members get drawn helmet avatars instead.

import { photo } from './restoran';
export { photo, srcset } from './restoran';

/** srcset that keeps one edge of the photo when Unsplash crops it (imgix crop param). */
export const cropSet = (id: string, ratio: number, widths: number[], crop = 'bottom') =>
  widths.map((w) => `${photo(id, w, Math.round(w * ratio))}&crop=${crop} ${w}w`).join(', ');

export const img = {
  hero: 'photo-1690540293148-affdded8f45a',
  garage: 'photo-1578474005126-89909099fed6',
  helmet: 'photo-1611004061856-ccc3cbe944b2',
};

export const club = {
  name: 'Jejak Aspal Touring Club',
  short: 'Jejak Aspal',
  abbr: 'JATC',
  since: 2012,
  plate: 'AD 2012 JA',
  base: 'Solo Raya',
  tagline: 'Jalan jauh, pulang utuh.',
  intro:
    'Klub touring motor dari Solo Raya sejak 2012. Semua merek dan jenis motor boleh gabung. Touring tiap bulan, kopdar tiap Jumat malam, dan satu aturan yang tidak bisa ditawar: semua yang berangkat harus pulang selamat.',
  km: 184620,
  kopdar: 'Jumat, 20.00 WIB',
  basecamp: 'Bengkel & Kopi Jejak, Jl. Solo–Tawangmangu Km 9, Karanganyar (alamat fiktif)',
  phone: '0812-0000-2012',
  instagram: '@jejakaspal.demo',
  fee: { join: 75000, monthly: 25000 },
};

export const stats = [
  { n: 412, label: 'anggota aktif' },
  { n: 6, label: 'chapter di Jawa' },
  { n: 137, label: 'touring sejak 2012' },
  { n: 0, label: 'rider ditinggal di jalan' },
];

/** Club rules: four things every member signs up to. */
export const rules = [
  {
    title: 'Safety dulu, gaya belakangan',
    text: 'Helm full face, jaket, sarung tangan, dan sepatu wajib. Briefing dan cek motor sebelum roda berputar.',
  },
  {
    title: 'Satu rombongan, satu ritme',
    text: 'Road captain di depan, sweeper di belakang. Tidak ada yang balapan, tidak ada yang ditinggal.',
  },
  {
    title: 'Tertib, tanpa strobo',
    text: 'Tidak pakai sirine atau lampu strobo, berhenti di lampu merah, dan memberi jalan untuk ambulans.',
  },
  {
    title: 'Pulang bawa manfaat',
    text: 'Tiap touring ada bakti sosial di tujuan. Donor darah bareng PMI setiap tiga bulan.',
  },
];

export type Level = 'Santai' | 'Menengah' | 'Berat';
export type EventType = 'touring' | 'kopdar' | 'baksos';

export type ClubEvent = {
  id: string;
  type: EventType;
  title: string;
  /** ISO date of the first day, WIB. */
  date: string;
  dateLabel: string;
  from: string;
  to: string;
  km: number;
  days: string;
  level: Level;
  meet: string;
  quota: number;
  filled: number;
  fee: number;
  includes: string;
  photo: string;
};

export const events: ClubEvent[] = [
  {
    id: 'kopdar-akhir-tahun',
    type: 'kopdar',
    title: 'Kopdar Akhir Tahun & Servis Bareng',
    date: '2026-12-05',
    dateLabel: 'Sab, 5 Des 2026',
    from: 'Basecamp',
    to: 'Basecamp',
    km: 0,
    days: '1 malam',
    level: 'Santai',
    meet: 'Basecamp Karanganyar, 19.00',
    quota: 120,
    filled: 64,
    fee: 0,
    includes: 'Cek rem & ban gratis, wedang jahe, doorprize',
    photo: 'photo-1567516365182-1498ada52f85',
  },
  {
    id: 'bromo',
    type: 'touring',
    title: 'Bromo Sunrise Ride',
    date: '2026-12-12',
    dateLabel: '12–13 Des 2026',
    from: 'Solo',
    to: 'Bromo',
    km: 310,
    days: '2 hari',
    level: 'Menengah',
    meet: 'Basecamp Karanganyar, 04.30',
    quota: 40,
    filled: 33,
    fee: 350000,
    includes: 'Homestay, 3x makan, tiket TNBTS, kaos event',
    photo: 'photo-1602154663343-89fe0bf541ab',
  },
  {
    id: 'dieng',
    type: 'touring',
    title: 'Menembus Kabut Dieng',
    date: '2027-01-10',
    dateLabel: 'Min, 10 Jan 2027',
    from: 'Solo',
    to: 'Dieng',
    km: 190,
    days: '1 hari PP',
    level: 'Berat',
    meet: 'Kartasura, 03.30',
    quota: 30,
    filled: 12,
    fee: 150000,
    includes: 'Sarapan, makan siang mi ongklok, tiket wisata',
    photo: 'photo-1690924821090-01fbac3d0d87',
  },
  {
    id: 'pacitan',
    type: 'touring',
    title: 'Pantai Selatan Pacitan',
    date: '2027-01-23',
    dateLabel: '23–24 Jan 2027',
    from: 'Solo',
    to: 'Pacitan',
    km: 130,
    days: '2 hari',
    level: 'Santai',
    meet: 'Basecamp Karanganyar, 06.00',
    quota: 50,
    filled: 21,
    fee: 275000,
    includes: 'Camping pantai, bakar ikan, tenda bersama',
    photo: 'photo-1574417462817-a4e1aa71cc78',
  },
  {
    id: 'baksos-wonogiri',
    type: 'baksos',
    title: 'Touring Bakti Sosial Wonogiri',
    date: '2027-02-07',
    dateLabel: 'Min, 7 Feb 2027',
    from: 'Solo',
    to: 'Wonogiri',
    km: 70,
    days: '1 hari',
    level: 'Santai',
    meet: 'Basecamp Karanganyar, 07.00',
    quota: 60,
    filled: 18,
    fee: 50000,
    includes: 'Paket sembako untuk 50 keluarga, makan siang',
    photo: 'photo-1690540293162-bfb097e68a34',
  },
];

export const filters: { id: 'semua' | EventType; label: string }[] = [
  { id: 'semua', label: 'Semua' },
  { id: 'touring', label: 'Touring' },
  { id: 'kopdar', label: 'Kopdar' },
  { id: 'baksos', label: 'Baksos' },
];

/** How the group rides: roles in a staggered formation, front to back. */
export const roles = [
  { id: 'rc', name: 'Road Captain', short: 'RC', text: 'Paling depan. Pegang rute, atur kecepatan, kasih isyarat pertama.' },
  { id: 'marshal', name: 'Marshal', short: 'MS', text: 'Menutup persimpangan sebentar supaya rombongan tidak putus.' },
  { id: 'rider', name: 'Rider', short: 'R', text: 'Formasi zig-zag, jaga jarak 2 detik dengan motor di depan.' },
  { id: 'safety', name: 'Safety Officer', short: 'SO', text: 'Bawa P3K dan toolkit. Paham pertolongan pertama.' },
  { id: 'sweeper', name: 'Sweeper', short: 'SW', text: 'Paling belakang. Tidak ada yang lewat dari dia, tidak ada yang tertinggal.' },
];

/** Hand signals used on the road. */
export const signals = [
  { sign: 'Telapak ke bawah, naik-turun', means: 'Kurangi kecepatan', icon: 'slow' },
  { sign: 'Lengan kiri diangkat, telapak terbuka', means: 'Berhenti', icon: 'stop' },
  { sign: 'Telunjuk ke aspal', means: 'Ada lubang atau batu', icon: 'hazard' },
  { sign: 'Satu jari ke atas', means: 'Formasi satu baris', icon: 'single' },
  { sign: 'Dua jari ke atas', means: 'Formasi zig-zag', icon: 'stagger' },
  { sign: 'Menunjuk tangki', means: 'Butuh isi bensin', icon: 'fuel' },
];

/** Chapters along Java, west to east. code = vehicle plate region code. */
export const chapters = [
  { id: 'purwokerto', city: 'Purwokerto', code: 'R', members: 38, lead: 'Galih Pratama', kopdar: 'Kamis 20.00 · Alun-alun Purwokerto', since: 2019 },
  { id: 'semarang', city: 'Semarang', code: 'H', members: 71, lead: 'Arya Setiawan', kopdar: 'Jumat 20.00 · Simpang Lima', since: 2015 },
  { id: 'jogja', city: 'Yogyakarta', code: 'AB', members: 86, lead: 'Nadia Rahmawati', kopdar: 'Jumat 20.30 · Ring road utara', since: 2014 },
  { id: 'solo', city: 'Solo Raya', code: 'AD', members: 142, lead: 'Bagas Wicaksono', kopdar: 'Jumat 20.00 · Basecamp Karanganyar', since: 2012, hq: true },
  { id: 'madiun', city: 'Madiun', code: 'AE', members: 41, lead: 'Hendra Kurniawan', kopdar: 'Sabtu 19.30 · Taman Bantaran', since: 2018 },
  { id: 'malang', city: 'Malang', code: 'N', members: 34, lead: 'Reza Maulana', kopdar: 'Jumat 20.00 · Jl. Ijen', since: 2021 },
];

export const board = {
  top: [
    { role: 'Ketua Umum', name: 'Bagas Wicaksono', bike: 'Honda CB500X', color: '#ffc21a' },
    { role: 'Wakil Ketua', name: 'Rendra Saputra', bike: 'Kawasaki Versys 250', color: '#ff6a1a' },
  ],
  rest: [
    { role: 'Sekretaris', name: 'Dita Kusumawati', bike: 'Honda ADV 160', color: '#7cc6ff' },
    { role: 'Bendahara', name: 'Yoga Prasetyo', bike: 'Yamaha XMAX', color: '#9be564' },
    { role: 'Road Captain', name: 'Fajar Nugroho', bike: 'Suzuki V-Strom 250', color: '#ffc21a' },
    { role: 'Sweeper', name: 'Anton Wibisono', bike: 'Royal Enfield Himalayan', color: '#ff6a1a' },
    { role: 'Safety Officer', name: 'dr. Laras Pramesti', bike: 'Yamaha NMAX', color: '#ff5d73' },
    { role: 'Humas & Media', name: 'Sekar Ayuningtyas', bike: 'Honda PCX', color: '#c9a7ff' },
  ],
};

export const gallery = [
  { id: 'photo-1641812138212-752ccf137598', caption: 'Lampu merah tetap berhenti, rombongan tetap rapi.', tall: false },
  { id: 'photo-1749453841347-2cda97af2526', caption: 'Hutan pinus Tawangmangu, pagi hari.', tall: true },
  { id: 'photo-1763270204968-0b49cc03efbc', caption: 'Parkir rapi sebelum briefing.', tall: false },
  { id: 'photo-1552306062-29a5560e1c31', caption: 'Istirahat malam di atas kota.', tall: false },
  { id: 'photo-1549636367-13c144c47063', caption: 'Dinding kunci di basecamp. Ambil, pakai, kembalikan.', tall: true },
  { id: 'photo-1690540293132-73e060657503', caption: 'Rest area kedua, cek ban dan rantai.', tall: false },
  { id: 'photo-1606641582351-a59274b36fe2', caption: 'Jalan basah, jarak dua kali lebih jauh.', tall: false },
  { id: 'photo-1609202748711-feef2cdc7da3', caption: 'Senja di jalur selatan.', tall: true },
  { id: 'photo-1588756681780-9d5859fc2ca0', caption: 'Pemandangan dari balik stang.', tall: false },
];

export const merch = [
  { id: 'jaket', name: 'Jaket Touring JATC', price: 450000, note: 'Cordura, protector bahu & siku, reflektor', sizes: ['M', 'L', 'XL', 'XXL'], art: 'jacket', members: true },
  { id: 'kaos', name: 'Kaos "Pulang Utuh"', price: 120000, note: 'Cotton combed 24s, sablon plastisol', sizes: ['S', 'M', 'L', 'XL', 'XXL'], art: 'tee', members: false },
  { id: 'patch', name: 'Patch Bordir Logo', price: 35000, note: 'Diameter 9 cm, siap jahit atau setrika', sizes: [], art: 'patch', members: true },
  { id: 'stiker', name: 'Stiker Pack (6 pcs)', price: 25000, note: 'Vinyl tahan air, cocok untuk helm & box', sizes: [], art: 'sticker', members: false },
];

export const sponsors = ['Bengkel Joyo Motor', 'Kopi Jejak', 'Ban Rakyat', 'Helm Kita', 'Oli Lancar Jaya', 'Tenda Lawu Outdoor', 'Klinik Sehat Rider'];

export const joinSteps = [
  { title: 'Isi form', text: 'Data diri, motor, dan chapter terdekat. Langsung terkirim ke humas lewat WhatsApp.' },
  { title: 'Kopdar 2 kali', text: 'Kenalan dulu. Datang ke kopdar chapter, ngobrol, ngopi.' },
  { title: 'Touring perdana', text: 'Ikut satu touring santai sebagai calon anggota, didampingi senior.' },
  { title: 'Terima KTA & patch', text: 'Resmi jadi keluarga. KTA, patch bordir, dan masuk grup chapter.' },
];

export const faqs = [
  { q: 'Motor matic boleh gabung?', a: 'Boleh. Semua merek dan jenis motor diterima. Untuk touring jarak jauh, kami sarankan minimal 150 cc.' },
  { q: 'Wajib ikut semua touring?', a: 'Tidak. Ikut yang cocok dengan jadwal dan kemampuan. Kopdar juga tidak wajib, tapi seru.' },
  { q: 'Boleh bonceng pasangan?', a: 'Boleh, dengan perlengkapan safety lengkap untuk pembonceng. Biaya touring dihitung per orang.' },
  { q: 'Iurannya untuk apa?', a: `Kas klub untuk P3K, perawatan toolkit bersama, baksos, dan sewa basecamp. Laporan kas dibagikan tiap bulan.` },
];

export const bloodTypes = ['A', 'B', 'AB', 'O'];
