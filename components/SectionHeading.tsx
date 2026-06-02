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
      {(index || eyebrow) && (
        <div className="section-index">
          <span>
            {index && <>§ {index}</>}
            {index && eyebrow && " — "}
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className="h-display-sm mt-5 font-medium"
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
