const FAQS = [
  {
    q: "Est-ce que le prompt fonctionne à tous les coups ?",
    a: "Chaque prompt est testé avant publication. Le résultat peut varier légèrement selon l'outil IA utilisé, mais la structure et le rendu annoncés restent fiables.",
  },
  {
    q: "Sur quels outils IA je peux utiliser ces prompts ?",
    a: "La plupart fonctionnent sur les générateurs d'image et de vidéo courants (Midjourney, ChatGPT/DALL·E, Runway...). Chaque prompt précise l'outil recommandé.",
  },
  {
    q: "Comment je reçois mes prompts après achat ?",
    a: "Après paiement, tu reçois immédiatement le fichier contenant les prompts achetés, prêts à copier-coller.",
  },
  {
    q: "Puis-je demander un prompt sur mesure ?",
    a: "Oui, contacte-nous avec ta demande précise et on te propose un prompt adapté à ton besoin.",
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
