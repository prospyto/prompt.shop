export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-lg font-semibold tracking-tight text-ink">
          prompt<span className="text-indigo">.</span>shop
        </a>
        <nav className="hidden items-center gap-8 font-sans text-sm text-ink-soft md:flex">
          <a href="#offres" className="hover:text-ink">Offres</a>
          <a href="#formation" className="hover:text-ink">Formation</a>
          <a href="#faq" className="hover:text-ink">FAQ</a>
          <a href="#contact" className="hover:text-ink">Contact</a>
        </nav>
        <a
          href="#offres"
          className="rounded-full bg-indigo px-4 py-2 font-sans text-sm font-medium text-white transition hover:bg-violet"
        >
          Passer au niveau supérieur
        </a>
      </div>
    </header>
  );
}
