import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { brand, nav } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="relative bg-farm-800 text-cream-100">
      {/* grain */}
      <div className="pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay grain-cream" />

      {/* Big editorial wordmark */}
      <div className="relative container-page pt-16 sm:pt-20">
        <p className="font-stamp text-[10px] uppercase tracking-stamp text-cream-100/60 sm:text-[10.5px]">
          Est · 1982 · Multan · Pakistan
        </p>
        <div
          className="mt-3 font-display text-[clamp(3rem,9vw,9rem)] font-medium leading-[0.9] tracking-[-0.03em]"
          style={{ fontVariationSettings: '"SOFT" 60, "opsz" 144' }}
        >
          <span className="block text-cream-50">Thaheem</span>
          <span className="mt-1 block italic text-mango-400 sm:mt-2">
            Fruit Farms
          </span>
        </div>
        <p className="mt-6 max-w-md font-editorial text-[15px] leading-relaxed text-cream-100/70">
          A family orchard near Multan, growing premium export-grade mangoes
          for four decades.
        </p>
      </div>

      <div className="relative container-page mt-16 grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo size={52} variant="light" />
          <p className="mt-6 max-w-xs font-editorial text-sm leading-relaxed text-cream-100/75">
            Premium export quality mangoes since 1982. Family-grown near Multan,
            packed with care, delivered direct from our orchards.
          </p>
        </div>

        <div>
          <h4 className="font-stamp text-[10.5px] uppercase tracking-stamp text-cream-100/60">
            Explore
          </h4>
          <ul className="mt-5 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-editorial text-[15px] text-cream-100/85 transition hover:text-mango-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-stamp text-[10.5px] uppercase tracking-stamp text-cream-100/60">
            Visit Us
          </h4>
          <p className="mt-5 flex items-start gap-3 font-editorial text-[15px] leading-relaxed text-cream-100/85">
            <MapPin size={16} className="mt-1 shrink-0 text-mango-300" />
            <span>{brand.address}</span>
          </p>
        </div>

        <div>
          <h4 className="font-stamp text-[10.5px] uppercase tracking-stamp text-cream-100/60">
            Contact
          </h4>
          <ul className="mt-5 space-y-3 font-editorial text-[15px]">
            <li>
              <a
                href={`tel:${brand.phone}`}
                className="flex items-center gap-3 text-cream-100/85 transition hover:text-mango-300"
              >
                <Phone size={15} className="text-mango-300" /> {brand.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${brand.email}`}
                className="flex items-center gap-3 text-cream-100/85 transition hover:text-mango-300"
              >
                <Mail size={15} className="text-mango-300" /> {brand.email}
              </a>
            </li>
            <li>
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-cream-100/85 transition hover:text-mango-300"
              >
                <Instagram size={15} className="text-mango-300" /> @
                {brand.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-cream-100/15">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 font-stamp text-[10.5px] uppercase tracking-stamp text-cream-100/55 md:flex-row">
          <p>
            © {new Date().getFullYear()} {brand.name} · All rights reserved
          </p>
          <p>Crafted with care · Grown with heritage</p>
        </div>
      </div>
    </footer>
  );
}
