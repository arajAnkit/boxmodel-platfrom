"use client";

import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "@/modules/home/sections/hero";
import { WhatIsBoxModel } from "@/modules/home/sections/what-is-box-model";
import { WhatYoullLearn } from "@/modules/home/sections/what-youll-learn";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth scroll animations
      gsap.from(".fade-in", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".fade-in",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <main>
        <Hero />
        <WhatIsBoxModel />
        <WhatYoullLearn />
      </main>
    </div>
  );
}
