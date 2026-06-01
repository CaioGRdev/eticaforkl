import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#00095C] text-white">
      <Reveal>
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-8">
            Nossa História
          </h2>

          <p className="text-lg leading-8 text-gray-200">
            Há mais de uma década ajudamos empresas a transformar
            desafios em oportunidades. Nossa missão é gerar valor
            através da inovação, planejamento estratégico e
            acompanhamento próximo de cada cliente.
          </p>

          <p className="text-lg leading-8 text-gray-200 mt-6">
            Ao longo dos anos, desenvolvemos soluções personalizadas,
            construímos relacionamentos duradouros e contribuímos para
            o crescimento sustentável de organizações dos mais diversos
            setores.
          </p>

        </div>
      </Reveal>
    </section>
  );
}