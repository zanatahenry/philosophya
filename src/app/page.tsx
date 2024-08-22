import LoadingText from "@/components/LoadingText/LoadingText";
import { useOpenai } from "@/hooks/useOpenAI";

export default async function Home() {
  const { handleSubmit } = useOpenai()
  const data = await handleSubmit()

  return (
    <div className="md:overflow-hidden flex flex-col flex-1 justify-center">
      <LoadingText />
      {data && <h1>any thing</h1>}
    </div>
  );
}
