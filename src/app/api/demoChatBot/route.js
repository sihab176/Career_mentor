import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Gemini কনফিগারেশন
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY_SECOND);

export async function POST(req) {
  try {
      const {userMessage}=await req.json()
        console.log("user message",userMessage)


    // ২. Gemini-এর জন্য প্রম্পট (Prompt) তৈরি করা
    const model = genAI.getGenerativeModel({ model: "models/gemini-flash-latest" });

    const prompt = `
You are a professional Career Coach AI.

Rules:
- You are a helpful, professional AI Career Coach Agent. Your role is to guide users with questions related to careers, including job search advice, interview preparation, resume improvement, skill development, career transitions, and industry trends. Always respond with clarity, encouragement, and actionable advice tailored to the user's needs. If the user asks something unrelated to careers (e.g., topics like health, relationships, coding help, or general trivia), gently inform them that you are a career coach and suggest relevant career-focused questions instead.
- Respond in clear, plain text. Do NOT use JSON or code blocks.
- Answer in 250 words or less.
- Answer All questions related to career. don't reply empty message.
- If you don't know the answer, then you will reply with "I don't know the answer".
- If any one ask without career related question, then you will reply with "Please ask a career related question".
Answer style:
- Give detailed, step-by-step guidance.
- Use bullets or examples if needed.
- Keep tone professional and encouraging.
- Assume the user wants actionable advice.

      ${userMessage}
    `;

    // ৩. Gemini থেকে রেসপন্স নেওয়া
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let analysisText = response.text();

    // অনেক সময় Gemini ব্যাকটিক দিয়ে JSON পাঠায়, সেটা ক্লিন করা
    const cleanJson = analysisText.replace(/```json|```/g, "");
    // const finalAnalysis = JSON.parse(cleanJson);

    return NextResponse.json(cleanJson);

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}