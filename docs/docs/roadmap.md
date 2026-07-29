---
title: Roteiro de implementação
description: Fases, entregas e critérios de avanço do projeto
sidebar_label: Roteiro de implementação
sidebar_position: 6
---

# Roteiro de implementação

## Fase 1 — Descoberta e segurança

**Objetivo:** validar problema, limites e requisitos.

- entrevistar fonoaudiólogos, famílias e instituições;
- revisar hipóteses de personas e jornada;
- definir consentimento e retenção;
- modelar ameaças e riscos;
- selecionar dados seguros para o protótipo.

**Critério de avanço:** problema validado e protocolo de dados aprovado.

## Fase 2 — Experiência de missão

**Objetivo:** demonstrar uma interação acessível.

- criar história curta;
- implementar gravação sinalizada;
- oferecer escolha e feedback positivo;
- permitir confirmação de intenção;
- testar em dispositivos móveis.

**Critério de avanço:** missão concluída ponta a ponta sem barreiras críticas.

## Fase 3 — Pipeline de ASR

**Objetivo:** provar personalização mensurável.

- integrar modelo-base em português;
- validar qualidade das amostras;
- versionar dataset;
- treinar adaptador;
- comparar WER, CER e acerto de intenção.

**Critério de avanço:** comparação reproduzível entre modelo-base e adaptado.

## Fase 4 — Governança blockchain

**Objetivo:** demonstrar proveniência e autorização.

- registrar consentimento por finalidade;
- vincular hash do dataset;
- registrar execução e modelo;
- demonstrar revogação;
- registrar vaga social simulada.

**Critério de avanço:** trilha auditável sem dados pessoais on-chain.

## Fase 5 — Painel profissional

**Objetivo:** conectar prática e supervisão.

- configurar objetivo e atividade;
- revisar gravações autorizadas;
- corrigir transcrições;
- priorizar falhas;
- apresentar métricas técnicas com contexto.

**Critério de avanço:** profissional consegue concluir o fluxo sem ambiguidade clínica.

## Fase 6 — Piloto controlado

**Objetivo:** validar utilidade e operação.

- firmar parceria com clínica-escola ou universidade;
- obter aprovações éticas e jurídicas;
- executar piloto pequeno;
- medir acesso, engajamento e qualidade;
- revisar produto e governança.

**Critério de avanço:** evidência de utilidade, segurança e viabilidade.

## Prioridades do hackathon

| Prioridade | Entrega |
| --- | --- |
| P0 | missão de voz funcional |
| P0 | comparação técnica do ASR |
| P0 | consentimento e proveniência demonstráveis |
| P1 | painel profissional mínimo |
| P1 | narrativa de impacto e modelo financeiro |
| P2 | integração completa com Psyche |

:::tip Controle de escopo
É melhor demonstrar um fluxo pequeno, seguro e verificável do que apresentar muitos módulos sem integração real.
:::
