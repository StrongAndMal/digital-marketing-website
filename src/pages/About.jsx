import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Award,
  Users,
  Target,
  Lightbulb,
  Code,
  Palette,
  Search,
  Camera,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function About() {
  const [skillsLoaded, setSkillsLoaded] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const [progressAnimated, setProgressAnimated] = useState(false);
  const skillsSectionRef = useRef(null);

  const skills = [
    {
      icon: Code,
      name: "Web Development",
      level: 95,
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Palette,
      name: "UI/UX Design",
      level: 90,
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Search,
      name: "SEO Optimization",
      level: 88,
      color: "from-green-500 to-green-600",
    },
    {
      icon: Camera,
      name: "Photography/Video",
      level: 92,
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Zap,
      name: "AI Integration",
      level: 85,
      color: "from-orange-500 to-orange-600",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "Every project delivers measurable results that drive growth and success.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description:
        "Your vision becomes our mission. We work closely to bring your dreams to life.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Cutting-edge solutions that set you apart from the competition.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Highest standards maintained in every aspect of our work.",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkillsLoaded(true);
      setAnimatedSkills(skills);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll-triggered animation for progress bars
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setProgressAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    return () => {
      if (skillsSectionRef.current) {
        observer.unobserve(skillsSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background Image - Fixed Position */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop)`,
          }}
        >
          {/* Color Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-blue-900/60"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 flex items-center min-h-screen">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              Meet the Mind Behind{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                DigitalMal
              </span>
            </h1>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
              Transforming digital visions into reality through innovative
              design, strategic thinking, and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Side - Content */}
            <div className="flex-1 space-y-6 lg:space-y-10 text-center lg:text-left">
              <div className="space-y-6 lg:space-y-8">
                <div className="inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 bg-purple-100 text-purple-800 rounded-full text-sm lg:text-base font-semibold">
                  Founder & CEO
                </div>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                  Mauro Alvarado
                </h2>
                <p className="text-base xs:text-lg sm:text-xl lg:text-2xl text-gray-600">
                  Digital Strategist & Creative Technologist
                </p>
              </div>

              <div className="space-y-4 lg:space-y-8 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                <p>
                  Just over 1 year in digital innovation, Mauro founded
                  DigitalMal to unify creative design with technical excellence.
                </p>
                <p>
                  He specializes in full-stack development, AI-driven marketing,
                  and digital branding, helping 100+ businesses strengthen their
                  online presence and scale growth.
                </p>
                <p>
                  Beyond building digital experiences, Mauro explores emerging
                  AI, sharpens his eye through photography, and mentors the next
                  generation of self-taught developers.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-shrink-0 order-first lg:order-last">
              <div className="relative">
                <div className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-200 to-blue-200 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=600&fit=crop&crop=face"
                    alt="Malcolm Digital - Founder & CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 lg:-bottom-8 lg:-right-8 bg-purple-600 text-white p-4 lg:p-8 rounded-2xl shadow-xl">
                  <Award className="w-6 h-6 lg:w-10 lg:h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center space-y-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              My Story
            </h2>
            <div className="space-y-10 text-xl text-gray-700 leading-relaxed">
              <p>
                DigitalMal was built from the ground up, not from theory but
                from lived experience. What started as me experimenting with
                design, coding, and digital marketing to grow my own projects
                slowly evolved into something bigger, a drive to help other
                businesses do the same.
              </p>
              <p>
                I began with just a laptop and the belief that small businesses
                deserve the same powerful digital tools as big companies. Over
                time, that belief turned into DigitalMal: an agency focused on
                building websites, brands, and marketing strategies that don’t
                just look good, but actually help businesses grow.
              </p>
              <p>
                Today, I bring together everything I've learned, from full-stack
                development and AI integration to branding and storytelling,
                into solutions designed to make businesses stand out and scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={skillsSectionRef}
        className="relative min-h-screen flex items-center overflow-hidden py-24"
      >
        {/* Background Image - Fixed Position */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&h=1080&fit=crop)`,
          }}
        >
          {/* Color Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-blue-900/60"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Expertise & Skills
            </h2>
            <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive skill set developed through years of hands-on
              experience and continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
            {animatedSkills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 w-full"
                style={{
                  animationDelay: `${index * 200}ms`,
                  opacity: skillsLoaded ? 1 : 0,
                  transform: skillsLoaded
                    ? "translateY(0)"
                    : "translateY(20px)",
                  transition: "all 0.6s ease-out",
                }}
              >
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 mb-6 lg:mb-8">
                  <div
                    className={`p-4 lg:p-6 bg-gradient-to-r ${skill.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <skill.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                      {skill.name}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                      {skill.level}% Proficiency
                    </p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 lg:h-4">
                  <div
                    className={`bg-gradient-to-r ${skill.color} h-3 lg:h-4 rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: progressAnimated ? `${skill.level}%` : "0%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Our Values
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The principles that guide every decision we make and every project
              we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                  <value.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6">
                  {value.title}
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-24">
        {/* Background Image - Fixed Position */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&h=1080&fit=crop)`,
          }}
        >
          {/* Color Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 via-emerald-500/80 to-green-600/80"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 flex items-center min-h-screen">
          <div className="max-w-6xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-8 lg:mb-12 leading-tight">
              Boost My Business Now
            </h2>
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-gray-100 font-bold px-8 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6 text-lg sm:text-xl lg:text-2xl rounded-2xl group transition-all duration-300 shadow-2xl hover:shadow-3xl uppercase tracking-wider w-full sm:w-auto"
            >
              Let's Start
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
