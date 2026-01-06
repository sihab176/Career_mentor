"use client";
import React from "react";

const Loader = () => {
  const bars = Array.from({ length: 12 }, (_, index) => {
    const rotation = index * 30;
    const delay = -(1.1 - index * 0.1);
    return (
      <div
        key={index}
        className="absolute w-[8%] h-[24%] bg-gray-500 rounded-full shadow-[0_0_3px_rgba(0,0,0,0.2)] animate-[fade458_1s_linear_infinite]"
        style={{
          left: "50%",
          top: "30%",
          transform: `rotate(${rotation}deg) translate(0, -130%)`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return (
    <div className="flex justify-center mt-26 items-center">
      <div className="relative w-[54px] h-[54px] rounded-[10px] ">
        {bars}
        <style jsx>{`
          @keyframes fade458 {
            from {
              opacity: 1;
            }
            to {
              opacity: 0.25;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Loader;