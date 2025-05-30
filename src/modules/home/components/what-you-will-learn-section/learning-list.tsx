import { LearningItem } from "./learning-item";

const learningTopics = [
  "CSS Box Model fundamentals and structure",
  "Content area sizing and management",
  "Padding properties and spacing techniques",
  "Border styles, widths, and radius effects",
  "Margin collapsing and spacing strategies",
  "Box-sizing property and its impact",
  "Display properties and layout behavior",
  "Width and height constraints (min/max)",
  "Overflow handling and content management",
  "CSS Reset techniques for consistency",
  "Container and wrapper strategies",
  "Responsive design with flexible boxes",
  "Advanced layout debugging techniques",
  "Performance optimization for layouts",
  "Cross-browser compatibility solutions",
];

export const LearningList = () => {
  return (
    <div className="space-y-3 mb-8">
      {learningTopics.map((topic, index) => (
        <LearningItem key={index} topic={topic} />
      ))}
    </div>
  );
};
