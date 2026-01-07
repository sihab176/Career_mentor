"use client"
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ProblemSection from "@/components/ProblemSection";
import ResumeScoring from "@/components/ResumeScoring";
import TestimonialSection from "@/components/TestimonialSection";
import TrustSection from "@/components/TrustSection";
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
       <ResumeScoring/>
       <HowItWorks/>
       <TestimonialSection/>
       <TrustSection/>
       <Footer/>
     </div>
     </div>
    </section>
  );
}
