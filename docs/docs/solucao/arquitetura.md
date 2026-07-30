---
title: Arquitetura da solução
description: Componentes funcionais e fluxo de dados da plataforma
sidebar_position: 2
---

# Arquitetura da solução

## Visão funcional

```text
┌──────────────────┐     ┌───────────────────┐
│ Aplicativo       │     │ Área do           │
│ infantil         │     │ responsável       │
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

## Área do responsável

Permite:

- gerenciar consentimentos por finalidade;
- reproduzir gravações;
- confirmar o que a criança quis dizer;
- corrigir o rótulo da intenção;
- autorizar ou descartar amostras para fine-tuning;
- acompanhar a comparação entre ASR-base e adaptado.

## Motor de atividades

A seleção da próxima missão considera:

1. lacunas fonéticas do dataset;
2. baixa confiança do ASR;
3. interesses da criança;
4. repetição recente;
5. complexidade linguística;
6. fadiga e abandono;
7. frases úteis para comunicação familiar e ferramentas digitais.

## Pipeline de dados

```text
áudio autorizado
  → verificação de qualidade
  → confirmação da intenção pelo responsável
  → pseudonimização
  → versão do dataset pessoal
  → fine-tuning de um ASR pré-treinado
  → run permissionada na Psyche/Solana
  → avaliação WER, CER e intenção
  → publicação controlada do ASR adaptado
  → integração com família e ferramentas tecnológicas
```

O MVP parte de um ASR pré-treinado e faz fine-tuning com gravações autorizadas da criança. Ele não treina um modelo do zero. A quantidade necessária de dados é determinada por qualidade, diversidade e desempenho, sem um número fixo de minutos como garantia.

## Separação de responsabilidades

| Componente | Responsabilidade | Não deve fazer |
| --- | --- | --- |
| CAA | ampliar ou complementar formas de comunicação | depender exclusivamente do reconhecimento de voz |
| ASR-base | fornecer o ponto inicial do reconhecimento | ser apresentado como personalizado |
| Fine-tuning | adaptar o ASR existente à voz da criança | treinar um modelo do zero |
| Responsável | confirmar intenção e autorizar amostras | avaliar clinicamente a fala |
| Psyche | distribuir o fine-tuning entre clientes autorizados | processar dados infantis em runs permissionless |
| Solana | coordenar estado, participantes e etapas da run | armazenar áudio ou executar inferência em tempo real |
| Governança blockchain | registrar referências da run e proveniência | ser apresentada como o ganho central do projeto |
| Armazenamento privado | guardar dados criptografados | expor dados publicamente |

## Hierarquia de valor da arquitetura

1. **Ganho principal para a criança:** comunicação mais assertiva com pais e ferramentas tecnológicas.
2. **Diferencial técnico:** fine-tuning descentralizado do ASR pela Psyche/Solana.
3. **Benefícios decorrentes:** rastreabilidade, segurança, privacidade e proveniência.

## Requisitos transversais

- criptografia em trânsito e em repouso;
- controle de acesso por função e instituição;
- logs de auditoria;
- versionamento de datasets e modelos;
- revogação para usos futuros;
- minimização e retenção definida de dados;
- acessibilidade desde o desenho.
