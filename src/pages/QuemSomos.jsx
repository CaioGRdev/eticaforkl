import React, { useState, useEffect } from 'react';
import './QuemSomos.css';
import { Target, Eye, Heart, Sparkles, Handshake, Award, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function QuemSomos() {
  const imagensCarrossel = [
    { src: '/quem_somos.jpg', alt: 'Equipe de estudantes Ética Jr.' },
    { src: '/quem_somos1.jpg', alt: 'Membros da empresa em imersão' },
    { src: '/quem_somos2.jpg', alt: 'Alunos' },
    { src: '/quem_somos3.jpg', alt: 'Alunos' },
    { src: '/quem_somos4.jpg', alt: 'Alunos' }
  ];

  const [indexAtual, setIndexAtual] = useState(0);
  const [estaPausado, setEstaPausado] = useState(false);

  const fotoAnterior = () => {
    setIndexAtual((prev) => (prev === 0 ? imagensCarrossel.length - 1 : prev - 1));
  };

  const proximaFoto = () => {
    setIndexAtual((prev) => (prev === imagensCarrossel.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (estaPausado) return;

    const intervalo = setInterval(() => {
      proximaFoto();
    }, 4000); 

    return () => clearInterval(intervalo);
  }, [indexAtual, estaPausado]);

  return (
    <div className="quemsomos-container">
      
      {/* SEÇÃO HERO */}
      <section className="hero-section">
        <div className="animar-entrada delay-1">
          <span className="badge-quemsomos">Quem Somos</span>
          <h1 className="hero-title">
            Ética Jr.: Engenharia e Consultoria com{' '}
            <span className="destaque-laranja">Propósito</span>
          </h1>
          <p className="hero-desc">
            Uma empresa formada por estudantes, movida por resultados e comprometida com o desenvolvimento da região Sul Fluminense.
          </p>
        </div>
        
        {/* CARROSSEL INTELIGENTE COM AUTOPLAY */}
        <div className="image-wrapper animar-entrada delay-2">
          <div className="image-shadow"></div>
          
          <div 
            className="carrossel-wrapper"
            onMouseEnter={() => setEstaPausado(true)}
            onMouseLeave={() => setEstaPausado(false)}
          >
            <img 
              src={imagensCarrossel[indexAtual].src} 
              alt={imagensCarrossel[indexAtual].alt} 
              className="hero-img"
            />

            <button className="carrossel-btn btn-esquerda" onClick={fotoAnterior} aria-label="Foto anterior">
              <ChevronLeft size={24} />
            </button>
            <button className="carrossel-btn btn-direita" onClick={proximaFoto} aria-label="Próxima foto">
              <ChevronRight size={24} />
            </button>
            <div className="carrossel-dots">
              {imagensCarrossel.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === indexAtual ? 'dot-ativo' : ''}`}
                  onClick={() => setIndexAtual(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO HISTÓRIA */}
      <section className="historia-section">
        <div className="historia-content animar-entrada delay-3">
          <div>
            <h2 className="historia-title">
              Nossa <span>História</span>
            </h2>
          </div>
          <div>
            <p className="historia-text">
              Fundada em <strong>1996</strong>, a Ética Jr. Consultoria e Projetos é uma associação civil sem fins lucrativos, gerida pelos alunos de Engenharia de Produção, Engenharia Mecânica e Engenharia Química da Universidade do Estado do Rio de Janeiro, no campus regional de Resende/RJ.
            </p>
          </div>
        </div>
      </section>

      {/* MISSÃO, VISÃO E VALORES */}
      <section className="triade-section">
        <div className="triade-grid">
          
          {/* Card Missão */}
          <div className="card-triade animar-entrada delay-4">
            <div className="card-decor"></div>
            <div>
              <div className="icon-box">
                <Target className="icon-style" />
              </div>
              <h3>Missão</h3>
              <p>
                Oferecer serviços de consultoria personalizados e inovadores para nossos clients, proporcionando crescimento pessoal e profissional para os alunos envolvidos.
              </p>
            </div>
          </div>

          {/* Card Visão */}
          <div className="card-triade animar-entrada delay-5">
            <div className="card-decor"></div>
            <div>
              <div className="icon-box">
                <Eye className="icon-style" />
              </div>
              <h3>Visão</h3>
              <p>
                Ser conhecida como a principal empresa júnior da região Sul Fluminense, sendo capaz de oferecer as melhores soluções com seus clientes.
              </p>
            </div>
          </div>

          {/* Card Valores */}
          <div className="card-triade animar-entrada delay-6">
            <div className="card-decor"></div>
            <div>
              <div className="icon-box">
                <Heart className="icon-style" />
              </div>
              <h3>Valores</h3>
              <p>
                Ética, Compromisso, Qualidade e Trabalho em equipe.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* DIFERENCIAIS COMPETITIVOS */}
      <section className="diferenciais-section animar-entrada delay-3">
        <div className="diferenciais-content">
          <h2 className="diferenciais-main-title">Diferenciais Competitivos</h2>
          
          <div className="diferenciais-grid">
            <div className="diferencial-item">
              <div className="diferencial-icon-box">
                <Sparkles className="diferencial-icon" />
              </div>
              <h3>Metodologia Personalizada</h3>
              <p>Cada projeto é único. Adaptamos processos à realidade de cada parceiro e cliente.</p>
            </div>

            <div className="diferencial-item">
              <div className="diferencial-icon-box">
                <Handshake className="diferencial-icon" />
              </div>
              <h3>Atendimento Único</h3>
              <p>Relacionamento próximo, transparente e totalmente focado no seu resultado final.</p>
            </div>

            <div className="diferencial-item">
              <div className="diferencial-icon-box">
                <Award className="diferencial-icon" />
              </div>
              <h3>Resultados Comprovados</h3>
              <p>Mais de duas décadas entregando impacto real para empresas e negócios parceiros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-section animar-entrada delay-3">
        <div className="cta-blur-1"></div>
        <div className="cta-blur-2"></div>

        <div className="cta-content">
          <h2 className="cta-title">
            O futuro do seu negócio começa com a escolha certa hoje.{' '}
            <span>Fale conosco.</span>
          </h2>
          
          <button className="cta-button">
            Falar com um Consultor
            <ArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}