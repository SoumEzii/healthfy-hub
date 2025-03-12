
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatedButton } from "./AnimatedButton";
import { LanguageSelector } from "./LanguageSelector";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Find Hospital", path: "#hospitals" },
    { name: "Contact", path: "#contact" }
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-white/90 backdrop-blur-md shadow-subtle" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-healthcare-blue">
            Medi<span className="text-healthcare-green">Search</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-healthcare-blue"
                  : "text-foreground/80 hover:text-healthcare-blue"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSelector />
          
          <Link to="/login">
            <AnimatedButton intent="secondary" size="sm">
              Login
            </AnimatedButton>
          </Link>
          
          <Link to="/dashboard">
            <AnimatedButton intent="primary" size="sm">
              Patient Portal
            </AnimatedButton>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-foreground" />
          ) : (
            <Menu size={24} className="text-foreground" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ease-spring ${
          isMobileMenuOpen 
            ? "max-h-[500px] opacity-100" 
            : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`py-2 text-base font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-healthcare-blue"
                  : "text-foreground/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="pt-2 flex flex-col space-y-3">
            <LanguageSelector isMobile />
            
            <Link to="/login" className="w-full">
              <AnimatedButton intent="secondary" size="base" fullWidth>
                Login
              </AnimatedButton>
            </Link>
            
            <Link to="/dashboard" className="w-full">
              <AnimatedButton intent="primary" size="base" fullWidth>
                Patient Portal
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
