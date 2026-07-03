import PurchaseWheel from "./PurchaseWheel";

const INCLUDED = [
  "Le fichier de prompts copiables-collables immédiatement",
  "Les guides de variations pour adapter les prompts à vos sujets",
  "L'accès aux mises à jour gratuites de la bibliothèque",
];

export default function PricingOffer() {
  return (
    <section id="offre" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-12">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Accédez à la boîte à outils des créateurs
        </h2>
        <p className="mt-3 max-w-lg font-sans text-ink-soft">
          Ne payez pas des milliers de francs pour des formations
          interminables. Achetez la précision directement à la source.
        </p>

        <div className="mt-6 flex items-baseline gap-2">
          <span className="font-display text-3xl font-semibold text-indigo">
            500 FCFA
          </span>
          <span className="font-sans text-sm text-ink-soft">/ le pack</span>
        </div>

        <ul className="mt-6 space-y-2">
          {INCLUDED.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
              <span className="font-sans text-sm text-ink-soft">{item}</span>
            </li>
          ))}
        </ul>

        <a
          href="#categories"
          className="mt-7 inline-block rounded-full bg-indigo px-7 py-3.5 font-sans text-sm font-medium text-white transition hover:bg-violet"
        >
          Acheter et télécharger maintenant
        </a>

        <div className="mt-14 border-t border-line pt-10">
          <h3 className="font-display text-lg font-semibold text-ink">
            Comment ça marche
          </h3>
          <div className="mt-6">
            <PurchaseWheel />
          </div>
        </div>
      </div>
    </section>
  );
}
