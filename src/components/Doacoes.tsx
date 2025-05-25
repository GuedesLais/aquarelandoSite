
const Doacoes = () => {
  return (
    <section id="doacoes" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-aqua-blue to-aqua-purple bg-clip-text text-transparent">
            Faça Sua Doação
          </h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            Sua generosidade alimenta sonhos e constrói futuros! 
            Cada doação nos ajuda a continuar transformando vidas através da educação e do amor.
          </p>
          
           <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-aqua-blue">
              <h3 className="text-2xl font-bold mb-6 text-aqua-blue">Dados Bancários</h3>
              <div className="space-y-4 text-left max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">Nome da Empresa:</span>
                  <span className="text-gray-800">ONG Amigos E Eu</span>
                </div>
                  <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">Instituição:</span>
                  <span className="text-gray-800">Cora SCFI - 403</span>
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
  );
};

export default Doacoes;
