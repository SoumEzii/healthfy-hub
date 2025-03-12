
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  intent?: "primary" | "secondary" | "accent" | "destructive" | "outline" | "ghost";
  size?: "sm" | "base" | "lg";
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
}

export const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  (
    {
      children,
      intent = "primary",
      size = "base",
      fullWidth = false,
      icon,
      iconPosition = "left",
      loading = false,
      className,
      ...props
    },
    ref
  ) => {
    const intentStyles = {
      primary: "bg-healthcare-blue text-white hover:bg-blue-600 shadow-button",
      secondary: "bg-secondary text-foreground hover:bg-secondary/80",
      accent: "bg-healthcare-green text-white hover:bg-green-600",
      destructive: "bg-healthcare-red text-white hover:bg-red-600",
      outline: "bg-transparent border border-input text-foreground hover:bg-secondary",
      ghost: "bg-transparent text-foreground hover:bg-secondary",
    };

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 rounded-lg",
      base: "text-sm px-4 py-2 rounded-xl",
      lg: "text-base px-6 py-3 rounded-xl",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center font-medium transition-all duration-200 ease-spring",
          intentStyles[intent],
          sizeStyles[size],
          fullWidth ? "w-full" : "",
          "overflow-hidden transform hover:scale-[1.02] active:scale-[0.98]",
          "before:absolute before:inset-0 before:opacity-0 before:transition-opacity hover:before:opacity-10",
          "before:bg-white/20 active:before:bg-black/10",
          className
        )}
        disabled={loading}
        {...props}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-inherit">
            <div className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        
        <span className={`flex items-center ${loading ? "opacity-0" : ""}`}>
          {icon && iconPosition === "left" && (
            <span className="mr-2 flex-shrink-0">{icon}</span>
          )}
          
          {children}
          
          {icon && iconPosition === "right" && (
            <span className="ml-2 flex-shrink-0">{icon}</span>
          )}
        </span>
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";
