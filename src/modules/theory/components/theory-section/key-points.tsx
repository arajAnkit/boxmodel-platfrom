import { CheckCircle } from "lucide-react";

interface KeyPointsProps {
  keyPoints: string[];
}

export function KeyPoints({ keyPoints }: KeyPointsProps) {
  return (
    <div className="bg-gradient-to-r from-fuchsia-50 to-teal-50 dark:from-fuchsia-950/30 dark:to-teal-950/30 rounded-xl p-6 border border-fuchsia-200 dark:border-fuchsia-800">
      <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2 text-fuchsia-900 dark:text-fuchsia-100">
        <CheckCircle className="w-5 h-5" />
        <span>Key Points</span>
      </h3>
      <ul className="space-y-2">
        {keyPoints.map((point, index) => (
          <li
            key={index}
            className="flex items-start space-x-2 text-fuchsia-800 dark:text-fuchsia-200"
          >
            <CheckCircle className="w-4 h-4 mt-0.5 text-fuchsia-500 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
