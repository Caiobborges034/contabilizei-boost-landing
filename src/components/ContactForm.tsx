
import { useEffect, useState } from "react";
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
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen || isSubmitted) return;

    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/v2.js";
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "21138480",
          formId: "a2d684de-05ee-4a5b-99d7-7734a3b650f7",
          region: "na1",
          target: "#hubspot-form",
          onFormSubmitted: () => {
            setIsSubmitted(true);
            setTimeout(() => {
              setIsSubmitted(false);
              onClose();
            }, 2000);
          }
        });
      }
    };
    document.body.appendChild(script);
  }, [isOpen, isSubmitted, onClose]);

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

        <div id="hubspot-form" className="pt-4" />
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;