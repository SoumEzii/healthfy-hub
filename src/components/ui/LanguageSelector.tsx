
import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface LanguageSelectorProps {
  isMobile?: boolean;
}

export const LanguageSelector = ({ isMobile = false }: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  
  const languages = [
    { name: "English", code: "en" },
    { name: "हिन्दी", code: "hi" },
    { name: "ਪੰਜਾਬੀ", code: "pa" },
    { name: "ગુજરાતી", code: "gu" },
    { name: "বাংলা", code: "bn" },
    { name: "ಕನ್ನಡ", code: "kn" },
    { name: "தமிழ்", code: "ta" },
    { name: "తెలుగు", code: "te" },
    { name: "ଓଡ଼ିଆ", code: "or" },
  ];
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };
  
  return (
    <div className="relative">
      <button
        className={cn(
          "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-healthcare-blue",
          isMobile ? "w-full justify-between bg-secondary/50 px-3 py-2 rounded-lg" : ""
        )}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        <div className="flex items-center">
          <Globe size={16} className="mr-1.5" />
          <span>{selectedLanguage}</span>
        </div>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
        />
      </button>
      
      {isOpen && (
        <div
          className={cn(
            "absolute z-50 bg-white rounded-lg shadow-soft border border-border mt-1 py-1 transition-all duration-200 ease-spring animate-fade-in",
            isMobile ? "w-full left-0" : "min-w-[180px] right-0"
          )}
        >
          <div className="max-h-64 overflow-y-auto">
            {languages.map((language) => (
              <button
                key={language.code}
                className={cn(
                  "w-full text-left px-4 py-2 text-sm hover:bg-secondary/50 transition-colors",
                  selectedLanguage === language.name ? "text-healthcare-blue font-medium" : "text-foreground/80"
                )}
                onClick={() => selectLanguage(language.name)}
              >
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
