import LoadingText from "@/components/LoadingText/LoadingText";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-950">
      <LoadingText />
    </main>
  );
}
