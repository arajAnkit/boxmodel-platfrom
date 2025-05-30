interface ProgressBarProps {
  currentSection: number;
  totalSections: number;
}

export function ProgressBar({
  currentSection,
  totalSections,
}: ProgressBarProps) {
  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Section {currentSection + 1} of {totalSections}
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            {Math.round(((currentSection + 1) / totalSections) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-fuchsia-500 to-teal-500 h-2 rounded-full transition-all duration-500"
            style={{
              width: `${((currentSection + 1) / totalSections) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
