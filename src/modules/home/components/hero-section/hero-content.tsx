import { useEffect, useRef } from "react";

import { ChevronRightIcon } from "lucide-react";

import { gsap } from "gsap";

import { cn } from "@/lib/utils";

import { AnimatedGradientText } from "./animated-gradient-text";
import { HeroButtons } from "./hero-buttons";

export const HeroContent = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(
      [titleRef.current, subtitleRef.current, statsRef.current?.children || []],
      {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="text-center lg:text-left">
      <div>
        <div className="group relative mx-auto flex items-center justify-center md:justify-start rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] mt-16">
          <span
            className={cn(
              "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
            )}
            style={{
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "subtract",
              WebkitClipPath: "padding-box",
            }}
          />
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
          <AnimatedGradientText className="text-sm font-medium text-center md:text-left">
            Master CSS Box Model Fundamentals With Interactive Demos
          </AnimatedGradientText>
          <ChevronRightIcon className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </div>

        <h1 ref={titleRef} className="text-4xl font-bold leading-tight my-6">
          Master the{" "}
          <span className="bg-gradient-to-r from-fuchsia-600 via-teal-500 to-amber-500 bg-clip-text text-transparent">
            CSS Box Model
          </span>{" "}
          with Interactive Learning
        </h1>

        <p ref={subtitleRef} className="text-lg text-muted-foreground mb-8">
          Learn through interactive demos, games, and hands-on practice. Become
          a CSS layout master!
        </p>

        <div ref={statsRef} className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center p-3 bg-gradient-to-r from-fuchsia-600/30 via-teal-500/30 to-amber-500/30 rounded-xl">
            <div className="text-2xl font-bold text-fuchsia-500">15+</div>
            <div className="text-sm font-medium text-foreground">Topics</div>
          </div>
          <div className="text-center p-3 bg-gradient-to-r from-fuchsia-600/30 via-teal-500/30 to-amber-500/30 rounded-xl">
            <div className="text-2xl font-bold text-teal-500">30+</div>
            <div className="text-sm font-medium text-foreground">Games</div>
          </div>
          <div className="text-center p-3 bg-gradient-to-r from-fuchsia-600/30 via-teal-500/30 to-amber-500/30 rounded-xl">
            <div className="text-2xl font-bold text-amber-500">100%</div>
            <div className="text-sm font-medium text-foreground">Hands-on</div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="mt-8">
            <HeroButtons />
          </div>
        </div>
      </div>
    </div>
  );
};
