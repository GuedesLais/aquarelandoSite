
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const AmigosEu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const atividades = [
    { nome: 'Ballet', emoji: '🩰', descricao: 'Aulas de ballet clássico para desenvolver coordenação e disciplina' },
    { nome: 'Zumba', emoji: '💃', descricao: 'Dança fitness que combina exercício com diversão - para adultos' },
    { nome: 'Futebol', emoji: '⚽', descricao: 'Esporte que desenvolve trabalho em equipe e coordenação motora' },
    { nome: 'Capoeira', emoji: '🥋', descricao: 'Arte marcial brasileira que combina luta, dança e música' },
    // { nome: 'Música', emoji: '🎵', descricao: 'Aulas de música e canto para desenvolvimento cultural' },
    // { nome: 'Reforço Escolar', emoji: '📚', descricao: 'Apoio pedagógico para melhor desempenho escolar' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo Original */}
            <div className="relative">
              <h1 className="text-3xl font-bold text-blue-600">
                Amigos & Eu
              </h1>
              <div className="absolute -bottom-1 left-0 w-12 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
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

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 space-y-4">
              <button 
                onClick={() => scrollToSection('quem-somos')}
                className="block w-full text-left text-blue-300 hover:text-blue-500 transition-colors duration-300 font-medium"
              >
                Quem Somos
              </button>
              <button 
                onClick={() => scrollToSection('atividades')}
                className="block w-full text-left text-green-300 hover:text-green-500 transition-colors duration-300 font-medium"
              >
                Atividades
              </button>
              <button 
                onClick={() => scrollToSection('seja-voluntario')}
                className="block w-full text-left text-purple-300 hover:text-purple-500 transition-colors duration-300 font-medium"
              >
                Seja Voluntário
              </button>
              <button 
                onClick={() => scrollToSection('doacoes')}
                className="block w-full text-left text-orange-300 hover:text-orange-500 transition-colors duration-300 font-medium"
              >
                Doações
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className="block w-full text-left text-pink-300 hover:text-pink-500 transition-colors duration-300 font-medium"
              >
                Galeria
              </button>
            </nav>
          )}
        </div>
      </header>
      
      {/* Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/e91f6dfd-efc9-4f72-af75-e9910fb8275b.png')`
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">
              <span className="bg-gradient-to-r from-aqua-orange to-aqua-yellow bg-clip-text text-transparent drop-shadow-2xl">
                Construindo Sonhos
              </span>
            </span>
            <br />
            <span className="inline-block transform hover:scale-105 transition-transform duration-300 delay-100">
              <span className="bg-gradient-to-r from-aqua-blue to-aqua-purple bg-clip-text text-transparent drop-shadow-2xl">
                Através do Esporte
              </span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed drop-shadow-lg">
            Oferecemos um lugar seguro e cheio de oportunidades para que nossas crianças cresçam felizes, 
            <br className="hidden md:block" />
            longe das ruas e perto de seus sonhos.
          </p>
        </div>
      </section>

      {/* Quem Somos - Agora com 3 pessoas */}
      <section id="quem-somos" className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-aqua-orange">Quem Somos</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-aqua-orange to-aqua-yellow p-1 mb-6">
                <img 
                  src="/lovable-uploads/dcc5134d-6045-48d8-a91e-3538303a4645.png" 
                  alt="Euclides"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-aqua-orange mb-4">Euclides</h3>
                <p className="text-gray-700">
                  Responsável pela coordenação geral dos projetos, com anos de experiência 
                  em desenvolvimento comunitário e educação infantil.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-aqua-blue to-aqua-purple p-1 mb-6">
                <img 
                  src="/lovable-uploads/dcc5134d-6045-48d8-a91e-3538303a4645.png" 
                  alt="Euclides"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-aqua-blue mb-4">Euclides</h3>
                <p className="text-gray-700">
                  Especialista em pedagogia social, dedica-se ao desenvolvimento 
                  das atividades educativas e ao acompanhamento das crianças.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-aqua-purple to-aqua-pink p-1 mb-6">
                <img 
                  src="/lovable-uploads/dcc5134d-6045-48d8-a91e-3538303a4645.png" 
                  alt="Euclides"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-aqua-purple mb-4">Euclides</h3>
                <p className="text-gray-700">
                  Coordenador de atividades esportivas e culturais, promovendo 
                  o desenvolvimento físico e social das crianças.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atividades */}
      <section id="atividades" className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-aqua-purple">Nossas Atividades</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {atividades.map((atividade, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
                <div className="text-6xl mb-4">{atividade.emoji}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{atividade.nome}</h3>
                <p className="text-gray-600">{atividade.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seja Voluntário */}
      <section id="seja-voluntario" className="py-16 bg-gradient-to-r from-aqua-orange to-aqua-yellow">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Seja Voluntário!</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Você tem um talento especial? Quer ensinar algo para nossas crianças? 
              Sua contribuição pode fazer toda a diferença na vida de uma criança!
            </p>
            <a 
              href="https://wa.me/5511989507885?text=Olá! Gostaria de ser voluntário na ONG Amigos & Eu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-white text-aqua-orange px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <span className="text-2xl">📱</span>
              <span>Entre em Contato</span>
            </a>
          </div>
        </div>
      </section>

      {/* Doações */}
      <section id="doacoes" className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-aqua-blue">Faça Sua Doação</h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              Sua generosidade alimenta sonhos e constrói futuros! 
              Cada doação nos ajuda a continuar transformando vidas através da educação e do amor.
            </p>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-aqua-blue">
              <h3 className="text-2xl font-bold mb-6 text-aqua-blue">Dados Bancários</h3>
              <div className="space-y-4 text-left max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">Banco:</span>
                  <span className="text-gray-800">Banco do Brasil</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">Agência:</span>
                  <span className="text-gray-800">0000-0</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">Conta:</span>
                  <span className="text-gray-800">00000-0</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">PIX:</span>
                  <span className="text-gray-800">ongamigoseeu@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-aqua-purple">Nossa Galeria</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="aspect-square bg-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
                <span className="text-gray-500">Foto {index}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Informações Legais */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Informações Legais</h3>
              <p className="text-gray-300">
                <strong>CNPJ:</strong> 32.308.219/0001-49
              </p>
            </div>

            {/* Contato */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-green-400">Contato</h3>
              <div className="space-y-2">
                <p className="text-gray-300">Suzano, SP · Jundiapeba, SP</p>
                <p className="text-gray-300">+55 11 98950-7885</p>
                <p className="text-gray-300">ongamigoseeu@gmail.com</p>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400">&copy; 2024 ONG Amigos & Eu</p>
              <p className="text-gray-400 mt-2">Transformando vidas através da educação e do amor</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AmigosEu;
