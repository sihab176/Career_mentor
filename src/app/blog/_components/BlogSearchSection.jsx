"use client";

const BlogSearchSection = () => {
  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-4xl font-bold text-white mb-4">
          Find What You're{" "}
          <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Looking For
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-gray-400 text-lg mb-10">
          Search through hundreds of career articles, guides, and resources
        </p>

        {/* Search Box */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button className="px-8 py-4  rounded bg-primary text-white font-semibold hover:opacity-90 transition">
            Search
          </button>
        </div>

        {/* Popular Tags */}
        <div className="mt-8 text-sm text-gray-400">
          <span className="mr-2">Popular:</span>

          <span className="text-primary hover:underline cursor-pointer mr-3">
            Resume tips
          </span>
          <span className="text-primary hover:underline cursor-pointer mr-3">
            Interview questions
          </span>
          <span className="text-primary hover:underline cursor-pointer mr-3">
            Career change
          </span>
          <span className="text-primary hover:underline cursor-pointer">
            ATS optimization
          </span>
        </div>
      </div>
    </section>
  );
};

export default BlogSearchSection;
