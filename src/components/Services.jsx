import { Button } from "@/components/ui/button";
import { Globe, Star, Camera, Search, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Get a powerful, SEO-optimized website that stands out and drives results—whether you need a basic site, appointment scheduling, or a full online store.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "E-commerce Ready",
      "Fast Loading",
    ],
  },
  {
    icon: Star,
    title: "Branding",
    description:
      "We create strong, memorable identities through design and strategy, helping your brand stand out, build trust, and connect with your audience.",
    features: [
      "Logo Design",
      "Brand Strategy",
      "Visual Identity",
      "Brand Guidelines",
    ],
  },
  {
    icon: Camera,
    title: "Video & Photo",
    description:
      "Showcase your business with 4K video and pro photos — perfect for social media, websites, and local marketing.",
    features: [
      "4K Video",
      "Professional Photography",
      "Social Media Content",
      "Local Marketing",
    ],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "SEO-optimized websites that showcase your brand—simple sites, booking, or online stores.",
    features: [
      "Keyword Research",
      "On-page SEO",
      "Link Building",
      "Analytics Tracking",
    ],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive digital solutions tailored to elevate your business
            and drive measurable results.
          </p>
        </div>

        {/* Services Grid - Flat Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group text-center space-y-6">
                {/* Icon */}
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <IconComponent className="h-10 w-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md mx-auto">
                  {service.description}
                </p>

                {/* CTA Button */}
              </div>
            );
          })}
        </div>

        {/* Main CTA Section */}
      </div>
    </section>
  );
};
