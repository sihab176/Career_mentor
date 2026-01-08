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
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          Browse by Category
        </h2>
        <p className="text-gray-600 text-lg">
          Find articles tailored to your career journey
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all duration-200 cursor-pointer group"
            >
              <div
                className={`${category.bgColor} rounded-lg p-4 mb-4 group-hover:scale-110 transition-transform duration-200`}
              >
                <Icon className={`w-6 h-6 ${category.iconColor}`} />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 text-center">
                {category.title}
              </h3>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BrowseByCategory;
