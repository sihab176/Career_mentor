"use client";
import { useState } from "react";
import ResumeResultShower from "./ResumeResultShower";
import { FileText, User } from "lucide-react";

export default function ResumeAnalyzer() {
  const [extractedText, setExtractedText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/analyze-resume-agent", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("result resume", result);
      setExtractedText(result.text); // এখানে আপনার টেক্সট চলে আসবে
    } catch (error) {
      console.error("Error extracting text:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="flex items-center justify-between mb-8 px-6 py-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-semibold text-gray-800">
            AI Resume Analyzer
          </h1>
        </div>
        <button className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center hover:shadow-md transition-shadow">
          <User className="w-5 h-5 text-gray-600" />
        </button>
      </header>
      <section className=" max-w-7xl mx-auto ">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileUpload}
          className="border p-10 bg-blue-400"
        />
        {loading && <p>Processing Resume...</p>}

        <div className="mt-5">
          {/* <h3 className="font-bold">Extracted Text:</h3> */}
          {/* <pre className="whitespace-pre-wrap bg-gray-100 p-4 border">
            {extractedText}
          </pre> */}
        </div>
        <div>
          <ResumeResultShower />
        </div>
      </section>
    </div>
  );
}
