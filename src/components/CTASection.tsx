
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, CheckCircle, AlertTriangle, Calendar } from "lucide-react";

const CTASection = () => {
  const handleCalendlyClick = () => {
    window.open('https://calendly.com/d/cs3n-h4f-6h6/consultoria-de-negocios', '_blank');
  };

  return (
    <section id="consultoria-cta" className="py-16 bg-contabilizei-blue">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-white shadow-2xl animate-fade-in">
          <div className="text-center">
            {/* Badge de urgência */}
            <div className="inline-flex items-center bg-contabilizei-orange/20 text-contabilizei-orange px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Condições Especiais
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-contabilizei-blue mb-6">
              Garanta Sua Vaga na Consultoria Personalizada
            </h2>
            
            <p className="text-lg text-contabilizei-gray mb-8 max-w-2xl mx-auto">
              Nossa consultoria é personalizada e com condições especiais para clientes Contabilizei. Vamos entender suas necessidades atuais 
              e apresentar soluções exclusivas que podem transformar seu negócio.
            </p>

            {/* Benefícios listados */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Diagnóstico completo da sua vida além do CNPJ",
                  "Soluções personalizadas e parceiros exclusivos",
                  "Benefícios especiais apenas para participantes",
                  "Apoio em áreas além da contabilidade"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center justify-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-contabilizei-gray text-center">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Principal */}
            <Button 
              onClick={handleCalendlyClick}
              size="lg"
              className="bg-contabilizei-orange hover:bg-contabilizei-orange-light text-black font-bold px-4 md:px-12 py-4 md:py-6 text-sm md:text-xl rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl mb-6 w-full md:w-auto max-w-md md:max-w-none"
            >
              <Calendar className="w-5 h-5 mr-2" />
              <span className="block md:hidden">Agendar Consultoria Agora</span>
              <span className="hidden md:block">Agendar Consultoria Personalizada Agora</span>
            </Button>

            {/* Indicador de urgência */}
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="text-2xl">⚠️</span>
              <span className="text-black font-medium">Condições especiais para clientes Contabilizei - Garante já sua vaga!</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
