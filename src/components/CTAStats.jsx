import { useState, useEffect, useRef } from "react";
import { FileText, Coffee, Users } from "lucide-react";

const stats = [
  {
    icon: FileText,
    number: 50,
    suffix: "+",
    label: "Completed Projects",
  },
  {
    icon: Coffee,
    number: 2,
    suffix: "",
    label: "Years Experience",
  },
  {
    icon: Users,
    number: 25,
    suffix: "+",
    label: "Happy Clients",
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

const AnimatedNumber = ({ target, suffix, isVisible }) => {
  const [current, setCurrent] = useState(0);
  const duration = 2000; // 2 seconds
  const steps = 60; // 60 steps for smooth animation
  const stepDuration = duration / steps;

  useEffect(() => {
    if (!isVisible) return;

    let step = 0;
    const increment = target / steps;

    const timer = setInterval(() => {
      step++;
      setCurrent(Math.min(Math.floor(increment * step), target));

      if (step >= steps) {
        setCurrent(target);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target, isVisible, stepDuration, steps]);

  return (
    <span className="text-6xl lg:text-7xl font-bold text-white">
      {current}
      {suffix}
    </span>
  );
};

export const CTAStats = ({
  backgroundImage = null,
  overlayColor = "orange",
}) => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref);

  // Background color overlay options
  const overlayStyles = {
    orange: "bg-gradient-to-r from-orange-500/80 to-pink-500/80",
    purple: "bg-gradient-to-r from-purple-600/80 to-blue-600/80",
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
              overlayStyles[overlayColor] || overlayStyles.orange
            }`}
          ></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  {/* Icon */}
                  <div className="mx-auto w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>

                  {/* Animated Number */}
                  <div className="mb-2">
                    <AnimatedNumber
                      target={stat.number}
                      suffix={stat.suffix}
                      isVisible={isVisible}
                    />
                  </div>

                  {/* Label */}
                  <p className="text-white/90 text-lg font-medium">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
