export default function SideRail() {
  return (
    <aside
      aria-hidden
      className="pointer-events-none fixed left-3 top-1/2 z-30 hidden -translate-y-1/2 xl:block"
    >
      <div
        className="flex items-center gap-5 font-stamp text-[10px] font-medium uppercase tracking-stamp text-ink/50"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        <span>Family-Grown</span>
        <span
          className="bg-ink/25"
          style={{ width: "1px", height: "1.75rem" }}
        />
        <span>Hand-Graded</span>
        <span
          className="bg-ink/25"
          style={{ width: "1px", height: "1.75rem" }}
        />
        <span>Farm-Direct</span>
        <span
          className="bg-ink/25"
          style={{ width: "1px", height: "1.75rem" }}
        />
        <span className="text-ink/35">Est. 1982 · Multan, Punjab</span>
      </div>
    </aside>
  );
}
