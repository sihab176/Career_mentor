import { openai } from "@/components/OpenAiModel/OpenAiModel"
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        const {userMessage}=await req.json()

        const completions= await openai.chat.completions.create({
            model:"google/gemini-2.0-flash-exp:free",
            // max_tokens:200,
            messages:[
{
  role: "system",
  content: `
You are a professional Career Coach AI.

Rules:
- Only answer career-related questions (jobs, interviews, resumes, career growth, tech guidance).
- Ignore unrelated topics politely.
- If the user asks anything unrelated to careers (health, relationships, trivia, etc.), politely redirect them to career-related questions.
- Respond in clear, plain text. Do NOT use JSON or code blocks.

Answer style:
- Give detailed, step-by-step guidance.
- Use bullets or examples if needed.
- Keep tone professional and encouraging.
- Assume the user wants actionable advice.
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

            // const json= JSON.parse(clean)
            // return NextResponse.json(json)

            return NextResponse.json({ reply: clean })


    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}


