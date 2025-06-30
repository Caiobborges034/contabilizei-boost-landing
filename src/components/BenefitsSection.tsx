
import { Card } from "@/components/ui/card";
import { Calculator, TrendingUp, Heart, Megaphone, Shield } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Calculator,
      title: "Contabilidade e Impostos",
      description: "Esclareça dúvidas sobre impostos e otimize sua gestão contábil com nossa expertise."
    },
    {
      icon: TrendingUp,
      title: "Organização Financeira",
      description: "Melhore o controle financeiro do seu negócio com estratégias personalizadas."
    },
    {
      icon: Heart,
      title: "Saúde e Bem-estar",
      description: "Acesso a benefícios exclusivos para cuidar da sua saúde e da sua equipe."
    },
    {
      icon: Megaphone,
      title: "Marketing e Digital",
      description: "Atraia mais clientes com estratégias de marketing digital eficazes."
    },
    {
      icon: Shield,
      title: "Proteção e Seguridade",
      description: "Proteja seu negócio com soluções de seguridade adequadas ao seu perfil."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-contabilizei-blue mb-4">
            Áreas que Cobrimos na Consultoria
          </h2>
          <p className="text-lg text-contabilizei-gray max-w-2xl mx-auto">
            Durante nossa consultoria, vamos apresentar soluções, parceiros e benefícios exclusivos em:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-white border-l-4 border-l-contabilizei-orange"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-contabilizei-blue to-contabilizei-blue-light p-3 rounded-lg">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-contabilizei-blue mb-2">{benefit.title}</h3>
                  <p className="text-contabilizei-gray text-sm">{benefit.description}</p>
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
