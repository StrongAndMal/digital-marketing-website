import { Eye, Star, Megaphone, Monitor, Flag } from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "Discovery & Strategy",
    icon: Eye,
    color: "bg-red-500",
    side: "left",
    subSteps: [
      "Initial Consultation",
      "Understand Goals & Challenges",
      "Research Industry & Competitors",
      "Define Target Audience",
    ],
  },
  {
    id: 2,
    title: "Branding & Identity",
    icon: Star,
    color: "bg-orange-500",
    side: "right",
    subSteps: [
      "Logo & Visual Identity Design",
      "Brand Guidelines Creation",
      "Messaging & Positioning",
    ],
  },
  {
    id: 3,
    title: "Marketing & Growth",
    icon: Megaphone,
    color: "bg-green-500",
    side: "left",
    subSteps: [
      "Campaign Planning",
      "AI-Powered Marketing Strategies",
      "SEO & Paid Advertising Integration",
    ],
  },
  {
    id: 4,
    title: "Design & Development",
    icon: Monitor,
    color: "bg-blue-500",
    side: "right",
    subSteps: [
      "Website/UI/UX Design",
      "Custom Functionality",
      "Responsive & Optimized Build",
    ],
  },
  {
    id: 5,
    title: "Launch & Optimization",
    icon: Flag,
    color: "bg-purple-500",
    side: "left",
    subSteps: [
      "Testing & Quality Assurance",
      "Deployment",
      "Performance Tracking & Analytics",
    ],
  },
];

export const ProcessTree = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Structure Tree
          </h2>
        </div>

        {/* Tree Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Dashed Line */}
            <div className="absolute left-1/2 top-0 w-0.5 h-full border-l-2 border-dashed border-orange-300 transform -translate-x-1/2"></div>

            {/* Process Steps */}
            <div className="space-y-16">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                const isLeft = step.side === "left";

                return (
                  <div key={step.id} className="relative flex items-center">
                    {/* Left Column */}
                    <div className="w-1/2 pr-8">
                      {isLeft ? (
                        <div className="text-right">
                          <h3 className="text-2xl font-bold text-foreground mb-4">
                            {step.title}
                          </h3>
                          <ul className="space-y-2">
                            {step.subSteps.map((subStep, subIndex) => (
                              <li
                                key={subIndex}
                                className="text-muted-foreground"
                              >
                                • {subStep}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <div className="w-full h-24"></div>
                      )}
                    </div>

                    {/* Center Column - Icon */}
                    <div className="w-16 flex justify-center">
                      <div
                        className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-lg z-10`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-1/2 pl-8">
                      {!isLeft ? (
                        <div className="text-left">
                          <h3 className="text-2xl font-bold text-foreground mb-4">
                            {step.title}
                          </h3>
                          <ul className="space-y-2">
                            {step.subSteps.map((subStep, subIndex) => (
                              <li
                                key={subIndex}
                                className="text-muted-foreground"
                              >
                                • {subStep}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <div className="w-full h-24"></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg">
            GET A QUOTE
          </button>
        </div>
      </div>
    </section>
  );
};
