
const Footer = () => {
  return (
    <footer className="bg-contabilizei-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="https://i0.wp.com/tradutoriniciante.com.br/wp-content/uploads/2021/05/contabilizei-logo-fundo-transparente.png?fit=1042%2C500" 
              alt="Contabilizei Logo" 
              className="h-8 w-auto brightness-0 invert"
            />
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-blue-200 text-sm">
              © 2025 Contabilizei. Consultoria exclusiva para convidados.
            </p>
            <p className="text-blue-300 text-xs mt-1">
              Transforme sua vida com a Contabilizei
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
