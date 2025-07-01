
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    console.log("Formulário enviado:", formData);
    
    // Simulação de envio para Google Sheets
    // Substitua pela URL do seu Google Apps Script
    try {
      const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          timestamp: new Date().toISOString(),
          source: 'Landing Page Consultoria'
        }),
      });
      
      if (response.ok) {
        console.log('Dados enviados para Google Sheets com sucesso');
      }
    } catch (error) {
      console.error('Erro ao enviar dados para Google Sheets:', error);
    }
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Fechar após 2 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({ name: "", email: "", phone: "" });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-contabilizei-blue mb-2">
              Solicitação Enviada!
            </h3>
            <p className="text-contabilizei-gray">
              Em breve nossa equipe entrará em contato com você para agendar sua consultoria gratuita.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-contabilizei-blue">
            Solicitar Consultoria Gratuita
          </DialogTitle>
          <DialogDescription>
            Preencha seus dados para que possamos entrar em contato e agendar sua consultoria exclusiva.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Digite seu nome completo"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Digite seu telefone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-contabilizei-orange hover:bg-contabilizei-orange-light text-black font-bold py-3"
          >
            {isLoading ? '⏳ Enviando...' : '💡 Solicitar Minha Consultoria Gratuita'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
