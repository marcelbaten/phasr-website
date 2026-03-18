import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import DisciplineTabs from "@/components/DisciplineTabs";
import Pricing from "@/components/Pricing";
import AICoachTeaser from "@/components/AICoachTeaser";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <DisciplineTabs />
      <Pricing />
      <AICoachTeaser />
      <FAQ />
      <Footer />
    </main>
  );
}
