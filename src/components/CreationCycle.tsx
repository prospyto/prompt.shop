"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  { label: "Prompting", desc: "La précision du texte." },
  { label: "Génération", desc: "Le calcul de l'IA." },
  { label: "Rendu", desc: "La qualité HD." },
  { label: "Vente", desc: "Le retour sur investissement." },
];

const POSITIONS = [
  { top: "0%", left: "50%", translate: "-50%,-50%" },
  { top: "50%", left: "100%", translate: "-50%,-50%" },
  { top: "100%", left: "50%", translate: "-50%,-50%" },
  { top: "50%", left: "0%", translate: "-50%,-50%" },
];

export default function CreationCycle() {
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) {
        setActive((a) => (a + 1) % STEPS.length);
      }
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-24">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Le cycle de création
      </h2>

      <div
        className="relative mx-auto mt-10 h-[240px] w-[240px] sm:h-[280px] sm:w-[280px]"
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
      >
        <div className="creation-ring absolute inset-0 rounded-full border-2 border-dashed border-violet-pale" />
        <div className="absolute inset-4 rounded-full border border-line" />

        {STEPS.map((step, i) => (
          <button
            key={step.label}
            type="button"
            onClick={() => setActive(i)}
            aria-current={i === active}
            className="absolute h-3 w-3 rounded-full transition-colors"
            style={{
              top: POSITIONS[i].top,
              left: POSITIONS[i].left,
              transform: `translate(${POSITIONS[i].translate})`,
              backgroundColor: i === active ? "#310CEB" : "#DEDAD1",
            }}
            aria-label={step.label}
          />
        ))}

        <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
          <span
            key={active}
            className="cycle-fade font-display text-lg font-semibold text-ink sm:text-xl"
          >
            {STEPS[active].label}
          </span>
          <span
            key={`${active}-desc`}
            className="cycle-fade mt-1 font-sans text-xs text-ink-soft sm:text-sm"
          >
            {STEPS[active].desc}
          </span>
        </div>
      </div>

      <p className="mt-6 font-mono text-xs text-ink-soft">
        survolez pour mettre en pause
      </p>
    </section>
  );
}
