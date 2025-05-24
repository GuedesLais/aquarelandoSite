
const QuemSomos = () => {
  return (
    <section id="quem-somos" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-aqua-blue to-aqua-purple bg-clip-text text-transparent">
            Quem Somos
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Somos duas amigas que se conheceram no 2º ano do ensino fundamental e permanecemos unidas até hoje. 
            Uma sempre topando todas as ideias da outra, decidimos transformar nossa amizade em uma força para o bem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
          {/* Primeira Pessoa */}
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-aqua-orange to-aqua-yellow p-1">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Foto 1</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-aqua-orange rounded-full flex items-center justify-center text-white text-2xl">
                🎨
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-aqua-orange mb-4">Nome da Fundadora 1</h3>
              <p className="text-gray-700 leading-relaxed">
                Apaixonada por arte e educação, sempre acreditou no poder transformador da criatividade. 
                Com formação em pedagogia e anos de experiência com crianças, dedica sua vida a fazer a diferença 
                na comunidade através de projetos sociais que unem arte, educação e amor.
              </p>
            </div>
          </div>

          {/* Segunda Pessoa */}
          <div className="text-center">
            <div className="bg-white rounded-3xl p-8 shadow-xl mb-6">
              <h3 className="text-2xl font-bold text-aqua-blue mb-4">Nome da Fundadora 2</h3>
              <p className="text-gray-700 leading-relaxed">
                Especialista em desenvolvimento comunitário e gestão de projetos sociais. 
                Sua paixão por transformar realidades através da educação e do esporte a levou a dedicar 
                sua carreira ao terceiro setor, sempre buscando inovação e impacto social positivo.
              </p>
            </div>
            <div className="relative">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-aqua-blue to-aqua-purple p-1">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Foto 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
