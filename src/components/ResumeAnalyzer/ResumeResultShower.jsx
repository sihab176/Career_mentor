import React, { useState } from 'react';
import { FileText, User, GraduationCap, Briefcase, TrendingUp } from 'lucide-react';

const ResumeResultShower=()=> {
  const [activeTab, setActiveTab] = useState('analysis');

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-7xl mx-auto">

        {/* Tab Navigation */}
        {/* <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('analysis')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === 'analysis'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            AI Analysis Results
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === 'preview'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Resume Preview
          </button>
        </div> */}

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Analysis Cards */}
          <div className="space-y-6">
            {/* Overall Score Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-3">Overall Score</h3>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-5xl font-bold text-gray-900">85</span>
                <span className="text-2xl text-gray-400 mb-2">/100</span>
              </div>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Excellent!
              </span>
              <p className="text-sm text-gray-500 mt-3">
                Your resume is strong, but there are a few areas to refine.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Content Hits */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-medium text-gray-500 mb-3">Content Hits</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">85%</div>
                <p className="text-xs text-gray-500">
                  Impactful information is covered
                </p>
              </div>

              {/* Experience */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-medium text-gray-500 mb-3">Experience</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">88%</div>
                <p className="text-xs text-gray-500">
                  Strong mix of previous work experience
                </p>
              </div>

              {/* Education */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-medium text-gray-500 mb-3">Education</h3>
                <div className="text-4xl font-bold text-amber-500 mb-2">70%</div>
                <p className="text-xs text-gray-500">
                  2 out of 3 additions match
                </p>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-medium text-gray-500 mb-3">Skills</h3>
                <div className="text-4xl font-bold text-red-500 mb-2">60%</div>
                <p className="text-xs text-gray-500">
                  You can list specific skills
                </p>
              </div>
            </div>

            {/* Tips for Improvement */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Tips for Improvement</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-medium text-gray-900 mb-1">Quantify Achievements</h4>
                  <p className="text-sm text-gray-600">
                    Use numbers and metrics to show the extent of your impact in previous roles.
                  </p>
                </div>

                <div className="border-l-4 border-amber-500 pl-4 py-2">
                  <h4 className="font-medium text-gray-900 mb-1">Showcase Certifications</h4>
                  <p className="text-sm text-gray-600">
                    If you have industry certifications, be sure to list them in a dedicated section.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h4 className="font-medium text-gray-900 mb-1">Action Verbs</h4>
                  <p className="text-sm text-gray-600">
                    Start bullet points with strong action verbs to make your contributions stand out.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Resume Preview */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="aspect-[8.5/11] bg-gradient-to-br from-gray-900 via-orange-900 to-gray-800 relative flex items-center justify-center">
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Mountain/Geometric Shape */}
              <div className="relative w-48 h-48">
                {/* Circular background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-orange-400 to-red-400 rounded-full blur-2xl opacity-80"></div>
                
                {/* Mountain peaks */}
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

              {/* Cursor indicator */}
              <div className="absolute" style={{ top: '45%', left: '55%' }}>
                <div className="w-6 h-6 bg-white rounded-full shadow-lg"></div>
                <div className="absolute top-0 left-0 w-6 h-6 bg-white rounded-full animate-ping opacity-75"></div>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <div className="flex items-center justify-between text-white text-sm">
                  <span className="opacity-75">Resume Document</span>
                  <span className="opacity-75">Page 1 of 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeResultShower