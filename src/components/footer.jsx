import {
  Phone,
  Mail,
  MapPin,
  BookOpen,
  Briefcase,
  Users,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <div className="space-y-6">
            <img
              src="/logo.png"
              alt="Estratégia JR"
              className="w-52"
            />

            <p className="font-semibold uppercase">
              Transformando ideias em impacto!
            </p>

            <div className="flex gap-4">
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center hover:border-white hover:scale-110 transition-all"
                >
                    <FaInstagram size={20} />
                </a>

                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center hover:border-white hover:scale-110 transition-all"
                >
                    <FaLinkedinIn size={20} />
                </a>

                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center hover:border-white hover:scale-110 transition-all"
                >
                    <FaFacebookF size={20} />
                </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold uppercase mb-6">
              Contato
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+55 99 9999999</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>inserirEmail@gmail.com</span>
              </div>
            </div>

            <h3 className="text-xl font-bold uppercase mt-10 mb-6">
              Informações Legais
            </h3>

            <div className="space-y-4 text-sm">
              <p>
                CNPJ: Inserir cnpj aqui
              </p>

              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="min-w-[18px]"
                />
                <span>
                 Inserir endereço completo aqui, incluindo rua, número, bairro, cidade e estado.
                </span>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-xl font-bold uppercase mb-6">
              Menu
            </h3>

            <ul className="space-y-4">
              <li>
                <a
                  href="/quem-somos"
                  className="flex items-center gap-3 hover:text-gray-300 transition"
                >
                  <Users size={18} />
                  Quem Somos
                </a>
              </li>
              <li>
                <a
                  href="/servicos"
                  className="flex items-center gap-3 hover:text-gray-300 transition"
                >
                  <Briefcase size={18} />
                  Serviços
                </a>
              </li>

              

            </ul>
          </div>

          {/* Mapa */}
          <div>
            <iframe
              title="Localização"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.556783!2d-44.456240!3d-22.465580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda55b97d5d5d5d%3A0xc5c5c5c5c5c5c5c5!2sUERJ%20Resende%20-%20Rod.%20Presidente%20Dutra%2C%20Resende%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="250"
              loading="lazy"
              className="rounded-lg border-0"
            />
          </div>

        </div>
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          Desenvolvido pela Aurea
        </div>
      </div>
    </footer>
  );
}