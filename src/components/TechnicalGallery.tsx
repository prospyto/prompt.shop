const EXAMPLES = [
  {
    category: "Photoshoot Mode Studio",
    config: "Focale verrouillée, exposition maîtrisée, colorimétrie exacte, rendu de peau réaliste.",
  },
  {
    category: "Mockup Packaging",
    config: "Fond studio neutre, ombres douces, reflets contrôlés.",
  },
  {
    category: "Vidéo Produit",
    config: "Rotation lente, éclairage cinématique, boucle fluide.",
  },
];

export default function TechnicalGallery() {
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="max-w-lg font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Des réglages précis pour des résultats prévisibles
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {EXAMPLES.map((ex) => (
            <div key={ex.category}>
              <div
                className="aspect-square w-full rounded-xl"
                style={{
                  background:
                    "linear-gradient(135deg, #310CEB22 0%, #690CEB22 100%)",
                }}
              >
                <div className="flex h-full items-center justify-center font-mono text-xs text-ink-soft">
                  visuel à insérer
                </div>
              </div>
              <p className="mt-3 font-sans text-sm font-semibold text-ink">
                {ex.category}
              </p>
              <p className="mt-1 font-mono text-xs leading-relaxed text-ink-soft">
                {ex.config}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
