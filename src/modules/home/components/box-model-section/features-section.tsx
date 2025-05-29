import { BoxIcon, LayersIcon, RulerIcon, ZapIcon } from "lucide-react";

import { FeatureCard } from "./feature-card";

const features = [
  {
    icon: BoxIcon,
    title: "Content Area",
    description:
      "The core of every element—the space where text, images, and multimedia content reside. It's the direct container for what users see and interact with. Managing content width and height effectively ensures a polished layout that adapts well to different screen sizes.",
    color: "text-amber-500",
  },
  {
    icon: LayersIcon,
    title: "Padding Layer",
    description:
      "Padding adds breathing room between your content and the border of an element. It creates a comfortable spacing that prevents content from touching the edges, enhancing readability and aesthetics. Padding values can be adjusted for each side independently to achieve precise spacing control.",
    color: "text-teal-500",
  },
  {
    icon: RulerIcon,
    title: "Border Frame",
    description:
      "Borders define the visual boundaries of an element. They can be styled with different thicknesses, colors, and patterns, providing a structured look. Borders contribute to the box model by influencing the element's total size, especially when combined with padding and margins.",
    color: "text-fuchsia-500",
  },
  {
    icon: ZapIcon,
    title: "Margin Space",
    description:
      "Margins control the space between elements. They create separation, ensuring that components are not visually cramped. Margins play a crucial role in responsiveness, helping elements maintain proportional spacing across different screen sizes and layouts.",
    color: "text-purple-500",
  },
];

export const FeaturesSection = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};

