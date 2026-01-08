import React from "react";

const BlogHero = () => {
  return (
    <section>
      <div className="relative h-[470px] bg-[url('/teamimage.avif')] bg-cover bg-center bg-no-repeat">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The Career Struggle is Real
            </h1>
            <p className="text-gray-200 text-lg">
              Get personalized career advice, interview tips, and job search
              strategies from our AI mentor. Available 24/7 to guide your career
              journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
