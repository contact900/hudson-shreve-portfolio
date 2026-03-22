"use client";

import { useEffect, useRef, ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left";
}

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseClass = direction === "left" ? "reveal-left" : "reveal";
  const delayClass = delay > 0 ? `delay-${delay}` : "";

  return (
    <div ref={ref} className={`${baseClass} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
