"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    const particles: { x: number; y: number; vx: number; vy: number; alpha: number; size: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Spawn particles
    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
        size: Math.random() * 1.5 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(160deg, #08080f 0%, #0e0820 50%, #08080f 100%)",
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(ellipse, rgba(0,212,255,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "120px 24px 80px",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        {/* Status badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 14px",
            background: "rgba(16, 185, 129, 0.08)",
            border: "1px solid rgba(16, 185, 129, 0.2)",
            borderRadius: "100px",
            marginBottom: "32px",
            animation: "fadeIn 0.6s ease",
          }}
        >
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10b981", display: "inline-block", animation: "pulse 2s infinite" }} />
          <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.72rem", color: "#10b981", letterSpacing: "0.08em" }}>
            Open to new opportunities
          </span>
        </div>

        {/* Main headline */}
        <h1
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            marginBottom: "24px",
            color: "#eeeef8",
          }}
        >
          Hudson Shreve
          <br />
          <span className="gradient-text">
            Sales Leader.
          </span>
          <br />
          <span style={{ color: "#eeeef8" }}>AI Builder.</span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
            color: "#9499a8",
            maxWidth: "600px",
            marginBottom: "48px",
            lineHeight: 1.7,
          }}
        >
          8 years across SaaS, freight logistics, and entrepreneurship.
          The only District Sales Manager in my region to exceed{" "}
          <span style={{ color: "#eeeef8", fontWeight: 600 }}>100% of quota in 2025</span>
          {" "}— while building{" "}
          <span style={{ color: "#00d4ff", fontWeight: 600 }}>6 production AI tools</span>
          {" "}from scratch.
        </p>

        {/* Stat row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "32px",
            marginBottom: "56px",
          }}
        >
          {[
            { value: "$200K+", label: "Business Revenue" },
            { value: "100%+", label: "Quota Attained 2025" },
            { value: "6", label: "AI Tools Built" },
            { value: "11", label: "Reps Led" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: "#00d4ff",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#6b7080", letterSpacing: "0.05em" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
          <a
            href="https://www.linkedin.com/in/hudson-shreve/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 28px",
              background: "linear-gradient(135deg, #00d4ff, #0099cc)",
              borderRadius: "10px",
              color: "#08080f",
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "opacity 0.2s, transform 0.2s",
              boxShadow: "0 4px 24px rgba(0,212,255,0.25)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
          >
            <LinkedInIcon />
            LinkedIn
          </a>

          <a
            href="https://github.com/contact900"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 28px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "10px",
              color: "#eeeef8",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "background 0.2s, border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.09)"; el.style.borderColor = "rgba(255,255,255,0.22)"; el.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.05)"; el.style.borderColor = "rgba(255,255,255,0.12)"; el.style.transform = "translateY(0)"; }}
          >
            <GitHubIcon />
            GitHub
          </a>

          <a
            href="mailto:hgshreve@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 28px",
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.3)",
              borderRadius: "10px",
              color: "#a78bfa",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "background 0.2s, border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(139,92,246,0.18)"; el.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(139,92,246,0.1)"; el.style.transform = "translateY(0)"; }}
          >
            Email me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          opacity: 0.4,
          animation: "bounce 2s infinite",
        }}
      >
        <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.65rem", color: "#6b7080", letterSpacing: "0.1em" }}>SCROLL</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7080" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes bounce { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(6px); } }
      `}</style>
    </section>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}
