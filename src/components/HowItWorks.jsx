import { Upload, Brain, Target, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: '01',
      icon: Upload,
      title: 'Upload Resume',
      description: 'Drop your resume in any format — PDF, DOCX, or paste your LinkedIn URL.'
    },
    {
      id: '02',
      icon: Brain,
      title: 'AI Analysis',
      description: 'Our AI scans 50+ criteria including ATS compatibility, keywords, and formatting.'
    },
    {
      id: '03',
      icon: Target,
      title: 'Get Insights',
      description: 'Receive a detailed score with actionable recommendations to improve.'
    },
    {
      id: '04',
      icon: Rocket,
      title: 'Land Interviews',
      description: 'Apply with confidence and watch your interview callbacks multiply.'
    }
  ];

  return (
    <section className="bg-gray-950 py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-3">
            SIMPLE PROCESS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How It <span className="text-blue-500">Works</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Step Card */}
              <div className="flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full bg-gray-800 flex items-center justify-center relative">
                    <step.icon className="w-12 h-12 text-cyan-400" strokeWidth={1.5} />
                    
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.id}</span>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gray-700 -translate-y-1/2" 
                         style={{ width: 'calc(100% + 2rem)' }} />
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;