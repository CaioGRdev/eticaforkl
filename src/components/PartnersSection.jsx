import Reveal from "./Reveal";

const partners = [
  {
    name: "Google",
    logo: "/partners/google.png",
    url: "https://google.com",
  },
  {
    name: "Microsoft",
    logo: "/partners/microsoft.png",
    url: "https://microsoft.com",
  },
  {
    name: "Amazon",
    logo: "/partners/amazon.png",
    url: "https://amazon.com",
  },
  {
    name: "Meta",
    logo: "/partners/meta.png",
    url: "https://meta.com",
  },
];

export default function PartnersSection() {
  return (
    <section
      className="py-24 bg-white"
      aria-labelledby="parcerias"
    >
      <Reveal>
        <div className="max-w-7xl mx-auto px-6">

          <h2
            id="parcerias"
            className="text-4xl font-bold text-center text-[#00095C]"
          >
            Nossos Parceiros
          </h2>

          <p className="text-center mt-4 text-gray-600">
            Construindo resultados junto de grandes organizações.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-14">

            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noreferrer"
                className="
                  p-6
                  rounded-xl
                  border
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                "
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 mx-auto object-contain"
                />
              </a>
            ))}

          </div>

        </div>
      </Reveal>
    </section>
  );
}