// Content for the restaurant demo. Pawon Simbah is a fictional business:
// names, prices, reviews, phone numbers and addresses are made up.
//
// Photos are hotlinked from the Unsplash CDN (free under the Unsplash License),
// sized per breakpoint with its URL params. For a client build, swap the ids
// for the client's own photos (or local files through astro:assets).

/** Unsplash CDN url for a photo id, cropped to w×h and served as AVIF/WebP. */
export const photo = (id: string, w: number, h: number, q = 70) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=${q}`;

/** srcset for a photo at a fixed aspect ratio (h/w). */
export const srcset = (id: string, ratio: number, widths: number[]) =>
  widths.map((w) => `${photo(id, w, Math.round(w * ratio))} ${w}w`).join(', ');

export const img = {
  hero: 'photo-1539755530862-00f623c00f52',
  pendopo: 'photo-1632762346768-80b093fc5f38',
};

export const biz = {
  name: 'Pawon Simbah',
  since: 1998,
  tagline: 'Masakan rumahan, rasa Simbah.',
  intro:
    'Warung makan Jawa di Colomadu. Bumbu diulek tiap pagi, sate dibakar pakai arang, nasi diliwet di kendil. Datang lapar, pulang kayak habis mudik.',
  area: 'Colomadu · Solo Raya',
  rating: '4,8',
  reviews: '1.240',
  phone: '0812-0000-1998',
  phoneEvents: '0812-0000-2025',
  instagram: '@pawonsimbah.demo',
};

export type Hours = { day: string; open: string | null; close: string | null };

/** Opening hours, Monday first. Times are WIB (Asia/Jakarta). null = libur. */
export const hours: Hours[] = [
  { day: 'Senin', open: null, close: null },
  { day: 'Selasa', open: '07:00', close: '21:00' },
  { day: 'Rabu', open: '07:00', close: '21:00' },
  { day: 'Kamis', open: '07:00', close: '21:00' },
  { day: 'Jumat', open: '07:00', close: '21:30' },
  { day: 'Sabtu', open: '07:00', close: '22:00' },
  { day: 'Minggu', open: '07:00', close: '22:00' },
];

export const facts = [
  { big: `★ ${biz.rating}`, label: `${biz.reviews} ulasan Google` },
  { big: 'Arang', label: 'sate dibakar arang kayu' },
  { big: '60 kursi', label: 'pendopo, lesehan & teras' },
  { big: 'Parkir', label: 'muat 3 bus rombongan' },
];

export type Dish = {
  id: string;
  name: string;
  desc: string;
  price: number;
  photo: string;
  /** 0–3 chilies */
  spicy?: number;
  tag?: 'Favorit' | 'Baru' | 'Andalan';
};

export type Category = { id: string; label: string; note: string; dishes: Dish[] };

export const menu: Category[] = [
  {
    id: 'nasi',
    label: 'Sego',
    note: 'Nasi liwet kendil, bisa tambah nasi Rp5.000.',
    dishes: [
      {
        id: 'telang',
        name: 'Sego Telang Komplit',
        desc: 'Nasi bunga telang, ayam goreng bumbu kuning, sambal matah, rempeyek, lalapan.',
        price: 32000,
        photo: 'photo-1767429013111-494a1e03f70f',
        spicy: 1,
        tag: 'Andalan',
      },
      {
        id: 'goreng-kampung',
        name: 'Sego Goreng Kampung',
        desc: 'Digoreng di wajan besi pakai bumbu ulek, telur dadar iris, udang, kerupuk.',
        price: 24000,
        photo: 'photo-1680674774705-90b4904b3a7f',
        spicy: 2,
        tag: 'Favorit',
      },
      {
        id: 'goreng-kambing',
        name: 'Sego Goreng Kambing',
        desc: 'Daging kambing muda, minyak samin, acar timun, emping.',
        price: 33000,
        photo: 'photo-1680674814945-7945d913319c',
        spicy: 1,
      },
      {
        id: 'telor',
        name: 'Sego Endhog Sambel Bawang',
        desc: 'Nasi panas, telur ceplok kecap, sambel bawang uleg dadakan. Menu anak kos favorit.',
        price: 15000,
        photo: 'photo-1604556590982-f57facb22ccc',
        spicy: 3,
      },
    ],
  },
  {
    id: 'sate',
    label: 'Sate & Lauk',
    note: 'Sate isi 10 tusuk, dibakar arang setelah dipesan.',
    dishes: [
      {
        id: 'sate-ayam',
        name: 'Sate Ayam Bumbu Kacang',
        desc: 'Paha ayam, bumbu kacang sangrai, kecap, bawang merah, lontong.',
        price: 28000,
        photo: 'photo-1696385793103-71f51f6fd3b7',
        tag: 'Favorit',
      },
      {
        id: 'sate-kambing',
        name: 'Sate Kambing Muda',
        desc: 'Kambing umur di bawah 1 tahun, empuk tanpa prengus. Kecap, tomat, cabai rawit.',
        price: 45000,
        photo: 'photo-1603088549155-6ae9395b928f',
        spicy: 1,
        tag: 'Andalan',
      },
      {
        id: 'sate-kecap',
        name: 'Sate Buntel Kecap',
        desc: 'Daging kambing cincang dibalut lemak, bakar, siram kecap dan merica.',
        price: 48000,
        photo: 'photo-1534939561126-855b8675edd7',
        spicy: 1,
      },
      {
        id: 'soto',
        name: 'Soto Seger Simbah',
        desc: 'Kuah bening ayam kampung, tauge, seledri, bawang goreng. Cocok buat sarapan.',
        price: 16000,
        photo: 'photo-1681378128359-a5c2492a3535',
      },
    ],
  },
  {
    id: 'wedangan',
    label: 'Wedangan',
    note: 'Gula batu dan gula aren asli, bukan sirup.',
    dishes: [
      {
        id: 'teh-nipis',
        name: 'Es Teh Nipis',
        desc: 'Teh tubruk wangi melati, jeruk nipis peras, gula batu.',
        price: 7000,
        photo: 'photo-1556679343-c7306c1976bc',
        tag: 'Favorit',
      },
      {
        id: 'teh-gula-batu',
        name: 'Teh Poci Gula Batu',
        desc: 'Diseduh di poci tanah liat. Panas atau es, sama enaknya.',
        price: 9000,
        photo: 'photo-1601390395693-364c0e22031a',
      },
      {
        id: 'kopi-aren',
        name: 'Es Kopi Susu Aren',
        desc: 'Robusta Temanggung, susu segar, gula aren cair.',
        price: 18000,
        photo: 'photo-1562447457-579fc34967fb',
        tag: 'Baru',
      },
    ],
  },
  {
    id: 'camilan',
    label: 'Camilan',
    note: 'Gorengan keluar dari wajan tiap 30 menit.',
    dishes: [
      {
        id: 'pisang',
        name: 'Pisang Goreng Gula Palem',
        desc: 'Pisang kepok kuning, tepung renyah, taburan gula palem.',
        price: 14000,
        photo: 'photo-1762941904142-9d91ca413e66',
        tag: 'Favorit',
      },
      {
        id: 'gorengan',
        name: 'Gorengan Anget',
        desc: 'Isi 6 campur: tahu isi, tempe mendoan, bakwan. Dengan cabai rawit.',
        price: 12000,
        photo: 'photo-1768701545045-57e97e2d479c',
        spicy: 1,
      },
    ],
  },
];

/** A real sequence: what happens in the kitchen before the doors open. */
export const day = [
  {
    time: '04.30',
    title: 'Belanja ke pasar',
    text: 'Simbah sendiri yang milih cabai, bawang, dan daun jeruk di Pasar Colomadu.',
    photo: 'photo-1655740005902-2436216b82b8',
    bg: 'bg-[#f2b705]',
  },
  {
    time: '05.30',
    title: 'Bumbu diulek',
    text: 'Bumbu kuning dan sambel diulek di cobek batu. Blender cuma buat jus.',
    photo: 'photo-1681889870636-3f58e5288e03',
    bg: 'bg-[#d9481e]',
  },
  {
    time: '06.30',
    title: 'Arang dinyalakan',
    text: 'Bara arang kayu harus merah rata sebelum tusuk sate pertama naik.',
    photo: 'photo-1634871572365-8bc444e6faea',
    bg: 'bg-[#2f6b3a]',
  },
  {
    time: '07.00',
    title: 'Pintu dibuka',
    text: 'Soto dan nasi goreng siap. Pelanggan pertama biasanya sopir travel.',
    photo: 'photo-1790001074380-3a04ef3f49c5',
    bg: 'bg-[#f2b705]',
  },
];

/** Notes on the board: reviews and announcements. */
export const notes = [
  {
    kind: 'ulasan',
    text: 'Sate kambingnya empuk banget, nggak bau. Sambel bawangnya bikin nambah nasi dua kali.',
    who: 'Rina, Google Maps',
    stars: 5,
  },
  {
    kind: 'info',
    title: 'Jumat Berkah',
    text: 'Tiap Jumat jam 11–13, nasi bungkus gratis untuk driver ojol. Tinggal tunjukkan aplikasinya.',
  },
  {
    kind: 'ulasan',
    text: 'Bawa rombongan 40 orang dari kantor, pesan lewat WA H-2, semua siap pas kami datang.',
    who: 'Pak Hendra, Google Maps',
    stars: 5,
  },
  {
    kind: 'info',
    title: 'Nasi kotak',
    text: 'Terima pesanan nasi kotak dan tumpeng, minimal 20 porsi. Pesan H-2 lewat WhatsApp.',
  },
  {
    kind: 'ulasan',
    text: 'Tempatnya adem, ada lesehan. Anak-anak suka pisang gorengnya. Parkir gampang.',
    who: 'Dewi, Google Maps',
    stars: 5,
  },
  {
    kind: 'info',
    title: 'Libur Senin',
    text: 'Senin dapur istirahat, Simbah belanja stok. Selasa buka lagi jam 07.00 dengan soto pertama.',
  },
];

export const areas = [
  { id: 'pendopo', label: 'Pendopo', note: 'Kursi kayu, muat 40' },
  { id: 'lesehan', label: 'Lesehan', note: 'Tikar & bantal, muat 16' },
  { id: 'teras', label: 'Teras', note: 'Outdoor, boleh merokok' },
];

export const branches = [
  {
    name: 'Pawon Simbah Colomadu',
    note: 'Pusat',
    address: 'Jl. Adi Sucipto Km 7, Colomadu, Karanganyar (alamat fiktif)',
    maps: 'https://www.google.com/maps/search/?api=1&query=Colomadu+Karanganyar',
  },
  {
    name: 'Pawon Simbah Solo Baru',
    note: 'Cabang',
    address: 'Jl. Ir. Soekarno, Grogol, Sukoharjo (alamat fiktif)',
    maps: 'https://www.google.com/maps/search/?api=1&query=Solo+Baru+Sukoharjo',
  },
  {
    name: 'Pawon Simbah Kartasura',
    note: 'Cabang',
    address: 'Jl. Slamet Riyadi, Kartasura, Sukoharjo (alamat fiktif)',
    maps: 'https://www.google.com/maps/search/?api=1&query=Kartasura+Sukoharjo',
  },
];

export const delivery = [
  { name: 'GoFood', href: 'https://gofood.co.id' },
  { name: 'GrabFood', href: 'https://food.grab.com/id/id/' },
  { name: 'ShopeeFood', href: 'https://shopee.co.id/m/shopeefood' },
];

export const marquee = [
  'Sego liwet kendil',
  'Sate kambing muda',
  'Soto seger',
  'Sambel bawang uleg dadakan',
  'Es teh gula batu',
  'Pisang goreng gula palem',
  'Teh poci',
  'Gorengan anget',
];
