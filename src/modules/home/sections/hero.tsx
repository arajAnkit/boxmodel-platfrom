import { useRef } from "react";
import { BackgroundElements } from "../components/hero-section/background-element";
import { HeroContent } from "../components/hero-section/hero-content";
import { BoxModelDemo } from "../components/box-model-demo";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br"
    >
      <BackgroundElements />
      <div className="max-w-7xl mx-auto px-4 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <div className="flex justify-center">
            <BoxModelDemo />
          </div>
        </div>
      </div>
    </section>
  );
};
