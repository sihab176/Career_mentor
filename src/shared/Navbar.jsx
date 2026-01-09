"use client";

import { useEffect, useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data: session, status } = useSession();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/30 backdrop-blur-xl border-b border-border"
          : "bg-[#10101dea] border-b border"
      }`}
    >
      <div className="lg:container lg:mx-auto lg:px-6 px-4 text-white ">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl  flex items-center justify-center">
              <Sparkles
                size={28}
                className=" text-linear-to-r from-teal-400 to-cyan-500 "
              />
            </div>
            <h2 className="text-3xl font-bold bg-linear-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              CareerMentor AI
            </h2>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-blue-600" : ""
              } text-sm  hover:text-blue-700 transition-colors animated-underline`}
            >
              Home
            </Link>
            <Link
              href="/ai_ResumeAnalyzer"
              className={`${
                pathname === "/ai_ResumeAnalyzer" ? "text-blue-600" : ""
              } text-sm  hover:text-blue-700 transition-colors animated-underline`}
            >
              Resume Analyzer
            </Link>

            <Link
              href="/ai_career_chat"
              className={`${
                pathname === "/ai_career_chat" ? "text-blue-600" : ""
              } text-sm  hover:text-blue-700 transition-colors animated-underline`}
            >
              AI Career Chat
            </Link>

            <Link
              href="/blog"
              className={`${
                pathname === "/blog" ? "text-blue-600" : ""
              } text-sm  hover:text-blue-700 transition-colors animated-underline`}
            >
              Blog
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            {status === "authenticated" ? (
              <button
                onClick={() => signOut()}
                className="cursor-pointer bg-linear-to-r from-blue-800 to-cyan-500 text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
              >
                Log out
              </button>
            ) : (
              <Link
                href="/login"
                className="text-sm  hover:text-blue-700 transition-colors"
              >
                Log in
              </Link>
            )}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-up">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "text-blue-600" : ""
                } text-sm  hover:text-blue-700 transition-colors animated-underline`}
              >
                Home
              </Link>
              <Link
                href="/ai_ResumeAnalyzer"
                className={`${
                  pathname === "/ai_ResumeAnalyzer" ? "text-blue-600" : ""
                } text-sm  hover:text-blue-700 transition-colors animated-underline`}
              >
                Resume Analyzer
              </Link>

              <Link
                href="/ai_career_chat"
                className={`${
                  pathname === "/ai_career_chat" ? "text-blue-600" : ""
                } text-sm  hover:text-blue-700 transition-colors animated-underline`}
              >
                AI Career Chat
              </Link>

              <Link
                href="/blog"
                className={`${
                  pathname === "/blog" ? "text-blue-600" : ""
                } text-sm  hover:text-blue-700 transition-colors animated-underline`}
              >
                Blog
              </Link>
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <Link href="/login" className=" py-2">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
