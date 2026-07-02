const REVIEWS = [
  {
    name: "À compléter",
    role: "Ancien élève",
    quote:
      "Espace réservé — remplace par un vrai retour d'un participant à la formation.",
  },
  {
    name: "À compléter",
    role: "Créatrice de contenu",
    quote:
      "Espace réservé — remplace par un vrai retour d'un participant à la formation.",
  },
  {
    name: "À compléter",
    role: "Vendeur en ligne",
    quote:
      "Espace réservé — remplace par un vrai retour d'un participant à la formation.",
  },
];

export default function FormationReviews() {
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Ce qu&apos;en disent les participants
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="group rounded-xl border border-line bg-bg p-6 transition duration-300 hover:-translate-y-1.5 hover:border-violet hover:shadow-xl hover:shadow-indigo/10"
            >
              <span className="font-display text-3xl text-violet-pale transition group-hover:text-violet">
                &ldquo;
              </span>
              <p className="mt-1 font-sans text-sm leading-relaxed text-ink-soft">
                {r.quote}
              </p>
              <div className="mt-4 font-sans text-sm font-medium text-ink">
                {r.name}
              </div>
              <div className="font-sans text-xs text-ink-soft">{r.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
