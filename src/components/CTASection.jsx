import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#1B00BE] text-white">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Vamos crescer juntos?
          </h2>

          <p className="mt-6 text-xl text-gray-200">
            Entre em contato e descubra como podemos ajudar
            sua empresa a alcançar novos resultados.
          </p>

          <button
            className="
              mt-10
              bg-[#FF935E]
              px-8
              py-4
              rounded-lg
              font-semibold
              hover:scale-105
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