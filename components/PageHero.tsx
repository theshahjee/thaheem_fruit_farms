import Reveal from "./Reveal";

type Props = {
  index?: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageHero({
  index,
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-36 md:pb-20 md:pt-44">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-y-3 border-b border-ink/15 pb-5">
            <p className="font-stamp text-[10.5px] font-medium uppercase tracking-stamp text-ink/60">
              {index ? `§ ${index} — ` : ""}
              {eyebrow}
            </p>
            <p className="font-stamp text-[10.5px] font-medium uppercase tracking-stamp text-ink/55">
              Multan · Pakistan · Since 1982
            </p>
          </div>

          <h1
            className="h-display mt-10 max-w-4xl font-medium"
            style={{ fontVariationSettings: '"SOFT" 60, "opsz" 144' }}
          >
            {title}
          </h1>

          {description && (
            <p className="editorial mt-8 max-w-2xl text-[18px]">{description}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
