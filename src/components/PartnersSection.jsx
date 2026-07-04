export default function PartnersSection() {
  const partners = ["Voitto", "TechCorp", "InovaLab", "MetalRio", "EcoIndústria", "GrupoRJ"];

  return (
    <section className="bg-white py-16 px-6 md:px-16 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#001552] text-3xl font-black mb-2">Quem confia em nós</h2>
        <p className="text-gray-500 font-medium text-sm mb-10">Parceiros e clientes que caminham conosco</p>
        
        {/* Grid de logos em formato de cards brancos arredondados */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] py-4 px-6 rounded-xl flex items-center justify-center font-bold text-gray-400 hover:text-gray-600 transition-colors"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}