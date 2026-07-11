import { useEffect, useState, useRef } from "react";

// Subcomponente responsável por animar cada número individualmente
function AnimatedCounter({ targetText }) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Extrai apenas os números e o que vem antes/depois (ex: "R$", "+")
  const numericValue = parseInt(targetText.replace(/\D/g, ""), 10) || 0;
  const prefix = targetText.match(/^\D+/)?.[0] || ""; // Pega coisas como "R$"
  const suffix = targetText.match(/\D+$/)?.[0] || ""; // Pega coisas como "+"

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Se o elemento estiver visível na tela e ainda não foi animado
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000; // Duração da animação em milissegundos (2 segundos)
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Função de "easeOutQuad" para desacelerar o contador suavemente no final
            const easeProgress = progress * (2 - progress); 
            
            const currentValue = Math.floor(easeProgress * numericValue);
            
            setCurrentNumber(currentValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 } // Dispara quando 10% do componente estiver na tela
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [numericValue, hasAnimated]);

  return (
    <span ref={elementRef}>
      {prefix}
      {currentNumber}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const stats = [
    { number: "28+", label: "Anos ajudando empresas" },
    { number: "340+", label: "Clientes impactados" },
    { number: "520+", label: "Projetos realizados" },
    { number: "R$2M+", label: "Milhões faturados" }
  ];

  return (
    <section className="bg-[#03133B] text-white py-24 px-6 md:px-16 text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-14">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight">Nossa Trajetória de Sucesso</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <span className="text-[#FF8D5C] text-5xl md:text-6xl font-black tracking-tight min-w-[120px] inline-block">
                {/* Substituído o texto estático pelo componente animado */}
                <AnimatedCounter targetText={stat.number} />
              </span>
              <span className="text-gray-300 text-sm font-light max-w-[150px] leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Gráfico discreto igual ao rodapé da seção no print */}
        <div className="flex flex-col items-center gap-3 mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF8D5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
          <p className="text-gray-400 text-xs font-light max-w-sm">
            Números que refletem o compromisso, a ética e a excelência com que atendemos cada projeto.
          </p>
        </div>
      </div>
    </section>
  );
}