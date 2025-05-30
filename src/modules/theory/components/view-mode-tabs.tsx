import { BookOpen, Code, Eye } from "lucide-react";

interface ViewModeTabsProps {
  viewMode: "theory" | "demo" | "code";
  setViewMode: (mode: "theory" | "demo" | "code") => void;
}

export function ViewModeTabs({ viewMode, setViewMode }: ViewModeTabsProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
      <div className="flex">
        <button
          onClick={() => setViewMode("theory")}
          className={`flex items-center space-x-2 px-6 py-4 border-b-2 transition-colors ${
            viewMode === "theory"
              ? "border-fuchsia-500 text-fuchsia-600 dark:text-fuchsia-400"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Theory</span>
        </button>
        <button
          onClick={() => setViewMode("demo")}
          className={`flex items-center space-x-2 px-6 py-4 border-b-2 transition-colors ${
            viewMode === "demo"
              ? "border-teal-500 text-teal-600 dark:text-teal-400"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <Eye className="w-4 h-4" />
          <span>Demo</span>
        </button>
        <button
          onClick={() => setViewMode("code")}
          className={`flex items-center space-x-2 px-6 py-4 border-b-2 transition-colors ${
            viewMode === "code"
              ? "border-amber-500 text-amber-600 dark:text-amber-400"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <Code className="w-4 h-4" />
          <span>Code</span>
        </button>
      </div>
    </div>
  );
}
