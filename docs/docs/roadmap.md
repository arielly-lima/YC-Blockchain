---
title: Roadmap de 12 meses
description: Plano mensal, responsáveis, entregáveis e critérios para publicação da plataforma
sidebar_label: Roadmap de 12 meses
sidebar_position: 6
---

# Roadmap de 12 meses

## Objetivo

Levar o projeto do protótipo atual a uma **plataforma refinada e pronta para publicação**, com:

- experiência funcional para criança e responsável;
- coleta e versionamento seguro de áudio;
- fine-tuning mensurável de um ASR pré-treinado;
- prova de treinamento permissionado pela Psyche/Solana;
- integração com ao menos uma ferramenta tecnológica;
- oferta comercial, suporte e documentação definidos;
- validação técnica, ética, de segurança e de usabilidade.

O **Mês 1** começa após a aprovação deste plano. O ciclo encerra no **Mês 12** com a decisão formal de publicação.

## Responsabilidades

| Integrante | Responsabilidade principal | Decisões sob sua liderança |
| --- | --- | --- |
| **Maria Arielly** | produto, negócio, pesquisa e UX | requisitos, stakeholders, métricas, oferta comercial, pilotos e comunicação |
| **Ana Célia** | UX/UI, frontend e acessibilidade | design system, fluxos, implementação web, responsividade, testes e qualidade visual |
| **Lorena “Loren” Garcia** | IA, backend, blockchain e infraestrutura | ASR, dados, APIs, Psyche/Solana, segurança técnica, DevOps e observabilidade |
| **Toda a equipe** | governança do projeto | priorização, revisão mensal, documentação, demonstrações e decisão de avanço |

## Modelo de execução

- sprints de duas semanas;
- demonstração funcional ao final de cada mês;
- backlog único com responsável e critério de aceite;
- revisão mensal de riscos, orçamento e dependências;
- nenhuma tarefa é concluída sem evidência anexada;
- dados reais de crianças somente após consentimento, proteção adequada e aprovação ética aplicável.

## Visão trimestral

| Período | Resultado esperado |
| --- | --- |
| **Meses 1–3 — Fundação** | requisitos aprovados, arquitetura definida e coleta de áudio funcionando ponta a ponta |
| **Meses 4–6 — Prova técnica** | ASR pessoal mensurável e primeira run permissionada Psyche/Solana |
| **Meses 7–9 — Alpha e piloto** | plataforma integrada, endurecida e validada em piloto controlado |
| **Meses 10–12 — Produto publicável** | oferta comercial, beta, operação e versão pronta para publicação |

## Plano mensal por integrante

| Mês | Objetivo | Maria Arielly | Ana Célia | Lorena “Loren” Garcia | Entrega e critério de saída |
| --- | --- | --- | --- | --- | --- |
| **1 — Escopo e baseline** | transformar a visão em requisitos executáveis | consolidar stakeholders; conduzir entrevistas com responsáveis e potenciais compradores; escrever PRD e métricas de sucesso | auditar o protótipo; mapear fluxos infantil e do responsável; criar backlog de UX e acessibilidade | comparar ASRs em português; escolher candidatos; registrar arquitetura, riscos e baseline de inferência | **Entrega:** PRD, backlog priorizado e decisão de arquitetura.<br />**Saída:** escopo do MVP aprovado pelas três integrantes |
| **2 — Dados, consentimento e design** | preparar a base segura da plataforma | definir finalidade, retenção e textos de consentimento; especificar protocolo de teste e critérios do piloto | concluir design system; prototipar criança e responsável; executar testes de usabilidade com adultos e responsáveis | implementar esquema de áudio, pseudonimização, armazenamento criptografado e versionamento de dataset; configurar testes e CI | **Entrega:** protótipo validado e pipeline de dados mínimo.<br />**Saída:** fluxo de consentimento compreensível e amostra versionada sem dados on-chain |
| **3 — Coleta funcional** | entregar a primeira jornada ponta a ponta | finalizar conteúdo das missões e critérios de aceite; organizar feedback das famílias | implementar PIN, aventuras, microfone, reprodução, feedback, fallback e responsividade | implementar API de captura, validação de qualidade, inferência do ASR-base e logs técnicos | **Entrega:** missão real de voz integrada ao ASR-base.<br />**Saída:** áudio capturado, processado e associado à intenção esperada |
| **4 — Fine-tuning centralizado** | provar que a personalização gera ganho mensurável | definir lista de parceiros-alvo; estruturar oferta do piloto técnico e roteiro comercial | implementar área do responsável, confirmação de intenção, correção e autorização de amostras | separar treino, validação e teste; executar fine-tuning centralizado; medir WER, CER e acerto de intenção | **Entrega:** comparação reproduzível entre modelo-base e adaptado.<br />**Saída:** ganho ou limite documentado em frases não usadas no treino |
| **5 — Psyche para áudio** | validar a viabilidade técnica do diferencial | prospectar universidade e provedor de GPU; registrar custos e dependências da prova | implementar visualização de versões, estado do treinamento e métricas técnicas | adaptar batches, modelo, função de perda e checkpoints para áudio; executar prova local; documentar incompatibilidades | **Entrega:** prova técnica ou relatório de inviabilidade parcial.<br />**Saída:** decisão go/no-go e plano de contingência com baseline centralizado ou Flower |
| **6 — Run permissionada** | demonstrar treinamento coordenado na Solana | definir responsabilidades contratuais do piloto; realizar entrevistas de preço e compra | criar sandbox visual da integração e fluxo de autorização dos participantes | configurar Coordinator e Authorizer; autorizar carteiras; executar run em ambiente seguro; vincular dataset, execução e modelo | **Entrega:** run permissionada reproduzível.<br />**Saída:** ao menos dois clientes autorizados, nenhum áudio on-chain e resultado verificável |
| **7 — Alpha integrada** | reunir produto, ASR e blockchain em uma única versão | escrever onboarding, suporte e material do piloto; selecionar candidatos a parceiro de design | integrar áreas da criança e do responsável; tratar estados vazios, erros e retomada de sessão | implementar registro de modelos, autenticação da API, inferência do modelo adaptado, métricas e monitoramento | **Entrega:** alpha ponta a ponta em ambiente de homologação.<br />**Saída:** coleta → autorização → fine-tuning → uso do modelo executado sem intervenção manual crítica |
| **8 — Segurança e qualidade** | reduzir riscos antes do uso externo | concluir avaliação de impacto e protocolo do piloto; revisar termos com apoio jurídico especializado | executar auditoria de acessibilidade, testes responsivos e testes moderados de usabilidade; corrigir falhas críticas | atualizar modelo de ameaças; testar acesso, criptografia, backup, restauração, carga, latência e rollback | **Entrega:** release candidate do piloto.<br />**Saída:** zero defeitos críticos abertos e checklist de segurança aprovado |
| **9 — Piloto controlado** | validar utilidade, operação e disposição de continuidade | operar o piloto; entrevistar responsáveis e comprador; medir adesão e intenção de contratação | acompanhar sessões; corrigir fricções; consolidar métricas de uso e experiência | operar inferência e fine-tuning; avaliar frases inéditas; registrar custo, incidentes e desempenho da run | **Entrega:** relatório de piloto técnico, de experiência e comercial.<br />**Saída:** decisão baseada em evidência sobre público, oferta e arquitetura |
| **10 — Productização** | transformar a alpha em produto contratável | fechar pacotes, escopo, preço experimental, contrato, SLA e processo de suporte | refinar onboarding, navegação, painel de consumo e experiência de integração | implementar multi-tenant, chaves de API, limites, medição de uso, retenção automática e isolamento por cliente | **Entrega:** versão candidata a beta e pacote comercial.<br />**Saída:** parceiro consegue contratar, configurar e testar a integração com documentação |
| **11 — Beta e preparação operacional** | testar a operação semelhante à produção | conduzir beta com parceiro formal; preparar materiais de venda, suporte e publicação | finalizar interface pública, documentação visual, acessibilidade e correções do beta | configurar produção, CI/CD, observabilidade, alertas, resposta a incidentes e teste de segurança independente | **Entrega:** beta estável e plano de lançamento.<br />**Saída:** nenhum bloqueador P0/P1 e aceite do parceiro de beta |
| **12 — Publicação** | lançar uma versão segura, mensurável e sustentável | executar plano de comunicação e aquisição; revisar KPIs, orçamento e plano do ano seguinte | publicar frontend final, demonstração, central de ajuda e relatório de acessibilidade | publicar backend e API; validar backup e rollback; emitir model card, runbook e versão técnica | **Entrega:** plataforma publicada e documentação completa.<br />**Saída:** checklist de publicação aprovado pelas três integrantes |

## Entregáveis acumulados por responsável

### Maria Arielly

- PRD, mapa de stakeholders e métricas;
- protocolo de descoberta e relatórios de entrevistas;
- termos comerciais e escopo dos pilotos;
- pacotes, precificação experimental e jornada de compra;
- onboarding, suporte e plano de publicação;
- relatório de validação e plano de crescimento.

### Ana Célia

- design system acessível;
- aplicativo infantil responsivo;
- área do responsável;
- estados de erro, progresso e retomada;
- painel de consumo e integração;
- testes de usabilidade, acessibilidade e qualidade visual;
- interface final e central de ajuda.

### Lorena “Loren” Garcia

- benchmark e escolha do ASR;
- pipeline seguro de áudio e dataset;
- baseline e fine-tuning pessoal;
- adaptação experimental da Psyche para áudio;
- Coordinator, Authorizer e run permissionada na Solana;
- backend, API, autenticação, medição e monitoramento;
- segurança, CI/CD, model card e runbook.

## Indicadores de acompanhamento

| Dimensão | Indicadores |
| --- | --- |
| **Execução** | tarefas concluídas por sprint, bloqueios, desvio de prazo e orçamento |
| **Produto** | conclusão de missão, abandono, retorno após erro e satisfação |
| **ASR** | WER, CER, acerto de intenção, confiança e resultado em frases inéditas |
| **Infraestrutura** | duração e custo da run, disponibilidade, latência e falhas por cliente |
| **Segurança** | incidentes, acessos indevidos, tempo de resposta e defeitos críticos |
| **Negócio** | parceiros prospectados, pilotos propostos, pilotos contratados e conversão para contrato |

Os valores-alvo de desempenho e custo devem ser definidos nos Meses 1 e 2 após a escolha do ASR e a medição do baseline. Não devem ser inventados antes dos testes.

## Critérios para publicação

A versão do Mês 12 só pode ser publicada quando:

1. o fluxo criança → responsável → dataset → fine-tuning → integração estiver funcional;
2. modelo-base e adaptado forem comparados em dados separados;
3. a integração Psyche/Solana estiver demonstrada ou claramente limitada como experimental;
4. nenhum áudio, identidade ou transcrição for armazenado na blockchain;
5. consentimento, retenção, exclusão e resposta a incidentes estiverem documentados;
6. não existirem defeitos P0 ou P1;
7. backup e rollback tiverem sido testados;
8. API, suporte, termos e oferta comercial estiverem publicados;
9. o piloto controlado tiver gerado evidência de utilidade e custo;
10. as três integrantes aprovarem formalmente o release.

## Dependências críticas

- escolha de um ASR com licença compatível;
- acesso a dados seguros e autorizados;
- viabilidade da adaptação de áudio à Psyche;
- disponibilidade de GPU;
- apoio jurídico e ético antes de dados infantis reais;
- parceiro para piloto e integração;
- orçamento de operação depois do hackathon.

:::warning Regra de contingência
Se a adaptação da Psyche para áudio não atingir o critério técnico no Mês 5, o projeto mantém o fine-tuning centralizado como baseline, testa distribuição com Flower e preserva a Psyche/Solana como trilha experimental separada. A experiência da criança e a medição do ASR não devem ficar bloqueadas por uma única dependência.
:::
