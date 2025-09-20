import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Star,
  Monitor,
  Tablet,
  FileText,
  PenTool,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import heroImage from "@/assets/Photos/Gemini_Generated_Image_h6jtj0h6jtj0h6jt.png";

export const Hero = ({
  backgroundImage = heroBg,
  overlayColor = "purple",
  leftImage = heroImage,
}) => {
  // Background color overlay options - easily switch by changing overlayColor prop
  const overlayStyles = {
    purple: "bg-gradient-to-r from-purple-900/60 to-blue-900/60",
    blue: "bg-gradient-to-r from-blue-900/60 to-teal-900/60",
    orange: "bg-gradient-to-r from-orange-900/60 to-red-900/60",
    green: "bg-gradient-to-r from-green-900/60 to-emerald-900/60",
    dark: "bg-black/50",
    light: "bg-white/20",
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Image - Fixed Position */}
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

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 flex items-center min-h-screen">
        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full gap-8 lg:gap-12">
          {/* Left Side - Image Container */}
          <div className="flex-shrink-0 order-2 lg:order-1">
            {leftImage ? (
              <a
                href="#contact"
                className="block group cursor-pointer"
                aria-label="Contact us for your digital transformation"
              >
                <div className="relative z-20 transform group-hover:scale-105 group-hover:rotate-[-12deg] transition-all duration-300 ease-out">
                  <div className="rounded-lg shadow-2xl overflow-hidden">
                    <img
                      src={leftImage}
                      alt="Hero visual element"
                      className="w-48 h-60 xs:w-56 xs:h-70 sm:w-64 sm:h-80 md:w-72 md:h-88 lg:w-80 lg:h-96 object-cover group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                </div>
              </a>
            ) : (
              <div className="relative z-20">
                <div className="bg-gray-200 rounded-lg shadow-2xl w-48 h-60 xs:w-56 xs:h-70 sm:w-64 sm:h-80 md:w-72 md:h-88 lg:w-80 lg:h-96 flex items-center justify-center border-2 border-dashed border-gray-400">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">📷</div>
                    <div className="text-sm font-medium">
                      Add Your Image Here
                    </div>
                    <div className="text-xs">Replace with leftImage prop</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Text Content */}
          <div className="flex-1 text-white space-y-6 lg:space-y-8 order-1 lg:order-2 text-center lg:text-left">
            {/* Headline */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Custom Websites, SEO & AI Tools For{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Business Growth
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base xs:text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-2xl mx-auto lg:mx-0">
              From Web Development And Search Engine Optimization To AI
              Automation And Digital Marketing, We Do It All So You Can Scale
              Fast.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full group transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                asChild
              >
                <Link to="/services">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
    </section>
  );
};
