import AnimateOnScroll from "./AnimateOnScroll";

const awards = [
  {
    year: "2025",
    title: "100%+ Quota — #1 DSM in Region",
    org: "ArcBest / MOLO Solutions",
    description:
      "Only District Sales Manager in the region to exceed 100% of annual quota. Led an 11-person team while driving top-line growth across the truckload brokerage vertical.",
    color: "#00d4ff",
    icon: "🏆",
  },
  {
    year: "2024",
    title: "Regional Quality Business Award",
    org: "Shreve Cleaning",
    description:
      "Recognized as best cleaning service in the region. 95%+ customer satisfaction sustained across 40%+ YoY growth — all while maintaining a full-time corporate role.",
    color: "#10b981",
    icon: "⭐",
  },
  {
    year: "2016",
    title: "Elevator Pitch Winner",
    org: "Startup Junkie",
    description:
      "Won the regional elevator pitch competition at Startup Junkie — an early sign of a career built on clear communication, sharp positioning, and entrepreneurial drive.",
    color: "#8b5cf6",
    icon: "🎤",
  },
];

export default function Recognition() {
  return (
    <section
      id="recognition"
      style={{
        padding: "120px 24px",
        background: "linear-gradient(180deg, #0e0e1c 0%, #08080f 100%)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <AnimateOnScroll>
          <span className="section-label">Recognition</span>
          <div className="accent-line" style={{ display: "block", marginTop: "12px", marginBottom: "16px" }} />
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: "60px",
              color: "#eeeef8",
            }}
          >
            Results on the record.
          </h2>
        </AnimateOnScroll>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {awards.map((award, i) => (
            <AnimateOnScroll key={award.year + award.title} delay={(i + 1) as 1 | 2 | 3}>
              <div
                className="award-card"
                style={{
                  border: `1px solid ${award.color}28`,
                }}
              >
                {/* Top accent bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, ${award.color}, transparent)`,
                  }}
                />

                {/* Year badge */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.75rem",
                      color: award.color,
                      letterSpacing: "0.1em",
                      fontWeight: 600,
                    }}
                  >
                    {award.year}
                  </span>
                  <span style={{ fontSize: "1.8rem" }}>{award.icon}</span>
                </div>

                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#eeeef8",
                    marginBottom: "6px",
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {award.title}
                </h3>

                <div
                  style={{
                    fontSize: "0.78rem",
                    color: award.color,
                    fontWeight: 600,
                    marginBottom: "16px",
                    fontFamily: "var(--font-jetbrains-mono)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {award.org}
                </div>

                <p style={{ color: "#6b7080", fontSize: "0.875rem", lineHeight: 1.7 }}>
                  {award.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
