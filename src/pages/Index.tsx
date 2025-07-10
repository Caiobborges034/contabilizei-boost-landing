
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ReinforceCTASection from "@/components/ReinforceCTASection";
import SocialProofSection from "@/components/SocialProofSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ReinforceCTASection />
        <SocialProofSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
