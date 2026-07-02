"use client";

import { useState } from "react";

const STEPS = [
  {
    n: "01",
    title: "S'inscrire",
    desc: "Remplissez le formulaire d'inscription en quelques minutes.",
  },
  {
    n: "02",
    title: "Rejoindre le groupe WhatsApp",
    desc: "Recevez toutes les informations et échangez avec les autres membres.",
  },
  {
    n: "03",
    title: "Finaliser le paiement",
    desc: "Réglez via MoMo, Moov Money ou le moyen de votre choix.",
  },
  {
    n: "04",
    title: "Accès direct aux ressources",
    desc: "Recevez immédiatement l'accès aux prompts et supports sur Chariow.",
  },
];

const RADIUS = 120;

export default function FormationSteps() {
  const [active, setActive] = useState(0);

  const go = (dir: 1 | -1) => {
    setActive((a) => (a + dir + STEPS.length) % STEPS.length);
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Le parcours, étape par étape
      </h2>

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
        <div className="relative mx-auto h-[280px] w-[280px]">
          <div className="absolute inset-0 rounded-full border border-line" />
          {STEPS.map((step, i) => {
            const baseAngle = i * 90;
            const positionAngle = baseAngle - active * 90;
            const isActive = i === active;
            return (
              <button
                key={step.n}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Étape ${step.n} : ${step.title}`}
                aria-current={isActive}
                className="wheel-dot absolute left-1/2 top-1/2 -ml-6 -mt-6 h-12 w-12"
                style={{
                  transform: `rotate(${positionAngle}deg) translate(${RADIUS}px) rotate(${-positionAngle}deg)`,
                  transitionDuration: "0.6s",
                }}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full border font-mono text-sm transition-colors ${
                    isActive
                      ? "border-indigo bg-indigo text-white"
                      : "border-line bg-white text-ink-soft hover:border-violet"
                  }`}
                >
                  {step.n}
                </span>
              </button>
            );
          })}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-full bg-violet-pale px-3 py-1 font-mono text-xs text-violet">
              étape {STEPS[active].n}
            </span>
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold text-ink">
            {STEPS[active].title}
          </h3>
          <p className="mt-2 max-w-sm font-sans text-sm leading-relaxed text-ink-soft">
            {STEPS[active].desc}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Étape précédente"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line font-sans text-ink transition hover:border-violet"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Étape suivante"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line font-sans text-ink transition hover:border-violet"
            >
              →
            </button>
            <div className="ml-2 flex gap-1.5">
              {STEPS.map((step, i) => (
                <span
                  key={step.n}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    i === active ? "bg-indigo" : "bg-line"
                  }`}
                />
              ))}
            </div>
          </div>
          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-indigo px-6 py-3 font-sans text-sm font-medium text-white transition hover:bg-violet"
          >
            S&apos;inscrire à la formation
          </a>
        </div>
      </div>
    </section>
  );
}
