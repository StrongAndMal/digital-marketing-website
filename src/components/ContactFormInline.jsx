import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactFormInline = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: [],
    message: "",
  });

  const services = [
    "Web Development",
    "Branding & Design",
    "Video & Photography",
    "SEO Optimization",
    "Not Sure Yet",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || formData.services.length === 0) {
      toast({
        title: "Missing Information",
        description:
          "Please fill in all required fields and select at least one service.",
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

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <Label
            htmlFor="name"
            className="text-base font-semibold text-gray-700"
          >
            Your Name *
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="h-14 border-gray-300 focus:border-purple-500 focus:ring-purple-500 text-lg"
            required
          />
        </div>
        <div className="space-y-3">
          <Label
            htmlFor="email"
            className="text-base font-semibold text-gray-700"
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
            className="h-14 border-gray-300 focus:border-purple-500 focus:ring-purple-500 text-lg"
            required
          />
        </div>
      </div>

      {/* Service Selection */}
      <div className="space-y-4">
        <Label className="text-base font-semibold text-gray-700">
          What services are you interested in? * (Select all that apply)
        </Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service) => (
            <label
              key={service}
              className={`flex items-center p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                formData.services.includes(service)
                  ? "border-purple-500 bg-purple-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <input
                type="checkbox"
                name="services"
                value={service}
                checked={formData.services.includes(service)}
                onChange={() => handleServiceChange(service)}
                className="sr-only"
              />
              <div className="flex items-center space-x-4">
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    formData.services.includes(service)
                      ? "border-purple-500 bg-purple-500"
                      : "border-gray-300"
                  }`}
                >
                  {formData.services.includes(service) && (
                    <CheckCircle className="w-4 h-4 text-white" />
                  )}
                </div>
                <span className="text-base font-medium text-gray-700">
                  {service}
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-3">
        <Label
          htmlFor="message"
          className="text-base font-semibold text-gray-700"
        >
          Tell us about your project (Optional)
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe your project goals, timeline, or any specific requirements..."
          className="min-h-[120px] border-gray-300 focus:border-purple-500 focus:ring-purple-500 text-lg"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full h-16 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        Send My Inquiry
        <Send className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
      </Button>
    </form>
  );
};
