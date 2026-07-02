const PACKS = [
  {
    name: "Pack Photo shoot",
    count: "20 prompts",
    price: "3 500 FCFA",
    unit: "soit 175 FCFA / prompt",
    desc: "Portraits studio, packshots produit, lumière maîtrisée.",
    featured: false,
  },
  {
    name: "Pack Vidéo",
    count: "16 prompts",
    price: "3 000 FCFA",
    unit: "soit ~190 FCFA / prompt",
    desc: "Plans produits, boucles courtes, mouvements de caméra.",
    featured: false,
  },
  {
    name: "Pack Mockup",
    count: "20 prompts",
    price: "3 500 FCFA",
    unit: "soit 175 FCFA / prompt",
    desc: "Vêtements, packaging, écrans — sans shooting.",
    featured: false,
  },
  {
    name: "Pack complet",
    count: "78+ prompts, toutes catégories",
    price: "9 900 FCFA",
    unit: "au lieu de 13 000 FCFA à l'unité",
    desc: "Photo, vidéo, mockup, template — tout, mis à jour à vie.",
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="max-w-xl">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Ce que tu achètes, exactement
        </h2>
        <p className="mt-3 font-sans text-ink-soft">
          Des packs par catégorie, ou tout en un. Paiement unique, prompts
          livrés immédiatement.
        </p>
        <p className="mt-2 font-mono text-xs text-ink-soft">
          prix indicatifs — à ajuster avant mise en ligne
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PACKS.map((pack) => (
          <div
            key={pack.name}
            className={`flex flex-col rounded-xl border p-6 transition hover:-translate-y-1 ${
              pack.featured
                ? "border-indigo bg-ink text-white"
                : "border-line bg-white text-ink hover:border-violet"
            }`}
          >
            {pack.featured && (
              <span className="mb-3 inline-block w-fit rounded-full bg-violet px-3 py-1 font-mono text-xs text-white">
                le plus complet
              </span>
            )}
            <h3 className="font-display text-lg font-semibold">
              {pack.name}
            </h3>
            <p
              className={`mt-1 font-mono text-xs ${
                pack.featured ? "text-violet-pale" : "text-ink-soft"
              }`}
            >
              {pack.count}
            </p>
            <p
              className={`mt-4 text-sm leading-relaxed ${
                pack.featured ? "text-white/80" : "text-ink-soft"
              }`}
            >
              {pack.desc}
            </p>
            <div className="mt-6 flex-1" />
            <div
              className={`text-2xl font-display font-semibold ${
                pack.featured ? "text-white" : "text-indigo"
              }`}
            >
              {pack.price}
            </div>
            <p
              className={`mt-1 font-mono text-xs ${
                pack.featured ? "text-violet-pale" : "text-ink-soft"
              }`}
            >
              {pack.unit}
            </p>
            <a
              href="#"
              className={`mt-5 rounded-full px-4 py-2.5 text-center font-sans text-sm font-medium transition ${
                pack.featured
                  ? "bg-white text-ink hover:bg-violet-pale"
                  : "bg-indigo text-white hover:bg-violet"
              }`}
            >
              Acheter ce pack
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
