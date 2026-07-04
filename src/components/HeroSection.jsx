export default function HeroSection() {
  return (
    <section className="relative bg-[#001552] text-white min-h-[85vh] flex items-center px-6 md:px-16 overflow-hidden">
      {/* Imagem de fundo com opacidade/overlay azul para dar o efeito do print */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
        <img 
          src="/images/hero-bg.jpg" // Troque pelo caminho da sua imagem de reunião
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-start gap-6">
        {/* Tag superior */}
        <span className="bg-white/10 text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-sm">
          Empresa Júnior - UERJ Resende
        </span>

        {/* Título Principal */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight max-w-3xl">
          Transformando ideias em <span className="text-[#FF8D5C]">impacto!</span>
        </h1>

        {/* Descrição */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
          Na Ética Jr., desenvolvemos consultorias planejadas e personalizadas para cada desafio, entregando soluções reais, aplicáveis e eficazes.
        </p>

        {/* Botões de Ação */}
        <div className="flex flex-wrap gap-4 mt-4">
          <button className="bg-[#FF8D5C] text-[#001552] font-bold px-8 py-3.5 rounded-xl flex items-center gap-2 shadow-lg shadow-[#FF8D5C]/20 hover:brightness-105 transition-all">
            Saiba Mais
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
          
          <button className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-xl transition-all">
            Conheça a Ética
          </button>
        </div>
      </div>
    </section>
  );
}