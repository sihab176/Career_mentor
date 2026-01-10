"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const BlogHero = () => {
  const sectionRef= useRef(null)

    useGSAP(() => {
      gsap.from(".header-text", {
        opacity: 0, // প্রথমে invisible
        y: 0, // Y movement 0, মাঝখান থেকে উঠবে
        scale: 0.1, // একটু ছোট হবে প্রথমে
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%", // screen এ section যখন 70% এ আসবে
        },
      });
       gsap.from(".header-text-p", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    });

  return (
    <section>
      <div ref={sectionRef} className="relative h-[470px] bg-[url('/teamimage.avif')]  bg-cover bg-center bg-no-repeat">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 ">
          <div className="text-center max-w-2xl mt-24">
            <h1 className="header-text text-4xl md:text-5xl font-bold text-white mb-6">
              The Career Struggle is Real
            </h1>
            <p className="header-text-p text-gray-400 text-sm" >
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
