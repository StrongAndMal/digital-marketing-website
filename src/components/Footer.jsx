import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import brandLogo from "../logo/logo_transparent.png";
import instagramLogo from "../assets/social-icons-master/PNG/White/Instagram_white.png";
import tiktokLogo from "../assets/social-icons-master/PNG/Color/Tik Tok.png";
import { Mail, Phone, MapPin, Clock, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-purple-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <img
                src={brandLogo}
                alt="DigitalMal Logo"
                className="h-24 w-auto cursor-pointer"
                tabIndex={0}
                aria-label="DigitalMal"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/digitalmal_/",
                    "_blank"
                  )
                }
              />
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 justify-center">
              <button
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/digitalmal_/",
                    "_blank"
                  )
                }
                className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <img src={instagramLogo} alt="Instagram" className="h-6 w-6" />
              </button>
              <button
                onClick={() =>
                  window.open("https://www.tiktok.com/@digitalmal_", "_blank")
                }
                className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Follow us on TikTok"
              >
                <img src={tiktokLogo} alt="TikTok" className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Branding & Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Video & Photography
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  SEO Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Contact Information
            </h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>mauro.alv99@digital-mal.com</span>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span>Los Angeles, CA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4" />
                <span>24 Hour Response Time</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/60">
                © 2025 DigitalMal. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
