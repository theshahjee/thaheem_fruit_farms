import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-cream-50 pb-16 pt-36 md:pt-44">
      <div className="absolute inset-0 -z-10 bg-radial-mango opacity-70" />
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-mango-100/40 to-transparent" />
      <div className="container-page text-center">
        <Reveal>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="h-display mt-3">{title}</h1>
          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-bark/70 md:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
