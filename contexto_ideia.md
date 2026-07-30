# Contexto consolidado do projeto — Youth Challenge Blockchain

## 1. Síntese

O projeto cria uma experiência acessível e gamificada para coletar amostras de voz de crianças com fala não padrão e usá-las no **fine-tuning de um ASR pré-treinado**. O objetivo não é ensinar a criança a se aproximar de uma fala considerada padrão, mas adaptar a tecnologia à maneira como ela se comunica.

O ganho principal é permitir que a criança seja compreendida de forma mais assertiva:

- pelos pais e responsáveis;
- por jogos e plataformas educacionais;
- por assistentes e interfaces de voz;
- por outras ferramentas tecnológicas integradas.

O diferencial de blockchain está no **treinamento descentralizado**. A proposta usa a Psyche Network para distribuir experimentalmente o fine-tuning entre GPUs autorizadas e a Solana para coordenar participantes e etapas da run.

> **O valor da blockchain está em descentralizar o treinamento. O valor para a criança está em ser compreendida.**

Rastreabilidade, segurança, privacidade e auditabilidade são ganhos importantes decorrentes dessa arquitetura, mas não constituem a entrega central de valor.

## 2. Problema

Sistemas de Reconhecimento Automático de Fala, ou **ASR**, são treinados majoritariamente com fala considerada padrão. Por isso, crianças com padrões acústicos pouco representados podem ser compreendidas pela própria família e, ao mesmo tempo, ignoradas por tablets, jogos, assistentes virtuais e ferramentas educacionais.

Cada “não entendi” gera uma barreira real:

- interrompe a comunicação;
- exige repetição e esforço;
- aumenta frustração;
- reduz autonomia;
- incentiva a criança a desistir de interagir com a tecnologia.

O problema não está na voz da criança. Está no modelo que ainda não aprendeu a escutá-la.

### Dimensão no Brasil

O Censo 2022 identificou **14,4 milhões de pessoas com deficiência** entre a população de dois anos ou mais. Aproximadamente **2,7 milhões** estavam em uma categoria de dificuldade permanente que inclui comunicar-se, realizar cuidados pessoais, trabalhar ou estudar por limitações nas funções mentais.

O mesmo Censo identificou **2,4 milhões de pessoas diagnosticadas com autismo**. Entre crianças de 5 a 9 anos, a proporção chegou a **2,6%**.

Esses grupos não são sinônimos de fala não padrão. Os números ajudam a dimensionar, porém, a população que pode enfrentar barreiras de comunicação e acessibilidade.

A Lei nº 15.249/2025 reconheceu expressamente pessoas com necessidades complexas de comunicação e ampliou a previsão de sistemas de Comunicação Aumentativa e Alternativa em saúde, educação e espaços públicos.

## 3. CAA e ASR

A **Comunicação Aumentativa e Alternativa (CAA)** reúne recursos e estratégias que ampliam ou complementam a fala. Pode envolver gestos, imagens, pictogramas, botões, pranchas e aplicativos.

O ASR não é sinônimo de CAA. Ele pode potencializar essas interfaces ao converter uma fala em:

- intenção comunicativa;
- texto;
- comando;
- saída de voz;
- ação em outra ferramenta.

Modelos como Whisper e wav2vec 2.0 demonstram o avanço do ASR, mas não garantem bom desempenho para toda voz. Um modelo geral pode ser tecnicamente robusto e ainda falhar sistematicamente com uma criança específica.

## 4. Escala correta dos dados

Não existe uma quantidade universal de minutos que garanta a personalização de um ASR.

É necessário separar três situações:

| Situação | Escala | Decisão do projeto |
| --- | --- | --- |
| pré-treinamento de um modelo-base | centenas ou milhares de horas | não faz parte do MVP |
| adaptação de domínio ou população | dados de várias pessoas | pode ser explorada no futuro |
| personalização individual | depende da voz, tarefa, cobertura e técnica | foco do MVP |

O Whisper, por exemplo, foi treinado com centenas de milhares de horas. O projeto **não treinará um ASR do zero com a voz da criança**.

O MVP:

1. parte de um ASR já existente;
2. coleta amostras autorizadas ao longo de missões;
3. registra a intenção confirmada pelo responsável;
4. cria versões de um dataset pessoal;
5. faz fine-tuning do modelo pré-treinado;
6. compara o reconhecimento antes e depois;
7. testa o resultado em frases não usadas no ajuste.

Estudos mostram ganhos de personalização com pequenos datasets em cenários restritos, mas isso não deve ser transformado em uma promessa fixa de “30 a 60 minutos”. O volume necessário será determinado empiricamente por cobertura, qualidade e desempenho.

## 5. Personas e público-alvo

### Lia — criança beneficiária

Lia tem 10 anos, paralisia cerebral e fala não padrão. Seus pais compreendem o que ela diz, mas sistemas digitais frequentemente não.

Ela precisa de:

- uma experiência simples e acolhedora;
- atividades curtas e contextualizadas;
- novas tentativas sem punição;
- formas complementares de interação;
- uma tecnologia que aprenda a reconhecer sua voz.

### Renata — responsável

Renata acompanha o uso, controla consentimentos, ouve gravações e confirma a intenção comunicativa da criança.

Ela precisa de:

- linguagem clara;
- controle sobre coleta e uso;
- possibilidade de autorizar ou descartar amostras;
- comparação compreensível entre ASR base e adaptado;
- uma saída que ajude a comunicação familiar.

### Ecossistema de infraestrutura e distribuição

Os atores abaixo viabilizam pesquisa, computação, integração e sustentabilidade, mas **não são personas principais**:

- universidades e grupos de pesquisa;
- empresas de tecnologia assistiva;
- desenvolvedores de jogos e ferramentas educacionais;
- provedores de GPU;
- fundações e financiadores.

O público-alvo do produto é a criança com fala não padrão e sua família.

## 6. Proposta de valor

### Para a criança

- maior chance de ser compreendida;
- menos pedidos de repetição;
- mais autonomia para pedir, escolher, brincar e aprender;
- acesso a ferramentas digitais baseadas em voz.

### Para a família

- apoio à comunicação cotidiana;
- confirmação da intenção comunicativa;
- controle sobre amostras e consentimentos;
- acompanhamento da evolução técnica do reconhecimento.

### Para ferramentas tecnológicas

- integração com um ASR adaptado à criança;
- saída de intenção, texto ou comando;
- possibilidade de construir experiências de voz mais inclusivas.

### Diferencial defensável

A experiência coleta dados que os modelos generalistas não possuem. Esses dados alimentam o fine-tuning de um ASR existente. A Psyche permite explorar esse treinamento com capacidade computacional distribuída, e a Solana coordena a run descentralizada.

## 7. Como a solução funciona

```text
aventura de voz
  → gravação autorizada
  → confirmação da intenção pelo responsável
  → dataset pessoal versionado
  → fine-tuning de um ASR pré-treinado
  → run descentralizada na Psyche/Solana
  → comparação entre modelo-base e adaptado
  → intenção, texto ou comando
  → comunicação com a família e ferramentas tecnológicas
```

### Área da criança

- login infantil com PIN;
- interface mobile-first e tela cheia;
- mascote Lumi em toda a jornada;
- biblioteca e mapa visual de aventuras;
- barra de progresso, estrelas e conquistas;
- meta diária sem punição ou perda de vidas;
- pistas em áudio e desafios por imagens;
- feedback imediato e nova tentativa acolhedora;
- captura real do microfone;
- reprodução do áudio gravado;
- fallback simulado se o navegador bloquear o microfone;
- resultado da intenção reconhecida;
- preferências de som, animação e duração;
- fluxo responsivo para celular e desktop.

Missões iniciais:

- **A sede da Lumi:** falar “Quero água”.
- **A mochila da Lumi:** falar “Quero meu caderno”.

### Área do responsável

- login próprio;
- perfil e preferências da criança;
- consulta e alteração de consentimentos;
- lista de amostras pendentes;
- reprodução da gravação;
- texto ou intenção esperada;
- transcrição do modelo-base;
- confirmação do que a criança quis dizer;
- correção manual quando necessária;
- verificação de ruído e qualidade;
- autorização ou descarte para fine-tuning;
- identificação da versão do dataset;
- comparação entre ASR base e adaptado;
- métricas de WER, CER, confiança e acerto de intenção;
- teste em novas frases;
- demonstração da saída para a família ou ferramenta integrada.

## 8. Arquitetura do ASR

```text
ASR pré-treinado
  → dataset pessoal autorizado
  → preparação e validação das amostras
  → fine-tuning
  → avaliação em conjunto separado
  → versão pessoal aprovada
```

O modelo-base deve ser escolhido com base em:

- suporte ao português;
- licença compatível;
- custo de inferência e ajuste;
- possibilidade de fine-tuning;
- desempenho inicial;
- compatibilidade futura com o pipeline da Psyche.

Métricas mínimas:

- WER;
- CER;
- acerto de intenção;
- confiança;
- taxa de pedidos de repetição;
- desempenho em frases não usadas no fine-tuning.

A métrica principal de impacto não é apenas WER ou CER. É a criança conseguir comunicar uma intenção à família ou a uma ferramenta com menos falhas.

## 9. Psyche Network e Solana

A Psyche Network é o diferencial técnico central porque permite coordenar treinamento entre clientes e GPUs independentes.

Na arquitetura proposta:

- uma run é permissionada;
- carteiras autorizadas identificam participantes;
- o Authorizer controla entrada;
- GPUs participantes executam o processamento;
- o Coordinator mantém o estado da run na Solana;
- o resultado é um modelo ou adaptador pessoal avaliado.

### Hipótese do MVP

O projeto deve demonstrar que um pipeline de áudio pode ser adaptado para uma run da Psyche e usado no fine-tuning de um ASR pré-treinado.

Essa integração ainda é **experimental**. A implementação pública de referência da Psyche está orientada a modelos transformer de texto; áudio exige validação de preparação de batches, tokenização, função de perda, sincronização, checkpoints e métricas.

Não se deve afirmar que essa adaptação já está concluída enquanto estiver simulada.

## 10. Papel da blockchain

### Foco central

Descentralizar o treinamento e coordenar a contribuição de capacidade computacional independente.

### Ganhos decorrentes

- rastreabilidade de participantes e runs;
- vínculo entre consentimento, dataset e modelo;
- integridade de versões;
- auditoria de contribuições;
- revogação para usos futuros;
- segurança e privacidade por desenho.

Os dados sensíveis permanecem criptografados fora da blockchain:

- áudios;
- transcrições;
- nomes e contatos;
- documentos;
- preferências;
- datasets;
- checkpoints e adaptadores pessoais.

Na blockchain podem ficar somente referências e estados mínimos:

- estado da run;
- autoridades autorizadas;
- hash e versão do dataset;
- hash do modelo;
- finalidade do consentimento;
- evento de revogação.

O uso de blockchain não elimina a necessidade de criptografia, controle de acesso, minimização de dados, retenção definida e conformidade com a LGPD.

## 11. Consentimento e proteção infantil

O responsável deve poder escolher separadamente:

1. gravação e armazenamento;
2. fine-tuning para a própria criança;
3. uso do modelo em ferramentas autorizadas;
4. participação em pesquisa;
5. compartilhamento com provedores autorizados;
6. prazo de retenção.

O desenho deve considerar o melhor interesse da criança, consentimento específico do responsável, linguagem acessível e assentimento compatível com idade e compreensão.

## 12. Estado atual da demonstração

| Componente | Estado atual |
| --- | --- |
| interface infantil | demonstrável no protótipo |
| captura do microfone no navegador | real |
| reprodução do áudio | real |
| fallback de microfone | simulado |
| reconhecimento do ASR | simulado |
| confirmação na área do responsável | fluxo proposto |
| fine-tuning do ASR | a implementar |
| run Psyche/Solana para áudio | experimental e a implementar |
| registros de governança | simulados |
| métricas antes/depois | simuladas |

O MVP prometido não deve ser confundido com o estado atual do protótipo.

## 13. MVP

O MVP deverá provar:

1. coleta real de amostras em missões;
2. consentimento e confirmação pelo responsável;
3. dataset pessoal versionado;
4. fine-tuning de um ASR já existente;
5. comparação antes e depois em dados separados;
6. uma run permissionada na Psyche/Solana ou uma integração experimental claramente delimitada;
7. uso da intenção reconhecida pela família ou por uma ferramenta tecnológica;
8. armazenamento de dados sensíveis fora da blockchain.

## 14. Próximos passos

1. selecionar o ASR pré-treinado;
2. concluir a área do responsável;
3. implementar consentimento e versionamento;
4. coletar dados seguros de demonstração;
5. executar fine-tuning centralizado como baseline;
6. comparar ASR base e adaptado;
7. adaptar o pipeline de áudio à Psyche;
8. demonstrar run permissionada na Solana;
9. integrar a saída a uma ferramenta tecnológica;
10. validar a experiência com famílias.

## 15. Modelo de negócio

A criança é beneficiária. A receita vem de serviços e infraestrutura, nunca da venda de voz infantil.

O produto é oferecido em quatro formatos:

1. **piloto técnico pago:** projeto de escopo fechado com baseline, fine-tuning, uma integração e relatório;
2. **plataforma e API:** taxa de integração mais assinatura por perfil, uso e nível de suporte;
3. **fine-tuning gerenciado:** cobrança por ciclo, GPU e armazenamento, após validação da Psyche para áudio;
4. **acesso patrocinado:** contrato por quantidade de acessos e período de cobertura.

Empresas de tecnologia assistiva e ferramentas educacionais são os compradores prioritários da API. Redes públicas podem contratar implantação; fundações podem financiar acesso; universidades e provedores de GPU atuam principalmente como parceiros técnicos.

Nos primeiros 12 meses, o piloto pago é a porta de entrada. A receita recorrente de API e treinamento só começa depois que desempenho, custo e estabilidade forem demonstrados.

### Uso de eventual apoio financeiro

| Destinação | Percentual |
| --- | ---: |
| IA e Psyche Network | 35% |
| produto e acessibilidade | 25% |
| infraestrutura computacional | 20% |
| integrações e validação | 10% |
| segurança, LGPD e blockchain | 10% |

## 16. Métricas de sucesso

### Produto

- missões concluídas;
- retorno após falhas;
- amostras autorizadas;
- diversidade de frases e contextos.

### ASR

- WER e CER antes/depois;
- acerto de intenção;
- generalização para novas frases;
- redução de pedidos de repetição.

### Comunicação

- intenções compreendidas pelos responsáveis;
- interações bem-sucedidas com ferramentas;
- satisfação da criança e da família;
- uso recorrente do modelo adaptado.

### Treinamento descentralizado

- run reproduzível;
- número de GPUs participantes;
- tempo e custo do fine-tuning;
- compatibilidade do pipeline de áudio;
- modelo resultante vinculado à execução.

## 17. Riscos principais

- volume e diversidade insuficientes por criança;
- overfitting às frases das missões;
- falsa equivalência entre ganho técnico e comunicação real;
- adaptação da Psyche para áudio mais complexa que o escopo do hackathon;
- exposição de dados infantis;
- alto custo computacional;
- dificuldade de integração com ferramentas de terceiros;
- promessa maior que a evidência do protótipo.

Mitigações:

- começar com vocabulário e intenções restritas;
- separar treino, validação e teste;
- testar novas frases;
- usar dados sintéticos ou adultos até existir protocolo ético;
- identificar claramente tudo que estiver simulado;
- manter dados pessoais off-chain;
- medir resultado na interação com família e tecnologia.

## 18. Mensagem do pitch

O pitch deve seguir esta lógica:

1. a criança é compreendida pelos pais, mas não pela tecnologia;
2. modelos gerais não representam bem sua voz;
3. missões coletam amostras sem transformar a infância em sessão de gravação;
4. o responsável confirma a intenção;
5. o MVP faz fine-tuning de um ASR existente;
6. Psyche/Solana descentraliza esse treinamento;
7. o modelo adaptado devolve intenção, texto ou comando;
8. a criança passa a se comunicar melhor com a família e com ferramentas;
9. rastreabilidade, segurança e privacidade são ganhos decorrentes.

Frase de fechamento:

> **A voz é da criança. O aprendizado é da máquina.**

## 19. Fontes principais

- Youth Challenge Blockchain: https://www.youthchallengeblockchain.com/
- Psyche Network: https://psyche.network/
- Documentação da Psyche: https://docs.psyche.network/
- Arquitetura descentralizada da Psyche: https://docs.psyche.network/explain/index.html
- Execução da Psyche na Solana: https://docs.psyche.network/development/running-onchain.html
- Whisper: https://arxiv.org/abs/2212.04356
- wav2vec 2.0: https://arxiv.org/abs/2006.11477
- IBGE — pessoas com deficiência: https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/43463-censo-2022-brasil-tem-14-4-milhoes-de-pessoas-com-deficiencia
- IBGE — pessoas diagnosticadas com autismo: https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/43464-censo-2022-identifica-2-4-milhoes-de-pessoas-diagnosticadas-com-autismo-no-brasil
- Lei nº 15.249/2025: https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15249.htm
- LGPD: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm
