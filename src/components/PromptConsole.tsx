"use client";

import { useEffect, useState } from "react";

type Sample = {
  category: string;
  prompt: string;
};

const SAMPLES: Sample[] = [
  {
    category: "photo shoot",
    prompt:
      "portrait studio, lumière douce 45°, fond gris neutre, blazer beige, regard confiant, 85mm f/1.8",
  },
  {
    category: "vidéo",
    prompt:
      "plan large produit qui tourne lentement sur socle noir, éclairage cinématique, 4s, boucle",
  },
  {
    category: "mockup",
    prompt:
      "t-shirt blanc sur mannequin invisible, fond studio F0EFE9, ombre douce, vue face",
  },
  {
    category: "template",
    prompt:
      "post carrousel Instagram, grille 3 colonnes, typographie bold, accents violet",
  },
];

export default function PromptConsole() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "erasing">(
    "typing"
  );

  useEffect(() => {
    const current = SAMPLES[index].prompt;
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (typed.length < current.length) {
        timeout = setTimeout(
          () => setTyped(current.slice(0, typed.length + 1)),
          22
        );
      } else {
        timeout = setTimeout(() => setPhase("holding"), 1400);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("erasing"), 900);
    } else {
      if (typed.length > 0) {
        timeout = setTimeout(
          () => setTyped(typed.slice(0, -1)),
          10
        );
      } else {
        timeout = setTimeout(() => {
          setIndex((i) => (i + 1) % SAMPLES.length);
          setPhase("typing");
        }, 200);
      }
    }
    return () => clearTimeout(timeout);
  }, [typed, phase, index]);

  return (
    <div className="w-full rounded-xl border border-line bg-white shadow-[0_1px_0_rgba(18,11,46,0.04)]">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-2 font-mono text-xs text-ink-soft">
          prompt · {SAMPLES[index].category}
        </span>
      </div>
      <div className="px-5 py-6 sm:px-6 sm:py-8">
        <p className="font-mono text-sm leading-relaxed text-ink sm:text-base">
          {typed}
          <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-indigo align-middle" />
        </p>
      </div>
      <div className="flex items-center justify-between border-t border-line px-5 py-3">
        <span className="font-mono text-xs text-ink-soft">résultat →</span>
        <span className="rounded-full bg-violet-pale px-3 py-1 font-mono text-xs text-violet">
          généré en quelques secondes
        </span>
      </div>
    </div>
  );
}
