const CATEGORIES = [
  {
    name: "Photo shoot",
    desc: "Portraits studio, packshots produit, lumière et pose maîtrisées.",
    example: "portrait studio, lumière douce 45°, fond neutre…",
    count: "24 prompts",
  },
  {
    name: "Vidéo",
    desc: "Plans produits, boucles courtes, mouvements de caméra prêts à l'emploi.",
    example: "plan large produit, rotation lente, 4s, boucle…",
    count: "16 prompts",
  },
  {
    name: "Mockup",
    desc: "Vêtements, packaging, écrans — présente tes créations sans shooting.",
    example: "t-shirt sur mannequin invisible, fond studio…",
    count: "20 prompts",
  },
  {
    name: "Template",
    desc: "Carrousels, posts, bannières — des structures visuelles réutilisables.",
    example: "post carrousel, grille 3 colonnes, bold…",
    count: "18 prompts",
  },
];

export default function Categories() {
  return (
    <section id="categories" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="max-w-xl">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Quatre catégories, un seul objectif : un résultat qui marche
        </h2>
        <p className="mt-3 font-sans text-ink-soft">
          Chaque prompt est testé avant publication. Tu copies, tu colles, tu
          obtiens ce qui est annoncé.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.name}
            className="rounded-xl border border-line bg-white p-6 transition hover:border-violet"
          >
            <div className="flex items-start justify-between">
              <h3 className="font-display text-lg font-semibold text-ink">
                {cat.name}
              </h3>
              <span className="rounded-full bg-violet-pale px-3 py-1 font-mono text-xs text-violet">
                {cat.count}
              </span>
            </div>
            <p className="mt-2 font-sans text-sm text-ink-soft">{cat.desc}</p>
            <p className="mt-4 truncate rounded-lg bg-bg px-3 py-2 font-mono text-xs text-ink-soft">
              {cat.example}
            </p>
            <a
              href="#"
              className="mt-4 inline-block font-sans text-sm font-medium text-indigo hover:text-violet"
            >
              Voir les prompts →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
