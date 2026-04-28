// Ambient backdrop behind the Hero + TrustBar.
// Pure CSS / inline SVG — no JS, no video, no client boundary.
// Animations are gated by prefers-reduced-motion in app/globals.css.

const DOT_GRID_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><circle cx='1' cy='1' r='1' fill='rgba(245,247,250,0.18)'/></svg>`;

export function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* base canvas */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--color-bg-canvas)" }}
      />

      {/* three drifting radial blobs — the "mesh" */}
      <div className="absolute inset-0 hero-mesh-a" />
      <div className="absolute inset-0 hero-mesh-b" />
      <div className="absolute inset-0 hero-mesh-c" />

      {/* faint dot grid for texture */}
      <div
        className="absolute inset-0 hero-dotgrid"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(DOT_GRID_SVG)}")`,
          backgroundSize: "32px 32px",
          opacity: 0.3,
        }}
      />

      {/* hard bottom fade — boundary into the next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-48"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, var(--color-bg-canvas) 100%)",
        }}
      />
    </div>
  );
}
