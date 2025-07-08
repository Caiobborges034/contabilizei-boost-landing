
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const SocialProofSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-contabilizei-blue mb-4">
            O Que Nossos Clientes Falam
          </h2>
          <div className="flex items-center justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-contabilizei-gray ml-2 font-medium">Avaliação média: 4.8</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="p-8 hover:shadow-lg transition-all duration-300 animate-fade-in bg-gradient-to-br from-white to-gray-50 border border-gray-200">
            <Quote className="w-8 h-8 text-contabilizei-orange mb-4 mx-auto" />
            <p className="text-contabilizei-gray mb-4 italic text-center text-lg">
              "Ser ouvido é muito bom! Já fazia algum tempo que eu tinha vários pontos para comentar sobre a Contabilizei, que, de forma proativa, não daria essa visibilidade. Parabéns pela iniciativa."
            </p>
            <div className="border-t pt-4 text-center">
              <p className="font-semibold text-contabilizei-blue">Cliente Contabilizei</p>
              <p className="text-sm text-contabilizei-gray">Consultoria Realizada</p>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all duration-300 animate-fade-in bg-gradient-to-br from-white to-gray-50 border border-gray-200" style={{ animationDelay: '0.2s' }}>
            <Quote className="w-8 h-8 text-contabilizei-orange mb-4 mx-auto" />
            <p className="text-contabilizei-gray mb-4 italic text-center text-lg">
              "Muito bom papo e reforço a praticidade e clareza do painel da contabilizei para os usuários e todo suporte."
            </p>
            <div className="border-t pt-4 text-center">
              <p className="font-semibold text-contabilizei-blue">Cliente Contabilizei</p>
              <p className="text-sm text-contabilizei-gray">Consultoria Realizada</p>
            </div>
          </Card>
        </div>

        {/* Stats destacados */}
        <div className="bg-gradient-to-r from-contabilizei-blue to-contabilizei-blue-light rounded-2xl p-8 text-white text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-contabilizei-orange mb-2">+200</div>
              <div className="text-blue-100">Diagnósticos Realizados</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-contabilizei-orange mb-2">100%</div>
              <div className="text-blue-100">Taxa de Satisfação</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-contabilizei-orange mb-2">4.8★</div>
              <div className="text-blue-100">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
