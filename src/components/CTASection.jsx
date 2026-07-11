import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="py-24 bg-white text-[#001552]">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#001552]">
            Vamos crescer juntos?
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Entre em contato e descubra como podemos ajudar
            sua empresa a alcançar novos resultados.
          </p>

          <button
            className="
              mt-10
              bg-[#FF935E]
              text-white
              px-10
              py-4
              rounded-xl
              font-bold
              text-base
              shadow-lg shadow-[#FF935E]/20
              hover:scale-105
              hover:brightness-105
              transition-all
            "
          >
            Solicitar atendimento
          </button>

        </div>
      </Reveal>
    </section>
  );
}