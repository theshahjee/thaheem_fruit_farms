export default function SideRail() {
  return (
    <aside
      aria-hidden
      className="pointer-events-none fixed right-2 top-1/2 z-30 hidden -translate-y-1/2 lg:block"
    >
      <span
        className="font-stamp text-[9px] font-medium uppercase tracking-[0.2em] text-ink/40"
        style={{ writingMode: "vertical-rl" }}
      >
        Family-Grown · Hand-Graded · Farm-Direct
      </span>
    </aside>
  );
}
