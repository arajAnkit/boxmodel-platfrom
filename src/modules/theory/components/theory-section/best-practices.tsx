import { Lightbulb } from "lucide-react";

interface BestPracticesProps {
  bestPractices: string[];
}

export function BestPractices({ bestPractices }: BestPracticesProps) {
  return (
    <div className="bg-gradient-to-r from-teal-50 to-amber-50 dark:from-teal-950/30 dark:to-amber-950/30 rounded-xl p-6 border border-teal-200 dark:border-teal-800">
      <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2 text-teal-900 dark:text-teal-100">
        <Lightbulb className="w-5 h-5" />
        <span>Best Practices</span>
      </h3>
      <ul className="space-y-2">
        {bestPractices.map((practice, index) => (
          <li
            key={index}
            className="flex items-start space-x-2 text-teal-800 dark:text-teal-200"
          >
            <Lightbulb className="w-4 h-4 mt-0.5 text-teal-500 flex-shrink-0" />
            <span>{practice}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
