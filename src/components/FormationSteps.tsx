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

export default function FormationSteps() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Le parcours, étape par étape
      </h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
      <a
        href="#"
        className="mt-10 inline-block rounded-full bg-indigo px-6 py-3 font-sans text-sm font-medium text-white transition hover:bg-violet"
      >
        S&apos;inscrire à la formation
      </a>
    </section>
  );
}
