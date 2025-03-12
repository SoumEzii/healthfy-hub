
import { cn } from "@/lib/utils";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  AlertCircle,
  X,
  RefreshCw
} from "lucide-react";
import { AnimatedButton } from "../ui/AnimatedButton";

interface AppointmentCardProps {
  id: string;
  doctor: string;
  specialty: string;
  hospital: string;
  date: string;
  time: string;
  status: "upcoming" | "ongoing" | "completed" | "cancelled";
  queueNumber?: number;
  estimatedWaitTime?: string;
  className?: string;
}

export const AppointmentCard = ({
  id,
  doctor,
  specialty,
  hospital,
  date,
  time,
  status,
  queueNumber,
  estimatedWaitTime,
  className,
}: AppointmentCardProps) => {
  const statusMap = {
    upcoming: {
      label: "Upcoming",
      color: "bg-blue-50 text-healthcare-blue",
      icon: Calendar,
    },
    ongoing: {
      label: "In Progress",
      color: "bg-yellow-50 text-yellow-600",
      icon: RefreshCw,
    },
    completed: {
      label: "Completed",
      color: "bg-green-50 text-healthcare-green",
      icon: Clock,
    },
    cancelled: {
      label: "Cancelled",
      color: "bg-red-50 text-healthcare-red",
      icon: X,
    },
  };
  
  const StatusIcon = statusMap[status].icon;
  
  return (
    <div
      className={cn(
        "glass-card rounded-2xl overflow-hidden transition-all duration-300",
        "border border-border/50",
        "hover:shadow-lg",
        className
      )}
    >
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold">{doctor}</h3>
            <p className="text-sm text-muted-foreground">{specialty}</p>
          </div>
          
          <span 
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium flex items-center",
              statusMap[status].color
            )}
          >
            <StatusIcon size={14} className="mr-1" />
            {statusMap[status].label}
          </span>
        </div>
        
        <div className="space-y-3 mb-5">
          <div className="flex items-center text-sm">
            <MapPin size={16} className="mr-2 text-healthcare-blue" />
            <span>{hospital}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <Calendar size={16} className="mr-2 text-healthcare-blue" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <Clock size={16} className="mr-2 text-healthcare-blue" />
            <span>{time}</span>
          </div>
        </div>
        
        {(status === "upcoming" || status === "ongoing") && queueNumber && (
          <div className="p-3 bg-healthcare-blue/5 rounded-xl mb-5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Queue Status</span>
              <span className="text-xs bg-healthcare-blue/10 text-healthcare-blue px-2 py-0.5 rounded-full">
                #{queueNumber}
              </span>
            </div>
            
            {estimatedWaitTime && (
              <div className="flex items-center text-sm">
                <AlertCircle size={14} className="mr-1.5 text-yellow-600" />
                <span className="text-muted-foreground">Est. wait time: {estimatedWaitTime}</span>
              </div>
            )}
          </div>
        )}
        
        {status === "upcoming" && (
          <div className="flex space-x-3">
            <AnimatedButton intent="outline" size="sm" fullWidth>
              Reschedule
            </AnimatedButton>
            <AnimatedButton intent="destructive" size="sm" fullWidth>
              Cancel
            </AnimatedButton>
          </div>
        )}
        
        {status === "ongoing" && (
          <AnimatedButton intent="primary" size="base" fullWidth>
            View Queue Status
          </AnimatedButton>
        )}
        
        {status === "completed" && (
          <div className="flex space-x-3">
            <AnimatedButton intent="outline" size="sm" fullWidth>
              View Details
            </AnimatedButton>
            <AnimatedButton intent="primary" size="sm" fullWidth>
              Book Follow-up
            </AnimatedButton>
          </div>
        )}
      </div>
    </div>
  );
};
