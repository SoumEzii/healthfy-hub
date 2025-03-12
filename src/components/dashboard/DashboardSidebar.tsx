
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Calendar, 
  Clock, 
  AlertOctagon, 
  FileText, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export const DashboardSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "Book Appointment", icon: Calendar, path: "/book-appointment" },
    { name: "My Appointments", icon: Clock, path: "/appointments" },
    { name: "Emergency", icon: AlertOctagon, path: "/emergency", highlight: true },
    { name: "Medical Records", icon: FileText, path: "/records" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];
  
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  
  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };
  
  return (
    <>
      {/* Mobile Sidebar Toggle */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-white p-2 rounded-lg shadow-button"
        onClick={toggleMobileSidebar}
        aria-label={isMobileOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      
      {/* Sidebar Backdrop (Mobile) */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full bg-white border-r border-border/50 shadow-subtle z-40 transition-all duration-300 ease-spring",
          isCollapsed ? "w-[70px]" : "w-64",
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div 
            className={cn(
              "h-16 flex items-center px-4 border-b border-border/50",
              isCollapsed ? "justify-center" : "justify-between"
            )}
          >
            {!isCollapsed && (
              <Link to="/" className="flex items-center">
                <span className="text-xl font-bold text-healthcare-blue">
                  Medi<span className="text-healthcare-green">Search</span>
                </span>
              </Link>
            )}
            
            {isCollapsed && (
              <span className="text-xl font-bold text-healthcare-blue">M</span>
            )}
            
            <button
              className="md:flex hidden items-center justify-center w-6 h-6 rounded-full bg-secondary/80 text-foreground/60 hover:bg-secondary transition-colors"
              onClick={toggleSidebar}
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <ChevronRight 
                size={16} 
                className={cn(
                  "transition-transform duration-300",
                  isCollapsed ? "rotate-180" : ""
                )} 
              />
            </button>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex-1 py-6 px-3 overflow-y-auto">
            <ul className="space-y-1.5">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                      location.pathname === item.path 
                        ? "bg-healthcare-blue/10 text-healthcare-blue" 
                        : "text-foreground/70 hover:bg-secondary hover:text-foreground",
                      item.highlight && !isCollapsed && "bg-healthcare-red/10 text-healthcare-red hover:bg-healthcare-red/20",
                      isCollapsed && "justify-center"
                    )}
                  >
                    <item.icon 
                      size={20} 
                      className={cn(
                        item.highlight && "text-healthcare-red",
                        location.pathname === item.path && !item.highlight && "text-healthcare-blue"
                      )} 
                    />
                    
                    {!isCollapsed && (
                      <span className="ml-3">{item.name}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Sidebar Footer */}
          <div className="p-3 border-t border-border/50">
            <Link
              to="/logout"
              className={cn(
                "flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-colors text-foreground/70 hover:bg-secondary hover:text-foreground",
                isCollapsed && "justify-center"
              )}
            >
              <LogOut size={20} />
              
              {!isCollapsed && (
                <span className="ml-3">Logout</span>
              )}
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};
