import AnimateOnScroll from "./AnimateOnScroll";

const jobs = [
  {
    company: "ArcBest / MOLO Solutions",
    role: "District Sales Manager",
    prevRole: "Business Development Representative",
    period: "2023 – Present",
    type: "Freight Logistics / Truckload Brokerage",
    color: "#00d4ff",
    accent: "rgba(0,212,255,0.1)",
    border: "rgba(0,212,255,0.2)",
    tag: "Current",
    bullets: [
      "Only DSM in the region to exceed 100% of quota in 2025",
      "Lead and develop a team of 11 sellers across full sales cycle",
      "Built 6 AI-powered sales tools from scratch — cold call grader, AI roleplay simulator, outbound prospecting engine, lead scraping tool, cold email agent, inventory tracker",
      "Promoted from BDR to District Sales Manager in 12 months",
      "Manage pipeline strategy, rep coaching, and territory planning across the freight logistics vertical",
    ],
  },
  {
    company: "Shreve Cleaning",
    role: "Founder & CEO",
    prevRole: null,
    period: "2020 – Present",
    type: "Entrepreneurship / Service Business",
    color: "#8b5cf6",
    accent: "rgba(139,92,246,0.1)",
    border: "rgba(139,92,246,0.2)",
    tag: "In Sale",
    bullets: [
      "Built from zero to $200K+ annual revenue at 25% net margins",
      "40%+ year-over-year growth while holding a full-time corporate role",
      "Regional Quality Business Award 2024 — 95%+ customer satisfaction",
      "Leading the full business sale process: valuation, buyer qualification, and ownership transition",
      "Operated all aspects — operations, hiring, finance, marketing, and client management",
    ],
  },
  {
    company: "Field Agent",
    role: "Outreach Manager → Business Development Representative",
    prevRole: null,
    period: "2017 – 2022",
    type: "SaaS / Data Insights & Marketing",
    color: "#10b981",
    accent: "rgba(16,185,129,0.1)",
    border: "rgba(16,185,129,0.2)",
    tag: null,
    bullets: [
      "Managed ~$100K/month book of business with full sales cycle ownership",
      "Built go-to-market and outreach frameworks adopted team-wide",
      "Promoted from Outreach Manager to BDR based on quota attainment",
      "Prospected, pitched, and closed data-insights deals across CPG, retail, and restaurant verticals",
      "Developed structured outreach playbooks that became the team standard",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "120px 24px",
        background: "linear-gradient(180deg, #0e0e1c 0%, #08080f 100%)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <AnimateOnScroll>
          <span className="section-label">Experience</span>
          <div className="accent-line" style={{ display: "block", marginTop: "12px", marginBottom: "16px" }} />
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: "64px",
              color: "#eeeef8",
            }}
          >
            Where I&apos;ve been, what I&apos;ve built.
          </h2>
        </AnimateOnScroll>

        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              bottom: "0",
              width: "1px",
              background: "linear-gradient(180deg, rgba(0,212,255,0.4) 0%, rgba(139,92,246,0.4) 50%, rgba(16,185,129,0.2) 100%)",
            }}
            className="hidden md:block"
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {jobs.map((job, i) => (
              <AnimateOnScroll key={job.company} delay={(i + 1) as 1 | 2 | 3}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "0",
                  }}
                  className="md:pl-10"
                >
                  {/* Timeline dot */}
                  <div
                    className="hidden md:block"
                    style={{
                      position: "absolute",
                      left: "-5px",
                      width: "11px",
                      height: "11px",
                      borderRadius: "50%",
                      background: job.color,
                      boxShadow: `0 0 12px ${job.color}`,
                      marginTop: "22px",
                    }}
                  />

                  <div
                    className="glow-card"
                    style={{ padding: "28px 32px" }}
                  >
                    {/* Header */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "flex-start", marginBottom: "20px" }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "6px" }}>
                          <h3
                            style={{
                              fontSize: "1.2rem",
                              fontWeight: 700,
                              color: "#eeeef8",
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {job.company}
                          </h3>
                          {job.tag && (
                            <span
                              style={{
                                padding: "2px 10px",
                                background: job.accent,
                                border: `1px solid ${job.border}`,
                                borderRadius: "100px",
                                fontSize: "0.7rem",
                                fontWeight: 600,
                                color: job.color,
                                fontFamily: "var(--font-jetbrains-mono)",
                                letterSpacing: "0.05em",
                              }}
                            >
                              {job.tag}
                            </span>
                          )}
                        </div>
                        <div style={{ color: job.color, fontWeight: 600, fontSize: "0.95rem", marginBottom: "2px" }}>
                          {job.role}
                        </div>
                        {job.prevRole && (
                          <div style={{ color: "#6b7080", fontSize: "0.82rem" }}>
                            prev: {job.prevRole}
                          </div>
                        )}
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div
                          style={{
                            fontFamily: "var(--font-jetbrains-mono)",
                            fontSize: "0.78rem",
                            color: "#6b7080",
                            letterSpacing: "0.05em",
                            marginBottom: "4px",
                          }}
                        >
                          {job.period}
                        </div>
                        <div style={{ fontSize: "0.78rem", color: "#4a4a5a" }}>
                          {job.type}
                        </div>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                      {job.bullets.map((bullet, j) => (
                        <li key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                          <span
                            style={{
                              width: "5px",
                              height: "5px",
                              borderRadius: "50%",
                              background: job.color,
                              marginTop: "8px",
                              flexShrink: 0,
                            }}
                          />
                          <span style={{ color: "#9499a8", fontSize: "0.9rem", lineHeight: 1.65 }}>
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
