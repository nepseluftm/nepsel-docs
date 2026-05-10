# Automação e Controle

O subsistema de automação e controle constitui a camada responsável pela coordenação operacional da microrrede, integrando aquisição de dados, processamento lógico e comunicação entre os diferentes equipamentos. Sua atuação viabiliza a supervisão contínua das variáveis elétricas e estados operacionais, além da execução de comandos e intertravamentos necessários ao funcionamento seguro e eficiente do sistema.

Esse subsistema permite a interoperabilidade entre geração fotovoltaica, armazenamento em baterias, sistema de recarga veicular e cargas, estabelecendo uma base estruturada para estratégias de gerenciamento energético e operação inteligente.

---

## 1. Visão Geral do Quadro de Automação

<div style={{ textAlign: 'center', margin: '2rem 0' }}>
  <em>Figura 13 – Vista interna do quadro de automação e controle da microrrede.</em>

  <div style={{ margin: '1rem 0' }}>
    
![Figura 13 – Vista interna do quadro de automação e controle da microrrede.](/img/automacao-controle.jpg)

  </div>

  <div style={{ marginTop: '0.8rem', marginBottom: '1.5rem' }}>
    <em>Fonte: elaboração própria, 2025.</em>
  </div>
</div>

A Figura 13 apresenta o painel de automação responsável pela centralização das funções de controle da microrrede. Observa-se a organização dos dispositivos em trilhos DIN, com clara separação entre módulos de alimentação, comunicação, processamento lógico e interfaces de campo. Essa configuração favorece a manutenção, a rastreabilidade dos sinais e a expansão do sistema.

---

## 2. Arquitetura Funcional

A estrutura de automação foi projetada com base em uma arquitetura hierárquica, composta por quatro níveis:

- **nível de campo:** sensores, contatos auxiliares e sinais provenientes dos equipamentos;
- **nível de interface:** módulos de entradas e saídas responsáveis pela adaptação dos sinais;
- **nível de controle:** processamento lógico centralizado;
- **nível de supervisão:** monitoramento e operação via sistema supervisório.

Essa abordagem garante modularidade, flexibilidade operacional e facilidade de integração entre os subsistemas.

---

## 3. Controlador Principal (EPC)

O núcleo do sistema de automação é o controlador identificado como **EPC (Embedded Process Controller)**, responsável pelo processamento das lógicas de controle da microrrede.

O EPC atua como unidade central de decisão, executando funções como:

- aquisição de sinais digitais e analógicos provenientes dos subsistemas;
- processamento de lógicas de intertravamento e permissivos operacionais;
- envio de comandos para atuação em dispositivos de campo;
- gerenciamento de estados operacionais da microrrede;
- interface com módulos de comunicação e supervisão.

Do ponto de vista construtivo, o EPC é montado em trilho DIN e integrado a módulos auxiliares de entradas/saídas (I/O), permitindo escalabilidade do sistema. Sua arquitetura embarcada possibilita operação confiável em ambiente industrial, com baixo tempo de resposta e alta disponibilidade.

---

## 4. Módulos de Entrada e Saída

Os módulos de entradas e saídas desempenham a função de interface entre o controlador EPC e os dispositivos físicos da microrrede. Esses módulos são responsáveis por:

- leitura de sinais digitais (status de equipamentos, contatos, alarmes);
- aquisição de sinais analógicos (quando aplicável);
- acionamento de dispositivos por meio de saídas digitais;
- isolamento elétrico entre o sistema de controle e o campo.

A utilização de módulos distribuídos permite melhor organização do cabeamento e facilita intervenções técnicas.

---

## 5. Comunicação e Integração

O sistema de automação incorpora elementos de comunicação que viabilizam a troca de dados entre os equipamentos da microrrede e o sistema supervisório. Essa comunicação permite:

- monitoramento em tempo real das variáveis do sistema;
- registro de eventos e falhas;
- envio de comandos remotos;
- sincronização entre geração, armazenamento e carga;
- suporte à implementação de estratégias de controle avançadas.

Essa integração é essencial para o funcionamento coordenado da microrrede e para a realização de estudos experimentais.

---

## 6. Organização e Aspectos Construtivos

O painel apresenta uma organização interna alinhada às boas práticas de automação industrial, destacando-se:

- segregação funcional entre potência, controle e comunicação;
- roteamento de cabos por canaletas dedicadas;
- uso de bornes para padronização das conexões;
- montagem modular em trilhos DIN;
- identificação dos dispositivos e circuitos.

Esses aspectos contribuem para maior confiabilidade, facilidade de manutenção e segurança operacional.

---

## 7. Integração com o Sistema Supervisório

O quadro de automação estabelece a interface direta com o sistema supervisório da microrrede, permitindo:

- visualização das condições operacionais em tempo real;
- acompanhamento de alarmes e eventos;
- análise de dados históricos;
- atuação remota sobre o sistema;
- suporte a estudos de desempenho e controle.

Essa camada de supervisão amplia significativamente o potencial de análise e experimentação da microrrede.

---

## 8. Considerações Técnicas

O subsistema de automação e controle é responsável por garantir a operação coordenada e segura da microrrede, atuando como elemento central de integração entre os diferentes equipamentos.

A presença do controlador EPC, associada à arquitetura modular e à infraestrutura de comunicação, proporciona flexibilidade operacional e suporte à implementação de estratégias de controle avançadas, tornando o sistema adequado tanto para operação real quanto para aplicações acadêmicas e experimentais.