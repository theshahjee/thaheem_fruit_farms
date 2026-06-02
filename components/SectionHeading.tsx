import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  const alignClass =
    align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`${alignClass} max-w-3xl`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="h-display mt-3">{title}</h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-bark/70 md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
