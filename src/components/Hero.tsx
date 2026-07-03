import PromptConsole from "./PromptConsole";
import AmbientShapes from "./AmbientShapes";

export default function Hero() {
  return (
    <section className="relative mx-auto grid max-w-6xl gap-10 overflow-hidden px-6 py-16 sm:py-24 md:grid-cols-2 md:items-center md:gap-12">
      <AmbientShapes />
      <div>
        <h1 className="hero-fade hero-fade-2 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl">
          ÉCRIVEZ.
          <br />
          GÉNÉREZ.
          <br />
          VENDEZ.
        </h1>
        <p className="hero-fade hero-fade-3 mt-5 max-w-md font-sans text-base leading-relaxed text-ink-soft sm:text-lg">
          Des prompts d&apos;ingénierie professionnelle pour dominer vos
          visuels IA — photo, vidéo, mockup, template. Testés, prêts à
          déployer.
        </p>
        <div className="hero-fade hero-fade-4 mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#offre"
            className="cta-glow rounded-full bg-indigo px-6 py-3 font-sans text-sm font-medium text-white transition hover:bg-violet hover:shadow-lg hover:shadow-indigo/20"
          >
            Passer au niveau supérieur
          </a>
          <a
            href="#offre"
            className="font-sans text-sm font-medium text-ink underline decoration-line underline-offset-4 transition hover:decoration-ink"
          >
            Voir les offres
          </a>
        </div>
      </div>
      <div className="hero-fade hero-fade-3">
        <PromptConsole />
      </div>
    </section>
  );
}
