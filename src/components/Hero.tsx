
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/2a841da8-8514-4efd-8ea4-2c88636a5804.png')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          <span className="inline-block transform hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-aqua-orange to-aqua-yellow bg-clip-text text-transparent drop-shadow-2xl">
              Cada Doação
            </span>
          </span>
          <br />
          <span className="inline-block transform hover:scale-105 transition-transform duration-300 delay-100">
            <span className="bg-gradient-to-r from-aqua-blue to-aqua-purple bg-clip-text text-transparent drop-shadow-2xl">
              Salva Uma Vida
            </span>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed drop-shadow-lg">
          Transformando vidas através da arte, educação e amor. 
          <br className="hidden md:block" />
          Juntos construímos um futuro mais colorido para nossas crianças.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('quem-somos')}
            className="bg-gradient-to-r from-aqua-orange to-aqua-yellow text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Saiba Mais
          </button>
          <button 
            onClick={() => scrollToSection('doacoes')}
            className="bg-gradient-to-r from-aqua-blue to-aqua-purple text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Fazer Doação
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-aqua-orange rounded-full animate-float opacity-70"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-aqua-blue rounded-full animate-float delay-1000 opacity-70"></div>
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-aqua-purple rounded-full animate-float delay-2000 opacity-70"></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-aqua-yellow rounded-full animate-float delay-500 opacity-70"></div>
    </section>
  );
};

export default Hero;
