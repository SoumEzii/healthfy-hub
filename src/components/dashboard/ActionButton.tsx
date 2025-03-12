
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ActionButtonProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  color?: "blue" | "green" | "red";
  className?: string;
}

export const ActionButton = ({
  title,
  description,
  icon,
  to,
  color = "blue",
  className,
}: ActionButtonProps) => {
  const colorStyles = {
    blue: "bg-healthcare-blue/5 border-healthcare-blue/20 hover:bg-healthcare-blue/10",
    green: "bg-healthcare-green/5 border-healthcare-green/20 hover:bg-healthcare-green/10",
    red: "bg-healthcare-red/5 border-healthcare-red/20 hover:bg-healthcare-red/10",
  };
  
  const iconColorStyles = {
    blue: "text-healthcare-blue",
    green: "text-healthcare-green",
    red: "text-healthcare-red",
  };
  
  return (
    <Link
      to={to}
      className={cn(
        "block p-5 border rounded-2xl transition-all duration-300",
        "transform hover:scale-[1.02] hover:shadow-sm",
        colorStyles[color],
        className
      )}
    >
      <div className="flex items-center space-x-4">
        <div className={cn("p-3 rounded-xl bg-white", iconColorStyles[color])}>
          {icon}
        </div>
        
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Link>
  );
};
