
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToConsultoria = () => {
    const element = document.getElementById('consultoria-cta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-contabilizei-blue to-contabilizei-blue-light rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className="text-xl font-bold text-contabilizei-blue">Contabilizei</span>
        </div>
        
        <Button 
          onClick={scrollToConsultoria}
          className="bg-contabilizei-orange hover:bg-contabilizei-orange-light text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
        >
          Quero Minha Consultoria
        </Button>
      </div>
    </header>
  );
};

export default Header;
