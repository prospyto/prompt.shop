const FAQS = [
  {
    q: "Sur quels outils fonctionnent vos prompts ?",
    a: "Nos prompts sont optimisés pour les leaders du marché (Midjourney, Stable Diffusion, DALL·E, Runway, Sora selon les packs). Chaque pack précise l'outil recommandé.",
  },
  {
    q: "Comment se déroule la livraison après le paiement ?",
    a: "C'est instantané. Dès la validation de votre paiement, vous recevez un accès direct à vos fichiers.",
  },
  {
    q: "Puis-je utiliser les images générées pour un usage commercial ?",
    a: "Oui, absolument. Les visuels que vous générez avec nos prompts vous appartiennent à 100% et peuvent être vendus ou utilisés pour vos clients.",
  },
  {
    q: "Puis-je demander un prompt sur mesure ?",
    a: "Oui, contactez-nous avec votre demande précise et nous vous proposons un prompt adapté à votre besoin.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Questions fréquentes
      </h2>
      <div className="mt-8 divide-y divide-line rounded-xl border border-line bg-white">
        {FAQS.map((item) => (
          <details key={item.q} className="group px-6 py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between font-sans text-sm font-medium text-ink">
              {item.q}
              <span className="ml-4 shrink-0 font-mono text-ink-soft transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 font-sans text-sm leading-relaxed text-ink-soft">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
