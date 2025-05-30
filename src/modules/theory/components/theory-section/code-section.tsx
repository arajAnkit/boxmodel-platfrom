interface CodeSectionProps {
  title: string;
  code: string;
}

export function CodeSection({ title, code }: CodeSectionProps) {
  return (
    <div className="theory-content">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-fuchsia-500 bg-clip-text text-transparent">
        Code Example: {title}
      </h2>
      <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
        <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
          <span className="text-gray-400 text-sm font-mono">CSS</span>
        </div>
        <div className="p-6 overflow-x-auto">
          <pre className="text-green-400 text-sm">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
