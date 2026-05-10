---
title: Sistema Fotovoltaico
---

# Sistema Fotovoltaico

O subsistema fotovoltaico representa a principal fonte de geração distribuída da instalação experimental, sendo responsável pela conversão da radiação solar em energia elétrica em corrente contínua. Sua integração com os inversores híbridos, com o sistema de armazenamento e com a rede elétrica permite analisar diferentes estratégias de operação, fluxo de potência e desempenho energético em condições reais de uso.

Além de contribuir para o suprimento das cargas da instalação, esse subsistema também serve como base para estudos acadêmicos relacionados à geração renovável, eficiência energética, supervisão, qualidade de energia e controle em microrredes.

---

## 1. Localização da Instalação

A unidade de geração encontra-se instalada nas dependências da Universidade Federal do Triângulo Mineiro (UFTM), no campus Univerdecidade, em Uberaba – MG. A escolha da área de implantação considerou a disponibilidade física para montagem da estrutura, a integração com a infraestrutura elétrica existente e a viabilidade para atividades de operação, monitoramento e manutenção.

### 1.1 Dados de Localização

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <div>

<p align="center"><b>Tabela 1 – Localização da instalação da microrrede.</b></p>

| Parâmetro | Informação |
|:----------|:----------:|
| Coordenadas Geográficas | -19.710906122658464, -47.96185612871777 |
| Endereço | Av. Randolfo Borges Júnior, 1400 – Univerdecidade |
| Município / Estado | Uberaba – MG |
| Situação da Instalação | Sistema já instalado e em operação |

  </div>
</div>

<p align="center"><small>Fonte: elaboração própria, 2025.</small></p>

### 1.2 Localização Geográfica

<p align="center"><i>Figura 2 – Localização do sistema de microgeração no campus Univerdecidade.</i></p>

<p align="center">
  <iframe
    src="https://www.google.com/maps?q=-19.710906122658464,-47.96185612871777&hl=pt-BR&z=17&output=embed"
    width="700"
    height="450"
    style={{ border: 0, borderRadius: '12px' }}
    allowFullScreen=""
    loading="lazy">
  </iframe>
</p>

<p align="center"><small>Fonte: Google Maps, 2025.</small></p>

A área ocupada corresponde ao espaço destinado ao *carport* fotovoltaico, no qual estão instalados os módulos responsáveis pela geração. A posição adotada favorece a organização do arranjo físico, o acesso técnico aos equipamentos e a integração com os demais elementos da instalação experimental.

---

## 2. Descrição Geral

O sistema é composto por módulos fotovoltaicos interligados em arranjos série-paralelo (*strings*), conectados a inversores híbridos trifásicos responsáveis pela conversão da energia gerada em corrente contínua para corrente alternada.

Essa configuração possibilita o fornecimento de energia às cargas, a interação com o banco de baterias e a operação em conjunto com a rede elétrica. Dessa forma, o subsistema não atua apenas como fonte de geração, mas também como elemento central na análise do comportamento energético da instalação.

---

## 3. Composição do Subsistema

A composição do subsistema fotovoltaico inclui:

- **36 módulos OSDA ODA555-36V-MH**, monocristalinos, de **555 Wp** cada;
- potência total instalada de **19,98 kWp**;
- **4 strings** com **9 módulos em série** por string;
- **2 inversores híbridos trifásicos Deye SUN-12K-SG04LP3**, de **12 kW** cada;
- **2 MPPTs por inversor**;
- estrutura metálica tipo **carport**;
- orientação **Norte–Sul** e inclinação aproximada de **15°**;
- conectores **MC4** e cabos resistentes à radiação UV;
- proteção em corrente contínua e alternada;
- integração com **EPC**, banco de baterias e rede elétrica.

Esses componentes formam o núcleo de geração solar da instalação, permitindo conversão eficiente da energia, monitoramento operacional e integração com os demais subsistemas energéticos.

---

## 4. Parâmetros Técnicos dos Módulos

O desempenho dos módulos é caracterizado por parâmetros elétricos fundamentais para o projeto e para a análise operacional do sistema, dentre os quais se destacam:

<p align="center"><b>Tabela 2 – Dados técnicos do módulo fotovoltaico OSDA ODA555-36V-MH</b></p>

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ width: '600px' }}>

| Parâmetro | Valor |
|:--|:--:|
| Potência Nominal (Pmax) | 555 Wp |
| Tensão de Potência Máxima (Vmp) | 41,48 V |
| Corrente de Potência Máxima (Imp) | 13,38 A |
| Tensão de Circuito Aberto (Voc) | 49,56 V |
| Corrente de Curto-Circuito (Isc) | 14,20 A |
| Eficiência do módulo | 21,28 % |
| Dimensões | 2278 × 1134 × 35 mm |
| Peso | 27,5 kg |
| Tipo da célula | Monocristalina 182 mm (half-cell) |
| Número de células | 144 (6 × 24) |
| Temperatura de operação | −40 °C a +85 °C |
| Coeficiente térmico da potência (Pmax) | −0,35 % / °C |
| Coeficiente térmico da corrente (Isc) | +0,05 % / °C |
| Coeficiente térmico da tensão (Voc) | −0,275 % / °C |

  </div>
</div>

<p align="center"><small>Fonte: Datasheet OSDA (adaptado), 2025.</small></p>

Esses parâmetros influenciam diretamente o dimensionamento das *strings*, a faixa de operação dos MPPTs e a potência efetivamente disponibilizada ao sistema em diferentes condições de irradiância e temperatura.

---

## 5. Configuração Elétrica

A configuração elétrica do sistema fotovoltaico foi estruturada a partir de **36 módulos OSDA ODA555-36V-MH**, distribuídos em **4 strings de 9 módulos em série**. Esse arranjo resulta em uma potência total instalada de **19,98 kWp**, organizada de modo a aproveitar adequadamente as entradas dos inversores híbridos e seus rastreadores MPPT.

Cada string apresenta, em condições nominais, valores aproximados de:

- **tensão no ponto de máxima potência:** 9 × 41,48 V = **373,32 V**;
- **tensão de circuito aberto:** 9 × 49,56 V = **446,04 V**;
- **corrente no ponto de máxima potência:** **13,38 A**;
- **corrente de curto-circuito:** **14,20 A**.

As quatro strings são conectadas a **2 inversores híbridos trifásicos Deye SUN-12K-SG04LP3**, cada um dotado de **2 MPPTs independentes**, de forma que cada inversor recebe duas strings. Essa divisão permite melhor controle do ponto de máxima potência, maior flexibilidade operacional e melhor resposta diante de possíveis diferenças de irradiância, temperatura ou sombreamento entre grupos de módulos.

Sob o ponto de vista operacional, essa configuração apresenta vantagens relevantes, tais como:

- compatibilidade entre a tensão das strings e a faixa de operação dos inversores;
- aproveitamento equilibrado das entradas MPPT disponíveis;
- redução das perdas causadas por sombreamento parcial;
- facilidade de supervisão individual por string;
- maior praticidade em inspeções e manutenções.

Após a conversão da energia em corrente alternada, os inversores passam a integrar o subsistema de geração ao restante da instalação, permitindo interação com o banco de baterias, com as cargas e com a rede da concessionária. Dessa forma, a configuração elétrica adotada atende não apenas aos requisitos de geração, mas também à proposta experimental e didática da microrrede.

## 6. Arranjo Físico dos Módulos

A disposição física dos módulos foi definida de forma a garantir coerência entre a organização construtiva do gerador e a configuração elétrica adotada no sistema. Para isso, os módulos foram instalados sobre estrutura metálica do tipo *carport*, solução que, além de fornecer suporte mecânico adequado, integra a geração fotovoltaica ao espaço útil da microrrede e facilita o acesso para inspeção, limpeza e manutenção.

O conjunto é composto por **36 módulos fotovoltaicos**, distribuídos de maneira ordenada sobre a estrutura e identificados individualmente. Essa identificação permite localizar cada unidade no arranjo com maior precisão, facilitando o rastreamento de falhas, o acompanhamento de desempenho e a associação entre a posição física do módulo e sua respectiva conexão elétrica.

A Figura 2 apresenta o diagrama de alocação dos módulos no arranjo instalado. Observa-se que as unidades foram agrupadas em **quatro strings**, representadas por cores distintas, o que torna mais clara a divisão do gerador em blocos funcionais. Cada grupo colorido corresponde a um circuito em corrente contínua associado a um dos canais MPPT dos inversores híbridos.

<p align="center"><i>Figura 3 – Diagrama de alocação e arranjo físico dos módulos fotovoltaicos da instalação.</i></p>

<p align="center">
  <img src="/microrrede-uftm/img/fotovoltaico-arranjo.png" width="700"/>
</p>

<p align="center"><small>Fonte: elaboração própria, 2025.</small></p>

Pela figura, nota-se que a identificação dos módulos segue uma lógica que relaciona **inversor, string e posição do módulo** dentro do grupo. Essa convenção facilita a leitura do arranjo e permite compreender, de forma imediata, como os 36 módulos foram distribuídos entre os dois inversores híbridos. Também se observa que o sistema foi organizado para operar com **quatro strings de 9 módulos em série**, totalizando os **19,98 kWp** instalados em corrente contínua.

Outro aspecto importante evidenciado na figura é a associação entre as strings e os **MPPTs** dos inversores. Como cada inversor possui dois rastreadores independentes, a divisão por grupos permite separar eletricamente os arranjos e, com isso, melhorar o controle do ponto de máxima potência. Essa organização contribui para maior flexibilidade operacional e facilita a análise de eventuais diferenças de desempenho entre os grupos de módulos.

Do ponto de vista prático, o diagrama do arranjo físico também funciona como ferramenta de apoio à operação e à manutenção. Em caso de falha, queda de rendimento ou necessidade de inspeção, a identificação visual dos módulos e de suas respectivas strings permite localizar rapidamente a região afetada. Assim, a representação do arranjo não se limita à distribuição espacial dos módulos, mas também serve como referência para diagnóstico, monitoramento e interpretação do comportamento elétrico do sistema.

Dessa forma, o arranjo físico adotado atende simultaneamente aos requisitos construtivos, operacionais e didáticos da instalação, reforçando a proposta da microrrede como plataforma experimental para estudos em geração distribuída, supervisão e integração energética.

---

## 7. Integração com os Inversores

A integração entre o arranjo fotovoltaico e a arquitetura elétrica da microrrede é realizada por meio de inversores híbridos trifásicos, responsáveis pela conversão da energia gerada em corrente contínua para corrente alternada e pela coordenação do fluxo energético entre os diferentes subsistemas. No caso em estudo, foram adotados dois inversores Deye SUN-12K-SG04LP3, cada um operando com duas entradas MPPT independentes, o que permite o processamento das quatro strings do gerador fotovoltaico de forma distribuída.

Esses equipamentos exercem função estratégica na operação do sistema, pois estabelecem a interface entre a geração solar, o banco de baterias, as cargas locais e a rede da concessionária. Em termos práticos, isso significa que os inversores não apenas convertem energia, mas também determinam como essa energia será disponibilizada, armazenada ou compartilhada com os demais elementos da instalação.

Entre suas principais atribuições, destacam-se:

- rastreamento do ponto de máxima potência das strings conectadas;
- conversão eletrônica CC/CA;
- sincronização com a rede elétrica;
- gerenciamento do fluxo de potência entre geração, armazenamento e consumo;
- suporte aos modos de operação conectada, isolada e híbrida;
- envio de variáveis elétricas e operacionais ao sistema supervisório.

A presença de entradas MPPT independentes contribui para maior flexibilidade operacional e melhor aproveitamento energético, sobretudo em situações de diferenças térmicas, variações de irradiância ou possíveis assimetrias entre grupos de módulos. Além disso, a integração com o sistema de armazenamento amplia a capacidade de gerenciamento energético da microrrede, permitindo estratégias mais avançadas de operação e controle.

Do ponto de vista experimental, a atuação dos inversores é especialmente relevante, pois eles concentram parte significativa das funções de conversão, monitoramento e coordenação energética da instalação. Por essa razão, constituem um dos principais elementos de análise para estudos relacionados à eficiência, estabilidade, qualidade de energia e desempenho operacional da microrrede.

## 8. Vista Geral da Integração do Subsistema

<p align="center"><i>Figura 4 – Vista geral da integração do sistema fotovoltaico com os demais elementos da instalação.</i></p>

<p align="center">
  <img src="/microrrede-uftm/img/fotovoltaico-geral.JPEG" width="900"/>
</p>

<p align="center"><small>Fonte: elaboração própria, 2025.</small></p>

A Figura 3 apresenta a instalação real do subsistema fotovoltaico implementado no campus Univerdecidade da UFTM, evidenciando sua integração física ao ambiente e sua aplicação prática dentro da microrrede experimental.

Observa-se que os módulos fotovoltaicos estão dispostos sobre uma estrutura metálica do tipo *carport*, a qual desempenha dupla função: suporte mecânico para o arranjo solar e cobertura para os veículos estacionados. Essa solução construtiva otimiza o uso do espaço disponível, agregando valor funcional à instalação ao integrar geração de energia e infraestrutura urbana.

O arranjo é composto por 36 módulos fotovoltaicos distribuídos de forma uniforme ao longo da estrutura, garantindo adequada exposição à radiação solar e favorecendo o desempenho energético do sistema. A inclinação e o posicionamento dos módulos foram definidos de modo a maximizar a captação de energia ao longo do dia, considerando as condições locais de irradiância.

Do ponto de vista de integração, a imagem evidencia que o sistema fotovoltaico está diretamente inserido no ambiente de consumo, caracterizando uma geração distribuída próxima às cargas. Essa proximidade contribui para a redução de perdas elétricas e possibilita maior eficiência no aproveitamento da energia gerada.

Embora os elementos elétricos não estejam explicitamente visíveis na imagem, a estrutura apresentada corresponde ao ponto inicial do fluxo energético do sistema, a partir do qual a energia gerada é conduzida aos inversores híbridos, posteriormente distribuída às cargas e integrada ao restante da microrrede.

Assim, a Figura 3 não apenas ilustra a instalação física do subsistema fotovoltaico, mas também evidencia sua função como elemento ativo na infraestrutura energética do campus, contribuindo para estudos experimentais em geração distribuída, eficiência energética e integração de sistemas.

## 9. Modos de Operação Associados

O subsistema fotovoltaico participa diretamente da dinâmica operacional da microrrede, tendo seu comportamento condicionado pela disponibilidade de irradiância solar, pela demanda das cargas, pelo estado de carga do banco de baterias e pela condição de conexão com a rede elétrica. Dessa forma, sua atuação não ocorre de maneira isolada, mas integrada aos demais elementos do sistema, especialmente aos inversores híbridos e ao sistema de armazenamento.

Essa característica permite que a geração solar seja aproveitada em diferentes cenários de operação, conferindo maior flexibilidade ao sistema e ampliando seu potencial para estudos de controle, gerenciamento energético e avaliação de desempenho.

### 9.1 Operação conectada à rede

Na operação conectada à rede, a energia gerada pelo arranjo fotovoltaico pode ser utilizada diretamente para atendimento das cargas locais, reduzindo a dependência da alimentação externa. Nessa condição, os inversores operam sincronizados com a rede elétrica, permitindo que a geração seja integrada ao sistema em corrente alternada de forma coordenada e segura.

Quando a potência gerada é inferior à demanda, a rede complementa o suprimento das cargas. Por outro lado, em situações de maior disponibilidade solar e menor consumo instantâneo, a energia excedente pode ser direcionada conforme a estratégia de gerenciamento adotada na microrrede. Esse modo de operação é especialmente relevante para avaliação do desempenho do sistema em regime normal de funcionamento, com presença simultânea de geração distribuída e alimentação da concessionária.

### 9.2 Operação com suporte do armazenamento

Quando associado ao banco de baterias, o subsistema fotovoltaico passa a atuar de forma mais ativa no gerenciamento energético da instalação. Nessa condição, parte da energia gerada pode ser destinada ao carregamento das baterias, especialmente em períodos de excedente de geração, permitindo armazenar energia para uso posterior.

Esse modo amplia a flexibilidade operacional da microrrede, pois possibilita estratégias de priorização entre geração, armazenamento e consumo. Em termos práticos, a energia solar pode ser utilizada simultaneamente para atendimento das cargas e recarga do sistema de armazenamento, contribuindo para maior aproveitamento energético e melhor utilização dos recursos disponíveis. Além disso, essa configuração favorece estudos relacionados a despacho de energia, arbitragem temporal e redução da dependência da rede.

### 9.3 Operação em modo isolado

No modo isolado, a geração fotovoltaica atua em conjunto com o banco de baterias para suprimento das cargas locais sem dependência direta da rede externa. Nessa condição, os inversores híbridos assumem papel fundamental na manutenção do fornecimento, realizando o condicionamento da energia gerada e coordenando sua interação com o sistema de armazenamento.

A operação isolada é particularmente importante do ponto de vista experimental, pois permite avaliar a capacidade do sistema em sustentar cargas a partir de fontes locais de energia. Também possibilita análises relacionadas à estabilidade, continuidade de fornecimento e resposta da microrrede diante de variações de geração e demanda. Nesse contexto, o desempenho do subsistema fotovoltaico torna-se diretamente associado à disponibilidade solar e à capacidade de suporte energético das baterias.

De modo geral, os diferentes modos de operação associados ao subsistema fotovoltaico demonstram sua versatilidade dentro da microrrede, evidenciando que a geração solar não apenas contribui para o suprimento energético da instalação, mas também participa ativamente das estratégias de controle e gerenciamento do sistema como um todo.

## 10. Aspectos Técnicos Relevantes

A análise do subsistema fotovoltaico evidencia um conjunto de aspectos técnicos que reforçam sua importância dentro da microrrede experimental. Entre eles, destaca-se inicialmente a utilização da geração solar como fonte renovável de energia, o que insere a instalação em um contexto atual de transição energética e de expansão da geração distribuída.

A configuração adotada, baseada em módulos organizados em *strings* e conectados a inversores híbridos com múltiplos MPPTs, proporciona elevada flexibilidade operacional e melhor aproveitamento da energia gerada. Essa estrutura permite não apenas o condicionamento eficiente da energia produzida, mas também o acompanhamento individualizado do desempenho do arranjo, favorecendo estudos técnicos mais detalhados.

Outro ponto relevante é a integração funcional entre o gerador fotovoltaico, o sistema de armazenamento, as cargas e a rede elétrica. Essa interação torna possível investigar diferentes cenários operacionais, avaliar estratégias de despacho energético e analisar a resposta do sistema diante de variações de irradiância, demanda e disponibilidade do banco de baterias.

Também se destaca a organização física e a identificação dos módulos, fatores que contribuem para a rastreabilidade do sistema, simplificam procedimentos de manutenção e tornam mais objetiva a correlação entre layout construtivo e comportamento elétrico. Em um ambiente experimental, essa característica é especialmente importante, pois amplia a capacidade de diagnóstico e interpretação dos resultados obtidos.

Assim, os aspectos técnicos do subsistema fotovoltaico vão além de sua função de geração de energia, configurando-o como um elemento central para estudos em desempenho energético, supervisão, qualidade de energia, controle e integração de recursos energéticos distribuídos.
