import { FC } from "react";
import { CheckCircle } from "lucide-react";

interface LearningItemProps {
  topic: string;
}

export const LearningItem: FC<LearningItemProps> = ({ topic }) => {
  return (
    <div className="learning-item flex items-start space-x-3">
      <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
      <span className="text-foreground">{topic}</span>
    </div>
  );
};