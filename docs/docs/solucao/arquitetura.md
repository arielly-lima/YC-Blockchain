---
title: Arquitetura da solução
description: Componentes funcionais e fluxo de dados da plataforma
sidebar_position: 2
---

# Arquitetura da solução

## Visão funcional

```text
┌──────────────────┐     ┌───────────────────┐
│ Aplicativo       │     │ Painel            │
│ infantil         │     │ profissional      │
└────────┬─────────┘     └─────────┬─────────┘
         │                         │
         └──────────┬──────────────┘
                    ↓
          ┌───────────────────┐
          │ API e motor de    │
          │ atividades        │
          └─────────┬─────────┘
                    ↓
     ┌──────────────┴──────────────┐
     ↓                             ↓
┌─────────────────┐       ┌──────────────────┐
│ Dados privados  │       │ Governança       │
│ criptografados  │       │ hashes e consent.│
└────────┬────────┘       └────────┬─────────┘
         ↓                         ↓
┌─────────────────┐       ┌──────────────────┐
│ Pipeline ASR    │◄─────►│ Psyche + Solana  │
│ e adaptadores   │       │ run permissionada│
└─────────────────┘       └──────────────────┘
```

## Aplicativo infantil

Responsável por:

- histórias e missões de voz;
- preferências de acessibilidade;
- gravação explícita e sinalizada;
- feedback visual não punitivo;
- sessões curtas e retomáveis;
- progresso individual sem rankings.

## Painel profissional

Permite:

- definir objetivos e atividades;
- selecionar palavras, frases e contextos;
- revisar gravações autorizadas;
- corrigir transcrições;
- acompanhar falhas e engajamento;
- aprovar amostras para treinamento.

## Motor de atividades

A seleção da próxima missão considera:

1. objetivo profissional, quando houver;
2. lacunas fonéticas do dataset;
3. baixa confiança do ASR;
4. interesses da criança;
5. repetição recente;
6. complexidade linguística;
7. fadiga e abandono.

## Pipeline de dados

```text
áudio autorizado
  → verificação de qualidade
  → validação da intenção
  → pseudonimização
  → versão do dataset
  → adaptação local ou run permissionada na Psyche/Solana
  → avaliação WER, CER e intenção
  → publicação controlada do adaptador
```

O sistema parte de um ASR pré-treinado. O modelo-base, a adaptação coletiva e o adaptador pessoal possuem escalas de dados diferentes; nenhum número fixo de minutos é tratado como garantia de personalização.

## Separação de responsabilidades

| Componente | Responsabilidade | Não deve fazer |
| --- | --- | --- |
| CAA | ampliar ou complementar formas de comunicação | depender exclusivamente do reconhecimento de voz |
| ASR de compreensão | transcrever ou identificar intenção | avaliar habilidade clínica |
| Avaliador de atividade | analisar objetivo definido | operar sem supervisão profissional |
| Governança blockchain | vincular autorização, dataset, run e modelo | armazenar áudio ou prontuário |
| Armazenamento privado | guardar dados criptografados | expor dados publicamente |
| Psyche | distribuir o treinamento entre clientes autorizados | processar dados infantis em runs permissionless |
| Solana | coordenar estado, participantes e etapas da run | armazenar áudio ou executar inferência em tempo real |

## Requisitos transversais

- criptografia em trânsito e em repouso;
- controle de acesso por função e instituição;
- logs de auditoria;
- versionamento de datasets e modelos;
- revogação para usos futuros;
- minimização e retenção definida de dados;
- acessibilidade desde o desenho.
