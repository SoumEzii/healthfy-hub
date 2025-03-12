
import { useState, useEffect } from "react";
import { 
  Calendar,
  ClipboardList,
  Upload,
  Bell,
  User
} from "lucide-react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { ActionButton } from "@/components/dashboard/ActionButton";
import { AppointmentCard } from "@/components/dashboard/AppointmentCard";
import { cn } from "@/lib/utils";

const Dashboard = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  // Sample data for demonstration
  const patientName = "Amit Kumar";
  
  const appointments = [
    {
      id: "apt001",
      doctor: "Dr. Priya Singh",
      specialty: "Cardiologist",
      hospital: "AIIMS Delhi",
      date: "Today, 15 August 2023",
      time: "11:30 AM",
      status: "ongoing" as const,
      queueNumber: 3,
      estimatedWaitTime: "~20 minutes"
    },
    {
      id: "apt002",
      doctor: "Dr. Rajesh Khanna",
      specialty: "Neurologist",
      hospital: "Max Super Speciality Hospital",
      date: "Tomorrow, 16 August 2023",
      time: "2:15 PM",
      status: "upcoming" as const,
    },
    {
      id: "apt003",
      doctor: "Dr. Anjali Mehta",
      specialty: "Dermatologist",
      hospital: "Fortis Hospital",
      date: "10 August 2023",
      time: "4:30 PM",
      status: "completed" as const,
    }
  ];
  
  const quickActions = [
    {
      title: "Book New Appointment",
      description: "Schedule a consultation with a doctor",
      icon: <Calendar size={24} />,
      to: "/book-appointment",
      color: "blue"
    },
    {
      title: "Check Queue Status",
      description: "View your position and wait time",
      icon: <ClipboardList size={24} />,
      to: "/queue-status",
      color: "green"
    },
    {
      title: "Upload Medical Records",
      description: "Add reports to your health profile",
      icon: <Upload size={24} />,
      to: "/upload-records",
      color: "blue"
    },
  ];
  
  const notifications = [
    {
      id: "notif1",
      title: "Appointment Reminder",
      message: "Your appointment with Dr. Priya Singh is in 2 hours",
      time: "2 hours ago",
      read: false
    },
    {
      id: "notif2",
      title: "New Lab Results",
      message: "Your blood test results are now available",
      time: "Yesterday",
      read: true
    }
  ];
  
  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardSidebar />
      
      <main className="ml-0 md:ml-64 transition-all duration-300 ease-spring min-h-screen">
        {/* Header */}
        <header className="bg-white border-b border-border/50 p-4 md:p-6 sticky top-0 z-10 shadow-subtle">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {patientName}</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-2 rounded-full bg-secondary/80 hover:bg-secondary transition-colors">
                <Bell size={20} />
                {notifications.some(n => !n.read) && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-healthcare-red rounded-full"></span>
                )}
              </button>
              
              <button className="flex items-center space-x-2 p-1.5 rounded-full bg-secondary/80 hover:bg-secondary transition-colors">
                <div className="h-8 w-8 rounded-full bg-healthcare-blue/10 text-healthcare-blue flex items-center justify-center">
                  <User size={18} />
                </div>
              </button>
            </div>
          </div>
        </header>
        
        <div className="p-4 md:p-6 lg:p-8">
          {/* Quick Actions */}
          <section className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 opacity-0 transition-all duration-500",
            loaded && "opacity-100"
          )}>
            {quickActions.map((action, index) => (
              <ActionButton
                key={action.title}
                {...action}
                className={cn(
                  "slide-in-bottom",
                  loaded && "opacity-100"
                )}
                style={{ "--index": index } as React.CSSProperties}
              />
            ))}
          </section>
          
          {/* Emergency Button */}
          <section className={cn(
            "mb-8 opacity-0 transition-all duration-500 delay-300",
            loaded && "opacity-100"
          )}>
            <ActionButton
              title="Emergency Assistance"
              description="Get immediate help for medical emergencies"
              icon={<Bell size={24} />}
              to="/emergency"
              color="red"
            />
          </section>
          
          {/* Appointments Section */}
          <section className={cn(
            "opacity-0 transition-all duration-500 delay-500",
            loaded && "opacity-100"
          )}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Your Appointments</h2>
              <a href="/appointments" className="text-sm text-healthcare-blue hover:underline">
                View All
              </a>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {appointments.map((appointment, index) => (
                <AppointmentCard
                  key={appointment.id}
                  {...appointment}
                  className={cn(
                    "scale-in",
                    loaded && "opacity-100"
                  )}
                  style={{ "--index": index + 3 } as React.CSSProperties}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
