const UPCOMING = [
  {
    title: "Nouvelles catégories",
    desc: "Prompts pour l'audio, l'animation 3D et les avatars IA, en préparation.",
  },
  {
    title: "Abonnement mensuel",
    desc: "Un accès illimité à tout le catalogue, mis à jour chaque mois.",
  },
  {
    title: "Formation avancée",
    desc: "Un module dédié à la construction de vos propres prompts, de A à Z.",
  },
];

export default function Roadmap() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Ce qui arrive très bientôt
      </h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {UPCOMING.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-dashed border-line bg-white p-6"
          >
            <span className="rounded-full bg-violet-pale px-3 py-1 font-mono text-xs text-violet">
              bientôt
            </span>
            <h3 className="mt-3 font-display text-lg font-semibold text-ink">
              {item.title}
            </h3>
            <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
