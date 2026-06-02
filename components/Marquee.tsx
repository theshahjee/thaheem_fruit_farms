type Props = {
  items: string[];
  separator?: string;
};

export default function Marquee({ items, separator = "·" }: Props) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className="marquee-track">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-6 px-6 font-stamp text-[11px] font-medium uppercase tracking-stamp text-ink/70"
          >
            <span>{item}</span>
            <span className="text-mango-600" aria-hidden>
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
