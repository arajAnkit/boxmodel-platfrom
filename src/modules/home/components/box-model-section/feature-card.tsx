interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  color,
}: FeatureCardProps) => {
  return (
    <div className="feature-card bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center mb-4">
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};
