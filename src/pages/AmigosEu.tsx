
import { Phone } from 'lucide-react';

const AmigosEu = () => {
  const atividades = [
    { nome: 'Ballet', emoji: '🩰', descricao: 'Aulas de ballet clássico para desenvolver coordenação e disciplina' },
    { nome: 'Zumba', emoji: '💃', descricao: 'Dança fitness que combina exercício com diversão' },
    { nome: 'Futebol', emoji: '⚽', descricao: 'Esporte que desenvolve trabalho em equipe e coordenação motora' },
    { nome: 'Arte', emoji: '🎨', descricao: 'Atividades artísticas para estimular a criatividade' },
    { nome: 'Música', emoji: '🎵', descricao: 'Aulas de música e canto para desenvolvimento cultural' },
    { nome: 'Reforço Escolar', emoji: '📚', descricao: 'Apoio pedagógico para melhor desempenho escolar' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header com Logo */}
      <header className="bg-white shadow-lg py-6">
        <div className="container mx-auto px-4 text-center">
          <img 
            src="/lovable-uploads/a45d6356-ba89-4bda-a24e-42533899d6ff.png" 
            alt="Amigos & Eu Logo" 
            className="h-24 mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-800">ONG Amigos & Eu</h1>
          <p className="text-gray-600 mt-2">Brinquedoteca Comunitária</p>
        </div>
      </header>

      {/* Missão */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-xl border-4 border-dashed border-aqua-blue">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-aqua-blue">Nossa Missão</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              <strong>MISSÃO:</strong> Contribuir para o desenvolvimento integral da criança ao adolescente, 
              investindo na formação através da educação, arte, esporte e cultura, 
              estendendo esse cuidado e amparo às famílias da nossa comunidade, 
              construindo juntos um futuro mais colorido e promissor.
            </p>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-aqua-orange">Quem Somos</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-aqua-orange to-aqua-yellow p-1 mb-6">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Foto Coordenadora</span>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-aqua-orange mb-4">Coordenadora</h3>
                <p className="text-gray-700">
                  Responsável pela coordenação geral dos projetos, com anos de experiência 
                  em desenvolvimento comunitário e educação infantil.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-aqua-blue to-aqua-purple p-1 mb-6">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Foto Educadora</span>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-aqua-blue mb-4">Educadora Social</h3>
                <p className="text-gray-700">
                  Especialista em pedagogia social, dedica-se ao desenvolvimento 
                  das atividades educativas e ao acompanhamento das crianças.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atividades */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-aqua-purple">Nossas Atividades</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
      <section className="py-16 bg-gradient-to-r from-aqua-orange to-aqua-yellow">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Seja Voluntário!</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Você tem um talento especial? Quer ensinar algo para nossas crianças? 
              Sua contribuição pode fazer toda a diferença na vida de uma criança!
            </p>
            <a 
              href="https://wa.me/5511999999999?text=Olá! Gostaria de ser voluntário na ONG Amigos & Eu" 
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
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
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
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
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
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 ONG Amigos & Eu - Brinquedoteca Comunitária</p>
          <p className="text-gray-400 mt-2">Transformando vidas através da educação e do amor</p>
        </div>
      </footer>
    </div>
  );
};

export default AmigosEu;
