"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactDirect() {
  const ref = useRef<HTMLDivElement>(null);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => setPulse(true), 2000);
          observer.disconnect();
          return () => clearTimeout(t);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="mx-auto max-w-2xl px-6 py-16 text-center sm:py-20">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Une vision complexe ? Discutons-en.
      </h2>
      <p className="mx-auto mt-4 max-w-md font-sans text-ink-soft">
        Ne laissez pas votre projet stagner par manque de précision. Une
        structure complexe demande une ingénierie dédiée. Discutons de votre
        architecture de prompt dès maintenant.
      </p>
      <a
        href="mailto:contact@prompt.shop"
        className={`mt-7 inline-block rounded-full bg-indigo px-7 py-3.5 font-sans text-sm font-medium text-white transition hover:bg-violet ${
          pulse ? "pulse-cta" : ""
        }`}
      >
        Contacter un expert
      </a>
    </section>
  );
}
