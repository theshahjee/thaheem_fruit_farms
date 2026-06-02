# Design System — Thaheem Fruit Farms

This is the visual reference for the Thaheem Fruit Farms website. It documents the colour palette, typography, components and page composition so anyone can pick up the project and extend it without breaking the brand.

---

## Design Principles

The site has to feel like **Apple-quality UI meets premium export mango branding**.

1. **Premium & Agricultural** — warm tones, organic curves, generous whitespace.
2. **Trustworthy & Heritage-led** — anchor the brand to "Since 1982" and the family story.
3. **Export Quality** — visual language inspired by export crates: wood beige, mango orange, deep farm green.
4. **Mobile-first** — the navbar collapses to a sheet, every grid drops to one column gracefully.
5. **Photography over copy** — large imagery (or rich illustrations), minimal supporting text.

What we **avoid**: corporate blues, neon accents, dark/black themes, generic stock typography.

---

## Colour Palette

| Role                   | Token        | Hex       |
| ---------------------- | ------------ | --------- |
| Primary — Mango Yellow | `mango-500`  | `#F5A623` |
| Primary — Farm Green   | `farm-500`   | `#3D7A2A` |
| Secondary — Khaki      | `khaki-100`  | `#F0E6C8` |
| Background — Cream     | `cream`      | `#FBF5E6` |
| Accent — Soft Gold     | `gold`       | `#C9A227` |
| Text — Deep Bark Brown | `bark`       | `#2A1A0C` |

Every colour has a full `50 → 900` scale defined in `tailwind.config.ts`.

### When to use what

- **`bg-cream-50`** — default page background.
- **`bg-cream-100`** — alternating sections.
- **`bg-farm-700`** — footer and CTA banner.
- **`text-bark`** — body and headings.
- **`text-mango-600`** — emphasis inside headings.
- **`text-farm-600`** — eyebrows + small captions.

---

## Typography

- **Display** — Cormorant Garamond (500/600/700). Used for `h1`, `h2`, large numerals, brand wordmark.
- **Body** — Inter. UI, buttons, body copy.

Helper classes:

- `.h-display` — main heading style (`4xl → 6xl`).
- `.eyebrow` — small uppercase label above section headings.
- `.field-label` — form-field labels.

---

## Reusable utility components

| Class           | Purpose                                                                 |
| --------------- | ----------------------------------------------------------------------- |
| `container-page`| Max-width 1280px container with responsive horizontal padding.          |
| `section`       | Vertical rhythm (`py-20 md:py-28`).                                     |
| `btn-primary`   | Mango filled pill button.                                               |
| `btn-ghost`     | Outlined pill button.                                                   |
| `btn-dark`      | Deep farm-green filled pill button.                                     |
| `card-glass`    | Soft beige card with rounded corners and soft shadow.                   |
| `field-input`   | Form input baseline (rounded, cream, focus ring).                       |

---

## Layout & Spacing

- **Section spacing** — `py-20` on mobile, `py-28` on `md+`.
- **Grid gaps** — `gap-6` (cards), `gap-12 → gap-20` (split layouts).
- **Rounding** — `rounded-3xl` for cards; `rounded-[2.5rem]` for hero panels and CTA banners; `rounded-full` for pills and badges.
- **Shadows** — `shadow-soft` is the default; `shadow-glow` highlights primary interactions.

---

## Motion

All motion is implemented with Framer Motion and respects `prefers-reduced-motion`.

- **Reveal-on-scroll** — `<Reveal>` component: fade + 24px slide-up, triggered once per element.
- **Hero** — staggered title / paragraph / button entrance.
- **Hero badge** — slow vertical float loop (`6s ease-in-out infinite`).
- **Variety cards** — `whileHover={{ y: -6 }}` lift, image scales `1 → 1.05`.

---

## Page composition

### Home (`app/page.tsx`)

1. **Hero** — title, subhead, primary CTA, hero illustration, floating logo + quality badge.
2. **TrustStrip** — six trust badges.
3. **VarietiesPreview** — full 5-card grid + "View all varieties".
4. **StoryPreview** — image left, brand story right, CTA to About.
5. **WhyUs** — 8 reasons.
6. **CTABanner** — green-on-mango pre-booking CTA.

### About (`app/about/page.tsx`)

1. PageHero with brand-story headline.
2. Narrative + image (orchard).
3. Timeline — 1982 / 1990s / 2020s milestones.
4. Pillars — heritage, human-safe, export-only, farm-to-doorstep.
5. CTA to Farm Visit.

### Varieties (`app/varieties/page.tsx`)

PageHero + full grid of 5 variety cards + CTA banner.

### Pre-Booking (`app/pre-booking/page.tsx`)

PageHero + form (variety radio, box-size radio, quantity stepper, customer details). Submits via WhatsApp. Followed by a 3-step "how it works" strip.

### Farm Visit (`app/farm-visit/page.tsx`)

PageHero + image + 5-experience list + visit-request form.

### Contact (`app/contact/page.tsx`)

PageHero + contact methods (phone, WhatsApp, email, Instagram, address) + contact form + Google Maps iframe.

---

## Variety Cards

All five varieties (Export Royal Sindhri, Aseel Anwar Ratool, Royal Chaunsa Export, White Chaunsa Export, 12 No Ratool) share the same card structure (`components/VarietyCard.tsx`) — image area with accent gradient, "Export Grade" pill, name, description, taste / harvest / packaging metadata and a `Pre-Order` button that deep-links into `/pre-booking?variety=<slug>`.

Card accents (`mango` / `khaki` / `farm`) are defined per variety in `lib/varieties.ts`.

---

## Image strategy

The site ships with stylised SVG illustrations so it works out of the box without sourcing photography. To upgrade:

1. Drop high-resolution mango photography into `public/images/varieties/`, keeping the same filenames (e.g. `sindhri.svg → sindhri.jpg`) — then update the extension in `components/VarietyCard.tsx`'s `slugToImage` map.
2. Replace `public/images/hero/hero-orchard.svg` with a real golden-hour orchard photo.
3. Replace `public/images/farm/orchard-rows.svg` with farm/packing imagery.

The official Thaheem Fruit Farms logo at `public/images/logo/logo.jpeg` is used as-is — do not redesign, recreate, or alter it.

---

## Accessibility

- All interactive elements have visible focus rings (`focus:ring-mango-500/40`).
- WhatsApp + nav buttons have `aria-label`s.
- Forms use `<label>` + `htmlFor`.
- Reduced-motion users get static reveals via `useReducedMotion()` in `Reveal.tsx`.
