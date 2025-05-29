"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

export const BoxModelDemo = () => {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const demoRef = useRef<HTMLDivElement>(null);

  const layers = [
    { name: "content", color: "bg-tangerine-400", label: "Content" },
    { name: "padding", color: "bg-mint-400", label: "Padding" },
    { name: "border", color: "bg-fuchsia-400", label: "Border" },
    { name: "margin", color: "bg-slate-400", label: "Margin" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pulse animation for the demo box
      gsap.to(".demo-box", {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }, demoRef);

    return () => ctx.revert();
  }, []);

  const handleLayerClick = (layerName: string) => {
    setActiveLayer(activeLayer === layerName ? null : layerName);

    // Animate the clicked layer
    gsap.to(`.${layerName}-layer`, {
      scale: activeLayer === layerName ? 1 : 1.1,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  };

  return (
    <div
      ref={demoRef}
      className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-fuchsia-600 to-mint-500 bg-clip-text text-transparent">
        Interactive Box Model
      </h3>

      {/* Box Model Visualization */}
      <div className="relative flex items-center justify-center mb-8">
        {/* Margin */}
        <div
          className={`margin-layer absolute w-64 h-64 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer transition-all duration-300 ${
            activeLayer === "margin" ? "ring-4 ring-slate-400" : ""
          }`}
          onClick={() => handleLayerClick("margin")}
        >
          {/* Border */}
          <div
            className={`border-layer absolute top-4 left-4 right-4 bottom-4 bg-fuchsia-200 dark:bg-fuchsia-800 rounded-lg cursor-pointer transition-all duration-300 ${
              activeLayer === "border" ? "ring-4 ring-fuchsia-400" : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              handleLayerClick("border");
            }}
          >
            {/* Padding */}
            <div
              className={`padding-layer absolute top-4 left-4 right-4 bottom-4 bg-mint-200 dark:bg-mint-800 rounded-lg cursor-pointer transition-all duration-300 ${
                activeLayer === "padding" ? "ring-4 ring-mint-400" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                handleLayerClick("padding");
              }}
            >
              {/* Content */}
              <div
                className={`content-layer demo-box absolute top-4 left-4 right-4 bottom-4 bg-tangerine-300 dark:bg-tangerine-700 rounded-lg cursor-pointer transition-all duration-300 flex items-center justify-center ${
                  activeLayer === "content" ? "ring-4 ring-tangerine-400" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleLayerClick("content");
                }}
              >
                <span className="text-white font-bold text-lg">Content</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layer Buttons */}
      <div className="grid grid-cols-2 gap-3">
        {layers.map((layer) => (
          <Button
            key={layer.name}
            variant={activeLayer === layer.name ? "default" : "outline"}
            onClick={() => handleLayerClick(layer.name)}
            className={`${
              activeLayer === layer.name
                ? `${layer.color} text-white hover:opacity-90`
                : "hover:bg-gray-50 dark:hover:bg-gray-800"
            } transition-all duration-300`}
          >
            {layer.label}
          </Button>
        ))}
      </div>

      {/* Active Layer Info */}
      {activeLayer && (
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h4 className="font-semibold text-lg mb-2 capitalize">
            {activeLayer}
          </h4>
          <p className="text-sm text-muted-foreground">
            {activeLayer === "content" &&
              "The actual content of the element - text, images, etc."}
            {activeLayer === "padding" &&
              "Space between the content and the border."}
            {activeLayer === "border" &&
              "A line around the padding and content."}
            {activeLayer === "margin" &&
              "Space outside the border, between elements."}
          </p>
        </div>
      )}
    </div>
  );
};
