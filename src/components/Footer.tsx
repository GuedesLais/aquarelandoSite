
import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* CNPJ - Comentado */}
          {/* <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-aqua-yellow">Informações Legais</h3>
            <p className="text-gray-300">
              <strong>CNPJ:</strong> 00.000.000/0001-00
            </p>
          </div> */}

          {/* Contact Info */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-aqua-blue">Contato</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                <span>(11) 99999-9999</span>
              </a>
              <a 
                href="https://wa.me/5511888888888" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                <span>(11) 88888-8888</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4 text-aqua-purple">Redes Sociais</h3>
            <a 
              href="https://www.instagram.com/aquarelandoprojeto/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors duration-300 hover:scale-110 transform"
            >
              <span className="font-medium">@aquarelandoprojeto</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2024 Aquarelando - Todos os direitos reservados. Feito com 💝 para transformar vidas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
