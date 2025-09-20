import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Video, Clock, Calendar, Phone, Mail } from "lucide-react";

export const ServiceAreas = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Service Areas & Availability
          </h2>
          <p className="text-xl text-muted-foreground">
            Flexible appointment options for local and global clients
          </p>
        </div>

        {/* Service Types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* In-Person Appointments */}
          <Card className="border-border/50 bg-card hover:shadow-medium transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-semibold text-foreground mb-2">
                In-Person Appointments
              </CardTitle>
              <CardDescription className="text-accent text-sm font-medium">
                (Local Business Discounted)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We offer in-person appointments within one hour of travel, up to
                50 miles in any direction from Orange County, NY.
              </p>

              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">First 50 miles:</span>
                  <span className="text-secondary font-semibold">
                    $1.50 per mile
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">Beyond 50 miles:</span>
                  <span className="text-secondary font-semibold">
                    $2.00 per mile
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full bg-gradient-primary">
                  Book An Appointment
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Online Appointments */}
          <Card className="border-border/50 bg-card hover:shadow-medium transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                <Video className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-2xl font-semibold text-foreground mb-2">
                Online Appointments
              </CardTitle>
              <CardDescription className="text-accent text-sm font-medium">
                (Via Zoom)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We meet with clients worldwide via Zoom, running on Eastern
                Standard Time (EST) for scheduling convenience. Book through our
                website or contact us via Instagram, TikTok, WhatsApp, phone,
                iMessage, or Gmail.
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <div className="font-medium text-accent-foreground mb-2">
                    Available Platforms:
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>• Instagram & TikTok DMs</div>
                    <div>• WhatsApp & iMessage</div>
                    <div>• Phone & Gmail</div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full bg-gradient-accent text-accent-foreground">
                  Book An Appointment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
