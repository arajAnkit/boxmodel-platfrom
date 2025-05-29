import { StatsCard } from "./stats-cards";
import { Target, Zap, Trophy } from "lucide-react";

const stats = [
  {
    icon: Target,
    number: "15+",
    label: "Core Topics",
    color: "text-fuchsia-500",
  },
  {
    icon: Zap,
    number: "30+",
    label: "Interactive Games",
    color: "text-teal-500",
  },
  {
    icon: Trophy,
    number: "100%",
    label: "Hands-on Practice",
    color: "text-amber-500",
  },
];

export const StatsGrid = () => {
  return (
    <div className="stats-grid grid gap-6">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
};
