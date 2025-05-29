"use client";

import { useEffect, useRef } from "react";

import { Box, Layers, Ruler, Zap } from "lucide-react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Box,
      title: "Content Area",
      description:
        "The innermost part where your actual content lives - text, images, and other elements.",
      color: "text-tangerine-500",
    },
    {
      icon: Layers,
      title: "Padding Layer",
      description:
        "Creates space between your content and the border, giving your elements breathing room.",
      color: "text-mint-500",
    },
    {
      icon: Ruler,
      title: "Border Frame",
      description:
        "The visible boundary around your element that can be styled with colors, widths, and patterns.",
      color: "text-fuchsia-500",
    },
    {
      icon: Zap,
      title: "Margin Space",
      description:
        "The outermost layer that creates space between your element and neighboring elements.",
      color: "text-purple-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-background to-gray-50/50 dark:to-gray-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What is the{" "}
            <span className="bg-gradient-to-r from-fuchsia-600 to-mint-500 bg-clip-text text-transparent">
              CSS Box Model?
            </span>
          </h2>
          <p className="section-title text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Every HTML element is essentially a rectangular box. The CSS Box
            Model describes how these boxes are structured and how their
            dimensions are calculated. Understanding this fundamental concept is
            crucial for mastering CSS layouts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center mb-4`}
              >
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-fuchsia-50 to-mint-50 dark:from-fuchsia-950/30 dark:to-mint-950/30 rounded-2xl p-8 border border-fuchsia-200 dark:border-fuchsia-800">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-fuchsia-900 dark:text-fuchsia-100">
              Why Master the Box Model?
            </h3>
            <p className="text-lg text-fuchsia-800 dark:text-fuchsia-200 max-w-4xl mx-auto">
              The Box Model is the foundation of CSS layout. Once you understand
              how content, padding, borders, and margins work together,
              you&apos;`ll be able to create precise, responsive layouts and
              debug spacing issues with confidence. It&apos;`s the key to
              transforming from a CSS beginner to a layout master.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
