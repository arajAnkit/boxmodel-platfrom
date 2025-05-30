import { Code2 } from "lucide-react";

interface Example {
  title: string;
  code: string;
  description: string;
}

interface ExamplesProps {
  examples: Example[];
}

export function Examples({ examples }: ExamplesProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold flex items-center space-x-2">
        <Code2 className="w-5 h-5 text-teal-500" />
        <span>Examples</span>
      </h3>
      <div className="grid gap-6">
        {examples.map((example, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
              <h4 className="font-medium text-foreground">{example.title}</h4>
            </div>
            <div className="p-4">
              <div className="bg-gray-900 rounded-lg p-4 mb-3 overflow-x-auto">
                <pre className="text-green-400 text-sm">
                  <code>{example.code}</code>
                </pre>
              </div>
              <p className="text-sm text-muted-foreground">
                {example.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
