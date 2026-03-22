// Server component — fetches GitHub repos at build/request time
import AnimateOnScroll from "./AnimateOnScroll";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  homepage: string | null;
  topics: string[];
}

// Descriptions for repos that don't have them on GitHub
const repoDescriptions: Record<string, string> = {
  LifeOS:
    "Multi-agent personal productivity app. LangGraph routing, pgvector RAG memory, OpenAI GPT-4o, Gmail/GCal/Slack integrations. Built with Next.js 14, TypeScript, and Supabase.",
  "SubAgentTree-ShreveCleaning":
    "FastAPI + LangGraph multi-agent system with CEO/Director agent hierarchy and dual-layer memory — short-term checkpoints and long-term pgvector semantic retrieval.",
  "weather-route-visualizer":
    "React/TypeScript dispatcher tool with interactive freight route visualization and AI-generated carrier communications for truckload brokerage ops.",
  "shreve-quality-shield":
    "AI-powered quality assurance platform. Automated inspection workflows and reporting system for the Shreve Cleaning service business.",
  shrevecleaningwebsite:
    "Commercial website for Shreve Cleaning — TypeScript, modern UI, and booking/contact flows for a $200K/yr service business.",
};

const repoHighlights: Record<string, { badge: string; color: string }> = {
  LifeOS: { badge: "Multi-Agent AI", color: "#8b5cf6" },
  "SubAgentTree-ShreveCleaning": { badge: "LangGraph + RAG", color: "#00d4ff" },
  "weather-route-visualizer": { badge: "Freight Tech", color: "#10b981" },
  "shreve-quality-shield": { badge: "Production", color: "#f59e0b" },
};

// The ArcBest AI Sales Stack is featured separately since it's not a single repo
const featuredProject = {
  name: "ArcBest AI Sales Stack",
  description:
    "6 production AI tools built for a 11-person freight sales team: cold call grader, AI roleplay simulator, outbound prospecting engine, lead scraping tool, cold email agent, and inventory tracker. All in production.",
  language: "Python / TypeScript",
  badge: "6 Tools in Production",
  badgeColor: "#00d4ff",
  stars: null,
  url: "https://github.com/contact900",
};

const langColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572a5",
  Go: "#00add8",
  Rust: "#dea584",
};

async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/contact900/repos?sort=updated&per_page=20",
      { next: { revalidate: 3600 } } // revalidate every hour
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function Projects() {
  const repos = await getRepos();
  // Filter to only public, non-fork repos with a name we care about
  const filtered = repos
    .filter((r) => !["contact900"].includes(r.name))
    .slice(0, 5);

  return (
    <section
      id="projects"
      style={{ padding: "120px 24px", maxWidth: "1100px", margin: "0 auto" }}
    >
      <AnimateOnScroll>
        <span className="section-label">AI Projects</span>
        <div className="accent-line" style={{ display: "block", marginTop: "12px", marginBottom: "16px" }} />
        <h2
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: "12px",
            color: "#eeeef8",
          }}
        >
          Built, not just talked about.
        </h2>
        <p style={{ color: "#6b7080", marginBottom: "56px", maxWidth: "520px", fontSize: "0.95rem", lineHeight: 1.7 }}>
          Every tool I reference in a sales conversation, I&apos;ve shipped.
          Here&apos;s the GitHub record.
        </p>
      </AnimateOnScroll>

      {/* Featured: ArcBest Stack */}
      <AnimateOnScroll delay={1}>
        <div
          style={{
            padding: "32px 36px",
            background: "linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(139,92,246,0.06) 100%)",
            border: "1px solid rgba(0,212,255,0.2)",
            borderRadius: "16px",
            marginBottom: "28px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(90deg, #00d4ff, #8b5cf6)",
            }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "6px" }}>
                <h3 style={{ fontWeight: 700, fontSize: "1.15rem", color: "#eeeef8" }}>
                  {featuredProject.name}
                </h3>
                <span
                  style={{
                    padding: "2px 10px",
                    background: "rgba(0,212,255,0.12)",
                    border: "1px solid rgba(0,212,255,0.3)",
                    borderRadius: "100px",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "#00d4ff",
                    fontFamily: "var(--font-jetbrains-mono)",
                  }}
                >
                  {featuredProject.badge}
                </span>
              </div>
            </div>
            <a
              href={featuredProject.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 18px",
                background: "rgba(0,212,255,0.1)",
                border: "1px solid rgba(0,212,255,0.25)",
                borderRadius: "8px",
                color: "#00d4ff",
                fontSize: "0.8rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              View on GitHub →
            </a>
          </div>
          <p style={{ color: "#9499a8", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "680px" }}>
            {featuredProject.description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "20px" }}>
            {["Cold Call Grader", "AI Roleplay Simulator", "Outbound Engine", "Lead Scraper", "Email Agent", "Inventory Tracker"].map((tool) => (
              <span
                key={tool}
                style={{
                  padding: "4px 10px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "6px",
                  fontSize: "0.75rem",
                  color: "#6b7080",
                  fontFamily: "var(--font-jetbrains-mono)",
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      {/* Repo grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {filtered.map((repo, i) => {
          const desc = repo.description || repoDescriptions[repo.name] || "No description.";
          const highlight = repoHighlights[repo.name];

          return (
            <AnimateOnScroll key={repo.id} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "24px",
                  textDecoration: "none",
                  height: "100%",
                  minHeight: "180px",
                }}
              >
                {/* Top row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7080" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    <span style={{ fontWeight: 700, color: "#eeeef8", fontSize: "0.95rem" }}>
                      {repo.name}
                    </span>
                  </div>
                  {highlight && (
                    <span
                      style={{
                        padding: "2px 8px",
                        background: `${highlight.color}18`,
                        border: `1px solid ${highlight.color}40`,
                        borderRadius: "100px",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        color: highlight.color,
                        fontFamily: "var(--font-jetbrains-mono)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {highlight.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p style={{ color: "#6b7080", fontSize: "0.84rem", lineHeight: 1.65, flex: 1, marginBottom: "16px" }}>
                  {desc}
                </p>

                {/* Footer */}
                <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                  {repo.language && (
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: langColors[repo.language] || "#888",
                          display: "inline-block",
                        }}
                      />
                      <span style={{ fontSize: "0.78rem", color: "#6b7080", fontFamily: "var(--font-jetbrains-mono)" }}>
                        {repo.language}
                      </span>
                    </div>
                  )}
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="#6b7080">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span style={{ fontSize: "0.78rem", color: "#6b7080", fontFamily: "var(--font-jetbrains-mono)" }}>
                      {repo.stargazers_count}
                    </span>
                  </div>
                  {repo.homepage && (
                    <span style={{ fontSize: "0.75rem", color: "#00d4ff", marginLeft: "auto" }}>
                      Live ↗
                    </span>
                  )}
                </div>
              </a>
            </AnimateOnScroll>
          );
        })}
      </div>

      {/* View all link */}
      <AnimateOnScroll delay={3}>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a
            href="https://github.com/contact900"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-link"
          >
            View all repositories on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
