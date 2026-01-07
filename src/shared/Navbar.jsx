"use client";

import { useEffect, useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data: session, status } = useSession();

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
      <div className="container mx-auto px-6 text-white">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">CareerAI</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["Features", "Pricing", "About", "Blog"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors animated-underline"
              >
                {item}
              </a>
            ))}
            <Link
              href="/ai_career_chat"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors animated-underline"
            >
              AI Career Chat
            </Link>
            <Link
              href="/ai_ResumeAnalyzer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors animated-underline"
            >
              Resume Analyzer
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            {status === "authenticated" ? (
              <button onClick={() => signOut()} className="cursor-pointer">
                Log out
              </button>
            ) : (
              <Link
                href="/login"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Log in
              </Link>
            )}
            <button>Get Started</button>
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
              {["Features", "Pricing", "About", "Blog"].map((item) => (
                <a key={item} href="#" className="py-2">
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <Link href="/login" className="text-muted-foreground py-2">
                  Log in
                </Link>
                <button>Get Started</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
