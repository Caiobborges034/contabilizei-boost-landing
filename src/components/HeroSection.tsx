
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
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge de urgência */}
            <div className="inline-flex items-center bg-contabilizei-orange/20 text-orange-100 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Clock className="w-4 h-4 mr-2" />
              Vagas Limitadas
            </div>

            {/* Headline principal */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Descubra benefícios e produtos que seu <span className="text-contabilizei-orange">CNPJ já pode aproveitar</span> — em uma consultoria gratuita e personalizada.
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in">
              Sem custo. Sem burocracia. <strong>Só as oportunidades que você está perdendo como PJ.</strong>
            </p>

            {/* Stats sociais */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 animate-slide-in">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Users className="w-5 h-5 mr-2 text-contabilizei-orange" />
                <span className="font-semibold">+200 Diagnósticos Realizados</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span className="font-semibold">100% de Satisfação</span>
              </div>
            </div>

            {/* CTA principal */}
            <Button 
              onClick={handleConsultoriaClick}
              size="lg"
              className="bg-contabilizei-orange hover:bg-contabilizei-orange-light text-black font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in"
            >
              Quero descobrir agora
            </Button>
            
            {/* Linha de urgência */}
            <p className="text-sm text-blue-200 mt-4 animate-fade-in">
              🔔 Atendimentos limitados por semana para garantir qualidade.
            </p>
          </div>
        </div>
      </section>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default HeroSection;
