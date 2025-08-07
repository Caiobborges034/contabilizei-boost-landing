
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
const contabilizeiLogo = "/lovable-uploads/f6a2af14-1f73-4f3a-b9e4-78de34ed3b81.png";

const Header = () => {
  const handleCalendlyClick = () => {
    window.open('https://calendly.com/d/cs3n-h4f-6h6/consultoria-de-negocios', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-2 md:px-4 py-2 md:py-4 flex items-center justify-between gap-2 md:gap-4">
        <div className="flex items-center flex-shrink-0 min-w-0">
          <img 
            src={contabilizeiLogo}
            alt="Contabilizei Logo" 
            className="h-8 md:h-10 w-auto max-w-[100px] md:max-w-[140px] object-contain"
          />
        </div>
        
        <Button 
          onClick={handleCalendlyClick}
          className="bg-contabilizei-orange hover:bg-contabilizei-orange-light text-black font-bold px-2 md:px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-xs md:text-base flex-shrink-0 min-w-[90px] md:min-w-[140px]"
        >
          <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
          <span className="hidden md:inline">Agendar Consultoria</span>
          <span className="md:hidden">Agendar</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
