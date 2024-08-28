import LoadingText from "@/components/LoadingText/LoadingText";
import ShowPhrase from "@/components/ShowPhrase/ShowPhrase";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="md:overflow-hidden flex flex-col flex-1 justify-center">
      <Suspense fallback={<LoadingText/>}>
        <ShowPhrase />
      </Suspense>
    </div>
  );
}
