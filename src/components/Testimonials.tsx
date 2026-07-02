const TESTIMONIALS = [
  {
    name: "À compléter",
    role: "Créatrice de contenu",
    quote:
      "Espace réservé — remplace par un vrai retour client dès que tu en as un.",
  },
  {
    name: "À compléter",
    role: "Vendeur en ligne",
    quote:
      "Espace réservé — remplace par un vrai retour client dès que tu en as un.",
  },
];

export default function Testimonials() {
  return (
    <section id="avis" className="border-y border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Ce qu&apos;en disent les premiers utilisateurs
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="rounded-xl border border-dashed border-line bg-bg p-6"
            >
              <p className="font-sans text-sm leading-relaxed text-ink-soft">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 font-sans text-sm font-medium text-ink">
                {t.name}
              </div>
              <div className="font-sans text-xs text-ink-soft">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
