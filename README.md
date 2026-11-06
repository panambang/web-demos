# Web demos

Three demo sites for fictional Indonesian businesses, used as portfolio samples for the website service (see `../website-service-indonesia.md`).

| Path | Demo | Package it shows |
|---|---|---|
| `/klinik` | Klinik Gigi Arunika: dental clinic | Company Profile |
| `/catering` | Dapur Sehari: healthy catering | Landing Page |
| `/toko` | Kopi Lereng: coffee roastery | Toko Online |

Also `/harga`: the real pricelist for the website service (prices in `src/data/harga.ts`). It's the only indexable page. Set `WA_NUMBER` in that file to route its WhatsApp buttons to your number.

Stack: Astro 7 + Tailwind 4, static output, no images (all art is inline SVG), so it loads fast on mobile data.

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

All names, people, prices and reviews in the three demos are fictional. Each page shows a DEMO bar saying so.
