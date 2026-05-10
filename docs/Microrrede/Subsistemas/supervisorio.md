---
title: Supervisório
sidebar_label: Supervisório
---

# Sistema Supervisório

O sistema supervisório tem como finalidade permitir o monitoramento em tempo real das variáveis elétricas e operacionais da planta experimental. A plataforma reúne informações provenientes dos inversores fotovoltaicos, banco de baterias, multimedidores, quadro de automação e demais dispositivos integrados ao sistema.

Além da visualização instantânea das grandezas, o supervisório permite o acompanhamento histórico dos dados, possibilitando ao usuário definir a escala de tempo de visualização, como intervalos de minutos, horas, dias, semanas ou períodos personalizados, conforme a necessidade da análise. Esse recurso facilita a observação de tendências, variações de carga, comportamento da geração fotovoltaica e eventos operacionais da microrrede.

Atualmente, o sistema supervisório encontra-se em processo de reestruturação e modernização, com melhorias previstas nas interfaces gráficas, organização dos dashboards, ampliação dos dados monitorados e integração com novas ferramentas de análise energética e qualidade da energia elétrica.

---

# 1. Visão Geral do Supervisório

A interface principal do supervisório apresenta uma visão integrada da microrrede, permitindo ao usuário acompanhar o estado geral do sistema, os fluxos de energia e as principais variáveis operacionais.

<div style={{ textAlign: 'center', margin: '2rem 0' }}>

<em>Figura 14 – Dashboard geral do sistema supervisório da microrrede.</em>

<div style={{ margin: '1rem 0' }}>

![Dashboard Geral](/img/dashboard-geral.png)

</div>

<div style={{ marginTop: '0.8rem', marginBottom: '1.5rem' }}>
<em>Fonte: elaboração própria, 2026.</em>
</div>

</div>

Por meio dessa interface é possível acompanhar o comportamento operacional da microrrede em tempo real, identificar alterações de carga, acompanhar a geração fotovoltaica e monitorar o fluxo energético entre os subsistemas.

---

# 2. Integração com a Automação

O supervisório está integrado ao sistema de automação da microrrede, responsável pela aquisição de sinais, comunicação entre dispositivos e execução das lógicas de controle.

A estrutura utiliza módulos industriais da plataforma EPC Phoenix Contact, responsáveis pela integração entre equipamentos de campo e a interface supervisória.

<div style={{ textAlign: 'center', margin: '2rem 0' }}>

<em>Figura 15 – Sistema de automação e controle da microrrede.</em>

<div style={{ margin: '1rem 0' }}>

![Sistema de Automação](/img/automacao-controle.jpg)

</div>

<div style={{ marginTop: '0.8rem', marginBottom: '1.5rem' }}>
<em>Fonte: elaboração própria, 2026.</em>
</div>

</div>

A integração entre automação e supervisório permite centralizar informações operacionais, registrar eventos, gerar históricos e facilitar o gerenciamento da planta experimental.

---

# 3. Monitoramento dos Inversores

O sistema supervisório permite acompanhar o funcionamento dos inversores híbridos trifásicos responsáveis pela conversão de energia entre os sistemas em corrente contínua e corrente alternada.

<div style={{ textAlign: 'center', margin: '2rem 0' }}>

<em>Figura 16 – Interface de monitoramento dos inversores híbridos.</em>

<div style={{ margin: '1rem 0' }}>

![Inversores](/img/inversores.png)

</div>

<div style={{ marginTop: '0.8rem', marginBottom: '1.5rem' }}>
<em>Fonte: elaboração própria, 2026.</em>
</div>

</div>

Entre as variáveis monitoradas destacam-se:

- potência gerada;
- tensão elétrica;
- corrente;
- frequência;
- fluxo de potência;
- estado operacional;
- condição de carregamento das baterias.

Essas informações permitem avaliar o desempenho energético da geração fotovoltaica e a interação entre os subsistemas da microrrede.

---

# 4. Monitoramento do Banco de Baterias

O banco de baterias é acompanhado por meio de uma interface dedicada ao sistema de gerenciamento energético e armazenamento.

<div style={{ textAlign: 'center', margin: '2rem 0' }}>

<em>Figura 17 – Interface de monitoramento do banco de baterias.</em>

<div style={{ margin: '1rem 0' }}>

![BMS](/img/bms.png)

</div>

<div style={{ marginTop: '0.8rem', marginBottom: '1.5rem' }}>
<em>Fonte: elaboração própria, 2026.</em>
</div>

</div>

A plataforma possibilita acompanhar variáveis relacionadas ao estado de operação do armazenamento, incluindo:

- tensão do banco;
- corrente;
- potência;
- estado de carga;
- condição de carregamento e descarga.

Essas informações são importantes para estratégias de gerenciamento energético e avaliação do desempenho operacional do sistema de armazenamento.

---

# 5. Monitoramento dos Multimedidores

Os multimedidores instalados na microrrede realizam a aquisição das principais grandezas elétricas do sistema trifásico.

<div style={{ textAlign: 'center', margin: '2rem 0' }}>

<em>Figura 18 – Interface de monitoramento dos multimedidores da microrrede.</em>

<div style={{ margin: '1rem 0' }}>

![Multimedidores](/img/multimedidores.png)

</div>

<div style={{ marginTop: '0.8rem', marginBottom: '1.5rem' }}>
<em>Fonte: elaboração própria, 2026.</em>
</div>

</div>

Entre as grandezas monitoradas destacam-se:

- tensões de fase;
- correntes elétricas;
- potência ativa;
- potência reativa;
- frequência da rede;
- fator de potência;
- corrente no neutro;
- energia consumida.

As interfaces gráficas apresentam os valores de forma organizada e intuitiva, permitindo identificar rapidamente alterações operacionais ou desequilíbrios entre fases.

Os dados obtidos pelos multimedidores também são utilizados em análises relacionadas à qualidade da energia elétrica.

---

# 6. Histórico de Dados e Escala de Tempo

Uma das funcionalidades mais importantes do sistema supervisório é a capacidade de armazenamento e visualização histórica das informações operacionais.

O usuário pode selecionar diferentes escalas de tempo para análise dos dados, permitindo acompanhar:

- eventos instantâneos;
- comportamento horário;
- tendências diárias;
- análises semanais;
- períodos personalizados.

Esse recurso permite avaliar o comportamento da geração fotovoltaica, o perfil de consumo das cargas, o desempenho do banco de baterias e o comportamento elétrico da microrrede ao longo do tempo.

A definição personalizada da escala temporal torna o supervisório uma ferramenta importante para estudos técnicos, monitoramento operacional e análises acadêmicas relacionadas à microrrede.

---

# 7. Aplicações Técnicas e Acadêmicas

O sistema supervisório possui papel importante tanto na operação quanto nas atividades acadêmicas desenvolvidas na microrrede experimental da UFTM.

Entre as principais aplicações destacam-se:

- monitoramento operacional;
- análise energética;
- gerenciamento de cargas;
- estudos de qualidade da energia;
- análise de fluxo de potência;
- avaliação do armazenamento de energia;
- pesquisas relacionadas a microrredes inteligentes.

A centralização dos dados em uma interface gráfica facilita a compreensão do sistema e contribui para atividades de ensino, pesquisa e extensão.

---

# 8. Considerações Técnicas

O sistema supervisório constitui uma ferramenta essencial para operação, análise e acompanhamento da microrrede da UFTM. Sua integração com inversores, banco de baterias, multimedidores e automação permite uma visão ampla do comportamento elétrico da planta.

Mesmo estando em processo de reestruturação, a plataforma já apresenta papel relevante na aquisição e visualização dos dados operacionais, servindo como base para futuras melhorias, ampliação dos dashboards e desenvolvimento de análises mais avançadas sobre o desempenho da microrrede.