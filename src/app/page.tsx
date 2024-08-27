import LoadingText from "@/components/LoadingText/LoadingText";
import ShowPhrase from "@/components/ShowPhrase/ShowPhrase";
import { useGoogleAI } from "@/hooks/useGoogleAI";

export default async function Home() {
  const { handleSubmit } = useGoogleAI()
  const response = await handleSubmit()

  return (
    <div className="md:overflow-hidden flex flex-col flex-1 justify-center">
      {response ? <ShowPhrase author={response.author} phrase={response.phrase} /> : <LoadingText/>}
    </div>
  );
}
