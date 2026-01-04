"use client"
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import Navbar from "@/shared/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
export default function Home() {
  
    useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <section>
      <Navbar/>
     <div id="smooth-wrapper">
      <div id="smooth-content">
       <Hero/>
       <ProblemSection/>
      <div className=" px-6 h-screen flex items-center bg-sky-500">
        <h1 className="text-4xl font-bold">Career Mentor AI</h1>
      </div>
      <div className=" px-6 h-screen flex items-center bg-amber-500">
        <h1 className="text-4xl font-bold">Career Mentor AI</h1>
      </div>
     </div>
     </div>
    </section>
  );
}
