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
- Respond in clear, plain text. Do NOT use JSON or code blocks.
- Answer in 250 words or less.
- If any one ask without career related question, then you will reply with "Please ask a career related question".
Answer style:
- Give detailed, step-by-step guidance.
- Use bullets or examples if needed.
- Keep tone professional and encouraging.
- Assume the user wants actionable advice.
`
}

,

                {role:"user",content:`${userMessage} .give me answer fast`}
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


