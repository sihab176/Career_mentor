import {
  FileText,
  Briefcase,
  MessageSquare,
  Target,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const BrowseByCategory = () => {
  const categories = [
    {
      id: 1,
      title: "Resume Tips",
      icon: FileText,
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
    },
    {
      id: 2,
      title: "Career Advice",
      icon: Briefcase,
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
    },
    {
      id: 3,
      title: "Interview Prep",
      icon: MessageSquare,
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
    },
    {
      id: 4,
      title: "ATS Optimization",
      icon: Target,
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
    },
    {
      id: 5,
      title: "Job Market",
      icon: TrendingUp,
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
    },
    {
      id: 6,
      title: "AI in Careers",
      icon: Sparkles,
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
    },
  ];

  return (
    <section className="bg-linear-to-b from-black/92 to-gray-900 relative min-h-screen py-24">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>
      <div className="w-full max-w-7xl mx-auto relative  mt-24">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold mb-2 text-white">
            Browse by{" "}
            <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Find articles tailored to your career journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                className="flex flex-col items-center justify-center p-6 bg-gray-950  rounded-xl border border-blue-700 hover:border-teal-500 hover:shadow-md transition-all duration-200 cursor-pointer group"
              >
                <div
                  className={` bg-blue-300 rounded-lg p-4 mb-4 group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon className={`w-6 h-6 ${category.iconColor}`} />
                </div>
                <h3 className="text-sm font-semibold text-gray-300 text-center">
                  {category.title}
                </h3>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
