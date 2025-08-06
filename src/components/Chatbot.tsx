import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Calendar, MessageSquare } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(true);

  const handleCalendlyRedirect = () => {
    window.open('https://calendly.com/d/cs3n-h4f-6h6/consultoria-de-negocios', '_blank');
    setIsOpen(false);
  };

  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/5541998130416?text=Oi%2C%20tenho%20d%C3%BAvidas%20sobre%20a%20consultoria%20e%20gostaria%20de%20saber%20mais%20como%20podem%20me%20ajudar', '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-contabilizei-blue hover:bg-contabilizei-blue-light text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        ) : (
          <Card className="w-80 bg-white shadow-2xl animate-scale-in">
            <div className="p-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-contabilizei-blue rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-contabilizei-blue">Assistente Contabilizei</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Chat Content */}
              {showOptions ? (
                <>
                  <div className="mb-4">
                    <div className="bg-gray-100 p-3 rounded-lg mb-3">
                      <p className="text-sm text-contabilizei-gray">
                        Olá! 👋 Sou seu assistente da Contabilizei. Quer ajuda para entender se essa consultoria é ideal para você?
                      </p>
                    </div>
                  </div>

                  {/* Options */}
                  <div className="space-y-2">
                    <Button
                      onClick={handleCalendlyRedirect}
                      className="w-full bg-contabilizei-orange hover:bg-contabilizei-orange-light text-black font-medium text-sm py-2 h-auto"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Quero agendar agora
                    </Button>
                    <Button
                      onClick={handleWhatsAppRedirect}
                      variant="outline"
                      className="w-full border-contabilizei-blue text-contabilizei-blue hover:bg-contabilizei-blue hover:text-white font-medium text-sm py-2 h-auto"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Tenho dúvidas
                    </Button>
                  </div>
                </>
              ) : null}
            </div>
          </Card>
        )}
      </div>
    </>
  );
};

export default Chatbot;