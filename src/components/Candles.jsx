// Candles.jsx
import { useState } from "react";

 const Candles = () => {
  // Datos de las velas
  const candles = [
    {
      imgSrc: "/placeholder.svg?height=300&width=400",
      altText: "Vela 1",
      title: "Vela Aromática 1",
      description: "Una vela con aroma suave y relajante.",
    },
    {
      imgSrc: "/placeholder.svg?height=300&width=400",
      altText: "Vela 2",
      title: "Vela Aromática 2",
      description: "Una vela con aroma floral.",
    },
    {
      imgSrc: "/placeholder.svg?height=300&width=400",
      altText: "Vela 3",
      title: "Vela Aromática 3",
      description: "Una vela con aroma cítrico.",
    },
    {
      imgSrc: "/placeholder.svg?height=300&width=400",
      altText: "Vela 4",
      title: "Vela Aromática 4",
      description: "Una vela con aroma a vainilla.",
    },
    {
      imgSrc: "/placeholder.svg?height=300&width=400",
      altText: "Vela 5",
      title: "Vela Aromática 5",
      description: "Una vela con aroma a sándalo.",
    },
    {
      imgSrc: "/placeholder.svg?height=300&width=400",
      altText: "Vela 6",
      title: "Vela Aromática 6",
      description: "Una vela con aroma a lavanda.",
    },
  ];

  // Estado para manejar las velas visibles
  const [visibleCandles, setVisibleCandles] = useState(3);

  // Función para mostrar más velas
  const showMoreCandles = () => {
    console.log('Botón clickeado');
    setVisibleCandles(visibleCandles + 3);
  };

  return (
    <section className="container mx-auto py-16">
      <h3 className="text-3xl font-semibold text-[#8B4513] text-center mb-12">
        Nuestras Velas
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {candles.slice(0, visibleCandles).map((candle, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={candle.imgSrc} alt={candle.altText} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-bold text-[#8B4513]">{candle.title}</h4>
              <p className="text-[#A0522D]">{candle.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {visibleCandles < candles.length && (
        <div className="text-center mt-8">
          <button
            onClick={showMoreCandles}
            className="bg-[#DEB887] text-white py-2 px-6 rounded-full hover:bg-[#D2B48C] transition duration-300"
          >
            Ver más
          </button>
        </div>
      )}
    </section>
  );
};

export default Candles;
