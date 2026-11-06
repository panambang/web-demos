import type { ImageMetadata } from 'astro';

import heroImg from '../assets/mancing/hero.jpg';
import boatTrio from '../assets/mancing/boat-trio.jpg';
import boatDuo from '../assets/mancing/boat-duo.jpg';
import strike from '../assets/mancing/strike.jpg';
import catchImg from '../assets/mancing/catch.jpg';
import seaDuo from '../assets/mancing/sea-duo.jpg';
import rocks from '../assets/mancing/rocks.jpg';
import lighthouse from '../assets/mancing/lighthouse.jpg';
import family from '../assets/mancing/family.jpg';
import dockSunset from '../assets/mancing/dock-sunset.jpg';
import smile from '../assets/mancing/smile.jpg';
import beachBoat from '../assets/mancing/beach-boat.jpg';
import boats from '../assets/mancing/boats.jpg';
import shoreBoat from '../assets/mancing/shore-boat.jpg';
import boatsFloat from '../assets/mancing/boats-float.jpg';
import rods from '../assets/mancing/rods.jpg';
import reelHand from '../assets/mancing/reel-hand.jpg';
import tackleBox from '../assets/mancing/tackle-box.jpg';
import reel from '../assets/mancing/reel.jpg';
import rodSunset from '../assets/mancing/rod-sunset.jpg';
import firepit from '../assets/mancing/firepit.jpg';
import bonfireBeach from '../assets/mancing/bonfire-beach.jpg';
import campfireLake from '../assets/mancing/campfire-lake.jpg';
import grill from '../assets/mancing/grill.jpg';
import toast from '../assets/mancing/toast.jpg';
import beerToast from '../assets/mancing/beer-toast.jpg';
import bottlesSunset from '../assets/mancing/bottles-sunset.jpg';
import fishLime from '../assets/mancing/fish-lime.jpg';

export const img = {
  heroImg, boatTrio, boatDuo, strike, catchImg, seaDuo, rocks, lighthouse, family, dockSunset, smile,
  beachBoat, boats, shoreBoat, boatsFloat, rods, reelHand, tackleBox, reel, rodSunset, firepit,
  bonfireBeach, campfireLake, grill, toast, beerToast, bottlesSunset, fishLime,
};

export const stats = [
  { value: '127', label: 'anggota aktif' },
  { value: '48', label: 'trip setahun' },
  { value: '32 kg', label: 'rekor GT kru' },
  { value: '9', label: 'tahun bareng' },
];

export const ticker = [
  'Strike!', 'Ngopi subuh di dermaga', 'Bakar ikan bareng', 'Cerita ikan lepas', 'Catch & release',
  'Bersulang di pinggir pantai', 'Pemula disambut', 'Bawa pulang sampahmu',
];

export const kegiatan: { title: string; desc: string; tag: string; image: ImageMetadata }[] = [
  { title: 'Trip Laut', tag: 'Bulanan', image: boatTrio, desc: 'Sewa kapal patungan ke Kepulauan Seribu atau Pelabuhan Ratu. Berangkat subuh, pulang bawa cerita.' },
  { title: 'Mancing Batu & Pantai', tag: 'Dua minggu sekali', image: rocks, desc: 'Casting dari tebing dan karang di pesisir Banten. Murah, seru, dan cocok buat latihan lempar.' },
  { title: 'Mancing Keluarga', tag: 'Minggu pagi', image: family, desc: 'Ajak istri, suami, dan anak ke waduk. Ada lomba kecil buat anak-anak, hadiahnya joran mini.' },
  { title: 'Kelas Pemula', tag: 'Gratis', image: reelHand, desc: 'Belajar pasang senar, simpul, dan teknik lempar. Alat disediakan, tinggal datang bawa semangat.' },
  { title: 'Bersih Pantai', tag: 'Tiap 3 bulan', image: shoreBoat, desc: 'Kita mancing di laut, jadi kita jaga lautnya. Pungut sampah, tanam mangrove, lalu makan siang bareng.' },
  { title: 'After Mancing', tag: 'Setiap trip', image: firepit, desc: 'Hasil tangkapan dibakar, minuman dingin dibuka, gitar dimainkan. Bagian favorit semua orang.' },
];

export const videos = [
  { src: 'mancing/strike.mp4', poster: strike, title: 'Detik-detik strike', place: 'Teluk Jakarta', vertical: true },
  { src: 'mancing/cheers.mp4', poster: beerToast, title: 'Bersulang untuk ikan pertama Dimas', place: 'Pantai Anyer' },
  { src: 'mancing/bonfire.mp4', poster: bonfireBeach, title: 'Api unggun habis trip', place: 'Tanjung Lesung' },
];

export type Kru = {
  name: string;
  nick: string;
  role: string;
  since: number;
  best: string;
  rod: string;
  fact: string;
  color: string; // gradient for the avatar
};

export const kru: Kru[] = [
  { name: 'Rizal Hakim', nick: 'Kapten', role: 'Pendiri', since: 2017, best: 'GT 32 kg', rod: 'Popping PE 6', fact: 'Hafal jadwal pasang surut tanpa aplikasi.', color: 'from-orange-500 to-rose-600' },
  { name: 'Sari Wulandari', nick: 'Ratu Jigging', role: 'Koordinator Trip', since: 2018, best: 'Tenggiri 14 kg', rod: 'Slow jigging PE 2', fact: 'Belum pernah pulang tanpa ikan.', color: 'from-cyan-500 to-blue-600' },
  { name: 'Darto Suprapto', nick: 'Om Darto', role: 'Sesepuh', since: 2017, best: 'Kakap merah 9 kg', rod: 'Bambu warisan bapak', fact: 'Mancing sejak 1979. Ceritanya tidak pernah habis.', color: 'from-amber-500 to-orange-700' },
  { name: 'Ucok Siregar', nick: 'Chef Ucok', role: 'Juru Bakar', since: 2019, best: 'Baronang 3 kg', rod: 'Light game 2–6 kg', fact: 'Bumbu bakarnya rahasia. Sudah ditawar, tetap tidak dijual.', color: 'from-red-500 to-orange-600' },
  { name: 'Dimas Pratama', nick: 'Si Paling Strike', role: 'Admin Medsos', since: 2022, best: 'Barramundi 6 kg', rod: 'Casting baitcaster', fact: 'Videonya lebih banyak dari ikannya.', color: 'from-lime-500 to-emerald-600' },
  { name: 'Nining Kurniasih', nick: 'Teh Nining', role: 'Bendahara', since: 2020, best: 'Kerapu 5 kg', rod: 'Spinning 8–16 kg', fact: 'Uang patungan selalu pas sampai seribu rupiah.', color: 'from-fuchsia-500 to-purple-600' },
  { name: 'I Wayan Sudarma', nick: 'Pak Wayan', role: 'Juru Mudi', since: 2018, best: 'Tuna sirip kuning 18 kg', rod: 'Jigging PE 4', fact: 'Bisa baca arus cuma dari warna air.', color: 'from-sky-500 to-indigo-600' },
  { name: 'Arya Hakim', nick: 'Kapten Junior', role: 'Anggota Termuda', since: 2023, best: 'Nila 1,2 kg', rod: 'Joran mini 1,5 m', fact: 'Anak Kapten. Umur 12, sudah jago simpul.', color: 'from-yellow-400 to-amber-600' },
];

export const jadwal = [
  { date: '15 Nov 2026', day: 'Sabtu', title: 'Trip Kepulauan Seribu', spot: 'Pulau Pari', type: 'Laut · Jigging', meet: 'Dermaga Marina Ancol, 04.30', cost: 450_000, quota: '12 kursi · sisa 3' },
  { date: '23 Nov 2026', day: 'Minggu', title: 'Mancing Keluarga', spot: 'Waduk Jatiluhur', type: 'Air tawar · Santai', meet: 'Gerbang Jatiluhur, 07.00', cost: 75_000, quota: 'Terbuka' },
  { date: '29 Nov 2026', day: 'Sabtu', title: 'Kelas Pemula: Simpul & Lempar', spot: 'Dermaga Muara Angke', type: 'Kelas · Gratis', meet: 'Dermaga Muara Angke, 06.00', cost: 0, quota: '20 peserta · sisa 8' },
  { date: '6 Des 2026', day: 'Sabtu', title: 'Rock Fishing + Bakar Malam', spot: 'Tanjung Lesung', type: 'Pantai · Casting', meet: 'Rest area KM 13, 03.00', cost: 250_000, quota: '20 kursi · sisa 11' },
  { date: '20 Des 2026', day: 'Minggu', title: 'Bersih Pantai Akhir Tahun', spot: 'Pantai Anyer', type: 'Konservasi', meet: 'Pantai Pasir Putih Anyer, 07.00', cost: 0, quota: 'Terbuka' },
  { date: '9–11 Jan 2027', day: 'Jumat–Minggu', title: 'Ekspedisi Tahunan', spot: 'Labuan Bajo', type: 'Laut · Popping GT', meet: 'Bandara Komodo, Jumat siang', cost: 4_800_000, quota: '8 kursi · sisa 2' },
];

export const rutin = [
  { when: 'Setiap Sabtu, 05.00', what: 'Ngopi & mancing santai di Dermaga Muara Angke' },
  { when: 'Rabu malam, 20.00', what: 'Kopdar & servis reel bareng di basecamp' },
  { when: 'Minggu terakhir tiap bulan', what: 'Trip laut patungan' },
];

export const spot = [
  { name: 'Kepulauan Seribu', area: 'DKI Jakarta', image: beachBoat, target: 'Tenggiri, kuwe, kerapu', level: 'Menengah', note: '1,5 jam naik kapal dari Ancol' },
  { name: 'Pelabuhan Ratu', area: 'Sukabumi, Jawa Barat', image: seaDuo, target: 'Tuna, cakalang, marlin', level: 'Mahir', note: 'Laut lepas Samudra Hindia, ombak besar' },
  { name: 'Tanjung Lesung', area: 'Pandeglang, Banten', image: lighthouse, target: 'Kakap, baronang, GT kecil', level: 'Menengah', note: 'Spot batu karang favorit untuk casting' },
  { name: 'Waduk Jatiluhur', area: 'Purwakarta, Jawa Barat', image: boats, target: 'Nila, patin, gabus', level: 'Pemula', note: 'Tenang, aman untuk anak-anak' },
  { name: 'Dermaga Muara Angke', area: 'Jakarta Utara', image: dockSunset, target: 'Belanak, kakap putih', level: 'Pemula', note: 'Basecamp mingguan kita' },
  { name: 'Labuan Bajo', area: 'Nusa Tenggara Timur', image: boatsFloat, target: 'GT, dogtooth tuna', level: 'Mahir', note: 'Ekspedisi tahunan, wajib nabung dari sekarang' },
];

export const peralatan = [
  {
    title: 'Joran & Reel',
    image: rods,
    items: [
      { name: 'Light game', spec: 'Joran 1,8 m, reel 2000–3000', use: 'Waduk, kolam, dermaga' },
      { name: 'Jigging', spec: 'Joran PE 2–4, reel 6000+', use: 'Laut dalam, ikan dasar' },
      { name: 'Popping', spec: 'Joran PE 6–8, reel 14000', use: 'GT dan tuna di permukaan' },
    ],
  },
  {
    title: 'Umpan & Lure',
    image: tackleBox,
    items: [
      { name: 'Metal jig', spec: '40–200 gram', use: 'Tenggiri, kuwe, kerapu' },
      { name: 'Popper & stickbait', spec: '60–150 gram', use: 'Ikan predator permukaan' },
      { name: 'Umpan alami', spec: 'Udang, cumi, cacing laut', use: 'Semua kondisi' },
    ],
  },
  {
    title: 'Wajib Dibawa',
    image: reel,
    items: [
      { name: 'Pelampung (life jacket)', spec: 'Wajib di kapal', use: 'Tanpa ini tidak ikut trip' },
      { name: 'Cooler box', spec: '30–50 liter + es', use: 'Supaya ikan tetap segar' },
      { name: 'Topi, kacamata polarized, sunblock', spec: '', use: 'Matahari laut tidak main-main' },
    ],
  },
];

export const pesta = {
  photos: [grill, toast, campfireLake, fishLime, bottlesSunset],
  menu: ['Ikan bakar bumbu Chef Ucok', 'Sambal dabu-dabu & sambal matah', 'Nasi liwet satu kastrol', 'Bir dingin, es teh, kopi tubruk'],
  rules: [
    'Yang nyetir mobil atau kapal tidak minum alkohol. Titik.',
    'Alkohol hanya untuk 18+. Teh, kopi, dan soda selalu ada.',
    'Minum secukupnya, besok masih ada trip.',
    'Sampah dan botol dibawa pulang.',
  ],
};

export const galeri: { image: ImageMetadata; caption: string }[] = [
  { image: catchImg, caption: 'Kerapu pertama Teh Nining!' },
  { image: boatDuo, caption: 'Subuh di Pulau Pari' },
  { image: smile, caption: 'Muka Dimas habis strike' },
  { image: bottlesSunset, caption: 'Untuk ikan yang lepas' },
  { image: boatTrio, caption: 'Om Darto & Pak Wayan' },
  { image: strike, caption: 'Barramundi 6 kg!' },
  { image: rodSunset, caption: 'Pulang? Nanti dulu.' },
  { image: bonfireBeach, caption: 'Malam di Tanjung Lesung' },
];

export const testimoni = [
  { quote: 'Awalnya cuma ikut sekali karena diajak teman kantor. Sekarang tiap Sabtu subuh sudah di dermaga.', name: 'Bayu, anggota sejak 2023' },
  { quote: 'Anak saya yang tadinya main HP terus, sekarang yang bangunin saya buat mancing.', name: 'Ibu Ratna, anggota keluarga' },
  { quote: 'Ikannya kadang dapat, kadang tidak. Tapi pulang selalu ketawa. Itu yang bikin balik lagi.', name: 'Fajar, anggota sejak 2021' },
];
