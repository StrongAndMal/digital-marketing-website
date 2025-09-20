import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WhoWeServe } from "@/components/WhoWeServe";
import { Services } from "@/components/Services";
import { CTAStats } from "@/components/CTAStats";
import { TrustedCompanies } from "@/components/TrustedCompanies";
import { ProcessTree } from "@/components/ProcessTree";
import { InstagramSection } from "@/components/InstagramSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import heroImage from "@/assets/Photos/Gemini_Generated_Image_h6jtj0h6jtj0h6jt.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero
        backgroundImage={heroBg}
        overlayColor="purple"
        leftImage={heroImage}
      />
      <Services />
      <CTAStats backgroundImage={heroBg} overlayColor="orange" />
      <WhoWeServe aboutImage={null} />
      <TrustedCompanies backgroundImage={heroBg} overlayColor="purple" />
      <ProcessTree />
      <InstagramSection backgroundImage={heroBg} overlayColor="purple" />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
