"use client";

import { useEffect, useRef } from "react";

import Link from "next/link";

import { gsap } from "gsap";

import {
  ArrowRight,
  Sparkles,
  Code,
  BookOpen,
  Gamepad2,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { BoxModelDemo } from "../components/box-model-demo";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
      })
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .from(
          buttonsRef.current?.children || [],
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          demoRef.current,
          {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )
        .from(
          statsRef.current?.children || [],
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.3"
        );

      // Floating animation for sparkles
      gsap.to(".sparkle", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.3,
      });

      // Continuous rotation for code elements
      gsap.to(".rotate-element", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-fuchsia-50/20 to-mint-50/20 dark:from-background dark:via-fuchsia-950/20 dark:to-mint-950/20"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="sparkle absolute top-20 left-20 w-4 h-4 bg-fuchsia-400 rounded-full opacity-60"></div>
        <div className="sparkle absolute top-40 right-32 w-3 h-3 bg-mint-400 rounded-full opacity-40"></div>
        <div className="sparkle absolute bottom-32 left-40 w-5 h-5 bg-tangerine-400 rounded-full opacity-50"></div>
        <div className="sparkle absolute bottom-20 right-20 w-2 h-2 bg-fuchsia-300 rounded-full opacity-70"></div>
        <div className="rotate-element absolute top-32 right-20 w-16 h-16 border-2 border-mint-300 rounded-lg opacity-20"></div>
        <div className="rotate-element absolute bottom-40 left-20 w-12 h-12 border-2 border-tangerine-300 rounded-full opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Sparkles className="w-6 h-6 text-fuchsia-500 mr-2" />
              <span className="text-sm font-medium text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-wide">
                Master CSS Fundamentals
              </span>
            </div>

            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Master the{" "}
              <span className="bg-gradient-to-r from-fuchsia-600 via-mint-500 to-tangerine-500 bg-clip-text text-transparent">
                CSS Box Model
              </span>{" "}
              with Interactive Learning
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Transform your CSS skills with our comprehensive platform. Learn
              through interactive demos, engaging games, and hands-on practice.
              From basics to advanced layout techniques - become a CSS layout
              master!
            </p>

            {/* Enhanced Stats */}
            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold text-fuchsia-600">15+</div>
                <div className="text-xs text-muted-foreground">Topics</div>
              </div>
              <div className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold text-mint-600">30</div>
                <div className="text-xs text-muted-foreground">Games</div>
              </div>
              <div className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold text-tangerine-600">
                  100%
                </div>
                <div className="text-xs text-muted-foreground">Hands-on</div>
              </div>
            </div>

            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Link href="/theory">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-fuchsia-600 to-mint-500 hover:from-fuchsia-700 hover:to-mint-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Start Learning
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/game">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-fuchsia-200 hover:bg-fuchsia-50 dark:border-fuchsia-800 dark:hover:bg-fuchsia-950 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Gamepad2 className="w-5 h-5 mr-2" />
                  Play Games
                </Button>
              </Link>
            </div>

            {/* Quick Access Links */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link href="/demos">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-mint-600 hover:text-mint-700 hover:bg-mint-50 dark:hover:bg-mint-950"
                >
                  <Zap className="w-4 h-4 mr-1" />
                  Interactive Demos
                </Button>
              </Link>
              <Link href="/cheatsheet">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-tangerine-600 hover:text-tangerine-700 hover:bg-tangerine-50 dark:hover:bg-tangerine-950"
                >
                  <Code className="w-4 h-4 mr-1" />
                  Cheat Sheet
                </Button>
              </Link>
            </div>
          </div>

          {/* Enhanced Interactive Demo */}
          <div ref={demoRef} className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-fuchsia-500/20 to-mint-500/20 rounded-3xl blur-xl"></div>
              <BoxModelDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
