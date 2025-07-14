
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Calculator, TrendingUp, Heart, Megaphone, Shield, Cross } from "lucide-react";
import BenefitModal from "./BenefitModal";

const BenefitsSection = () => {
  const [selectedBenefit, setSelectedBenefit] = useState<string | null>(null);

  const benefits = [
    {
      icon: Calculator,
      title: "Descubra onde você pode economizar pagando menos impostos",
      description: "Consultoria totalmente gratuita para te ajudar a sanar dúvidas e direcionar a resolução de problemas contábeis.",
      highlight: "100% Gratuito",
      type: "contabilidade"
    },
    {
      icon: TrendingUp,
      title: "Organize suas finanças com um especialista com uma condição especial",
      description: "Acompanhamento com 3 reuniões, de R$ 400, por apenas R$ 150, com acompanhamento próximo pelo consultor.",
      highlight: "62% de Desconto",
      type: "organizacao-financeira"
    },
    {
      icon: Heart,
      title: "Cuide da sua saúde e bem-estar sem gastar mais",
      description: "Acesso ao Total Pass (academias e exercícios em todo o Brasil) no plano multibenefícios sem acréscimo na mensalidade por 2 meses.",
      highlight: "2 Meses Grátis",
      type: "saude-bem-estar"
    },
    {
      icon: Megaphone,
      title: "Tenha presença digital profissional sem investimento inicial",
      description: "Criação de Website Gratuito e gerenciamento de redes sociais com condições especiais.",
      highlight: "Website Grátis",
      type: "marketing-digital"
    },
    {
      icon: Shield,
      title: "Entenda como proteger sua renda em caso de imprevistos",
      description: "Garanta seguros com a Contabilizei e obtenha descontos de até R$ 20 na mensalidade por 12 meses.",
      highlight: "Economize até R$ 240/ano",
      type: "protecao-seguridade"
    },
    {
      icon: Cross,
      title: "Acesse planos de saúde mais baratos através do seu CNPJ",
      description: "Condições especiais para contratação via CNPJ (até 30% mais barato do que contratar na PF).",
      highlight: "30% de Desconto",
      type: "plano-saude"
    }
  ];

  const handleBenefitClick = (benefitType: string) => {
    console.log(`Clique no benefício: ${benefitType}`);
    setSelectedBenefit(benefitType);
  };

  const handleCloseModal = () => {
    setSelectedBenefit(null);
  };

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-contabilizei-blue mb-4">
              Benefícios Exclusivos da Consultoria
            </h2>
            <p className="text-lg text-contabilizei-gray max-w-2xl mx-auto">
              Durante nossa consultoria vamos te escutar ativamente para entender as dores que possui e conseguir alocar as melhores soluções parceiros e benefícios disponíveis com condições especiais:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-white border-l-4 border-l-contabilizei-orange relative cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleBenefitClick(benefit.type)}
              >
                <div className="absolute top-2 right-2 bg-contabilizei-orange text-black text-xs font-bold px-2 py-1 rounded-full min-w-[100px] text-center leading-tight whitespace-nowrap">
                  {benefit.highlight}
                </div>
                <div className="flex items-start space-x-4 mt-8">
                  <div className="bg-gradient-to-r from-contabilizei-blue to-contabilizei-blue-light p-3 rounded-lg flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-contabilizei-blue mb-2 pr-4">{benefit.title}</h3>
                    <p className="text-contabilizei-gray text-sm">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <BenefitModal 
        isOpen={!!selectedBenefit} 
        onClose={handleCloseModal}
        benefitType={selectedBenefit || ''}
      />
    </>
  );
};

export default BenefitsSection;
