import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import OfferPlatform from "@/components/OfferPlatform";
import TechnicalProof from "@/components/TechnicalProof";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import ContactDirect from "@/components/ContactDirect";
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
          <OfferPlatform />
        </Reveal>
        <TechnicalProof />
        <Reveal>
          <Categories />
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
          <ContactDirect />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
