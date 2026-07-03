export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 font-sans text-xs text-ink-soft sm:flex-row">
        <span className="font-display text-sm font-semibold text-ink">
          prompt<span className="text-indigo">.</span>shop
        </span>
        <span>© {new Date().getFullYear()} prompt.shop. Tous droits réservés.</span>
      </div>
    </footer>
  );
}
