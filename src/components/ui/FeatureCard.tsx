
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
  className?: string;
}

export const FeatureCard = ({
  icon,
  title,
  description,
  index = 0,
  className,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-6 md:p-8 rounded-2xl transition-all duration-300",
        "hover:shadow-lg hover:translate-y-[-5px]",
        "border border-border/40",
        "fade-in",
        className
      )}
      style={{ "--index": index } as React.CSSProperties}
    >
      <div className="flex flex-col items-start">
        <div className="p-3 rounded-xl bg-primary/5 mb-5 text-healthcare-blue">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        
        <p className="text-muted-foreground text-pretty">
          {description}
        </p>
      </div>
    </div>
  );
};
