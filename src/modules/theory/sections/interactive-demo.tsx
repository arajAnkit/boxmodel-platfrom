"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

import { DemoBox } from "../components/interactive-demo/demo-box";
import { ControlsPanel } from "../components/interactive-demo/controls-panel";
import { DimensionSummary } from "../components/interactive-demo/diamension-summary";

interface InteractiveDemoProps {
  demoType: string;
}

export const InteractiveDemo = ({ demoType }: InteractiveDemoProps) => {
  const [values, setValues] = useState({
    width: 200,
    height: 100,
    padding: 20,
    border: 2,
    margin: 10,
    borderRadius: 0,
  });

  const demoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".demo-container", {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
    }, demoRef);

    return () => ctx.revert();
  }, [demoType]);

  const updateValue = (property: string, newValue: number[]) => {
    setValues((prev) => ({ ...prev, [property]: newValue[0] }));
  };

  const resetValues = () => {
    setValues({
      width: 200,
      height: 100,
      padding: 20,
      border: 2,
      margin: 10,
      borderRadius: 0,
    });
  };

  return (
    <div ref={demoRef} className="space-y-6">
      <div className="demo-container bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
        <div className="flex justify-center mb-8">
          <DemoBox values={values} />
        </div>
        <DimensionSummary values={values} />
      </div>
      <ControlsPanel
        values={values}
        updateValue={updateValue}
        resetValues={resetValues}
      />
    </div>
  );
};
