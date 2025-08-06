
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Header = () => {
  const handleCalendlyClick = () => {
    window.open('https://calendly.com/d/cs3n-h4f-6h6/consultoria-de-negocios', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="https://i0.wp.com/tradutoriniciante.com.br/wp-content/uploads/2021/05/contabilizei-logo-fundo-transparente.png?fit=1042%2C500" 
            alt="Contabilizei Logo" 
            className="h-10 w-auto"
          />
        </div>
        
        <Button 
          onClick={handleCalendlyClick}
          className="bg-contabilizei-orange hover:bg-contabilizei-orange-light text-black font-bold px-4 md:px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-sm md:text-base"
        >
          <Calendar className="w-4 h-4 mr-2" />
          <span className="hidden md:inline">Agendar Consultoria</span>
          <span className="md:hidden">Agendar</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
