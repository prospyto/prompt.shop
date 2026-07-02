import CountUp from "./CountUp";

const STATS = [
  { value: <>500<span className="font-mono text-lg"> FCFA</span></>, label: "prix de départ", isCount: false },
  { value: <><CountUp to={78} suffix="+" /></>, label: "prompts testés", isCount: true },
  { value: <><CountUp to={4} /></>, label: "catégories", isCount: true },
  { value: <><CountUp to={100} suffix="%" /></>, label: "prêts à copier-coller", isCount: true },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        prompt.shop en chiffres
      </h2>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={i}
            className="rounded-xl border border-line bg-white px-5 py-6 text-center transition hover:-translate-y-1 hover:border-violet"
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
