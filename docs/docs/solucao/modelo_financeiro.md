---
title: Modelo financeiro
description: Sustentabilidade institucional e acesso social
sidebar_position: 5
---

# Modelo financeiro

## Modelo em uma frase

Empresas e instituições contratam a **implantação, a integração e a operação do ASR adaptado**; famílias utilizam a experiência por acesso direto ou patrocinado. **Áudios brutos e a voz infantil nunca são vendidos.**

## Papel comercial dos stakeholders

| Stakeholder | Papel | Relação financeira |
| --- | --- | --- |
| **Criança** | beneficiária e usuária da experiência | não paga no modelo institucional |
| **Responsável** | autoriza dados, confirma intenções e acompanha o uso | pode acessar diretamente ou por vaga patrocinada |
| **Empresa de tecnologia assistiva** | integra o ASR em seu produto | cliente de API, integração e suporte |
| **Ferramenta educacional ou de voz** | incorpora intenção, texto ou comando adaptado | cliente de API e licenciamento |
| **Rede pública de educação ou inclusão** | oferece acesso a um grupo de famílias | cliente de implantação e contrato anual |
| **Fundação ou patrocinador** | financia acesso e computação | compra cotas de acesso por coorte ou período |
| **Universidade ou grupo de pesquisa** | valida método, métricas e protocolo | parceiro técnico; pode contratar projeto de pesquisa |
| **Provedor de GPU** | fornece capacidade computacional para as runs | fornecedor ou parceiro remunerado, não comprador |

## Ofertas comerciais

### 1. Piloto técnico pago

**Comprador:** empresa de tecnologia assistiva, ferramenta educacional, universidade ou rede pública.

**Entrega:**

- configuração de uma instância segura;
- fluxo de coleta e consentimento;
- dataset de demonstração versionado;
- comparação entre ASR-base e modelo adaptado;
- uma integração de prova de conceito;
- relatório técnico com WER, CER, acerto de intenção, custo e riscos;
- suporte durante o período acordado.

**Cobrança:** valor fechado por projeto, definido por escopo, duração, número de integrações e necessidade computacional.

**Papel nos primeiros 12 meses:** principal porta de entrada comercial e mecanismo de validação antes da venda recorrente.

### 2. Plataforma e API de ASR adaptado

**Comprador:** empresas de tecnologia assistiva, jogos, plataformas educacionais e interfaces de voz.

**Entrega:**

- API ou SDK para enviar áudio autorizado;
- gerenciamento de perfis e versões de modelos;
- retorno de intenção, texto ou comando;
- painel de consumo e métricas técnicas;
- documentação, chaves de acesso e suporte de integração;
- política de retenção e exclusão.

**Cobrança:** taxa inicial de integração mais assinatura mensal ou anual. O componente variável pode ser calculado por perfil ativo, volume de inferências e nível de suporte.

**Pré-condição:** entrar em oferta recorrente somente depois que o piloto demonstrar desempenho, custo por perfil e estabilidade operacional.

### 3. Fine-tuning gerenciado

**Comprador:** organizações que possuem base legal, consentimento e amostras autorizadas para personalização.

**Entrega:**

- preparação e validação do dataset;
- baseline centralizado;
- fine-tuning do ASR pré-treinado;
- run permissionada na Psyche/Solana, após validação da adaptação para áudio;
- avaliação em frases separadas do treinamento;
- registro da versão e disponibilização controlada do modelo.

**Cobrança:** taxa por ciclo de fine-tuning, acrescida do consumo de GPU e de armazenamento. Monitoramento e novas versões podem compor um contrato recorrente.

:::warning Dependência técnica
A Psyche suporta atualmente modelos causais de linguagem na implementação de referência. A oferta de fine-tuning de ASR descentralizado só pode ser comercializada depois da prova técnica de áudio, segurança e reprodutibilidade.
:::

### 4. Acesso patrocinado

**Comprador:** fundações, institutos, empresas patrocinadoras e redes públicas.

**Entrega:**

- acesso da coorte contratada à plataforma;
- orçamento de computação para personalização;
- suporte de entrada para responsáveis;
- relatório agregado de acesso, engajamento e desempenho;
- nenhuma identificação individual em relatórios públicos ou on-chain.

**Cobrança:** contrato por número de acessos financiados e período de cobertura.

## Prioridade das receitas

| Horizonte | Fonte | Justificativa |
| --- | --- | --- |
| **0–6 meses** | piloto técnico e projeto de pesquisa | gera evidência, aprende o custo e reduz risco de produto |
| **7–12 meses** | implantação, integração e suporte | transforma o piloto em contrato e prepara a operação |
| **Após validação** | assinatura da API e fine-tuning gerenciado | cria receita recorrente com desempenho e custo conhecidos |
| **Contínuo** | acesso patrocinado | amplia acesso sem depender da venda de dados |

## Jornada comercial

```text
prospecção de parceiro
  → diagnóstico técnico e jurídico
  → proposta de piloto com escopo fechado
  → integração e baseline do ASR
  → fine-tuning e avaliação
  → decisão de continuidade
  → contrato anual de API, implantação ou acesso patrocinado
```

Cada proposta deve explicitar:

- problema e público atendido;
- entregáveis e itens fora do escopo;
- base legal e responsabilidades sobre os dados;
- métricas de aceite;
- limite de perfis, inferências e armazenamento;
- custo de GPU e suporte;
- prazo, renovação e critérios de encerramento.

## Subsídio cruzado

```text
pilotos + contratos recorrentes + patrocínio
  → operação e infraestrutura
  → acesso gratuito para famílias
  → resultados agregados auditáveis
```

O acesso gratuito deve possuir fonte explícita de cobertura. A governança on-chain pode registrar a quantidade de acessos financiados e eventos de execução sem identificar crianças; essa rastreabilidade é um benefício secundário da arquitetura.

## Estrutura de custos

- desenvolvimento e manutenção;
- armazenamento e processamento seguro de áudio;
- treinamento e avaliação de modelos;
- GPUs e participação em runs permissionadas;
- segurança, privacidade e conformidade;
- suporte a famílias e integrações tecnológicas;
- pesquisa e validação.

## Métricas econômicas a validar

| Métrica | Decisão que orienta |
| --- | --- |
| custo de implantação por parceiro | valor mínimo do piloto |
| custo de GPU por ciclo e por perfil | preço do fine-tuning |
| custo mensal de inferência e armazenamento | limite e preço da assinatura |
| horas de suporte por integração | nível de serviço e margem |
| tempo até a primeira integração funcional | capacidade de implantação |
| conversão de piloto para contrato anual | adequação da oferta |
| retenção e uso por perfil ativo | sustentabilidade da receita recorrente |
| margem bruta por oferta | prioridade comercial |

## Uso proposto de eventual apoio financeiro

| Destinação | Percentual | Aplicação |
| --- | ---: | --- |
| IA e Psyche Network | 35% | ASR pré-treinado, fine-tuning pessoal e integração experimental do pipeline de áudio |
| Produto e acessibilidade | 25% | aplicativo infantil, missões e área do responsável |
| Infraestrutura computacional | 20% | GPUs, armazenamento seguro e execução de runs |
| Integrações e validação | 10% | conexão com ferramentas tecnológicas, testes com famílias e mensuração |
| Segurança, LGPD e blockchain | 10% | consentimento, Solana, governança e proteção de dados |

Os percentuais são uma hipótese de alocação para o apoio do hackathon e devem ser convertidos em orçamento por entregável antes da execução.

## Premissas a validar

1. Empresas aceitam pagar por um piloto antes de contratar a API.
2. O fine-tuning produz ganho mensurável de compreensão por criança.
3. O custo por perfil permite margem positiva sem limitar o acesso.
4. Famílias aderem ao fluxo de coleta e confirmação.
5. Ferramentas tecnológicas conseguem integrar a saída do ASR.
6. A Psyche pode ser adaptada para ASR com custo e estabilidade aceitáveis.
7. Runs permissionadas podem operar com dados sensíveis fora da blockchain.
8. Pilotos podem ser convertidos em contratos anuais.

## Sustentabilidade responsável

A sustentabilidade não pode depender da exploração comercial da voz infantil. O valor econômico vem de software, integração, computação, suporte e desempenho comprovado.
