import { FC } from "react";

interface StatsCardProps {
  icon: React.ElementType;
  number: string;
  label: string;
  color: string;
}

export const StatsCard: FC<StatsCardProps> = ({
  icon: Icon,
  number,
  label,
  color,
}) => {
  return (
    <div className="stats-card bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg">
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
        <div>
          <div className="text-3xl font-bold text-foreground">{number}</div>
          <div className="text-muted-foreground">{label}</div>
        </div>
      </div>
    </div>
  );
};
