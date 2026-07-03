export default function ProblemSolution() {
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Pourquoi la plupart des créateurs échouent à obtenir ce qu&apos;ils
          veulent de l&apos;IA
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-line p-6">
            <span className="font-mono text-xs uppercase tracking-wide text-ink-soft">
              le constat
            </span>
            <p className="mt-3 font-sans text-sm leading-relaxed text-ink-soft">
              Le gratuit coûte cher. Des heures à tester des mots-clés au
              hasard, des visuels flous, une anatomie ratée ou un cadrage
              bancal. C&apos;est frustrant, et ça ne fait pas professionnel.
            </p>
          </div>
          <div className="rounded-xl border border-indigo p-6">
            <span className="font-mono text-xs uppercase tracking-wide text-violet">
              la solution
            </span>
            <p className="mt-3 font-sans text-sm leading-relaxed text-ink-soft">
              Nos prompts ne sont pas de simples listes de mots. Ce sont des
              structures testées, réglées au niveau de la lumière, du cadrage
              et des textures. Vous copiez, vous collez, vous obtenez le
              résultat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
