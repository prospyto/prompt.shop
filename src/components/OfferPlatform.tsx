const OFFERS = [
  {
    name: "Boutique de Prompts",
    tagline:
      "L'instantanéité pure. Accédez à notre arsenal de prompts certifiés, prêts à déployer.",
    price: "À partir de 1 000 FCFA",
    cta: "Parcourir le catalogue",
    href: "#offres",
  },
  {
    name: "Prompts sur mesure",
    tagline:
      "Votre vision, mon architecture. Je conçois le noyau technique exclusif que votre projet exige.",
    price: "À partir de 1 000 FCFA (selon complexité)",
    cta: "Commander mon architecture",
    href: "#contact",
  },
  {
    name: "Formation IA",
    tagline:
      "Cessez de copier. Maîtrisez la syntaxe, la structure et la logique derrière chaque génération.",
    price: "À partir de 10 000 FCFA",
    cta: "Accéder à la formation",
    href: "#contact",
  },
];

export default function OfferPlatform() {
  return (
    <section id="offres" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="max-w-xl">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Sélectionnez votre levier de performance
        </h2>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {OFFERS.map((offer) => (
          <div
            key={offer.name}
            className="group flex flex-col rounded-xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-indigo hover:shadow-xl hover:shadow-indigo/10"
          >
            <h3 className="font-display text-lg font-semibold text-ink">
              {offer.name}
            </h3>
            <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-ink-soft">
              {offer.tagline}
            </p>
            <p className="mt-6 font-sans text-sm font-semibold text-ink">
              {offer.price}
            </p>
            <a
              href={offer.href}
              className="mt-4 rounded-full bg-indigo px-4 py-2.5 text-center font-sans text-sm font-medium text-white transition group-hover:bg-violet"
            >
              {offer.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
