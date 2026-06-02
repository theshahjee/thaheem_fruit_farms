import Marquee from "./Marquee";

const items = [
  "Since 1982",
  "Export Quality Varieties",
  "Farm Direct",
  "Premium Packaging",
  "Human-Safe Farming",
  "Farm Visits Welcome",
  "Hand-Graded",
  "No Middlemen",
];

export default function TrustStrip() {
  return (
    <section className="relative mt-20 border-y border-ink/15 bg-paper-100/60 py-5">
      <Marquee items={items} separator="✦" />
    </section>
  );
}
