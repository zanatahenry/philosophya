export default function ShowPhrase ({ author, phrase }: { author: string, phrase: string }) {
  return (
    <div className="flex space-x-2 justify-center items-center">
      <blockquote>
        <p className="text-neutral-50 text-lg">{phrase}</p>
      </blockquote>

      <p className="text-neutral-50">-{author}</p>
    </div>
  )
}
