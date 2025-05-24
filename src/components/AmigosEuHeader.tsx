
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const AmigosEuHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="relative">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-aqua-orange via-aqua-purple to-aqua-blue bg-clip-text text-transparent">
              Aquarelando
            </h1>
            <div className="absolute -top-2 -right-2 text-aqua-yellow text-2xl animate-float">
              🎨
            </div>
            <div className="absolute -bottom-1 left-2 w-2 h-2 bg-aqua-orange rounded-full"></div>
            <div className="absolute -bottom-1 right-4 w-1 h-1 bg-aqua-blue rounded-full"></div>
            <div className="absolute top-1 left-8 w-1 h-1 bg-aqua-purple rounded-full"></div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('quem-somos')}
              className="bg-gradient-to-r from-aqua-yellow via-aqua-orange to-aqua-purple bg-clip-text text-transparent hover:scale-105 transition-all duration-300 font-medium"
            >
              Quem Somos
            </button>
            <button 
              onClick={() => scrollToSection('atividades')}
              className="bg-gradient-to-r from-aqua-yellow via-aqua-orange to-aqua-purple bg-clip-text text-transparent hover:scale-105 transition-all duration-300 font-medium"
            >
              Nossas Atividades
            </button>
            <button 
              onClick={() => scrollToSection('seja-voluntario')}
              className="bg-gradient-to-r from-aqua-yellow via-aqua-orange to-aqua-purple bg-clip-text text-transparent hover:scale-105 transition-all duration-300 font-medium"
            >
              Seja Voluntário
            </button>
            <button 
              onClick={() => scrollToSection('doacoes')}
              className="bg-gradient-to-r from-aqua-yellow via-aqua-orange to-aqua-purple bg-clip-text text-transparent hover:scale-105 transition-all duration-300 font-medium"
            >
              Faça sua Doação
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="bg-gradient-to-r from-aqua-yellow via-aqua-orange to-aqua-purple bg-clip-text text-transparent hover:scale-105 transition-all duration-300 font-medium"
            >
              Galeria
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-4">
            <button 
              onClick={() => scrollToSection('quem-somos')}
              className="block w-full text-left bg-gradient-to-r from-aqua-yellow via-aqua-orange to-aqua-purple bg-clip-text text-transparent hover:scale-105 transition-all duration-300 font-medium"
            >
              Quem Somos
            </button>
            <button 
              onClick={() => scrollToSection('atividades')}
              className="block w-full text-left bg-gradient-to-r from-aqua-yellow via-aqua-orange to-aqua-purple bg-clip-text text-transparent hover:scale-105 transition-all duration-300 font-medium"
            >
              Nossas Atividades
            </button>
            <button 
              onClick={() => scrollToSection('seja-voluntario')}
              className="block w-full text-left bg-gradient-to-r from-aqua-yellow via-aqua-orange to-aqua-purple bg-clip-text text-transparent hover:scale-105 transition-all duration-300 font-medium"
            >
              Seja Voluntário
            </button>
            <button 
              onClick={() => scrollToSection('doacoes')}
              className="block w-full text-left bg-gradient-to-r from-aqua-yellow via-aqua-orange to-aqua-purple bg-clip-text text-transparent hover:scale-105 transition-all duration-300 font-medium"
            >
              Faça sua Doação
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="block w-full text-left bg-gradient-to-r from-aqua-yellow via-aqua-orange to-aqua-purple bg-clip-text text-transparent hover:scale-105 transition-all duration-300 font-medium"
            >
              Galeria
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default AmigosEuHeader;
