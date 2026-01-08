import React, { useState } from "react";
import {
  FileText,
  User,
  GraduationCap,
  Briefcase,
  TrendingUp,
  TrendingDown,
  Zap,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";

const ResumeResultShower = ({ imageUrl, extractedText }) => {
  const [activeTab, setActiveTab] = useState("analysis");

  console.log("data to show--", extractedText);
  return (
    <>
      {extractedText && (
        <div className="mt-5 ">
          <div className="pb-20">
            {/* Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - Analysis Cards */}
              <div className="space-y-6">
                {/*//! ats score */}
                <div className="bg-[#0d101dc0] rounded-2xl p-6 shadow-sm shadow-blue-500">
                  <h3 className=" font-medium text-gray-100 mb-3">
                    ATS Compatibility Score
                  </h3>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-5xl font-bold text-gray-400">
                      {extractedText?.ats_compatibility_score || 0}
                    </span>
                    {/* <span className="text-2xl text-gray-400 mb-2">/100</span> */}
                  </div>
                  <span className="inline-block px-3 py-1 bg-green-300 text-green-700 rounded-full text-sm font-medium">
                    Excellent!
                  </span>
                  <p className="text-sm text-gray-500 mt-3">
                    Your resume is strong, but there are a few areas to refine.
                  </p>
                </div>

                {/*Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/*//!  Overall Score */}
                  <div className="bg-[#0d101dc0] rounded-2xl p-6 shadow-sm shadow-blue-500">
                    <h3 className=" font-medium text-gray-100 mb-3">
                      Overall Score
                    </h3>
                    <div className="text-4xl font-bold text-gray-400 mb-2">
                      {extractedText?.overall_score || 0}
                    </div>
                    <p className="text-xs text-gray-500">
                      Impactful information is covered
                    </p>
                  </div>

                  {/*//! messing sections  */}
                  <div className="bg-[#0d101dee] rounded-2xl p-6 shadow-sm shadow-blue-500">
                    <h3 className=" font-medium text-gray-100 mb-3">
                      Keywords Used
                    </h3>
                    <div className="text-4xl font-bold text-gray-400 mb-2">
                      {extractedText?.keywords_found?.length || 0}
                    </div>
                    <p className="text-xs text-gray-500">
                      Strong mix of previous work experience
                    </p>
                  </div>
                </div>

                {/*//todo: weekness  */}
                <div className="bg-[#0d101dc0] rounded-2xl p-6 shadow-sm shadow-blue-500">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingDown className="w-5 h-5 text-red-500" />
                    <h3 className="text-lg font-semibold text-gray-50">
                      Weaknesses of Your Resume
                    </h3>
                  </div>

                  {extractedText?.weaknesses && (
                    <div className="space-y-4">
                      {extractedText.weaknesses.map((weakness, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-red-500 pl-3 "
                        >
                          <h4 className="font-medium text-gray-200 text-xl mb-1">
                           {String(index + 1).padStart(2, "0")}
                          </h4>
                          <p className="text-sm text-gray-400">{weakness}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {/* Strengths Points */}
                <div className="bg-[#0d101dc0] rounded-2xl p-6 shadow-sm shadow-blue-500">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-50">
                      Strengths Points of Your Resume
                    </h3>
                  </div>

                  {extractedText?.strengths && (
                    <div className="space-y-4">
                      {extractedText.strengths.map((strength, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-green-500 pl-3"
                        >
                          <h4 className="font-medium text-gray-200 mb-1">
                            {String(index + 1).padStart(2, "0")}
                          </h4>
                          <p className="text-sm text-gray-400">{strength}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column - Resume Preview */}
              {!imageUrl && (
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <div className="aspect-[8.5/11] bg-linear-to-br  from-gray-900 via-orange-900 to-gray-800 relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-linear-to-t  from-black/50 to-transparent"></div>

                    <div className="relative w-48 h-48">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-linear-to-br from-orange-400 to-red-400 rounded-full blur-2xl opacity-80"></div>

                      <svg viewBox="0 0 200 200" className="relative z-10">
                        <path
                          d="M 0,150 L 80,80 L 100,100 L 120,70 L 200,150 Z"
                          fill="#2d1810"
                          opacity="0.9"
                        />
                        <path
                          d="M 30,150 L 100,90 L 170,150 Z"
                          fill="#3d2410"
                          opacity="0.8"
                        />
                      </svg>
                    </div>

                    <div
                      className="absolute"
                      style={{ top: "45%", left: "55%" }}
                    >
                      <div className="w-6 h-6 bg-white rounded-full shadow-lg"></div>
                      <div className="absolute top-0 left-0 w-6 h-6 bg-white rounded-full animate-ping opacity-75"></div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t  from-black/60 to-transparent">
                      <div className="flex items-center justify-between text-white text-sm">
                        <span className="opacity-75">Resume Document</span>
                        <span className="opacity-75">Page 1 of 1</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {imageUrl && (
                <div className="h-fit sticky top-20">
                  <Image
                    src={imageUrl}
                    alt="Resume"
                    width={800}
                    height={1100}
                  />
                </div>
              )}
            </div>
            {/* tips section */}
            <div className="bg-[#0d101dc0] rounded-2xl p-6 shadow-sm mt-6 shadow-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                <h3 className="text-lg font-semibold text-gray-50">
                  Weaknesses of Your Resume
                </h3>
              </div>

                  {extractedText?.suggestions && (
                    <div className="space-y-4">
                      {extractedText.suggestions.map((suggestion, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-yellow-500 pl-3"
                        >
                          <h4 className="font-medium text-gray-200 mb-1">
                            {String(index + 1).padStart(2, "0")}
                          </h4>
                          <p className="text-sm text-gray-400">{suggestion}</p>
                        </div>
                      ))}
                    </div>
                  )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeResultShower;
