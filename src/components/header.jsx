import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-dark-blue w-full h-24 px-40 flex items-center justify-center">
      <div className="flex gap-20 items-center justify-center w-full">
        <img src="/logo.png" alt="Logo" className="h-20 w-auto" />

        <div className="flex gap-15 text-white text-2xl font-bold">
          <Link to="/" className="">
            Home
          </Link>

          <Link to="/quem-somos" className="">
            Quem Somos
          </Link>

          <Link to="/servicos" className="">
            Serviços
          </Link>

          <Link to="/contato" className="">
            Contato
          </Link>
        </div>
      </div>
    </header>
  );
}
