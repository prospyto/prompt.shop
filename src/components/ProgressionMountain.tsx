"use client";

import { useEffect, useRef, useState } from "react";

const MILESTONES = [
  { threshold: 0.08, x: 60, y: 260, label: "Je ne maîtrise rien" },
  { threshold: 0.48, x: 400, y: 150, label: "Je commence à générer de la qualité" },
  { threshold: 0.88, x: 740, y: 50, label: "Je vends mes créations" },
];

const PATH_D =
  "M40,270 C160,270 160,190 280,190 C360,190 360,150 400,150 C500,150 520,60 620,60 C680,60 700,40 760,40";

export default function ProgressionMountain() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh;
      const covered = vh - rect.top;
      const p = Math.min(1, Math.max(0, covered / total));
      setProgress(p);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="border-y border-line bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <h2 className="text-center font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Votre progression avec prompt.shop
        </h2>

        <div className="relative mt-10">
          <svg viewBox="0 0 800 300" className="w-full" aria-hidden="true">
            <path
              d={PATH_D}
              fill="none"
              stroke="var(--line)"
              strokeWidth={2}
            />
            <path
              ref={pathRef}
              d={PATH_D}
              fill="none"
              stroke="var(--indigo)"
              strokeWidth={3}
              strokeLinecap="round"
              style={{
                strokeDasharray: pathLength,
                strokeDashoffset: pathLength * (1 - progress),
              }}
            />
          </svg>

          {MILESTONES.map((m) => {
            const visible = progress >= m.threshold;
            return (
              <div
                key={m.label}
                className={`milestone-card absolute w-40 -translate-x-1/2 -translate-y-full rounded-lg border border-line bg-white px-3 py-2 text-center font-sans text-xs text-ink shadow-sm ${
                  visible ? "is-visible" : ""
                }`}
                style={{
                  left: `${(m.x / 800) * 100}%`,
                  top: `${(m.y / 300) * 100}%`,
                }}
              >
                {m.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
