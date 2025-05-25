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
    { nome: 'Zumba', emoji: '💃', descricao: 'Dança fitness que combina exercício com diversão para adultos' },
    { nome: 'Futebol', emoji: '⚽', descricao: 'Esporte que desenvolve trabalho em equipe e coordenação motora' },
    { nome: 'Capoeira', emoji: '🥋', descricao: 'Arte marcial brasileira que combina luta, dança e música' },
    // { nome: 'Música', emoji: '🎵', descricao: 'Aulas de música e canto para desenvolvimento cultural' },
    // { nome: 'Reforço Escolar', emoji: '📚', descricao: 'Apoio pedagógico para melhor desempenho escolar' }
  ];

  // Array de fotos para a galeria
  const fotos = [
    { src: '/uploads/galeria-1.jpg', alt: 'Crianças na aula de ballet' },
    { src: '/uploads/galeria-2.jpg', alt: 'Aula de capoeira' },
    { src: '/uploads/galeria-3.jpg', alt: 'Crianças jogando futebol' },
    { src: '/uploads/galeria-4.jpg', alt: 'Aula de zumba' },
    { src: '/uploads/galeria-5.jpg', alt: 'Evento comunitário' },
    { src: '/uploads/galeria-6.jpg', alt: 'Crianças brincando' }
  ];

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
            backgroundImage: `url('/uploads/crianca.jpg')`
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content - Posicionado mais para baixo */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col justify-end pb-20 h-full mt-auto">
          <div className="mt-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                <span className="bg-gradient-to-r from-aqua-orange to-aqua-yellow bg-clip-text text-transparent drop-shadow-2xl">
                  Construindo Sonhos
                </span>
              </span>
              <br />
              <span className="inline-block transform hover:scale-105 transition-transform duration-300 delay-100">
                <span className="bg-gradient-to-r from-aqua-blue to-aqua-purple bg-clip-text text-transparent drop-shadow-2xl text-3xl md:text-5xl lg:text-6xl">
                  Através do Esporte e Cultura
                </span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed drop-shadow-lg">
              Oferecemos um lugar seguro e cheio de oportunidades para que nossas crianças cresçam felizes, longe das ruas e perto de seus sonhos.            
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-aqua-orange rounded-full animate-float opacity-70"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-aqua-blue rounded-full animate-float delay-1000 opacity-70"></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-aqua-purple rounded-full animate-float delay-2000 opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-aqua-yellow rounded-full animate-float delay-500 opacity-70"></div>
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-aqua-blue to-aqua-purple bg-clip-text text-transparent">
              Quem Somos
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Conheça as pessoas que fazem a ONG Amigos e Eu acontecer, transformando amor em ação e dedicação em esperança para mais de 120 crianças.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
           
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-aqua-orange to-aqua-yellow p-1">
                  <img 
                    src="uploads/dcc5134d-6045-48d8-a91e-3538303a4645.png" 
                    alt="Celi Magalhães"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 flex items-center justify-center text-white text-2xl">
                  💕
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-aqua-orange mb-4">Celi Magalhães</h3>
                <h4 className="text-lg font-semibold text-pink-300 mb-4">Nossa Diretora</h4>
                <p className="text-gray-700 leading-relaxed">
                  Há 7 anos, ela decidiu transformar amor em ação.
                  Fundadora da ONG Amigos e Eu, iniciou em Jundiapeba e hoje, no bairro Caulim — Suzano, acolhe e inspira mais de 120 crianças em situação de vulnerabilidade com aulas de balé, capoeira, futebol e zumba.
                  <br /><br />
                  Pedagoga, futura advogada, mãe, esposa e amiga — ela é a alma que move esse projeto com carinho, firmeza e esperança.
                  <br /><br />
                  Ela não apenas ensina, ela transforma.
                </p>
              </div>
            </div>

           
            <div className="text-center">
              <div className="bg-white rounded-3xl p-8 shadow-xl mb-6">
                <h3 className="text-2xl font-bold text-aqua-blue mb-4">Fátima Queiroz</h3>
                <h4 className="text-lg font-semibold text-aqua-purple mb-4">A mãezona do Social</h4>
                <p className="text-gray-700 leading-relaxed">
                  Fátima é mais do que um nome; ela personifica cuidado, acolhimento e dedicação. 
                  Com um coração gigante, conhece cada criança e família, lutando para suprir necessidades e aliviar dores, mesmo com poucos recursos.
                  <br /><br />
                  Sempre presente e incansável, é a ponte entre quem precisa e quem pode ajudar. Seu trabalho não se resume a números, mas sim a empatia, abraços sinceros e batalhas silenciosas.
                  <br /><br />
                  Fátima transforma o pouco em tudo, sendo força e amor em ação.
                </p>
              </div>
              <div className="relative">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-aqua-blue to-aqua-purple p-1">
                  <img 
                    src="/uploads/dcc5134d-6045-48d8-a91e-3538303a46452.png" 
                    alt="Fátima Queiroz"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
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
                  <span className="font-semibold text-gray-600">Instituição:</span>
                  <span className="text-gray-800">Cora SCFI</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">Agência:</span>
                  <span className="text-gray-800">0001</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">Conta:</span>
                  <span className="text-gray-800">5194003-3</span>
                </div>
                               
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">PIX:</span>
                  <span className="text-gray-800"> CNPJ: 32.308.219/0001-49</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria - Corrigida com imagens reais */}
      <section id="galeria" className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-aqua-purple">Nossa Galeria</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {fotos.map((foto, index) => (
              <div key={index} className="aspect-square rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <img 
                  src={foto.src} 
                  alt={foto.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-2">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {/* Informações Legais */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Informações Legais</h3>
              <p className="text-gray-300">
                <strong>CNPJ:</strong> 32.308.219/0001-49
              </p>
            </div>

            {/* Contato */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-4 text-green-400">Contato</h3>
              <div className="space-y-2">
                <p className="text-gray-300">Suzano, SP · Jundiapeba, SP</p>
                <p className="text-gray-300"> (11) 98950-7885</p>
                <p className="text-gray-300">ongamigoseeu@gmail.com</p>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center border-t border-gray-700 pt-6">
            <p className="text-gray-400">&copy; 2024 ONG Amigos & Eu</p>
            <p className="text-gray-400 mt-2">Transformando vidas através da educação e do amor</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AmigosEu;
