import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InfoCardsSection from "@/components/InfoCardsSection";
import ApplicationProcessSection from "@/components/ApplicationProcessSection";
import ReadyToApplySection from "@/components/ReadyToApplySection";
import CountryFlagsSection from "@/components/CountryFlagsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import VisaGuideSection from "@/components/VisaGuideSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <InfoCardsSection />
      <ApplicationProcessSection />
      <ReadyToApplySection />
      <CountryFlagsSection />
      <WhyChooseUsSection />
      <VisaGuideSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
