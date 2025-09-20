import { AlertTriangle, TrendingDown, Clock, DollarSign } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: <TrendingDown className="h-8 w-8 text-red-500" />,
      title: "Low Online Visibility",
      description: "Your business is invisible to potential customers searching online, missing out on valuable leads and sales opportunities."
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Outdated Website",
      description: "Your current website looks unprofessional and doesn't convert visitors into customers, costing you business every day."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      title: "Wasted Marketing Budget",
      description: "You're spending money on marketing that doesn't work, with no clear ROI or measurable results to show for it."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-yellow-500" />,
      title: "Competitors Outpacing You",
      description: "Your competitors are dominating search results and social media while you're falling behind in the digital race."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Are These Problems Costing You Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every day you wait to fix these issues, you're losing potential customers and revenue. 
              Don't let your competitors get ahead while you struggle with outdated digital strategies.
            </p>
          </div>

          {/* Problems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {problem.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Stop Losing Money to These Problems
            </h3>
            <p className="text-lg mb-6 opacity-90">
              We've helped hundreds of businesses turn these problems into profit opportunities. 
              Let us show you how.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-red-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Your Free Analysis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
