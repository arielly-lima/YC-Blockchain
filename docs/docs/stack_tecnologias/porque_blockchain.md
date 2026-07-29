---
title: Por que blockchain?
description: Justificativa de uso e limites da tecnologia no projeto
sidebar_position: 1
---

# Por que blockchain?

## Diferencial: treinamento descentralizado

O diferencial do projeto não é usar blockchain como substituta de um banco de dados. É utilizar a **Psyche Network** para distribuir o treinamento de inteligência artificial entre GPUs independentes, com as runs descentralizadas coordenadas na **Solana**.

A Psyche permite que diferentes clientes contribuam para o treinamento de um mesmo modelo. Na implementação descentralizada:

- o **Coordinator** mantém na Solana o estado global da run;
- carteiras Solana identificam participantes e autoridades;
- o **Authorizer** controla quem pode entrar em uma run permissionada;
- os clientes executam o processamento em suas GPUs e trocam resultados pela rede peer-to-peer;
- contribuições computacionais podem ser registradas e, opcionalmente, associadas a incentivos.

Por envolver dados de crianças, a arquitetura proposta usa **runs permissionadas**, limitadas a instituições e provedores previamente autorizados.

## Duas camadas on-chain

É importante não confundir o protocolo da Psyche com a governança específica da aplicação:

| Camada | Responsabilidade |
| --- | --- |
| **Psyche/Solana** | coordenar participantes, fases, autorizações e contribuições da run descentralizada |
| **Governança do projeto** | vincular consentimento, hash do dataset, execução, hash do modelo, revogação e vaga patrocinada |

Essa composição cria uma trilha verificável:

```text
consentimento válido
  → dataset autorizado e versionado
  → run permissionada na Psyche/Solana
  → contribuições computacionais
  → modelo ou adaptador avaliado
  → disponibilização controlada
```

## Problema de confiança

Famílias, clínicas, universidades, pesquisadores, financiadores e provedores de computação precisam colaborar. Nenhuma instituição deveria controlar sozinha todo o histórico de autorizações, datasets, treinamentos, contribuições e modelos.

A blockchain oferece um estado compartilhado e verificável entre partes que não precisam confiar em uma única operadora.

## Registros de governança propostos

| Registro | Finalidade |
| --- | --- |
| versão e finalidade do consentimento | demonstrar o uso autorizado |
| identificador pseudonimizado | relacionar eventos sem publicar identidade |
| hash e versão do dataset | comprovar integridade e proveniência |
| referência da run Psyche/Solana | vincular participantes e execução |
| hash do modelo | vincular resultado ao treinamento |
| revogação | bloquear novos usos e treinamentos futuros |
| vagas patrocinadas | auditar financiamento social |

## O que nunca registrar

:::danger Dados fora da blockchain
Áudios, transcrições, nomes, documentos, contatos, idade exata, diagnósticos, prontuários, relatórios profissionais e adaptadores pessoais devem permanecer criptografados fora da rede.
:::

## Perguntas que a camada responde

- Quem autorizou?
- Para qual finalidade?
- Qual instituição utilizou os dados?
- Em qual versão do dataset?
- Qual run permissionada foi executada?
- Quais provedores contribuíram com computação?
- Qual modelo foi produzido?
- O consentimento continua ativo?
- Quantas vagas sociais foram financiadas?

## Por que um banco convencional não basta?

Um banco convencional continua necessário para a operação, permissões de aplicação e dados privados. A blockchain é complementar: coordena a run descentralizada e fornece provas compartilhadas quando diferentes organizações colaboram sem uma autoridade única.

## Quando não usar

A blockchain não deve ser usada:

- para armazenar dados pessoais;
- para reconhecimento de fala em tempo real;
- quando apenas uma organização participa do processo;
- para substituir contratos, políticas de privacidade ou controles de acesso;
- quando o mesmo resultado pode ser obtido com menor risco por infraestrutura convencional.

## Critério de sucesso

O uso é justificado se:

- permitir uma run distribuída entre provedores independentes;
- tornar participantes e contribuições verificáveis;
- vincular autorização, dataset, execução e modelo;
- facilitar auditorias e colaboração institucional;
- preservar voz e dados infantis fora da blockchain.

## Referências técnicas

- [Psyche — visão geral](https://docs.psyche.network/)
- [Psyche — arquitetura descentralizada](https://docs.psyche.network/explain/index.html)
- [Psyche — execução on-chain na Solana](https://docs.psyche.network/development/running-onchain.html)
- [Psyche — autenticação e runs permissionadas](https://docs.psyche.network/enduser/authentication.html)
- [Psyche — runs](https://psyche.network/runs)
