const STATS = [
  { value: "500 FCFA", label: "prix de départ" },
  { value: "78+", label: "prompts testés" },
  { value: "4", label: "catégories" },
  { value: "100%", label: "prêts à copier-coller" },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        prompt.shop en chiffres
      </h2>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-line bg-white px-5 py-6 text-center"
          >
            <div className="font-display text-2xl font-semibold text-indigo">
              {s.value}
            </div>
            <div className="mt-1 font-sans text-xs text-ink-soft">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
