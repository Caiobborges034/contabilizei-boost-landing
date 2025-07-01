
import { Card } from "@/components/ui/card";
import { Calculator, TrendingUp, Heart, Megaphone, Shield } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Calculator,
      title: "Contabilidade e Impostos",
      description: "Consultoria totalmente gratuita para te ajudar a sanar dúvidas e direcionar a resolução de problemas contábeis.",
      highlight: "100% Gratuito"
    },
    {
      icon: TrendingUp,
      title: "Organização Financeira",
      description: "Acompanhamento com 3 reuniões, de R$ 400, por apenas R$ 150, com acompanhamento próximo pelo consultor.",
      highlight: "62% de Desconto"
    },
    {
      icon: Heart,
      title: "Saúde e Bem-estar",
      description: "Acesso ao Total Pass (academias e exercícios em todo o Brasil) no plano multibenefícios sem acréscimo na mensalidade por 2 meses.",
      highlight: "2 Meses Grátis"
    },
    {
      icon: Megaphone,
      title: "Marketing e Digital",
      description: "Criação de Website Gratuito e gerenciamento de redes sociais com condições especiais.",
      highlight: "Website Gratuito"
    },
    {
      icon: Shield,
      title: "Proteção e Seguridade",
      description: "Garanta seguros com a Contabilizei e obtenha descontos de até R$ 20 na mensalidade por 12 meses.",
      highlight: "R$ 240 de Economia"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-contabilizei-blue mb-4">
            Benefícios Exclusivos da Consultoria
          </h2>
          <p className="text-lg text-contabilizei-gray max-w-2xl mx-auto">
            Durante nossa consultoria, você terá acesso a soluções, parceiros e benefícios exclusivos com condições especiais:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-white border-l-4 border-l-contabilizei-orange relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-4 right-4 bg-contabilizei-orange text-white text-xs font-bold px-2 py-1 rounded-full">
                {benefit.highlight}
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-contabilizei-blue to-contabilizei-blue-light p-3 rounded-lg">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-contabilizei-blue mb-2">{benefit.title}</h3>
                  <p className="text-contabilizei-gray text-sm pr-16">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
