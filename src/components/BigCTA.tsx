"use client";

import { useEffect, useRef, useState } from "react";

const REASONS = [
  "Prompts sur mesure adaptés à votre marque et votre univers visuel",
  "Livraison rapide, révisions incluses jusqu'à validation",
  "Accompagnement direct — pas de bot, pas de formulaire générique",
  "Formation possible pour devenir autonome sur la durée",
];

export default function BigCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => setPulse(true), 2000);
          observer.disconnect();
          return () => clearTimeout(t);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div
        ref={ref}
        className="grid gap-10 rounded-2xl bg-ink px-6 py-12 text-white sm:px-12 sm:py-16 md:grid-cols-2 md:items-center"
      >
        <div>
          <span className="inline-block rounded-full bg-violet px-3 py-1 font-mono text-xs">
            sur mesure
          </span>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
            Une vision complexe ?
            <br />
            Discutons de votre architecture de prompt.
          </h2>
          <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-white/70">
            Ne laissez pas votre projet stagner par manque de précision. Une
            structure complexe demande une ingénierie dédiée.
          </p>
          <a
            href="mailto:contact@prompt.shop"
            className={`mt-7 inline-block rounded-full bg-white px-7 py-3.5 font-sans text-sm font-medium text-ink transition hover:bg-violet-pale ${
              pulse ? "pulse-cta" : ""
            }`}
          >
            Contacter un expert
          </a>
        </div>
        <ul className="space-y-4">
          {REASONS.map((r) => (
            <li key={r} className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
              <span className="font-sans text-sm leading-relaxed text-white/85">
                {r}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
