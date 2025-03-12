
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-subtle border border-border/30 p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-healthcare-blue/10 mb-6">
          <span className="text-2xl font-bold text-healthcare-blue">404</span>
        </div>
        
        <h1 className="text-2xl font-bold mb-3">Page Not Found</h1>
        
        <p className="text-muted-foreground mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <Link to="/" className="flex-1">
            <AnimatedButton intent="primary" fullWidth icon={<Home size={18} />}>
              Go Home
            </AnimatedButton>
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="flex-1"
          >
            <AnimatedButton intent="outline" fullWidth icon={<ArrowLeft size={18} />}>
              Go Back
            </AnimatedButton>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
