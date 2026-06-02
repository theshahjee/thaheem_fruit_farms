import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brand } from "@/lib/brand";

export default function CTABanner() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[6px] border border-ink/10 bg-farm-700 px-8 py-20 text-center text-cream-50 md:px-16 md:py-28">
          {/* atmospheric blobs */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-mango-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-mango-400/15 blur-3xl" />
          {/* grain */}
          <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay grain-cream" />

          <div className="relative">
            <div className="section-index !text-cream-100/65 [&::before]:!bg-cream-100/30 [&::after]:!bg-cream-100/30">
              <span>§ 05 — Pre-Booking Open</span>
            </div>
            <h2
              className="mt-6 font-display text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[1] tracking-[-0.02em] text-cream-50"
              style={{ fontVariationSettings: '"SOFT" 60, "opsz" 96' }}
            >
              Reserve your box of
              <br />
              <em className="font-display italic text-mango-300">
                premium mangoes
              </em>
              .
            </h2>
            <p className="editorial mx-auto mt-6 max-w-xl text-cream-100/85">
              Quantities are limited each season — our finest fruit is reserved
              first for pre-booked customers.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/pre-booking" className="btn-mango">
                Pre-Book Now <ArrowRight size={14} />
              </Link>
              <a
                href={`https://wa.me/${brand.whatsapp}`}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/30 px-7 py-3.5 font-stamp text-[11px] font-medium uppercase tracking-stamp text-cream-50 transition-all duration-300 hover:bg-cream-50 hover:text-ink"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
