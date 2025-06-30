
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, CheckCircle, AlertTriangle } from "lucide-react";

const CTASection = () => {
  const handleConsultoriaClick = () => {
    // Aqui você pode integrar com seu sistema de agendamento
    console.log("Consultoria solicitada!");
    // Por exemplo: window.open('https://calendly.com/contabilizei', '_blank');
  };

  return (
    <section id="consultoria-cta" className="py-16 bg-gradient-to-br from-contabilizei-blue via-contabilizei-blue-light to-blue-600">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-white shadow-2xl animate-fade-in">
          <div className="text-center">
            {/* Badge de urgência */}
            <div className="inline-flex items-center bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Vagas Limitadas - Apenas para Convidados
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-contabilizei-blue mb-6">
              Garante Sua Vaga na Consultoria Gratuita
            </h2>
            
            <p className="text-lg text-contabilizei-gray mb-8 max-w-2xl mx-auto">
              Nossa consultoria é 100% gratuita e personalizada. Vamos entender suas necessidades atuais 
              e apresentar soluções exclusivas que podem transformar seu negócio.
            </p>

            {/* Benefícios listados */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto">
              {[
                "Diagnóstico completo do seu negócio",
                "Soluções personalizadas e parceiros exclusivos",
                "Benefícios especiais apenas para participantes",
                "Apoio em áreas além da contabilidade"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-contabilizei-gray">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Principal */}
            <Button 
              onClick={handleConsultoriaClick}
              size="lg"
              className="bg-contabilizei-orange hover:bg-contabilizei-orange-light text-white font-bold px-12 py-6 text-xl rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl mb-6"
            >
              💡 Quero Minha Consultoria Gratuita Agora!
            </Button>

            {/* Indicador de urgência */}
            <div className="flex items-center justify-center space-x-2 text-sm text-contabilizei-gray">
              <Clock className="w-4 h-4 text-contabilizei-orange" />
              <span>Disponibilidade sujeita à agenda - Garanta já sua vaga!</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
