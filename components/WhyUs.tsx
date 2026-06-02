import Reveal from "./Reveal";

const principles = [
  {
    title: "Export-grade only",
    body: "We grow and select exclusively premium export cultivars. Nothing else makes it into a Thaheem box — full stop.",
  },
  {
    title: "Human-safe protection",
    body: "Responsible crop protection that is safe for our farm workers, for our family, and for yours.",
  },
  {
    title: "End-to-end export standards",
    body: "From harvest and ripening to grading and packing, every step follows protocols designed for international export.",
  },
  {
    title: "Purpose-built packaging",
    body: "Ventilated, branded, transit-tested boxes built for our mangoes — never repurposed produce trays.",
  },
  {
    title: "No middlemen",
    body: "We leave the orchard, we pack the box, we ship it. No commission agents, no cold storage chains.",
  },
  {
    title: "Open farm",
    body: "Walk the orchard with us. See the standards. Quality should be experienced, not just promised.",
  },
];

export default function WhyUs() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-page">
        <Reveal>
          <div className="section-index">
            <span>§ 04 — The Standard</span>
          </div>
        </Reveal>
      </div>
      <div className="container-page mt-10 grid gap-12 sm:mt-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <h2
            className="h-display font-medium"
            style={{ fontVariationSettings: '"SOFT" 60, "opsz" 96' }}
          >
            Why
            <br />
            <em className="font-display italic text-mango-600">Thaheem</em>?
          </h2>
          <p className="editorial mt-6 max-w-md">
            Quality begins at the roots. It continues through every stage of
            cultivation, selection, packaging and delivery — and is sealed by
            the family standing behind it.
          </p>
        </Reveal>

        <div className="lg:col-span-8">
          <ol className="divide-y divide-ink/15 border-y border-ink/15">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.04}>
                <li className="grid grid-cols-[60px_1fr] gap-6 py-7 md:grid-cols-[80px_1fr] md:gap-10 md:py-9">
                  <span
                    className="font-display text-3xl font-medium text-ink/30 md:text-4xl"
                    style={{ fontVariationSettings: '"SOFT" 60, "opsz" 60' }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="font-display text-2xl font-medium leading-tight text-ink md:text-[28px]"
                      style={{ fontVariationSettings: '"SOFT" 60, "opsz" 36' }}
                    >
                      {p.title}
                    </h3>
                    <p className="editorial mt-2 max-w-xl text-[15.5px]">
                      {p.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
