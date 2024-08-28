import { useGoogleAI } from "@/hooks/useGoogleAI"

export default async function ShowPhrase () {
  const { handleSubmit } = useGoogleAI()

  await new Promise(res => setTimeout(res, 9000))

  const response = await handleSubmit()

  return (
    <div className="flex space-x-2 justify-center items-center">
      <blockquote>
        <p className="text-neutral-50 text-lg">{response?.phrase}</p>
      </blockquote>

      <p className="text-neutral-50">-{response?.author}</p>
    </div>
  )
}
