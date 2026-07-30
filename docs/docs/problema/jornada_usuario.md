---
title: Jornada do usuário
description: Fluxos da criança e da família
sidebar_position: 4
---

# Jornada do usuário

## Entrada e consentimento

```text
responsável conhece a proposta
  → recebe explicação acessível
  → escolhe finalidades autorizadas
  → criança participa do assentimento quando aplicável
  → cria o perfil e o PIN infantil
  → preferências de acessibilidade e comunicação são configuradas
```

Usar o aplicativo não significa autorizar automaticamente pesquisa, treinamento coletivo ou uso comercial. Cada finalidade deve possuir autorização própria.

## Jornada da criança

| Etapa | Experiência | Resposta do sistema |
| --- | --- | --- |
| Escolha | seleciona tema ou personagem | respeita interesses e reduz carga cognitiva |
| Missão | usa voz ou recurso complementar em uma história | grava apenas quando autorizado |
| Retorno | recebe feedback visual positivo | não pune erro ou ausência |
| Progresso | desbloqueia novas atividades | equilibra variedade e dificuldade |
| Encerramento | conclui uma sessão curta | registra fadiga e preferências |

## Coleta e confirmação familiar

```text
criança realiza a missão
  → navegador captura e reproduz a gravação
  → ASR-base tenta reconhecer a intenção
  → responsável confirma o que a criança quis dizer
  → amostra autorizada recebe o rótulo correto
  → dataset pessoal ganha uma nova versão
```

O responsável confirma a intenção comunicativa, não avalia se a fala está “correta” ou “incorreta”.

## Fine-tuning do ASR

```text
ASR pré-treinado
  + dataset pessoal autorizado
  → run permissionada de fine-tuning na Psyche
  → participantes e etapas coordenados na Solana
  → modelo ou adaptador pessoal
  → comparação com o ASR-base
  → disponibilização controlada
```

O MVP não treina um ASR do zero. Ele ajusta um modelo existente à voz da criança e mede se a intenção passou a ser reconhecida com mais precisão.

## Uso do modelo adaptado

```text
criança fala
  → ASR adaptado reconhece a intenção
  ├──→ responsável recebe pedido ou escolha com mais clareza
  └──→ ferramenta tecnológica recebe texto ou comando reconhecido
```

O ganho principal é reduzir pedidos de repetição e permitir uma comunicação mais assertiva com os pais, jogos, assistentes e ferramentas educacionais.

## Pontos de cuidado

- consentimento precisa ser compreensível e revogável;
- sessões devem respeitar fadiga e sobrecarga sensorial;
- o produto não pode retirar ou desvalorizar recursos de CAA já utilizados pela criança;
- falhas não podem produzir mensagens punitivas;
- a família precisa distinguir melhora do reconhecimento de qualquer avaliação clínica;
- amostras não autorizadas não podem entrar no fine-tuning;
- voz e identidade permanecem fora da blockchain;
- rastreabilidade, segurança e privacidade são benefícios da arquitetura, mas o objetivo central é o treinamento descentralizado de um ASR mais inclusivo.
