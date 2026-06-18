import Image from "next/image";
import { BadgeCheck, Box, Leaf, Sprout, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FarmVisitForm from "@/components/FarmVisitForm";
import SectionHeading from "@/components/SectionHeading";
import { imgPath } from "@/lib/imgPath";

export const metadata = {
  title: "Farm Visit — Walk Our Mango Orchard Near Multan",
  description:
    "Visit Thaheem Fruit Farms in Ghouspur Thaheem, Tehsil Kabirwala, near Multan. Walk the orchard, watch hand-grading and packing, taste mangoes straight from the tree — May to September.",
  alternates: { canonical: "/farm-visit/" },
  openGraph: {
    title: "Visit Thaheem Fruit Farms — A Family Mango Orchard Near Multan",
    description:
      "An open farm. Walk the orchard, watch packing, taste the standard — experience export quality firsthand.",
    url: "https://thaheemfruitfarms.com/farm-visit/",
    type: "website",
  },
};

const experiences = [
  {
    icon: BadgeCheck,
    title: "Export Quality Selection",
    body: "See how we hand-grade each mango — colour, weight, firmness and aroma.",
  },
  {
    icon: Sprout,
    title: "Controlled Growing Environment",
    body: "Walk between rows of mature trees raised on responsible, human-safe practices.",
  },
  {
    icon: Box,
    title: "Packaging Process",
    body: "Watch our team pack each box with ventilation, padding and care.",
  },
  {
    icon: Leaf,
    title: "Mango Inspection",
    body: "Taste straight from the tree and see why texture and ripening matter.",
  },
  {
    icon: Users,
    title: "Family Farming Operations",
    body: "Meet the people behind every box — this is a family-run farm in every sense.",
  },
];

export default function FarmVisitPage() {
  return (
    <>
      <PageHero
        eyebrow="Visit the Farm"
        title="See The Difference Yourself"
        description="We believe quality should be experienced, not just promised. Walk the orchard with us — and taste the difference straight from the tree."
      />

      <section className="section">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] ring-1 ring-bark/10 shadow-soft">
              <Image
                src={imgPath("/images/farm/orchard-golden-hour.jpg")}
                alt="The Thaheem Fruit Farms mango orchard in Ghouspur Thaheem, near Multan"
                fill
                sizes="(min-width:1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">An open farm</span>
            <h2 className="h-display mt-3">
              Walk the orchard. Taste the standard.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-bark/75 md:text-lg">
              Customers are welcome to visit our farm in Ghouspur Thaheem,
              Tehsil Kabirwala, District Khanewal and witness:
            </p>

            <ul className="mt-8 space-y-4">
              {experiences.map((e) => (
                <li key={e.title} className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-farm-50 text-farm-600">
                    <e.icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-bark">
                      {e.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-bark/70">
                      {e.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section bg-cream-100">
        <div className="container-page">
          <SectionHeading
            eyebrow="Plan Your Visit"
            title="Request a farm visit"
            description="Send us your preferred date and we'll confirm a time. Visits are best between May and September — peak mango season."
          />
          <div className="mt-12">
            <FarmVisitForm />
          </div>
        </div>
      </section>
    </>
  );
}
