# Web demos

Seven demo sites for fictional Indonesian businesses and communities, used as portfolio samples for the website service (see `../website-service-indonesia.md`).

| Path | Demo | Package it shows |
|---|---|---|
| `/klinik` | Klinik Gigi Arunika: dental clinic | Company Profile |
| `/catering` | Dapur Sehari: healthy catering | Landing Page |
| `/toko` | Kopi Lereng: coffee roastery | Toko Online |
| `/wedding` | Laras Rasa Catering: wedding & event catering | Catering Wedding (piring terbang course order, date-check form → WA) |
| `/restoran` | Pawon Simbah: Javanese restaurant | Landing Page Restoran (photo menu, order slip → WA, table booking → WA, live open/closed status, branches) |
| `/klub-motor` | Jejak Aspal Touring Club: motorcycle touring club | Company Profile Komunitas (event calendar with quotas, riding formation & hand signals, chapters, board, gallery lightbox, merch, join form with live member card → WA) |
| `/mancing` | Joran Senja: fishing community | Community site (video, members, schedule, gallery) |

Also `/harga`: the real pricelist for the website service (prices in `src/data/harga.ts`). It's the only indexable page. Set `WA_NUMBER` in that file to route its WhatsApp buttons to your number.

Stack: Astro 7 + Tailwind 4, static output. The klinik, catering, toko and wedding demos use inline SVG art only. The fishing demo uses real photos (optimized to WebP by `astro:assets`) and short MP4 clips that load only when scrolled into view and are skipped on data-saver.

### Media credits (restaurant and touring club demos)

- Photos are hotlinked from the [Unsplash](https://unsplash.com) CDN (free under the [Unsplash License](https://unsplash.com/license)) and sized per breakpoint with its URL params. The photo ids live in `src/data/restoran.ts` and `src/data/touring.ts`; for a client build, swap them for the client's own photos. Touring club board members get drawn helmet avatars because the people in the photos are not them.

### Media credits (fishing demo)

- Photos: [Unsplash](https://unsplash.com), free under the [Unsplash License](https://unsplash.com/license). Files live in `src/assets/mancing/`; `CREDITS.md` there maps each file to its Unsplash image ID.
- Videos: [Pexels](https://www.pexels.com), free under the [Pexels License](https://www.pexels.com/license/): hero [4210478](https://www.pexels.com/video/silhouette-of-a-man-fishing-4210478/), strike [31268590](https://www.pexels.com/video/fishing-from-a-boat-on-calm-waters-31268590/), cheers [7147683](https://www.pexels.com/video/group-of-friends-clinking-beer-bottles-7147683/), bonfire [7147691](https://www.pexels.com/video/group-of-friends-enjoying-bonfire-on-beach-7147691/).
- People in the photos are not the fictional members; member avatars are drawn initials on purpose.

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static files in dist/
```

Live at https://panambang.github.io/web-demos/ (deployed by `.github/workflows/deploy.yml` on every push to `main`).

To serve under a sub-path (e.g. `/demos` on the portfolio), build with `BASE_PATH=/demos npm run build`.

## What is mocked

- **WhatsApp:** links use `https://wa.me/?text=...` with no number, so visitors pick a chat. For a client, put the shop's number after `wa.me/`.
- **Store shipping:** sample rates per city and courier in `src/data/toko.ts`. In production, call Biteship or RajaOngkir.
- **Store payment:** the QRIS code and VA numbers are fake, and "Simulasikan pembayaran berhasil" stands in for the payment gateway webhook. In production, use Midtrans/Xendit Snap with the client's own merchant account.
- **Maps:** an SVG illustration. In production, embed Google Maps.

All names, people, prices and reviews in the seven demos are fictional. Each page shows a DEMO bar saying so.
