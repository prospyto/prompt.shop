import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav />
      <main>
        <Hero />
        <Reveal>
          <Categories />
        </Reveal>
        <Reveal>
          <Pricing />
        </Reveal>
        <Reveal>
          <HowItWorks />
        </Reveal>
        <Reveal>
          <Stats />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
