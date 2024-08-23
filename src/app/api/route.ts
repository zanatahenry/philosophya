import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextResponse } from "next/server"

const genAI = new GoogleGenerativeAI(String(process.env.NEXT_PUBLIC_GOOGLE_API_KEY))

export const runtime = "edge"

export async function GET (req: Request) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

  const prompt = "Me informe uma frase filosófica para eu refletir profundamente, além disso, me informe o autor dela. Me mostre a frase da seguinte forma: frase - autor"

  const result = await model.generateContent(prompt)

  return NextResponse.json({data: result.response.text()}, { status: 200 })
}
