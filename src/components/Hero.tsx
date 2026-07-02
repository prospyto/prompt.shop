import PromptConsole from "./PromptConsole";
import AmbientShapes from "./AmbientShapes";

export default function Hero() {
  return (
    <section className="relative mx-auto grid max-w-6xl gap-10 overflow-hidden px-6 py-16 sm:py-24 md:grid-cols-2 md:items-center md:gap-12">
      <AmbientShapes />      <div>
        <span className="hero-fade hero-fade-1 inline-block rounded-full border border-line bg-white px-3 py-1 font-mono text-xs text-ink-soft">
          à partir de 500 FCFA
        </span>
        <h1 className="hero-fade hero-fade-2 mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
          Le bon prompt.
          <br />
          Le résultat exact.
        </h1>
        <p className="hero-fade hero-fade-3 mt-5 max-w-md font-sans text-base leading-relaxed text-ink-soft sm:text-lg">
          Des prompts testés et prêts à coller pour générer tes photos, vidéos,
          mockups et templates avec l&apos;IA. Pas d&apos;essais ratés, pas de
          crédits gaspillés.
        </p>
        <div className="hero-fade hero-fade-4 mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#tarifs"
            className="rounded-full bg-indigo px-6 py-3 font-sans text-sm font-medium text-white transition hover:bg-violet hover:shadow-lg hover:shadow-indigo/20"
          >
            Voir les tarifs
          </a>
          <a
            href="#comment"
            className="font-sans text-sm font-medium text-ink underline decoration-line underline-offset-4 transition hover:decoration-ink"
          >
            Comment ça marche
          </a>
        </div>
      </div>
      <div className="hero-fade hero-fade-3">
        <PromptConsole />
      </div>
    </section>
  );
}
