import { useState, useEffect, useRef } from "react";
import wordpressIcon from "@/assets/simple-icons-develop/icons/wordpress.svg";
import woocommerceIcon from "@/assets/simple-icons-develop/icons/woocommerce.svg";
import shopifyIcon from "@/assets/simple-icons-develop/icons/shopify.svg";
import googleanalyticsIcon from "@/assets/simple-icons-develop/icons/googleanalytics.svg";
import googleadsIcon from "@/assets/simple-icons-develop/icons/googleads.svg";
import facebookIcon from "@/assets/simple-icons-develop/icons/facebook.svg";

const tools = [
  {
    name: "WordPress",
    description: "Content Management System",
    icon: wordpressIcon,
    color: "text-blue-600",
  },
  {
    name: "WooCommerce",
    description: "E-commerce Platform",
    icon: woocommerceIcon,
    color: "text-purple-600",
  },
  {
    name: "Shopify",
    description: "E-commerce Solution",
    icon: shopifyIcon,
    color: "text-green-600",
  },
  {
    name: "Google Analytics",
    description: "Website Analytics",
    icon: googleanalyticsIcon,
    color: "text-orange-600",
  },
  {
    name: "Google Ads",
    description: "Digital Advertising",
    icon: googleadsIcon,
    color: "text-blue-500",
  },
  {
    name: "Facebook Ads",
    description: "Social Media Advertising",
    icon: facebookIcon,
    color: "text-blue-700",
  },
];

const useIntersectionObserver = (ref, options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.3, ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};

export const TrustedCompanies = ({
  backgroundImage = null,
  overlayColor = "purple",
}) => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref);
  // Background color overlay options
  const overlayStyles = {
    purple: "bg-gradient-to-r from-purple-600/80 to-pink-600/80",
    orange: "bg-gradient-to-r from-orange-500/80 to-pink-500/80",
    blue: "bg-gradient-to-r from-blue-600/80 to-teal-600/80",
    green: "bg-gradient-to-r from-green-600/80 to-emerald-600/80",
  };

  return (
    <section ref={ref} className="relative py-16 overflow-hidden">
      {/* Background Image with Fixed Effect */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          {/* Color Overlay */}
          <div
            className={`absolute inset-0 ${
              overlayStyles[overlayColor] || overlayStyles.purple
            }`}
          ></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Trusted Tools in the Industry
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            We use the most powerful and reliable tools to build, optimize, and
            grow your online presence
          </p>
        </div>

        {/* Ticker Animation Container */}
        <div className="relative overflow-hidden">
          <div
            className={`flex space-x-32 whitespace-nowrap ${
              isVisible ? "animate-ticker" : ""
            }`}
            style={{
              animation: isVisible ? "ticker 40s linear infinite" : "none",
            }}
          >
            {/* First set of tools */}
            {tools.map((tool, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-16 h-16 filter brightness-0 invert opacity-80"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {tools.map((tool, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-16 h-16 filter brightness-0 invert opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
