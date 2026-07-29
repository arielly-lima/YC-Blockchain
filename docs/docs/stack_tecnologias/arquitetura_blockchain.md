---
title: Arquitetura blockchain e dados
description: Separação entre dados privados, registros verificáveis e treinamento distribuído
sidebar_position: 2
---

# Arquitetura blockchain e dados

## Visão geral

```text
dados privados criptografados
          │
          ├── áudio e transcrição
          ├── informações clínicas
          └── adaptador pessoal
          │
          ↓ hashes e eventos
┌────────────────────────────┐
│ camada de governança       │
│ consentimento · versões    │
│ treinamento · revogação    │
└─────────────┬──────────────┘
              ↓
┌────────────────────────────┐
│ treinamento permissionado  │
│ modelo-base · coletivo     │
│ adaptadores · avaliação    │
└────────────────────────────┘
```

## Dados off-chain

| Categoria | Exemplos | Proteção |
| --- | --- | --- |
| voz | áudio, transcrição e qualidade | criptografia e acesso mínimo |
| identificação | nome, contato e documentos | separação e pseudonimização |
| clínica | diagnóstico, objetivos e relatórios | acesso profissional autorizado |
| modelos pessoais | adaptadores e checkpoints | armazenamento privado |

## Registros on-chain

- hashes e versões;
- identificadores pseudonimizados;
- estado do consentimento;
- finalidade autorizada;
- eventos de acesso relevantes;
- vínculo entre dataset, execução e modelo;
- revogações;
- vagas patrocinadas.

## Consentimento granular

O responsável escolhe separadamente:

1. personalização para a própria criança;
2. compartilhamento com profissional;
3. pesquisa acadêmica;
4. treinamento coletivo;
5. instituições autorizadas;
6. uso comercial;
7. prazo de armazenamento.

A revogação bloqueia novos acessos e treinamentos. Como remover a influência de uma amostra de um modelo já treinado é complexo, a arquitetura precisa de versionamento, retirada de versões e políticas de retreinamento.

## Arquitetura do ASR

```text
modelo pré-treinado em português
  → adaptação coletiva para fala não padrão
  → adaptador por características acústicas
  → adaptador pessoal
```

Grupos devem ser definidos por características relevantes, não apenas por diagnóstico.

## Psyche Network

A Psyche é considerada para ciclos de treinamento distribuído:

```text
amostras autorizadas
  → dataset versionado
  → run privado ou permissionado
  → modelo ou adaptador
  → avaliação técnica
  → disponibilização controlada
```

:::warning Risco técnico
A adaptação da Psyche para ASR é experimental e exige validação de processamento de áudio, batches, tokenização, métricas, checkpoints e controle de acesso.
:::

## Segurança mínima

- runs privados ou permissionados;
- chaves separadas por instituição;
- princípio do menor privilégio;
- auditoria de leitura e treinamento;
- retenção definida;
- resposta a incidentes;
- testes de reidentificação e vazamento;
- avaliação ética antes de dados reais infantis.
