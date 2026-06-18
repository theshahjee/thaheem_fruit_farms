import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import PreBookingForm from "@/components/PreBookingForm";
import Reveal from "@/components/Reveal";
import { Box, Calendar, Truck } from "lucide-react";

export const metadata = {
  title: "Pre-Book Premium Mangoes — Season 2026 Delivery Across Pakistan",
  description:
    "Pre-book Sindhri, Anwar Ratool, Royal Chaunsa, White Chaunsa and 12 No Ratool mangoes for Season 2026. Hand-graded export-quality boxes delivered farm-direct across Karachi, Lahore, Islamabad, Multan and beyond.",
  alternates: { canonical: "/pre-booking/" },
  openGraph: {
    title: "Pre-Book Premium Mangoes — Thaheem Fruit Farms Season 2026",
    description:
      "Reserve farm-direct, export-quality mangoes. Pick a variety, box size and city — we ripen and dispatch at peak.",
    url: "https://thaheemfruitfarms.com/pre-booking/",
    type: "website",
  },
};

const steps = [
  {
    icon: Box,
    title: "1. Choose your box",
    body: "Pick a variety, box size and quantity that suits your family or gifting.",
  },
  {
    icon: Calendar,
    title: "2. Confirm details",
    body: "We confirm availability for your dates and lock in your reservation.",
  },
  {
    icon: Truck,
    title: "3. Farm to doorstep",
    body: "Once ripened on the tree, we pack and dispatch directly to your city.",
  },
];

export default function PreBookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pre-Booking"
        title="Reserve your premium box"
        description="A simple, no-fuss pre-booking. Tell us what you want — we will reserve, ripen and dispatch when your mangoes are at their peak."
      />

      <section className="section">
        <div className="container-page">
          <Suspense fallback={<div className="h-40 animate-pulse rounded-3xl bg-cream-100" />}>
            <PreBookingForm />
          </Suspense>
        </div>
      </section>

      <section className="section bg-cream-100">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <article className="h-full rounded-3xl border border-bark/10 bg-cream-50 p-8 shadow-soft">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-mango-100 text-mango-700">
                    <s.icon size={22} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-bark">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-bark/70">
                    {s.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
