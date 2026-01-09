
"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    gsap.timeline({ delay: 1 })
      .to(".hero-content", {
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
      })
      .to(
        ".hero-text-scroll",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.inOut",
        },
        "-=0.5"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 90,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5"
      );

    // 🔥 rotate ONLY inner wrapper
    gsap.to(".hero-rotate-wrapper", {
      rotate: 7,
      yPercent: 30,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".hero-rotate-wrapper",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <div className="hero-rotate-wrapper relative w-full h-full">

        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/c4e4rhpwnsrmw0cvfd79r3sm30_result_.mp4"
          autoPlay
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-black/20"></div>

        <div className="hero-content opacity-0 relative z-10 flex h-full items-center justify-center text-center text-white px-6 lg:py-0 md:pt-18">
          <div>
            <h1 className="hero-title text-blue-200 md:text-[3rem] lg:text-[5.5rem] text-[2.1rem] font-bold uppercase">
              Your AI Career Agent for
            </h1>

            <div
              style={{
                clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
              }}
              className="hero-text-scroll rotate-[-5deg] mb-12 border-[.5vw] border-black lg:w-[60vw] md:w-[60vw] md:mx-auto"
            >
              <div className="bg-blue-900 ">
                <h1 className="uppercase md:text-[3rem] lg:text-[5.5rem] text-[2.5rem] py-1">
                  Smarter Futures
                </h1>
              </div>
            </div>

            <p className="mt-12 lg:text-sm  text-[11px] max-w-2xl mx-auto text-gray-200">
              Transform your career trajectory with intelligent resume analysis,
              personalized AI mentorship, and data-driven guidance that gets you
              hired faster.
            </p>

            <div className="flex gap-4 justify-center mt-8">
              <button className="bg-blue-900 px-10 lg:py-3 py-2 rounded-full">
                Get Started
              </button>
              <button className="border border-white/30 px-8 lg:py-3 py-2 rounded-full">
                Learn More
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
