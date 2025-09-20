import React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactFormInline } from "@/components/ContactFormInline";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Users,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Contact Info */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8 flex items-center min-h-screen">
          <div className="flex flex-col lg:flex-row items-start w-full gap-8 lg:gap-20">
            {/* Left Side - Contact Information */}
            <div className="flex-1 text-gray-900 space-y-8 lg:space-y-12 order-2 lg:order-1">
              {/* Headline */}
              <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  Let's Build Something{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Amazing Together
                  </span>
                </h1>
              </div>

              {/* Call to Action Text */}
              <div className="space-y-6 lg:space-y-8">
                <div className="space-y-4 lg:space-y-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight text-center lg:text-left">
                    Ready to Transform Your Business?
                  </h2>
                  <div className="space-y-3 lg:space-y-4 text-base lg:text-lg text-gray-700 leading-relaxed">
                    <p>
                      <strong>Give us a call</strong> or fill out the form and
                      we'll reach out to you within 24 hours with your
                      personalized proposal.
                    </p>
                    <p>
                      We're excited to help you grow and can't wait to get
                      started on your project.
                    </p>
                    <p>
                      <strong>Available 24/7</strong> - we're always here to
                      take your call and answer any questions you might have.
                    </p>
                  </div>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4 lg:space-y-6">
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 text-center lg:text-left">
                    Get In Touch
                  </h3>
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex items-center space-x-3 lg:space-x-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 lg:h-6 lg:w-6 text-purple-600" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900 text-sm lg:text-base">
                          Email Us
                        </p>
                        <a
                          href="mailto:mauro.alv99@digital-mal.com"
                          className="text-purple-600 hover:text-purple-700 font-medium text-sm lg:text-base break-all"
                        >
                          mauro.alv99@digital-mal.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 lg:space-x-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900 text-sm lg:text-base">
                          Call Us
                        </p>
                        <a
                          href="tel:+12139053499"
                          className="text-blue-600 hover:text-blue-700 font-medium text-sm lg:text-base"
                        >
                          +1 (213) 905-3499
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="flex-shrink-0 w-full max-w-2xl order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10">
                <div className="text-center mb-6 lg:mb-10">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
                    Get Started Today
                  </h2>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    Tell us about your project and we'll get back to you within
                    24 hours
                  </p>
                </div>

                {/* Contact Form Component */}
                <ContactFormInline />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
