import Reveal from "./Reveal";

const stats = [
  {
    value: "12+",
    label: "Anos de atuação",
  },
  {
    value: "350+",
    label: "Clientes atendidos",
  },
  {
    value: "R$ 50M+",
    label: "Impacto gerado",
  },
  {
    value: "98%",
    label: "Satisfação",
  },
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-white">
      <Reveal>
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#00095C]">
            Resultados que falam por si
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-16">

            {stats.map((item) => (
              <article
                key={item.label}
                className="
                  bg-[#1B00BE]
                  text-white
                  rounded-2xl
                  p-8
                  text-center
                  hover:scale-105
                  transition-all
                "
              >
                <h3 className="text-5xl font-bold text-[#FF935E]">
                  {item.value}
                </h3>

                <p className="mt-4 text-lg">
                  {item.label}
                </p>
              </article>
            ))}

          </div>

        </div>
      </Reveal>
    </section>
  );
}