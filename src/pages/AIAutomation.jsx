import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Bot, Zap, BarChart3, MessageSquare, ArrowRight, Star, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import TechnologyIcon from "@/components/TechnologyIcon";
import heroBg from "@/assets/hero-bg.jpg";

const AIAutomation = () => {
  const services = [
    {
      icon: <Bot className="h-8 w-8 text-purple-500" />,
      title: "AI Chatbots & Virtual Assistants",
      description: "Intelligent chatbots that provide 24/7 customer support and lead qualification",
      features: ["Natural Language Processing", "Multi-Channel Integration", "Lead Qualification", "Customer Support", "Appointment Scheduling", "FAQ Automation"],
      results: "80% reduction in support tickets"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Marketing Automation",
      description: "AI-powered marketing workflows that nurture leads and increase conversions",
      features: ["Email Sequences", "Lead Scoring", "Behavioral Triggers", "Personalization", "A/B Testing", "Performance Analytics"],
      results: "150% increase in lead conversion"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-500" />,
      title: "Data Analysis & Insights",
      description: "AI-driven analytics that uncover hidden patterns and business opportunities",
      features: ["Predictive Analytics", "Customer Segmentation", "Trend Analysis", "ROI Optimization", "Custom Dashboards", "Real-time Reporting"],
      results: "300% better decision making"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-500" />,
      title: "Content Generation",
      description: "AI tools that create engaging content for your marketing campaigns",
      features: ["Blog Post Writing", "Social Media Content", "Email Campaigns", "Ad Copy Creation", "SEO Content", "Product Descriptions"],
      results: "500% faster content creation"
    }
  ];

  const tools = [
    "OpenAI GPT", "ChatGPT", "Claude AI", "Google AI", "Microsoft Copilot", 
    "HubSpot AI", "Salesforce Einstein", "Zapier", "Make.com", "Pipedream"
  ];

  const process = [
    {
      step: "01",
      title: "AI Assessment",
      description: "We analyze your business processes to identify automation opportunities and AI use cases."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "We create a comprehensive AI automation strategy tailored to your business goals."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We build and deploy AI solutions that integrate seamlessly with your existing systems."
    },
    {
      step: "04",
      title: "Optimization & Training",
      description: "We continuously optimize AI performance and train your team on new capabilities."
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-pink-900/70"></div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 px-6 py-2 text-lg font-medium">
                AI Automation
              </Badge>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-8 leading-tight">
              Automate Your Business with{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI Power
              </span>
            </h1>
            
            <p className="text-2xl lg:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business operations with cutting-edge AI automation. 
              Save time, reduce costs, and scale your growth with intelligent systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 text-xl rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
                Get Your AI Audit
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-10 py-5 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                See AI Examples
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
              <h2 className="text-compact-xl font-bold text-gray-900 mb-4">
                AI Automation Services
              </h2>
              <p className="text-compact-base text-gray-600 max-w-2xl mx-auto">
                We implement AI solutions that automate repetitive tasks, 
                enhance customer experience, and drive business growth.
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

      {/* Tools Section */}
      <section className="section-tight bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-compact-xl font-bold text-gray-900 mb-4">
                AI Tools & Platforms We Use
              </h2>
              <p className="text-compact-base text-gray-600 max-w-2xl mx-auto">
                We work with the latest AI technologies and platforms to ensure 
                your automation solutions are cutting-edge and future-proof.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center space-x-2 px-4 py-2 bg-white border-2 border-gray-200 rounded-full static-element">
                  <TechnologyIcon name={tool} className="w-5 h-5" />
                  <span className="text-sm font-medium text-gray-700">{tool}</span>
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
                Our AI Implementation Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a systematic approach to ensure your AI automation 
                solutions are implemented successfully and deliver maximum value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
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

      {/* Benefits Section */}
      <section className="section-compact bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose AI Automation?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold mb-2">70%</div>
                <div className="text-xl opacity-90">Time Savings</div>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold mb-2">50%</div>
                <div className="text-xl opacity-90">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold mb-2">300%</div>
                <div className="text-xl opacity-90">Efficiency Gain</div>
              </div>
            </div>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              AI automation isn't just about technology—it's about transforming 
              your business to work smarter, not harder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full">
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg rounded-full">
                View AI Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAutomation;
