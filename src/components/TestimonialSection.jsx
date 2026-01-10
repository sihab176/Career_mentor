"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useEffect, useRef } from "react";

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      quote:
        "I was skeptical about AI career tools, but CareerAI delivered. My resume score went from 54 to 91, and I landed my dream job within a month.",
      name: "Emily Rodriguez",
      title: "Data Scientist at Netflix",
      avatar: "E",
      color: "bg-blue-500",
    },
    {
      id: 2,
      quote:
        "The AI-powered resume optimization was a game changer. I received interview calls from 5 Fortune 500 companies within two weeks of using CareerAI.",
      name: "Michael Chen",
      title: "Senior Software Engineer at Google",
      avatar: "M",
      color: "bg-purple-500",
    },
    {
      id: 3,
      quote:
        "CareerAI helped me transition from teaching to tech. The personalized career guidance and resume building tools were exactly what I needed to make the switch.",
      name: "Sarah Johnson",
      title: "Product Manager at Microsoft",
      avatar: "S",
      color: "bg-cyan-500",
    },
    {
      id: 4,
      quote:
        "I've used many career tools before, but none come close to CareerAI. The insights were spot-on and helped me negotiate a 40% salary increase.",
      name: "David Park",
      title: "UX Designer at Apple",
      avatar: "D",
      color: "bg-green-500",
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useGSAP(() => {
    gsap.from(".testimonial-card", {
      opacity: 0, // প্রথমে invisible
      y: 0, // Y movement 0, মাঝখান থেকে উঠবে
      scale: 0.1, // একটু ছোট হবে প্রথমে
      duration: 2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%", // screen এ section যখন 70% এ আসবে
      },
    });
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black/94 py-20 px-4 flex items-center"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            SUCCESS STORIES
          </p>
          <h2 className="text-5xl md:text-5xl font-bold text-white">
            What Our Users{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              Say
            </span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative testimonial-card ">
          <div className="bg-linear-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-5 md:p-6 min-h-[300px] flex flex-col justify-between transition-all duration-500">
            {/* Quote Icon */}
            <div className="mb-8">
              <svg
                className="w-16 h-16 text-cyan-500/30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>

            {/* Testimonial Content */}
            <div
              className={`flex-1 transition-opacity duration-500 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <p className="text-white text-xl md:text-xl leading-relaxed mb-8">
                "{testimonials[currentSlide].quote}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-full ${testimonials[currentSlide].color} flex items-center justify-center text-white text-xl font-bold`}
                >
                  {testimonials[currentSlide].avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[currentSlide].title}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 flex gap-3 mt-16">
              <button
                onClick={prevSlide}
                disabled={isAnimating}
                className="w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:bg-gray-700/50 hover:text-white hover:border-cyan-500/50 transition-all duration-300 disabled:opacity-50"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                disabled={isAnimating}
                className="w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:bg-gray-700/50 hover:text-white hover:border-cyan-500/50 transition-all duration-300 disabled:opacity-50"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isAnimating}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? "w-8 h-2 bg-cyan-500"
                      : "w-2 h-2 bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Card glow effect */}
          <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-blue-600/10 rounded-3xl blur-2xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
