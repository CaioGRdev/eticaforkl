import React from 'react';
import { Link } from 'react-router-dom'; 
import './Servicos.css';
import { 
  Clock, BarChart3, ShieldCheck, Megaphone, 
  Wallet, Sofa, ArrowRight, MessageSquare, 
  ClipboardList, Hammer, Trophy 
} from 'lucide-react';

export default function Servicos() {
  const listaServicos = [
    {
      id: 'cronoanalise',
      titulo: 'Cronoanálise',
      descricao: 'Estudo sobre a otimização do tempo de execução de processos, visando aumento de produtividade, redução de desperdícios e melhoria da eficiência operacional.',
      icon: <Clock />
    },
    {
      id: 'pesquisa-de-mercado',
      titulo: 'Pesquisa de Mercado',
      descricao: 'Coleta e análise de dados sobre consumidores, concorrentes e tendências para auxiliar na tomada de decisão estratégica.',
      icon: <BarChart3 />
    },
    {
      id: 'consultoria-ehs',
      titulo: 'Consultoria EHS',
      descricao: 'Consultoria em Segurança e Meio Ambiente: adequação de processos, prevenção de riscos e sustentabilidade, assegurando a segurança no trabalho.',
      icon: <ShieldCheck />
    },
    {
      id: 'marketing',
      titulo: 'Marketing',
      descricao: 'Estratégias de comunicação, posicionamento e divulgação para fortalecer a marca e criar uma identidade visual impactante.',
      icon: <Megaphone />
    },
    {
      id: 'consultoria-financeira',
      titulo: 'Consultoria Financeira',
      descricao: 'Análise e planejamento financeiro para controle de custos, organização e melhoria da rentabilidade.',
      icon: <Wallet />
    },
    {
      id: 'ergonomia',
      titulo: 'Ergonomia',
      descricao: 'Análise e adequação das condições de trabalho para melhorar conforto, segurança, saúde e produtividade dos colaboradores.',
      icon: <Sofa />
    }
  ];

  return (
    <div className="servicos-container">
      
      {/* 1. HERO SECTION (BANNER SUPERIOR) */}
      <section className="servicos-hero">
        <div className="badge-servicos">Nossos Serviços</div>
        <h1 className="servicos-hero-title">
          Soluções que Geram <span>Resultados</span>
        </h1>
        <p className="servicos-hero-desc">
          Descubra como podemos ajudar o seu negócio a crescer.
        </p>
      </section>

      {/* 2. GRID PRINCIPAL DE SERVIÇOS */}
      <section className="main-servicos-section">
        <div className="servicos-grid">
          {listaServicos.map((servico) => (
            <div key={servico.id} className="card-servico">
              <div>
                <div className="servico-icon-box">
                  {servico.icon}
                </div>
                <h3>{servico.titulo}</h3>
                <p>{servico.descricao}</p>
              </div>
              
              {/* O Link aponta para uma página dedicada do serviço */}
              <Link to={`/servicos/${servico.id}`} className="btn-saber-mais">
                Saber Mais <ArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SEÇÃO COMO AJUDAMOS VOCÊ A CRESCER */}
      <section className="metodologia-section">
        <h2 className="metodologia-title">Como ajudamos você a crescer</h2>
        <p className="metodologia-subtitle">Uma metodologia clara em quatro passos.</p>
        
        <div className="metodologia-grid">
          <div className="metodologia-card">
            <div className="metodologia-number">1</div>
            <MessageSquare className="metodologia-card-icon" />
            <h3>Reunião de Alinhamento</h3>
            <p>Entendimento profundo do problema e dos objetivos do cliente.</p>
          </div>

          <div className="metodologia-card">
            <div className="metodologia-number">2</div>
            <ClipboardList className="metodologia-card-icon" />
            <h3>Cronograma Sob Medida</h3>
            <p>Estruturação de um plano de trabalho realista e transparente.</p>
          </div>

          <div className="metodologia-card">
            <div className="metodologia-number">3</div>
            <Hammer className="metodologia-card-icon" />
            <h3>Soluções Personalizadas</h3>
            <p>Desenvolvimento das entregas com metodologia acadêmica e prática.</p>
          </div>

          <div className="metodologia-card">
            <div className="metodologia-number">4</div>
            <Trophy className="metodologia-card-icon" />
            <h3>Entregas Eficazes</h3>
            <p>Resultados aplicáveis, documentados e prontos para gerar impacto.</p>
          </div>
        </div>
      </section>

      {/* 4. BANNER CTA FINAL */}
      <section className="servicos-cta">
        <h2 className="servicos-cta-title">Pronto para dar o próximo passo?</h2>
        <p className="servicos-cta-desc">
          Nossa equipe está pronta para entender o seu desafio e desenhar a solução ideal.
        </p>
        <button className="btn-cta-consultoria">
          Agende sua Consultoria <ArrowRight />
        </button>
      </section>

    </div>
  );
}