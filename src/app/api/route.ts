import OpenAI from "openai";

console.log('process.env.OPENIA_API_KEY', process.env.OPENIA_API_KEY)
const openai = new OpenAI({
  apiKey: process.env.OPENIA_API_KEY
})

// export const runtime = "edge"

export async function POST (req: Request) {
  const {
    messages,
    model,
    max_length: max_tokens,
    top_p
  } = await req.json()

  const response = await openai.chat.completions.create({
    model,
    messages,
    temperature: 0.7,
    max_tokens,
    top_p
  })

  console.log(response, '<<<< epa')

  return response
}
