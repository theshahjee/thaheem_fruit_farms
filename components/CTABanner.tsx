import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brand } from "@/lib/brand";

export default function CTABanner() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-farm-600 via-farm-700 to-farm-800 px-8 py-16 text-center text-cream-50 md:px-16 md:py-24">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-mango-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-mango-400/20 blur-3xl" />

          <span className="eyebrow text-mango-300">Pre-Booking Open</span>
          <h2 className="h-display mt-4 text-cream-50">
            Reserve your box of{" "}
            <span className="text-mango-300">premium mangoes</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream-100/80 md:text-lg">
            Quantities are limited each season — our finest fruit is reserved
            first for pre-booked customers. Lock yours in today.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/pre-booking" className="btn-primary">
              Pre-Book Now <ArrowRight size={16} />
            </Link>
            <a
              href={`https://wa.me/${brand.whatsapp}`}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-cream-50 transition-all duration-300 hover:bg-cream-50 hover:text-bark"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
