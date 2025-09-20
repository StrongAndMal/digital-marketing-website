import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Code,
  Target,
  Bot,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Services = () => {
  const mainServices = [
    {
      icon: <Code className="h-12 w-12 text-blue-500" />,
      title: "Web Design & Development",
      description: "Custom websites that convert visitors into customers",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Fast Loading",
        "Mobile-First",
      ],
      link: "/web-development",
      color: "blue",
    },
    {
      icon: <Target className="h-12 w-12 text-red-500" />,
      title: "Digital Marketing",
      description: "Data-driven campaigns that drive traffic and sales",
      features: ["SEO", "Google Ads", "Social Media", "Email Marketing"],
      link: "/marketing",
      color: "red",
    },
    {
      icon: <Bot className="h-12 w-12 text-purple-500" />,
      title: "AI Automation",
      description: "Intelligent systems that work 24/7 for your business",
      features: [
        "Chatbots",
        "Marketing Automation",
        "Data Analysis",
        "Content Generation",
      ],
      link: "/ai-automation",
      color: "purple",
    },
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
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-cyan-900/70"></div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <Badge className="bg-indigo-100 text-indigo-800 px-4 py-1 text-sm font-medium static-element">
                Our Services
              </Badge>
            </div>

            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-8 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p className="text-2xl lg:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              We offer comprehensive digital solutions to help your business
              grow and succeed online. From custom websites to AI automation,
              we've got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-indigo-600 text-white px-8 py-3 text-lg rounded-full shadow-lg static-element"
              >
                View Pricing
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 text-lg rounded-full shadow-lg static-element"
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section-compact bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                What We Do
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We specialize in three core areas that work together to create a
                complete digital ecosystem for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <Card
                  key={index}
                  className="card-compact static-element border-0 shadow-lg"
                >
                  <CardHeader className="pb-4 text-center">
                    <div className="mx-auto mb-6 static-element">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl text-gray-900 mb-4">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-lg">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      asChild
                      className={`w-full bg-${service.color}-600 text-white static-element`}
                    >
                      <Link to={service.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-compact bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose DigitalMal?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with creative design to deliver
                results that matter to your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Proven Results
                </h3>
                <p className="text-gray-600">
                  300% average traffic increase for our clients
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Fast Delivery
                </h3>
                <p className="text-gray-600">
                  Quick turnaround without compromising quality
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Ongoing Support
                </h3>
                <p className="text-gray-600">
                  We're here for you long after launch
                </p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  ROI Focused
                </h3>
                <p className="text-gray-600">
                  Every solution designed to drive business growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-compact bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project and create a custom solution that
              drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 px-6 py-3 text-base rounded-full static-element"
              >
                View Pricing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white px-6 py-3 text-base rounded-full static-element"
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
