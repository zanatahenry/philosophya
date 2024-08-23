import LoadingText from "@/components/LoadingText/LoadingText";
import { useGoogleAI } from "@/hooks/useGoogleAI";

export default async function Home() {
  const { handleSubmit } = useGoogleAI()
  const data = await handleSubmit()

  return (
    <div className="md:overflow-hidden flex flex-col flex-1 justify-center">
      <LoadingText />
      {data && <h1>any thing</h1>}
    </div>
  );
}
