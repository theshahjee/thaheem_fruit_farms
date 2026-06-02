import {
  BadgeCheck,
  Calendar,
  Leaf,
  Package,
  ShieldCheck,
  Sprout,
} from "lucide-react";
import Reveal from "./Reveal";

const items = [
  { icon: Calendar, label: "Since 1982" },
  { icon: BadgeCheck, label: "Export Quality Varieties" },
  { icon: Sprout, label: "Farm Direct" },
  { icon: Package, label: "Premium Packaging" },
  { icon: ShieldCheck, label: "Human-Safe Farming" },
  { icon: Leaf, label: "Farm Visits Welcome" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-bark/10 bg-cream-100/60">
      <div className="container-page py-10 md:py-14">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-3 lg:grid-cols-6">
          {items.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 0.05}>
              <li className="flex flex-col items-center gap-3 text-center md:flex-row md:text-left">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mango-100 text-mango-700">
                  <Icon size={20} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-bark/80">
                  {label}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
