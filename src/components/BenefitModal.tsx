
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, Heart, Megaphone, Shield, Cross, CheckCircle } from "lucide-react";

interface BenefitModalProps {
  isOpen: boolean;
  onClose: () => void;
  benefitType: string;
}

const BenefitModal = ({ isOpen, onClose, benefitType }: BenefitModalProps) => {
  const getBenefitContent = () => {
    switch (benefitType) {
      case 'contabilidade':
        return {
          icon: Calculator,
          title: 'Contabilidade e Impostos',
          description: 'Consultoria totalmente gratuita para resolver suas dúvidas contábeis',
          details: [
            'Análise completa da sua situação fiscal',
            'Orientação sobre regime tributário ideal',
            'Esclarecimento de dúvidas sobre impostos',
            'Planejamento tributário personalizado',
            'Suporte especializado sem custo adicional'
          ],
          highlight: '100% Gratuito',
          color: 'text-green-600'
        };
      
      case 'organizacao-financeira':
        return {
          icon: TrendingUp,
          title: 'Organização Financeira',
          description: 'Transforme sua gestão financeira com desconto especial',
          details: [
            '3 reuniões personalizadas com consultor',
            'Análise completa do fluxo de caixa',
            'Planejamento financeiro estratégico',
            'Ferramentas de controle e monitoramento',
            'Acompanhamento próximo por 3 meses'
          ],
          highlight: '62% de Desconto - De R$ 400 por R$ 150',
          color: 'text-contabilizei-orange'
        };
      
      case 'saude-bem-estar':
        return {
          icon: Heart,
          title: 'Saúde e Bem-estar',
          description: 'Acesso gratuito ao Total Pass por 2 meses',
          details: [
            'Acesso a +15.000 academias no Brasil',
            'Aulas online e presenciais',
            'Personal trainer virtual',
            'Planos de treino personalizados',
            'Sem taxa de adesão nos primeiros 2 meses'
          ],
          highlight: '2 Meses Grátis',
          color: 'text-red-500'
        };
      
      case 'marketing-digital':
        return {
          icon: Megaphone,
          title: 'Marketing e Digital',
          description: 'Website profissional e presença digital completa',
          details: [
            'Criação de website profissional gratuito',
            'Configuração de redes sociais',
            'Estratégia de marketing digital',
            'Gerenciamento de conteúdo',
            'Suporte técnico especializado'
          ],
          highlight: 'Website Grátis',
          color: 'text-purple-600'
        };
      
      case 'protecao-seguridade':
        return {
          icon: Shield,
          title: 'Proteção e Seguridade',
          description: 'Seguros com desconto especial por 12 meses',
          details: [
            'Seguro empresarial com cobertura completa',
            'Desconto de R$ 20/mês por 12 meses',
            'Análise de riscos personalizada',
            'Suporte dedicado para sinistros',
            'Condições exclusivas para clientes'
          ],
          highlight: 'Economize R$ 240/ano',
          color: 'text-blue-600'
        };
      
      case 'plano-saude':
        return {
          icon: Cross,
          title: 'Plano de Saúde e Odontológico',
          description: 'Planos especiais via CNPJ com desconto exclusivo',
          details: [
            'Planos de saúde via CNPJ',
            'Cobertura odontológica inclusa',
            'Até 30% mais barato que pessoa física',
            'Rede credenciada ampla',
            'Atendimento especializado'
          ],
          highlight: '30% de Desconto',
          color: 'text-green-600'
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-gradient-to-r from-contabilizei-blue to-contabilizei-blue-light p-3 rounded-lg">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div>
              <DialogTitle className="text-contabilizei-blue text-left">
                {content.title}
              </DialogTitle>
              <span className={`text-sm font-bold ${content.color}`}>
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
            <h4 className="font-semibold text-contabilizei-blue">O que está incluído:</h4>
            <ul className="space-y-2">
              {content.details.map((detail, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-contabilizei-gray">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Button 
            onClick={onClose}
            className="w-full bg-contabilizei-orange hover:bg-contabilizei-orange-light text-black font-bold py-3"
          >
            Quero Aproveitar Esta Oportunidade!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BenefitModal;
