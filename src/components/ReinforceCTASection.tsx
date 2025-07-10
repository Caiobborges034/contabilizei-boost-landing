
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ContactForm from "./ContactForm";

const ReinforceCTASection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleConsultoriaClick = () => {
    console.log('Clique no reforço de CTA');
    setIsFormOpen(true);
  };

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-contabilizei-blue via-contabilizei-blue-light to-blue-600">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto p-8 md:p-12 bg-white shadow-2xl animate-fade-in text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-contabilizei-blue mb-8">
              Pronto para destravar tudo que seu CNPJ pode oferecer?
            </h2>
            
            <Button 
              onClick={handleConsultoriaClick}
              size="lg"
              className="bg-contabilizei-orange hover:bg-contabilizei-orange-light text-black font-bold px-12 py-6 text-xl rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Quero minha consultoria gratuita
            </Button>
          </Card>
        </div>
      </section>
      
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default ReinforceCTASection;
