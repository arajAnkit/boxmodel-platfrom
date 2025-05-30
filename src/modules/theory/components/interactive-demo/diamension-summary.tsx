import { FC } from "react";

interface DimensionSummaryProps {
  values: {
    width: number;
    height: number;
    padding: number;
    border: number;
    margin: number;
  };
}

export const DimensionSummary: FC<DimensionSummaryProps> = ({ values }) => {
  return (
    <div className="mt-6 p-4 bg-fuchsia-50 dark:bg-fuchsia-950/30 rounded-lg border border-fuchsia-200 dark:border-fuchsia-800">
      <div className="text-sm font-medium text-fuchsia-900 dark:text-fuchsia-100 mb-2">
        Total Dimensions
      </div>
      <div className="text-fuchsia-800 dark:text-fuchsia-200">
        Width:{" "}
        {values.width +
          values.padding * 2 +
          values.border * 2 +
          values.margin * 2}
        px | Height:{" "}
        {values.height +
          values.padding * 2 +
          values.border * 2 +
          values.margin * 2}
        px
      </div>
    </div>
  );
};
