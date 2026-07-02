const POINTS = [
  {
    n: "01",
    title: "Testé avant publication",
    desc: "Chaque prompt est généré et vérifié avant d'être mis en vente. Pas de promesse vide.",
  },
  {
    n: "02",
    title: "Livraison immédiate",
    desc: "Paiement confirmé, prompts envoyés dans la minute. Aucune attente.",
  },
  {
    n: "03",
    title: "Paiement sécurisé",
    desc: "Transactions traitées via des moyens de paiement mobile reconnus (MoMo, Moov Money).",
  },
];

export default function Trust() {
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="max-w-lg font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Chaque prompt est testé et validé
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {POINTS.map((p) => (
            <div key={p.n}>
              <span className="font-mono text-sm text-violet">{p.n}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                {p.title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
