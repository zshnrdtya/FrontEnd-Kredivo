# Website Kredivo - Frontend PKL

Website frontend Kredivo yang dibuat menggunakan Next.js (App Router) dengan desain mengikuti referensi asli kredivo.id.

## 🚀 Tech Stack

- **Next.js 16.2.9** (App Router)
- **React 19.2.4**
- **TypeScript 5**
- **Tailwind CSS 4**
- **next/image** untuk optimasi gambar
- **next/link** untuk client-side routing

## 📁 Struktur Project

```
frontend-pkl/
├── app/
│   ├── layout.tsx               # Root layout dengan Navbar & Footer
│   ├── page.tsx                 # Homepage
│   ├── merchant/
│   │   └── page.tsx             # Halaman Merchant Kami
│   ├── partner/
│   │   └── page.tsx             # Halaman Jadi Partner (dengan modal form)
│   ├── promo/
│   │   ├── page.tsx             # Halaman Promo (carousel + grid)
│   │   └── [slug]/
│   │       └── page.tsx         # Halaman Detail Promo
│   └── faq/
│       └── page.tsx             # Halaman FAQ
├── components/
│   ├── Navbar.tsx               # Navigasi sticky dengan active state
│   ├── Footer.tsx               # Footer dengan link dan sosial media
│   ├── Hero.tsx                 # Hero section homepage
│   ├── BrandLogos.tsx           # Logo brand partner + button Merchant lainnya
│   ├── FeatureCards.tsx         # 3 card fitur fleksibel
│   ├── Benefits.tsx             # Section keuntungan
│   ├── Features.tsx             # Fitur Kredivo PayLater
│   ├── Testimonials.tsx         # Testimoni pengguna
│   ├── MerchantGrid.tsx         # Grid merchant dengan search & filter
│   ├── PartnerHero.tsx          # Hero section halaman partner
│   ├── PartnerAdvantages.tsx    # 4 keunggulan menjadi partner
│   ├── PartnerLogos.tsx         # Logo partner + button Merchant lainnya
│   ├── PartnerSteps.tsx         # 3 langkah jadi partner
│   ├── PromoHero.tsx            # Carousel banner promo (5 slide, auto-play)
│   └── PromoGrid.tsx            # Grid promo dengan filter sidebar
└── public/                      # Static assets (webp, png, svg)
```

## 🧭 Halaman & Routing

| Route | Halaman | Deskripsi |
|-------|---------|-----------|
| `/` | Homepage | Hero, brand logos, feature cards, benefits, testimonials |
| `/merchant` | Merchant Kami | Search, filter kategori, grid merchant |
| `/partner` | Jadi Partner | Hero, keunggulan, partner logos, 3 langkah, modal form |
| `/promo` | Promo | Carousel banner + grid promo dengan filter |
| `/promo/[slug]` | Detail Promo | Banner, info tabel, tabs S&K / Cara Pakai, sidebar |
| `/faq` | FAQ | Hero + search, artikel terpopuler, topik bantuan, kontak |

## ✨ Fitur Utama

- **Carousel** auto-play 5 detik dengan navigasi prev/next dan dot indicator
- **Modal Form** pada halaman Partner (Hubungi Kami) dengan validasi field
- **Accordion FAQ** di halaman FAQ (kategori sidebar + expand/collapse per pertanyaan)
- **Search & Filter** pada halaman Merchant dan Promo
- **Load More** pada halaman Promo (6 card awal, +6 per klik)
- **Tabs** pada halaman Detail Promo (Syarat & Ketentuan / Cara Pakai)
- **Sticky Navbar** dengan active state per halaman
- **Button Daftar** redirect ke Google Play Store Kredivo

## 🎨 Design System

- **Warna primer**: Sky blue (`sky-500` / `#0ea5e9`)
- **Warna aksen**: Orange (`orange-500` / `#f97316`)
- **Background**: White & gray-50 / gray-100
- **Fully responsive**: Mobile → Tablet → Desktop
- **Rounded corners**, soft shadows, hover transitions

## 🚦 Cara Menjalankan

**1. Install dependencies**
```bash
npm install
```

**2. Jalankan development server**
```bash
npm run dev
```

**3. Buka di browser**
```
http://localhost:3000
```

**4. Build untuk production**
```bash
npm run build
npm start
```

## 📱 Responsive Breakpoints

| Breakpoint | Ukuran |
|------------|--------|
| Mobile | < 640px |
| Tablet | 640px – 1024px |
| Desktop | > 1024px |

## ⚠️ Catatan

- Semua komponen bersifat **UI only** (tidak ada backend/API)
- Search, filter, dan form adalah **static UI** tanpa koneksi server
- Button **Daftar** membuka Google Play Store di tab baru
- Button **Hubungi Kami** membuka modal form di halaman yang sama

## 👥 Developer

- **Project**: Frontend PKL — Kredivo Clone
- **Framework**: Next.js 16 App Router
- **Tahun**: 2025

---

**SMKN 1 Depok — Indi Technology**
