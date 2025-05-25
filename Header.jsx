return (
    <div className="min-h-screen bg-white">
      {/* Header - Agora transparente com animações */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-aqua-orange/20 via-aqua-purple/20 to-aqua-blue/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo com elementos animados - Tamanho aumentado */}
            <div className="relative">
              <a href="/">
                <img 
                  src="/uploads/a45d6356-ba89-4bda-a24e-42533899d6ff.png" 
                  alt="Amigos & Eu" 
                  className="h-16 md:h-20 w-auto" /* Aumentado de h-12 para h-16/h-20 */
                />
              </a>
              {/* Elementos flutuantes animados - Ajustados para o logo maior */}
              <div className="absolute -top-3 -right-3 w-4 h-4 bg-aqua-orange rounded-full animate-float opacity-70"></div>
              <div className="absolute top-8 -left-3 w-3 h-3 bg-aqua-blue rounded-full animate-float delay-1000 opacity-70"></div>
              <div className="absolute -bottom-3 right-6 w-3 h-3 bg-aqua-purple rounded-full animate-float delay-2000 opacity-70"></div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('quem-somos')}
                className="text-blue-300 hover:text-blue-500 transition-colors duration-300 font-medium"
              >
                Quem Somos
              </button>
              <button 
                onClick={() => scrollToSection('atividades')}
                className="text-green-300 hover:text-green-500 transition-colors duration-300 font-medium"
              >
                Atividades
              </button>
              <button 
                onClick={() => scrollToSection('seja-voluntario')}
                className="text-purple-300 hover:text-purple-500 transition-colors duration-300 font-medium"
              >
                Seja Voluntário
              </button>
              <button 
                onClick={() => scrollToSection('doacoes')}
                className="text-orange-300 hover:text-orange-500 transition-colors duration-300 font-medium"
              >
                Doações
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className="text-pink-300 hover:text-pink-500 transition-colors duration-300 font-medium"
              >
                Galeria
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
