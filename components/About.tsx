import AnimateOnScroll from "./AnimateOnScroll";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <AnimateOnScroll>
        <span className="section-label">About</span>
        <div className="accent-line" style={{ display: "block", marginTop: "12px", marginBottom: "40px" }} />
      </AnimateOnScroll>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "64px",
          alignItems: "start",
        }}
      >
        {/* Story */}
        <div>
          <AnimateOnScroll delay={1}>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: "28px",
                color: "#eeeef8",
              }}
            >
              I sell better because{" "}
              <span className="gradient-text">I build the tools</span>{" "}
              I sell with.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={2}>
            <p style={{ color: "#9499a8", marginBottom: "20px", lineHeight: 1.8 }}>
              My career sits at an unusual intersection: I've been a quota-carrying rep,
              a team manager, and a founder — all at the same time. Eight years in,
              I'm still the one who wants to understand the product deeply enough to
              rebuild it if needed.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={3}>
            <p style={{ color: "#9499a8", marginBottom: "20px", lineHeight: 1.8 }}>
              At ArcBest/MOLO, I became the only District Sales Manager in the region
              to hit 100% of quota in 2025. I did it by leading a team of 11 —
              and by building six AI tools that changed how we prospect, pitch, and
              practice: a cold call grader, AI roleplay simulator, outbound engine,
              lead scraper, email agent, and inventory tracker. All in production.
              All built by me.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={4}>
            <p style={{ color: "#9499a8", lineHeight: 1.8 }}>
              Alongside my corporate role, I grew Shreve Cleaning from zero to
              $200K+ revenue at 25% margins, earning a regional quality award
              and 95%+ customer satisfaction. I'm currently running the full
              business sale — valuation, buyer qualification, and transition.
              That's how I think: build it, run it, own the outcome.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Right column — highlights */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {highlights.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={(i % 4 + 1) as 1 | 2 | 3 | 4}>
              <div
                className="glow-card"
                style={{ padding: "20px 24px", display: "flex", gap: "16px", alignItems: "flex-start" }}
              >
                <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{item.icon}</span>
                <div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontFamily: "var(--font-jetbrains-mono)",
                      color: item.color,
                      letterSpacing: "0.06em",
                      marginBottom: "4px",
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ fontWeight: 600, color: "#eeeef8", fontSize: "0.95rem" }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "#6b7080", marginTop: "2px" }}>
                    {item.sub}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}

          {/* Location callout */}
          <AnimateOnScroll delay={4}>
            <div
              style={{
                padding: "20px 24px",
                background: "rgba(0,212,255,0.04)",
                border: "1px solid rgba(0,212,255,0.15)",
                borderRadius: "12px",
                marginTop: "4px",
              }}
            >
              <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-jetbrains-mono)", color: "#00d4ff", letterSpacing: "0.1em", marginBottom: "8px" }}>
                📍 NORTHWEST ARKANSAS
              </div>
              <p style={{ fontSize: "0.84rem", color: "#9499a8", lineHeight: 1.6 }}>
                Based near Walmart HQ, J.B. Hunt, Tyson, and the nation&apos;s fastest-growing
                retail &amp; logistics ecosystem. Deep relationships in the region.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

const highlights = [
  {
    icon: "📈",
    label: "Sales Achievement",
    title: "#1 DSM — 100%+ Quota in 2025",
    sub: "Only manager in the region to hit it",
    color: "#10b981",
  },
  {
    icon: "🤖",
    label: "AI Engineering",
    title: "6 Production AI Tools Built",
    sub: "Cold call grader, roleplay sim, outbound engine & more",
    color: "#00d4ff",
  },
  {
    icon: "🏢",
    label: "Entrepreneurship",
    title: "$200K+ Revenue at 25% Margin",
    sub: "Founded, scaled, and currently selling Shreve Cleaning",
    color: "#8b5cf6",
  },
  {
    icon: "👥",
    label: "Leadership",
    title: "Led 11-Person Sales Team",
    sub: "Coaching, pipeline management, ramp programs",
    color: "#f59e0b",
  },
];
