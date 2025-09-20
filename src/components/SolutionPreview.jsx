import { CheckCircle } from "lucide-react";

export const SolutionPreview = () => {
  const solutions = [
    {
      title: "Custom Website Development",
      description: "Professional, mobile-responsive websites that convert visitors into customers",
      features: ["Mobile-First Design", "SEO Optimized", "Fast Loading", "Conversion Focused"]
    },
    {
      title: "Search Engine Optimization",
      description: "Dominate Google search results and drive qualified traffic to your business",
      features: ["Local SEO", "Keyword Research", "Content Strategy", "Ranking Monitoring"]
    },
    {
      title: "Digital Marketing & AI Tools",
      description: "Automated marketing campaigns that work 24/7 to grow your business",
      features: ["Social Media Management", "Email Marketing", "AI Automation", "Analytics & Reporting"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Solutions Drive Real Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just build websites or run ads. We create complete digital ecosystems 
              that generate leads, increase sales, and grow your business.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-purple-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Results Preview */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              See What's Possible for Your Business
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">300%</div>
                <div className="text-lg opacity-90">Average Traffic Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">150%</div>
                <div className="text-lg opacity-90">More Qualified Leads</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">200%</div>
                <div className="text-lg opacity-90">ROI Improvement</div>
              </div>
            </div>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              These aren't just numbers. They're real results from real businesses 
              that trusted us with their digital transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
