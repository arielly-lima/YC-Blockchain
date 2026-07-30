---
title: Arquitetura blockchain e dados
description: Separação entre dados privados, registros verificáveis e treinamento distribuído
sidebar_position: 2
---

# Arquitetura blockchain e dados

## Visão geral

```text
┌──────────────────────────────┐
│ dados privados off-chain     │
│ áudio · transcrição · contexto│
│ datasets · checkpoints       │
└──────────────┬───────────────┘
               │ acesso autorizado
               ↓
┌──────────────────────────────┐
│ clientes Psyche permissionados│
│ GPUs · treino · validação     │
└──────────────┬───────────────┘
               │ estado e contribuições
               ↓
┌──────────────────────────────┐
│ Solana                        │
│ Coordinator · Authorizer      │
│ governança · hashes · versões │
└──────────────┬───────────────┘
               │ referência do resultado
               ↓
┌──────────────────────────────┐
│ modelo/adaptador avaliado     │
│ publicação controlada         │
└──────────────────────────────┘
```

## Dados off-chain

| Categoria | Exemplos | Proteção |
| --- | --- | --- |
| voz | áudio, transcrição e qualidade | criptografia e acesso mínimo |
| identificação | nome, contato e documentos | separação e pseudonimização |
| contexto de uso | preferências, frases e intenções esperadas | acesso controlado pela família |
| modelos pessoais | adaptadores e checkpoints | armazenamento privado |

## Registros on-chain

- identificador e estado da run Psyche;
- participantes ou autoridades autorizadas;
- fases e contribuições computacionais previstas pelo Coordinator;
- hashes e versões de governança;
- identificadores pseudonimizados;
- estado do consentimento;
- finalidade autorizada;
- eventos de acesso relevantes;
- vínculo entre dataset, execução e modelo;
- revogações;
- vagas patrocinadas.

## Consentimento granular

O responsável escolhe separadamente:

1. coleta e armazenamento das amostras de voz;
2. fine-tuning de um ASR pré-treinado para a própria criança;
3. uso do modelo adaptado em ferramentas tecnológicas autorizadas;
4. pesquisa acadêmica;
5. instituições e provedores de GPU autorizados;
6. uso comercial;
7. prazo de armazenamento.

A revogação bloqueia novos acessos e treinamentos. Como remover a influência de uma amostra de um modelo já treinado é complexo, a arquitetura precisa de versionamento, retirada de versões e políticas de retreinamento.

## Arquitetura do ASR

```text
modelo pré-treinado em português
  → dataset pessoal autorizado
  → fine-tuning descentralizado
  → ASR adaptado à voz da criança
  → texto, comando ou saída de comunicação
```

O MVP não treina um modelo-base do zero. Ele coleta dados autorizados e usa ajuste fino sobre um ASR existente. Não existe uma quantidade fixa de minutos que garanta desempenho: o dataset pessoal cresce gradualmente, e cada versão deve ser avaliada por cobertura, qualidade e métricas.

## Psyche Network

A Psyche oferece uma arquitetura em que clientes independentes treinam um modelo em conjunto. Nas runs descentralizadas, o **Coordinator é um programa na Solana** e funciona como fonte compartilhada de estado. O tráfego de treinamento e os dados não são armazenados na blockchain.

```text
amostras autorizadas
  → dataset versionado
  → data provider ou cópia local autorizada
  → run permissionada na Psyche
  → Coordinator e Authorizer na Solana
  → processamento nas GPUs participantes
  → fine-tuning do ASR pré-treinado
  → modelo ou adaptador pessoal
  → avaliação técnica
  → uso pela família e por ferramentas autorizadas
```

:::warning Risco técnico
A implementação de referência da Psyche está orientada a modelos transformer de texto. Sua adaptação para ASR é experimental e exige implementar ou validar processamento de áudio, batches, tokenização, função de perda, sincronização, métricas WER/CER, checkpoints e controle de acesso.
:::

### Runs permissionadas

Uma run com dados sensíveis deve:

- aceitar somente carteiras autorizadas;
- usar chaves distintas para proprietário, autorizador e clientes;
- limitar o acesso ao dataset fora da blockchain;
- impedir entrada permissionless;
- registrar a versão da configuração;
- vincular o modelo resultante ao dataset autorizado;
- definir política de saída e revogação para usos futuros.

## Ganhos decorrentes: segurança e privacidade

Rastreabilidade, segurança e privacidade são benefícios importantes do desenho em blockchain, mas não substituem o objetivo central: usar treinamento descentralizado para adaptar o ASR e melhorar a comunicação da criança.

### Controles mínimos

- runs privados ou permissionados;
- chaves separadas por instituição;
- princípio do menor privilégio;
- auditoria de leitura e treinamento;
- retenção definida;
- resposta a incidentes;
- testes de reidentificação e vazamento;
- avaliação ética antes de dados reais infantis.

## Limite de privacidade

Uma run permissionada controla quem participa, mas não elimina sozinha os riscos de privacidade. O projeto ainda precisa de minimização, contratos, criptografia, isolamento de dados, monitoramento, resposta a incidentes e avaliação ética.

## Referências

- [Psyche — arquitetura e atores](https://docs.psyche.network/explain/index.html)
- [Psyche — workflow do Coordinator](https://docs.psyche.network/explain/general-workflow.html)
- [Psyche — autenticação](https://docs.psyche.network/enduser/authentication.html)
- [Psyche — execução na Solana](https://docs.psyche.network/development/running-onchain.html)
