"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LearningList } from "../components/what-you-will-learn-section/learning-list";
import { CallToAction } from "../components/what-you-will-learn-section/call-to-action";
import { StatsGrid } from "../components/what-you-will-learn-section/stats-grid";
import { LearningPath } from "../components/what-you-will-learn-section/learning-path";

gsap.registerPlugin(ScrollTrigger);

export const WhatYoullLearn = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".learning-item", {
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".stats-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              What You&apos;ll{" "}
              <span className="bg-gradient-to-r from-teal-600 to-amber-500 bg-clip-text text-transparent">
                Master
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our curriculum covers everything from basics to advanced
              techniques.
            </p>
            <LearningList />
            <CallToAction />
          </div>
          <div>
            <StatsGrid />
            <LearningPath />
          </div>
        </div>
      </div>
    </section>
  );
};
