import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import './DetalheServico.css';

// Dicionário completo de conteúdo focado em Engenharia e Consultoria
const conteudoServicos = {
  'cronoanalise': {
    titulo: 'Cronoanálise',
    subtitulo: 'Inteligência em tempos e métodos',
    descricaoLonga: 'A Cronoanálise é uma ferramenta essencial da Engenharia que estuda de forma criteriosa os tempos e movimentos aplicados na execução de uma tarefa. Através dela, analisamos gargalos operacionais, padronizamos as atividades produtivas e eliminamos os desperdícios que reduzem a margem de lucro da sua empresa, mapeando o ritmo ideal de trabalho.',
    beneficios: [
      'Identificação precisa de gargalos produtivos',
      'Definição confiável de tempos-padrão',
      'Aumento expressivo da capacidade produtiva',
      'Redução de ociosidade de operadores e maquinários'
    ],
    entregas: [
      { t: 'Mapeamento de Processos', d: 'Gráficos detalhados do fluxo de atividades atual.' },
      { t: 'Relatório de Desperdícios', d: 'Identificação de tempos não produtivos e ações.' },
      { t: 'Manual de Padronização', d: 'Instruções de trabalho para manter a eficiência.' }
    ]
  },
  'pesquisa-de-mercado': {
    titulo: 'Pesquisa de Mercado',
    subtitulo: 'Decisões baseadas em dados',
    descricaoLonga: 'Nossa Pesquisa de Mercado oferece uma visão aprofundada do cenário competitivo. Coletamos e interpretamos dados cruciais sobre as dores e preferências dos consumidores, as estratégias dos concorrentes diretos e as lacunas comerciais existentes, permitindo que o seu negócio execute passos validados cientificamente.',
    beneficios: [
      'Mitigação de riscos em lançamentos de produtos',
      'Compreensão exata do perfil do consumidor',
      'Identificação de novas oportunidades de nicho',
      'Validação de estratégias de preço e praça'
    ],
    entregas: [
      { t: 'Análise de Concorrência', d: 'Dossiê detalhado sobre pontos fortes e fracos dos rivais.' },
      { t: 'Relatório de Público-Alvo', d: 'Criação de personas e hábitos de consumo mapeados.' },
      { t: 'Direcionamento Estratégico', d: 'Recomendações práticas para posicionamento de marca.' }
    ]
  },
  'consultoria-ehs': {
    titulo: 'Consultoria EHS',
    subtitulo: 'Segurança, Saúde e Meio Ambiente',
    descricaoLonga: 'A Consultoria em EHS (Environment, Health and Safety) atua diretamente na adequação e prevenção de riscos ocupacionais e ambientais. Analisamos detalhadamente a estrutura operacional para garantir conformidade legal com as normas vigentes, assegurando um ecossistema produtivo sustentável, saudável e livre de sinistros.',
    beneficios: [
      'Redução de acidentes e afastamentos laborais',
      'Conformidade integral com legislações e normas',
      'Fortalecimento da cultura de segurança interna',
      'Minimização do impacto ambiental operacional'
    ],
    entregas: [
      { t: 'Mapa de Riscos', d: 'Identificação visual e técnica de perigos no ambiente.' },
      { t: 'Plano de Adequação', d: 'Roteiro normativo passo a passo para conformidade.' },
      { t: 'Diretrizes de Sustentabilidade', d: 'Boas práticas para gestão de resíduos e insumos.' }
    ]
  },
  'marketing': {
    titulo: 'Marketing',
    subtitulo: 'Posicionamento e Tração Comercial',
    descricaoLonga: 'Desenvolvemos soluções de Marketing focadas em conectar o valor do seu negócio ao cliente certo. Estruturamos o posicionamento de marca, analisamos canais de captação e criamos estratégias de comunicação integradas que geram autoridade de mercado e previsibilidade na atração de oportunidades qualificadas.',
    beneficios: [
      'Aumento da visibilidade e relevância da marca',
      'Alinhamento claro da proposta de valor',
      'Otimização do funil de atração de clientes',
      'Criação de identidade visual e comunicação coerentes'
    ],
    entregas: [
      { t: 'Manual de Identidade', d: 'Definições sobre tom de voz, marca e presença visual.' },
      { t: 'Planejamento de Conteúdo', d: 'Cronograma tático para canais de aquisição digitais.' },
      { t: 'Estratégia de Canais', d: 'Definição das melhores mídias para falar com o seu público.' }
    ]
  },
  'consultoria-financeira': {
    titulo: 'Consultoria Financeira',
    subtitulo: 'Estabilidade e Margem de Lucro',
    descricaoLonga: 'A Consultoria Financeira foca em estruturar a saúde econômica da organização. Através do mapeamento de fluxos de caixa, análise minuciosa de custos fixos e variáveis, além do desenvolvimento de precificação inteligente, geramos clareza total sobre a lucratividade real e capacidade de investimento do seu negócio.',
    beneficios: [
      'Clareza total sobre lucros e custos reais',
      'Precificação estratégica de produtos ou serviços',
      'Otimização do capital de giro operacional',
      'Subsídios sólidos para investimentos seguros'
    ],
    entregas: [
      { t: 'DRE e Fluxo de Caixa', d: 'Planilhas gerenciais de entradas, saídas e competência.' },
      { t: 'Estudo de Precificação', d: 'Modelagem de preços baseada em custos e mercado.' },
      { t: 'Plano de Redução de Custos', d: 'Apontamento de desperdícios financeiros invisíveis.' }
    ]
  },
  'ergonomia': {
    titulo: 'Ergonomia',
    subtitulo: 'Conforto e Eficiência Humana',
    descricaoLonga: 'Nossa análise de Ergonomia estuda as interações entre os colaboradores e seus postos de trabalho. Desenvolvemos diagnósticos focados na melhoria do conforto físico e cognitivo, adequando mobiliários, ferramentas, iluminação e fluxos organizacionais para impulsionar a produtividade, eliminando dores e fadigas crônicas.',
    beneficios: [
      'Redução drástica de distúrbios osteomusculares (DORT/LER)',
      'Aumento do foco e rendimento diário dos times',
      'Melhoria do clima organizacional e bem-estar',
      'Adequação técnica às exigências normativas (NR-17)'
    ],
    entregas: [
      { t: 'Análise Ergonômica', d: 'Diagnóstico técnico completo dos postos de trabalho.' },
      { t: 'Plano de Ajustes', d: 'Recomendações de alterações em mobiliários e pausas.' },
      { t: 'Manual de Postura', d: 'Guia educacional prático para conscientização interna.' }
    ]
  }
};

export default function DetalheServico() {
  const { id } = useParams(); // Captura o ID da URL dinamicamente
  const servico = conteudoServicos[id];

  // Caso o usuário tente digitar uma URL inexistente
  if (!servico) {
    return (
      <div className="detalhe-servico-container" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h2>Serviço não encontrado</h2>
        <p style={{ margin: '1rem 0 2rem 0' }}>O serviço que procura não consta no nosso portfólio atual.</p>
        <Link to="/servicos" className="btn-detalhe-voltar" style={{ color: '#00063D', borderColor: '#00063D' }}>
          Voltar para Serviços
        </Link>
      </div>
    );
  }

  return (
    <div className="detalhe-servico-container">
      {/* 1. HERO BANNER PADRONIZADO */}
      <section className="detalhe-hero">
        <div className="detalhe-badge">Consultoria Especializada</div>
        <h1>{servico.titulo}</h1>
        <p className="detalhe-hero-desc">{servico.subtitulo}</p>
      </section>

      {/* 2. CONTEÚDO EM GRID (TEXTO JUSTIFICADO + SIDEBAR) */}
      <section className="detalhe-content">
        <div className="detalhe-main-text">
          <h2>Sobre o Projeto</h2>
          <p>{servico.descricaoLonga}</p>
          <p>Trabalhamos utilizando abordagens de ponta aliadas ao suporte do corpo docente da universidade, garantindo entregas com rigor técnico e prontas para aplicação real no mercado industrial ou comercial.</p>
        </div>

        <div className="detalhe-sidebar">
          <h3>Principais Benefícios</h3>
          <div className="beneficios-list">
            {servico.beneficios.map((beneficio, index) => (
              <div key={index} className="beneficio-item">
                <CheckCircle2 className="beneficio-icon" size={18} />
                <span>{beneficio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ENTREGAS TÉCNICAS */}
      <section className="detalhe-entregas-section">
        <div className="entregas-title-box">
          <h2>O que você recebe no projeto</h2>
        </div>
        <div className="entregas-grid">
          {servico.entregas.map((entrega, idx) => (
            <div key={idx} className="entrega-card">
              <h4>{entrega.t}</h4>
              <p>{entrega.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CTA DA PÁGINA (Com o margin-bottom ideal para afastar do footer) */}
      <section className="detalhe-cta">
        <h2>Ficou interessado nesta solução?</h2>
        <p>Converse com um de nossos consultores e monte um escopo sob medida para as suas dores.</p>
        <Link to="/servicos" className="btn-detalhe-voltar">
          <ArrowLeft size={16} /> Voltar para Serviços
        </Link>
      </section>
    </div>
  );
}