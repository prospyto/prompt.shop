export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-lg font-semibold tracking-tight text-ink">
          prompt<span className="text-indigo">.</span>shop
        </a>
        <nav className="hidden items-center gap-8 font-sans text-sm text-ink-soft md:flex">
          <a href="#categories" className="hover:text-ink">Catégories</a>
          <a href="#comment" className="hover:text-ink">Comment ça marche</a>
          <a href="#avis" className="hover:text-ink">Avis</a>
          <a href="#faq" className="hover:text-ink">FAQ</a>
        </nav>
        <a
          href="#categories"
          className="rounded-full bg-indigo px-4 py-2 font-sans text-sm font-medium text-white transition hover:bg-violet"
        >
          Voir les prompts
        </a>
      </div>
    </header>
  );
}
