import { FC } from "react";

export const SectionTitle: FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="text-center mb-16">
      <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
        {title}
      </h2>
      <p className="section-title text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};
