import Reveal from "./Reveal";

export default function HeroSection() {
  return (
    <header className="relative min-h-screen flex items-center justify-center">

      <img
        src="/uerj.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/65"></div>

      <Reveal>
        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Etica
          </h1>

          <h2 className="text-2xl md:text-4xl text-[#FF935E] font-semibold mb-8">
            Transformando ideias em impacto!
          </h2>

          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Prontos para impulsionar os resultados do seu negócio?
            Oferecemos soluções sob medida para os desafios do seu
            empreendimento, sempre com foco no que realmente importa:
            seus objetivos, sua realidade e o crescimento da sua empresa.
          </p>

          <button
            className="
              mt-10
              bg-[#FF935E]
              hover:bg-[#ff7b3d]
              px-8 py-4
              rounded-lg
              font-semibold
              transition-all
              hover:scale-105
            "
          >
            Conheça nossos serviços
          </button>
        </div>
      </Reveal>

    </header>
  );
}