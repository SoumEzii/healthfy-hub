
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Calendar, 
  AlertOctagon, 
  Stethoscope, 
  Search,
  Clock,
  ArrowRight
} from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Footer } from "@/components/ui/Footer";
import { cn } from "@/lib/utils";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const features = [
    {
      icon: <Brain size={24} />,
      title: "AI Triage System",
      description: "Our AI quickly assesses symptoms to determine urgency and direct you to appropriate care.",
    },
    {
      icon: <Calendar size={24} />,
      title: "Appointment Booking",
      description: "Book appointments online or at physical facilities with our integrated token system.",
    },
    {
      icon: <AlertOctagon size={24} />,
      title: "Emergency Handling",
      description: "Quick emergency alerts with priority routing to nearest available hospitals.",
    },
    {
      icon: <Stethoscope size={24} />,
      title: "Doctor Availability",
      description: "Real-time doctor schedules and availability status across healthcare facilities.",
    },
    {
      icon: <Search size={24} />,
      title: "Hospital Finder",
      description: "Locate the nearest hospitals and clinics with availability of specific services.",
    },
    {
      icon: <Clock size={24} />,
      title: "Queue Management",
      description: "Track your position in queue with real-time updates and estimated wait times.",
    },
  ];
  
  const testimonials = [
    {
      quote: "MediSearch transformed our rural hospital's patient management. Wait times reduced by 40% and patient satisfaction has dramatically improved.",
      author: "Dr. Anita Sharma",
      role: "Medical Director, Rajasthan",
    },
    {
      quote: "The emergency feature saved my father's life. The app quickly directed us to the nearest hospital with cardiac facilities when he had a heart attack.",
      author: "Rahul Verma",
      role: "Patient Family Member",
    },
    {
      quote: "As a hospital administrator, I can finally see real-time data on patient flow and resource allocation. This has been invaluable for our operations.",
      author: "Priya Malhotra",
      role: "Hospital Administrator",
    },
  ];
  
  const impactNumbers = [
    { number: "500+", label: "Hospitals Connected" },
    { number: "5M+", label: "Patients Served" },
    { number: "50K+", label: "Doctors Available" },
    { number: "80%", label: "Reduced Wait Times" },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 relative overflow-hidden bg-gradient-to-b from-white to-blue-50/50">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={cn(
              "opacity-0 transition-opacity duration-1000",
              isLoaded && "opacity-100"
            )}>
              <span className="px-3 py-1 bg-healthcare-blue/10 text-healthcare-blue rounded-full text-sm font-medium mb-5 inline-block">
                Bridging Healthcare Gaps
              </span>
            </div>
            
            <h1 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance opacity-0 transition-all duration-1000 delay-100",
              isLoaded && "opacity-100"
            )}>
              Connecting Bharat to{" "}
              <span className="text-gradient">Better Healthcare</span>
            </h1>
            
            <p className={cn(
              "text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 transition-all duration-1000 delay-200",
              isLoaded && "opacity-100"
            )}>
              A streamlined healthcare management system making quality medical services accessible to all—from bustling cities to remote villages.
            </p>
            
            <div className={cn(
              "flex flex-col sm:flex-row justify-center gap-4 opacity-0 transition-all duration-1000 delay-300",
              isLoaded && "opacity-100"
            )}>
              <Link to="/book-appointment">
                <AnimatedButton intent="primary" size="lg" icon={<Calendar size={18} />}>
                  Book Appointment
                </AnimatedButton>
              </Link>
              
              <Link to="/emergency">
                <AnimatedButton intent="destructive" size="lg" icon={<AlertOctagon size={18} />}>
                  Emergency Help
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-healthcare-blue opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-healthcare-green opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </section>
      
      {/* Features Section */}
      <section id="services" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 bg-healthcare-blue/10 text-healthcare-blue rounded-full text-sm font-medium mb-5 inline-block">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Designed to streamline patient care, reduce wait times, and improve healthcare access across India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <AnimatedButton intent="outline" icon={<ArrowRight size={16} />} iconPosition="right">
                View All Services
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Impact Numbers */}
      <section className="py-16 bg-healthcare-blue">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactNumbers.map((item, index) => (
              <div 
                key={item.label} 
                className="text-center scale-in"
                style={{ "--index": index } as React.CSSProperties}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {item.number}
                </div>
                <div className="text-sm text-blue-100">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 bg-healthcare-blue/10 text-healthcare-blue rounded-full text-sm font-medium mb-5 inline-block">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Making a Difference in Healthcare
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from patients, doctors, and administrators who've experienced improved healthcare management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.author}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-balance">
              Ready to Experience Better Healthcare Management?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join the thousands of patients and healthcare providers already using MediSearch to streamline their healthcare experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/dashboard">
                <AnimatedButton intent="primary" size="lg">
                  Get Started
                </AnimatedButton>
              </Link>
              <Link to="/contact">
                <AnimatedButton intent="outline" size="lg">
                  Contact Us
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
