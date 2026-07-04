export default function StatsSection() {
  const stats = [
    { number: "28+", label: "Anos ajudando empresas" },
    { number: "340+", label: "Clientes impactados" },
    { number: "520+", label: "Projetos realizados" },
    { number: "R$2M+", label: "Milhões faturados" }
  ];

  return (
    <section className="bg-[#001552] text-white py-20 px-6 md:px-16 text-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <h2 className="text-3xl md:text-4xl font-black">Nossa Trajetória de Sucesso</h2>
        
        {/* Grid dos números grandes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <span className="text-[#FF8D5C] text-4xl md:text-6xl font-black tracking-tight">
                {stat.number}
              </span>
              <span className="text-gray-300 text-sm font-light max-w-[180px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Ícone de Gráfico e Texto Inferior */}
        <div className="flex flex-col items-center gap-4 mt-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#FF8D5C" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
            <polyline points="16 7 22 7 22 13"></polyline>
          </svg>
          <p className="text-gray-300 text-xs font-light max-w-md leading-relaxed">
            Números que refletem o compromisso, a ética e a excelência com que atendemos cada projeto.
          </p>
        </div>
      </div>
    </section>
  );
}