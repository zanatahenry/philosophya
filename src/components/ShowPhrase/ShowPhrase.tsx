export default function ShowPhrase ({ author, phrase }: { author: string, phrase: string }) {
  return (
    <div className="flex space-x-2 justify-center">
      <h1 className="text-neutral-50">{phrase}</h1>
      <h2 className="text-neutral-50">{author}</h2>
    </div>
  )
}
