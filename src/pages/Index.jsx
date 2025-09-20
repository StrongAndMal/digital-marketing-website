import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionPreview } from "@/components/SolutionPreview";
import { TrustedCompanies } from "@/components/TrustedCompanies";
import { CTAStats } from "@/components/CTAStats";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import heroImage from "@/assets/Photos/Gemini_Generated_Image_h6jtj0h6jtj0h6jt.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* 1. HERO - Hook & Value Proposition */}
      <Hero
        backgroundImage={heroBg}
        overlayColor="purple"
        leftImage={heroImage}
      />
      
      {/* 2. PROBLEM - What we solve */}
      <ProblemSection />
      
      {/* 3. STATS - Social proof numbers */}
      <CTAStats backgroundImage={heroBg} overlayColor="orange" />
      
      {/* 4. SOLUTION PREVIEW - Quick service overview */}
      <SolutionPreview />
      
      {/* 5. SOCIAL PROOF - Trusted companies */}
      <TrustedCompanies backgroundImage={heroBg} overlayColor="purple" />
      
      {/* 6. CTA - Contact/Quote */}
      <ContactForm />
      
      <Footer />
    </div>
  );
};

export default Index;
