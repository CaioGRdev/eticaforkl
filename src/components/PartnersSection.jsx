// src/components/PartnersSection.jsx
import Reveal from "./Reveal";

export default function PartnersSection() {
  const partnerImages = [
    "/parceiro1.png",
    "/parceiro2.png",
    "/parceiro3.png",
    "/parceiro4.png",
    "/parceiro5.png"
  ];

  return (
    <section className="bg-gradient-to-b from-[#F1F5F9] to-white pt-12 pb-24 px-6 md:px-16 text-center overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <Reveal>
          <h2 className="text-[#001552] text-3xl font-black mb-2">Quem confia em nós</h2>
          <p className="text-gray-400 font-medium text-sm mb-10">Parceiros e clientes que caminham conosco</p>
        </Reveal>
        
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto justify-items-center items-center">
            {partnerImages.map((src, index) => (
              <div 
                key={index} 
                // Adicionado hover:-translate-y-1 para o card subir levemente de forma bem sutil (minimalista)
                className="bg-white border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.02)] p-2 rounded-xl flex items-center justify-center w-full h-32 hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <img 
                  src={src} 
                  alt={`Parceiro ${index + 1}`} 
                  className="w-full h-full object-contain scale-150 filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerText = `Parceiro ${index + 1}`;
                  }}
                />
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}