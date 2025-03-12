
import { useState } from "react";
import { 
  ArrowLeft, 
  ArrowRight,
  MapPin,
  Building,
  Search,
  User,
  Calendar,
  Clock,
  CheckCircle
} from "lucide-react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { cn } from "@/lib/utils";

const BookAppointment = () => {
  const [step, setStep] = useState(1);
  const maxSteps = 4;
  
  const goToNextStep = () => {
    if (step < maxSteps) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };
  
  // Sample data for demonstration
  const hospitals = [
    {
      id: "hosp1",
      name: "AIIMS Delhi",
      location: "Ansari Nagar, New Delhi",
      distance: "2.5 km",
      waitTime: "~30 min",
    },
    {
      id: "hosp2",
      name: "Safdarjung Hospital",
      location: "Ansari Nagar West, New Delhi",
      distance: "3.2 km",
      waitTime: "~45 min",
    },
    {
      id: "hosp3",
      name: "Ram Manohar Lohia Hospital",
      location: "Baba Kharak Singh Marg, New Delhi",
      distance: "5.1 km",
      waitTime: "~20 min",
    },
  ];
  
  const departments = [
    { id: "dept1", name: "Cardiology" },
    { id: "dept2", name: "Neurology" },
    { id: "dept3", name: "Orthopedics" },
    { id: "dept4", name: "Pediatrics" },
    { id: "dept5", name: "Dermatology" },
    { id: "dept6", name: "Ophthalmology" },
  ];
  
  const doctors = [
    {
      id: "doc1",
      name: "Dr. Priya Singh",
      specialty: "Cardiologist",
      experience: "15 years",
      availability: "Available today",
      nextSlot: "11:30 AM",
    },
    {
      id: "doc2",
      name: "Dr. Rajesh Khanna",
      specialty: "Cardiologist",
      experience: "12 years",
      availability: "Available tomorrow",
      nextSlot: "10:00 AM",
    },
    {
      id: "doc3",
      name: "Dr. Anita Sharma",
      specialty: "Cardiologist",
      experience: "20 years",
      availability: "Available on 18 Aug",
      nextSlot: "2:15 PM",
    },
  ];
  
  const timeSlots = [
    { id: "slot1", time: "09:00 AM", available: true },
    { id: "slot2", time: "09:30 AM", available: true },
    { id: "slot3", time: "10:00 AM", available: true },
    { id: "slot4", time: "10:30 AM", available: false },
    { id: "slot5", time: "11:00 AM", available: true },
    { id: "slot6", time: "11:30 AM", available: true },
    { id: "slot7", time: "12:00 PM", available: false },
    { id: "slot8", time: "12:30 PM", available: false },
    { id: "slot9", time: "02:00 PM", available: true },
    { id: "slot10", time: "02:30 PM", available: true },
    { id: "slot11", time: "03:00 PM", available: true },
    { id: "slot12", time: "03:30 PM", available: false },
  ];
  
  const [selectedHospital, setSelectedHospital] = useState<string | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("2023-08-17");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="animate-fade-in">
            <h2 className="text-xl font-semibold mb-6">Select Hospital/Clinic</h2>
            
            <div className="mb-6 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search hospitals by name or location"
                className="w-full pl-10 pr-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-healthcare-blue/30"
              />
            </div>
            
            <div className="space-y-4">
              {hospitals.map((hospital) => (
                <div
                  key={hospital.id}
                  className={cn(
                    "p-4 border rounded-xl cursor-pointer transition-all duration-200",
                    selectedHospital === hospital.id
                      ? "border-healthcare-blue bg-healthcare-blue/5"
                      : "border-border hover:border-healthcare-blue/30 hover:bg-secondary/50"
                  )}
                  onClick={() => setSelectedHospital(hospital.id)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium mb-1">{hospital.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <MapPin size={14} className="mr-1" />
                        <span>{hospital.location}</span>
                      </div>
                    </div>
                    
                    {selectedHospital === hospital.id && (
                      <CheckCircle className="text-healthcare-blue" size={20} />
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-xs px-2 py-1 bg-blue-50 text-healthcare-blue rounded-full">
                      {hospital.distance}
                    </span>
                    <span className="text-xs px-2 py-1 bg-green-50 text-healthcare-green rounded-full">
                      Wait time: {hospital.waitTime}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="animate-fade-in">
            <h2 className="text-xl font-semibold mb-6">Select Department & Doctor</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Department</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {departments.map((department) => (
                  <div
                    key={department.id}
                    className={cn(
                      "p-3 border rounded-xl cursor-pointer transition-all duration-200 text-center",
                      selectedDepartment === department.id
                        ? "border-healthcare-blue bg-healthcare-blue/5"
                        : "border-border hover:border-healthcare-blue/30 hover:bg-secondary/50"
                    )}
                    onClick={() => setSelectedDepartment(department.id)}
                  >
                    {department.name}
                  </div>
                ))}
              </div>
            </div>
            
            <h3 className="text-lg font-medium mb-4">Available Doctors</h3>
            <div className="space-y-4">
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className={cn(
                    "p-4 border rounded-xl cursor-pointer transition-all duration-200",
                    selectedDoctor === doctor.id
                      ? "border-healthcare-blue bg-healthcare-blue/5"
                      : "border-border hover:border-healthcare-blue/30 hover:bg-secondary/50"
                  )}
                  onClick={() => setSelectedDoctor(doctor.id)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-start space-x-3">
                      <div className="h-12 w-12 rounded-full bg-healthcare-blue/10 flex items-center justify-center flex-shrink-0">
                        <User size={24} className="text-healthcare-blue" />
                      </div>
                      
                      <div>
                        <h4 className="font-medium">{doctor.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {doctor.specialty} • {doctor.experience} experience
                        </p>
                      </div>
                    </div>
                    
                    {selectedDoctor === doctor.id && (
                      <CheckCircle className="text-healthcare-blue" size={20} />
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 mt-3 pl-[3.75rem]">
                    <span className="text-xs px-2 py-1 bg-blue-50 text-healthcare-blue rounded-full">
                      {doctor.availability}
                    </span>
                    <span className="text-xs px-2 py-1 bg-green-50 text-healthcare-green rounded-full">
                      Next slot: {doctor.nextSlot}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="animate-fade-in">
            <h2 className="text-xl font-semibold mb-6">Select Date & Time</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Date</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar size={18} className="text-muted-foreground" />
                </div>
                <input 
                  type="date" 
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-healthcare-blue/30"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Available Time Slots</label>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {timeSlots.map((slot) => (
                  <div
                    key={slot.id}
                    className={cn(
                      "p-3 border rounded-xl text-center transition-all duration-200",
                      !slot.available && "opacity-50 cursor-not-allowed",
                      slot.available && selectedTimeSlot === slot.id
                        ? "border-healthcare-blue bg-healthcare-blue/5 cursor-pointer"
                        : slot.available 
                          ? "border-border hover:border-healthcare-blue/30 hover:bg-secondary/50 cursor-pointer" 
                          : "border-border"
                    )}
                    onClick={() => {
                      if (slot.available) {
                        setSelectedTimeSlot(slot.id);
                      }
                    }}
                  >
                    <div className="flex items-center justify-center">
                      <Clock size={14} className="mr-1.5 text-muted-foreground" />
                      <span>{slot.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                <span className="bg-green-50 text-healthcare-green text-xs px-2 py-0.5 rounded-full">
                  Note
                </span>{" "}
                Please arrive 15 minutes before your appointment time for registration.
              </p>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="animate-fade-in">
            <h2 className="text-xl font-semibold mb-6">Confirm Appointment</h2>
            
            <div className="bg-secondary/50 p-5 rounded-xl border border-border/50 mb-6">
              <h3 className="text-lg font-medium mb-4">Appointment Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Building size={18} className="mr-3 text-healthcare-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Hospital</p>
                    <p className="font-medium">AIIMS Delhi</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <User size={18} className="mr-3 text-healthcare-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Doctor</p>
                    <p className="font-medium">Dr. Priya Singh (Cardiologist)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar size={18} className="mr-3 text-healthcare-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-medium">Thursday, August 17, 2023</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={18} className="mr-3 text-healthcare-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Time</p>
                    <p className="font-medium">11:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-healthcare-blue/5 p-5 rounded-xl border border-healthcare-blue/20 mb-6">
              <h3 className="text-base font-medium mb-3 flex items-center">
                <CheckCircle size={18} className="mr-2 text-healthcare-blue" />
                Appointment Confirmation
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                A confirmation SMS and email will be sent to your registered contact information.
              </p>
              <p className="text-sm text-muted-foreground">
                You can view and manage this appointment from your dashboard.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="mt-1 mr-3"
                />
                <label htmlFor="terms" className="text-sm">
                  I confirm that the information provided is correct and I agree to the
                  <a href="#" className="text-healthcare-blue hover:underline"> terms and conditions</a>.
                </label>
              </div>
              
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="reminder" 
                  className="mt-1 mr-3"
                  defaultChecked
                />
                <label htmlFor="reminder" className="text-sm">
                  Send me a reminder 2 hours before my appointment.
                </label>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardSidebar />
      
      <main className="ml-0 md:ml-64 transition-all duration-300 ease-spring min-h-screen">
        {/* Header */}
        <header className="bg-white border-b border-border/50 p-4 md:p-6 sticky top-0 z-10 shadow-subtle">
          <div>
            <h1 className="text-2xl font-bold">Book Appointment</h1>
            <p className="text-muted-foreground">Complete the steps below to schedule your appointment</p>
          </div>
        </header>
        
        <div className="p-4 md:p-6 lg:p-8">
          {/* Progress Steps */}
          <div className="step-progress-bar mb-8">
            <div className="step-progress-fill" style={{ width: `${((step - 1) / (maxSteps - 1)) * 100}%` }}></div>
            
            {[1, 2, 3, 4].map((stepNumber) => (
              <div 
                key={stepNumber} 
                className={`step ${step === stepNumber ? "active" : ""} ${step > stepNumber ? "completed" : ""}`}
              >
                {step > stepNumber ? (
                  <CheckCircle size={16} />
                ) : (
                  stepNumber
                )}
                <span className="step-label">
                  {stepNumber === 1 && "Select Hospital"}
                  {stepNumber === 2 && "Choose Doctor"}
                  {stepNumber === 3 && "Select Time"}
                  {stepNumber === 4 && "Confirm"}
                </span>
              </div>
            ))}
          </div>
          
          {/* Step Content */}
          <div className="bg-white p-6 rounded-xl shadow-subtle border border-border/40 mb-6">
            {renderStepContent()}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <AnimatedButton 
              intent="outline" 
              onClick={goToPreviousStep}
              disabled={step === 1}
              icon={<ArrowLeft size={16} />}
              iconPosition="left"
            >
              Previous
            </AnimatedButton>
            
            <AnimatedButton 
              intent="primary" 
              onClick={step === maxSteps ? () => {} : goToNextStep}
              icon={step === maxSteps ? <CheckCircle size={16} /> : <ArrowRight size={16} />}
              iconPosition="right"
            >
              {step === maxSteps ? "Confirm Appointment" : "Continue"}
            </AnimatedButton>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookAppointment;
