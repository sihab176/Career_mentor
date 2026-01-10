"use client";
import BrowseByCategory from "@/components/BrowseByCategory";
import CareerMentorSection from "@/components/CareerMentorSection";
import Navbar from "@/shared/Navbar";
import React from "react";
import BlogHero from "./_components/BlogHero";
import Footer from "@/components/Footer";
import BlogSearchSection from "./_components/BlogSearchSection";
import CareerResource from "./_components/CareerResource";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const Blog = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <div>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <BlogHero />
          <BrowseByCategory />
          <CareerMentorSection />
          <BlogSearchSection />
          <CareerResource />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Blog;
