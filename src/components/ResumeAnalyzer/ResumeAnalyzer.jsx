"use client";
import { useState } from "react";
import ResumeResultShower from "./ResumeResultShower";
import { FileText, User } from "lucide-react";
import Loader from "../Loader";

export default function ResumeAnalyzer() {
  const imgbbApiKey = "1b9dc072b95ad90044546f449af37a13";
  const [extractedText, setExtractedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  //! image upload to image BB ----------->
  const uploadToImgBB = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    console.log("imgbb response", data);

    if (!data.success) throw new Error("Image upload failed");

    return data.data.url;
  };

  //! --------------- haddle file to backend result----------------->
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    //! upload to imgbb
    const imgbbUrl = await uploadToImgBB(file);
    setImageUrl(imgbbUrl);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/analyze-resume-agent", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("result resume", result);
      setExtractedText(result); // এখানে আপনার টেক্সট চলে আসবে
    } catch (error) {
      console.error("Error extracting text:", error);
    } finally {
      setLoading(false);
    }
  };

  console.log("image url link ", imageUrl);

  return (
    <div className="bg-linear-to-br from-slate-50 to-blue-50 min-h-screen ">
      {/* header */}
      <header className="flex top-0 sticky z-10 bg-white items-center justify-between mb-8 px-6 py-3 border-b border-gray-200">
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
        {/* <input
          type="file"
          accept=".pdf"
          onChange={handleFileUpload}
          className="border p-10 bg-blue-400"
        /> */}
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-white hover:bg-gray-50 transition"
        >
          {/* Icon */}
          <svg
            className="w-12 h-12 text-blue-500 mb-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6L16 6a5 5 0 011 9.9M12 12v9m0 0l-3-3m3 3l3-3"
            />
          </svg>

          {/* Text */}
          <p className="text-gray-600 text-sm mb-1">
            <span className="font-semibold">Drag and drop files here</span>
          </p>
          <p className="text-gray-400 text-xs mb-4">or</p>

          {/* Button */}
          <span className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md">
            Browse Files
          </span>

          {/* Hidden Input */}
          <input
            id="file-upload"
            type="file"
            accept=".pdf"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>

        {loading && <Loader/> }

        <div className="mt-5">
          {/* <h3 className="font-bold">Extracted Text:</h3> */}
          {/* <pre className="whitespace-pre-wrap bg-gray-100 p-4 border">
            {extractedText}
          </pre> */}
        </div>
        <div>
          <ResumeResultShower imageUrl={imageUrl} extractedText={extractedText} />
        </div>
      </section>
    </div>
  );
}
