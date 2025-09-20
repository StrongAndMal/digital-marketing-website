import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, TrendingUp, Users, BarChart3, ArrowRight, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import TechnologyIcon from "@/components/TechnologyIcon";
import heroBg from "@/assets/hero-bg.jpg";

const Marketing = () => {
  const services = [
    {
      icon: <Target className="h-8 w-8 text-red-500" />,
      title: "Search Engine Optimization (SEO)",
      description: "Dominate Google search results and drive qualified traffic to your website",
      features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Local SEO", "Content Strategy", "Link Building"],
      results: "300% average traffic increase"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
      title: "Google Ads & PPC",
      description: "Targeted advertising campaigns that generate immediate results and ROI",
      features: ["Campaign Setup", "Keyword Targeting", "Ad Copy Creation", "Landing Page Optimization", "Bid Management", "Performance Tracking"],
      results: "150% more qualified leads"
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Social Media Marketing",
      description: "Build your brand and engage with customers across all social platforms",
      features: ["Content Creation", "Community Management", "Paid Social Ads", "Influencer Partnerships", "Analytics & Reporting", "Brand Monitoring"],
      results: "200% increase in engagement"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
      title: "Email Marketing",
      description: "Nurture leads and convert prospects into loyal customers",
      features: ["Email Campaigns", "Automation Workflows", "List Building", "A/B Testing", "Personalization", "Deliverability Optimization"],
      results: "25% higher conversion rates"
    }
  ];

  const platforms = [
    "Google Ads", "Facebook Ads", "Instagram Ads", "LinkedIn Ads", "Twitter Ads", 
    "TikTok Ads", "YouTube Ads", "Google Analytics", "Facebook Pixel", "Google Tag Manager"
  ];

  const process = [
    {
      step: "01",
      title: "Strategy & Research",
      description: "We analyze your market, competitors, and target audience to create a winning marketing strategy."
    },
    {
      step: "02",
      title: "Campaign Setup",
      description: "We set up and optimize your marketing campaigns across all relevant platforms."
    },
    {
      step: "03",
      title: "Content Creation",
      description: "We create compelling content that resonates with your audience and drives engagement."
    },
    {
      step: "04",
      title: "Monitor & Optimize",
      description: "We continuously monitor performance and optimize campaigns for maximum ROI."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative hero-compact flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        >
          {/* Color Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 to-orange-900/70"></div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <Badge className="bg-red-100 text-red-800 px-4 py-1 text-sm font-medium static-element">
                Digital Marketing
              </Badge>
            </div>
            
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
              Drive{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                More Traffic
              </span>{" "}
              & Sales
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our data-driven marketing strategies help you reach the right customers, 
              at the right time, with the right message.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-red-600 text-white px-8 py-3 text-lg rounded-full shadow-lg static-element">
                Get Your Free Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white px-8 py-3 text-lg rounded-full shadow-lg static-element">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-compact bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Marketing Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive digital marketing services designed to 
                grow your business and maximize your return on investment.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="card-compact static-element border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900 mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-gray-600 text-lg mb-4">
                          {service.description}
                        </CardDescription>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {service.results}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="section-tight bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Marketing Platforms We Master
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're experts in all major marketing platforms and tools, 
                ensuring your campaigns reach maximum effectiveness.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 animate-ticker">
              {platforms.map((platform, index) => (
                <div key={index} className="flex items-center justify-center w-16 h-16 bg-white border-2 border-gray-200 rounded-full static-element shadow-lg">
                  <TechnologyIcon name={platform} className="w-8 h-8" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-compact bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Marketing Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure your marketing campaigns 
                deliver measurable results and drive business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-compact bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Proven Results for Our Clients
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold mb-2">300%</div>
                <div className="text-xl opacity-90">Average Traffic Increase</div>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold mb-2">150%</div>
                <div className="text-xl opacity-90">More Qualified Leads</div>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold mb-2">200%</div>
                <div className="text-xl opacity-90">ROI Improvement</div>
              </div>
            </div>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              These aren't just numbers. They're real results from real businesses 
              that trusted us with their digital marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 px-6 py-3 text-base rounded-full static-element">
                Start Your Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white px-6 py-3 text-base rounded-full static-element">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Marketing;
