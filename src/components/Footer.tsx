
const contabilizeiLogo = "/lovable-uploads/f6a2af14-1f73-4f3a-b9e4-78de34ed3b81.png";

const Footer = () => {
  return (
    <footer className="bg-contabilizei-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src={contabilizeiLogo}
              alt="Contabilizei Logo" 
              className="h-8 w-auto brightness-0 invert object-contain"
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
