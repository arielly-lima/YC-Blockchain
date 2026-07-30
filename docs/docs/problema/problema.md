---
title: Problema central
description: Por que tecnologias de voz excluem crianças com fala não padrão
sidebar_position: 1
---

# Problema central

Sistemas de Reconhecimento Automático de Fala (**ASR**) dependem de grandes volumes de áudio. Como as bases mais utilizadas representam principalmente a fala considerada padrão, pessoas com padrões acústicos diversos continuam invisíveis para muitos assistentes, jogos e recursos educacionais.

## CAA e ASR

A **Comunicação Aumentativa e Alternativa (CAA)** reúne recursos, estratégias e práticas que ampliam ou complementam a fala quando ela, sozinha, não atende às necessidades da pessoa. A CAA pode incluir desde gestos e pranchas com pictogramas até dispositivos e aplicativos de alta tecnologia.

O ASR não é sinônimo de CAA, mas pode potencializar interfaces de comunicação ao converter voz em texto, comandos ou intenções. Modelos pré-treinados, como Whisper e wav2vec 2.0, tornam essa integração tecnicamente possível, porém ainda apresentam limitações quando aplicados a padrões de fala pouco representados.

> **Contradição central:** justamente quem mais pode se beneficiar de uma tecnologia de comunicação é frequentemente quem menos é compreendido pelos modelos de voz atuais.

## Falha de representação

Crianças com TEA, Síndrome de Down, paralisia cerebral e condições neurológicas podem apresentar formas de falar pouco representadas nos dados de treinamento. O sistema falha não porque a criança não tenha algo a comunicar, mas porque o modelo não aprendeu a compreendê-la.

| Causa | Efeito |
| --- | --- |
| Dataset pouco diverso | maior taxa de erro para falas não padrão |
| Coleta por repetição | cansaço, abandono e baixa variedade |
| Poucos dados individuais | dificuldade para adaptar o modelo |
| Feedback constante de erro | frustração e redução das tentativas |
| Reconhecimento impreciso | menor autonomia para falar com a família e usar ferramentas digitais |

## Dimensão do problema no Brasil

O Censo 2022 identificou **14,4 milhões de pessoas com deficiência** entre a população de dois anos ou mais. Aproximadamente **2,7 milhões** estavam em uma categoria de dificuldade permanente que inclui comunicar-se, realizar cuidados pessoais, trabalhar ou estudar por limitações nas funções mentais.

O mesmo Censo identificou **2,4 milhões de pessoas diagnosticadas com autismo**. Entre crianças de 5 a 9 anos, o percentual foi de **2,6%**.

Esses números não estimam diretamente quantas pessoas possuem fala não padrão: deficiência, autismo, necessidades complexas de comunicação e fala atípica são conceitos diferentes. Os dados dimensionam, contudo, a população que pode enfrentar barreiras de comunicação e acessibilidade.

Em 2025, a Lei nº 15.249 passou a reconhecer expressamente as pessoas com necessidades complexas de comunicação e ampliou a previsão de sistemas de comunicação aumentativa e alternativa em saúde, educação e espaços públicos.

## Gargalo da personalização

Não existe um volume universal de áudio que garanta a personalização de um ASR. A quantidade necessária varia conforme a pessoa, a severidade e a estabilidade de sua fala, o vocabulário, o domínio de uso, a qualidade do áudio e a técnica de adaptação.

É necessário distinguir três escalas:

| Escala | Finalidade | Ordem de grandeza e limite |
| --- | --- | --- |
| **Pré-treinamento** | construir um modelo-base geral | exige centenas ou milhares de horas; o Whisper utilizou 680 mil horas e o wav2vec 2.0 foi pré-treinado com até 53 mil horas |
| **Adaptação coletiva** | melhorar o desempenho para diferentes padrões de fala não padrão | requer dados de várias pessoas e deve ser dimensionada por experimentos, cobertura e métricas |
| **Personalização individual** | ajustar um modelo já pré-treinado para uma pessoa ou tarefa | pode apresentar ganhos com poucos minutos em cenários restritos, mas não possui um limite fixo nem garantia de desempenho |

Estudos de personalização de fala com alterações demonstraram ganhos com poucos minutos de gravação e avaliaram conjuntos individuais entre menos de um minuto e aproximadamente 20 minutos. Esses resultados dependem do modelo, da pessoa e da tarefa; não significam que esse volume seja suficiente para uso aberto e robusto.

O projeto, portanto, **não pretende treinar um ASR do zero com a voz da criança**. O MVP coleta amostras autorizadas, forma um dataset pessoal e realiza o **fine-tuning de um ASR já existente**, adaptando-o progressivamente à voz da criança.

Sessões tradicionais de repetição tendem a gerar baixa adesão, abandono e pouca diversidade fonética. O desafio é construir representatividade ao longo do tempo sem transformar a infância em uma sessão de gravação.

A coleta precisa ser:

- dividida em sessões curtas;
- relevante para o cotidiano;
- foneticamente diversa;
- acessível;
- autorizada e transparente;
- interessante para a criança.

## Barreira comunicacional cotidiana

Uma criança pode ser compreendida pelos pais, mas continuar invisível para o tablet, o jogo, o assistente virtual ou a plataforma educacional. Quando a tecnologia erra repetidamente, a consequência não é apenas uma métrica ruim de ASR: é perda de autonomia, interrupção da conversa e desistência de usar ferramentas que já fazem parte da infância.

O ganho central do projeto é tornar essa comunicação mais assertiva. O modelo adaptado deve reconhecer melhor a intenção da criança e disponibilizá-la como texto, comando ou saída de voz para a família e para outras ferramentas tecnológicas.

## Questão de projeto

> Como coletar voz de forma acessível e envolvente, realizar o fine-tuning descentralizado de um ASR existente e ajudar a criança a ser compreendida pelos pais e por ferramentas tecnológicas?

## Hipótese

Se a coleta ocorrer durante missões significativas, com escolhas, progressão e feedback positivo, haverá maior adesão e variedade de fala. Com dados melhores, o fine-tuning poderá adaptar um ASR pré-treinado à voz da criança e reduzir pedidos de repetição nas interações com a família e com ferramentas digitais.

## Próximas leituras

- [Público-alvo](./publico_alvo.md)
- [Proto-personas](./personas.md)
- [Jornada do usuário](./jornada_usuario.md)
- [Proposta de valor](../solucao/proposta_valor.md)

## Referências

- [IBGE — Censo 2022: pessoas com deficiência](https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/43463-censo-2022-brasil-tem-14-4-milhoes-de-pessoas-com-deficiencia)
- [IBGE — Censo 2022: pessoas diagnosticadas com autismo](https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/43464-censo-2022-identifica-2-4-milhoes-de-pessoas-diagnosticadas-com-autismo-no-brasil)
- [Lei nº 15.249/2025 — necessidades complexas de comunicação](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15249.htm)
- [Whisper — Robust Speech Recognition via Large-Scale Weak Supervision](https://arxiv.org/abs/2212.04356)
- [wav2vec 2.0 — self-supervised learning of speech representations](https://arxiv.org/abs/2006.11477)
- [Google Research — personalização de ASR para fala não padrão com dados limitados](https://research.google/pubs/personalizing-asr-for-dysarthric-and-accented-speech-with-limited-data/)
- [Google Research — personalização com pequenos datasets de fala com alterações](https://research.google/pubs/personalized-automatic-speech-recognition-trained-on-small-disordered-speech-datasets/)
