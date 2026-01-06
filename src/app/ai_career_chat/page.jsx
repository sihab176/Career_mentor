import CareerBot from "@/components/CareerBot";
import Navbar from "@/shared/Navbar";
import React from "react";

const AiCareerChat = () => {
  return (
    <div className="bg-black/94">
      <div className="border-b border bg-amber-500 ">
        <Navbar />
      </div>
      <CareerBot />
    </div>
  );
};

export default AiCareerChat;
