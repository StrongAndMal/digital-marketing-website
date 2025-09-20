import React, { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CheckCircle, Mail, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Success = () => {
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get payment details from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get("session_id");
    const paymentId = urlParams.get("payment_id");

    if (sessionId || paymentId) {
      setPaymentDetails({
        sessionId,
        paymentId,
        timestamp: new Date().toLocaleString(),
      });
    }

    setLoading(false);
  }, []);

  const handleContactSupport = () => {
    window.open(
      "mailto:mauro.alv99@digital-mal.com?subject=Payment Support",
      "_blank"
    );
  };

  const handleBookCall = () => {
    window.open("https://calendly.com/mauro-alv290/30min", "_blank");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Processing your payment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Payment Successful! 🎉
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for choosing DigitalMal. Your digital transformation
              journey begins now!
            </p>
          </div>

          {/* Payment Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              What Happens Next?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">1. Welcome Email</h3>
                <p className="text-muted-foreground text-sm">
                  You'll receive a welcome email with your account details and
                  next steps within 15 minutes.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">2. Strategy Call</h3>
                <p className="text-muted-foreground text-sm">
                  We'll schedule a strategy call to discuss your project goals
                  and timeline.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  3. Project Kickoff
                </h3>
                <p className="text-muted-foreground text-sm">
                  Your dedicated team will begin working on your project within
                  24-48 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleBookCall}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full"
              >
                Schedule Your Strategy Call
              </Button>
              <Button
                onClick={handleContactSupport}
                variant="outline"
                className="px-8 py-3 rounded-full"
              >
                Contact Support
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Questions? Email us at{" "}
              <a
                href="mailto:mauro.alv99@digital-mal.com"
                className="text-primary hover:underline"
              >
                mauro.alv99@digital-mal.com
              </a>
            </p>
          </div>

          {/* Payment Details */}
          {paymentDetails && (
            <div className="mt-12 bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Payment ID:</span>
                  <span className="ml-2 text-muted-foreground">
                    {paymentDetails.paymentId || paymentDetails.sessionId}
                  </span>
                </div>
                <div>
                  <span className="font-medium">Date:</span>
                  <span className="ml-2 text-muted-foreground">
                    {paymentDetails.timestamp}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Success;
