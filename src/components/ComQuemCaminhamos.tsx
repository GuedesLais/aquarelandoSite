const ComQuemCaminhamos = () => {
  const ongs = [
    {
      nome: "Amigos & Eu",
      url: "/amigos-eu",
      isInternal: true
    },
    // {
    //   nome: "Casa do Sorriso",
    //   url: "#",
    //   isInternal: false
    // },
    // {
    //   nome: "Esperança Viva",
    //   url: "#",
    //   isInternal: false
    // },
    // {
    //   nome: "Mãos que Ajudam",
    //   url: "#",
    //   isInternal: false
    // },
    // {
    //   nome: "Futuro Brilhante",
    //   url: "#",
    //   isInternal: false
    // }
  ];

  return (
    <section id="com-quem-caminhamos" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-aqua-orange to-aqua-yellow bg-clip-text text-transparent">
            Com Quem Caminhamos
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Conheça as organizações parceiras que fazem parte da nossa rede de transformação social. 
            Juntos somos mais fortes!
          </p>
        </div>

        <div className="flex justify-center">
          {ongs.map((ong, index) => (
            <a
              key={index}
              href={ong.url}
              target="_blank"
              rel="noopener noreferrer"
              className=" w-[400px] md:w-[450px] lg:w-[500px] group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-aqua-orange"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-aqua-orange to-aqua-yellow rounded-full flex items-center justify-center text-white text-2xl group-hover:animate-float">
                  🤝
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-aqua-orange transition-colors duration-300">
                  {ong.nome}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Clique para conhecer mais
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComQuemCaminhamos;
