import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Code, Smartphone, Search, Zap, Shield, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const WebDevelopment = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: "Custom Web Development",
      description: "Tailored websites built with modern technologies and best practices",
      benefits: ["React/Next.js Development", "Responsive Design", "Custom Functionality", "Performance Optimization"]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-500" />,
      title: "Mobile-First Design",
      description: "Websites that look and work perfectly on all devices",
      benefits: ["Mobile Optimization", "Touch-Friendly Interface", "Cross-Browser Compatibility", "Fast Loading"]
    },
    {
      icon: <Search className="h-8 w-8 text-purple-500" />,
      title: "SEO Optimization",
      description: "Built-in search engine optimization for better visibility",
      benefits: ["Technical SEO", "Page Speed Optimization", "Structured Data", "Meta Tags"]
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Performance & Speed",
      description: "Lightning-fast websites that convert visitors into customers",
      benefits: ["Core Web Vitals", "Image Optimization", "Caching Strategy", "CDN Integration"]
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "Security & Maintenance",
      description: "Secure, reliable websites with ongoing support",
      benefits: ["SSL Certificates", "Regular Updates", "Backup Systems", "Security Monitoring"]
    }
  ];

  const technologies = [
    "React & Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", 
    "PostgreSQL", "Vercel", "Netlify", "WordPress", "Shopify"
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your business goals, target audience, and requirements to create a comprehensive project plan."
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Our designers create wireframes and mockups that align with your brand and user experience goals."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your website using cutting-edge technologies and thoroughly test every feature."
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description: "We deploy your website and continuously monitor performance to ensure optimal results."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        >
          {/* Color Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70"></div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 px-6 py-2 text-lg font-medium">
                Web Design & Development
              </Badge>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-8 leading-tight">
              Custom Websites That{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Convert
              </span>
            </h1>
            
            <p className="text-2xl lg:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              We build professional, mobile-responsive websites that drive traffic, engage visitors, 
              and convert them into loyal customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-xl rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
                Get Your Free Quote
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-10 py-5 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our Web Development Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with creative design to deliver websites 
                that not only look great but also perform exceptionally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{feature.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-lg">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We stay up-to-date with the latest technologies to ensure your website 
                is built with the best tools available.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="px-6 py-3 text-lg bg-white border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure your project is delivered 
                on time, on budget, and exceeds your expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project and create a website that drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
