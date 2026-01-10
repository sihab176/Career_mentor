"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HelpCircle, FileX, Compass } from "lucide-react";
import { SplitText } from "gsap/all";

const ProblemSection = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const firstMsgSplit = SplitText.create(".first-msg", {
        type: "words",
      });

      gsap.to(firstMsgSplit.words, {
        color: "#faeade",
        ease: "power1.in",
        stagger: 1,
        scrollTrigger: {
          trigger: ".message-content",
          start: "top center",
          end: "30% center",
          // markers: true,
          scrub: true,
        },
      });
      const paragraphTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".message-content",
          start: "top center",
          // markers:true,
          scrub: true,
        },
      });
      paragraphTl.to(".prg-text", {
        y: -30,
        opacity: 1,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
      });

        gsap.from(".career-card", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

  
    },

    { scope: containerRef }
  );

  const cards = [
    {
      title: "Career Confusion",
      desc: "Stuck at a crossroads with no clear direction. Job markets evolve faster than your strategy.",
      icon: <HelpCircle className="text-red-500 w-8 h-8" />,
    },
    {
      title: "Weak Resumes",
      desc: "Your resume gets filtered by ATS systems before human eyes ever see your potential.",
      icon: <FileX className="text-red-500 w-8 h-8" />,
    },
    {
      title: "No Guidance",
      desc: "Generic career advice doesn't cut it. You need personalized, AI-driven mentorship.",
      icon: <Compass className="text-red-500 w-8 h-8" />,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="message-content overflow-hidden z-50   bg-linear-to-b from-black/92 to-gray-900 text-white py-20 px-6 min-h-screen flex flex-col items-center justify-center"
    >
      {/* Header Section */}
      <div className="text-center mb-16">
        <h4 className="first-msg text-cyan-400 uppercase tracking-widest text-sm font-bold mb-4">
          The Challenge
        </h4>
        <h2 className="text-4xl md:text-6xl font-bold">
          The Career Struggle <br />{" "}
          <span className=" text-3xl md:text-5xl text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
            is Real
          </span>
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="career-card bg-[#111113] hover:shadow-xl hover:shadow-blue-600/20 border border-gray-800 p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-300 hover:border-gray-600 hover:scale-105"
          >
            <div className="bg-[#1a1a1c] p-4 rounded-xl mb-6 shadow-inner">
              {card.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
            <p className="text-gray-400 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemSection;
