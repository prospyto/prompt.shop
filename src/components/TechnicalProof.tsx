import Reveal from "./Reveal";

const LINES = [
  "La différence se joue dans le réglage.",
  "Une anatomie irréprochable, une profondeur de champ maîtrisée à 85mm, une colorimétrie signature :",
  "c'est là que nous séparons les créateurs des professionnels.",
];

export default function TechnicalProof() {
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 text-right sm:py-24">
        {LINES.map((line, i) => (
          <Reveal key={i} variant="reveal-right" delay={i * 200}>
            <p className="font-display text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl">
              {line}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
