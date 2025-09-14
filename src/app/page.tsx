import { BackgroundEffects } from "@/components/background-effects";
import { getPhrase } from "@/lib/gemini";

export default async function Home() {
  const phrase = await getPhrase();

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden font-sans">
      <div className="absolute inset-0 z-0">
        <BackgroundEffects />
      </div>

      <div className="relative z-50 flex items-center justify-center min-h-screen">
        <div className="text-center space-y-8 max-w-5xl mx-auto px-8 py-20">
          <div className="space-y-6 relative z-50">
            <h1
              className="w-72 h-auto text-white fill-current drop-shadow-2xl mx-auto relative z-50 text-5xl font-bold"
              style={{
                filter:
                  "drop-shadow(0 0 30px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 60px rgba(255, 255, 255, 0.3))"
              }}
            >
              Philosophya
            </h1>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto relative z-50">
            <p className="text-xl text-slate-300 leading-relaxed drop-shadow-lg font-sans">
              Descubra a sabedoria dos grandes pensadores da história.
            </p>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl animate-slide-up">
              <blockquote className="text-2xl md:text-4xl text-center text-white font-light leading-relaxed mb-8 italic">
                "{phrase.phrase}"
              </blockquote>

              <div className="text-center">
                <p className="text-xl md:text-2xl font-semibold text-yellow-400 mb-2">
                  — {phrase.author}
                </p>
                <p className="text-lg text-purple-200 opacity-80">{phrase.dates}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
