
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/40 pt-16 pb-8 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-healthcare-blue mb-5">
              Medi<span className="text-healthcare-green">Search</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Connecting Bharat to better healthcare, making quality medical services accessible to all.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 rounded-full bg-white text-healthcare-blue hover:bg-healthcare-blue hover:text-white transition-colors shadow-subtle"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-white text-healthcare-blue hover:bg-healthcare-blue hover:text-white transition-colors shadow-subtle"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-white text-healthcare-blue hover:bg-healthcare-blue hover:text-white transition-colors shadow-subtle"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-white text-healthcare-blue hover:bg-healthcare-blue hover:text-white transition-colors shadow-subtle"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-healthcare-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/book-appointment" className="text-muted-foreground hover:text-healthcare-blue transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-healthcare-blue transition-colors">
                  Patient Dashboard
                </Link>
              </li>
              <li>
                <Link to="#emergency" className="text-muted-foreground hover:text-healthcare-red transition-colors">
                  Emergency Help
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-healthcare-blue transition-colors">
                  Find Hospital
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-0.5 text-healthcare-blue flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Healthcare Avenue, Delhi 110001, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-healthcare-blue flex-shrink-0" />
                <span className="text-muted-foreground">+91 1800 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-healthcare-blue flex-shrink-0" />
                <span className="text-muted-foreground">contact@medisearch.in</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Language</h3>
            <LanguageSelector isMobile />
            
            <h3 className="text-base font-semibold mt-6 mb-4">Emergency Helpline</h3>
            <a 
              href="tel:108" 
              className="flex items-center px-4 py-3 bg-healthcare-red/10 text-healthcare-red rounded-xl hover:bg-healthcare-red/20 transition-colors"
            >
              <Phone size={20} className="mr-3" />
              <span className="font-medium">108</span>
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} MediSearch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
