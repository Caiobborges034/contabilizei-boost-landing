
import { Button } from "@/components/ui/button";
import { Clock, Users, CheckCircle, Calendar } from "lucide-react";
import consultantHero from "@/assets/consultant-hero.jpg";

const HeroSection = () => {
  const handleCalendlyClick = () => {
    window.open('https://calendly.com/d/cs3n-h4f-6h6/consultoria-de-negocios', '_blank');
  };

  return (
    <section className="pt-24 pb-16 bg-contabilizei-blue text-white overflow-hidden">
      <div className="container mx-auto px-2 md:px-4">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center max-w-7xl mx-auto">
          {/* Content Column */}
          <div className="animate-fade-in px-2 md:px-0">
            {/* Badge de urgência */}
            <div className="inline-flex items-center bg-contabilizei-orange/20 text-orange-100 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
              <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              Condições Especiais
            </div>

            {/* Headline principal */}
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Descubra benefícios e produtos que seu <span className="text-contabilizei-orange">CNPJ já pode aproveitar</span> em uma consultoria personalizada para você
            </h1>
            
            {/* Subheadline */}
            <p className="text-base md:text-xl mb-6 md:mb-8 text-blue-100">
              Converse com um Especialista de Negócios da Contabilizei para te ajudar a entender como crescer seu negócio e trazer mais saúde, segurança e planejamento financeiro para sua vida pessoal.
            </p>

            {/* Stats sociais */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mb-6 md:mb-8 animate-slide-in">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 md:px-4 py-2">
                <Users className="w-4 h-4 md:w-5 md:h-5 mr-2 text-contabilizei-orange" />
                <span className="font-semibold text-sm md:text-base">+200 Diagnósticos Realizados</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 md:px-4 py-2">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-400" />
                <span className="font-semibold text-sm md:text-base">100% de Satisfação</span>
              </div>
            </div>

            {/* CTA principal */}
            <Button 
              onClick={handleCalendlyClick}
              size="lg"
              className="bg-contabilizei-orange hover:bg-contabilizei-orange-light text-black font-bold px-4 md:px-8 py-3 md:py-4 text-sm md:text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full md:w-auto"
            >
              <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              <span className="hidden md:inline">Agendar Consultoria Personalizada Agora</span>
              <span className="md:hidden">Agendar Consultoria Agora</span>
            </Button>
            
            {/* Linha de urgência */}
            <p className="text-xs md:text-sm text-blue-200 mt-3 md:mt-4">
              🔔 Condições especiais para clientes Contabilizei.
            </p>
          </div>

          {/* Image Column */}
          <div className="lg:flex justify-center animate-scale-in px-2 md:px-0">
            <img 
              src={consultantHero} 
              alt="Consultor de negócios da Contabilizei" 
              className="w-full max-w-lg h-[300px] md:h-[400px] lg:h-[460px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
