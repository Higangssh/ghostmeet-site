export function GhostOrb() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div
        className="ghost-orb"
        style={{
          top: "10%",
          left: "55%",
          width: 520,
          height: 520,
          background:
            "radial-gradient(circle, rgba(163,255,107,0.18) 0%, rgba(163,255,107,0.04) 40%, transparent 70%)",
          animationDelay: "0s",
        }}
      />
      <div
        className="ghost-orb"
        style={{
          top: "55%",
          left: "-10%",
          width: 460,
          height: 460,
          background:
            "radial-gradient(circle, rgba(255,107,53,0.08) 0%, rgba(255,107,53,0.02) 40%, transparent 70%)",
          animationDelay: "-6s",
          animationDuration: "22s",
        }}
      />
      <div
        className="ghost-orb"
        style={{
          top: "5%",
          left: "-5%",
          width: 360,
          height: 360,
          background:
            "radial-gradient(circle, rgba(245,241,232,0.06) 0%, transparent 70%)",
          animationDelay: "-12s",
          animationDuration: "26s",
        }}
      />
    </div>
  );
}
