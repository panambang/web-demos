// Client-side cart + checkout for the Kopi Lereng demo.
import type { Product } from '../data/toko';

interface City { name: string; zone: 'jkt' | 'jabo' | 'luar'; reg: number; eta: string }
interface Courier { id: string; name: string; factor: number }
interface Payment { id: string; name: string; desc: string }
interface Config {
  products: Product[];
  cities: City[];
  couriers: Courier[];
  payments: Payment[];
  FREE_SHIPPING_MIN: number;
  INSTANT_FLAT: number;
}
interface Line { key: string; id: string; grind?: string; qty: number }

const cfg: Config = JSON.parse(document.getElementById('toko-config')!.textContent!);
const byId = new Map(cfg.products.map((p) => [p.id, p]));
const KG: Record<string, number> = { bag: 0.25, drip: 0.2, bottle: 1.1, dripper: 0.6, grinder: 0.9 };
const STORE = 'kopi-lereng-cart';

const $ = <T extends HTMLElement = HTMLElement>(sel: string) => document.querySelector<T>(sel)!;
const rp = (n: number) => 'Rp' + n.toLocaleString('id-ID');
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

let cart: Line[] = [];
try {
  cart = JSON.parse(localStorage.getItem(STORE) || '[]').filter((l: Line) => byId.has(l.id));
} catch {
  cart = [];
}

const save = () => localStorage.setItem(STORE, JSON.stringify(cart));
const subtotal = () => cart.reduce((s, l) => s + byId.get(l.id)!.price * l.qty, 0);
const weight = () => cart.reduce((s, l) => s + KG[byId.get(l.id)!.kind] * l.qty, 0);

const cartDlg = $<HTMLDialogElement>('#cart');
const coDlg = $<HTMLDialogElement>('#checkout');
const form = $<HTMLFormElement>('#co-form');

// ---------- dialogs ----------
for (const dlg of [cartDlg, coDlg]) {
  dlg.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    if (t === dlg || t.closest('[data-close]')) dlg.close();
  });
}

// ---------- filters ----------
const ACTIVE = ['bg-stone-900', 'text-white', 'ring-stone-900'];
const IDLE = ['bg-white', 'ring-stone-200', 'hover:ring-stone-400'];
document.querySelectorAll<HTMLButtonElement>('[data-filter]').forEach((btn, _, all) => {
  btn.addEventListener('click', () => {
    all.forEach((b) => {
      b.classList.remove(...ACTIVE, ...IDLE);
      b.classList.add(...(b === btn ? ACTIVE : IDLE));
    });
    const f = btn.dataset.filter;
    document.querySelectorAll<HTMLElement>('.product').forEach((card) => {
      card.hidden = f !== 'semua' && card.dataset.category !== f;
    });
  });
});

// ---------- cart ----------
document.querySelectorAll<HTMLButtonElement>('[data-add]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.add!;
    const grind = document.querySelector<HTMLSelectElement>(`[data-grind="${id}"]`)?.value;
    const key = grind ? `${id}|${grind}` : id;
    const line = cart.find((l) => l.key === key);
    if (line) line.qty++;
    else cart.push({ key, id, grind, qty: 1 });
    save();
    renderCart();
    const label = btn.textContent;
    btn.textContent = '✓ Ditambah';
    setTimeout(() => (btn.textContent = label), 1200);
    cartDlg.showModal();
  });
});

$('#cart-open').addEventListener('click', () => {
  renderCart();
  cartDlg.showModal();
});

$('#cart-items').addEventListener('click', (e) => {
  const t = (e.target as HTMLElement).closest<HTMLButtonElement>('button[data-key]');
  if (!t) return;
  const line = cart.find((l) => l.key === t.dataset.key);
  if (!line) return;
  line.qty += Number(t.dataset.delta);
  cart = cart.filter((l) => l.qty > 0);
  save();
  renderCart();
});

function renderCart() {
  const count = cart.reduce((s, l) => s + l.qty, 0);
  $('#cart-count').textContent = String(count);
  const list = $('#cart-items');
  if (!cart.length) {
    list.innerHTML = '<li class="py-16 text-center text-sm">Keranjang masih kosong.</li>';
  } else {
    list.innerHTML = cart
      .map((l) => {
        const p = byId.get(l.id)!;
        return `<li class="flex items-center gap-4 py-4">
          <span class="h-12 w-12 shrink-0 rounded-xl" style="background:${p.color}"></span>
          <div class="min-w-0 flex-1">
            <p class="font-semibold text-stone-900">${esc(p.name)}</p>
            <p class="truncate text-xs">${esc(p.size)}${l.grind ? ' · ' + esc(l.grind) : ''}</p>
            <p class="mt-1 text-sm font-semibold text-stone-900">${rp(p.price * l.qty)}</p>
          </div>
          <div class="flex items-center gap-1 rounded-full ring-1 ring-stone-200">
            <button data-key="${esc(l.key)}" data-delta="-1" class="h-8 w-8 rounded-full hover:bg-stone-100" aria-label="Kurangi">−</button>
            <span class="w-5 text-center text-sm font-semibold">${l.qty}</span>
            <button data-key="${esc(l.key)}" data-delta="1" class="h-8 w-8 rounded-full hover:bg-stone-100" aria-label="Tambah">+</button>
          </div>
        </li>`;
      })
      .join('');
  }
  const sub = subtotal();
  $('#cart-subtotal').textContent = rp(sub);
  const gap = cfg.FREE_SHIPPING_MIN - sub;
  $('#free-hint').textContent =
    gap > 0
      ? `Tambah ${rp(gap)} lagi untuk gratis ongkir Jabodetabek.`
      : 'Belanja Anda dapat gratis ongkir Jabodetabek.';
  $<HTMLButtonElement>('#to-checkout').disabled = !cart.length;
}

// ---------- checkout ----------
const city = () => cfg.cities[Number((form.elements.namedItem('kota') as HTMLSelectElement).value)];
const courierId = () => (form.querySelector<HTMLInputElement>('input[name=kurir]:checked')?.value ?? 'jne');

function shippingFor(c: City, courier: Courier) {
  if (courier.id === 'instant') return cfg.INSTANT_FLAT;
  if (c.zone !== 'luar' && subtotal() >= cfg.FREE_SHIPPING_MIN) return 0;
  const kg = Math.max(1, Math.ceil(weight()));
  return Math.round((c.reg * courier.factor * kg) / 500) * 500;
}

function renderCouriers() {
  const c = city();
  const current = courierId();
  const available = cfg.couriers.filter((k) => k.id !== 'instant' || c.zone === 'jkt');
  const selected = available.some((k) => k.id === current) ? current : available[0].id;
  $('#courier-list').innerHTML = available
    .map((k) => {
      const cost = shippingFor(c, k);
      const eta = k.id === 'instant' ? '2–3 jam' : c.eta;
      return `<label class="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-stone-200 px-4 py-3 text-sm has-[:checked]:border-amber-600 has-[:checked]:bg-amber-50">
        <span class="flex items-center gap-3"><input type="radio" name="kurir" value="${k.id}" ${k.id === selected ? 'checked' : ''} class="accent-amber-700" />
        <span><span class="font-semibold text-stone-900">${k.name}</span><br /><span class="text-xs">Estimasi ${eta}</span></span></span>
        <span class="font-semibold text-stone-900">${cost === 0 ? 'Gratis' : rp(cost)}</span>
      </label>`;
    })
    .join('');
}

function totals() {
  const courier = cfg.couriers.find((k) => k.id === courierId())!;
  const ship = shippingFor(city(), courier);
  return { sub: subtotal(), ship, total: subtotal() + ship, courier };
}

function renderSummary() {
  $('#co-items').innerHTML = cart
    .map((l) => {
      const p = byId.get(l.id)!;
      return `<li class="flex justify-between gap-3"><span>${l.qty}× ${esc(p.name)}${l.grind ? `<br><span class="text-xs text-stone-400">${esc(l.grind)}</span>` : ''}</span><span class="shrink-0">${rp(p.price * l.qty)}</span></li>`;
    })
    .join('');
  const t = totals();
  $('#co-subtotal').textContent = rp(t.sub);
  $('#co-shipping').textContent = t.ship === 0 ? 'Gratis' : rp(t.ship);
  $('#co-weight').textContent = `(${weight().toFixed(2).replace('.', ',')} kg)`;
  $('#co-total').textContent = rp(t.total);
}

function showStep(step: 'form' | 'pay' | 'done') {
  form.classList.toggle('hidden', step !== 'form');
  $('#co-pay').classList.toggle('hidden', step !== 'pay');
  $('#co-done').classList.toggle('hidden', step !== 'done');
  $('#co-title').textContent = { form: 'Checkout', pay: 'Pembayaran', done: 'Terima kasih!' }[step];
}

$('#to-checkout').addEventListener('click', () => {
  cartDlg.close();
  showStep('form');
  renderCouriers();
  renderSummary();
  coDlg.showModal();
});

form.addEventListener('change', (e) => {
  if ((e.target as HTMLElement).getAttribute('name') === 'kota') renderCouriers();
  renderSummary();
});

// WhatsApp order
$('#co-wa').addEventListener('click', () => {
  if (!form.reportValidity()) return;
  const f = new FormData(form);
  const t = totals();
  const lines = [
    'Halo Kopi Lereng, saya mau pesan:',
    '',
    ...cart.map((l) => {
      const p = byId.get(l.id)!;
      return `- ${l.qty}x ${p.name} (${p.size}${l.grind ? ', ' + l.grind : ''}) ${rp(p.price * l.qty)}`;
    }),
    '',
    `Subtotal: ${rp(t.sub)}`,
    `Ongkir (${t.courier.name}): ${t.ship === 0 ? 'Gratis' : rp(t.ship)}`,
    `Total: ${rp(t.total)}`,
    '',
    `Nama: ${f.get('nama')}`,
    `No. WA: ${f.get('hp')}`,
    `Alamat: ${f.get('alamat')}, ${city().name}`,
  ];
  window.open(`https://wa.me/?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
});

// ---------- payment simulation ----------
let timer: number | undefined;

function fakeQr(size = 25) {
  const cell = 8;
  const finder = (x: number, y: number) =>
    `<rect x="${x * cell}" y="${y * cell}" width="${7 * cell}" height="${7 * cell}" fill="#1c1917"/>` +
    `<rect x="${(x + 1) * cell}" y="${(y + 1) * cell}" width="${5 * cell}" height="${5 * cell}" fill="#fff"/>` +
    `<rect x="${(x + 2) * cell}" y="${(y + 2) * cell}" width="${3 * cell}" height="${3 * cell}" fill="#1c1917"/>`;
  const inFinder = (x: number, y: number) =>
    (x < 8 && y < 8) || (x > size - 9 && y < 8) || (x < 8 && y > size - 9);
  let rects = '';
  for (let y = 0; y < size; y++)
    for (let x = 0; x < size; x++)
      if (!inFinder(x, y) && Math.random() < 0.45)
        rects += `<rect x="${x * cell}" y="${y * cell}" width="${cell}" height="${cell}"/>`;
  const px = size * cell;
  return `<svg viewBox="-16 -16 ${px + 32} ${px + 32}" class="w-full rounded-2xl bg-white ring-1 ring-stone-200" role="img" aria-label="QR contoh">
    <g fill="#1c1917">${rects}</g>${finder(0, 0)}${finder(size - 7, 0)}${finder(0, size - 7)}</svg>`;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const method = String(new FormData(form).get('bayar'));
  const t = totals();
  $('#pay-total').textContent = rp(t.total);
  let body = '';
  if (method === 'qris') {
    body = `<p class="mb-3 text-sm font-semibold text-stone-900">Scan QRIS</p>${fakeQr()}<p class="mt-3 text-xs text-stone-400">QR contoh, tidak bisa dibayar.</p>`;
  } else if (method.startsWith('va-')) {
    const bank = method.slice(3).toUpperCase();
    const va = '8808' + Array.from({ length: 12 }, () => Math.floor(Math.random() * 10)).join('');
    body = `<p class="text-sm">Nomor Virtual Account ${bank}</p>
      <p class="mt-2 rounded-2xl bg-stone-100 px-4 py-4 font-mono text-xl font-bold tracking-wider text-stone-900">${va.replace(/(\d{4})/g, '$1 ').trim()}</p>
      <p class="mt-3 text-xs text-stone-400">Bayar lewat m-banking atau ATM. Status dicek otomatis.</p>`;
  } else {
    body = `<p class="text-sm">Anda akan diarahkan ke aplikasi e-wallet untuk menyetujui pembayaran.</p>
      <div class="mt-4 grid grid-cols-2 gap-2 text-sm font-semibold">${['GoPay', 'ShopeePay', 'DANA', 'OVO'].map((w) => `<span class="rounded-xl bg-stone-100 py-3 text-stone-900">${w}</span>`).join('')}</div>`;
  }
  $('#pay-body').innerHTML = body;
  showStep('pay');

  let left = 15 * 60;
  clearInterval(timer);
  timer = window.setInterval(() => {
    left = Math.max(0, left - 1);
    $('#pay-timer').textContent = `${String(Math.floor(left / 60)).padStart(2, '0')}:${String(left % 60).padStart(2, '0')}`;
    if (!left) clearInterval(timer);
  }, 1000);
});

$('#pay-sim').addEventListener('click', () => {
  clearInterval(timer);
  const d = new Date();
  const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  $('#order-no').textContent = `KL-${ymd}-${Math.floor(1000 + Math.random() * 9000)}`;
  cart = [];
  save();
  renderCart();
  showStep('done');
});

coDlg.addEventListener('close', () => clearInterval(timer));

renderCart();
