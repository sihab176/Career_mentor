import {
  Upload,
  Zap,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  TrendingDown,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useRef } from "react";

const ResumeScoring = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".resume-scoring", {
      opacity: 0,
      x: -90,
      duration: 2,
      delay: 0.5,
      ease: "power3.out",
      stagger: 0.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",

      },
    });
    gsap.from(".features", {
      opacity: 0,
      x: 90,
      duration: 2.5,
      ease: "power3.out",
      stagger: 0.35,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
      },
    });
  });

  return (
    <div
      ref={containerRef}
      className=" min-h-screen bg-black text-white py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-wider mb-4">
            RESUME INTELLIGENCE
          </p>
          <h1 className="text-5xl font-bold mb-6">
            AI-Powered <br />
            <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Resume Scoring
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Upload your resume and get instant AI analysis with actionable
            insights to beat ATS systems and stand out to recruiters.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Score Card */}
          <div className="resume-scoring bg-linear-to-br shadow-sky-700 hover:shadow-xl from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800">
            {/* Circular Score */}
            <div className="flex justify-center mb-12 ">
              <div className="relative w-64 h-64">
                <svg className="transform -rotate-90 w-64 h-64">
                  <circle
                    cx="128"
                    cy="128"
                    r="100"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="16"
                    fill="none"
                  />
                  <circle
                    cx="128"
                    cy="128"
                    r="100"
                    stroke="url(#gradient)"
                    strokeWidth="16"
                    fill="none"
                    strokeDasharray="628"
                    strokeDashoffset="80"
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-6xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    87
                  </div>
                  <div className="text-gray-400 text-sm">out of 100</div>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span>ATS Compatibility</span>
                </div>
                <span className="text-cyan-400 font-semibold">92%</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-purple-400" />
                  <span>Skills Gap Found</span>
                </div>
                <span className="text-purple-400 font-semibold">3</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  <span>Market Fit</span>
                </div>
                <span className="text-cyan-400 font-semibold">High</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="features bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-400/10 p-3 rounded-lg">
                  <Upload className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Instant Upload</h3>
                  <p className="text-gray-400 text-sm">
                    Drag and drop your resume in any format. Our AI processes it
                    in seconds.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="features bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 hover:border-purple-400/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-purple-400/10 p-3 rounded-lg">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Deep Analysis</h3>
                  <p className="text-gray-400 text-sm">
                    Get detailed scoring across 50+ criteria including ATS
                    optimization, keyword density, and formatting.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="features bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-400/10 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Actionable Insights
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Get personalized recommendations to boost your resume score
                    and stand out to recruiters.
                  </p>
                </div>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="features bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 hover:border-red-400/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-400/10 p-3 rounded-lg">
                  <TrendingDown className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {" "}
                    Weakness Analysis{" "}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Identify and address weaknesses in your resume to improve
                    your chances of landing interviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeScoring;
