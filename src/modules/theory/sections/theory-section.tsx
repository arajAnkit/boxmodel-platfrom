"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { InteractiveDemo } from "@/modules/theory/sections/interactive-demo";

import { CodeSection } from "../components/theory-section/code-section";
import { TheoryContent } from "../components/theory-section/theory-content";

import { TheorySection as TheorySectionType } from "@/data/theory";

interface TheorySectionProps {
  section: TheorySectionType;
  viewMode: "theory" | "demo" | "code";
}

export function TheorySection({ section, viewMode }: TheorySectionProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".theory-content", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      });
    }, contentRef);

    return () => ctx.revert();
  }, [section.id, viewMode]);

  return (
    <div ref={contentRef}>
      {viewMode === "theory" && <TheoryContent section={section} />}
      {viewMode === "demo" && (
        <div className="theory-content">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-amber-500 bg-clip-text text-transparent">
            Interactive Demo: {section.title}
          </h2>
          <InteractiveDemo demoType={section.demo} />
        </div>
      )}
      {viewMode === "code" && (
        <CodeSection title={section.title} code={section.code} />
      )}
    </div>
  );
}
