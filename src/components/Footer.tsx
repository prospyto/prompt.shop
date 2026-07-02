export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Le futur de l&apos;image ne s&apos;attend pas, il se programme.
        </h2>
        <p className="mx-auto mt-3 max-w-md font-sans text-ink-soft">
          Votre maîtrise, notre technologie.
        </p>
        <a
          href="#offres"
          className="mt-6 inline-block rounded-full bg-indigo px-6 py-3 font-sans text-sm font-medium text-white transition hover:bg-violet"
        >
          Passer au niveau supérieur
        </a>
      </div>
      <div className="border-t border-line px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-sans text-xs text-ink-soft sm:flex-row">
          <span>prompt.shop — Cotonou, Bénin</span>
          <span>© {new Date().getFullYear()} prompt.shop. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
}
