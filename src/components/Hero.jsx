// "use client";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { SplitText } from "gsap/all";
// import React from "react";

// const Hero = () => {
//   useGSAP(() => {
//     const tilteSplit = SplitText.create(".hero-title", {
//       type: "chars",
//     });
//     const tl = gsap.timeline({
//       delay: 1,
//     });
//     tl.to(".hero-content", {
//       opacity: 1,
//       y: 0,
//       ease: "power1.inOut",
//     })
//       .to(
//         ".hero-text-scroll",
//         {
//           duration: 1,
//           clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%",
//           ease: "circ.inOut",
//         },
//         "-=0.5"
//       )
//       .from(
//         tilteSplit.chars,
//         {
//           yPercent: 90,
//           stagger: 0.02,
//           ease: "power2.out",
//           opacity: 1,
//         },
//         "-=0.5"
//       );
//     const heroTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".hero-container",
//         start: "1% top",
//         end: "bottom top",
//         scrub: true,
//       },
//     });
//     heroTl.to(".hero-container", {
//       rotate: 7,
//       scale: 1,
//       yPercent: 30,
//       ease: "power1.inOut",
//     });
//   });

//   return (
//     <section className="hero-container  h-screen w-fll relative overflow-visible z-0 bg-black">
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/c4e4rhpwnsrmw0cvfd79r3sm30_result_.mp4"
//         autoPlay
//         muted
//         playsInline
//       />
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/20"></div>

//       {/* Content */}
//       <div className=" hero-content opacity-0 relative z-10 flex h-full items-center justify-center text-center text-white px-6">
//         <div className="">
//           <h1 className="hero-title text-blue-200 2xl:text-[8.5rem] md:text-[5.6rem] text-[3.3rem] font-bold uppercase leading-[9vw] tracking-[-.35vw] 2xl:mb-0">
//             Your AI Career Agent for
//           </h1>
//           <div
//             style={{
//               clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
//             }}
//             className="hero-text-scroll rotate-[-5deg] mb-12 border-[.5vw] border-black"
//           >
//             <div className="bg-blue-900">
//               <h1 className=" uppercase  md:text-[5.5rem] py-1">
//                 Smarter Futures
//               </h1>
//             </div>
//           </div>
//           <p className="mt-12 text-sm text-gray-200 max-w-2xl">
//             Transform your career trajectory with intelligent resume analysis,
//             personalized AI mentorship, and data-driven guidance that gets you
//             hired faster.
//           </p>
//           {/* buttons */}
//           <div className="flex gap-4 justify-center mt-8">
//             <button className="bg-blue-900 hover:bg-blue-950 hover:scale-105 hover:shadow-md hover:shadow-blue-800 cursor-pointer duration-300 transition-transform rounded-full  text-white font-semibold py-3 px-10 ">
//               Get Started
//             </button>
//             <button className="bg-transparent hover:bg-white/10 hover:scale-105  hover:shadow-md hover:shadow-blue-800 transition-transform cursor-pointer   text-white font-semibold py-3 px-8 rounded-full border border-white/30 ">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


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

        <div className="hero-content opacity-0 relative z-10 flex h-full items-center justify-center text-center text-white px-6">
          <div>
            <h1 className="hero-title text-blue-200 text-[3.3rem] md:text-[5.6rem] 2xl:text-[8.5rem] font-bold uppercase">
              Your AI Career Agent for
            </h1>

            <div
              style={{
                clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
              }}
              className="hero-text-scroll rotate-[-5deg] mb-12 border-[.5vw] border-black"
            >
              <div className="bg-blue-900">
                <h1 className="uppercase md:text-[5.5rem] py-1">
                  Smarter Futures
                </h1>
              </div>
            </div>

            <p className="mt-12 text-sm max-w-2xl mx-auto text-gray-200">
              Transform your career trajectory with intelligent resume analysis,
              personalized AI mentorship, and data-driven guidance that gets you
              hired faster.
            </p>

            <div className="flex gap-4 justify-center mt-8">
              <button className="bg-blue-900 px-10 py-3 rounded-full">
                Get Started
              </button>
              <button className="border border-white/30 px-8 py-3 rounded-full">
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
