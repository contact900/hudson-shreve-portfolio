import AnimateOnScroll from "./AnimateOnScroll";

const categories = [
  {
    label: "Sales Leadership",
    color: "#10b981",
    icon: "📈",
    skills: [
      "Quota Attainment",
      "Team Management",
      "Rep Coaching & Development",
      "Pipeline Management",
      "Consultative Selling",
      "Business Development",
      "Strategic Partnerships",
      "Territory Planning",
      "Sales Process Design",
      "Objection Handling",
    ],
  },
  {
    label: "AI & Engineering",
    color: "#00d4ff",
    icon: "🤖",
    skills: [
      "LangGraph",
      "LangChain",
      "OpenAI API",
      "pgvector / RAG",
      "FastAPI",
      "Next.js 14",
      "TypeScript",
      "Python",
      "Supabase",
      "Vercel",
      "Sales Automation",
      "Prompt Engineering",
    ],
  },
  {
    label: "Operations & Strategy",
    color: "#8b5cf6",
    icon: "⚙️",
    skills: [
      "P&L Ownership",
      "Go-to-Market Strategy",
      "Process Design",
      "Business Valuation & Exit",
      "Lean Systems",
      "Outreach Frameworks",
      "Team Building",
      "Vendor Management",
    ],
  },
  {
    label: "Domain Expertise",
    color: "#f59e0b",
    icon: "🎯",
    skills: [
      "Truckload Brokerage",
      "Freight Logistics",
      "SaaS Sales",
      "Data Insights",
      "Marketing Technology",
      "Retail / CPG",
      "Service Business",
      "Northwest Arkansas Ecosystem",
    ],
  },
  {
    label: "Tools & Platforms",
    color: "#f43f5e",
    icon: "🛠",
    skills: [
      "HubSpot",
      "Salesforce",
      "Google Workspace",
      "Microsoft 365",
      "Slack",
      "Notion",
      "LinkedIn Sales Navigator",
      "Apollo.io",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "120px 24px",
        background: "linear-gradient(180deg, #08080f 0%, #0e0e1c 100%)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <AnimateOnScroll>
          <span className="section-label">Skills</span>
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
            The full stack — business and code.
          </h2>
        </AnimateOnScroll>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
            gap: "24px",
          }}
        >
          {categories.map((cat, i) => (
            <AnimateOnScroll key={cat.label} delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5}>
              <div
                className="glow-card"
                style={{ padding: "28px", height: "100%" }}
              >
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                  <span style={{ fontSize: "1.2rem" }}>{cat.icon}</span>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: cat.color,
                      fontFamily: "var(--font-jetbrains-mono)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {cat.label}
                  </span>
                </div>

                {/* Skill tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag"
                      style={{
                        background: `${cat.color}0d`,
                        border: `1px solid ${cat.color}28`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
