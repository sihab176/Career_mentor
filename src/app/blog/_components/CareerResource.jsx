"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowRight, Sparkles, Zap, Star } from 'lucide-react';
import { useRef } from 'react';

const CareerResource=()=> {

  const sectionRef = useRef(null);
    useGSAP(()=>{
       gsap.from(".build-card", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",

        },
      });
  })

  return (
    <div ref={sectionRef}  className="min-h-screen  bg-linear-to-br from-black via-black/91 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">

        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-4xl font-bold mb-6 leading-tight">
            Build amazing things faster 
            <br />
            <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              than ever
            </span>
          </h1>
          <p className=" text-gray-300 max-w-3xl mx-auto mb-12">
            The most powerful platform to create, collaborate, and ship your next project with incredible speed and precision.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className=" build-card  p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-400">
              Experience blazing fast performance with optimized code and infrastructure.
            </p>
          </div>

          <div className="build-card  p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Beautiful Design</h3>
            <p className="text-gray-400">
              Stunning user interfaces that delight your users and elevate your brand.
            </p>
          </div>

          <div className="build-card  p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
            <p className="text-gray-400">
              Intuitive tools and workflows that make complex tasks simple and enjoyable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerResource