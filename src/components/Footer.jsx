"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Github, Linkedin, Sparkles, Twitter } from "lucide-react";


const Footer = () => {
  const footerRef = useRef(null);

  // useEffect(() => {
  //   gsap.fromTo(
  //     footerRef.current,
  //     { opacity: 0, y: 80 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1.2,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: footerRef.current,
  //         start: "top 85%",
  //       },
  //     }
  //   );
  // }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-linear-to-b from-black/92 to-gray-900 text-gray-300 px-6 md:px-16 py-16"
    >
      <div className="grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <Sparkles size={28} className=" text-linear-to-r from-teal-400 to-cyan-500 " />
            <h2 className="text-3xl font-bold bg-linear-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
            CareerMentor AI
          </h2>
          </div>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Build ATS-friendly resumes, get AI career guidance,  
            and land your dream job faster 🚀
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Product
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-teal-400 transition">Resume Builder</li>
            <li className="hover:text-teal-400 transition">Resume Analyzer</li>
            <li className="hover:text-teal-400 transition">Career Chatbot</li>
            <li className="hover:text-teal-400 transition">ATS Score</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Resources
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-teal-400 transition">Career Tips</li>
            <li className="hover:text-teal-400 transition">Interview Prep</li>
            <li className="hover:text-teal-400 transition">Job Roadmaps</li>
            <li className="hover:text-teal-400 transition">Blog</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Connect
          </h3>
          <div className="flex gap-4 text-2xl">
            <Linkedin className="hover:text-teal-400 hover:scale-110 transition cursor-pointer" />
            <Github className="hover:text-teal-400 hover:scale-110 transition cursor-pointer" />
            <Twitter className="hover:text-teal-400 hover:scale-110 transition cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-14 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} CareerMentor AI — Built for your future 💼
      </div>
    </footer>
  );
}

export default Footer