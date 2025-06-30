
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const SocialProofSection = () => {
  const testimonials = [
    {
      text: "A consultoria da Contabilizei transformou completamente minha organização financeira. Recomendo!",
      author: "Maria Silva",
      business: "E-commerce"
    },
    {
      text: "Consegui esclarecer várias dúvidas sobre impostos e ainda descobri benefícios que não conhecia.",
      author: "João Santos",
      business: "Consultoria"
    },
    {
      text: "Com as estratégias de marketing que me apresentaram, consegui atrair 40% mais clientes.",
      author: "Ana Costa",
      business: "Serviços"
    }
  ];

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
            <span className="text-contabilizei-gray ml-2 font-medium">100% de Satisfação</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in bg-gradient-to-br from-white to-gray-50 border border-gray-200"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="w-8 h-8 text-contabilizei-orange mb-4" />
              <p className="text-contabilizei-gray mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-contabilizei-blue">{testimonial.author}</p>
                <p className="text-sm text-contabilizei-gray">{testimonial.business}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats destacados */}
        <div className="bg-gradient-to-r from-contabilizei-blue to-contabilizei-blue-light rounded-2xl p-8 mt-12 text-white text-center">
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
              <div className="text-4xl font-bold text-contabilizei-orange mb-2">5★</div>
              <div className="text-blue-100">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
