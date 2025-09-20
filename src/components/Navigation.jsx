import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import brandLogo from "../logo/logo_transparent.png";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Handle scroll detection and navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;

      // Show navbar when scrolled past hero section
      if (scrollPosition > heroHeight * 0.8) {
        setIsScrolled(true);
        setIsVisible(true);
      } else {
        setIsScrolled(false);
        // Hide navbar when in hero section
        setIsVisible(scrollPosition < heroHeight * 0.1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  const navItems = [
    { 
      name: "Services", 
      href: "/services",
      dropdown: [
        { name: "Web Development", href: "/web-development", description: "Custom websites that convert" },
        { name: "Digital Marketing", href: "/marketing", description: "AI-powered campaigns" },
        { name: "AI Automation", href: "/ai-automation", description: "Intelligent business automation" }
      ]
    },
    { name: "About", href: "/about" },
    { 
      name: "Portfolio", 
      href: "/portfolio",
      dropdown: [
        { name: "Web Development", href: "/portfolio#websites", description: "Recent website projects" },
        { name: "SEO Success Stories", href: "/portfolio#seo", description: "Traffic & ranking results" },
        { name: "Marketing Campaigns", href: "/portfolio#marketing", description: "ROI-driven campaigns" },
        { name: "Case Studies", href: "/portfolio#case-studies", description: "Detailed project breakdowns" }
      ]
    },
    { name: "Why Us", href: "/why-us" },
    { name: "Pricing", href: "/pricing" },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleDropdownToggle = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 h-16 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        isScrolled
          ? "bg-purple-900 shadow-lg border-b border-purple-700/50"
          : "bg-purple-900"
      }`}
    >
      {/* Navbar Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img
                  src={brandLogo}
                  alt="DigitalMal Logo"
                  className="h-16 sm:h-20 lg:h-24 w-auto"
                  tabIndex={0}
                  aria-label="DigitalMal Home"
                />
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => {
                  const isActive =
                    location.pathname === item.href ||
                    (item.href.startsWith("/#") && location.pathname === "/");

                  return (
                    <div key={item.name} className="relative group dropdown-container">
                      {item.dropdown ? (
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className={`text-white hover:text-white transition-colors duration-300 font-medium flex items-center space-x-1 ${
                            isActive ? "text-white" : ""
                          }`}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`} />
                        </button>
                      ) : (
                        <Link
                          to={item.href}
                          className={`text-white hover:text-white transition-colors duration-300 font-medium relative group ${
                            isActive ? "text-white" : ""
                          }`}
                        >
                          {item.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                      )}

                      {/* Dropdown Menu */}
                      {item.dropdown && activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 py-4 z-50">
                          <div className="px-4 py-2 border-b border-gray-100">
                            <Link
                              to={item.href}
                              className="text-gray-900 font-semibold text-lg hover:text-purple-600 transition-colors duration-200"
                              onClick={handleDropdownClose}
                            >
                              View All {item.name}
                            </Link>
                          </div>
                          <div className="py-2">
                            {item.dropdown.map((dropdownItem, index) => (
                              <Link
                                key={index}
                                to={dropdownItem.href}
                                className="block px-4 py-3 hover:bg-purple-50 transition-colors duration-200"
                                onClick={handleDropdownClose}
                              >
                                <div className="font-medium text-gray-900 hover:text-purple-600">
                                  {dropdownItem.name}
                                </div>
                                <div className="text-sm text-gray-500 mt-1">
                                  {dropdownItem.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            {/* CTA Button */}
            <div className="hidden md:block">
              <Link to="/contact">
                <Button
                  variant="default"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
            {/* Mobile Hamburger Menu Button */}
            <div className="md:hidden">
              <button
                onClick={handleMenuToggle}
                className="relative w-10 h-10 flex flex-col justify-center items-center group p-2"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                <span
                  className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out mt-1.5 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out mt-1.5 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={handleMenuClose}
          />

          {/* Menu Container */}
          <div className="relative bg-purple-900 w-full h-full flex flex-col">
            {/* Menu Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/20">
              <div className="flex items-center space-x-3">
                <img
                  src={brandLogo}
                  alt="DigitalMal Logo"
                  className="h-10 w-auto"
                />
                <span className="text-white font-bold text-lg">Menu</span>
              </div>
              <button
                onClick={handleMenuClose}
                className="p-2 text-white hover:text-gray-200 transition-colors duration-200"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 px-4 py-6">
              <div className="space-y-2">
                {navItems.map((item, index) => {
                  const isActive =
                    location.pathname === item.href ||
                    (item.href.startsWith("/#") && location.pathname === "/");

                  return (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => handleDropdownToggle(item.name)}
                            className={`w-full text-left py-4 px-4 rounded-lg transition-all duration-300 flex items-center justify-between ${
                              isActive
                                ? "bg-white/20 text-white"
                                : "text-white/90 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            <span className="text-lg font-medium">{item.name}</span>
                            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`} />
                          </button>
                          {activeDropdown === item.name && (
                            <div className="ml-4 mt-2 space-y-2">
                              <Link
                                to={item.href}
                                onClick={handleMenuClose}
                                className="block py-2 px-4 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                              >
                                View All {item.name}
                              </Link>
                              {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                <Link
                                  key={dropdownIndex}
                                  to={dropdownItem.href}
                                  onClick={handleMenuClose}
                                  className="block py-2 px-4 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                                >
                                  <div className="font-medium">{dropdownItem.name}</div>
                                  <div className="text-sm opacity-75">{dropdownItem.description}</div>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={handleMenuClose}
                          className={`block py-4 px-4 rounded-lg transition-all duration-300 ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "text-white/90 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <span className="text-lg font-medium">{item.name}</span>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-4 border-t border-white/20">
              <Link to="/contact" onClick={handleMenuClose}>
                <Button className="w-full bg-white text-purple-900 hover:bg-gray-100 font-semibold py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Get A Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
