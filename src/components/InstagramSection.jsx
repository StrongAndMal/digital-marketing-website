import { Instagram } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const InstagramSection = ({
  backgroundImage = heroBg,
  overlayColor = "purple",
}) => {
  // Background color overlay options - same as hero
  const overlayStyles = {
    purple: "bg-gradient-to-r from-purple-900/60 to-blue-900/60",
    blue: "bg-gradient-to-r from-blue-900/60 to-teal-900/60",
    orange: "bg-gradient-to-r from-orange-900/60 to-red-900/60",
    green: "bg-gradient-to-r from-green-900/60 to-emerald-900/60",
    dark: "bg-black/50",
    light: "bg-white/20",
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/digitalmal_/", "_blank");
  };

  return (
    <section className="relative py-20 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed">
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
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Follow Us On Instagram
          </h2>
        </div>

        {/* Instagram Logo - Centered */}
        <div className="flex justify-center">
          <button
            onClick={handleInstagramClick}
            className="w-32 h-32 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group cursor-pointer"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="h-16 w-16 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>

        {/* Instagram Handle */}
        <div className="text-center mt-8">
          <p className="text-lg text-white/80 mb-4">
            Follow us for daily inspiration and updates
          </p>
        </div>
      </div>
    </section>
  );
};
