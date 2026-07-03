import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CreationCycle from "@/components/CreationCycle";
import ProblemSolution from "@/components/ProblemSolution";
import ProgressionMountain from "@/components/ProgressionMountain";
import CategoryGrid from "@/components/CategoryGrid";
import TechnicalGallery from "@/components/TechnicalGallery";
import PricingOffer from "@/components/PricingOffer";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav />
      <main>
        <Hero />
        <CreationCycle />
        <Reveal>
          <ProblemSolution />
        </Reveal>
        <ProgressionMountain />
        <Reveal>
          <CategoryGrid />
        </Reveal>
        <Reveal>
          <TechnicalGallery />
        </Reveal>
        <Reveal>
          <PricingOffer />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
