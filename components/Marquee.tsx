type Props = {
  items: string[];
  separator?: string;
};

export default function Marquee({ items, separator = "·" }: Props) {
  return (
    <div className="overflow-hidden">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1 ? true : undefined}
            className="flex shrink-0 items-center"
          >
            {items.map((item, i) => (
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
        ))}
      </div>
    </div>
  );
}
