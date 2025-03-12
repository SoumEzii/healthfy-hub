
import { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { LucideFirst, LucideHospital, LucideArrowRight, LucideHeartPulse, LucideStethoscope, LucidePlus, LucideSearch, LucideSend, LucideUser, LucideLoader2 } from "lucide-react";

// AI Chat component for healthcare queries
const AIChatAssistant = () => {
  const [messages, setMessages] = useState<Array<{ role: "user" | "ai"; content: string }>>([
    { role: "ai", content: "Hi! I'm MediSearch AI assistant. How can I help with your healthcare questions today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of chat when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { role: "user", content: input }]);
    setIsLoading(true);
    setInput("");
    
    // Simulate AI response with predefined healthcare responses
    setTimeout(() => {
      let aiResponse = "I'm not sure about that. Could you provide more details?";
      
      const userQuery = input.toLowerCase();
      
      if (userQuery.includes("appointment") || userQuery.includes("book")) {
        aiResponse = "You can book an appointment through our Book Appointment page. Would you like me to direct you there?";
      } else if (userQuery.includes("emergency")) {
        aiResponse = "For medical emergencies, please call 108 immediately or use our Emergency Help button on the homepage.";
      } else if (userQuery.includes("doctor") || userQuery.includes("specialist")) {
        aiResponse = "We have various specialists available. You can check doctor availability in the Book Appointment section or I can help you find a specific specialty.";
      } else if (userQuery.includes("hospital") || userQuery.includes("clinic")) {
        aiResponse = "MediSearch connects you with government hospitals across India. You can find the nearest hospital using our location search feature.";
      } else if (userQuery.includes("covid") || userQuery.includes("vaccine")) {
        aiResponse = "For COVID-19 vaccination, please check the Co-WIN portal or ask about vaccine availability at your nearest government hospital through our app.";
      } else if (userQuery.includes("symptom") || userQuery.includes("pain") || userQuery.includes("fever")) {
        aiResponse = "Based on your symptoms, I recommend consulting with a healthcare professional. Would you like to book a triage appointment?";
      }
      
      setMessages(prev => [...prev, { role: "ai", content: aiResponse }]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="h-[600px] md:h-[500px] w-full md:max-w-md bg-white rounded-2xl shadow-subtle border border-border/30 flex flex-col">
      <div className="p-4 border-b flex items-center gap-2 bg-healthcare-blue/5 rounded-t-2xl">
        <div className="w-8 h-8 rounded-full bg-healthcare-blue flex items-center justify-center text-white">
          <LucideUser size={18} />
        </div>
        <h3 className="font-semibold">MediSearch AI Assistant</h3>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`mb-4 ${message.role === "user" ? "flex justify-end" : "flex justify-start"}`}
          >
            <div 
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === "user" 
                  ? "bg-healthcare-blue text-white rounded-tr-none" 
                  : "bg-gray-100 text-foreground rounded-tl-none"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none flex items-center gap-2">
              <LucideLoader2 size={16} className="animate-spin text-healthcare-blue" />
              <span className="text-sm text-muted-foreground">AI is typing...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }} 
          className="flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about healthcare services..."
            className="flex-1 px-4 py-2 rounded-xl border border-border focus:outline-none focus:ring-1 focus:ring-healthcare-blue"
          />
          <AnimatedButton 
            type="submit" 
            size="base"
            disabled={!input.trim() || isLoading}
            icon={isLoading ? <LucideLoader2 size={18} className="animate-spin" /> : <LucideSend size={18} />}
          >
            Send
          </AnimatedButton>
        </form>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Online Appointments",
      description: "Book appointments with doctors and specialists online without waiting in queues.",
      icon: <LucideCalendar size={24} />,
    },
    {
      title: "Hospital Locator",
      description: "Find the nearest government hospitals and healthcare centers based on your location.",
      icon: <LucideHospital size={24} />,
    },
    {
      title: "Emergency Services",
      description: "Quick access to emergency services with real-time ICU bed availability information.",
      icon: <LucideHeartPulse size={24} />,
    },
    {
      title: "Doctor Consultations",
      description: "Virtual and in-person consultations with qualified healthcare professionals.",
      icon: <LucideStethoscope size={24} />,
    },
    {
      title: "Health Records",
      description: "Secure storage and management of your medical records and prescriptions.",
      icon: <LucideFile size={24} />,
    },
    {
      title: "Medical Triage",
      description: "AI-powered initial assessment to prioritize treatment based on symptom severity.",
      icon: <LucideFirst size={24} />,
    },
    {
      title: "Vaccination Services",
      description: "Schedule and manage vaccination appointments for you and your family members.",
      icon: <LucidePlus size={24} />,
    },
    {
      title: "Medicine Finder",
      description: "Locate nearby pharmacies and check medicine availability in government stores.",
      icon: <LucideSearch size={24} />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <section className="container mx-auto px-4 mb-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Healthcare Services</h1>
            <p className="text-muted-foreground text-lg">
              Connecting you to quality healthcare services across India through our comprehensive platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <FeatureCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </section>
        
        <section className="container mx-auto px-4 mb-12">
          <div className="bg-gradient-to-r from-healthcare-blue/10 to-blue-400/10 rounded-2xl p-6 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Have questions about our services?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our AI assistant can help answer your healthcare questions, provide service information, 
                  and guide you to the right resources.
                </p>
                <div className="hidden md:block">
                  <AnimatedButton 
                    intent="primary" 
                    size="lg" 
                    icon={<LucideArrowRight size={18} />}
                    iconPosition="right"
                  >
                    Book an Appointment
                  </AnimatedButton>
                </div>
              </div>
              
              <div className="flex-1 w-full">
                <AIChatAssistant />
              </div>
              
              <div className="block md:hidden w-full">
                <AnimatedButton 
                  intent="primary" 
                  size="lg" 
                  icon={<LucideArrowRight size={18} />}
                  iconPosition="right"
                  fullWidth
                >
                  Book an Appointment
                </AnimatedButton>
              </div>
            </div>
          </div>
        </section>
        
        <section className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-subtle border border-border/30 p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">How Our Services Work</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-healthcare-blue/10 text-healthcare-blue mx-auto mb-4 flex items-center justify-center">
                  <LucideSearch size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Find</h3>
                <p className="text-muted-foreground">
                  Search for healthcare services, hospitals, or specialists based on your location and needs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-healthcare-blue/10 text-healthcare-blue mx-auto mb-4 flex items-center justify-center">
                  <LucideCalendar size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Book</h3>
                <p className="text-muted-foreground">
                  Schedule appointments online with your preferred healthcare provider at your convenience.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-healthcare-blue/10 text-healthcare-blue mx-auto mb-4 flex items-center justify-center">
                  <LucideHeartPulse size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Receive Care</h3>
                <p className="text-muted-foreground">
                  Get quality healthcare services and maintain all your records securely in one place.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
