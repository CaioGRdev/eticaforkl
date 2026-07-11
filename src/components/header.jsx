import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  // Configuração dos links para evitar repetição de código
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Quem Somos", path: "/quem-somos" },
    { name: "Serviços", path: "/servicos" },
    { name: "Posts", path: "/posts" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] z-50 px-6 md:px-16 flex items-center justify-between border-b border-gray-100">
      {/* Container interno centralizado */}
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        
        {/* Lado Esquerdo: Logo + Nome */}
        <NavLink to="/" className="flex items-center gap-3" aria-label="Ir para a página inicial">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <span className="text-[#001552] text-2xl font-black tracking-tight">
            Ética<span className="text-[#FF8D5C]">.</span>Jr
          </span>
        </NavLink>

        {/* Centro: Links de Navegação com Hover e Estado Ativo */}
        <nav className="flex items-center gap-8 text-[#4A5568] font-medium text-sm h-20">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `
                relative flex items-center h-full text-sm font-semibold transition-all duration-300 pb-1
                ${isActive 
                  ? "text-[#FF8D5C] after:w-full" 
                  : "text-[#4A5568] hover:text-[#FF8D5C] after:w-0"
                }
                /* Efeito da bordinha subindo/expandindo embaixo ao passar o mouse ou ativo */
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] 
                after:bg-[#FF8D5C] after:transition-all after:duration-300 hover:after:w-full
              `}
              // end garante que a Home não fique marcada ativa junto com outras sub-rotas
              end={link.path === "/"}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Lado Direito: Botão com o tom exato de laranja e texto escuro */}
        <NavLink to="/contato" className="bg-[#FF8D5C] text-[#001552] font-bold text-sm px-6 py-3 rounded-xl flex items-center gap-2 shadow-[0_4px_12px_rgba(255,141,92,0.25)] hover:brightness-105 hover:scale-[1.02] transition-all">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
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
        </NavLink>

      </div>
    </header>
  );
}