
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  imageUrl?: string;
  index?: number;
  className?: string;
}

export const TestimonialCard = ({
  quote,
  author,
  role,
  imageUrl,
  index = 0,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-6 md:p-8 rounded-2xl transition-all duration-300",
        "hover:shadow-lg",
        "scale-in",
        className
      )}
      style={{ "--index": index } as React.CSSProperties}
    >
      <div className="flex flex-col h-full">
        <Quote className="text-healthcare-blue/30 h-8 w-8 mb-4" />
        
        <blockquote className="mb-6 flex-grow">
          <p className="text-foreground/90 text-pretty">{quote}</p>
        </blockquote>
        
        <div className="flex items-center">
          {imageUrl ? (
            <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border border-border/60">
              <img
                src={imageUrl}
                alt={author}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4">
              <span className="text-lg font-medium">
                {author.charAt(0)}
              </span>
            </div>
          )}
          
          <div>
            <p className="font-semibold text-foreground">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
