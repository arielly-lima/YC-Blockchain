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
- permitir formas complementares de resposta inspiradas em CAA;
- oferecer escolha e feedback positivo;
- permitir confirmação de intenção;
- testar em dispositivos móveis.

**Critério de avanço:** missão concluída ponta a ponta sem barreiras críticas.

## Fase 3 — Pipeline de ASR

**Objetivo:** provar personalização mensurável.

- integrar um modelo pré-treinado em português;
- documentar separadamente modelo-base, adaptação coletiva e adaptador pessoal;
- validar qualidade das amostras;
- versionar dataset;
- treinar adaptador;
- comparar WER, CER e acerto de intenção.

**Critério de avanço:** comparação reproduzível entre modelo-base e adaptado, sem alegar um volume fixo de áudio como garantia de personalização.

## Fase 4 — Psyche, Solana e governança

**Objetivo:** demonstrar treinamento descentralizado permissionado e sua proveniência.

- criar uma run pequena na Psyche/Solana;
- configurar Coordinator e Authorizer;
- autorizar carteiras de clientes participantes;
- testar a execução em localnet ou devnet antes de dados sensíveis;
- adaptar ou especificar o pipeline necessário para áudio;
- registrar consentimento por finalidade;
- vincular hash do dataset;
- vincular a run ao modelo resultante;
- demonstrar revogação;
- registrar vaga social simulada.

**Critério de avanço:** run reproduzível e trilha auditável entre autorização, dataset, participantes, execução e modelo, sem dados pessoais on-chain.

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
| P0 | run permissionada mínima na Psyche/Solana |
| P0 | consentimento, dataset, run e modelo vinculados |
| P1 | painel profissional mínimo |
| P1 | adaptação experimental da Psyche para áudio |
| P1 | narrativa de impacto e modelo financeiro |
| P2 | escala multi-institucional e incentivos de computação |

:::tip Controle de escopo
É melhor demonstrar um fluxo pequeno, seguro e verificável do que apresentar muitos módulos sem integração real.
:::
