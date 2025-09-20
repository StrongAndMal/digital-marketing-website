import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProcessTree } from "@/components/ProcessTree";
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
  Star,
  Users,
  Award,
  Zap,
  Target,
  ArrowRight,
  Quote,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const WhyUs = () => {
  const benefits = [
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: "ROI-Focused Approach",
      description:
        "Every solution we create is designed to drive measurable business results and return on investment.",
      stats: "300% average ROI increase",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Fast Delivery",
      description:
        "We understand time is money. Our streamlined processes ensure quick turnaround without compromising quality.",
      stats: "50% faster delivery",
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Dedicated Support",
      description:
        "You're not just another client. We provide ongoing support and are here for you long after launch.",
      stats: "24/7 support available",
    },
    {
      icon: <Award className="h-8 w-8 text-purple-500" />,
      title: "Proven Expertise",
      description:
        "Years of experience combined with cutting-edge technology to deliver exceptional results.",
      stats: "50+ successful projects",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content:
        "DigitalMal transformed our online presence completely. Our website traffic increased by 400% and we're generating 3x more leads than before. Their attention to detail and ongoing support is outstanding.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "Founder",
      content:
        "The AI automation they set up for our marketing has been a game-changer. We're saving 20 hours per week and our conversion rates have doubled. Highly recommend their services!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Emily Rodriguez",
      company: "Local Business Co.",
      role: "Marketing Director",
      content:
        "Working with DigitalMal was the best decision we made for our business. They understood our needs perfectly and delivered beyond our expectations. Our local SEO rankings improved dramatically.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "300%", label: "Average ROI Increase" },
    { number: "25+", label: "Happy Clients" },
    { number: "2+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative hero-compact flex items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-1 text-sm font-medium static-element">
                Why Choose DigitalMal
              </Badge>
            </div>

            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-8 leading-tight">
              Why{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Choose Us
              </span>
              ?
            </h1>

            <p className="text-2xl lg:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              We're not just another digital agency. We're your strategic
              partners in growth, combining technical expertise with creative
              vision to deliver exceptional results.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-blue-600 text-white px-8 py-3 text-lg rounded-full shadow-lg static-element"
              >
                View Our Work
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 text-lg rounded-full shadow-lg static-element"
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-minimal bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-compact bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                What Makes Us Different
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with creative vision to deliver
                solutions that not only look great but drive real business
                results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="card-compact static-element border-0 shadow-lg"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{benefit.icon}</div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900 mb-2">
                          {benefit.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-lg mb-4">
                          {benefit.description}
                        </CardDescription>
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-800"
                        >
                          {benefit.stats}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-compact bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <ProcessTree />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-compact bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients have to
                say about working with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="card-compact static-element border-0 shadow-lg"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <CardTitle className="text-lg text-gray-900">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          {testimonial.role} at {testimonial.company}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-200" />
                      <p className="text-gray-700 italic leading-relaxed pl-6">
                        "{testimonial.content}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-compact bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our growing list of satisfied clients and see why we're the
              preferred choice for digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyUs;
