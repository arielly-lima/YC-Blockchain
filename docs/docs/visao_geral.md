---
title: Visão geral do projeto
description: Plataforma acessível e gamificada de apoio à comunicação para crianças com fala não padrão
sidebar_label: Visão geral
sidebar_position: 1
slug: /
---

# Visão geral do projeto

O **YC Blockchain** é uma plataforma acessível e gamificada de apoio à comunicação para crianças com fala não padrão. Em histórias, jogos e missões baseadas em voz, a criança pratica sua comunicação e, mediante consentimento, contribui para um banco de voz pessoal capaz de adaptar o reconhecimento de fala à sua forma de se expressar.

> **A prática gera dados; os dados melhoram o modelo; o modelo reduz a frustração; e uma experiência menos frustrante estimula mais prática.**

## Introdução

Tecnologias de voz são treinadas principalmente com bases de fala considerada padrão. Crianças com padrões acústicos pouco representados podem ser compreendidas por familiares e profissionais, mas continuam ouvindo de assistentes, jogos e ferramentas educacionais:

> “Não entendi. Tente novamente.”

A proposta combina **comunicação acessível, coleta contextualizada, personalização de ASR, supervisão profissional, treinamento distribuído e governança verificável**. A plataforma não substitui o fonoaudiólogo e não transforma toda interação em avaliação clínica.

## Problema

O projeto enfrenta dois obstáculos conectados:

| Obstáculo | Consequência |
| --- | --- |
| Bases de voz pouco representativas | Sistemas de reconhecimento falham com diferentes formas de falar |
| Coleta repetitiva de frases | Baixa adesão e pouca diversidade fonética |
| Necessidade de 30 a 60 minutos de áudio por pessoa | Personalização lenta e difícil |
| Acesso irregular à fonoaudiologia | Falta de continuidade entre atendimentos |
| Falhas repetidas das interfaces de voz | Frustração e menor autonomia digital |

A lacuna central está entre **praticar a comunicação** e **gerar dados suficientes, seguros e autorizados** para que a tecnologia compreenda melhor cada criança.

Consulte [Problema central](./problema/problema.md), [Público-alvo](./problema/publico_alvo.md) e [Jornada do usuário](./problema/jornada_usuario.md).

## Proposta de valor

| Público | Valor entregue |
| --- | --- |
| **Crianças** | atividades curtas, acolhedoras e adaptadas aos seus interesses |
| **Famílias e cuidadores** | continuidade da prática e controle sobre consentimentos |
| **Fonoaudiólogos** | definição de objetivos, revisão de amostras e acompanhamento |
| **Instituições** | supervisão em escala e infraestrutura de colaboração |
| **Pesquisadores** | datasets autorizados, versionados e auditáveis |
| **Financiadores** | rastreabilidade de vagas sociais e resultados agregados |

Os principais benefícios esperados são:

- maior autonomia comunicativa e digital;
- menor frustração com tecnologias de voz;
- prática acessível entre sessões;
- bases de voz mais representativas;
- ampliação do alcance de profissionais;
- governança transparente sobre dados e modelos.

Veja a [Proposta de valor](./solucao/proposta_valor.md).

## Como funciona

```text
missão de comunicação
  → gravação autorizada
  → validação da qualidade e da intenção
  → dataset versionado
  → treinamento do modelo ou adaptador
  → avaliação técnica
  → experiência de voz mais inclusiva
```

A criança interage com uma experiência simples. A complexidade de processamento de áudio, treinamento e blockchain permanece na infraestrutura, sem exigir conhecimento técnico da família.

## Três níveis de apoio

| Nível | Para quem | O que oferece |
| --- | --- | --- |
| **Voz Livre** | crianças sem acompanhamento regular | atividades gerais de comunicação, sem diagnóstico |
| **Voz Assistida** | grupos acompanhados por instituições | supervisão profissional em escala e revisão priorizada |
| **Voz Personalizada** | crianças com acompanhamento individual | objetivos, atividades e feedbacks definidos pelo fonoaudiólogo |

Os níveis formam uma continuidade. Uma criança pode começar no acesso gratuito e, com autorização da família, aproveitar seu histórico quando iniciar acompanhamento profissional.

## Público-alvo

A pessoa beneficiária principal é a **criança com fala não padrão**, incluindo crianças com TEA, Síndrome de Down, paralisia cerebral e outras condições que produzam padrões de fala pouco representados nos sistemas atuais.

O ecossistema também envolve:

- famílias e cuidadores;
- fonoaudiólogos;
- clínicas e clínicas-escola;
- universidades e hospitais;
- escolas e organizações sociais;
- serviços públicos de saúde e educação;
- empresas de tecnologia assistiva;
- financiadores e provedores de infraestrutura.

Veja [Público-alvo](./problema/publico_alvo.md) e [Proto-personas](./problema/personas.md).

## Tecnologias

| Tecnologia | Aplicação |
| --- | --- |
| **ASR** | compreensão de fala e intenção comunicativa |
| **Modelos pré-treinados** | base para adaptação coletiva e pessoal |
| **Psyche Network** | ciclos experimentais de treinamento distribuído |
| **Blockchain** | consentimento, auditoria, versões e financiamento social |
| **Armazenamento criptografado off-chain** | áudios, transcrições e dados pessoais |
| **Docusaurus** | documentação técnica e de produto |

A blockchain **não armazena áudio, diagnóstico ou prontuário**. Ela registra somente referências, hashes, autorizações e eventos necessários à governança entre instituições.

## Diferenciais

- coleta de voz integrada a histórias e missões;
- separação explícita entre compreender e avaliar;
- personalização progressiva do reconhecimento de fala;
- consentimento granular e revogável;
- dados sensíveis mantidos fora da blockchain;
- treinamento distribuído entre instituições autorizadas;
- acesso gratuito apoiado por subsídio cruzado;
- gamificação não punitiva e sem comparação entre crianças.

## MVP

O MVP previsto para o hackathon contém quatro módulos:

1. **Aplicativo infantil:** história curta com missões de voz e feedback visual.
2. **Painel profissional:** configuração de atividades e correção de transcrições.
3. **Personalização do ASR:** comparação entre modelo-base e adaptado.
4. **Registro blockchain:** consentimento, dataset, treinamento, modelo e vaga social.

O protótipo deve usar dados simulados, bases públicas compatíveis ou gravações de adultos voluntários. Dados reais de crianças exigem governança, avaliação ética e segurança compatíveis com sua sensibilidade.

## Limites da solução

O projeto:

- não substitui avaliação ou acompanhamento fonoaudiológico;
- não diagnostica condições;
- não classifica uma fala como normal ou anormal;
- não vende áudios brutos;
- não publica dados pessoais na blockchain;
- não trata melhoria do ASR como melhoria clínica automática;
- não apresenta a integração entre Psyche e ASR como tecnologia já validada.

## Estado atual

A solução está em **fase de definição e construção do MVP**. As prioridades são validar o problema com famílias e profissionais, demonstrar uma missão de voz ponta a ponta, comparar o reconhecimento antes e depois da adaptação e registrar a rastreabilidade do processo.

Consulte [Status do projeto](./status_projeto.md) e [Roadmap](./roadmap.md).

## Conclusão

O YC Blockchain cria um ciclo no qual a prática de comunicação produz dados úteis e autorizados, esses dados tornam a tecnologia mais inclusiva e a melhoria tecnológica reduz barreiras para novas interações. Blockchain e treinamento distribuído são infraestrutura de confiança; o foco permanece na autonomia, no acesso e no melhor interesse da criança.

## Fontes principais

- Iniciação científica: **Desenvolvimento e Avaliação de Mecanismos de Gamificação para Engajamento na Coleta de Dados de Voz em Interfaces Acessíveis**.
- [Youth Challenge Blockchain](https://www.youthchallengeblockchain.com/)
- [Psyche Network](https://psyche.network/)
- [Documentação da Psyche](https://docs.psyche.network/)
