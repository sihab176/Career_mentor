
// //TODO ; this is the write  file to pdf to text .

// import { NextResponse } from 'next/server';

// // এখানে 'pdf-parse-fork' ব্যবহার করা হয়েছে যা DOMMatrix এরর দেবে না
// import pdf from 'pdf-parse-fork';

// export async function POST(req) {
//   try {
//     const formData = await req.formData();
//     const file = formData.get('file');

//     if (!file) {
//       return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
//     }

//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);

//     // PDF থেকে টেক্সট এক্সট্র্যাক্ট করুন
//     // pdf-parse-fork এ default export বা সরাসরি ফাংশন হিসেবে কাজ করে
//     const data = await pdf(buffer);

//     return NextResponse.json({ 
//       text: data.text,
//       info: data.info, // ঐচ্ছিক: ফাইলের মেটাডেটা
//       numpages: data.numpages 
//     });
    
//   } catch (error) {
//     console.error("Extraction Error:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }  

import { NextResponse } from 'next/server';
import pdf from 'pdf-parse-fork';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Gemini কনফিগারেশন
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // ১. PDF থেকে টেক্সট বের করা
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const pdfData = await pdf(buffer);
    const resumeText = pdfData.text;

    // ২. Gemini-এর জন্য প্রম্পট (Prompt) তৈরি করা
    const model = genAI.getGenerativeModel({ model: "models/gemini-flash-latest" });

    const prompt = `
      You are an expert ATS (Applicant Tracking System) and HR professional. 
      Analyze the following resume text and provide a detailed evaluation in JSON format.
      
      The response must strictly follow this structure:
      {
        "overall_score": "Score out of 10",
        "strengths": ["list of strengths"],
        "weaknesses": ["list of weaknesses"],
        "suggestions": ["list of improvement tips"],
        "missing_sections": ["list of missing parts like portfolio, LinkedIn, etc."],
        "keywords_found": ["skills and technologies identified"],
        "ats_compatibility_score": "Score out of 10"
      }

      Resume Text:
      ${resumeText}
    `;

    // ৩. Gemini থেকে রেসপন্স নেওয়া
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let analysisText = response.text();

    // অনেক সময় Gemini ব্যাকটিক দিয়ে JSON পাঠায়, সেটা ক্লিন করা
    const cleanJson = analysisText.replace(/```json|```/g, "");
    const finalAnalysis = JSON.parse(cleanJson);

    return NextResponse.json(finalAnalysis);

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}