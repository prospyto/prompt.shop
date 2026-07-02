import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import OfferPlatform from "@/components/OfferPlatform";
import Categories from "@/components/Categories";
import FormationDetails from "@/components/FormationDetails";
import FormationSteps from "@/components/FormationSteps";
import FormationReviews from "@/components/FormationReviews";
import Trust from "@/components/Trust";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import BigCTA from "@/components/BigCTA";
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
        <Reveal>
          <Categories />
        </Reveal>
        <Reveal>
          <FormationDetails />
        </Reveal>
        <Reveal>
          <FormationSteps />
        </Reveal>
        <Reveal>
          <FormationReviews />
        </Reveal>
        <Reveal>
          <Trust />
        </Reveal>
        <Reveal>
          <Stats />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <Roadmap />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
        <Reveal>
          <BigCTA />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
