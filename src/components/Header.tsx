
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleConsultoriaClick = () => {
    console.log('Clique no botão header');
    setIsFormOpen(true);
  };

  return (
    <>
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
            onClick={handleConsultoriaClick}
            className="bg-contabilizei-orange hover:bg-contabilizei-orange-light text-black font-bold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Quero Minha Consultoria
          </Button>
        </div>
      </header>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Header;
