// Content for the clinic demo. In a client build this would come from the CMS.

export const icons: Record<string, string> = {
  check: 'M9 12l2 2 4-4M12 3a9 9 0 100 18 9 9 0 000-18z',
  spark: 'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6',
  fill: 'M7 4c-2 0-3 2-3 4 0 4 2 12 4 12s2-5 4-5 2 5 4 5 4-8 4-12c0-2-1-4-3-4-2 0-3 1-5 1S9 4 7 4z',
  pull: 'M12 3v10M8 9l4 4 4-4M5 21h14',
  root: 'M12 3c-3 0-5 2-5 5 0 4 2 5 3 13M12 3c3 0 5 2 5 5 0 4-2 5-3 13',
  brace: 'M4 10h16M4 14h16M8 8v8M12 8v8M16 8v8',
  sun: 'M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',
  child: 'M12 7a3 3 0 100-6 3 3 0 000 6zM6 22v-6l-2-4 4-2h8l4 2-2 4v6',
  shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z',
  clock: 'M12 7v5l3 2M12 3a9 9 0 100 18 9 9 0 000-18z',
  card: 'M3 7h18v10H3zM3 11h18',
  heart: 'M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z',
};

export const services = [
  { icon: 'check', name: 'Pemeriksaan & Konsultasi', desc: 'Cek kondisi gigi dan gusi, lengkap dengan rencana perawatan.', price: 150000 },
  { icon: 'spark', name: 'Scaling', desc: 'Membersihkan karang gigi dengan alat ultrasonik, 30–45 menit.', price: 350000 },
  { icon: 'fill', name: 'Tambal Gigi Estetik', desc: 'Tambalan sewarna gigi (komposit) untuk gigi berlubang.', price: 300000 },
  { icon: 'pull', name: 'Cabut Gigi', desc: 'Pencabutan dengan bius lokal. Gigi bungsu dikonsultasikan dulu.', price: 350000 },
  { icon: 'root', name: 'Perawatan Saluran Akar', desc: 'Menyelamatkan gigi yang terinfeksi tanpa harus dicabut.', price: 1200000 },
  { icon: 'brace', name: 'Behel / Ortodonti', desc: 'Behel metal, keramik, atau clear aligner oleh dokter spesialis.', price: 7500000 },
  { icon: 'sun', name: 'Bleaching', desc: 'Memutihkan gigi di klinik dalam satu kunjungan.', price: 2500000 },
  { icon: 'child', name: 'Gigi Anak', desc: 'Perawatan ramah anak oleh dokter gigi anak, termasuk fissure sealant.', price: 200000 },
];

export const reasons = [
  { icon: 'shield', title: 'Sterilisasi standar rumah sakit', desc: 'Alat disterilkan dengan autoclave kelas B dan dibuka di depan pasien.' },
  { icon: 'card', title: 'Harga jelas di awal', desc: 'Rencana perawatan dan estimasi biaya dijelaskan sebelum tindakan.' },
  { icon: 'clock', title: 'Buka sampai malam & akhir pekan', desc: 'Senin–Jumat sampai 21.00, Sabtu–Minggu sampai 17.00.' },
  { icon: 'heart', title: 'Nyaman untuk yang takut ke dokter gigi', desc: 'Bius topikal sebelum suntik, dan dokter menjelaskan setiap langkah.' },
];

export const doctors = [
  { name: 'drg. Anindya Putri', role: 'Dokter Gigi Umum', days: 'Sen, Rab, Jum', initials: 'AP', tone: 'from-teal-400 to-cyan-500' },
  { name: 'drg. Bima Prasetyo, Sp.Ort', role: 'Spesialis Ortodonti (Behel)', days: 'Sel, Kam, Sab', initials: 'BP', tone: 'from-sky-400 to-indigo-500' },
  { name: 'drg. Citra Lestari, Sp.KGA', role: 'Spesialis Gigi Anak', days: 'Sen, Kam, Min', initials: 'CL', tone: 'from-rose-400 to-orange-400' },
  { name: 'drg. Dimas Hakim, Sp.Pros', role: 'Spesialis Prostodonsia (Gigi Tiruan)', days: 'Rab, Jum, Sab', initials: 'DH', tone: 'from-emerald-400 to-teal-600' },
];

export const schedule = [
  ['Senin', '09.00 – 21.00', 'drg. Anindya, drg. Citra'],
  ['Selasa', '09.00 – 21.00', 'drg. Bima'],
  ['Rabu', '09.00 – 21.00', 'drg. Anindya, drg. Dimas'],
  ['Kamis', '09.00 – 21.00', 'drg. Bima, drg. Citra'],
  ['Jumat', '09.00 – 21.00', 'drg. Anindya, drg. Dimas'],
  ['Sabtu', '09.00 – 17.00', 'drg. Bima, drg. Dimas'],
  ['Minggu', '10.00 – 17.00', 'drg. Citra'],
];

export const testimonials = [
  { name: 'Rina S.', text: 'Anak saya biasanya nangis kalau ke dokter gigi. Di sini dokternya sabar banget, pulang malah minta balik lagi.', service: 'Gigi Anak' },
  { name: 'Hendra W.', text: 'Biaya dijelaskan dari awal, tidak ada tambahan mendadak. Scaling cepat dan tidak sakit.', service: 'Scaling' },
  { name: 'Maya K.', text: 'Pasang behel di sini sudah 8 bulan, kontrol bisa Sabtu jadi tidak perlu izin kantor.', service: 'Ortodonti' },
];

export const faqs = [
  ['Apakah harus buat janji dulu?', 'Disarankan, supaya tidak menunggu. Pasien tanpa janji tetap dilayani sesuai antrean.'],
  ['Metode pembayaran apa saja yang diterima?', 'Tunai, kartu debit/kredit, QRIS, dan asuransi rekanan. Tanyakan ke admin untuk daftar asuransi terbaru.'],
  ['Berapa lama perawatan behel?', 'Umumnya 1,5–2 tahun tergantung kondisi gigi, dengan kontrol setiap 3–4 minggu.'],
  ['Apakah ada parkir?', 'Ada parkir mobil untuk 8 kendaraan dan parkir motor di depan klinik.'],
];
