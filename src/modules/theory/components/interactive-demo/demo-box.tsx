import { FC } from "react";

interface DemoBoxProps {
  values: {
    width: number;
    height: number;
    padding: number;
    border: number;
    margin: number;
    borderRadius: number;
  };
}

export const DemoBox: FC<DemoBoxProps> = ({ values }) => {
  return (
    <div
      className="relative bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300"
      style={{
        margin: `${values.margin}px`,
        border: `${values.border}px solid #8b5cf6`,
        padding: `${values.padding}px`,
        width: `${values.width}px`,
        height: `${values.height}px`,
        borderRadius: `${values.borderRadius}px`,
      }}
    >
      <div className="bg-amber-300 dark:bg-amber-600 rounded flex items-center justify-center w-full h-full">
        <span className="text-white font-bold text-sm">Content</span>
      </div>

      {/* Labels */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-slate-600 dark:text-slate-400">
        Margin
      </div>
      <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 text-xs font-medium text-purple-600 dark:text-purple-400 -rotate-90">
        Border
      </div>
      <div className="absolute top-2 left-2 text-xs font-medium text-teal-600 dark:text-teal-400">
        Padding
      </div>
    </div>
  );
};
