import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TheoryNavigationProps {
  currentSection: number;
  totalSections: number;
  prevSection: () => void;
  nextSection: () => void;
}

export function TheoryNavigation({
  currentSection,
  totalSections,
  prevSection,
  nextSection,
}: TheoryNavigationProps) {
  return (
    <div className="flex justify-between items-center mt-8">
      <Button
        onClick={prevSection}
        disabled={currentSection === 0}
        variant="outline"
        className="flex items-center space-x-2"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Previous</span>
      </Button>

      <div className="text-center">
        <div className="text-sm text-muted-foreground">
          Topic {currentSection + 1}
        </div>
      </div>

      <Button
        onClick={nextSection}
        disabled={currentSection === totalSections - 1}
        className="flex items-center space-x-2 bg-gradient-to-r from-fuchsia-600 to-teal-500 hover:from-fuchsia-700 hover:to-teal-600"
      >
        <span>Next</span>
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
