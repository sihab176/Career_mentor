"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

const TrustSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const features = [
    {
      id: 1,
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6m9-9h-6m-6 0H3" />
        </svg>
      ),
      title: "Advanced LLMs",
      description:
        "Powered by cutting-edge language models trained on millions of career data points.",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Enterprise Security",
      description:
        "SOC 2 Type II compliant with bank-level encryption for all your data.",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
      ),
      title: "Private by Design",
      description:
        "Your resume and conversations are never used to train AI models.",
    },
    {
      id: 4,
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 3v4M8 3v4M2 11h20" />
        </svg>
      ),
      title: "Real-Time Processing",
      description:
        "Instant analysis powered by distributed cloud infrastructure.",
    },
    {
      id: 5,
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        </svg>
      ),
      title: "Secure Storage",
      description:
        "Data encrypted at rest and in transit with automatic backups.",
    },
    {
      id: 6,
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: "Access Control",
      description:
        "Multi-factor authentication and granular permission controls.",
    },
  ];
  
  // useGSAP(
  //   () => {
  //     gsap.from(".step-card", {
  //       opacity: 0,
  //       y: 60,
  //       duration: 0.8,
  //       ease: "power3.out",
  //       stagger: 0.25,
  //       scrollTrigger: {
  //         trigger: containerRef.current,
  //         start: "top 70%",
  //       },
  //     });
  //   },
  //   { scope: containerRef }
  // );

   
  useGSAP(()=>{
    gsap.from(".trust-section-card",{
      opacity:0,
      y:60,
      duration:0.8,
      ease: "power3.out",
      stagger:0.25,
      scrollTrigger:{
        trigger:sectionRef.current,
        start:"top 70%"
      }
    })
  })

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black py-20 px-4 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            TECHNOLOGY & SECURITY
          </p>
          <h2 className="text-5xl md:text-5xl font-bold mb-6 text-white">
            Built for{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">
              Trust
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Enterprise-grade security and cutting-edge AI technology working
            together to protect your data while delivering exceptional results.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="trust-section-card group relative"
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card glow effect */}
              <div
                className={`absolute inset-0 bg-linear-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl transition-opacity duration-500 ${
                  hoveredCard === feature.id ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Card */}
              <div className="relative h-full bg-linear-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 transition-all duration-500 hover:border-cyan-500/50 hover:transform hover:scale-105">
                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded mb-6 transition-all duration-500 ${
                    hoveredCard === feature.id
                      ? " text-white scale-110"
                      : "bg-gray-800/50 text-cyan-400"
                  }`}
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-cyan-400">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-b-2xl transition-all duration-500 ${
                    hoveredCard === feature.id ? "w-full" : "w-0"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />
    </section>
  );
};

export default TrustSection;
