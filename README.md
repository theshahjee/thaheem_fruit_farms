# Thaheem Fruit Farms

> Premium Export Quality Mangoes From Multan — Since 1982

A premium, mobile-first marketing website for **Thaheem Fruit Farms**, a family-owned mango orchard near Multan, Pakistan. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS and Framer Motion.

The site is **frontend-only** — all "form submissions" open WhatsApp with a pre-filled message, so the business can reply directly from a single channel without any backend hosting.

---

## Brand

- **Name** — Thaheem Fruit Farms
- **Tagline** — Premium Export Quality Mangoes From Multan
- **Founded** — 1982
- **Location** — Ghouspur Thaheem, Tehsil Kabirwala, District Khanewal, Punjab, Pakistan
- **Phone / WhatsApp** — 0302 7766627
- **Email** — thaheemfruitfarms@gmail.com
- **Instagram** — [@thaheemfruitfarms](https://instagram.com/thaheemfruitfarms)

The official logo lives at `public/images/logo/logo.jpeg` and is used **as-is** across the site (no redesigns or recreations).

### Colour system

| Token        | Hex       | Usage                       |
| ------------ | --------- | --------------------------- |
| `mango-500`  | `#F5A623` | Primary mango yellow        |
| `farm-500`   | `#3D7A2A` | Deep farm green             |
| `khaki-100`  | `#F0E6C8` | Khaki beige                 |
| `cream`      | `#FBF5E6` | Warm cream background       |
| `gold`       | `#C9A227` | Soft gold accent            |
| `bark`       | `#2A1A0C` | Deep brown text / borders   |

The full palette ships in `tailwind.config.ts`.

---

## Tech Stack

- **Framework** — [Next.js 14](https://nextjs.org/) (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS 3 with a custom mango/farm theme
- **Motion** — Framer Motion (reveal-on-scroll, hero animation, subtle hovers)
- **Icons** — lucide-react
- **Typography** — Cormorant Garamond (display) + Inter (body), loaded via `next/font/google`

No backend, no database, no auth — pure static frontend.

---

## Getting Started

### Prerequisites

- Node.js ≥ 18 (tested on 22.x)
- npm ≥ 10

### Install

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Visit http://localhost:3000.

### Build for production

```bash
npm run build
npm run start
```

### Deploy

The site can be deployed as a Next.js app to **Vercel** (recommended — `vercel deploy`), Netlify, or any Node host. For pure static hosting (Cloudflare Pages, GitHub Pages, S3) add `output: "export"` to `next.config.mjs` and use `npm run build`; the static site appears in `out/`.

---

## Project Structure

```
thaheem_fruit_farms/
├── app/                            # Next.js App Router pages
│   ├── layout.tsx                  # Root layout (fonts, nav, footer, WhatsApp)
│   ├── page.tsx                    # Home
│   ├── globals.css                 # Tailwind + custom component styles
│   ├── about/page.tsx              # Brand story + milestones
│   ├── varieties/page.tsx          # Full variety grid
│   ├── pre-booking/page.tsx        # Pre-booking form
│   ├── farm-visit/page.tsx         # Farm visit info + request form
│   └── contact/page.tsx            # Contact methods, form, Google Map
│
├── components/                     # Reusable UI components
│   ├── Navbar.tsx                  # Sticky nav with scroll-state + mobile menu
│   ├── Footer.tsx                  # Site footer
│   ├── WhatsAppButton.tsx          # Floating chat button
│   ├── Logo.tsx                    # Logo + wordmark
│   ├── Hero.tsx                    # Home hero
│   ├── TrustStrip.tsx              # Trust badges row
│   ├── VarietiesPreview.tsx        # Home varieties grid
│   ├── VarietyCard.tsx             # Single variety card
│   ├── StoryPreview.tsx            # Home "Our Story" teaser
│   ├── WhyUs.tsx                   # Why-choose-us grid
│   ├── CTABanner.tsx               # Pre-booking CTA banner
│   ├── PageHero.tsx                # Inner-page hero header
│   ├── SectionHeading.tsx          # Reusable section heading
│   ├── Reveal.tsx                  # Framer Motion reveal-on-scroll
│   ├── PreBookingForm.tsx          # Pre-booking form (WhatsApp submit)
│   ├── FarmVisitForm.tsx           # Farm-visit request form
│   └── ContactForm.tsx             # Contact form
│
├── lib/                            # Pure data + helpers
│   ├── brand.ts                    # Brand constants + nav definition
│   ├── varieties.ts                # Variety catalogue
│   └── cn.ts                       # Class-name helper
│
├── public/
│   └── images/
│       ├── logo/logo.jpeg          # OFFICIAL LOGO — do not modify
│       ├── hero/hero-orchard.svg   # Hero illustration
│       ├── farm/orchard-rows.svg   # Orchard illustration
│       └── varieties/*.svg         # Per-variety illustrations
│
├── docs/
│   └── DESIGN.md                   # Design system + page-by-page notes
│
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## How "form submissions" work

Because the site is frontend-only, every form (pre-booking, farm visit, contact) **opens a pre-filled WhatsApp chat** with the business number when submitted:

1. The user fills the form.
2. On submit, the form serialises its state into a human-readable message.
3. `wa.me/<number>?text=<encoded-message>` opens in a new tab.
4. The customer hits Send in WhatsApp — the business receives a structured message.

To swap WhatsApp for an email service, Google Form, or an API:

- Edit the `onSubmit` handler inside `components/PreBookingForm.tsx`, `components/FarmVisitForm.tsx` or `components/ContactForm.tsx`.

---

## Editing content

| What you want to change             | Where to edit                              |
| ----------------------------------- | ------------------------------------------ |
| Phone / email / address / Instagram | `lib/brand.ts`                             |
| Navigation links                    | `lib/brand.ts` (`nav` array)               |
| Mango varieties                     | `lib/varieties.ts`                         |
| Home page sections / order          | `app/page.tsx`                             |
| Colours / spacing / fonts           | `tailwind.config.ts`, `app/globals.css`    |
| Logo file                           | `public/images/logo/logo.jpeg`             |

---

## Notes

- The Pre-Booking page uses `useSearchParams`, which is wrapped in a `<Suspense>` boundary as required by the Next.js App Router.
- Variety illustrations are inline SVGs — replace them with real product photography in `public/images/varieties/` keeping the same filenames for a drop-in upgrade.
- Map iframe pulls the Google Maps embed for the farm address. No API key required.

---

© Thaheem Fruit Farms — Premium Export Quality Mangoes Since 1982.
