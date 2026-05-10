import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const trilhas = [
  {
    numero: '01',
    titulo: 'Microrrede UFTM',
    texto:
      'Conheça a documentação técnica da microrrede experimental, incluindo visão geral, arquitetura, subsistemas, modos de operação, automação, supervisório e análises.',
    link: '/docs/Microrrede/visao-geral',
    botao: 'Conhecer Microrrede',
  },
  {
    numero: '02',
    titulo: 'Qualidade da Energia Elétrica',
    texto:
      'Estude analisadores de energia, medições experimentais, indicadores do PRODIST, tratamento de dados e padrões de relatórios técnicos.',
    link: '/docs/qualidade-energia/visao-geral',
    botao: 'Acessar QEE',
  },
  {
    numero: '03',
    titulo: 'OpenDSS',
    texto:
      'Aprenda a modelar sistemas elétricos, realizar fluxo de potência, analisar perfil de tensão, perdas, geração fotovoltaica e BESS.',
    link: '/docs/opendss/visao-geral',
    botao: 'Estudar OpenDSS',
  },
];

const roteiro = [
  {
    numero: '01',
    titulo: 'Introdução',
    texto: 'Entenda a proposta da plataforma e a organização geral da documentação.',
    link: '/docs/introducao',
  },
  {
    numero: '02',
    titulo: 'Microrrede UFTM',
    texto: 'Conheça primeiro o sistema real do projeto e sua documentação técnica.',
    link: '/docs/Microrrede/visao-geral',
  },
  {
    numero: '03',
    titulo: 'Qualidade da Energia',
    texto: 'Avance para medições, analisadores, indicadores e relatórios técnicos.',
    link: '/docs/qualidade-energia/visao-geral',
  },
  {
    numero: '04',
    titulo: 'OpenDSS',
    texto: 'Finalize com modelagem computacional e simulações de sistemas elétricos.',
    link: '/docs/opendss/visao-geral',
  },
];

const processo = [
  {
    numero: '01',
    titulo: 'Conhecer',
    texto: 'Compreensão da Microrrede UFTM como aplicação real do projeto.',
  },
  {
    numero: '02',
    titulo: 'Medir',
    texto: 'Coleta de dados com analisadores de energia em laboratório ou em campo.',
  },
  {
    numero: '03',
    titulo: 'Analisar',
    texto: 'Tratamento dos dados e avaliação dos indicadores de qualidade da energia.',
  },
  {
    numero: '04',
    titulo: 'Simular',
    texto: 'Modelagem computacional e estudos aplicados utilizando OpenDSS.',
  },
];

const topicos = [
  'Microrrede UFTM',
  'Visão geral',
  'Arquitetura',
  'Modos de operação',
  'Subsistemas',
  'Fotovoltaico',
  'Baterias',
  'Carport',
  'QDG',
  'Automação',
  'Supervisório',
  'Documentação técnica',
  'Normas',
  'Manuais',
  'Análises',
  'Resultados',
  'Qualidade da Energia',
  'PRODIST',
  'Analisadores',
  'OpenDSS',
  'Fluxo de potência',
  'Perfil de tensão',
  'Perdas',
  'BESS',
];

const destaques = [
  {
    titulo: 'Trilhas organizadas',
    texto: 'Estrutura dividida em Microrrede UFTM, Qualidade da Energia e OpenDSS.',
  },
  {
    titulo: 'Roteiro recomendado',
    texto: 'Sequência clara para orientar novos alunos desde a introdução até os estudos aplicados.',
  },
  {
    titulo: 'Base integrada',
    texto: 'Documentação única para ensino, pesquisa, extensão, medições e simulações.',
  },
];

export default function Home() {
  const logoNepsel = useBaseUrl('/img/logo-nepsel.png');
  const logoIcte = useBaseUrl('/img/logo-icte.png');

  return (
    <Layout
      title="Início"
      description="Base técnica integrada do NEPSEL para Microrrede UFTM, Qualidade da Energia Elétrica e OpenDSS"
    >
      <style>{`
        .nep-page {
          background: #f4f8f5;
          color: #12352c;
        }

        .nep-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .nep-hero {
          padding: 72px 0 78px;
          color: #ffffff;
          background:
            radial-gradient(circle at 14% 18%, rgba(167, 214, 43, 0.24), transparent 28%),
            linear-gradient(135deg, #073b1e 0%, #0b5a2a 52%, #1b7f3a 100%);
        }

        .nep-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(340px, 0.92fr);
          gap: 46px;
          align-items: center;
        }

        .nep-logo-row {
          display: flex;
          gap: 14px;
          margin-bottom: 24px;
        }

        .nep-logo-card {
          width: 82px;
          height: 82px;
          padding: 10px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 16px 34px rgba(0, 0, 0, 0.18);
          overflow: hidden;
          flex: 0 0 auto;
        }

        .nep-logo-card img {
          display: block;
          width: 100%;
          height: 100%;
          max-width: 60px;
          max-height: 60px;
          object-fit: contain;
        }

        .nep-kicker {
          display: block;
          margin-bottom: 14px;
          color: #d7ff9f;
          font-size: 0.84rem;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .nep-title {
          max-width: 780px;
          margin: 0;
          color: #ffffff;
          font-size: clamp(2.55rem, 5vw, 4.45rem);
          line-height: 1.03;
          letter-spacing: -0.055em;
          font-weight: 950;
        }

        .nep-title span {
          color: #a7d62b;
        }

        .nep-subtitle {
          max-width: 740px;
          margin: 22px 0 0;
          color: rgba(255, 255, 255, 0.93);
          font-size: 1.1rem;
          line-height: 1.72;
        }

        .nep-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 30px;
        }

        .nep-btn-primary,
        .nep-btn-secondary,
        .nep-card-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 0 22px;
          border-radius: 14px;
          font-weight: 850;
          text-decoration: none !important;
          transition: 0.22s ease;
          white-space: nowrap;
        }

        .nep-btn-primary {
          background: #a7d62b;
          color: #10210b !important;
          box-shadow: 0 14px 28px rgba(167, 214, 43, 0.28);
        }

        .nep-btn-primary:hover {
          transform: translateY(-2px);
          background: #bdf04a;
          color: #10210b !important;
        }

        .nep-btn-secondary {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.34);
        }

        .nep-btn-secondary:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.16);
          color: #ffffff !important;
        }

        .nep-info-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          max-width: 760px;
          margin-top: 34px;
        }

        .nep-info-card {
          padding: 20px 18px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.10);
          border: 1px solid rgba(255, 255, 255, 0.17);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .nep-info-card strong {
          display: block;
          margin-bottom: 8px;
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 900;
        }

        .nep-info-card span {
          display: block;
          color: rgba(255, 255, 255, 0.88);
          font-size: 0.96rem;
          line-height: 1.5;
          font-weight: 600;
        }

        .nep-hero-panel {
          padding: 32px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.16);
          backdrop-filter: blur(10px);
        }

        .nep-panel-tag {
          display: block;
          margin-bottom: 12px;
          color: #d7ff9f;
          font-size: 0.82rem;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .nep-hero-panel h2 {
          margin: 0 0 16px;
          color: #ffffff;
          font-size: 2rem;
          line-height: 1.15;
          letter-spacing: -0.025em;
        }

        .nep-hero-panel p {
          margin: 0;
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.72;
        }

        .nep-divider {
          height: 1px;
          margin: 22px 0 18px;
          background: rgba(255, 255, 255, 0.18);
        }

        .nep-hero-panel h3 {
          margin: 0 0 12px;
          color: #ffffff;
          font-size: 1.28rem;
        }

        .nep-hero-panel ul {
          margin: 0;
          padding-left: 20px;
        }

        .nep-hero-panel li {
          margin-bottom: 10px;
          color: rgba(255, 255, 255, 0.94);
          line-height: 1.55;
        }

        .nep-section,
        .nep-section-white {
          padding: 78px 0;
        }

        .nep-section {
          background: #f4f8f5;
        }

        .nep-section-white {
          background: #ffffff;
        }

        .nep-section-head {
          max-width: 860px;
          margin-bottom: 34px;
        }

        .nep-section-head span,
        .nep-split-text span,
        .nep-topic-text span,
        .nep-cta-text span {
          display: block;
          margin-bottom: 10px;
          color: #0b5a2a;
          font-size: 0.82rem;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .nep-section-head h2,
        .nep-split-text h2,
        .nep-topic-text h2,
        .nep-cta-text h2 {
          margin: 0 0 12px;
          color: #103629;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.12;
          letter-spacing: -0.04em;
          font-weight: 900;
        }

        .nep-section-head p,
        .nep-split-text p,
        .nep-topic-text p,
        .nep-cta-text p {
          margin: 0;
          color: #4f6b62;
          font-size: 1.08rem;
          line-height: 1.75;
        }

        .nep-card-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .nep-feature-card {
          display: flex;
          flex-direction: column;
          min-height: 340px;
          padding: 26px;
          border-radius: 24px;
          background: #ffffff;
          border: 1px solid #d7ece1;
          box-shadow: 0 16px 34px rgba(16, 54, 41, 0.06);
        }

        .nep-feature-number {
          width: 54px;
          height: 54px;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: #e7f7ef;
          color: #0b5a2a;
          font-weight: 900;
        }

        .nep-feature-card h3 {
          margin: 0 0 12px;
          color: #103629;
          font-size: 1.55rem;
          line-height: 1.22;
        }

        .nep-feature-card p {
          margin: 0;
          color: #4f6b62;
          line-height: 1.72;
        }

        .nep-card-btn {
          width: fit-content;
          margin-top: auto;
          background: #0b5a2a;
          color: #ffffff !important;
        }

        .nep-card-btn:hover {
          transform: translateY(-2px);
          background: #08451f;
          color: #ffffff !important;
        }

        .nep-timeline {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .nep-time-card {
          min-height: 230px;
          padding: 22px;
          border-radius: 22px;
          background: #fbfdfb;
          border: 1px solid #d7ece1;
          text-decoration: none !important;
          transition: 0.22s ease;
          box-shadow: 0 10px 20px rgba(16, 54, 41, 0.03);
        }

        .nep-time-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 30px rgba(16, 54, 41, 0.08);
        }

        .nep-time-number {
          width: 48px;
          height: 48px;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          background: #0b5a2a;
          color: #ffffff;
          font-weight: 900;
        }

        .nep-time-card h3 {
          margin: 0 0 10px;
          color: #103629;
          font-size: 1.22rem;
        }

        .nep-time-card p {
          margin: 0;
          color: #4f6b62;
          line-height: 1.65;
        }

        .nep-split,
        .nep-topic-box {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 26px;
          padding: 30px;
          border-radius: 28px;
          background: #ffffff;
          border: 1px solid #d7ece1;
          box-shadow: 0 16px 34px rgba(16, 54, 41, 0.05);
        }

        .nep-process-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .nep-process-card {
          padding: 20px;
          border-radius: 20px;
          background: #f8fcf9;
          border: 1px solid #d7ece1;
        }

        .nep-process-badge {
          width: 44px;
          height: 44px;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: #0b5a2a;
          color: #ffffff;
          font-weight: 900;
        }

        .nep-process-card h3 {
          margin: 0 0 8px;
          color: #103629;
          font-size: 1.22rem;
        }

        .nep-process-card p {
          margin: 0;
          color: #4f6b62;
          line-height: 1.62;
        }

        .nep-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-content: flex-start;
        }

        .nep-chips span {
          display: inline-flex;
          align-items: center;
          padding: 11px 15px;
          border-radius: 999px;
          background: #eaf8f0;
          border: 1px solid #d0eadb;
          color: #0b5a2a;
          font-weight: 800;
          line-height: 1.2;
        }

        .nep-cta-section {
          padding: 78px 0;
          background:
            radial-gradient(circle at 14% 20%, rgba(167, 214, 43, 0.18), transparent 26%),
            linear-gradient(135deg, #073b1e 0%, #0b5a2a 52%, #1b7f3a 100%);
        }

        .nep-cta {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) auto;
          gap: 26px;
          align-items: center;
          padding: 34px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.09);
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0 22px 48px rgba(0, 0, 0, 0.12);
        }

        .nep-cta-text span {
          color: #d7ff9f;
        }

        .nep-cta-text h2 {
          color: #ffffff;
        }

        .nep-cta-text p {
          color: rgba(255, 255, 255, 0.92);
        }

        .nep-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: flex-end;
        }

        .footer {
          background: linear-gradient(135deg, #073b1e 0%, #0b5a2a 55%, #1b7f3a 100%) !important;
          border-top: 4px solid #a7d62b;
        }

        .footer__logo {
          max-width: 180px;
          height: auto;
          margin-bottom: 1rem;
          background: #ffffff;
          border-radius: 18px;
          padding: 0.6rem 1rem;
        }

        .footer__title,
        .footer__link-item,
        .footer__copyright {
          color: #ffffff !important;
        }

        .footer__link-item:hover {
          color: #d7ff9f !important;
          text-decoration: none;
        }

        @media (max-width: 1100px) {
          .nep-hero-grid,
          .nep-card-grid,
          .nep-split,
          .nep-topic-box,
          .nep-cta {
            grid-template-columns: 1fr;
          }

          .nep-timeline {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .nep-cta-actions {
            justify-content: flex-start;
          }
        }

        @media (max-width: 720px) {
          .nep-container {
            width: min(1180px, calc(100% - 24px));
          }

          .nep-hero {
            padding: 46px 0 56px;
          }

          .nep-info-grid,
          .nep-timeline,
          .nep-process-grid,
          .nep-card-grid {
            grid-template-columns: 1fr;
          }

          .nep-actions,
          .nep-cta-actions {
            flex-direction: column;
          }

          .nep-btn-primary,
          .nep-btn-secondary,
          .nep-card-btn {
            width: 100%;
          }

          .nep-logo-card {
            width: 70px;
            height: 70px;
          }

          .nep-logo-card img {
            max-width: 50px;
            max-height: 50px;
          }

          .nep-hero-panel,
          .nep-feature-card,
          .nep-split,
          .nep-topic-box,
          .nep-cta {
            padding: 22px;
          }

          .nep-title {
            font-size: clamp(2.2rem, 10vw, 3.35rem);
          }
        }
      `}</style>

      <main className="nep-page">
        <section className="nep-hero">
          <div className="nep-container">
            <div className="nep-hero-grid">
              <div>
                <div className="nep-logo-row">
                  <div className="nep-logo-card">
                    <img src={logoNepsel} alt="Logo NEPSEL" />
                  </div>
                  <div className="nep-logo-card">
                    <img src={logoIcte} alt="Logo ICTE" />
                  </div>
                </div>

                <span className="nep-kicker">ICTE / NEPSEL / UFTM</span>

                <h1 className="nep-title">
                  Base técnica integrada para <span>Microrrede UFTM</span>,
                  Qualidade da Energia e OpenDSS
                </h1>

                <p className="nep-subtitle">
                  Plataforma institucional desenvolvida para centralizar a documentação técnica do
                  projeto, apoiar a formação de novos alunos e organizar conteúdos de ensino,
                  pesquisa, extensão, medições experimentais e simulações computacionais.
                </p>

                <div className="nep-actions">
                  <Link className="nep-btn-primary" to="/docs/introducao">
                    Iniciar pela introdução
                  </Link>
                  <Link className="nep-btn-secondary" to="/docs/Microrrede/visao-geral">
                    Conhecer a Microrrede
                  </Link>
                </div>

                <div className="nep-info-grid">
                  {destaques.map((item) => (
                    <div className="nep-info-card" key={item.titulo}>
                      <strong>{item.titulo}</strong>
                      <span>{item.texto}</span>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="nep-hero-panel">
                <span className="nep-panel-tag">Plataforma NEPSEL</span>
                <h2>Objetivo da documentação</h2>
                <p>
                  Organizar o conhecimento técnico do projeto em um ambiente visual,
                  institucional e estruturado, servindo como base de consulta para alunos,
                  pesquisadores e colaboradores.
                </p>

                <div className="nep-divider" />

                <h3>Conteúdos contemplados</h3>
                <ul>
                  <li>Documentação técnica da Microrrede UFTM;</li>
                  <li>Arquitetura, subsistemas, automação e supervisório;</li>
                  <li>Qualidade da Energia Elétrica e indicadores do PRODIST;</li>
                  <li>Analisadores de energia: Fluke, IMS e Espec;</li>
                  <li>Simulações de sistemas elétricos no OpenDSS.</li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="nep-section">
          <div className="nep-container">
            <div className="nep-section-head">
              <span>Trilhas técnicas</span>
              <h2>Escolha uma área de estudo</h2>
              <p>
                A documentação foi organizada em três frentes complementares:
                conhecimento da Microrrede UFTM, análise de Qualidade da Energia
                e simulação computacional em OpenDSS.
              </p>
            </div>

            <div className="nep-card-grid">
              {trilhas.map((item) => (
                <article className="nep-feature-card" key={item.numero}>
                  <div className="nep-feature-number">{item.numero}</div>
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                  <Link className="nep-card-btn" to={item.link}>
                    {item.botao}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="nep-section-white">
          <div className="nep-container">
            <div className="nep-section-head">
              <span>Roteiro recomendado</span>
              <h2>Por onde começar?</h2>
              <p>
                Para novos integrantes, a sequência mais indicada é: primeiro entender a
                plataforma, depois conhecer a Microrrede UFTM e, em seguida, avançar para
                Qualidade da Energia e OpenDSS.
              </p>
            </div>

            <div className="nep-timeline">
              {roteiro.map((item) => (
                <Link className="nep-time-card" to={item.link} key={item.numero}>
                  <div className="nep-time-number">{item.numero}</div>
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="nep-section">
          <div className="nep-container">
            <div className="nep-split">
              <div className="nep-split-text">
                <span>Visão integrada</span>
                <h2>Da documentação técnica à análise e simulação</h2>
                <p>
                  A proposta da plataforma é conectar a documentação da Microrrede UFTM,
                  a prática de laboratório, a análise de Qualidade da Energia e a modelagem
                  computacional. Assim, o aluno compreende o ciclo técnico completo de estudo.
                </p>
              </div>

              <div className="nep-process-grid">
                {processo.map((item) => (
                  <div className="nep-process-card" key={item.numero}>
                    <div className="nep-process-badge">{item.numero}</div>
                    <h3>{item.titulo}</h3>
                    <p>{item.texto}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="nep-section-white">
          <div className="nep-container">
            <div className="nep-topic-box">
              <div className="nep-topic-text">
                <span>Aplicações técnicas</span>
                <h2>Microrrede, QEE e OpenDSS em uma base única</h2>
                <p>
                  A documentação integra o sistema real da Microrrede UFTM, os estudos
                  de Qualidade da Energia e as simulações computacionais, permitindo
                  conectar teoria, medições, modelagem e aplicações reais em sistemas
                  elétricos modernos.
                </p>
              </div>

              <div className="nep-chips">
                {topicos.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="nep-cta-section">
          <div className="nep-container">
            <div className="nep-cta">
              <div className="nep-cta-text">
                <span>Primeiro acesso</span>
                <h2>Recomendação para novos alunos</h2>
                <p>
                  Comece pela Introdução, conheça a Microrrede UFTM e depois avance
                  para Qualidade da Energia e OpenDSS conforme a atividade em desenvolvimento.
                </p>
              </div>

              <div className="nep-cta-actions">
                <Link className="nep-btn-primary" to="/docs/introducao">
                  Começar agora
                </Link>
                <Link className="nep-btn-secondary" to="/docs/Microrrede/visao-geral">
                  Ver Microrrede UFTM
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}