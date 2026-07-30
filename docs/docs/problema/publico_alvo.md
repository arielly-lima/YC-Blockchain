---
title: Público-alvo
description: Crianças, responsáveis e parceiros de infraestrutura
sidebar_position: 2
---

# Público-alvo

## Beneficiário principal

A solução é orientada a **crianças com fala não padrão** que enfrentam barreiras em tecnologias baseadas em voz. O foco não é o diagnóstico, mas a experiência concreta de não ser compreendida por sistemas digitais.

São especialmente relevantes:

- crianças que utilizam recursos de CAA e podem se beneficiar de uma interação de voz complementar;
- crianças cujas formas de falar são pouco representadas em datasets;
- crianças que são compreendidas pelos pais, mas não por assistentes, jogos e aplicativos;
- famílias que desejam apoiar pedidos, escolhas e interações cotidianas;
- crianças que querem usar ferramentas tecnológicas com mais autonomia.

## Usuários principais

| Público | Necessidade | Papel na solução |
| --- | --- | --- |
| **Criança** | ser compreendida pelos pais e por tecnologias | realiza missões, grava frases e utiliza o ASR adaptado |
| **Responsável** | compreender a intenção e controlar o uso dos dados | administra consentimentos, confirma intenções e autoriza amostras |

## Parceiros da infraestrutura

Parceiros não são personas da experiência infantil. Eles viabilizam o treinamento descentralizado:

| Parceiro | Contribuição |
| --- | --- |
| **Universidades e grupos de pesquisa** | pesquisa em ASR, avaliação e capacidade computacional |
| **Empresas de tecnologia assistiva** | integração do ASR adaptado em produtos e APIs |
| **Provedores de GPU** | participação autorizada nas runs da Psyche |
| **Financiadores** | apoio ao acesso, à computação e à validação |

## Parceiros potenciais

- universidades;
- grupos de pesquisa em fala e acessibilidade;
- empresas de tecnologia assistiva;
- desenvolvedores de jogos, assistentes e ferramentas educacionais;
- provedores autorizados de computação;
- organizações sociais;
- escolas e projetos de inclusão digital;
- fundações e patrocinadores.

## Critérios de inclusão no MVP

O MVP coleta gravações autorizadas, associa cada amostra à intenção confirmada pelo responsável e usa esses dados para fazer fine-tuning de um ASR pré-treinado. O protótipo do hackathon deve demonstrar o fluxo com dados seguros; testes com voz infantil real dependem de consentimento, proteção adequada e avaliação ética.

:::info Princípio de desenho
O sistema é adaptado à criança; a criança não precisa adaptar sua forma de falar para satisfazer o sistema. A voz é uma possibilidade de interação, não a única.
:::
