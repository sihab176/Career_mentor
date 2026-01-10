"use client";
import CareerBot from "@/components/CareerBot";
import Footer from "@/components/Footer";
import Navbar from "@/shared/Navbar";
import React from "react";


const AiCareerChat = () => {

  return (
    <div className="bg-black/94">
      <div className=" ">
        <Navbar />
      </div>
      <div>
        <div >
          <CareerBot />
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default AiCareerChat;
