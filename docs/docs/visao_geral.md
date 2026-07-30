---
title: Visão geral do Ecoa
description: ASR pessoal para crianças com fala não padrão, treinado de forma descentralizada
sidebar_label: Visão geral
sidebar_position: 1
slug: /
---

# Ecoa

O **Ecoa** é uma plataforma acessível que coleta amostras de voz em aventuras infantis e utiliza esses dados autorizados para fazer o **fine-tuning de um ASR pré-treinado**, adaptando o reconhecimento à fala da criança.

O resultado esperado é simples: permitir que a criança comunique pedidos e escolhas aos pais e utilize jogos, assistentes e ferramentas educacionais com menos falhas e repetições.

> **A voz é da criança. O aprendizado é da máquina.**

## Demonstração

O frontend navegável do MVP está disponível em:

**[Experimentar o Ecoa](https://ecoa-zeta.vercel.app/)**

:::info Escopo da demonstração
A captura e a reprodução do microfone funcionam no navegador. Reconhecimento do ASR, fine-tuning e integração Psyche/Solana ainda são simulados.
:::

## Visão do projeto

Tecnologias de voz aprendem principalmente com falas consideradas padrão. Uma criança pode ser compreendida pela família e continuar ouvindo do tablet:

> “Não entendi. Tente novamente.”

O problema não está na criança. Está em um modelo que não foi treinado para compreender sua forma de falar.

O Ecoa conecta duas necessidades:

1. coletar voz de maneira curta, contextualizada e não punitiva;
2. transformar essas amostras em um modelo de reconhecimento pessoal e mensurável.

O **ganho principal** é a comunicação mais assertiva com a família e com ferramentas tecnológicas. O **diferencial técnico** é realizar o fine-tuning por treinamento descentralizado, usando a Psyche Network e a Solana.

## Dimensão no Brasil

O Censo 2022 identificou **14,4 milhões de pessoas com deficiência** entre a população de dois anos ou mais. Aproximadamente **2,7 milhões** estavam em uma categoria de dificuldade permanente que inclui comunicar-se, realizar cuidados pessoais, trabalhar ou estudar por limitações nas funções mentais.

O mesmo Censo identificou **2,4 milhões de pessoas diagnosticadas com autismo**. Entre crianças de 5 a 9 anos, a proporção chegou a **2,6%**.

Esses números não representam diretamente a quantidade de pessoas com fala não padrão. Eles dimensionam uma população que pode enfrentar barreiras de comunicação e acessibilidade.

A Lei nº 15.249/2025 reconheceu pessoas com necessidades complexas de comunicação e ampliou a previsão de sistemas de Comunicação Aumentativa e Alternativa em serviços públicos.

## CAA e ASR

A **Comunicação Aumentativa e Alternativa (CAA)** reúne recursos e estratégias que ampliam ou complementam a fala, como gestos, imagens, pictogramas, botões e aplicativos.

O **Reconhecimento Automático de Fala (ASR)** interpreta áudio e o transforma em texto, intenção ou comando. Ele não substitui a CAA; funciona como uma camada complementar para tornar interfaces baseadas em voz mais acessíveis.

Modelos como Whisper e wav2vec 2.0 tornam a adaptação tecnicamente possível, mas não garantem o mesmo desempenho para todas as vozes.

## Como a solução funciona

```text
aventura de voz
  → gravação autorizada
  → confirmação da intenção pelo responsável
  → validação e versionamento do dataset pessoal
  → participantes autorizados
  → run permissionada na Psyche, coordenada pela Solana
  → fine-tuning distribuído do ASR pré-treinado
  → avaliação com frases não usadas no treinamento
  → intenção, texto ou comando
  → comunicação com a família e ferramentas tecnológicas
```

O Ecoa **não treina um modelo de voz do zero**. O projeto parte de um ASR existente, cria um dataset pessoal progressivo e mede se o modelo adaptado passou a compreender melhor aquela criança.

Não existe uma quantidade fixa de minutos que garanta personalização. O volume necessário depende da voz, do vocabulário, da diversidade das amostras, da tarefa e do modelo escolhido.

## Experiência da criança

- login infantil com PIN;
- interface mobile-first e responsiva;
- aventuras guiadas pelo mascote Lumi;
- pistas em áudio e escolhas por imagens;
- missões com frases úteis para o cotidiano;
- captura e reprodução da própria voz;
- feedback imediato;
- novas tentativas sem punição;
- estrelas, progresso e conquistas sem comparação entre crianças.

Missões iniciais:

- **A sede da Lumi:** “Quero água”.
- **A mochila da Lumi:** “Quero meu caderno”.

## Área do responsável

- consentimentos por finalidade;
- reprodução das amostras;
- confirmação da intenção comunicativa;
- correção de transcrição quando necessária;
- autorização ou descarte para fine-tuning;
- identificação da versão do dataset;
- comparação entre modelo-base e adaptado;
- controle sobre retenção e usos futuros.

O responsável confirma o que a criança quis comunicar. Ele não avalia se a fala está “certa” ou “errada”.

## Por que blockchain?

Blockchain não é usada como substituta de banco de dados. Seu papel principal é viabilizar e coordenar o **treinamento descentralizado**.

Com a **Psyche Network**, GPUs de participantes autorizados podem contribuir para uma mesma run. Na camada on-chain, a **Solana** coordena o estado, os participantes e as etapas sem entregar todo o controle a uma única empresa.

Essa infraestrutura é usada para fazer o fine-tuning de um ASR existente e produzir um modelo adaptado à fala da criança.

> **Não descentralizamos a voz das crianças. Descentralizamos a capacidade de construir uma inteligência artificial que as compreenda.**

Rastreabilidade, segurança, privacidade e auditabilidade são ganhos decorrentes. Áudios, transcrições, identidades, datasets e modelos pessoais permanecem criptografados fora da blockchain.

:::warning Risco técnico
A implementação de referência da Psyche suporta atualmente modelos causais de linguagem. A adaptação para áudio e ASR é experimental e precisa ser comprovada antes de qualquer oferta comercial de treinamento descentralizado.
:::

## Arquitetura resumida

```text
Aplicativo infantil ─────┐
                        ├── API e motor de atividades
Área do responsável ────┘             │
                                      ├── dados criptografados off-chain
                                      ├── pipeline e modelos ASR
                                      └── Psyche + Solana
                                               │
                                               └── ASR adaptado
                                                      │
                                                      ├── família
                                                      └── ferramentas digitais
```

## Stakeholders

| Grupo | Papel |
| --- | --- |
| **Criança** | beneficiária e usuária principal |
| **Responsável** | controla consentimentos e confirma intenções |
| **Empresa de tecnologia assistiva** | cliente prioritário da API |
| **Ferramenta educacional ou de voz** | cliente de integração e licenciamento |
| **Rede pública** | contratante de implantação e acesso |
| **Fundação ou patrocinador** | financiador de acesso e computação |
| **Universidade ou grupo de pesquisa** | parceiro de validação |
| **Provedor de GPU** | parceiro ou fornecedor de infraestrutura |

## Modelo de negócio

O Ecoa vende software, integração, computação e suporte. **Nunca vende a voz infantil.**

| Oferta | Comprador | Forma de cobrança |
| --- | --- | --- |
| **Piloto técnico** | empresas, universidades e redes públicas | projeto de escopo e prazo fechados |
| **Plataforma e API** | tecnologias assistivas, jogos e ferramentas educacionais | integração mais assinatura e consumo |
| **Fine-tuning gerenciado** | organizações com dados e autorizações válidas | ciclo de treinamento mais GPU e armazenamento |
| **Acesso patrocinado** | fundações, empresas e redes públicas | quantidade de acessos por período |

Nos primeiros 12 meses, o piloto pago é a porta de entrada. A API e o fine-tuning gerenciado tornam-se ofertas recorrentes somente depois que desempenho, custo e estabilidade forem comprovados.

Consulte o [Modelo financeiro](./solucao/modelo_financeiro.md).

## Posicionamento competitivo

O benchmarking indica quatro grupos:

- **Voiceitt e Project Relate:** reconhecimento personalizado de fala não padrão;
- **Livox, Matraquinha, TD Snap e Proloquo:** comunicação por CAA;
- **Euphonia e Speech Accessibility Project:** pesquisa e dados de fala;
- **Psyche, Flower e Gensyn:** infraestrutura de treinamento distribuído.

A oportunidade do Ecoa está na combinação ainda não identificada na amostra analisada:

- jornada infantil contextualizada;
- confirmação pelo responsável;
- ASR pessoal;
- integração com ferramentas;
- treinamento distribuído permissionado;
- coordenação on-chain.

Consulte o [Benchmarking completo](./solucao/banchmarking.md).

## Tecnologias e maturidade

| Camada | Tecnologia | Estado |
| --- | --- | --- |
| **Frontend** | React 19 e Vite 7 | protótipo navegável |
| **Captura de voz** | MediaRecorder do navegador | funcional |
| **ASR-base** | modelo pré-treinado a selecionar | candidato |
| **Fine-tuning** | pipeline de adaptação pessoal | a implementar |
| **Treinamento distribuído** | Psyche Network | experimental |
| **Coordenação on-chain** | Solana | simulada no protótipo |
| **Dados privados** | armazenamento criptografado off-chain | arquitetura definida |
| **Documentação** | Docusaurus 3 | funcional |

## Estado atual

| Componente | Estado |
| --- | --- |
| aplicativo navegável | funcional |
| captura do microfone | real |
| reprodução do áudio | real |
| consentimentos e confirmação de intenção | interativos no protótipo |
| fallback quando o microfone é bloqueado | simulado |
| reconhecimento do ASR | simulado |
| dataset versionado | a implementar |
| fine-tuning pessoal | a implementar |
| run Psyche/Solana para áudio | experimental e a implementar |
| API para ferramentas tecnológicas | planejada |

O frontend atual ainda contém telas legadas de demonstração profissional. Elas não representam as personas ou o público-alvo atual e devem ser removidas ou refatoradas antes da versão alpha.

## MVP e próximos passos

O MVP precisa provar:

1. coleta real e autorizada;
2. confirmação da intenção pelo responsável;
3. dataset pessoal versionado;
4. fine-tuning de um ASR pré-treinado;
5. avaliação em frases inéditas;
6. run permissionada ou integração experimental claramente delimitada;
7. saída utilizada pela família ou por uma ferramenta tecnológica.

O plano de 12 meses está dividido em:

| Período | Marco |
| --- | --- |
| **Meses 1–3** | requisitos, dados seguros e coleta funcional |
| **Meses 4–6** | fine-tuning mensurável e run permissionada |
| **Meses 7–9** | alpha integrada e piloto controlado |
| **Meses 10–12** | productização, beta e publicação |

Consulte o [Status do projeto](./status_projeto.md) e o [Roadmap de 12 meses](./roadmap.md).

## Limites

O Ecoa:

- não diagnostica condições;
- não classifica a fala como normal ou anormal;
- não substitui formas de CAA já utilizadas;
- não vende gravações;
- não publica dados pessoais na blockchain;
- não trata melhora do ASR como melhora clínica;
- não apresenta Psyche para áudio como tecnologia já validada.

## Fontes principais

- [IBGE — Censo 2022: pessoas com deficiência](https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/43463-censo-2022-brasil-tem-14-4-milhoes-de-pessoas-com-deficiencia)
- [IBGE — Censo 2022: pessoas diagnosticadas com autismo](https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/43464-censo-2022-identifica-2-4-milhoes-de-pessoas-diagnosticadas-com-autismo-no-brasil)
- [Lei nº 15.249/2025 — necessidades complexas de comunicação](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15249.htm)
- [Whisper — reconhecimento em larga escala](https://arxiv.org/abs/2212.04356)
- [wav2vec 2.0 — pré-treinamento e ajuste fino](https://arxiv.org/abs/2006.11477)
- [Psyche Network](https://docs.psyche.network/)
- [Psyche — modelos implementados](https://docs.psyche.network/development/models.html)
- [Youth Challenge Blockchain](https://www.youthchallengeblockchain.com/)
