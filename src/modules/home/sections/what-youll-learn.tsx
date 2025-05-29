"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { CheckCircle, Target, Zap, Trophy } from "lucide-react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "@/components/ui/button";

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

  const learningTopics = [
    "CSS Box Model fundamentals and structure",
    "Content area sizing and management",
    "Padding properties and spacing techniques",
    "Border styles, widths, and radius effects",
    "Margin collapsing and spacing strategies",
    "Box-sizing property and its impact",
    "Display properties and layout behavior",
    "Width and height constraints (min/max)",
    "Overflow handling and content management",
    "CSS Reset techniques for consistency",
    "Container and wrapper strategies",
    "Responsive design with flexible boxes",
    "Advanced layout debugging techniques",
    "Performance optimization for layouts",
    "Cross-browser compatibility solutions",
  ];

  const stats = [
    {
      icon: Target,
      number: "15+",
      label: "Core Topics",
      color: "text-fuchsia-500",
    },
    {
      icon: Zap,
      number: "30+",
      label: "Interactive Games",
      color: "text-mint-500",
    },
    {
      icon: Trophy,
      number: "100%",
      label: "Hands-on Practice",
      color: "text-tangerine-500",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              What You&apos;ll{" "}
              <span className="bg-gradient-to-r from-mint-600 to-tangerine-500 bg-clip-text text-transparent">
                Master
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our comprehensive curriculum covers everything from basic box
              model concepts to advanced layout techniques. You&apos;ll gain
              practical skills through interactive demos and engaging
              challenges.
            </p>

            <div className="space-y-3 mb-8">
              {learningTopics.map((topic, index) => (
                <div
                  key={index}
                  className="learning-item flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-mint-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{topic}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/theory">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-mint-600 to-tangerine-500 hover:from-mint-700 hover:to-tangerine-600 text-white"
                >
                  Start Learning Now
                </Button>
              </Link>
              <Link href="/game">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-mint-200 hover:bg-mint-50 dark:border-mint-800 dark:hover:bg-mint-950"
                >
                  Try Interactive Game
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div>
            <div className="stats-grid grid gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="stats-card bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg`}
                    >
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground">
                        {stat.number}
                      </div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-fuchsia-500/10 to-mint-500/10 rounded-2xl p-6 border border-fuchsia-200 dark:border-fuchsia-800">
              <h3 className="text-xl font-semibold mb-3 text-fuchsia-900 dark:text-fuchsia-100">
                🎯 Learning Path
              </h3>
              <p className="text-fuchsia-800 dark:text-fuchsia-200">
                Start with theory fundamentals, practice with interactive demos,
                then challenge yourself with our game-based learning system.
                Progress at your own pace with instant feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
