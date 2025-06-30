
const Footer = () => {
  return (
    <footer className="bg-contabilizei-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-contabilizei-orange rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold">Contabilizei</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-blue-200 text-sm">
              © 2024 Contabilizei. Consultoria exclusiva para convidados.
            </p>
            <p className="text-blue-300 text-xs mt-1">
              Transformando negócios que vão além do CNPJ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
