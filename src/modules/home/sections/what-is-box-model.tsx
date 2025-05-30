"use client";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionTitle } from "../components/box-model-section/section-title";
import { FeaturesSection } from "../components/box-model-section/features-section";
import { WhyMasterBoxModel } from "../components/box-model-section/why-master-box-nodel";

gsap.registerPlugin(ScrollTrigger);

export const WhatIsBoxModel = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(".section-title", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-gray-50/50 dark:to-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="What is the CSS Box Model?"
          subtitle="Every HTML element is essentially a rectangular box. The CSS Box Model describes how these boxes are
            structured and how their dimensions are calculated. Understanding this fundamental concept is crucial for
            mastering CSS layouts."
        />
        <FeaturesSection />
        <WhyMasterBoxModel />
      </div>
    </section>
  );
};
