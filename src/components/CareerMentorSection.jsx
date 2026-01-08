"use client";
import { useState } from "react";
import { Briefcase, Send, ArrowRight, Check, Sparkles } from "lucide-react";

const CareerMentorSection = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log("Message sent:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section className=" bg-linear-to-b from-black/91 to-gray-900 min-h-screen py-24">
      <div className="w-full max-w-7xl    mx-auto mt-10">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">
          Chat with Career{" "}
          <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Mentor AI
          </span>
        </h1>
        <p className="text-gray-400 text-sm text-center max-w-2xl mx-auto">
          Get personalized career advice, interview tips, and job search
          strategies from our AI mentor. Available 24/7 to guide your career
          journey.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-16">
          {/* Content - Left Side */}
          <div className="bg-gray-950 rounded-2xl shadow-lg border border-blue-700 p-8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-blue-700">
              <div className="bg-blue-900 rounded-full p-3">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-100">
                  Career Mentor AI
                </h3>
                <p className="text-sm text-gray-500">Online now</p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="space-y-4 mb-6">
              {/* AI Message */}
              <div className="flex gap-3">
                <div className="bg-gray-600 rounded-full p-2 h-fit">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-4 max-w-[85%] mb-6 mt-3">
                  <p className="text-gray-800 text-sm">
                    Hi! I'm your AI Career Mentor. How can I help you today?
                  </p>
                </div>
              </div>

              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-gray-700 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] mb-6">
                  <p className="text-white text-sm">
                    I want to transition from marketing to product management.
                    Where should I start?
                  </p>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="fdgdg"
                className="w-full px-4 py-3 pr-12 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary text-white rounded"
              />
              <button
                onClick={handleSend}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-900 hover:bg-blue-950 text-white rounded-lg p-2 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content - Right Side */}
          <div>
            {/* AI-Powered Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              AI-Powered
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold text-gray-200 mb-4">
              Your Personal Career Mentor
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Get personalized career advice, interview tips, and job search
              strategies from our AI mentor. Available 24/7 to guide your career
              journey.
            </p>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-teal-100 rounded-full p-1 mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-gray-700">
                  Personalized career path recommendations
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-teal-50 rounded-full p-1 mt-0.5">
                  <Check className="w-4 h-4 text-teal-600" />
                </div>
                <p className="text-gray-700">
                  Interview preparation & mock questions
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-teal-50 rounded-full p-1 mt-0.5">
                  <Check className="w-4 h-4 text-teal-600" />
                </div>
                <p className="text-gray-700">
                  Resume feedback & improvement tips
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-teal-50 rounded-full p-1 mt-0.5">
                  <Check className="w-4 h-4 text-teal-600" />
                </div>
                <p className="text-gray-700">
                  Industry insights & salary benchmarks
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-primary hover:opacity-90 text-white font-semibold px-6 py-3 rounded flex items-center gap-2 transition-colors">
              Ask Career Mentor AI
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerMentorSection;
