import AnimateOnScroll from "./AnimateOnScroll";

const contactItems = [
  {
    label: "Email",
    value: "hgshreve@gmail.com",
    href: "mailto:hgshreve@gmail.com",
    color: "#00d4ff",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hudson-shreve",
    href: "https://www.linkedin.com/in/hudson-shreve/",
    color: "#0a66c2",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/contact900",
    href: "https://github.com/contact900",
    color: "#8b5cf6",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "479-445-3613",
    href: "tel:+14794453613",
    color: "#10b981",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.06 6.06l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "West Fork, AR · NW Arkansas",
    href: null,
    color: "#f59e0b",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px 24px 80px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <AnimateOnScroll>
        <span className="section-label">Contact</span>
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
          Let&apos;s talk.
        </h2>
        <p style={{ color: "#6b7080", marginBottom: "60px", maxWidth: "500px", lineHeight: 1.7 }}>
          I&apos;m exploring Sales Director and BD Director roles at SaaS, AI, logistics,
          and retail tech companies — especially those in or connected to the NW Arkansas ecosystem.
        </p>
      </AnimateOnScroll>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "16px",
          marginBottom: "64px",
        }}
      >
        {contactItems.map((item, i) => (
          <AnimateOnScroll key={item.label} delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5}>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glow-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "20px 24px",
                  textDecoration: "none",
                }}
              >
                <span style={{ color: item.color, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: "0.72rem", color: "#4a4a5a", fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "3px" }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: "0.88rem", color: "#9499a8", fontWeight: 500 }}>
                    {item.value}
                  </div>
                </div>
              </a>
            ) : (
              <div
                className="glow-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "20px 24px",
                }}
              >
                <span style={{ color: item.color, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: "0.72rem", color: "#4a4a5a", fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "3px" }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: "0.88rem", color: "#9499a8", fontWeight: 500 }}>
                    {item.value}
                  </div>
                </div>
              </div>
            )}
          </AnimateOnScroll>
        ))}
      </div>

      {/* CTA banner */}
      <AnimateOnScroll delay={3}>
        <div
          style={{
            padding: "40px 48px",
            background: "linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(139,92,246,0.06) 100%)",
            border: "1px solid rgba(0,212,255,0.15)",
            borderRadius: "16px",
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "1.2rem", color: "#eeeef8", marginBottom: "8px" }}>
              Ready to hire a seller who ships?
            </h3>
            <p style={{ color: "#6b7080", fontSize: "0.875rem", maxWidth: "420px", lineHeight: 1.6 }}>
              I bring quota-carrying results, team leadership, and the ability to
              build the tools that multiply both. Let&apos;s find out if we&apos;re a fit.
            </p>
          </div>
          <a
            href="mailto:hgshreve@gmail.com"
            className="cta-button"
          >
            Send me an email →
          </a>
        </div>
      </AnimateOnScroll>

      {/* Footer */}
      <div
        style={{
          marginTop: "80px",
          paddingTop: "32px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.78rem", color: "#3a3a4a" }}>
          © 2025 Hudson Shreve · hudsonshreve.com
        </span>
        <span style={{ fontSize: "0.78rem", color: "#3a3a4a" }}>
          West Fork, AR · NW Arkansas
        </span>
      </div>
    </section>
  );
}
