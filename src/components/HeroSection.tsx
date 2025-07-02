
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Users, CheckCircle } from "lucide-react";
import ContactForm from "./ContactForm";

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const scrollToConsultoria = () => {
    const element = document.getElementById('consultoria-cta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleConsultoriaClick = () => {
    setIsFormOpen(true);
  };

  return (
    <>
      <section className="pt-24 pb-16 bg-gradient-to-br from-contabilizei-blue via-contabilizei-blue-light to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Conteúdo principal */}
            <div className="max-w-4xl text-center lg:text-left">
              {/* Badge de urgência */}
              <div className="inline-flex items-center bg-contabilizei-orange/20 text-orange-100 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                <Clock className="w-4 h-4 mr-2" />
                Vagas Limitadas
              </div>

              {/* Headline principal */}
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                Consultoria <span className="text-contabilizei-orange">Gratuita</span> Exclusiva
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl mb-8 text-blue-100 animate-fade-in">
                Para desafios que vão <strong>além do seu CNPJ</strong>
              </p>

              {/* Stats sociais */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 animate-slide-in">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-sm">
                  <Users className="w-4 h-4 mr-2 text-contabilizei-orange" />
                  <span className="font-semibold">+200 Diagnósticos Realizados</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-sm">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span className="font-semibold">100% de Satisfação</span>
                </div>
              </div>

              {/* CTA principal */}
              <Button 
                onClick={handleConsultoriaClick}
                size="lg"
                className="bg-contabilizei-orange hover:bg-contabilizei-orange-light text-black font-bold px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in w-full sm:w-auto"
              >
                💡 Quero Minha Consultoria Gratuita!
              </Button>
              
              <p className="text-xs md:text-sm text-blue-200 mt-4 animate-fade-in">
                ⚠️ Vagas limitadas - apenas para quem recebeu esta comunicação
              </p>
            </div>

            {/* Imagem no canto direito */}
            <div className="hidden lg:flex justify-center items-center relative">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Casal feliz representando sucesso financeiro" 
                  className="max-w-full h-auto animate-fade-in opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-contabilizei-blue/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default HeroSection;
