import Reveal from "./Reveal";

const PHRASES = [
  "Je ne maîtrise rien.",
  "Je commence à générer de la qualité.",
  "Je vends mes créations professionnelles.",
];

export default function ProgressionWords() {
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <h2 className="text-center font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Votre progression avec prompt.shop
        </h2>
        <div className="mt-10 space-y-6">
          {PHRASES.map((phrase, i) => (
            <Reveal key={phrase} delay={i * 150}>
              <p className="text-center font-display text-xl font-semibold text-ink sm:text-2xl">
                {phrase}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
