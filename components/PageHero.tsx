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
    <section className="relative isolate overflow-hidden pb-14 pt-[110px] sm:pt-[120px] md:pb-20 md:pt-36">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-ink/15 pb-4 sm:pb-5">
            <p className="font-stamp text-[10px] font-medium uppercase tracking-stamp text-ink/60 sm:text-[10.5px]">
              {index ? `§ ${index} — ` : ""}
              {eyebrow}
            </p>
            <p className="hidden font-stamp text-[10px] font-medium uppercase tracking-stamp text-ink/55 sm:block sm:text-[10.5px]">
              Multan · Pakistan · Since 1982
            </p>
          </div>

          <h1
            className="h-display mt-6 max-w-4xl break-words font-medium sm:mt-10"
            style={{ fontVariationSettings: '"SOFT" 60, "opsz" 144' }}
          >
            {title}
          </h1>

          {description && (
            <p className="editorial mt-5 max-w-2xl text-[16px] sm:mt-8 sm:text-[18px]">{description}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
