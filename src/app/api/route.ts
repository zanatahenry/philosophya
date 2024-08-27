import { GoogleGenerativeAI } from "@google/generative-ai"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

const genAI = new GoogleGenerativeAI(String(process.env.NEXT_PUBLIC_GOOGLE_API_KEY))

export const runtime = "edge"

export async function GET (req: Request) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

  const prompt = "Me informe uma frase filosófica para eu refletir profundamente, além disso, me informe o autor dela. Me mostre a frase da seguinte forma: frase - autor"

  const response = await model.generateContent(prompt)

  const actualTime = new Date().getTime()
  const textFromAI = response.response.text()

  cookies().set("searchedAt", String(actualTime), { secure: true })
  cookies().set("result", String(textFromAI), { secure: true })

  return NextResponse.json({ data: textFromAI }, { status: 200 })
}
