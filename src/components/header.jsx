import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white w-full h-20 shadow-[0_4px_12px_rgba(0,0,0,0.08)] border-b border-gray-100 px-6 md:px-12 flex items-center justify-between">
      {/* Container que segura tudo e espalha os elementos */}
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        
        {/* Lado Esquerdo: Logo + Nome */}
        <Link to="/" className="flex items-center gap-3" aria-label="Ir para a página inicial">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <span className="text-[#0B1B3D] text-2xl font-black tracking-tight flex items-center gap-1">
            Ética<span className="text-[#FF8D5C]">.</span>Jr
          </span>
        </Link>

        {/* Centro: Links de Navegação */}
        <nav className="flex items-center gap-8 text-[#2D3748] font-medium text-base">
          <Link to="/servicos" className="hover:text-[#FF8D5C] transition-colors">
            Serviços
          </Link>

          <Link to="/viagens" className="hover:text-[#FF8D5C] transition-colors">
            Viagens
          </Link>

          <Link to="/quem-somos" className="hover:text-[#FF8D5C] transition-colors">
            Quem Somos
          </Link>

          <Link to="/contato" className="text-[#FF8D5C] font-semibold hover:opacity-80 transition-opacity">
            Contato
          </Link>
        </nav>

        {/* Lado Direito: Botão com Ícone de Telefone em SVG nativo */}
        <button className="bg-[#FF8D5C] text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-[0_4px_14px_rgba(255,141,92,0.4)] hover:bg-[#e07b4f] transition-all transform hover:-translate-y-0.5">
          {/* Ícone de Telefone SVG para não precisar instalar nada */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          Falar com Consultor
        </button>

      </div>
    </header>
  );
}