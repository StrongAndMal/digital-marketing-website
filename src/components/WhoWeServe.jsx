import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const WhoWeServe = ({ aboutImage = null }) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Who We Serve, <span className="text-primary">DigitalMal Style</span>
          </h2>
          <p className="text-xl text-primary/80 font-medium">
            Real solutions for real businesses, local or online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            {/* Main Description */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At <span className="text-primary/80">DigitalMal</span>, we don't
                just build websites, we build presence. Whether you're a small
                business owner in L.A. looking to stand out in your neighborhood
                or an online brand ready to scale nationwide,{" "}
                <span className="text-primary/80">we've got you covered.</span>
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  We work with:
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">
                        Local businesses
                      </strong>{" "}
                      that need websites, video/photo content, or SEO to compete
                      in their area
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">
                        Online entrepreneurs
                      </strong>{" "}
                      building scalable brands from scratch
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Small teams</strong>{" "}
                      that need AI-powered automations or digital systems that
                      work
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">
                        Creators and service providers
                      </strong>{" "}
                      looking for stronger digital branding
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're not a giant agency with cookie-cutter solutions. We're
                  building with our clients, learning from the ground up, and
                  delivering measurable quality.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Think of us as your behind-the-scenes growth partner. Focused
                  on clean design, smart tech, and getting your business seen in
                  all the right places.
                </p>
              </div>
            </div>

            {/* CTA Button */}
          </div>

          {/* Right Side - About Us Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {aboutImage ? (
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={aboutImage}
                    alt="About DigitalMal - Our Team"
                    className="w-96 h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">Meet Our Team</h3>
                    <p className="text-sm opacity-90">
                      Learn more about who we are
                    </p>
                  </div>
                </div>
              ) : (
                <div className="w-96 h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-purple-300 group hover:border-purple-400 transition-colors duration-300">
                  <div className="text-center text-purple-600">
                    <div className="text-6xl mb-4">👥</div>
                    <div className="text-lg font-semibold mb-2">
                      About Us Image
                    </div>
                    <div className="text-sm opacity-75">
                      Add aboutImage prop
                    </div>
                  </div>
                </div>
              )}

              {/* About Us CTA Overlay */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
