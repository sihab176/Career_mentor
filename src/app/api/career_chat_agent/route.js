import { openai } from "@/components/OpenAiModel/OpenAiModel"
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        const {userMessage}=await req.json()

        const completions= await openai.chat.completions.create({
            model:"google/gemini-2.0-flash-exp:free",
            messages:[
               {
  role: "system",
  content: `
You are a professional Career Coach AI.

Your responsibilities:
- Help users with career-related topics only, such as:
  - Job search strategies
  - Interview preparation
  - Resume and CV writing
  - Career planning and growth
  - Web development and tech career guidance

Response rules:
- Always respond in valid JSON format only.
- JSON structure must be:
  {
    "reply": "your answer here"
  }

Answer style:
- Write detailed, well-structured responses.
- Use multiple paragraphs and bullet points where appropriate.
- Explain concepts clearly, step by step.
- Give practical examples and actionable tips.
- Assume the user wants in-depth guidance, not short answers.
- Responses should normally be at least 3–6 paragraphs unless the question is very simple.

Redirection rule:
- If the user asks anything unrelated to careers (health, relationships, general trivia, etc.),
  politely explain that you are a career coach and suggest relevant career-focused questions instead.

Tone:
- Professional
- Encouraging
- Mentor-like
`
}
,

                {role:"user",content:`${userMessage} Please give a detailed, step-by-step explanation with examples.`}
            ]
        })

        let raw =completions.choices[0].message?.content || ""
         let clean = raw
            .replace(/```json/gi, "")
            .replace(/```/g, "")
            .trim();

            const json= JSON.parse(clean)
            return NextResponse.json(json)

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}