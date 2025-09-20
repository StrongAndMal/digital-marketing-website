import React, { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PricingCard } from "@/components/PricingCard";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  createStripeCheckout,
  getPricing,
  formatTierName,
} from "@/utils/paymentUtils";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleStripePayment = async (tier) => {
    console.log(`Stripe payment for ${tier}`);

    // Direct Stripe URLs for website tiers
    if (tier === "starter") {
      if (isYearly) {
        window.open("https://buy.stripe.com/7sY8wQ2dy82b3Qu4vBdEs06", "_blank");
      } else {
        window.open("https://buy.stripe.com/eVqcN6dWggyHdr46DJdEs00", "_blank");
      }
      return;
    }

    if (tier === "professional") {
      if (isYearly) {
        window.open("https://buy.stripe.com/bJe6oIaK46Y75YC5zFdEs07", "_blank");
      } else {
        window.open("https://buy.stripe.com/28E4gA5pK4PZ5YCgejdEs01", "_blank");
      }
      return;
    }

    if (tier === "enterprise") {
      if (isYearly) {
        window.open("https://buy.stripe.com/3cI5kE5pK96f4Uy5zFdEs08", "_blank");
      } else {
        window.open("https://buy.stripe.com/4gMcN67xS4PZdr41jpdEs02", "_blank");
      }
      return;
    }

    if (tier === "local-business") {
      window.open("https://buy.stripe.com/00w6oI3hC0zJ9aOd27dEs03", "_blank");
      return;
    }

    if (tier === "ecommerce-complete") {
      window.open("https://buy.stripe.com/fZu28sdWg2HR72G0fldEs04", "_blank");
      return;
    }

    if (tier === "digital-empire") {
      window.open("https://buy.stripe.com/6oU3cw5pK6Y772G2ntdEs05", "_blank");
      return;
    }

    const pricing = getPricing();
    const tierPricing = pricing[tier];

    if (!tierPricing) {
      console.error("Invalid tier:", tier);
      alert("Invalid package selected. Please try again.");
      return;
    }

    const amount = isYearly ? tierPricing.yearly : tierPricing.monthly;
    const billing = isYearly ? "yearly" : "monthly";

    // Show loading state
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = "Processing...";
    button.disabled = true;

    try {
      await createStripeCheckout(tier, billing, amount);
    } catch (error) {
      console.error("Stripe payment error:", error);
      alert("Payment failed. Please try again.");
    } finally {
      // Reset button state
      button.textContent = originalText;
      button.disabled = false;
    }
  };

  const handleServicePurchase = (service) => {
    console.log(`Purchase ${service}`);
    // TODO: Implement service purchase flow
  };

  // Load Calendly widget
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 px-6 py-2 text-lg font-medium">
                Transparent Pricing
              </Badge>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-8 leading-tight">
              Transparent{" "}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            
            <p className="text-2xl lg:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              Choose the perfect package for your business needs. All our pricing is transparent 
              with no hidden fees.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 text-xl rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300">
                Get Started Today
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-10 py-5 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Website Services Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Website Design & Development
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Complete website solutions with SEO optimization, domain setup,
              and ongoing maintenance
            </p>

            {/* Modern Billing Toggle */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center space-x-4">
                <span
                  className={`text-lg font-semibold transition-colors duration-300 ${
                    !isYearly ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  Monthly
                </span>

                {/* Modern Toggle Switch */}
                <div className="relative">
                  <button
                    onClick={() => setIsYearly(!isYearly)}
                    className={`relative inline-flex h-10 w-20 items-center rounded-full transition-all duration-500 ease-in-out focus:outline-none focus:ring-4 focus:ring-primary/20 ${
                      isYearly
                        ? "bg-gradient-to-r from-green-500 to-emerald-600"
                        : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-8 w-8 transform rounded-full bg-white shadow-lg transition-all duration-500 ease-in-out ${
                        isYearly ? "translate-x-11" : "translate-x-1"
                      }`}
                    >
                      {/* Ticker Effect - Rotating Icon */}
                      <div className="flex items-center justify-center h-full">
                        <span
                          className={`text-lg transition-transform duration-500 ${
                            isYearly ? "rotate-180" : "rotate-0"
                          }`}
                        >
                          {isYearly ? "💰" : "📅"}
                        </span>
                      </div>
                    </span>
                  </button>
                </div>

                <span
                  className={`text-lg font-semibold transition-colors duration-300 ${
                    isYearly ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  Annual
                </span>
              </div>

              {/* Savings Badge with Animation */}
              {isYearly && (
                <div className="relative">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                    Save up to 50%! 🎉
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PricingCard
              title="Starter Website"
              price="497"
              originalPrice="697"
              yearlyPrice="4,470"
              yearlyOriginalPrice="5,964"
              description="Perfect for small businesses and startups who need a solid online presence. Built using WordPress and a reliable cloud hosting service."
              features={[
                "5-page responsive website",
                "Custom domain setup (domain registration included if needed)",
                "SSL certificate & basic security setup",
                "Mobile-responsive design",
                "Basic SEO setup (meta tags, page titles)",
                "Contact forms & lead capture setup",
                "1 month post-launch support for updates & troubleshooting",
                "Email support & basic guidance for content management",
              ]}
              exampleLink="https://example-starter.com"
              isYearly={isYearly}
              onStripeClick={() => handleStripePayment("starter")}
              savings=" $514 with annual billing"
            />

            <PricingCard
              title="Professional Website"
              price="847"
              originalPrice="1,397"
              yearlyPrice="8,970"
              yearlyOriginalPrice="11,964"
              description="A more complete solution for businesses ready to scale online. Built using WordPress and a reliable cloud hosting service."
              features={[
                "Everything in Starter Website",
                "Up to 10 pages, including a blog or news section",
                "Basic e-commerce setup (product catalog, payment integration via Stripe/PayPal)",
                "Google Analytics setup & basic reporting",
                "Social media integration (links, share buttons, feeds if simple)",
                "3 months post-launch support",
                "Email support & guidance for content and updates",
              ]}
              isPreferred={true}
              exampleLink="https://example-professional.com"
              isYearly={isYearly}
              onStripeClick={() => handleStripePayment("professional")}
              savings=" $1,134 with annual billing"
            />

            <PricingCard
              title="Enterprise Website"
              price="1,247"
              originalPrice="1,997"
              yearlyPrice="13,470"
              yearlyOriginalPrice="17,964"
              description="For growing businesses needing more complex or tailored online solutions. Built using WordPress and a reliable cloud hosting service."
              features={[
                "Everything in Professional Website",
                "Up to 20 pages or custom landing pages",
                "Advanced e-commerce options (up to 50 products, simple coupon/discount setup)",
                "Simple custom integrations (embedding forms, newsletters, or other third-party tools)",
                "Monthly maintenance for 6 months (updates, security checks)",
                "Priority email support",
                "Optional training for internal team",
              ]}
              exampleLink="https://example-enterprise.com"
              isYearly={isYearly}
              onStripeClick={() => handleStripePayment("enterprise")}
              savings="$1,494 with annual billing"
            />
          </div>
        </div>
      </section>

      {/* Premium Bundles Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Web Development + Marketing Bundles
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Full-service packages including website design, development, SEO,
              and digital marketing
            </p>

            {/* Bundle Pricing Note */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-6 py-3 rounded-full text-sm font-medium">
                <span className="text-lg">🚀</span>
                <span>
                  Premium monthly packages - Complete AI-powered digital
                  transformation
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Local Business Complete Package"
              price="997"
              monthlyPrice="997"
              yearlyPrice="9,470"
              yearlyOriginalPrice="11,964"
              description="Complete digital presence for local businesses, built using WordPress and cloud hosting."
              features={[
                "Professional 10-page website design & development",
                "Custom domain & hosting setup",
                "Local SEO setup & Google My Business optimization",
                "Contact forms & lead capture",
                "Basic email marketing setup (Mailchimp, etc.)",
                "Social media integration & guidance (posting templates & scheduling)",
                "Monthly performance report & 1 strategy call",
                "1-month post-launch support for updates",
              ]}
              benefits={[
                "Save over $2,000 vs buying services individually",
                "Complete local business online presence",
                "Easy-to-manage automation templates for marketing",
                "Dedicated point of contact for support",
                "Realistic growth & ranking improvement guidance",
              ]}
              onStripeClick={() => handleStripePayment("local-business")}
              isBundle={true}
              isYearly={isYearly}
              savings="Save $1,494 with annual billing"
            />

            <ServiceCard
              title="E-commerce Complete Package"
              price="1,497"
              monthlyPrice="1,497"
              yearlyPrice="13,470"
              yearlyOriginalPrice="17,964"
              description="Full e-commerce setup for small to medium online stores using WordPress + WooCommerce."
              features={[
                "Complete e-commerce website design & development",
                "Product catalog setup (up to 50 products)",
                "Payment integration (Stripe/PayPal)",
                "Basic SEO optimization & shopping feed setup",
                "Email marketing setup with automated campaigns",
                "Social media integration & posting guidance",
                "Monthly performance report & 1 strategy call",
                "2 months post-launch support for updates & troubleshooting",
              ]}
              benefits={[
                "Save over $3,000 vs separate services",
                "Complete online store ready to sell",
                "Easy-to-manage marketing automations",
                "Dedicated support for setup & troubleshooting",
                "Measurable ROI potential with realistic marketing guidance",
              ]}
              onStripeClick={() => handleStripePayment("ecommerce-complete")}
              isBundle={true}
              isYearly={isYearly}
              savings="Save $1,494 with annual billing"
            />

            <ServiceCard
              title="Complete Digital Empire Package"
              price="2,497"
              monthlyPrice="2,497"
              yearlyPrice="22,470"
              yearlyOriginalPrice="29,964"
              description="The ultimate solution for businesses looking for a professional, managed digital presence."
              features={[
                "Enterprise-level WordPress website with up to 20 pages",
                "Brand identity guidance & visual design support",
                "Advanced SEO & blog content guidance",
                "Email marketing automation setup",
                "Social media content strategy & scheduling templates",
                "Monthly analytics report & 2 strategy calls",
                "3 months post-launch maintenance & support",
                "Optional training for internal teams on managing website & marketing",
              ]}
              benefits={[
                "Save $5,000+ vs separate services",
                "Complete managed online presence",
                "Streamlined tools for marketing & sales",
                "Dedicated account support",
                "Realistic ROI improvement over time",
              ]}
              onStripeClick={() => handleStripePayment("digital-empire")}
              isBundle={true}
              isYearly={isYearly}
              savings="Save $2,994 with annual billing"
            />
          </div>
        </div>
      </section>

      {/* Calendly Booking CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not Sure Which Package Is Right For You?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's grab a virtual coffee and discuss your specific needs. I'll
              help you choose the perfect solution for your business goals.
            </p>
          </div>

          <div className="text-center">
            {/* Calendly Widget - Direct Embed */}
            <div
              className="calendly-inline-widget mx-auto"
              data-url="https://calendly.com/mauro-alv290/30min"
              style={{ minWidth: "320px", height: "700px", width: "100%" }}
            ></div>

            {/* Primary CTA Button */}

            {/* Benefits of the call */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
