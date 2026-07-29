# Contexto Consolidado do Projeto — Youth Challenge Blockchain

## 1. Contexto geral

Você está auxiliando no desenvolvimento de um projeto para o **Youth Challenge Blockchain 2026**, iniciativa voltada à criação de soluções baseadas em blockchain e tecnologias descentralizadas que melhorem concretamente a vida de crianças e adolescentes.

O projeto será avaliado por cinco critérios:

1. **Inovação:** originalidade, relevância, eficácia e necessidade real do uso de blockchain.
2. **Escalabilidade:** capacidade de expansão para diferentes territórios, instituições e populações.
3. **Impacto:** benefícios positivos, mensuráveis e sustentáveis para crianças e adolescentes.
4. **Risco:** riscos técnicos, operacionais, regulatórios, éticos e reputacionais.
5. **Modelo de negócio:** viabilidade financeira e institucional, interesse de parceiros e relação entre investimento e impacto social.

O contexto apresentado pelo hackathon evidencia que milhões de crianças brasileiras enfrentam privações relacionadas a renda, educação, saúde, saneamento, nutrição e acesso a serviços. O projeto se concentra em uma forma menos visível de exclusão: **a exclusão de crianças com fala não padrão das tecnologias digitais baseadas em voz e do acesso contínuo a atividades de apoio à comunicação**.

---

## 2. Base científica e problema central

A proposta é fundamentada pela Iniciação Científica **“Desenvolvimento e Avaliação de Mecanismos de Gamificação para Engajamento na Coleta de Dados de Voz em Interfaces Acessíveis”**.

A **Comunicação Aumentativa e Alternativa (CAA)** reúne recursos, estratégias e práticas que ampliam ou complementam a fala. O ASR pode potencializar interfaces de CAA ao converter voz em texto, comandos ou intenções, mas não é sinônimo de CAA e não substitui outras formas de comunicação.

A IC parte do seguinte problema:

* sistemas de Reconhecimento Automático de Fala, ou ASR, são treinados principalmente com grandes bases de fala considerada padrão;
* pessoas com fala não padrão, incluindo pessoas com TEA, Síndrome de Down, paralisia cerebral e condições neurológicas, apresentam padrões acústicos diversos e pouco representados nesses bancos;
* não existe um volume universal de áudio que garanta uma personalização individual; a necessidade varia conforme pessoa, tarefa, qualidade, diversidade e técnica de adaptação;
* a coleta tradicional por repetição de frases apresenta baixa adesão, abandono elevado e pouca diversidade fonética;
* sem dados suficientes, torna-se difícil personalizar modelos para compreender cada pessoa.

É necessário separar três escalas:

* **pré-treinamento:** construir um ASR do zero exige centenas ou milhares de horas; o Whisper utilizou 680 mil horas e o wav2vec 2.0 foi pré-treinado com até 53 mil horas;
* **adaptação coletiva:** usa dados autorizados de várias pessoas para melhorar a representação de fala não padrão;
* **personalização individual:** ajusta um modelo já pré-treinado e pode apresentar ganhos com poucos minutos em cenários restritos, mas não possui um limite fixo nem garantia de robustez.

O projeto não pretende treinar um ASR do zero com a voz da criança. Ele parte de modelos pré-treinados e investiga adaptações coletivas e pessoais mensuradas por experimentos.

No Brasil, o Censo 2022 identificou 14,4 milhões de pessoas com deficiência, cerca de 2,7 milhões em uma categoria de dificuldade permanente que inclui comunicar-se e 2,4 milhões de pessoas diagnosticadas com autismo. Entre crianças de 5 a 9 anos, o percentual de diagnóstico de autismo foi de 2,6%. Esses grupos não são equivalentes à população com fala não padrão, mas ajudam a dimensionar barreiras de comunicação e acessibilidade.

A IC propõe enfrentar esse gargalo por meio de:

* interfaces acessíveis;
* sessões curtas;
* frases organizadas por domínios comunicacionais;
* diversidade fonética;
* missões;
* metas;
* feedback visual;
* progressão;
* gamificação baseada na Self-Determination Theory e no Octalysis Framework.

Crianças com fala não padrão frequentemente não são compreendidas por assistentes virtuais, jogos, ferramentas educacionais e aplicações de acessibilidade. Uma criança pode falar de uma forma compreensível para familiares ou profissionais, mas ouvir repetidamente:

> “Não entendi. Tente novamente.”

Isso gera três problemas:

* reduz a autonomia digital e comunicativa;
* produz frustração e pode desestimular novas tentativas;
* exclui a criança de tecnologias de voz que poderiam apoiar sua comunicação e aprendizagem.

Existe ainda uma barreira social adicional: muitas crianças não possuem acesso regular a um fonoaudiólogo particular, permanecem em filas de espera ou vivem em regiões com pouca oferta de serviços especializados.

O projeto pretende enfrentar simultaneamente:

> **A dificuldade de coletar dados suficientes para personalizar tecnologias de voz e a dificuldade de oferecer atividades acessíveis e contínuas de estímulo à comunicação.**

---

## 3. Visão da solução

O projeto é uma **plataforma acessível e gamificada de apoio à comunicação para crianças com fala não padrão**.

A criança participa de histórias, jogos e missões baseadas em voz. Enquanto realiza atividades de comunicação, suas gravações autorizadas formam progressivamente um banco de voz pessoal. Esse banco é utilizado para adaptar um modelo de ASR à forma particular como ela fala.

O princípio central é:

> **A prática gera dados; os dados melhoram o modelo; o modelo melhor reduz a frustração; e uma experiência menos frustrante estimula mais prática.**

A solução não substitui o fonoaudiólogo. Ela funciona como:

* ferramenta de prática entre sessões;
* ferramenta gratuita de estímulo geral à comunicação;
* infraestrutura para personalização de ASR;
* mecanismo de coleta acessível e contextualizada;
* ponte entre famílias, profissionais, clínicas, universidades, serviços públicos e financiadores.

---

## 4. Escada de apoio

A solução pode ser organizada em três níveis.

### 4.1. Voz Livre — acesso universal

Destinado a crianças sem acompanhamento fonoaudiológico, em filas de espera ou cujas famílias não possuem condições de pagar por atendimento particular.

O modo gratuito oferece atividades gerais, seguras e previamente elaboradas ou validadas por fonoaudiólogos, voltadas a:

* comunicação funcional;
* nomeação de objetos;
* construção de pequenas frases;
* descrição de imagens;
* narrativa;
* interação com personagens;
* pedidos e necessidades;
* conversas cotidianas;
* comandos para tecnologias;
* expressão de escolhas e preferências.

A adaptação ocorre em aspectos não clínicos:

* temas de interesse;
* personagens;
* cenários;
* duração das sessões;
* complexidade das instruções;
* tamanho das frases;
* quantidade de estímulos visuais;
* ritmo das atividades;
* preferências da criança;
* nível de fadiga;
* pontos de baixa confiança do ASR.

Esse modo não pode:

* diagnosticar;
* criar um plano terapêutico individual;
* afirmar que a fala está correta, incorreta, normal ou atrasada;
* prescrever exercícios clínicos específicos;
* emitir prognósticos;
* conceder alta;
* substituir avaliação profissional.

A principal função é estimular a comunicação e construir um ASR capaz de compreender progressivamente a criança.

### 4.2. Voz Assistida — supervisão em escala

Destinado a clínicas-escola, universidades, organizações sociais, escolas públicas, Centros Especializados em Reabilitação e projetos patrocinados.

Um fonoaudiólogo pode supervisionar grupos de crianças, enquanto a plataforma prioriza para revisão situações como:

* muitas falhas de reconhecimento;
* queda de engajamento;
* atividades repetidamente abandonadas;
* gravações de baixa qualidade;
* necessidade frequente de ajuda;
* mudanças relevantes no padrão de interação.

O objetivo é ampliar o alcance do profissional sem substituir sua atuação.

### 4.3. Voz Personalizada — acompanhamento individual

Destinado a crianças acompanhadas por um fonoaudiólogo.

O profissional pode:

* definir objetivos individuais;
* selecionar palavras, frases, sons e contextos;
* escolher atividades;
* controlar o nível de dificuldade;
* determinar pistas e feedbacks permitidos;
* acompanhar gravações;
* corrigir transcrições;
* aprovar exemplos para treinamento;
* revisar o progresso;
* ajustar o plano ao longo do tempo.

Fluxo:

```text
Fonoaudiólogo define os objetivos
              ↓
Plataforma monta as missões
              ↓
Criança pratica em casa
              ↓
ASR interpreta as tentativas
              ↓
Dados relevantes são organizados
              ↓
Profissional revisa os resultados
              ↓
Plano e modelo são atualizados
```

---

## 5. Continuidade entre os níveis

Os três níveis não devem funcionar como soluções isoladas.

A criança pode começar no modo gratuito, construir um histórico de comunicação e, posteriormente, ingressar em acompanhamento profissional.

```text
Modo gratuito
      ↓
Histórico de comunicação e preferências
      ↓
Família inicia atendimento
      ↓
Responsável autoriza acesso ao profissional
      ↓
Fonoaudiólogo revisa os dados
      ↓
Plano individual é criado
      ↓
Atividades passam a ser supervisionadas
```

O profissional pode aproveitar:

* modelo de voz personalizado;
* gravações autorizadas;
* atividades preferidas;
* domínios de maior participação;
* situações de falha do ASR;
* padrões de uso;
* histórico de engajamento.

Dados gerados antes do acompanhamento funcionam como contexto, não como diagnóstico clínico.

---

## 6. Diferença entre compreender e avaliar

A plataforma deve separar claramente dois objetivos.

### 6.1. Modo Comunicação

O objetivo é compreender o que a criança quis comunicar.

A produção não precisa corresponder à pronúncia padrão. O sistema busca reconhecer:

* palavra pretendida;
* comando;
* escolha;
* pedido;
* resposta;
* intenção comunicativa.

A métrica principal é:

> O sistema conseguiu compreender a intenção da criança?

### 6.2. Modo Prática

O objetivo é trabalhar uma habilidade definida pelo fonoaudiólogo.

O sistema pode acompanhar:

* produção de palavras selecionadas;
* estabilidade entre tentativas;
* extensão das frases;
* uso de determinado vocabulário;
* necessidade de pistas;
* realização em contextos diferentes;
* generalização para novas frases.

Somente a trilha profissional deve oferecer análise ligada a objetivos clínicos individuais.

Essa separação impede que toda interação seja tratada como teste de pronúncia e reconhece que a fala da criança pode ser válida para comunicação mesmo quando há habilidades específicas em desenvolvimento.

---

## 7. Gamificação e experiência infantil

A gamificação deve reduzir a sensação de coleta repetitiva.

A Self-Determination Theory pode ser traduzida em três princípios:

* **Autonomia:** escolha de personagens, cenários, histórias e ordem das missões.
* **Competência:** dificuldade gradual, progresso visível e feedback positivo.
* **Pertencimento:** missões com responsáveis, profissionais ou personagens recorrentes.

Exemplos:

* reconstruir uma cidade;
* ajudar personagens usando a voz;
* colecionar objetos;
* desbloquear capítulos;
* explorar ambientes;
* personalizar avatares;
* completar missões cooperativas;
* criar pequenas histórias.

A plataforma não deve:

* punir ausências;
* criar rankings públicos;
* comparar crianças;
* usar métricas de “normalidade” da fala;
* retirar recompensas de modo punitivo.

As sessões devem ser curtas, acessíveis e adaptadas ao nível de cansaço da criança.

---

## 8. Domínios comunicacionais

As atividades podem ser organizadas em:

* conversação;
* comunicação com cuidadores;
* assistentes e automação;
* situações escolares;
* pedidos e necessidades;
* narrativa;
* descrição;
* comunicação cotidiana;
* interação com tecnologias.

A seleção deve priorizar:

* simplicidade linguística;
* cobertura fonética;
* baixo esforço cognitivo;
* contexto funcional;
* diversidade lexical;
* interesse da criança.

---

## 9. Motor inteligente de atividades

A próxima missão pode ser escolhida considerando:

1. objetivo definido pelo profissional, quando houver;
2. fonemas pouco representados;
3. palavras de baixa confiança para o ASR;
4. interesse da criança;
5. repetição recente;
6. complexidade linguística;
7. duração da sessão;
8. fadiga e abandono;
9. equilíbrio entre domínios comunicacionais.

Fluxo conceitual:

```text
Objetivo profissional
        +
Lacuna fonética
        +
Incerteza do ASR
        +
Interesse da criança
        -
Repetição excessiva
        -
Fadiga
        ↓
Próxima missão
```

Exemplo:

* o ASR confunde duas palavras;
* o dataset possui poucos exemplos dessas palavras;
* a criança gosta de animais;
* o sistema cria uma missão com essas palavras em uma história sobre animais.

Assim, a coleta melhora o dataset sem parecer uma lista artificial.

---

## 10. Coleta e validação dos dados

Cada tentativa pode gerar:

* áudio;
* frase ou intenção esperada;
* domínio comunicacional;
* atividade;
* habilidade trabalhada;
* quantidade de ajuda;
* número da tentativa;
* transcrição do ASR;
* correção profissional ou confirmação do responsável;
* qualidade do sinal;
* versão do modelo;
* consentimento aplicável.

O sistema deve distinguir:

* **texto esperado:** o que a atividade solicitava;
* **fala interpretada:** o que a criança efetivamente produziu ou quis comunicar.

O responsável pode validar a intenção sem atuar como terapeuta.

Exemplo:

```text
O que a criança quis dizer?

[ Quero água ]
[ Quero brincar ]
[ Outra resposta ]
[ Não consegui identificar ]
```

Antes de entrar no treinamento, o áudio deve passar por verificações de:

* presença de fala;
* volume;
* cortes;
* ruído;
* duração;
* presença de outra pessoa;
* duplicação;
* coerência com o contexto;
* autorização válida.

Amostras incertas não devem ser descartadas automaticamente, pois podem ser úteis para personalização.

---

## 11. Arquitetura do ASR

A proposta não é treinar um ASR completamente do zero.

A arquitetura pode ter quatro níveis:

```text
Modelo pré-treinado em português
              ↓
Adaptação coletiva para fala não padrão
              ↓
Adaptador para características semelhantes
              ↓
Adaptador pessoal da criança
```

### 11.1. Modelo-base

Pode ser uma arquitetura baseada em Whisper, wav2vec2, XLS-R ou outro modelo compatível.

### 11.2. Adaptação coletiva

Treinada com dados autorizados de diferentes participantes, com o objetivo de melhorar o desempenho geral em fala não padrão em português brasileiro.

### 11.3. Adaptação por características

Especializa o modelo para grupos com características acústicas ou fonéticas semelhantes.

Os grupos não devem ser definidos apenas pelo diagnóstico, pois pessoas com a mesma condição podem apresentar padrões muito diferentes.

### 11.4. Adaptador pessoal

Treinado com gravações da própria criança.

Ele deve ser pequeno em relação ao modelo principal, permitindo atualizações periódicas e menor custo computacional.

---

## 12. Dois componentes de inteligência

É recomendável separar:

### ASR de compreensão

Busca transcrever ou identificar a intenção comunicativa.

### Avaliador da atividade

Analisa apenas a habilidade definida pelo profissional.

O ASR pode compreender corretamente uma palavra mesmo quando ainda existe uma característica trabalhada na prática. Comunicação e avaliação clínica são objetivos diferentes.

---

## 13. Uso da Psyche Network

A equipe pretende utilizar a **Psyche Network** como infraestrutura de treinamento distribuído. Em sua implementação descentralizada, a Psyche utiliza a **Solana** como camada de coordenação on-chain: o Coordinator mantém o estado da run, o Authorizer controla a entrada de clientes e carteiras identificam participantes.

A Psyche será utilizada nos ciclos de treinamento, não necessariamente durante a interação em tempo real.

```text
Gravações autorizadas
          ↓
Validação das amostras
          ↓
Criação de uma versão do dataset
          ↓
Execução distribuída na Psyche
          ↓
Coordenação da run na Solana
          ↓
Novo modelo ou adaptador
          ↓
Avaliação técnica
          ↓
Disponibilização no aplicativo
```

Participantes possíveis:

* universidades;
* hospitais;
* clínicas;
* centros de pesquisa;
* organizações sociais;
* empresas parceiras;
* provedores de infraestrutura autorizados.

Por envolver dados de crianças, os treinamentos devem ocorrer em runs privadas ou permissionadas.

Os clientes executam o processamento em GPUs independentes e trocam resultados pela rede peer-to-peer. Áudio, dataset e checkpoints não devem ser armazenados na Solana.

A equipe precisará adaptar a infraestrutura para ASR, incluindo:

* processamento de áudio;
* criação de batches;
* tokenização;
* função de perda;
* métricas WER e CER;
* checkpoints;
* integração com modelos de áudio;
* controle de acesso aos dados.

Essa integração deve ser apresentada como componente experimental e risco técnico reconhecido.

---

## 14. Papel da blockchain

A blockchain não armazena áudio. O diferencial central é usar a Psyche para descentralizar o treinamento, com participantes e etapas da run coordenados na Solana.

Existem duas responsabilidades complementares:

* **Psyche/Solana:** coordenação da run, autorização de clientes, estado do treinamento e contribuições computacionais;
* **governança da aplicação:** consentimento, proveniência, versões, revogação e financiamento social.

A camada de governança funciona como registro de:

* governança;
* consentimento;
* rastreabilidade;
* coordenação institucional;
* financiamento;
* auditoria do treinamento.

Pode registrar:

* versão do consentimento;
* finalidade autorizada;
* prazo;
* autorização para pesquisa;
* autorização comercial;
* instituições autorizadas;
* hash do dataset;
* versão do dataset;
* referência da run Psyche/Solana;
* participantes;
* configuração do treinamento;
* hash do modelo resultante;
* vínculo entre dataset e modelo;
* revogação;
* aplicações autorizadas;
* vagas patrocinadas.

Fluxo:

```text
Consentimentos
      ↓
Dados autorizados
      ↓
Dataset versionado
      ↓
Execução na Psyche
      ↓
Modelo resultante
      ↓
Aplicações autorizadas
```

A blockchain permite responder:

* Quem autorizou?
* Para qual finalidade?
* Qual instituição usou os dados?
* Em qual treinamento?
* Qual modelo foi produzido?
* O uso comercial era permitido?
* O consentimento continua ativo?
* Qual aplicação usa o modelo?

A necessidade da blockchain surge porque várias instituições e provedores de computação precisam treinar e governar modelos em conjunto sem que uma única empresa controle a infraestrutura ou altere todo o histórico.

---

## 15. Dados fora da blockchain

Devem ficar criptografados fora da rede:

* áudios;
* transcrições;
* nome;
* documentos;
* contatos;
* idade exata;
* informações clínicas;
* diagnóstico;
* adaptadores pessoais;
* prontuários;
* relatórios profissionais.

Na blockchain ficam apenas:

* hashes;
* identificadores pseudonimizados;
* estados de autorização;
* registros de acesso;
* referências a versões;
* vínculos entre datasets, treinamentos e modelos.

---

## 16. Consentimento

O consentimento deve ser granular.

O responsável pode autorizar separadamente:

* personalização para a própria criança;
* pesquisa acadêmica;
* treinamento coletivo;
* instituições específicas;
* uso comercial;
* armazenamento por prazo definido;
* compartilhamento com profissional;
* compartilhamento com serviços parceiros.

Usar o aplicativo não significa autorizar automaticamente pesquisa ou uso comercial.

Quando adequado, a criança também deve participar por meio de assentimento acessível.

A revogação bloqueia novos acessos e treinamentos futuros. O projeto deve reconhecer que não é simples remover a influência de um áudio de um modelo já treinado. Por isso, são necessários:

* versionamento;
* políticas de atualização;
* bloqueio de novas utilizações;
* eventual retirada de versões;
* possível retreinamento.

---

## 17. Acesso social e financiamento

A plataforma pode usar subsídio cruzado.

### Quem pode pagar

* clínicas particulares;
* profissionais;
* hospitais;
* empresas de tecnologia assistiva;
* planos de saúde;
* universidades;
* secretarias públicas;
* fundações;
* empresas patrocinadoras.

### Quem pode receber gratuitamente

* famílias de baixa renda;
* crianças em fila de espera;
* escolas;
* projetos sociais;
* usuários encaminhados;
* participantes de programas públicos;
* crianças incluídas em bolsas patrocinadas.

### Receitas possíveis

* assinatura do painel profissional;
* licenciamento institucional;
* implantação em redes públicas;
* API de ASR inclusivo;
* infraestrutura de treinamento;
* pesquisa;
* patrocínio de vagas;
* financiamento de modelos abertos;
* contratos com clínicas e universidades.

Os áudios brutos não devem ser vendidos.

---

## 18. Cotas sociais verificáveis

Empresas e fundações podem financiar vagas de supervisão profissional, infraestrutura ou treinamento.

A blockchain pode registrar, sem identificar a criança:

```text
Financiador
     ↓
Quantidade de vagas
     ↓
Instituição responsável
     ↓
Atividades ou revisões realizadas
     ↓
Resultados agregados
```

Isso aumenta a transparência do investimento social.

---

## 19. Beneficiários e parceiros

### Beneficiários

* crianças com fala não padrão;
* famílias;
* cuidadores;
* crianças sem acesso regular à fonoaudiologia.

### Parceiros e usuários institucionais

* fonoaudiólogos;
* clínicas;
* clínicas-escola;
* universidades;
* hospitais;
* escolas;
* organizações sociais;
* Centros Especializados em Reabilitação;
* secretarias de saúde e educação;
* pesquisadores;
* empresas de tecnologia assistiva;
* financiadores;
* provedores de computação.

---

## 20. Métricas de impacto

### 20.1. Acesso

* crianças no modo gratuito;
* vagas patrocinadas;
* municípios atendidos;
* encaminhamentos;
* instituições participantes;
* profissionais participantes;
* tempo até apoio profissional.

### 20.2. Engajamento

* sessões iniciadas;
* sessões concluídas;
* retenção;
* minutos de fala;
* gravações por sessão;
* abandono;
* frequência;
* retorno após falhas;
* diversidade de atividades.

### 20.3. Qualidade do dataset

* minutos válidos;
* diversidade fonética;
* diversidade lexical;
* equilíbrio entre domínios;
* qualidade do sinal;
* amostras revisadas;
* distribuição entre participantes;
* cobertura de contextos.

### 20.4. Desempenho do ASR

* WER;
* CER;
* acerto de intenção;
* desempenho por criança;
* diferença entre modelo-base e adaptado;
* ganho após personalização;
* áudio necessário para melhorar;
* redução de pedidos de repetição.

### 20.5. Apoio profissional

* atividades prescritas e realizadas;
* tempo economizado;
* crianças supervisionadas;
* amostras priorizadas;
* atualizações do plano;
* concordância entre avaliação automática e profissional.

A melhora do ASR não deve ser tratada automaticamente como melhora clínica.

---

## 21. MVP para o hackathon

O MVP pode conter quatro módulos.

### Aplicativo infantil

História curta com missões de voz, progressão e feedback visual.

### Painel profissional

Configuração de atividade, visualização de tentativas e correção de transcrições.

### Personalização do ASR

Comparação entre:

* modelo original;
* modelo coletivo;
* adaptador pessoal.

### Registro blockchain

Demonstra:

* consentimento;
* versão do dataset;
* referência da run Psyche/Solana;
* carteiras ou instituições participantes;
* modelo resultante;
* vaga social patrocinada.

Narrativa de demonstração:

1. Um ASR convencional não compreende corretamente o participante.
2. A criança realiza atividades gamificadas.
3. O responsável ou profissional valida algumas intenções.
4. O sistema organiza uma versão autorizada do dataset.
5. Participantes autorizados ingressam em uma run permissionada.
6. Um adaptador é treinado ou a etapa experimental é demonstrada com dados seguros.
7. O modelo personalizado é avaliado em novas frases.
8. O painel mostra a evolução técnica.
9. A Solana e a governança mostram o vínculo entre autorização, run e modelo.

Para o protótipo, podem ser usados dados simulados, áudios públicos compatíveis ou gravações de adultos voluntários.

---

## 22. Adequação aos critérios do hackathon

### Inovação

A solução integra:

* CAA como base de comunicação ampliada;
* prática de comunicação;
* coleta gamificada;
* ASR personalizado;
* treinamento distribuído pela Psyche;
* coordenação das runs na Solana;
* governança;
* financiamento social.

A blockchain coordena a run descentralizada e conecta consentimentos, datasets, execuções, modelos e financiadores sem armazenar a voz infantil.

### Escalabilidade

Pode ser utilizada por:

* famílias;
* clínicas;
* universidades;
* organizações sociais;
* redes públicas;
* empresas assistivas.

O modelo coletivo melhora à medida que novas instituições entram na rede.

### Impacto

Impactos esperados:

* maior autonomia comunicativa;
* menor frustração com tecnologias de voz;
* acesso gratuito a atividades;
* bases de voz mais representativas;
* melhor continuidade entre sessões;
* maior alcance de profissionais;
* tecnologias digitais mais inclusivas.

### Risco

Principais riscos:

* exposição de voz infantil;
* uso indevido;
* feedback clínico incorreto;
* substituição indevida do profissional;
* vieses;
* baixa qualidade dos áudios;
* dificuldade de integração com a Psyche;
* revogação após treinamento;
* risco reputacional;
* excesso de estímulos ou gamificação inadequada.

Mitigações:

* armazenamento fora da blockchain;
* criptografia;
* consentimento granular;
* runs permissionadas;
* conteúdo validado;
* separação entre acesso geral e cuidado clínico;
* supervisão profissional;
* auditoria;
* versionamento;
* métricas por pessoa e por grupo.

### Modelo de negócio

Sustentabilidade por:

* assinaturas profissionais;
* licenciamento institucional;
* APIs;
* contratos públicos;
* pesquisa;
* patrocínio;
* subsídio cruzado;
* financiamento de modelos abertos.

A criança é beneficiária; clientes e financiadores são instituições.

---

## 23. Síntese principal

> O projeto é uma plataforma acessível e gamificada de apoio à comunicação para crianças com fala não padrão. A solução incorpora princípios de CAA e usa missões de voz como uma possibilidade de interação, sem substituir outras formas de comunicação. Com consentimento, as atividades constroem progressivamente dados capazes de personalizar um ASR pré-treinado; não se pretende treinar um modelo do zero com a voz da criança. Quando existe acompanhamento fonoaudiológico, o profissional configura objetivos, atividades e feedbacks individuais. Quando não existe acesso ao profissional, a criança utiliza uma trilha gratuita de atividades gerais, seguras e previamente validadas, sem diagnóstico ou tratamento automático. A Psyche distribui experimentalmente o treinamento entre instituições autorizadas, com runs permissionadas coordenadas na Solana. Áudios e dados clínicos permanecem criptografados fora da blockchain, enquanto a governança vincula consentimentos, datasets, execuções, modelos, contribuições computacionais e vagas sociais. Assim, prática gera dados, dados melhoram a tecnologia e uma tecnologia mais inclusiva amplia a autonomia da criança.

---

## 24. Orientações para a IA

Ao auxiliar no desenvolvimento deste projeto:

* não apresente a solução como substituta de fonoaudiólogos;
* não trate CAA e ASR como sinônimos nem torne a voz o único meio de interação;
* diferencie estímulo geral, prática supervisionada e tratamento clínico;
* não proponha armazenamento de áudio ou diagnóstico na blockchain;
* trate voz infantil como dado altamente sensível;
* preserve o controle da família;
* priorize atividades curtas, acessíveis e não punitivas;
* não compare crianças;
* não use score de normalidade;
* não use uma duração fixa de áudio como requisito universal de personalização;
* diferencie pré-treinamento, adaptação coletiva e personalização individual;
* justifique a blockchain pela coordenação descentralizada na Psyche/Solana e pela governança multi-institucional;
* justifique a Psyche pelo treinamento distribuído entre GPUs independentes;
* reconheça que a integração entre Psyche e ASR é experimental;
* priorize um MVP pequeno, demonstrável e seguro;
* relacione decisões aos cinco critérios do hackathon;
* mantenha como foco a autonomia comunicativa, o acesso e o melhor interesse da criança;
* não trate melhora do ASR como equivalente automático a melhora clínica.

---

## 25. Fontes principais

* Proposta de Iniciação Científica: **Desenvolvimento e Avaliação de Mecanismos de Gamificação para Engajamento na Coleta de Dados de Voz em Interfaces Acessíveis**.
* Youth Challenge Blockchain: https://www.youthchallengeblockchain.com/
* Psyche Network: https://psyche.network/
* Documentação da Psyche: https://docs.psyche.network/
* Arquitetura descentralizada da Psyche: https://docs.psyche.network/explain/index.html
* Execução da Psyche na Solana: https://docs.psyche.network/development/running-onchain.html
* Whisper: https://arxiv.org/abs/2212.04356
* wav2vec 2.0: https://arxiv.org/abs/2006.11477
* IBGE — pessoas com deficiência: https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/43463-censo-2022-brasil-tem-14-4-milhoes-de-pessoas-com-deficiencia
* IBGE — pessoas diagnosticadas com autismo: https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/43464-censo-2022-identifica-2-4-milhoes-de-pessoas-diagnosticadas-com-autismo-no-brasil
