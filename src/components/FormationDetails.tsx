const DOMAINS = [
  "Photo shoot",
  "Vidéo",
  "Mockup",
  "Template",
  "Réseaux sociaux",
  "E-commerce",
];

export default function FormationDetails() {
  return (
    <section id="formation" className="border-y border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <span className="inline-block rounded-full bg-violet-pale px-3 py-1 font-mono text-xs text-violet">
          formation
        </span>
        <h2 className="mt-4 max-w-xl font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Apprenez à écrire des prompts qui cartonnent
        </h2>
        <p className="mt-4 max-w-xl font-sans text-ink-soft">
          Cessez de copier des prompts tout faits. Cette formation vous
          apprend la syntaxe, la structure et la logique derrière chaque
          génération — pour créer vos propres prompts, adaptés à vos besoins,
          sans dépendre de personne.
        </p>

        <p className="mt-8 font-mono text-xs uppercase tracking-wide text-ink-soft">
          Domaines d&apos;usage couverts
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {DOMAINS.map((d) => (
            <span
              key={d}
              className="rounded-full border border-line bg-bg px-3 py-1.5 font-sans text-sm text-ink"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
