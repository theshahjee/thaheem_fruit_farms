import Reveal from "./Reveal";

type Props = {
  index?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`${alignClass} max-w-3xl`}>
      <div
        className={`flex items-center gap-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        {index && (
          <span className="font-stamp text-[10.5px] font-medium uppercase tracking-stamp text-ink/55">
            § {index}
          </span>
        )}
        {eyebrow && (
          <span className="font-stamp text-[10.5px] font-medium uppercase tracking-stamp text-mango-700">
            {eyebrow}
          </span>
        )}
      </div>
      <h2
        className="h-display-sm mt-4 font-medium"
        style={{ fontVariationSettings: '"SOFT" 60, "opsz" 60' }}
      >
        {title}
      </h2>
      {description && (
        <p className="editorial mx-auto mt-5 max-w-2xl">{description}</p>
      )}
    </Reveal>
  );
}
