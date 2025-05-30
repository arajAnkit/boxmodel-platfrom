import { AlertTriangle } from "lucide-react";

interface CommonMistakesProps {
  commonMistakes: string[];
}

export function CommonMistakes({ commonMistakes }: CommonMistakesProps) {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-red-50 dark:from-amber-950/30 dark:to-red-950/30 rounded-xl p-6 border border-amber-200 dark:border-amber-800">
      <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2 text-amber-900 dark:text-amber-100">
        <AlertTriangle className="w-5 h-5" />
        <span>Common Mistakes</span>
      </h3>
      <ul className="space-y-2">
        {commonMistakes.map((mistake, index) => (
          <li
            key={index}
            className="flex items-start space-x-2 text-amber-800 dark:text-amber-200"
          >
            <AlertTriangle className="w-4 h-4 mt-0.5 text-amber-500 flex-shrink-0" />
            <span>{mistake}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
