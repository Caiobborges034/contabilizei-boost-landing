
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, Heart, Megaphone, Shield, Cross, CheckCircle } from "lucide-react";
import ContactForm from "./ContactForm";

interface BenefitModalProps {
  isOpen: boolean;
  onClose: () => void;
  benefitType: string;
}

const BenefitModal = ({ isOpen, onClose, benefitType }: BenefitModalProps) => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleContactFormClick = () => {
    console.log(`Clique no botão de contato do benefício: ${benefitType}`);
    setIsContactFormOpen(true);
  };

  const handleContactFormClose = () => {
    setIsContactFormOpen(false);
  };

  const getBenefitContent = () => {
    switch (benefitType) {
      case 'contabilidade':
        return {
          icon: Calculator,
          title: 'Descubra onde você pode economizar pagando menos impostos',
          description: 'Nossa consultoria especializada vai identificar oportunidades de economia tributária para o seu negócio.',
          details: [
            'Análise completa da sua situação fiscal',
            'Orientação sobre regime tributário ideal',
            'Esclarecimento de dúvidas sobre impostos',
            'Suporte especializado sem custo adicional'
          ],
          highlight: 'R$ 150,00',
          color: 'text-green-600',
          whatsappLink: 'https://wa.me/5541998130416?text=Oi%2C%20gostaria%20de%20conversar%20com%20o%20consultor%20pois%20me%20interessei%20sobre%20quest%C3%B5es%20cont%C3%A1beis%2C%20entender%20onde%20posso%20economizar%20com%20impostos'
        };
      
      case 'organizacao-financeira':
        return {
          icon: TrendingUp,
          title: 'Organize suas finanças com um especialista com uma condição especial',
          description: 'Tenha acesso a consultoria financeira personalizada para organizar e otimizar suas finanças pessoais e empresariais.',
          details: [
            '3 reuniões personalizadas com consultor',
            'Planejamento financeiro estratégico',
            'Ferramentas de controle e monitoramento'
          ],
          highlight: 'R$ 150,00',
          color: 'text-green-600',
          whatsappLink: 'https://wa.me/5541998130416?text=Oi%2C%20quero%20falar%20com%20o%20consultor%20para%20me%20ajudar%20com%20quest%C3%B5es%20financeiras'
        };
      
      case 'saude-bem-estar':
        return {
          icon: Heart,
          title: 'Cuide da sua saúde e bem-estar sem gastar mais',
          description: 'Acesse programas de bem-estar, academias e cuidados com a saúde através de benefícios corporativos.',
          details: [
            'Acesso a +15.000 academias no Brasil',
            'Aulas online e presenciais',
            'Personal trainer virtual',
            'Planos de treino personalizados',
            '4 consultas com psicólogo e 1 com nutricionista por mês'
          ],
          highlight: 'R$ 150,00',
          color: 'text-green-600',
          whatsappLink: 'https://wa.me/5541998130416?text=Oi%2C%20quero%20falar%20com%20o%20consultor%20para%20me%20ajudar%20com%20quest%C3%B5es%20de%20bem-estar'
        };
      
      case 'marketing-digital':
        return {
          icon: Megaphone,
          title: 'Tenha presença digital profissional sem investimento inicial',
          description: 'Desenvolva sua marca e presença digital com ferramentas e consultoria especializadas.',
          details: [
            'Criação de website profissional gratuito',
            'Configuração de redes sociais',
            'Gerenciamento de conteúdo',
            'Suporte técnico especializado'
          ],
          highlight: 'R$ 150,00',
          color: 'text-green-600',
          whatsappLink: 'https://wa.me/5541998130416?text=Oi%2C%20quero%20falar%20com%20o%20consultor%20para%20me%20ajudar%20com%20quest%C3%B5es%20de%20marketing'
        };
      
      case 'protecao-seguridade':
        return {
          icon: Shield,
          title: 'Entenda como proteger sua renda em caso de imprevistos',
          description: 'Conheça soluções de proteção financeira e seguros adequados para sua realidade empresarial.',
          details: [
            'Seguro empresarial com cobertura completa',
            'Desconto de até R$ 20/mês por 12 meses',
            'Análise de riscos personalizada',
            'Suporte dedicado para sinistros',
            'Condições exclusivas para clientes'
          ],
          highlight: 'R$ 150,00',
          color: 'text-green-600',
          whatsappLink: 'https://wa.me/5541998130416?text=Oi%2C%20quero%20falar%20com%20o%20consultor%20para%20me%20ajudar%20a%20garantir%20seguran%C3%A7a%20para%20minha%20renda'
        };
      
      case 'plano-saude':
        return {
          icon: Cross,
          title: 'Acesse planos de saúde mais baratos através do seu CNPJ',
          description: 'Descubra como usar seu CNPJ para ter acesso a planos de saúde com melhores condições.',
          details: [
            'Planos de saúde via CNPJ',
            'Cobertura odontológica inclusa',
            'Até 30% mais barato que pessoa física',
            'Rede credenciada ampla',
            'Atendimento especializado'
          ],
          highlight: 'R$ 150,00',
          color: 'text-green-600',
          whatsappLink: 'https://wa.me/5541998130416?text=Oi%2C%20quero%20falar%20com%20o%20consultor%20para%20me%20ajudar%20com%20as%20melhores%20op%C3%A7%C3%B5es%20de%20plano%20de%20sa%C3%BAde'
        };
      
      default:
        return {
          icon: CheckCircle,
          title: 'Benefício Exclusivo',
          description: 'Aproveite esta oportunidade única',
          details: ['Benefício disponível apenas para participantes da consultoria'],
          highlight: 'Exclusivo',
          color: 'text-contabilizei-blue'
        };
    }
  };

  const content = getBenefitContent();
  const IconComponent = content.icon;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-contabilizei-blue p-3 rounded-lg">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <div>
                <DialogTitle className="text-contabilizei-blue text-left">
                  {content.title}
                </DialogTitle>
                <span className="text-sm font-bold text-contabilizei-success">
                  {content.highlight}
                </span>
              </div>
            </div>
            <DialogDescription className="text-left">
              {content.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-contabilizei-blue">O que está incluso:</h4>
              <ul className="space-y-2">
                {content.details.map((detail, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-green-600 font-semibold">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button 
              onClick={() => {
                window.open(content.whatsappLink, '_blank');
                onClose();
              }}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Quero aproveitar esta oportunidade
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      <ContactForm isOpen={isContactFormOpen} onClose={handleContactFormClose} />
    </>
  );
};

export default BenefitModal;
