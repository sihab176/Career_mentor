"use client";
import { useState, useEffect, useRef } from "react";
import { TrendingUp, Users, Clock, Trophy } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function StatsSection() {
  
  const sectionRef = useRef(null);

  const stats = [
    {
      id: 1,
      value: "92%",
      label: "Resume Improvement",
      description: "Average score increase after AI optimization",
      icon: TrendingUp,
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      value: "3x",
      label: "More Interviews",
      description: "Interview callback rate improvement",
      icon: Users,
      color: "from-blue-500 to-cyan-50",
    },
    {
      id: 3,
      value: "48hrs",
      label: "Faster Responses",
      description: "Average time to first recruiter response",
      icon: Clock,
      color: "from-cyan-400 to-cyan-600",
    },
    {
      id: 4,
      value: "10K+",
      label: "Success Stories",
      description: "Professionals who landed their dream jobs",
      icon: Trophy,
      color: "from-blue-500 to-cyan-500",
    },
  ];

  useGSAP(()=>{
    gsap.from(".card-item",{
      opacity:0,
      y:60,
      duration:0.8,
      ease:"power3.out",
      stagger:0.25,
      scrollTrigger:{
        trigger:sectionRef.current,
        start:"top 70%"
      }
    })
  })



  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-linear-to-b from-black/92 to-gray-900 py-20 px-4 flex items-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 animate-fade-in not-[]:">
            PROVEN RESULTS
          </p>
          <h2 className="text-5xl md:text-500xl font-bold animate-fade-in text-white">
            Real{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              Impact
            </span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.id}
                className={`group transition-all duration-700 
                   opacity-100 translate-y-0 card-item
                `}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-full">
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-linear-to-r   group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                  />

                  {/* Card */}
                  <div className="relative  backdrop-blur-sm   p-8 text-center transition-all duration-500 hover:border-cyan-500/50 hover:transform hover:scale-105">
                    {/* Icon */}

                    {/* Value */}
                    <h3
                      className={`text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r ${stat.color}`}
                    >
                      {stat.value}
                    </h3>

                    {/* Label */}
                    <h4 className="text-xl font-semibold text-white mb-3">
                      {stat.label}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />
    </section>
  );
}
