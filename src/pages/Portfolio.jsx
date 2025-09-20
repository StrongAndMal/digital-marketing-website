import React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Store - Fashion Boutique",
      description:
        "Complete e-commerce solution with WooCommerce integration, custom design, and mobile optimization.",
      image: "/api/placeholder/600/400",
      technologies: ["WordPress", "WooCommerce", "PHP", "CSS3", "JavaScript"],
      category: "E-commerce",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Responsive design for all devices",
        "Product catalog with 200+ items",
        "Secure payment integration",
        "SEO optimized for better rankings",
        "Mobile-first approach",
      ],
    },
    {
      id: 2,
      title: "Restaurant Website - Local Bistro",
      description:
        "Modern restaurant website with online menu, reservation system, and local SEO optimization.",
      image: "/api/placeholder/600/400",
      technologies: [
        "WordPress",
        "PHP",
        "CSS3",
        "JavaScript",
        "Google Maps API",
      ],
      category: "Local Business",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Online menu with categories",
        "Reservation booking system",
        "Google My Business integration",
        "Local SEO optimization",
        "Contact forms and location",
      ],
    },
    {
      id: 3,
      title: "Corporate Website - Tech Startup",
      description:
        "Professional corporate website with blog, team section, and lead generation forms.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
      ],
      category: "Corporate",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Modern React-based design",
        "Blog with CMS integration",
        "Team and about pages",
        "Contact and lead forms",
        "Fast loading and SEO optimized",
      ],
    },
    {
      id: 4,
      title: "Portfolio Website - Creative Agency",
      description:
        "Creative portfolio website showcasing agency work with interactive galleries and animations.",
      image: "/api/placeholder/600/400",
      technologies: ["WordPress", "PHP", "CSS3", "JavaScript", "GSAP"],
      category: "Creative",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Interactive portfolio gallery",
        "Smooth animations and transitions",
        "Client testimonials section",
        "Contact and inquiry forms",
        "Mobile-responsive design",
      ],
    },
    {
      id: 5,
      title: "Healthcare Website - Medical Practice",
      description:
        "Professional healthcare website with patient portal, appointment booking, and HIPAA compliance.",
      image: "/api/placeholder/600/400",
      technologies: [
        "WordPress",
        "PHP",
        "CSS3",
        "JavaScript",
        "HIPAA Compliance",
      ],
      category: "Healthcare",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Patient portal integration",
        "Appointment booking system",
        "HIPAA compliant forms",
        "Medical service pages",
        "Secure contact forms",
      ],
    },
    {
      id: 6,
      title: "Real Estate Website - Property Listings",
      description:
        "Comprehensive real estate website with property listings, search filters, and virtual tours.",
      image: "/api/placeholder/600/400",
      technologies: ["WordPress", "PHP", "CSS3", "JavaScript", "Property API"],
      category: "Real Estate",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Property listing database",
        "Advanced search filters",
        "Virtual tour integration",
        "Agent profiles and contact",
        "Mortgage calculator tool",
      ],
    },
  ];

  const categories = [
    "All",
    "E-commerce",
    "Local Business",
    "Corporate",
    "Creative",
    "Healthcare",
    "Real Estate",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative hero-compact flex items-center overflow-hidden pt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/api/placeholder/1920/1080')`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-blue-900/80 to-indigo-900/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Discover our latest projects and see how we've helped businesses
              grow with custom web solutions, SEO optimization, and digital
              marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-full"
                asChild
              >
                <Link to="/services">View Our Services</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 text-lg rounded-full"
                asChild
              >
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-compact px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each project represents our commitment to excellence, innovation,
              and delivering results that drive business growth.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Live
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-compact px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something amazing together. Our
            team is ready to bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-full"
              asChild
            >
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
