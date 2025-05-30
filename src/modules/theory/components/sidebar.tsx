import { theoryData } from "@/data/theory";

interface SidebarProps {
  currentSection: number;
  setCurrentSection: (index: number) => void;
}

export function Sidebar({ currentSection, setCurrentSection }: SidebarProps) {
  return (
    <div className="sticky top-24 bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-4">CSS Box Model Topics</h3>
      <nav className="space-y-2">
        {theoryData.map((section, index) => (
          <button
            key={section.id}
            onClick={() => setCurrentSection(index)}
            className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
              currentSection === index
                ? "bg-gradient-to-r from-fuchsia-500 to-teal-500 text-white"
                : "hover:bg-gray-50 dark:hover:bg-gray-800 text-muted-foreground"
            }`}
          >
            <div className="text-sm font-medium">{section.title}</div>
          </button>
        ))}
      </nav>
    </div>
  );
}
