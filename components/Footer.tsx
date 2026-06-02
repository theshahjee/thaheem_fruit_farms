import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { brand, nav } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="relative bg-farm-700 text-cream-100">
      <div className="absolute inset-0 bg-radial-mango opacity-30" />
      <div className="container-page relative grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo size={56} variant="light" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream-100/80">
            Premium Export Quality Mangoes Since 1982. Family-grown near Multan,
            packed with care, delivered direct from our orchards.
          </p>
        </div>

        <div>
          <h4 className="font-display text-xl text-cream-50">Explore</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-cream-100/75 transition hover:text-mango-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl text-cream-50">Visit Us</h4>
          <p className="mt-5 flex items-start gap-3 text-sm text-cream-100/80">
            <MapPin size={18} className="mt-0.5 shrink-0 text-mango-300" />
            <span>{brand.address}</span>
          </p>
        </div>

        <div>
          <h4 className="font-display text-xl text-cream-50">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={`tel:${brand.phone}`}
                className="flex items-center gap-3 text-cream-100/85 transition hover:text-mango-300"
              >
                <Phone size={16} className="text-mango-300" /> {brand.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${brand.email}`}
                className="flex items-center gap-3 text-cream-100/85 transition hover:text-mango-300"
              >
                <Mail size={16} className="text-mango-300" /> {brand.email}
              </a>
            </li>
            <li>
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-cream-100/85 transition hover:text-mango-300"
              >
                <Instagram size={16} className="text-mango-300" /> @
                {brand.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-cream-100/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-xs text-cream-100/60 md:flex-row">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p>Crafted with care. Grown with heritage.</p>
        </div>
      </div>
    </footer>
  );
}
