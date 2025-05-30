"use client";

import { useState } from "react";

import { theoryData } from "@/data/theory";

import { TheorySection } from "@/modules/theory/sections/theory-section";
import { TheoryHeader } from "@/modules/theory/components/theory-header";
import { ProgressBar } from "@/modules/theory/components/progress-bar";
import { Sidebar } from "@/modules/theory/components/sidebar";
import { ViewModeTabs } from "@/modules/theory/components/view-mode-tabs";
import { TheoryNavigation } from "@/modules/theory/components/theory-navigation";

export default function TheoryPage() {
  const [currentSection, setCurrentSection] = useState(0);
  const [viewMode, setViewMode] = useState<"theory" | "demo" | "code">(
    "theory"
  );

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        <TheoryHeader />
        <ProgressBar
          currentSection={currentSection}
          totalSections={theoryData.length}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-4 gap-8">
          <Sidebar
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
          <div className="lg:col-span-3">
            <ViewModeTabs viewMode={viewMode} setViewMode={setViewMode} />
            <TheorySection
              section={theoryData[currentSection]}
              viewMode={viewMode}
            />
            <TheoryNavigation
              currentSection={currentSection}
              totalSections={theoryData.length}
              prevSection={() => setCurrentSection(currentSection - 1)}
              nextSection={() => setCurrentSection(currentSection + 1)}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
