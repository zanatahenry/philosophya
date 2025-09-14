"use client";
import LightRays from "./light-rays";

export function BackgroundEffects() {
  return (
    <>
      <LightRays
        raysOrigin="top-center"
        raysColor="#fefefe"
        lightSpread={0.35}
        rayLength={2.5}
        fadeDistance={1.2}
        pulsating
        raysSpeed={0.1}
        mouseInfluence={0}
        distortion={0.02}
        noiseAmount={0}
        saturation={1.2}
        className="absolute inset-0"
      />

      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, #06091A 6%, transparent 50%)"
        }}
      />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          mask: "radial-gradient(circle at center, black 0%, black 40%, transparent 80%)",
          WebkitMask: "radial-gradient(circle at center, black 0%, black 40%, transparent 80%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
          maskImage:
            "radial-gradient(circle at center, black 0%, black 40%, transparent 80%), linear-gradient(to top, transparent 0%, black 20%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, black 40%, transparent 80%), linear-gradient(to top, transparent 0%, black 20%)"
        }}
      />
    </>
  );
}
