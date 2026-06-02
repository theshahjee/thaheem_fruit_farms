export default function SideRail() {
  return (
    <aside
      aria-hidden
      className="pointer-events-none fixed left-2 top-1/2 z-30 hidden -translate-y-1/2 lg:block"
    >
      <span
        className="font-stamp text-[9.5px] font-medium uppercase tracking-[0.22em] text-ink/45"
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
        }}
      >
        Family-Grown · Hand-Graded · Farm-Direct · Est. 1982 · Multan, Punjab
      </span>
    </aside>
  );
}
