
import { useState, useEffect } from 'react';

const Galeria = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Placeholder images for the carousel
  const images = [
    { src: '/uploads/galeria-2.jpg', alt: 'Atividade 1' },
    { src: '/uploads/galeria-2.jpg', alt: 'Atividade 2' },
    { src: '/uploads/galeria-2.jpg', alt: 'Atividade 3' },
    { src: '/uploads/galeria-2.jpg', alt: 'Atividade 4' },
    { src: '/uploads/galeria-2.jpg', alt: 'Atividade 5' },
  ];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="galeria" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-aqua-purple to-aqua-blue bg-clip-text text-transparent">
            Galeria
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Momentos especiais que capturam a magia do nosso trabalho e o sorriso das crianças que atendemos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-96 object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Image Counter */}
          <div className="text-center mt-6">
            <span className="text-gray-600 font-medium">
              {currentSlide + 1} de {images.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeria;
