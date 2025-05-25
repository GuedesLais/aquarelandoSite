
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
         
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-aqua-orange to-aqua-yellow p-1">
                <img 
                  src="/uploads/1cba3dce-caf4-48f1-8f78-1f2c3c23757a.png" 
                  alt="Laala"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-aqua-orange rounded-full flex items-center justify-center text-white text-2xl">
                🎨
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-aqua-orange mb-4">Lais Guedes</h3>
              <p className="text-gray-700 leading-relaxed">
               Apaixonada por tecnologia e pelo universo dos games, encontrou na programação uma forma de expressar sua criatividade. 
               Autodidata e determinada, aos 32 anos segue explorando novos conhecimentos todos os dias. 
               Ama crianças e é completamente encantada pelos seus sobrinhos, com quem compartilha momentos de afeto, brincadeiras e aprendizado.


              </p>
            </div>
          </div>

         
          <div className="text-center">
            <div className="bg-white rounded-3xl p-8 shadow-xl mb-6">
              <h3 className="text-2xl font-bold text-aqua-blue mb-4">Mariana Alves</h3>
              <p className="text-gray-700 leading-relaxed">
                Mari, 32 anos, é formada em Marketing e Design, e sua criatividade é o que move tudo o que faz. Apaixonada por descobrir o mundo, ama viajar e se inspirar em novas culturas e experiências.
                Sempre pronta para ajudar, tem um coração generoso e um jeito acolhedor que conquista todos ao redor. É tão querida que vive rodeada de sobrinhos e afilhados,
                e faz questão de estar presente na vida de cada um, com muito amor, carinho e boas risadas.
              </p>
            </div>
            <div className="relative">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-aqua-blue to-aqua-purple p-1">
                <img 
                  src="/uploads/395b5c0d-2149-4027-9203-6cb41909d952.png" 
                  alt="Mari"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
