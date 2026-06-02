import {
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { brand } from "@/lib/brand";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Thaheem Fruit Farms — phone, WhatsApp, email, Instagram and farm location near Multan, Pakistan.",
};

const items = [
  {
    icon: MapPin,
    title: "Visit us",
    body: brand.address,
  },
  {
    icon: Phone,
    title: "Call",
    body: brand.phone,
    href: `tel:${brand.phone}`,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    body: brand.phone,
    href: `https://wa.me/${brand.whatsapp}`,
  },
  {
    icon: Mail,
    title: "Email",
    body: brand.email,
    href: `mailto:${brand.email}`,
  },
  {
    icon: Instagram,
    title: "Instagram",
    body: `@${brand.instagram}`,
    href: brand.instagramUrl,
  },
];

export default function ContactPage() {
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    brand.mapsQuery
  )}&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        description="Pre-orders, farm visits, bulk enquiries or just a hello — pick the channel you prefer."
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Reveal>
              <ul className="space-y-4">
                {items.map((it) => {
                  const Inner = (
                    <article className="group flex items-start gap-5 rounded-3xl border border-bark/10 bg-cream-50 p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-mango-300">
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mango-100 text-mango-700">
                        <it.icon size={20} />
                      </span>
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-farm-600">
                          {it.title}
                        </h3>
                        <p className="mt-1 text-base text-bark">{it.body}</p>
                      </div>
                    </article>
                  );
                  return (
                    <li key={it.title}>
                      {it.href ? (
                        <a
                          href={it.href}
                          target={it.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer noopener"
                          className="block"
                        >
                          {Inner}
                        </a>
                      ) : (
                        Inner
                      )}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <Reveal>
            <div className="overflow-hidden rounded-[2.5rem] border border-bark/10 shadow-soft">
              <iframe
                src={mapsSrc}
                title="Thaheem Fruit Farms on Google Maps"
                width="100%"
                height="460"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[460px] w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
