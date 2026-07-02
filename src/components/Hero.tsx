import AmbientShapes from "./AmbientShapes";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-4xl overflow-hidden px-6 py-20 text-center sm:py-28">
      <AmbientShapes />
      <h1 className="hero-fade hero-fade-2 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
        Ne subissez plus le hasard des algorithmes.
        <br />
        Dominez vos visuels avec l&apos;ingénierie de prompt professionnelle.
      </h1>
      <div className="hero-fade hero-fade-4 mt-8">
        <a
          href="#offres"
          className="inline-block rounded-full bg-indigo px-7 py-3.5 font-sans text-sm font-medium text-white transition hover:bg-violet hover:shadow-lg hover:shadow-indigo/20"
        >
          Passer au niveau supérieur
        </a>
      </div>
    </section>
  );
}
