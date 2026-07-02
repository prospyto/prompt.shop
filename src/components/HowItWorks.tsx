const STEPS = [
  {
    n: "01",
    title: "Choisis un prompt",
    desc: "Parcours les catégories et trouve le prompt qui correspond au résultat que tu veux.",
  },
  {
    n: "02",
    title: "Copie-le dans ton outil IA",
    desc: "Colle-le tel quel dans Midjourney, ChatGPT, Runway ou l'outil de ton choix.",
  },
  {
    n: "03",
    title: "Récupère ton résultat",
    desc: "Photo, vidéo, mockup ou template — prêt à utiliser, sans retouche de prompt.",
  },
];

export default function HowItWorks() {
  return (
    <section id="comment" className="border-y border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Comment ça marche
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.n}>
              <span className="font-mono text-sm text-violet">{step.n}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
