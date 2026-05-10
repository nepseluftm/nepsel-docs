const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'introducao',
      label: 'Introdução',
    },

    {
      type: 'category',
      label: 'Microrrede UFTM',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Microrrede/visao-geral',
          label: 'Visão Geral',
        },
        {
          type: 'doc',
          id: 'Microrrede/arquitetura',
          label: 'Arquitetura do Sistema',
        },
        {
          type: 'doc',
          id: 'Microrrede/modos-de-operacao',
          label: 'Modos de Operação',
        },
        {
          type: 'category',
          label: 'Subsistemas',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'Microrrede/Subsistemas/fotovoltaico',
              label: 'Fotovoltaico',
            },
            {
              type: 'doc',
              id: 'Microrrede/Subsistemas/baterias',
              label: 'Baterias',
            },
            {
              type: 'doc',
              id: 'Microrrede/Subsistemas/carport',
              label: 'Carport',
            },
            {
              type: 'doc',
              id: 'Microrrede/Subsistemas/qdg',
              label: 'QDG',
            },
            {
              type: 'doc',
              id: 'Microrrede/Subsistemas/automacao',
              label: 'Automação',
            },
            {
              type: 'doc',
              id: 'Microrrede/Subsistemas/supervisorio',
              label: 'Supervisório',
            },
          ],
        },
        {
          type: 'category',
          label: 'Documentação Técnica',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'Microrrede/Documentacao-Tecnica/normas',
              label: 'Normas',
            },
            {
              type: 'doc',
              id: 'Microrrede/Documentacao-Tecnica/manuais',
              label: 'Manuais',
            },
            {
              type: 'doc',
              id: 'Microrrede/Documentacao-Tecnica/projeto',
              label: 'Projeto',
            },
          ],
        },
        {
          type: 'category',
          label: 'Análises',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'Microrrede/Analises/resultados',
              label: 'Resultados',
            },
            {
              type: 'doc',
              id: 'Microrrede/Analises/testes',
              label: 'Testes',
            },
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'Qualidade da Energia Elétrica',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'qualidade-energia/visao-geral',
          label: 'Visão Geral',
        },
        {
          type: 'category',
          label: 'Analisadores de Energia',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'qualidade-energia/analisadores/fluke',
              label: 'Analisador Fluke',
            },
            {
              type: 'doc',
              id: 'qualidade-energia/analisadores/ims',
              label: 'Analisador IMS',
            },
            {
              type: 'doc',
              id: 'qualidade-energia/analisadores/espec',
              label: 'Analisador Espec',
            },
          ],
        },
        {
          type: 'category',
          label: 'Rotinas de Análise',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'qualidade-energia/rotinas-analise/introducao',
              label: 'Introdução',
            },
            {
              type: 'doc',
              id: 'qualidade-energia/rotinas-analise/indicadores-prodist',
              label: 'Indicadores PRODIST',
            },
            {
              type: 'doc',
              id: 'qualidade-energia/rotinas-analise/tensao-regime-permanente',
              label: 'Tensão em Regime Permanente',
            },
            {
              type: 'doc',
              id: 'qualidade-energia/rotinas-analise/harmonicos',
              label: 'Harmônicos',
            },
            {
              type: 'doc',
              id: 'qualidade-energia/rotinas-analise/desequilibrio',
              label: 'Desequilíbrio',
            },
            {
              type: 'doc',
              id: 'qualidade-energia/rotinas-analise/flutuacao-tensao',
              label: 'Flutuação de Tensão',
            },
            {
              type: 'doc',
              id: 'qualidade-energia/rotinas-analise/vtcd',
              label: 'VTCD',
            },
          ],
        },
        {
          type: 'category',
          label: 'Medições Experimentais',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'qualidade-energia/medicoes-experimentais/planejamento',
              label: 'Planejamento',
            },
            {
              type: 'doc',
              id: 'qualidade-energia/medicoes-experimentais/coleta-dados',
              label: 'Coleta de Dados',
            },
            {
              type: 'doc',
              id: 'qualidade-energia/medicoes-experimentais/tratamento-dados',
              label: 'Tratamento de Dados',
            },
          ],
        },
        {
          type: 'category',
          label: 'Padrões de Relatórios',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'qualidade-energia/relatorios/padrao-relatorio-fluke',
              label: 'Padrão de Relatório Fluke',
            },
            {
              type: 'doc',
              id: 'qualidade-energia/relatorios/padrao-relatorio-ims',
              label: 'Padrão de Relatório IMS',
            },
            {
              type: 'doc',
              id: 'qualidade-energia/relatorios/padrao-relatorio-espec',
              label: 'Padrão de Relatório Espec',
            },
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'OpenDSS',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'opendss/visao-geral',
          label: 'Visão Geral',
        },
        {
          type: 'doc',
          id: 'opendss/instalacao',
          label: 'Instalação',
        },
        {
          type: 'doc',
          id: 'opendss/conceitos-basicos',
          label: 'Conceitos Básicos',
        },
        {
          type: 'doc',
          id: 'opendss/estrutura-arquivos',
          label: 'Estrutura de Arquivos',
        },
        {
          type: 'doc',
          id: 'opendss/primeiro-circuito',
          label: 'Primeiro Circuito',
        },
        {
          type: 'category',
          label: 'Simulações',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'opendss/simulacoes/fluxo-potencia',
              label: 'Fluxo de Potência',
            },
            {
              type: 'doc',
              id: 'opendss/simulacoes/perfil-tensao',
              label: 'Perfil de Tensão',
            },
            {
              type: 'doc',
              id: 'opendss/simulacoes/perdas',
              label: 'Perdas',
            },
            {
              type: 'doc',
              id: 'opendss/simulacoes/curto-circuito',
              label: 'Curto-Circuito',
            },
            {
              type: 'doc',
              id: 'opendss/simulacoes/fotovoltaico',
              label: 'Fotovoltaico',
            },
            {
              type: 'doc',
              id: 'opendss/simulacoes/bess',
              label: 'BESS',
            },
            {
              type: 'doc',
              id: 'opendss/simulacoes/qualidade-energia',
              label: 'Qualidade da Energia',
            },
          ],
        },
        {
          type: 'category',
          label: 'Exemplos Práticos',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'opendss/exemplos/sistema-teste',
              label: 'Sistema Teste',
            },
            {
              type: 'doc',
              id: 'opendss/exemplos/rede-com-fv',
              label: 'Rede com FV',
            },
            {
              type: 'doc',
              id: 'opendss/exemplos/rede-com-bess',
              label: 'Rede com BESS',
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;