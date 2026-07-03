const CATEGORIES = [
  {
    n: "01",
    name: "Photoshoot Élite",
    desc: "Portraits cinématiques, éclairages studio complexes et textures de peau parfaites. Le réalisme absolu, sans appareil photo.",
  },
  {
    n: "02",
    name: "Vidéo Dynamique",
    desc: "Mouvements de caméra fluides, animations immersives et scripts visuels optimisés.",
  },
  {
    n: "03",
    name: "Mockups & Branding",
    desc: "Valorisez packagings, t-shirts et concepts de marque dans des décors 3D professionnels.",
  },
  {
    n: "04",
    name: "Templates & Design",
    desc: "Des structures graphiques prêtes à l'emploi pour vos interfaces et réseaux sociaux.",
  },
];

export default function CategoryGrid() {
  return (
    <section id="categories" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Le catalogue, par catégorie
      </h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((c) => (
          <div
            key={c.n}
            className="rounded-xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-violet hover:shadow-xl hover:shadow-indigo/10"
          >
            <span className="font-mono text-xs text-violet">{c.n}</span>
            <h3 className="mt-2 font-display text-lg font-semibold text-ink">
              {c.name}
            </h3>
            <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
