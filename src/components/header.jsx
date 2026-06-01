import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black w-full h-24 px-10 flex items-center">
  <div className="flex items-center w-full">
    <img
      src="/logo.png"
      alt="Logo"
      className="h-20 w-auto"
    />

    <div className="flex gap-5">
      <Link to="/" className="text-white text-xl font-bold">
        Home
      </Link>

      <Link to="/quem-somos" className="text-white text-xl font-bold">
        Quem Somos
      </Link>

      <Link to="/servicos" className="text-white text-xl font-bold">
        Serviços
      </Link>

      <Link to="/contato" className="text-white text-xl font-bold">
        Contato
      </Link>
    </div>
  </div>
</header>
  );
}