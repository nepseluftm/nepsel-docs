// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'NEPSEL',
  tagline: 'Documentação técnica da Microrrede UFTM, Qualidade da Energia Elétrica e OpenDSS',
  favicon: 'img/logo-nepsel.png',

  url: 'https://gabrielfbot.github.io',
  baseUrl: '/nepsel-docs/',

  organizationName: 'gabrielfbot',
  projectName: 'nepsel-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo-nepsel.png',

    navbar: {
      title: 'NEPSEL',
      logo: {
        alt: 'NEPSEL',
        src: 'img/logo-nepsel.png',
      },
      items: [
        {
          to: '/',
          label: 'Início',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {
          href: 'https://github.com/gabrielfbot/nepsel-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Introdução',
              to: '/docs/introducao',
            },
          ],
        },
        {
          title: 'Microrrede UFTM',
          items: [
            {
              label: 'Visão geral',
              to: '/docs/Microrrede/visao-geral',
            },
            {
              label: 'Arquitetura do Sistema',
              to: '/docs/Microrrede/arquitetura',
            },
            {
              label: 'Modos de Operação',
              to: '/docs/Microrrede/modos-de-operacao',
            },
            {
              label: 'Fotovoltaico',
              to: '/docs/Microrrede/Subsistemas/fotovoltaico',
            },
            {
              label: 'Baterias',
              to: '/docs/Microrrede/Subsistemas/baterias',
            },
            {
              label: 'Carport',
              to: '/docs/Microrrede/Subsistemas/carport',
            },
            {
              label: 'QDG',
              to: '/docs/Microrrede/Subsistemas/qdg',
            },
            {
              label: 'Automação',
              to: '/docs/Microrrede/Subsistemas/automacao',
            },
            {
              label: 'Supervisório',
              to: '/docs/Microrrede/Subsistemas/supervisorio',
            },
            {
              label: 'Normas',
              to: '/docs/Microrrede/Documentacao-Tecnica/normas',
            },
            {
              label: 'Manuais',
              to: '/docs/Microrrede/Documentacao-Tecnica/manuais',
            },
            {
              label: 'Projeto',
              to: '/docs/Microrrede/Documentacao-Tecnica/projeto',
            },
            {
              label: 'Resultados',
              to: '/docs/Microrrede/Analises/resultados',
            },
            {
              label: 'Testes',
              to: '/docs/Microrrede/Analises/testes',
            },
          ],
        },
        {
          title: 'Qualidade da Energia',
          items: [
            {
              label: 'Visão geral',
              to: '/docs/qualidade-energia/visao-geral',
            },
            {
              label: 'Analisador Fluke',
              to: '/docs/qualidade-energia/analisadores/fluke',
            },
            {
              label: 'Analisador IMS',
              to: '/docs/qualidade-energia/analisadores/ims',
            },
            {
              label: 'Analisador Espec',
              to: '/docs/qualidade-energia/analisadores/espec',
            },
            {
              label: 'Introdução às Rotinas',
              to: '/docs/qualidade-energia/rotinas-analise/introducao',
            },
            {
              label: 'Indicadores PRODIST',
              to: '/docs/qualidade-energia/rotinas-analise/indicadores-prodist',
            },
            {
              label: 'Tensão em Regime Permanente',
              to: '/docs/qualidade-energia/rotinas-analise/tensao-regime-permanente',
            },
            {
              label: 'Harmônicos',
              to: '/docs/qualidade-energia/rotinas-analise/harmonicos',
            },
            {
              label: 'Desequilíbrio',
              to: '/docs/qualidade-energia/rotinas-analise/desequilibrio',
            },
            {
              label: 'Flutuação de Tensão',
              to: '/docs/qualidade-energia/rotinas-analise/flutuacao-tensao',
            },
            {
              label: 'VTCD',
              to: '/docs/qualidade-energia/rotinas-analise/vtcd',
            },
            {
              label: 'Planejamento de Medições',
              to: '/docs/qualidade-energia/medicoes-experimentais/planejamento',
            },
            {
              label: 'Coleta de Dados',
              to: '/docs/qualidade-energia/medicoes-experimentais/coleta-dados',
            },
            {
              label: 'Tratamento de Dados',
              to: '/docs/qualidade-energia/medicoes-experimentais/tratamento-dados',
            },
            {
              label: 'Relatório Fluke',
              to: '/docs/qualidade-energia/relatorios/padrao-relatorio-fluke',
            },
            {
              label: 'Relatório IMS',
              to: '/docs/qualidade-energia/relatorios/padrao-relatorio-ims',
            },
            {
              label: 'Relatório Espec',
              to: '/docs/qualidade-energia/relatorios/padrao-relatorio-espec',
            },
          ],
        },
        {
          title: 'OpenDSS',
          items: [
            {
              label: 'Visão geral',
              to: '/docs/opendss/visao-geral',
            },
            {
              label: 'Instalação',
              to: '/docs/opendss/instalacao',
            },
            {
              label: 'Conceitos Básicos',
              to: '/docs/opendss/conceitos-basicos',
            },
            {
              label: 'Estrutura de Arquivos',
              to: '/docs/opendss/estrutura-arquivos',
            },
            {
              label: 'Primeiro Circuito',
              to: '/docs/opendss/primeiro-circuito',
            },
            {
              label: 'Fluxo de Potência',
              to: '/docs/opendss/simulacoes/fluxo-potencia',
            },
            {
              label: 'Perfil de Tensão',
              to: '/docs/opendss/simulacoes/perfil-tensao',
            },
            {
              label: 'Perdas',
              to: '/docs/opendss/simulacoes/perdas',
            },
            {
              label: 'Curto-Circuito',
              to: '/docs/opendss/simulacoes/curto-circuito',
            },
            {
              label: 'Fotovoltaico',
              to: '/docs/opendss/simulacoes/fotovoltaico',
            },
            {
              label: 'BESS',
              to: '/docs/opendss/simulacoes/bess',
            },
            {
              label: 'Qualidade da Energia',
              to: '/docs/opendss/simulacoes/qualidade-energia',
            },
            {
              label: 'Sistema Teste',
              to: '/docs/opendss/exemplos/sistema-teste',
            },
            {
              label: 'Rede com FV',
              to: '/docs/opendss/exemplos/rede-com-fv',
            },
            {
              label: 'Rede com BESS',
              to: '/docs/opendss/exemplos/rede-com-bess',
            },
          ],
        },
        {
          title: 'Projeto',
          items: [
            {
              label: 'Repositório GitHub',
              href: 'https://github.com/gabrielfbot/nepsel-docs',
            },
          ],
        },
        {
          title: 'Institucional',
          items: [
            {
              label: 'UFTM',
              href: 'https://www.uftm.edu.br/',
            },
            {
              label: 'ICTE',
              href: '#',
            },
            {
              label: 'NEPSEL',
              href: '#',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} NEPSEL • ICTE • UFTM`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;