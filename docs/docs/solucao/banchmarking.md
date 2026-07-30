---
title: Benchmarking
description: Comparação de soluções de fala não padrão, CAA e treinamento distribuído
sidebar_position: 5
---

# Benchmarking

## Objetivo e método

Este benchmarking compara o projeto com:

1. soluções diretas de reconhecimento ou reconstrução de fala não padrão;
2. aplicativos de Comunicação Aumentativa e Alternativa;
3. iniciativas de dados e pesquisa;
4. infraestruturas de treinamento distribuído.

A análise foi atualizada em **29 de julho de 2026** e utiliza páginas oficiais, documentação técnica e condições publicamente apresentadas por cada organização. A ausência de uma capacidade nas fontes públicas é registrada como “não identificada”, e não como prova de que ela seja tecnicamente impossível.

## Stakeholders considerados

| Stakeholder | Necessidade principal | Poder de decisão | Papel no modelo |
| --- | --- | --- | --- |
| **Criança com fala não padrão** | ser compreendida sem repetir ou adaptar sua voz ao sistema | influencia adoção pelo uso | beneficiária e usuária principal |
| **Responsável** | compreender a intenção e controlar dados e consentimentos | alto sobre adesão e autorização | usuário da área de controle |
| **Empresa de tecnologia assistiva** | incorporar reconhecimento inclusivo sem construir todo o pipeline | alto sobre compra e integração | cliente prioritário de API |
| **Ferramenta educacional ou de voz** | receber intenção, texto ou comando mais confiável | alto sobre compra e distribuição | cliente de API e licenciamento |
| **Universidade ou grupo de pesquisa** | validar modelos, dados e treinamento colaborativo | alto sobre validação técnica | parceiro técnico ou contratante de pesquisa |
| **Rede pública de educação ou inclusão** | ampliar acesso com governança e previsibilidade de custo | alto sobre escala institucional | cliente de implantação |
| **Fundação ou patrocinador** | financiar acesso com evidências agregadas de impacto | alto sobre financiamento | comprador de acesso patrocinado |
| **Provedor de GPU** | utilizar capacidade computacional com regras claras | médio sobre viabilidade técnica | fornecedor ou parceiro de infraestrutura |
| **Órgãos de proteção de dados e comitês de ética** | proteger o melhor interesse da criança | alto sobre autorização de uso | regulador e condicionante, não cliente |

## Benchmark de produtos e iniciativas

| Solução | Categoria | Entrega principal | Forma de oferta | Evidência de mercado | Lacuna em relação ao projeto |
| --- | --- | --- | --- | --- | --- |
| [Voiceitt](https://voiceitt.com/) | concorrente direto | reconhecimento de fala não padrão em aplicativo web e integrações | teste gratuito, conta, API e integrações comerciais | apresenta API personalizável e base proprietária de fala atípica | as fontes públicas não apresentam jornada infantil gamificada, confirmação do responsável ou treinamento descentralizado |
| [Project Relate](https://sites.research.google/relate/) | concorrente direto em pesquisa | modelo personalizado com transcrição, repetição por voz sintética e digitação por voz | beta gratuito para Android; sem novos cadastros no momento | exige 500 frases para gerar o modelo e demonstra utilidade cotidiana | foi disponibilizado para adultos de língua inglesa em países selecionados; não oferece entrada atual para crianças ou Brasil |
| [Whispp](https://whispp.com/) | solução adjacente | reconstrução de voz em tempo real, preservando identidade e sotaque | aplicativos, SDKs e API comercial | oferece integração em dispositivos, desktop e telefonia | transforma áudio em áudio; não se posiciona como ASR pessoal para intenção, texto ou comando |
| [Livox](https://livox.com.br/pt/) | alternativa brasileira de CAA | pranchas de comunicação com recursos de inteligência artificial | aquisição do aplicativo e soluções associadas | nasceu no Brasil a partir da experiência de uma família com uma criança com paralisia cerebral | amplia comunicação por seleção; não apresenta fine-tuning pessoal de ASR ou treinamento distribuído |
| [Matraquinha](https://www.matraquinha.com.br/) | alternativa brasileira de CAA | cartões, pranchas, rotinas e voz para crianças e adolescentes | versão gratuita e assinaturas mensais | apresenta oferta local objetiva, personalização e foco familiar | não aprende a reconhecer a fala da criança nem oferece API de ASR |
| [TD Snap](https://www.tobiidynavox.com/pages/td-snap) | alternativa de CAA | comunicação por símbolos, texto e saída de voz com múltiplos meios de acesso | aplicativo, licença empresarial e dispositivos dedicados | produto maduro para famílias, organizações e diferentes formas de acesso | não aprende a reconhecer a fala da criança nem descentraliza treinamento |
| [Proloquo](https://www.assistiveware.com/products/proloquo) | alternativa de CAA | vocabulário por símbolos, saída de voz e aplicativo de apoio à família | assinatura mensal ou anual e licenças de vários anos | atende de crianças pequenas a adultos e possui oferta direta clara | não realiza reconhecimento personalizado de fala nem oferece infraestrutura de ASR |
| [Project Euphonia](https://sites.research.google/euphonia/about/) | iniciativa de pesquisa | ferramentas e pesquisa para reconhecimento de fala não padrão | materiais abertos e parcerias de pesquisa | valida a necessidade de bases diversas e modelos personalizados | não é uma plataforma infantil pronta para uso nem uma oferta comercial integrada |
| [Speech Accessibility Project](https://speechaccessibilityproject.beckman.illinois.edu/conduct-research-through-the-project) | infraestrutura de dados | gravações e anotações de fala com condições diversas | acesso por proposta e acordo de uso de dados | informa pacote de 1.500 horas de cerca de 999 participantes | fornece dados de pesquisa, não um modelo pessoal, experiência de coleta ou produto de comunicação |

### Leitura da comparação

- **Voiceitt** valida a oportunidade de vender reconhecimento inclusivo como API.
- **Project Relate** valida a personalização individual, mas também evidencia o atrito de uma coleta inicial com centenas de frases.
- **Whispp** demonstra que SDKs e APIs são caminhos comerciais relevantes para tecnologias de voz acessíveis.
- **Livox e Matraquinha** confirmam demanda brasileira por CAA acessível e ofertas voltadas diretamente às famílias.
- **TD Snap e Proloquo** mostram a importância de experiência acessível, apoio familiar e múltiplas formas de comunicação.
- **Euphonia e Speech Accessibility Project** mostram que dados diversos, protocolos de uso e colaboração acadêmica são ativos essenciais.

## Matriz de capacidades

**Legenda:** ✓ disponível ou explicitamente apresentado; △ capacidade parcial ou adjacente; P planejado no produto; E experimental; — não identificado nas fontes oficiais consultadas.

| Solução | ASR para fala não padrão | Modelo pessoal | Jornada infantil | Confirmação pelo responsável | API ou integração | Treinamento distribuído | Coordenação on-chain |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Projeto** | P | P | P | P | P | E | E |
| **Voiceitt** | ✓ | ✓ | — | — | ✓ | — | — |
| **Project Relate** | ✓ | ✓ | — | — | △ | — | — |
| **Whispp** | △ | △ | — | — | ✓ | — | — |
| **Livox** | — | — | △ | △ | — | — | — |
| **Matraquinha** | — | — | ✓ | △ | — | — | — |
| **TD Snap** | — | — | △ | △ | △ | — | — |
| **Proloquo** | — | — | ✓ | ✓ | — | — | — |
| **Project Euphonia** | ✓ | △ | — | — | △ | — | — |

O projeto ainda não deve ser apresentado como superior em maturidade. Sua diferenciação está na **combinação planejada** de coleta infantil contextualizada, confirmação familiar, fine-tuning de ASR, integração com outras ferramentas e treinamento descentralizado permissionado.

## Benchmark de infraestrutura de treinamento

| Infraestrutura | Como distribui o trabalho | Blockchain | Prontidão para áudio/ASR | Papel na decisão |
| --- | --- | --- | --- | --- |
| [Psyche](https://docs.psyche.network/) | clientes independentes treinam um modelo pela rede peer-to-peer | Coordinator e identidade de participantes podem operar na Solana | a implementação de referência suporta atualmente modelos causais de linguagem, Llama e DeepSeek; ASR exige adaptação | escolha principal por alinhar treinamento descentralizado e coordenação on-chain ao desafio |
| [Flower](https://flower.ai/docs/framework/main/en/tutorial-series-what-is-federated-learning.html) | servidor coordena clientes que treinam localmente e retornam atualizações | não depende de blockchain | framework maduro e flexível; possui exemplo de fine-tuning federado com Whisper para classificação de fala | alternativa técnica e baseline para validar distribuição antes da integração completa com a Psyche |
| [Gensyn](https://www.gensyn.ai/) | rede peer-to-peer para troca de pesos, gradientes e sinais | identidade on-chain e verificação criptográfica | infraestrutura geral; não foi identificada referência oficial específica para ASR | referência de mercado para computação descentralizada e verificação, sem foco no problema infantil |

### Decisão técnica

A **Psyche/Solana** permanece como diferencial da solução, mas a adaptação para áudio é um risco de engenharia, não uma capacidade pronta. O desenvolvimento deve manter:

1. um baseline centralizado reproduzível;
2. uma prova distribuída simples com dados seguros;
3. uma camada de integração que permita comparar execução centralizada, federada e Psyche;
4. métricas equivalentes entre os caminhos;
5. critérios objetivos para continuar, limitar ou substituir a integração.

## Posicionamento competitivo

```text
Livox, Matraquinha, TD Snap e Proloquo
  → comunicação acessível, sem personalização do ASR

Voiceitt e Project Relate
  → ASR personalizado, sem treinamento descentralizado apresentado

Flower, Gensyn e Psyche
  → infraestrutura distribuída, sem jornada infantil de comunicação

projeto
  → coleta contextualizada + ASR pessoal + integração tecnológica
    + treinamento descentralizado permissionado
```

Nas fontes oficiais analisadas, não foi identificada outra solução que reúna simultaneamente:

- foco em crianças com fala não padrão;
- coleta gamificada e progressiva;
- confirmação da intenção pelo responsável;
- fine-tuning de um ASR pré-treinado;
- saída para comunicação familiar e integração tecnológica;
- treinamento distribuído permissionado;
- coordenação on-chain da execução.

Essa conclusão representa a amostra analisada e deve ser atualizada a cada seis meses.

## Implicações para produto e negócio

### O que incorporar

- da Voiceitt: API como produto e integração com plataformas existentes;
- do Project Relate: modelo pessoal e vocabulário relevante para o cotidiano;
- de Livox e Matraquinha: linguagem local, onboarding familiar e oferta freemium;
- do TD Snap e Proloquo: acessibilidade, múltiplas formas de resposta e participação da família;
- do Speech Accessibility Project: acordos de uso, documentação do dataset e critérios de acesso;
- do Flower: baseline federado e separação entre treinamento local e coordenação;
- da Psyche: colaboração entre GPUs independentes e estado verificável da run.

### O que evitar

- exigir um grande bloco inicial de gravações antes de entregar valor;
- depender exclusivamente da voz quando a criança já utiliza outras formas de CAA;
- apresentar blockchain apenas como armazenamento de hashes;
- prometer ASR descentralizado antes de provar o pipeline de áudio;
- comercializar dados ou condicionar acesso à cessão ampla da voz;
- lançar uma API sem métricas de custo, latência, qualidade e suporte.

## Riscos competitivos e resposta

| Risco | Resposta proposta |
| --- | --- |
| empresas globais possuem mais dados e capacidade de IA | especializar em português brasileiro, jornada infantil e integração institucional |
| aplicativos brasileiros de CAA já possuem distribuição familiar | oferecer integração complementar de ASR em vez de competir apenas por interface |
| soluções de CAA já possuem confiança e distribuição | posicionar o ASR como complemento integrável, não substituto |
| coleta de voz gera abandono | missões curtas, valor desde o primeiro uso e progresso sem punição |
| personalização pode funcionar apenas nas frases treinadas | separar treino e teste, usar frases inéditas e medir acerto de intenção |
| Psyche ainda não suporta ASR de referência | manter baseline centralizado, experimentar em etapas e publicar limites |
| ciclo de venda institucional é longo | começar com piloto pago, escopo fechado e critério de conversão |

## Critérios de acompanhamento

O benchmarking deve ser revisado semestralmente com:

- disponibilidade geográfica e idiomas;
- mudanças de preço e modelo comercial;
- novos SDKs ou APIs;
- evidências de desempenho para fala não padrão;
- requisitos de personalização;
- integrações com ferramentas digitais;
- evolução de Psyche, Flower e outras infraestruturas;
- novos concorrentes brasileiros.

## Fontes oficiais

- [Voiceitt — Inclusive Voice AI](https://voiceitt.com/)
- [Google Research — Project Relate](https://sites.research.google/relate/)
- [Project Relate — ajuda e disponibilidade](https://sites.research.google/relate/help/)
- [Google Research — Project Euphonia](https://sites.research.google/euphonia/about/)
- [Whispp — produtos e tecnologia](https://whispp.com/)
- [Livox — comunicação alternativa com inteligência artificial](https://livox.com.br/pt/)
- [Matraquinha — comunicação alternativa](https://www.matraquinha.com.br/)
- [Tobii Dynavox — TD Snap](https://www.tobiidynavox.com/pages/td-snap)
- [AssistiveWare — Proloquo](https://www.assistiveware.com/products/proloquo)
- [Speech Accessibility Project — acesso para pesquisa](https://speechaccessibilityproject.beckman.illinois.edu/conduct-research-through-the-project)
- [Psyche — documentação](https://docs.psyche.network/)
- [Psyche — implementação de modelos](https://docs.psyche.network/development/models.html)
- [Flower — aprendizado federado](https://flower.ai/docs/framework/main/en/tutorial-series-what-is-federated-learning.html)
- [Flower — exemplo de fine-tuning federado com Whisper](https://flower.ai/docs/examples/whisper-federated-finetuning.html)
- [Gensyn — infraestrutura descentralizada](https://www.gensyn.ai/)
