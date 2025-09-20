import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const services = [
    "Web Development",
    "Branding & Design",
    "Video & Photography",
    "SEO Optimization",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Inquiry Sent!",
      description:
        "Thanks for your interest! We'll contact you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground">
              Tell us about your project and we'll get back to you within 24
              hours
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-700">
                  What service are you interested in? *
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                  {services.map((service) => (
                    <label
                      key={service}
                      className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                        formData.service === service
                          ? "border-purple-500 bg-purple-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={service}
                        checked={formData.service === service}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                            formData.service === service
                              ? "border-purple-500 bg-purple-500"
                              : "border-gray-300"
                          }`}
                        >
                          {formData.service === service && (
                            <CheckCircle className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {service}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-sm font-semibold text-gray-700"
                >
                  Tell us about your project (Optional)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your project goals, timeline, or any specific requirements..."
                  className="min-h-[100px] border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full h-14 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Send My Inquiry
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            {/* Contact Info */}
          </div>
        </div>
      </div>
    </section>
  );
};
