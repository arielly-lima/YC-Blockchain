import React, {useEffect, useMemo, useRef, useState} from 'react';
import styles from './app.module.css';

const STEPS = [
  {short: 'Login', title: 'Acesso por perfil', group: 'Entrada'},
  {short: 'Problema', title: 'Falha do modelo-base', group: 'Entrada'},
  {short: 'Consentir', title: 'Consentimento', group: 'Responsável'},
  {short: 'Início', title: 'Início da criança', group: 'Criança'},
  {short: 'Missão', title: 'Introdução da missão', group: 'Criança'},
  {short: 'Gravar', title: 'Gravação de voz', group: 'Criança'},
  {short: 'Feedback', title: 'Resultado e feedback', group: 'Criança'},
  {short: 'Intenção', title: 'Confirmação da intenção', group: 'Responsável'},
  {short: 'Painel', title: 'Dashboard profissional', group: 'Profissional'},
  {short: 'Revisar', title: 'Revisão da amostra', group: 'Profissional'},
  {short: 'Comparar', title: 'ASR antes e depois', group: 'Tecnologia'},
  {short: 'Auditar', title: 'Proveniência blockchain', group: 'Tecnologia'},
  {short: 'Família', title: 'Painel do responsável', group: 'Responsável'},
];

const DEMO_USERS = {
  child: {
    name: 'Lia',
    roleLabel: 'Criança',
    credential: '1234',
    home: 3,
  },
  guardian: {
    name: 'Renata Martins',
    roleLabel: 'Responsável',
    email: 'renata@demo.ecoa',
    credential: 'demo123',
    home: 12,
  },
  professional: {
    name: 'Dr. Rafael Freitas',
    roleLabel: 'Fonoaudiólogo',
    email: 'rafael@demo.ecoa',
    credential: 'demo123',
    home: 1,
  },
};

const ROLE_FLOWS = {
  child: [3, 4, 5, 6],
  guardian: [12, 2, 7],
  professional: [1, 8, 9, 10],
};

const CHILD_MISSIONS = {
  water: {
    id: 'water',
    chapter: 'CAPÍTULO 1',
    title: 'A sede da Lumi',
    description: 'Ajude a Lumi a encontrar o que precisa para chegar ao lago.',
    question: 'O que a Lumi precisa?',
    clue: 'A Lumi caminhou muito e está com sede.',
    spokenInstruction: 'A Lumi está com sede. Selecione o que ela precisa.',
    phrase: 'Quero água',
    correctId: 'water',
    choices: [
      {id: 'water', emoji: '💧', label: 'Água'},
      {id: 'snack', emoji: '🍎', label: 'Lanche'},
      {id: 'book', emoji: '📚', label: 'Livro'},
      {id: 'ball', emoji: '⚽', label: 'Bola'},
    ],
    rewardEmoji: '💧',
    reward: 'Amiga da água',
    completion: 'Você ajudou a Lumi a pedir água.',
  },
  school: {
    id: 'school',
    chapter: 'CAPÍTULO 2',
    title: 'A mochila da Lumi',
    description: 'A aula vai começar. Ajude a Lumi a preparar a mochila.',
    question: 'O que a Lumi leva para escrever?',
    clue: 'Na escola, a Lumi precisa desenhar e escrever.',
    spokenInstruction:
      'A Lumi vai para a escola. Selecione o que ela pode usar para escrever.',
    phrase: 'Quero meu caderno',
    correctId: 'notebook',
    choices: [
      {id: 'notebook', emoji: '📓', label: 'Caderno'},
      {id: 'ball', emoji: '⚽', label: 'Bola'},
      {id: 'cup', emoji: '🥤', label: 'Copo'},
      {id: 'shoe', emoji: '👟', label: 'Tênis'},
    ],
    rewardEmoji: '📓',
    reward: 'Exploradora da escola',
    completion: 'Você ajudou a Lumi a preparar a mochila.',
  },
};

const INITIAL_MISSION_DRAFT = {
  title: 'O passeio no parque',
  description: 'Ajude a Lumi a escolher o que fazer durante o passeio.',
  question: 'Onde a Lumi quer brincar?',
  clue: 'A Lumi quer brincar ao ar livre, perto das árvores.',
  phrase: 'Quero brincar no parque',
  reward: 'Amiga do parque',
  choices: [
    {id: 'option-1', emoji: '🌳', label: 'Parque'},
    {id: 'option-2', emoji: '🏠', label: 'Casa'},
    {id: 'option-3', emoji: '🏫', label: 'Escola'},
    {id: 'option-4', emoji: '🛒', label: 'Mercado'},
  ],
  correctId: 'option-1',
};

const ICONS = {
  arrow:
    'M5 12h14M13 6l6 6-6 6',
  back:
    'M19 12H5m6 6-6-6 6-6',
  child:
    'M9 7a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM5 21v-2a7 7 0 0 1 14 0v2M8 3l1.5 2M16 3l-1.5 2',
  user:
    'M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM5 21a7 7 0 0 1 14 0',
  doctor:
    'M8 3v4a4 4 0 0 0 8 0V3M5 3h6M13 3h6M12 11v3a5 5 0 0 0 10 0v-1',
  shield:
    'M12 3 4.5 6v5.5c0 4.6 3.2 7.7 7.5 9.5 4.3-1.8 7.5-4.9 7.5-9.5V6L12 3Zm-3 9 2 2 4-4',
  lock:
    'M7 10V8a5 5 0 0 1 10 0v2M5 10h14v11H5V10Zm7 4v3',
  play:
    'M8 5v14l11-7L8 5Z',
  pause:
    'M9 5v14M15 5v14',
  mic:
    'M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Zm-7 9a7 7 0 0 0 14 0M12 19v3M9 22h6',
  heart:
    'M20.8 5.8a5.4 5.4 0 0 0-7.6 0L12 7l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 22l8.8-8.6a5.4 5.4 0 0 0 0-7.6Z',
  sparkle:
    'm12 3 1.4 4.1L17.5 9l-4.1 1.4L12 14.5l-1.4-4.1L6.5 9l4.1-1.9L12 3Zm7 11 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14ZM5 14l1 2.8L9 18l-3 1.2L5 22l-1-2.8L1 18l3-1.2L5 14Z',
  home:
    'm3 11 9-8 9 8v10h-6v-7H9v7H3V11Z',
  clock:
    'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-16v6l4 2',
  volume:
    'M11 5 6 9H2v6h4l5 4V5Zm4 4a4 4 0 0 1 0 6M18 6a8 8 0 0 1 0 12',
  settings:
    'M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0-12v2m0 13v2m8.5-8.5h-2m-13 0h-2m14.5-6-1.4 1.4M7.4 16.6 6 18m12 0-1.4-1.4M7.4 7.4 6 6',
  check:
    'm5 12 4 4L19 6',
  close:
    'M6 6l12 12M18 6 6 18',
  database:
    'M20 6c0 2.2-3.6 4-8 4S4 8.2 4 6s3.6-4 8-4 8 1.8 8 4Zm0 0v6c0 2.2-3.6 4-8 4s-8-1.8-8-4V6m16 6v6c0 2.2-3.6 4-8 4s-8-1.8-8-4v-6',
  brain:
    'M9.5 4.5A3.5 3.5 0 0 0 6 8v.4A3.5 3.5 0 0 0 5 15v.5A3.5 3.5 0 0 0 11.5 17V5.5a3 3 0 0 0-2-1Zm5 0A3.5 3.5 0 0 1 18 8v.4a3.5 3.5 0 0 1 1 6.6v.5A3.5 3.5 0 0 1 12.5 17V5.5a3 3 0 0 1 2-1Z',
  chain:
    'M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7',
  file:
    'M6 2h8l4 4v16H6V2Zm8 0v5h5M9 13h6M9 17h6',
  wave:
    'M3 12h2l2-7 3 14 3-11 2 8 2-4h4',
  chart:
    'M4 20V10m6 10V4m6 16v-7m5 7H2',
  eye:
    'M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
};

function Icon({name, size = 20, strokeWidth = 1.8}) {
  return (
    <svg
      aria-hidden="true"
      className={styles.icon}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}>
      <path
        d={ICONS[name]}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

function Mascot({className = '', alt = 'Lumi, mascote do Ecoa'}) {
  const mascotUrl = `${import.meta.env.BASE_URL}mascote.png`;
  return (
    <div className={`${styles.mascotFrame} ${className}`}>
      <img alt={alt} className={styles.mascotImage} src={mascotUrl} />
    </div>
  );
}

function BrandMark() {
  const iconUrl = `${import.meta.env.BASE_URL}ecoa-icon.png`;
  return (
    <span aria-hidden="true" className={styles.brandMark}>
      <img alt="" className={styles.brandMarkImage} src={iconUrl} />
    </span>
  );
}

function Tag({children, tone = 'blue'}) {
  return <span className={`${styles.tag} ${styles[`tag${tone}`]}`}>{children}</span>;
}

function Waveform({active = false, compact = false}) {
  const bars = useMemo(
    () => [12, 21, 16, 30, 24, 38, 18, 32, 44, 23, 35, 17, 29, 39, 20, 31, 14, 25, 18],
    [],
  );

  return (
    <div
      aria-label={active ? 'Gravação em andamento' : 'Representação do áudio'}
      className={`${styles.waveform} ${active ? styles.waveformActive : ''} ${
        compact ? styles.waveformCompact : ''
      }`}>
      {bars.map((height, index) => (
        <span key={index} style={{height: `${height}px`, animationDelay: `${index * 45}ms`}} />
      ))}
    </div>
  );
}

function Toggle({checked, label, description, onChange}) {
  return (
    <button
      aria-pressed={checked}
      className={styles.toggleRow}
      onClick={onChange}
      type="button">
      <span>
        <strong>{label}</strong>
        <small>{description}</small>
      </span>
      <span className={`${styles.switch} ${checked ? styles.switchOn : ''}`}>
        <span />
      </span>
    </button>
  );
}

function Metric({label, value, helper, tone = 'blue'}) {
  return (
    <article className={`${styles.metric} ${styles[`metric${tone}`]}`}>
      <span>{label}</span>
      <strong>{value}</strong>
      {helper && <small>{helper}</small>}
    </article>
  );
}

function LandingPage({onEnter}) {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <div className={styles.landingPage}>
      <nav aria-label="Navegação principal" className={styles.landingNav}>
        <button className={styles.landingBrand} onClick={scrollToTop} type="button">
          <BrandMark />
          <span>
            <strong>ECOA</strong>
            <small>tecnologia que escuta</small>
          </span>
        </button>

        <div className={styles.landingNavLinks}>
          <a href="#como-funciona">Como funciona</a>
          <a href="#ia-distribuida">IA distribuída</a>
          <a href="#blockchain">Blockchain</a>
          <a href="#diferenciais">Diferenciais</a>
          <button onClick={onEnter} type="button">
            Entrar na plataforma
            <Icon name="arrow" size={17} />
          </button>
        </div>
      </nav>

      <main>
        <section className={styles.landingHero}>
          <div className={styles.landingHeroCopy}>
            <span className={styles.landingKicker}>
              <Icon name="sparkle" size={18} />
              Comunicação acessível para cada criança
            </span>
            <h1>
              Uma tecnologia que aprende a compreender <em>cada voz.</em>
            </h1>
            <p>
              A Ecoa transforma atividades de fala em missões divertidas e usa cada
              interação autorizada para tornar o reconhecimento de voz mais inclusivo e
              personalizado.
            </p>
            <div className={styles.landingHeroActions}>
              <button onClick={onEnter} type="button">
                Conhecer a plataforma
                <Icon name="arrow" />
              </button>
              <a href="#como-funciona">Entender como funciona</a>
            </div>
            <div className={styles.landingTrust}>
              <span>
                <Icon name="play" size={16} />
                Missões gamificadas
              </span>
              <span>
                <Icon name="shield" size={16} />
                Consentimento em primeiro lugar
              </span>
              <span>
                <Icon name="brain" size={16} />
                ASR personalizado
              </span>
            </div>
          </div>

          <div aria-label="Lumi apresenta a Ecoa" className={styles.landingHeroVisual}>
            <span className={styles.landingSparkleOne}>✦</span>
            <span className={styles.landingSparkleTwo}>✦</span>
            <div className={styles.landingFloatCard}>
              <Icon name="heart" size={19} />
              <span>
                <strong>Sem punições</strong>
                <small>Aprender no próprio ritmo</small>
              </span>
            </div>
            <Mascot className={styles.landingMascot} />
            <div className={styles.landingVoiceCard}>
              <span className={styles.landingVoiceIcon}>
                <Icon name="mic" size={19} />
              </span>
              <span>
                <strong>“Quero água”</strong>
                <small>Intenção compreendida</small>
              </span>
              <Icon name="check" size={20} />
            </div>
          </div>
        </section>

        <section className={styles.landingProblemSection}>
          <header className={styles.landingSectionHeader}>
            <span>POR QUE A ECOA EXISTE</span>
            <h2>A comunicação não deveria depender de uma fala padrão.</h2>
            <p>
              Modelos convencionais podem falhar com vozes infantis e falas atípicas. A
              Ecoa cria uma jornada segura para que a tecnologia se adapte à criança.
            </p>
          </header>
          <div className={styles.landingProblemGrid}>
            <article className={styles.landingProblemCard}>
              <span>
                <Icon name="close" />
              </span>
              <div>
                <small>HOJE</small>
                <h3>A criança precisa se adaptar à tecnologia.</h3>
                <p>
                  Falhas de reconhecimento geram frustração e podem interromper tentativas
                  importantes de comunicação.
                </p>
              </div>
            </article>
            <article className={styles.landingSolutionCard}>
              <span>
                <Icon name="check" />
              </span>
              <div>
                <small>COM A ECOA</small>
                <h3>A tecnologia aprende a reconhecer a criança.</h3>
                <p>
                  Missões contextualizadas geram amostras validadas, com autorização e
                  acompanhamento profissional.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.landingHowSection} id="como-funciona">
          <header className={styles.landingSectionHeader}>
            <span>COMO FUNCIONA</span>
            <h2>Uma jornada simples, lúdica e colaborativa.</h2>
          </header>
          <div className={styles.landingSteps}>
            <article>
              <span className={styles.landingStepNumber}>1</span>
              <div className={styles.landingStepIcon}>
                <Icon name="play" size={27} />
              </div>
              <h3>A criança joga e fala</h3>
              <p>Ela completa missões gamificadas e grava frases em situações do dia a dia.</p>
            </article>
            <article>
              <span className={styles.landingStepNumber}>2</span>
              <div className={styles.landingStepIcon}>
                <Icon name="doctor" size={27} />
              </div>
              <h3>O profissional acompanha</h3>
              <p>Cria missões, revisa amostras e confirma a intenção comunicada.</p>
            </article>
            <article>
              <span className={styles.landingStepNumber}>3</span>
              <div className={styles.landingStepIcon}>
                <Icon name="brain" size={27} />
              </div>
              <h3>A tecnologia aprende</h3>
              <p>O reconhecimento evolui com dados autorizados e validados para aquela voz.</p>
            </article>
          </div>
        </section>

        <section className={styles.landingAiSection} id="ia-distribuida">
          <div className={styles.landingAiInner}>
            <header className={styles.landingAiHeader}>
              <div>
                <span className={styles.landingAiKicker}>
                  <Icon name="brain" size={18} />
                  TREINAMENTO DISTRIBUÍDO DE IA
                </span>
                <h2>Uma IA mais inclusiva, treinada de forma descentralizada.</h2>
              </div>
              <div>
                <p>
                  Em vez de concentrar todo o processo em uma única organização, a Ecoa
                  propõe ciclos privados e permissionados de treinamento entre participantes
                  autorizados, usando a Psyche Network como infraestrutura experimental.
                </p>
                <span className={styles.landingAiStatus}>
                  <Icon name="sparkle" size={16} />
                  Arquitetura experimental do MVP
                </span>
              </div>
            </header>

            <div className={styles.landingAiArchitecture}>
              <article className={styles.landingAiNetwork}>
                <div className={styles.landingAiCardHeader}>
                  <span>
                    <Icon name="chain" size={20} />
                  </span>
                  <div>
                    <small>REDE DE COLABORAÇÃO</small>
                    <h3>Quem pode participar?</h3>
                  </div>
                </div>

                <div className={styles.landingAiNodes}>
                  <div>
                    <span>
                      <Icon name="doctor" size={20} />
                    </span>
                    <strong>Clínicas</strong>
                  </div>
                  <div>
                    <span>
                      <Icon name="file" size={20} />
                    </span>
                    <strong>Universidades</strong>
                  </div>
                  <div>
                    <span>
                      <Icon name="database" size={20} />
                    </span>
                    <strong>Computação</strong>
                  </div>
                </div>

                <div className={styles.landingAiHub}>
                  <span>
                    <Icon name="brain" size={31} />
                  </span>
                  <div>
                    <small>PSYCHE NETWORK</small>
                    <strong>Run privado ou permissionado</strong>
                  </div>
                </div>

                <p>
                  Chaves separadas, acesso mínimo e participantes autorizados evitam que uma
                  única instituição controle sozinha todo o treinamento.
                </p>
              </article>

              <article className={styles.landingAiPipeline}>
                <div className={styles.landingAiCardHeader}>
                  <span>
                    <Icon name="settings" size={20} />
                  </span>
                  <div>
                    <small>PIPELINE DOCUMENTADO</small>
                    <h3>Como o modelo evolui?</h3>
                  </div>
                </div>

                <div className={styles.landingAiFlow}>
                  {[
                    ['database', 'Amostras autorizadas', 'Somente finalidades consentidas'],
                    ['file', 'Dataset versionado', 'Integridade e origem verificáveis'],
                    ['chain', 'Treinamento distribuído', 'Run privado ou permissionado'],
                    ['brain', 'Modelo ou adaptador', 'Nova versão vinculada ao dataset'],
                    ['chart', 'Avaliação técnica', 'Comparação de métricas do ASR'],
                    ['shield', 'Uso controlado', 'Disponibilização conforme autorização'],
                  ].map(([icon, title, description], index) => (
                    <div className={styles.landingAiFlowItem} key={title}>
                      <span className={styles.landingAiFlowNumber}>{index + 1}</span>
                      <span className={styles.landingAiFlowIcon}>
                        <Icon name={icon} size={18} />
                      </span>
                      <div>
                        <strong>{title}</strong>
                        <small>{description}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <div className={styles.landingAiModelPath}>
              <div>
                <small>ADAPTAÇÃO EM CAMADAS</small>
                <strong>Do português geral até a voz de cada criança</strong>
              </div>
              <div className={styles.landingAiModelSteps}>
                <span>Modelo em português</span>
                <Icon name="arrow" size={16} />
                <span>Adaptação coletiva</span>
                <Icon name="arrow" size={16} />
                <span>Características acústicas</span>
                <Icon name="arrow" size={16} />
                <span>Adaptador pessoal</span>
              </div>
            </div>

            <div className={styles.landingAiNotice}>
              <Icon name="shield" size={22} />
              <p>
                <strong>O que a descentralização não muda:</strong> áudios e dados pessoais
                continuam criptografados fora da blockchain. A integração entre Psyche e ASR
                ainda precisa validar áudio, tokenização, métricas, checkpoints e controle de
                acesso antes do uso com dados infantis reais.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.landingBlockchainSection} id="blockchain">
          <div className={styles.landingBlockchainCopy}>
            <span className={styles.landingBlockchainKicker}>
              <Icon name="chain" size={18} />
              BLOCKCHAIN NA ECOA
            </span>
            <h2>Uma camada de confiança, não um depósito de dados.</h2>
            <p>
              A blockchain cria uma prova verificável da jornada de cada amostra. Assim,
              conseguimos demonstrar quando houve consentimento, validação profissional e
              atualização do modelo sem expor a voz ou a identidade da criança.
            </p>
            <div className={styles.landingBlockchainAssurance}>
              <Icon name="shield" size={22} />
              <div>
                <strong>Privacidade desde a origem</strong>
                <small>
                  Nenhum áudio, nome ou transcrição sensível é publicado na blockchain.
                </small>
              </div>
            </div>
          </div>

          <div
            aria-label="Fluxo de proteção e verificação dos dados"
            className={styles.landingBlockchainDiagram}>
            <article className={styles.landingDataCard}>
              <span>
                <Icon name="lock" size={24} />
              </span>
              <div>
                <small>ARMAZENAMENTO PROTEGIDO</small>
                <h3>Dados off-chain</h3>
                <p>Áudio, identidade e transcrições permanecem em ambiente privado.</p>
              </div>
              <Tag tone="purple">Criptografado</Tag>
            </article>

            <div className={styles.landingBlockchainConnector}>
              <span />
              <div>
                <Icon name="file" size={18} />
                Gera um hash único
              </div>
              <span />
            </div>

            <article className={styles.landingProofCard}>
              <span>
                <Icon name="chain" size={24} />
              </span>
              <div>
                <small>PROVA DE INTEGRIDADE</small>
                <h3>Registro on-chain</h3>
                <p>Somente evidências verificáveis são registradas na rede.</p>
              </div>
              <div className={styles.landingProofItems}>
                <span>
                  <Icon name="check" size={15} />
                  Hash da amostra
                </span>
                <span>
                  <Icon name="check" size={15} />
                  Status do consentimento
                </span>
                <span>
                  <Icon name="check" size={15} />
                  Validação profissional
                </span>
                <span>
                  <Icon name="check" size={15} />
                  Versão do modelo
                </span>
              </div>
            </article>
          </div>

          <div className={styles.landingBlockchainResult}>
            <span>
              <Icon name="check" size={18} />
            </span>
            <p>
              <strong>Resultado:</strong> qualquer alteração pode ser identificada e a
              proveniência dos dados pode ser comprovada do consentimento à evolução do ASR.
            </p>
          </div>
        </section>

        <section className={styles.landingFeaturesSection} id="diferenciais">
          <div className={styles.landingFeatureIntro}>
            <span>FEITA PARA GERAR IMPACTO</span>
            <h2>Mais autonomia para a criança. Mais contexto para quem cuida.</h2>
            <p>
              Criança, família e profissional participam da mesma jornada com experiências
              adequadas para cada perfil.
            </p>
            <button onClick={onEnter} type="button">
              Explorar a demonstração
              <Icon name="arrow" />
            </button>
          </div>
          <div className={styles.landingFeatures}>
            <article>
              <span>
                <Icon name="sparkle" />
              </span>
              <h3>Experiência gamificada</h3>
              <p>Desafios visuais, recompensas e feedback positivo incentivam a participação.</p>
            </article>
            <article>
              <span>
                <Icon name="shield" />
              </span>
              <h3>Consentimento e controle</h3>
              <p>A família decide como as amostras podem ser usadas e acompanhadas.</p>
            </article>
            <article>
              <span>
                <Icon name="chart" />
              </span>
              <h3>Evolução visível</h3>
              <p>Profissionais comparam resultados e acompanham a jornada da criança.</p>
            </article>
            <article>
              <span>
                <Icon name="chain" />
              </span>
              <h3>Dados rastreáveis</h3>
              <p>Autorizações e versões ficam verificáveis, sem expor o áudio na blockchain.</p>
            </article>
          </div>
        </section>

        <section className={styles.landingCta}>
          <Mascot className={styles.landingCtaMascot} />
          <div>
            <span>DEMONSTRAÇÃO INTERATIVA</span>
            <h2>Pronto para ouvir a tecnologia aprendendo?</h2>
            <p>Entre como criança, responsável ou profissional e percorra a experiência completa.</p>
          </div>
          <button onClick={onEnter} type="button">
            Acessar a Ecoa
            <Icon name="arrow" />
          </button>
        </section>
      </main>

      <footer className={styles.landingFooter}>
        <button className={styles.landingBrand} onClick={scrollToTop} type="button">
          <BrandMark />
          <span>
            <strong>ECOA</strong>
            <small>tecnologia que escuta</small>
          </span>
        </button>
        <p>Uma experiência demonstrativa de tecnologia assistiva e voz personalizada.</p>
        <small>Ecoa · Projeto para hackathon</small>
      </footer>
    </div>
  );
}

export default function DemoApp() {
  const [showLanding, setShowLanding] = useState(
    () => window.location.hash !== '#app',
  );
  const [step, setStep] = useState(0);
  const [selectedRole, setSelectedRole] = useState('child');
  const [authPhase, setAuthPhase] = useState('profiles');
  const [session, setSession] = useState(null);
  const [loginError, setLoginError] = useState('');
  const [email, setEmail] = useState(DEMO_USERS.guardian.email);
  const [password, setPassword] = useState('demo123');
  const [pin, setPin] = useState('1234');
  const [childTab, setChildTab] = useState('home');
  const [activeMission, setActiveMission] = useState('water');
  const [completedMissions, setCompletedMissions] = useState(['water']);
  const [professionalView, setProfessionalView] = useState('dashboard');
  const [professionalPreview, setProfessionalPreview] = useState(false);
  const [missionDraft, setMissionDraft] = useState(INITIAL_MISSION_DRAFT);
  const [customMissions, setCustomMissions] = useState(() => {
    try {
      return JSON.parse(window.localStorage.getItem('ecoa:missions') || '{}');
    } catch {
      return {};
    }
  });
  const [assignedMissions, setAssignedMissions] = useState(() => {
    try {
      return JSON.parse(
        window.localStorage.getItem('ecoa:assigned-missions') || '["water","school"]',
      );
    } catch {
      return ['water', 'school'];
    }
  });
  const [missionChoice, setMissionChoice] = useState('');
  const [choiceFeedback, setChoiceFeedback] = useState('idle');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordSeconds, setRecordSeconds] = useState(0);
  const [hasRecording, setHasRecording] = useState(false);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState('');
  const [recordingMode, setRecordingMode] = useState('ready');
  const [selectedIntent, setSelectedIntent] = useState('Quero água');
  const [sampleApproved, setSampleApproved] = useState(false);
  const [consents, setConsents] = useState({
    personalize: true,
    professional: true,
    research: true,
    collective: false,
    commercial: false,
  });
  const timerRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const audioChunksRef = useRef([]);
  const missionCatalog = useMemo(
    () => ({...CHILD_MISSIONS, ...customMissions}),
    [customMissions],
  );
  const visibleSteps = useMemo(
    () =>
      professionalPreview
        ? [4, 5, 6]
        : session
          ? ROLE_FLOWS[session.role]
          : [0],
    [professionalPreview, session],
  );

  useEffect(() => {
    const syncRoute = () => {
      setShowLanding(window.location.hash !== '#app');
    };

    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  useEffect(() => {
    if (!isRecording) {
      return undefined;
    }

    timerRef.current = window.setInterval(() => {
      setRecordSeconds((current) => current + 1);
    }, 1000);

    return () => window.clearInterval(timerRef.current);
  }, [isRecording]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setStep((current) => {
          const currentIndex = visibleSteps.indexOf(current);
          return visibleSteps[Math.min(visibleSteps.length - 1, currentIndex + 1)];
        });
      }
      if (event.key === 'ArrowLeft') {
        setStep((current) => {
          const currentIndex = visibleSteps.indexOf(current);
          return visibleSteps[Math.max(0, currentIndex - 1)];
        });
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [visibleSteps]);

  useEffect(
    () => () => {
      if (recordedAudioUrl) {
        URL.revokeObjectURL(recordedAudioUrl);
      }
      mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
    },
    [recordedAudioUrl],
  );

  useEffect(() => {
    window.localStorage.setItem('ecoa:missions', JSON.stringify(customMissions));
  }, [customMissions]);

  useEffect(() => {
    window.localStorage.setItem(
      'ecoa:assigned-missions',
      JSON.stringify(assignedMissions),
    );
  }, [assignedMissions]);

  const goTo = (nextStep) => {
    setStep(Math.max(0, Math.min(STEPS.length - 1, nextStep)));
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const openPlatform = () => {
    setSession(null);
    setSelectedRole('child');
    setAuthPhase('profiles');
    setLoginError('');
    setProfessionalPreview(false);
    setStep(0);
    window.location.hash = 'app';
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const startRecording = async () => {
    setRecordSeconds(0);
    setHasRecording(false);
    setRecordingMode('requesting');
    if (recordedAudioUrl) {
      URL.revokeObjectURL(recordedAudioUrl);
      setRecordedAudioUrl('');
    }

    try {
      if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
        throw new Error('Captura de áudio não disponível');
      }
      const stream = await navigator.mediaDevices.getUserMedia({audio: true});
      const recorder = new MediaRecorder(stream);
      mediaStreamRef.current = stream;
      mediaRecorderRef.current = recorder;
      audioChunksRef.current = [];
      recorder.addEventListener('dataavailable', (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      });
      recorder.addEventListener('stop', () => {
        if (audioChunksRef.current.length > 0) {
          const audioBlob = new Blob(audioChunksRef.current, {
            type: recorder.mimeType || 'audio/webm',
          });
          setRecordedAudioUrl(URL.createObjectURL(audioBlob));
        }
        setHasRecording(true);
      });
      recorder.start();
      setRecordingMode('real');
      setIsRecording(true);
    } catch {
      setRecordingMode('simulated');
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    window.clearInterval(timerRef.current);
    if (mediaRecorderRef.current?.state === 'recording') {
      mediaRecorderRef.current.stop();
    } else {
      setHasRecording(true);
    }
    mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
    setIsRecording(false);
    if (recordSeconds === 0) {
      setRecordSeconds(1);
    }
  };

  const selectLoginRole = (roleId) => {
    setSelectedRole(roleId);
    setLoginError('');
    setAuthPhase('credentials');
    if (DEMO_USERS[roleId].email) {
      setEmail(DEMO_USERS[roleId].email);
    }
    setPassword('demo123');
    setPin('1234');
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const user = DEMO_USERS[selectedRole];
    const validCredential =
      selectedRole === 'child'
        ? pin === user.credential
        : email === user.email && password === user.credential;

    if (!validCredential) {
      setLoginError('Confira os dados de demonstração e tente novamente.');
      return;
    }

    setSession({...user, role: selectedRole});
    setChildTab('home');
    setProfessionalView('dashboard');
    setProfessionalPreview(false);
    setLoginError('');
    goTo(user.home);
  };

  const logout = () => {
    if (isRecording) {
      stopRecording();
    }
    setSession(null);
    setAuthPhase('profiles');
    setProfessionalView('dashboard');
    setProfessionalPreview(false);
    setStep(0);
  };

  const toggleConsent = (key) => {
    setConsents((current) => ({...current, [key]: !current[key]}));
  };

  const playInstruction = () => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const instruction = new SpeechSynthesisUtterance(
      missionCatalog[activeMission].spokenInstruction,
    );
    instruction.lang = 'pt-BR';
    instruction.rate = 0.9;
    window.speechSynthesis.speak(instruction);
  };

  const startChildMission = (missionId) => {
    setActiveMission(missionId);
    setMissionChoice('');
    setChoiceFeedback('idle');
    setHasRecording(false);
    setRecordSeconds(0);
    setRecordingMode('ready');
    goTo(4);
  };

  const updateMissionDraft = (field, value) => {
    setMissionDraft((current) => ({...current, [field]: value}));
  };

  const updateDraftChoice = (index, field, value) => {
    setMissionDraft((current) => ({
      ...current,
      choices: current.choices.map((choice, choiceIndex) =>
        choiceIndex === index ? {...choice, [field]: value} : choice,
      ),
    }));
  };

  const previewMissionAsChild = (missionId) => {
    setProfessionalPreview(true);
    startChildMission(missionId);
  };

  const saveAndPreviewMission = (event) => {
    event.preventDefault();
    const missionId = `custom-${Date.now()}`;
    const selectedChoice =
      missionDraft.choices.find((choice) => choice.id === missionDraft.correctId) ||
      missionDraft.choices[0];
    const newMission = {
      ...missionDraft,
      id: missionId,
      chapter: 'MISSÃO DO PROFISSIONAL',
      spokenInstruction: `${missionDraft.clue} Selecione ${selectedChoice.label}.`,
      rewardEmoji: selectedChoice.emoji,
      completion: `Você ajudou a Lumi: ${missionDraft.phrase.toLowerCase()}.`,
      professional: true,
    };
    setCustomMissions((current) => ({...current, [missionId]: newMission}));
    setActiveMission(missionId);
    setProfessionalPreview(true);
    setMissionChoice('');
    setChoiceFeedback('idle');
    setHasRecording(false);
    setRecordSeconds(0);
    setRecordingMode('ready');
    goTo(4);
  };

  const exitProfessionalPreview = () => {
    setProfessionalPreview(false);
    setProfessionalView('dashboard');
    goTo(8);
  };

  const roleOptions = [
    {
      id: 'child',
      icon: 'child',
      title: 'Sou criança',
      description: 'Quero começar uma aventura com a Lumi.',
      color: 'sky',
    },
    {
      id: 'guardian',
      icon: 'heart',
      title: 'Sou responsável',
      description: 'Acompanho atividades e cuido das permissões.',
      color: 'light',
    },
    {
      id: 'professional',
      icon: 'doctor',
      title: 'Sou profissional',
      description: 'Planejo missões e reviso amostras.',
      color: 'deep',
    },
  ];

  const renderProfileSelection = () => (
    <div className={styles.profileScreen}>
      <section className={styles.profileIntro}>
        <div>
          <Tag tone="light">Bem-vindo ao Ecoa</Tag>
          <h1>Toda voz merece ser compreendida.</h1>
          <p>
            Histórias curtas que ajudam a tecnologia a aprender, com cuidado,
            consentimento e muita imaginação.
          </p>
        </div>
        <Mascot className={styles.heroMascot} />
        <span className={`${styles.decorDot} ${styles.dotOne}`} />
        <span className={`${styles.decorDot} ${styles.dotTwo}`} />
      </section>

      <section className={styles.profilePicker}>
        {authPhase === 'profiles' ? (
          <>
            <div className={styles.sectionEyebrow}>Escolha seu perfil</div>
            <h2 className={styles.loginTitle}>Quem está entrando?</h2>
            <p className={styles.loginSubtitle}>
              Cada pessoa acessa apenas as informações necessárias para sua jornada.
            </p>
            <div className={styles.roleGrid}>
              {roleOptions.map((role) => (
                <button
                  className={`${styles.roleCard} ${styles[`role${role.color}`]}`}
                  key={role.id}
                  onClick={() => selectLoginRole(role.id)}
                  type="button">
                  <span className={styles.roleIcon}>
                    <Icon name={role.icon} size={25} />
                  </span>
                  <span>
                    <strong>{role.title}</strong>
                    <small>{role.description}</small>
                  </span>
                  <span className={styles.roleArrow}>
                    <Icon name="arrow" size={18} />
                  </span>
                </button>
              ))}
            </div>
            <div className={styles.demoHint}>
              <span className={styles.liveDot} />
              Contas fictícias prontas para a demonstração
            </div>
          </>
        ) : (
          <form className={styles.loginForm} onSubmit={handleLogin}>
            <button
              className={styles.loginBack}
              onClick={() => setAuthPhase('profiles')}
              type="button">
              <Icon name="back" size={17} />
              Trocar perfil
            </button>
            <div className={styles.loginIdentity}>
              <span className={styles.roleIcon}>
                <Icon
                  name={roleOptions.find((role) => role.id === selectedRole)?.icon || 'user'}
                  size={27}
                />
              </span>
              <div>
                <div className={styles.sectionEyebrow}>
                  Acesso de {DEMO_USERS[selectedRole].roleLabel}
                </div>
                <h2>{DEMO_USERS[selectedRole].name}</h2>
              </div>
            </div>

            {selectedRole === 'child' ? (
              <label className={styles.loginField}>
                <span>Seu PIN de aventura</span>
                <input
                  aria-label="PIN de quatro números"
                  inputMode="numeric"
                  maxLength={4}
                  onChange={(event) => setPin(event.target.value.replace(/\D/g, ''))}
                  type="password"
                  value={pin}
                />
                <small>Peça ajuda ao seu responsável se precisar.</small>
              </label>
            ) : (
              <>
                <label className={styles.loginField}>
                  <span>E-mail</span>
                  <input
                    autoComplete="username"
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    value={email}
                  />
                </label>
                <label className={styles.loginField}>
                  <span>Senha</span>
                  <input
                    autoComplete="current-password"
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    value={password}
                  />
                </label>
              </>
            )}

            <div className={styles.demoCredentials}>
              <Icon name="sparkle" />
              <span>
                <strong>Dados da demo já preenchidos</strong>
                <small>
                  {selectedRole === 'child'
                    ? 'PIN: 1234'
                    : `Senha: demo123`}
                </small>
              </span>
            </div>
            {loginError && <div className={styles.loginError}>{loginError}</div>}
            <button className={styles.primaryButton} type="submit">
              Entrar como {DEMO_USERS[selectedRole].name.split(' ')[0]}
              <Icon name="arrow" />
            </button>
            <p className={styles.simulatedAuth}>
              Ambiente demonstrativo. Em produção, o acesso será protegido por autenticação
              segura e políticas institucionais.
            </p>
          </form>
        )}
      </section>
    </div>
  );

  const renderBaseFailure = () => (
    <div className={styles.contentScreen}>
      <header className={styles.screenHeader}>
        <div>
          <div className={styles.sectionEyebrow}>01 · O problema</div>
          <h1>Quando a tecnologia ainda não aprendeu a ouvir</h1>
          <p>A mesma voz. Duas interpretações muito diferentes.</p>
        </div>
        <Tag tone="purple">Modelo-base</Tag>
      </header>

      <div className={styles.failureLayout}>
        <article className={styles.audioCard}>
          <div className={styles.audioPerson}>
            <div className={styles.avatar}>L</div>
            <span>
              <strong>Lia enviou uma mensagem</strong>
              <small>Missão “A sede da Lumi” · agora</small>
            </span>
          </div>
          <button
            aria-label={isPlaying ? 'Pausar áudio' : 'Reproduzir áudio'}
            className={styles.audioPlayer}
            onClick={() => setIsPlaying(!isPlaying)}
            type="button">
            <span className={styles.playCircle}>
              <Icon name={isPlaying ? 'pause' : 'play'} size={18} />
            </span>
            <Waveform active={isPlaying} />
            <span className={styles.audioTime}>0:03</span>
          </button>
          <div className={styles.intentBubble}>
            <Icon name="heart" size={18} />
            <span>
              <small>Intenção comunicada</small>
              <strong>“Quero água”</strong>
            </span>
          </div>
        </article>

        <article className={styles.failureResult}>
          <div className={styles.resultTopline}>
            <span className={styles.badIcon}>
              <Icon name="close" />
            </span>
            <span>
              <small>O modelo-base entendeu</small>
              <strong>“Quero guarda”</strong>
            </span>
          </div>
          <div className={styles.confidenceBlock}>
            <div>
              <span>Confiança do reconhecimento</span>
              <strong>42%</strong>
            </div>
            <div className={styles.progressTrack}>
              <span style={{width: '42%'}} />
            </div>
          </div>
          <div className={styles.kindMessage}>
            <Mascot className={styles.miniMascot} />
            <p>
              <strong>A fala não está errada.</strong> É o sistema que ainda precisa
              aprender a compreender a Lia.
            </p>
          </div>
        </article>
      </div>
    </div>
  );

  const renderGuardianDashboard = () => {
    const activeConsentCount = Object.values(consents).filter(Boolean).length;
    const latestMission = missionCatalog[activeMission] || CHILD_MISSIONS.water;

    return (
      <div className={`${styles.contentScreen} ${styles.guardianDashboard}`}>
        <header className={styles.guardianHeader}>
          <div>
            <small>Quarta-feira, 29 de julho</small>
            <h1>Olá, Renata.</h1>
            <p>Acompanhe a Lia e cuide das permissões em um só lugar.</p>
          </div>
          <div className={styles.guardianIdentity}>
            <div className={styles.avatar}>R</div>
            <span>
              <strong>Renata Martins</strong>
              <small>Responsável por Lia</small>
            </span>
          </div>
        </header>

        <section className={styles.childSummaryCard}>
          <div className={styles.childSummaryProfile}>
            <Mascot className={styles.guardianMascot} />
            <div>
              <Tag tone="light">Perfil infantil</Tag>
              <h2>Lia Martins</h2>
              <p>Pratica com a Lumi desde julho · Dr. Rafael acompanha</p>
            </div>
          </div>
          <div className={styles.childSummaryStats}>
            <div>
              <strong>{completedMissions.length}</strong>
              <span>missões concluídas</span>
            </div>
            <div>
              <strong>{assignedMissions.length}</strong>
              <span>missões disponíveis</span>
            </div>
            <div>
              <strong>4 min</strong>
              <span>tempo médio</span>
            </div>
          </div>
        </section>

        <div className={styles.guardianActionGrid}>
          <button onClick={() => goTo(7)} type="button">
            <span className={`${styles.guardianActionIcon} ${styles.actionAttention}`}>
              <Icon name="wave" />
            </span>
            <div>
              <Tag tone="orange">1 pendente</Tag>
              <h3>Confirmar uma intenção</h3>
              <p>Ajude o sistema a compreender o que a Lia quis comunicar.</p>
            </div>
            <Icon name="arrow" />
          </button>
          <button onClick={() => goTo(2)} type="button">
            <span className={styles.guardianActionIcon}>
              <Icon name="shield" />
            </span>
            <div>
              <Tag tone="green">{activeConsentCount} autorizações ativas</Tag>
              <h3>Privacidade e consentimentos</h3>
              <p>Escolha como a voz pode ser usada e por quanto tempo.</p>
            </div>
            <Icon name="arrow" />
          </button>
        </div>

        <div className={styles.guardianColumns}>
          <section className={styles.recentActivityCard}>
            <div className={styles.sectionTitleRow}>
              <div>
                <h3>Atividade recente</h3>
                <p>Últimas missões realizadas pela Lia.</p>
              </div>
              <button onClick={() => goTo(7)} type="button">Ver detalhes</button>
            </div>
            <div className={styles.guardianActivity}>
              <span>{latestMission.rewardEmoji}</span>
              <div>
                <strong>{latestMission.title}</strong>
                <small>Concluída hoje às 19:42</small>
              </div>
              <Tag tone="green">Concluída</Tag>
            </div>
            <div className={styles.guardianActivity}>
              <span>📓</span>
              <div>
                <strong>A mochila da Lumi</strong>
                <small>Disponível para praticar</small>
              </div>
              <Tag tone="light">Nova</Tag>
            </div>
          </section>

          <aside className={styles.familySafetyCard}>
            <span className={styles.familySafetyIcon}>
              <Icon name="lock" />
            </span>
            <h3>Dados protegidos</h3>
            <p>
              Áudios e informações pessoais permanecem criptografados fora da blockchain.
            </p>
            <button onClick={() => goTo(2)} type="button">
              Revisar permissões
              <Icon name="arrow" size={16} />
            </button>
          </aside>
        </div>
      </div>
    );
  };

  const renderConsent = () => (
    <div className={styles.contentScreen}>
      <header className={styles.screenHeader}>
        <div>
          <div className={styles.sectionEyebrow}>02 · Segurança desde o início</div>
          <h1>Você escolhe como a voz será usada.</h1>
          <p>Usar o aplicativo não autoriza automaticamente pesquisa ou uso comercial.</p>
        </div>
        <div className={styles.secureBadge}>
          <Icon name="shield" />
          Consentimento granular
        </div>
      </header>

      <div className={styles.consentLayout}>
        <section className={styles.consentCard}>
          <div className={styles.cardTitleRow}>
            <div className={styles.avatarSmall}>R</div>
            <span>
              <strong>Permissões de Renata</strong>
              <small>Responsável por Lia</small>
            </span>
          </div>
          <div className={styles.toggleList}>
            <Toggle
              checked={consents.personalize}
              description="Criar um modelo privado para a Lia."
              label="Personalização individual"
              onChange={() => toggleConsent('personalize')}
            />
            <Toggle
              checked={consents.professional}
              description="Dr. Rafael poderá revisar amostras autorizadas."
              label="Compartilhar com profissional"
              onChange={() => toggleConsent('professional')}
            />
            <Toggle
              checked={consents.research}
              description="Uso pseudonimizado pela universidade parceira."
              label="Pesquisa acadêmica"
              onChange={() => toggleConsent('research')}
            />
            <Toggle
              checked={consents.collective}
              description="Ajudar a melhorar o modelo inclusivo coletivo."
              label="Treinamento coletivo"
              onChange={() => toggleConsent('collective')}
            />
            <Toggle
              checked={consents.commercial}
              description="Nunca é necessário para usar o aplicativo."
              label="Uso comercial"
              onChange={() => toggleConsent('commercial')}
            />
          </div>
        </section>

        <aside className={styles.dataSafety}>
          <div className={styles.safetyVisual}>
            <div className={styles.dataNode}>
              <Icon name="mic" />
              <span>Áudio</span>
            </div>
            <div className={styles.dottedLine} />
            <div className={styles.dataNode}>
              <Icon name="lock" />
              <span>Criptografado</span>
            </div>
            <div className={styles.dottedLine} />
            <div className={styles.dataNode}>
              <Icon name="chain" />
              <span>Hash verificável</span>
            </div>
          </div>
          <h3>Seu áudio nunca vai para a blockchain.</h3>
          <p>
            Somente autorizações, versões e hashes são registrados. Voz e dados pessoais
            permanecem protegidos fora da rede.
          </p>
          <div className={styles.expiryRow}>
            <Icon name="clock" />
            <span>
              <small>Prazo escolhido</small>
              <strong>12 meses</strong>
            </span>
            <button type="button">Alterar</button>
          </div>
        </aside>
      </div>
    </div>
  );

  const ChildHud = ({progress = 0, showBack = false, stars = 3}) => (
    <header className={styles.childHud}>
      <button
        aria-label={showBack ? 'Voltar para o início' : 'Abrir configurações'}
        onClick={() => {
          if (showBack) {
            if (professionalPreview) {
              exitProfessionalPreview();
            } else {
              setChildTab('home');
              goTo(3);
            }
          } else {
            setChildTab('space');
          }
        }}
        type="button">
        <Icon name={showBack ? 'close' : 'settings'} size={25} />
      </button>
      <div
        aria-label={`${progress}% da missão concluída`}
        className={styles.childHudProgress}>
        <span style={{width: `${progress}%`}} />
      </div>
      <div className={styles.childReward}>
        <Icon name="sparkle" size={25} />
        <strong>{stars}</strong>
      </div>
    </header>
  );

  const ProfessionalPreviewBadge = () =>
    professionalPreview ? (
      <div className={styles.previewBadge}>
        <Icon name="eye" size={17} />
        Prévia profissional · você está vendo exatamente o que a criança verá
      </div>
    ) : null;

  const ChildNavigation = ({active = childTab}) => {
    const items = [
      {id: 'home', label: 'Início', icon: 'home'},
      {id: 'adventures', label: 'Aventuras', icon: 'sparkle'},
      {id: 'treasures', label: 'Conquistas', icon: 'heart'},
      {id: 'space', label: 'Meu espaço', icon: 'child'},
    ];

    return (
      <nav className={styles.childNavigation} aria-label="Navegação da criança">
        {items.map((item) => (
          <button
            className={active === item.id ? styles.childNavActive : ''}
            key={item.id}
            onClick={() => {
              setChildTab(item.id);
              goTo(3);
            }}
            type="button">
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    );
  };

  const renderAdventureLibrary = () => (
    <div className={`${styles.contentScreen} ${styles.childScreen}`}>
      <ChildHud progress={28} stars={completedMissions.length + 2} />
      <header className={styles.childTopbar}>
        <div>
          <small>Escolha no seu ritmo</small>
          <h1>Qual mundo vamos explorar?</h1>
        </div>
        <div className={styles.avatar}>L</div>
      </header>
      <div className={styles.libraryGrid}>
        {[
          {
            id: 'water',
            emoji: '💧',
            title: 'A sede da Lumi',
            category: 'Comunicação cotidiana',
            duration: '3 min',
            status: 'available',
          },
          {
            id: 'school',
            emoji: '🏫',
            title: 'A mochila da Lumi',
            category: 'Situações escolares',
            duration: '4 min',
            status: 'available',
          },
          ...Object.values(customMissions)
            .filter((mission) => assignedMissions.includes(mission.id))
            .map((mission) => ({
              id: mission.id,
              emoji: mission.rewardEmoji,
              title: mission.title,
              category: 'Missão do profissional',
              duration: '4 min',
              status: 'available',
            })),
          {
            emoji: '🪐',
            title: 'Estação espacial',
            category: 'Comandos e escolhas',
            duration: 'Em breve',
            status: 'locked',
          },
          {
            emoji: '🐳',
            title: 'Oceano azul',
            category: 'Nomeação de objetos',
            duration: 'Em breve',
            status: 'locked',
          },
        ].map(({id, emoji, title, category, duration, status}) => (
          <button
            className={`${styles.libraryCard} ${
              status === 'locked' ? styles.libraryCardLocked : ''
            }`}
            disabled={status === 'locked'}
            key={title}
            onClick={() => id && startChildMission(id)}
            type="button">
            <span className={styles.libraryArt}>{emoji}</span>
            <span className={styles.libraryCopy}>
              <small>{category}</small>
              <strong>{title}</strong>
              <span>
                <Icon name={status === 'locked' ? 'lock' : 'clock'} size={15} />
                {duration}
              </span>
            </span>
            {status === 'available' && <Icon name="arrow" />}
          </button>
        ))}
      </div>
      <ChildNavigation active="adventures" />
    </div>
  );

  const renderTreasures = () => (
    <div className={`${styles.contentScreen} ${styles.childScreen}`}>
      <ChildHud progress={28} stars={completedMissions.length + 2} />
      <header className={styles.childTopbar}>
        <div>
          <small>Seu caminho</small>
          <h1>Olha tudo que você conquistou!</h1>
        </div>
        <Tag tone="yellow">3 de 8 descobertas</Tag>
      </header>
      <section className={styles.treasureHero}>
        <div className={styles.treasureCount}>
          <strong>3</strong>
          <span>mundos descobertos</span>
        </div>
        <div>
          <h2>Cada aventura conta.</h2>
          <p>Não existe pressa, pontuação de fala ou comparação com outras crianças.</p>
        </div>
        <Mascot className={styles.treasureMascot} />
      </section>
      <div className={styles.badgeGrid}>
        {[
          ['💧', 'Amiga da água', true],
          ['📓', 'Exploradora da escola', completedMissions.includes('school')],
          ['🪐', 'Exploradora espacial', false],
          ['🐳', 'Voz do oceano', false],
          ['🌳', 'Guardiã da floresta', false],
          ['🎨', 'Criadora de histórias', false],
        ].map(([emoji, label, unlocked]) => (
          <article className={!unlocked ? styles.badgeLocked : ''} key={label}>
            <span>{unlocked ? emoji : '🔒'}</span>
            <strong>{label}</strong>
            <small>{unlocked ? 'Descoberta!' : 'Continue explorando'}</small>
          </article>
        ))}
      </div>
      <ChildNavigation active="treasures" />
    </div>
  );

  const renderChildSpace = () => (
    <div className={`${styles.contentScreen} ${styles.childScreen}`}>
      <ChildHud progress={28} stars={completedMissions.length + 2} />
      <header className={styles.childTopbar}>
        <div>
          <small>Do seu jeito</small>
          <h1>Meu espaço</h1>
        </div>
        <div className={styles.avatar}>L</div>
      </header>
      <div className={styles.childSpaceGrid}>
        <section className={styles.childProfileCard}>
          <Mascot className={styles.childProfileMascot} />
          <div>
            <Tag tone="light">Aventureira</Tag>
            <h2>Lia</h2>
            <p>Pratica com a Lumi desde julho.</p>
          </div>
        </section>
        <section className={styles.preferenceCard}>
          <h3>Como você prefere usar o aplicativo?</h3>
          {[
            ['volume', 'Instruções faladas', 'Ligado'],
            ['eye', 'Poucas animações', 'Ligado'],
            ['clock', 'Missões curtas', 'Até 5 min'],
          ].map(([icon, label, value]) => (
            <button key={label} type="button">
              <span className={styles.preferenceIcon}>
                <Icon name={icon} />
              </span>
              <strong>{label}</strong>
              <small>{value}</small>
              <Icon name="arrow" size={16} />
            </button>
          ))}
        </section>
      </div>
      <div className={styles.familyNotice}>
        <Icon name="shield" />
        <p>
          <strong>Renata cuida das suas permissões.</strong>
          Você pode pedir para parar uma gravação ou uma atividade a qualquer momento.
        </p>
      </div>
      <button className={styles.childLogout} onClick={logout} type="button">
        <Icon name="back" size={17} />
        Sair do perfil da Lia
      </button>
      <ChildNavigation active="space" />
    </div>
  );

  const renderChildHome = () => {
    if (childTab === 'adventures') return renderAdventureLibrary();
    if (childTab === 'treasures') return renderTreasures();
    if (childTab === 'space') return renderChildSpace();
    const mission = missionCatalog[activeMission];
    const otherMission =
      activeMission === 'water' ? CHILD_MISSIONS.school : CHILD_MISSIONS.water;

    return (
      <div className={`${styles.contentScreen} ${styles.childScreen} ${styles.gameHome}`}>
        <ChildHud progress={28} stars={completedMissions.length + 2} />
        <section className={styles.gameGreeting}>
          <div>
            <span>AVENTURA DE HOJE</span>
            <h1>Oi, Lia! A Lumi precisa de você.</h1>
            <p>{mission.description}</p>
          </div>
          <div className={styles.gameGreetingMascot}>
            <Mascot />
            <span className={styles.mascotSpeech}>Vamos juntas?</span>
          </div>
        </section>

        <div className={styles.gameHomeGrid}>
          <section className={styles.missionPath}>
            <div className={styles.pathHeader}>
              <div>
                <small>{mission.chapter}</small>
                <h2>{mission.title}</h2>
              </div>
              <Tag tone="light">3 min</Tag>
            </div>
            <div className={styles.pathTrack}>
              <button className={`${styles.pathNode} ${styles.pathNodeDone}`} type="button">
                <Icon name="check" />
              </button>
              <span />
              <button
                className={`${styles.pathNode} ${styles.pathNodeCurrent}`}
                onClick={() => startChildMission(activeMission)}
                type="button">
                <Icon name="volume" />
              </button>
              <span />
              <button className={styles.pathNode} disabled type="button">
                <Icon name="mic" />
              </button>
              <span />
              <button className={styles.pathNode} disabled type="button">
                <Icon name="sparkle" />
              </button>
            </div>
            <div className={styles.pathLabels}>
              <span>História</span>
              <span>Escolher</span>
              <span>Falar</span>
              <span>Conquista</span>
            </div>
            <button
              className={styles.gamePrimaryButton}
              onClick={() => startChildMission(activeMission)}
              type="button">
              CONTINUAR
            </button>
          </section>

          <aside className={styles.dailyGoalCard}>
            <div className={styles.goalTop}>
              <span className={styles.goalIcon}>⭐</span>
              <div>
                <small>META DE HOJE</small>
                <strong>1 de 3 desafios</strong>
              </div>
            </div>
            <div className={styles.goalProgress}>
              <span style={{width: '33%'}} />
            </div>
            <p>Você está indo muito bem. Pode pausar quando quiser.</p>
            <button
              className={styles.quickMission}
              onClick={() => startChildMission(otherMission.id)}
              type="button">
              <span>{otherMission.rewardEmoji}</span>
              <span>
                <small>OUTRA MISSÃO</small>
                <strong>{otherMission.title}</strong>
              </span>
              <Icon name="arrow" size={16} />
            </button>
            <button onClick={() => setChildTab('adventures')} type="button">
              Ver outras aventuras
              <Icon name="arrow" size={16} />
            </button>
          </aside>
        </div>
        <ChildNavigation active="home" />
      </div>
    );
  };

  const renderMissionIntro = () => {
    const mission = missionCatalog[activeMission];
    const choices = mission.choices;
    const handleCheck = () => {
      if (choiceFeedback === 'correct') {
        setHasRecording(false);
        setRecordSeconds(0);
        setRecordingMode('ready');
        goTo(5);
        return;
      }
      if (choiceFeedback === 'retry') {
        setMissionChoice('');
        setChoiceFeedback('idle');
        return;
      }
      setChoiceFeedback(
        missionChoice === mission.correctId ? 'correct' : 'retry',
      );
    };

    return (
      <div className={`${styles.contentScreen} ${styles.gameChallenge}`}>
        <ChildHud progress={45} showBack stars={completedMissions.length + 2} />
        <ProfessionalPreviewBadge />
        <section className={styles.challengeContent}>
          <div className={styles.challengeHeading}>
            <span>DESAFIO 1 DE 3</span>
            <h1>{mission.question}</h1>
            <button onClick={playInstruction} type="button">
              <Icon name="volume" size={25} />
              <span>
                <strong>Ouça a pista</strong>
                <small>“{mission.clue}”</small>
              </span>
            </button>
          </div>

          <div className={styles.choiceGrid}>
            {choices.map((choice) => {
              const isSelected = missionChoice === choice.id;
              const isCorrect =
                choiceFeedback === 'correct' && choice.id === mission.correctId;
              const isWrong = choiceFeedback === 'retry' && isSelected;
              return (
                <button
                  aria-pressed={isSelected}
                  className={`${styles.choiceCard} ${
                    isSelected ? styles.choiceSelected : ''
                  } ${isCorrect ? styles.choiceCorrect : ''} ${
                    isWrong ? styles.choiceWrong : ''
                  }`}
                  disabled={choiceFeedback !== 'idle'}
                  key={choice.id}
                  onClick={() => setMissionChoice(choice.id)}
                  type="button">
                  <span className={styles.choiceIllustration}>{choice.emoji}</span>
                  <strong>{choice.label}</strong>
                  {isSelected && (
                    <span className={styles.choiceMarker}>
                      <Icon name={isWrong ? 'close' : 'check'} size={16} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        <footer
          className={`${styles.gameActionBar} ${
            choiceFeedback === 'correct'
              ? styles.actionCorrect
              : choiceFeedback === 'retry'
                ? styles.actionRetry
                : ''
          }`}>
          <div className={styles.actionMessage}>
            {choiceFeedback === 'correct' && (
              <>
                <span><Icon name="check" /></span>
                <div>
                  <strong>Muito bem!</strong>
                  <small>Agora vamos usar sua voz para completar a missão.</small>
                </div>
              </>
            )}
            {choiceFeedback === 'retry' && (
              <>
                <span><Icon name="heart" /></span>
                <div>
                  <strong>Quase! Vamos tentar outra vez.</strong>
                  <small>Ouça a pista novamente e escolha outra imagem.</small>
                </div>
              </>
            )}
          </div>
          <button
            disabled={!missionChoice}
            onClick={handleCheck}
            type="button">
            {choiceFeedback === 'correct'
              ? 'CONTINUAR'
              : choiceFeedback === 'retry'
                ? 'TENTAR NOVAMENTE'
                : 'VERIFICAR'}
          </button>
        </footer>
      </div>
    );
  };

  const renderRecording = () => (
    <div className={`${styles.contentScreen} ${styles.recordingScreen} ${styles.gameRecording}`}>
      <ChildHud progress={72} showBack stars={completedMissions.length + 2} />
      <ProfessionalPreviewBadge />
      <div className={styles.voiceChallengeHeading}>
        <span>DESAFIO 2 DE 3</span>
        <h1>Agora diga do seu jeito</h1>
        <p>Ajude a Lumi a completar a missão.</p>
      </div>
      <section className={styles.recordingStage}>
        <Mascot className={styles.recordMascot} />
        <div className={styles.speechBubble}>
          <span>Toque no microfone e diga</span>
          <strong>“{missionCatalog[activeMission].phrase}”</strong>
        </div>
        <div className={styles.recordingControl}>
          {isRecording && <Waveform active />}
          <button
            aria-label={isRecording ? 'Parar gravação' : 'Começar gravação'}
            className={`${styles.micButton} ${isRecording ? styles.micButtonActive : ''}`}
            disabled={recordingMode === 'requesting'}
            onClick={isRecording ? stopRecording : startRecording}
            type="button">
            <Icon name={isRecording ? 'pause' : 'mic'} size={34} strokeWidth={2} />
          </button>
          <strong>
            {recordingMode === 'requesting'
              ? 'Abrindo o microfone...'
              : isRecording
                ? `Estou ouvindo... 0:${String(recordSeconds).padStart(2, '0')}`
                : hasRecording
                  ? 'Gravação pronta!'
                  : 'Toque para falar'}
          </strong>
          <small>
            {isRecording
              ? 'Toque novamente quando terminar'
              : hasRecording
                ? recordingMode === 'simulated'
                  ? 'Modo simulado ativado porque o microfone não foi liberado'
                  : 'Seu áudio foi capturado apenas para esta demonstração'
                : 'O microfone só é ativado quando você toca'}
          </small>
        </div>
        {hasRecording && (
          <div className={styles.recordingReady}>
            {recordedAudioUrl && (
              <audio aria-label="Ouvir sua gravação" controls src={recordedAudioUrl}>
                Seu navegador não suporta reprodução de áudio.
              </audio>
            )}
            <div>
              <button
                className={styles.secondaryButton}
                onClick={startRecording}
                type="button">
                Gravar novamente
              </button>
              <button
                className={styles.gamePrimaryButton}
                onClick={() => {
                  setCompletedMissions((current) =>
                    current.includes(activeMission)
                      ? current
                      : [...current, activeMission],
                  );
                  goTo(6);
                }}
                type="button">
                VER RESULTADO
                <Icon name="arrow" />
              </button>
            </div>
          </div>
        )}
        <button className={styles.helpButton} type="button">
          <Icon name="heart" />
          Preciso de ajuda
        </button>
      </section>
    </div>
  );

  const renderFeedback = () => (
    <div className={`${styles.contentScreen} ${styles.feedbackScreen} ${styles.gameFeedback}`}>
      <ChildHud progress={100} showBack stars={completedMissions.length + 2} />
      <ProfessionalPreviewBadge />
      <div className={styles.confetti} aria-hidden="true">
        {['✦', '●', '◆', '✦', '●', '◆', '✦', '●'].map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
      <section className={styles.feedbackContent}>
        <Mascot className={styles.feedbackMascot} />
        <Tag tone="yellow">+1 estrela · Lumi entendeu!</Tag>
        <h1>{missionCatalog[activeMission].completion}</h1>
        <p>Cada tentativa faz a tecnologia conhecer melhor a sua voz.</p>
        <div className={styles.rewardUnlocked}>
          <span>{missionCatalog[activeMission].rewardEmoji}</span>
          <div>
            <small>NOVA CONQUISTA</small>
            <strong>{missionCatalog[activeMission].reward}</strong>
          </div>
        </div>
        <div className={styles.understoodCard}>
          <span className={styles.goodIcon}>
            <Icon name="check" />
          </span>
          <span>
            <small>Intenção compreendida</small>
            <strong>“{missionCatalog[activeMission].phrase}”</strong>
          </span>
          {recordedAudioUrl ? (
            <audio
              aria-label="Ouvir gravação que foi compreendida"
              className={styles.feedbackAudio}
              controls
              src={recordedAudioUrl}>
              Seu navegador não suporta reprodução de áudio.
            </audio>
          ) : (
            <button aria-label="Ouvir gravação simulada" type="button">
              <Icon name="play" />
            </button>
          )}
        </div>
        <button
          className={styles.primaryButton}
          onClick={() => {
            if (professionalPreview) {
              exitProfessionalPreview();
            } else {
              setChildTab('home');
              goTo(3);
            }
          }}
          type="button">
          {professionalPreview ? 'Voltar ao painel profissional' : 'Concluir missão'}
          <Icon name="arrow" />
        </button>
      </section>
    </div>
  );

  const renderIntentConfirmation = () => {
    const intents = ['Quero água', 'Quero brincar', 'Outra resposta', 'Não consegui identificar'];
    return (
      <div className={styles.contentScreen}>
        <header className={styles.screenHeader}>
          <div>
            <div className={styles.sectionEyebrow}>03 · Validação humana</div>
            <h1>O que a Lia quis comunicar?</h1>
            <p>Você confirma a intenção, sem avaliar se a fala está “certa” ou “errada”.</p>
          </div>
          <Tag tone="light">1 validação pendente</Tag>
        </header>

        <div className={styles.intentLayout}>
          <article className={styles.intentAudioCard}>
            <div className={styles.cardTitleRow}>
              <div className={styles.avatar}>L</div>
              <span>
                <strong>A sede da Lumi</strong>
                <small>Hoje, 19:42 · Tentativa 1</small>
              </span>
            </div>
            <button className={styles.audioPlayer} type="button">
              <span className={styles.playCircle}>
                <Icon name="play" size={18} />
              </span>
              <Waveform />
              <span className={styles.audioTime}>0:03</span>
            </button>
            <div className={styles.modelTranscript}>
              <span>
                <Icon name="brain" />
                Interpretação do modelo
              </span>
              <strong>“Quero água”</strong>
              <Tag tone="green">91% de confiança</Tag>
            </div>
          </article>

          <section className={styles.intentChoices}>
            <h3>Selecione uma opção</h3>
            {intents.map((intent) => (
              <button
                className={`${styles.intentOption} ${
                  selectedIntent === intent ? styles.intentSelected : ''
                }`}
                key={intent}
                onClick={() => setSelectedIntent(intent)}
                type="button">
                <span className={styles.radio}>
                  {selectedIntent === intent && <span />}
                </span>
                {intent}
              </button>
            ))}
            <div className={styles.consentMini}>
              <Icon name="lock" />
              <span>
                <strong>Uso autorizado</strong>
                <small>Personalização individual e revisão profissional.</small>
              </span>
            </div>
            <button className={styles.primaryButton} onClick={() => goTo(8)} type="button">
              Confirmar intenção
              <Icon name="check" />
            </button>
          </section>
        </div>
      </div>
    );
  };

  const renderMissionBuilder = () => (
    <div className={`${styles.contentScreen} ${styles.missionBuilderScreen}`}>
      <header className={styles.builderHeader}>
        <div>
          <button onClick={() => setProfessionalView('dashboard')} type="button">
            <Icon name="back" size={17} />
            Voltar ao painel
          </button>
          <div className={styles.sectionEyebrow}>Criação profissional</div>
          <h1>Nova missão de comunicação</h1>
          <p>Configure a atividade e teste a experiência antes de enviar para a criança.</p>
        </div>
        <Tag tone="purple">Rascunho</Tag>
      </header>

      <form className={styles.builderLayout} onSubmit={saveAndPreviewMission}>
        <section className={styles.builderForm}>
          <div className={styles.builderSectionTitle}>
            <span>1</span>
            <div>
              <h3>Contexto da missão</h3>
              <p>Use uma situação curta e funcional para a criança.</p>
            </div>
          </div>
          <div className={styles.builderFields}>
            <label>
              <span>Nome da missão</span>
              <input
                onChange={(event) => updateMissionDraft('title', event.target.value)}
                required
                value={missionDraft.title}
              />
            </label>
            <label>
              <span>Descrição</span>
              <input
                onChange={(event) => updateMissionDraft('description', event.target.value)}
                required
                value={missionDraft.description}
              />
            </label>
            <label className={styles.builderFullField}>
              <span>Pergunta apresentada à criança</span>
              <input
                onChange={(event) => updateMissionDraft('question', event.target.value)}
                required
                value={missionDraft.question}
              />
            </label>
            <label className={styles.builderFullField}>
              <span>Pista falada</span>
              <input
                onChange={(event) => updateMissionDraft('clue', event.target.value)}
                required
                value={missionDraft.clue}
              />
            </label>
          </div>

          <div className={styles.builderSectionTitle}>
            <span>2</span>
            <div>
              <h3>Alternativas visuais</h3>
              <p>Marque a resposta esperada. A criança poderá tentar novamente.</p>
            </div>
          </div>
          <div className={styles.builderChoices}>
            {missionDraft.choices.map((choice, index) => (
              <div
                className={`${styles.builderChoice} ${
                  missionDraft.correctId === choice.id ? styles.builderChoiceCorrect : ''
                }`}
                key={choice.id}>
                <input
                  aria-label={`Emoji da alternativa ${index + 1}`}
                  className={styles.emojiInput}
                  maxLength={4}
                  onChange={(event) => updateDraftChoice(index, 'emoji', event.target.value)}
                  required
                  value={choice.emoji}
                />
                <input
                  aria-label={`Texto da alternativa ${index + 1}`}
                  onChange={(event) => updateDraftChoice(index, 'label', event.target.value)}
                  required
                  value={choice.label}
                />
                <label className={styles.correctAnswer}>
                  <input
                    checked={missionDraft.correctId === choice.id}
                    name="correct-answer"
                    onChange={() => updateMissionDraft('correctId', choice.id)}
                    type="radio"
                  />
                  Correta
                </label>
              </div>
            ))}
          </div>

          <div className={styles.builderSectionTitle}>
            <span>3</span>
            <div>
              <h3>Voz e recompensa</h3>
              <p>Defina a frase que será coletada e o retorno positivo.</p>
            </div>
          </div>
          <div className={styles.builderFields}>
            <label>
              <span>Frase de voz</span>
              <input
                onChange={(event) => updateMissionDraft('phrase', event.target.value)}
                required
                value={missionDraft.phrase}
              />
            </label>
            <label>
              <span>Nome da conquista</span>
              <input
                onChange={(event) => updateMissionDraft('reward', event.target.value)}
                required
                value={missionDraft.reward}
              />
            </label>
          </div>
        </section>

        <aside className={styles.builderPreview}>
          <div className={styles.previewTopline}>
            <span>PRÉVIA RÁPIDA</span>
            <Icon name="eye" />
          </div>
          <Mascot className={styles.builderMascot} />
          <small>{missionDraft.question}</small>
          <h3>{missionDraft.title}</h3>
          <div className={styles.miniChoiceGrid}>
            {missionDraft.choices.map((choice) => (
              <span
                className={
                  missionDraft.correctId === choice.id ? styles.miniChoiceCorrect : ''
                }
                key={choice.id}>
                {choice.emoji}
                <small>{choice.label}</small>
              </span>
            ))}
          </div>
          <div className={styles.previewPhrase}>
            <Icon name="mic" />
            “{missionDraft.phrase}”
          </div>
          <button className={styles.primaryButton} type="submit">
            <Icon name="play" />
            Salvar e testar como criança
          </button>
          <p>A missão será salva neste navegador e aberta no fluxo infantil completo.</p>
        </aside>
      </form>
    </div>
  );

  const renderProfessionalDashboard = () => {
    if (professionalView === 'builder') {
      return renderMissionBuilder();
    }

    return (
    <div className={`${styles.contentScreen} ${styles.dashboardScreen}`}>
      <header className={styles.dashboardHeader}>
        <div>
          <small>Quarta-feira, 29 de julho</small>
          <h1>Boa noite, Dr. Rafael.</h1>
          <p>Aqui está o que merece sua atenção hoje.</p>
        </div>
        <div className={styles.dashboardHeaderRight}>
          <button
            className={styles.createMissionButton}
            onClick={() => setProfessionalView('builder')}
            type="button">
            <Icon name="sparkle" size={18} />
            Criar missão
          </button>
          <div className={styles.professionalInfo}>
            <button aria-label="Notificações" type="button">3</button>
            <div className={styles.avatar}>RF</div>
            <span>
              <strong>Rafael Freitas</strong>
              <small>Fonoaudiólogo</small>
            </span>
          </div>
        </div>
      </header>

      <div className={styles.metricsGrid}>
        <Metric helper="+2 esta semana" label="Crianças ativas" value="12" />
        <Metric helper="3 de alta prioridade" label="Revisões pendentes" tone="orange" value="08" />
        <Metric helper="+9% no último ciclo" label="Acerto de intenção" tone="green" value="87%" />
        <Metric helper="Média das sessões" label="Tempo de prática" tone="purple" value="4m" />
      </div>

      <section className={styles.missionManager}>
        <div className={styles.sectionTitleRow}>
          <div>
            <h3>Missões disponíveis</h3>
            <p>Abra a experiência da criança antes de atribuir uma atividade.</p>
          </div>
          <button onClick={() => setProfessionalView('builder')} type="button">
            + Nova missão
          </button>
        </div>
        <div className={styles.professionalMissionGrid}>
          {Object.values(missionCatalog).map((mission) => (
            <article key={mission.id}>
              <span className={styles.missionEmoji}>{mission.rewardEmoji}</span>
              <div>
                <small>
                  {assignedMissions.includes(mission.id)
                    ? 'ATRIBUÍDA À LIA'
                    : mission.professional
                      ? 'CRIADA POR VOCÊ'
                      : mission.chapter}
                </small>
                <strong>{mission.title}</strong>
                <p>Frase: “{mission.phrase}”</p>
              </div>
              <div className={styles.missionCardActions}>
                <button onClick={() => previewMissionAsChild(mission.id)} type="button">
                  <Icon name="play" size={16} />
                  Testar
                </button>
                <button
                  className={
                    assignedMissions.includes(mission.id) ? styles.missionAssigned : ''
                  }
                  onClick={() =>
                    setAssignedMissions((current) =>
                      current.includes(mission.id)
                        ? current.filter((id) => id !== mission.id)
                        : [...current, mission.id],
                    )
                  }
                  type="button">
                  <Icon
                    name={assignedMissions.includes(mission.id) ? 'check' : 'child'}
                    size={16}
                  />
                  {assignedMissions.includes(mission.id) ? 'Atribuída' : 'Atribuir'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className={styles.dashboardColumns}>
        <section className={styles.reviewQueue}>
          <div className={styles.sectionTitleRow}>
            <div>
              <h3>Fila priorizada</h3>
              <p>Amostras ordenadas pelo que precisa de revisão.</p>
            </div>
            <button type="button">Ver todas</button>
          </div>
          <div className={styles.queueTable}>
            <div className={styles.queueHeader}>
              <span>Criança</span>
              <span>Motivo</span>
              <span>Confiança</span>
              <span />
            </div>
            {[
              ['Lia M.', 'Baixa confiança', '42%', 'high'],
              ['Caio P.', 'Áudio com ruído', '61%', 'medium'],
              ['Bia S.', 'Intenção divergente', '68%', 'medium'],
            ].map(([name, reason, confidence, priority], index) => (
              <button
                className={styles.queueRow}
                key={name}
                onClick={() => index === 0 && goTo(9)}
                type="button">
                <span className={styles.queuePerson}>
                  <span className={`${styles.tableAvatar} ${styles[`priority${priority}`]}`}>
                    {name[0]}
                  </span>
                  <strong>{name}</strong>
                </span>
                <span>{reason}</span>
                <strong>{confidence}</strong>
                <Icon name="arrow" size={17} />
              </button>
            ))}
          </div>
        </section>

        <aside className={styles.activityChart}>
          <div className={styles.sectionTitleRow}>
            <div>
              <h3>Participação</h3>
              <p>Últimos 7 dias</p>
            </div>
            <Tag tone="green">+12%</Tag>
          </div>
          <div className={styles.barChart}>
            {[38, 58, 42, 75, 62, 88, 70].map((height, index) => (
              <div key={index}>
                <span style={{height: `${height}%`}} />
                <small>{['Q', 'Q', 'S', 'S', 'D', 'S', 'T'][index]}</small>
              </div>
            ))}
          </div>
          <div className={styles.chartNote}>
            <Icon name="heart" />
            <p>
              <strong>Sessões curtas funcionam melhor.</strong>
              82% das missões foram concluídas em até 5 minutos.
            </p>
          </div>
        </aside>
      </div>
    </div>
    );
  };

  const renderSampleReview = () => (
    <div className={styles.contentScreen}>
      <header className={styles.screenHeader}>
        <div>
          <div className={styles.breadcrumb}>Fila priorizada / Lia M. / Amostra #A9C2</div>
          <h1>Revisar amostra</h1>
          <p>Confira a intenção, a transcrição e as permissões antes de aprovar.</p>
        </div>
        <Tag tone="orange">Alta prioridade</Tag>
      </header>

      <div className={styles.reviewLayout}>
        <section className={styles.reviewMain}>
          <div className={styles.reviewPerson}>
            <div className={styles.avatar}>L</div>
            <div>
              <h3>Lia Martins</h3>
              <p>Missão “A sede da Lumi” · Tentativa 1</p>
            </div>
            <Tag tone="light">Voz personalizada</Tag>
          </div>
          <div className={styles.bigPlayer}>
            <button aria-label="Reproduzir amostra" type="button">
              <Icon name="play" />
            </button>
            <Waveform />
            <span>00:03</span>
          </div>
          <div className={styles.transcriptGrid}>
            <label>
              <span>Texto esperado</span>
              <input readOnly value="Quero água" />
            </label>
            <label>
              <span>Modelo-base transcreveu</span>
              <input className={styles.inputWarning} readOnly value="Quero guarda" />
            </label>
            <label className={styles.fullInput}>
              <span>Transcrição corrigida</span>
              <input defaultValue="Quero água" />
            </label>
          </div>
          <div className={styles.qualityChecks}>
            {['Fala presente', 'Volume adequado', 'Sem cortes', 'Intenção confirmada'].map(
              (label) => (
                <span key={label}>
                  <Icon name="check" size={16} />
                  {label}
                </span>
              ),
            )}
          </div>
        </section>

        <aside className={styles.approvalCard}>
          <h3>Pronta para treinamento?</h3>
          <div className={styles.approvalItem}>
            <Icon name="shield" />
            <span>
              <strong>Consentimento válido</strong>
              <small>Personalização individual</small>
            </span>
          </div>
          <div className={styles.approvalItem}>
            <Icon name="database" />
            <span>
              <strong>Dataset pessoal v1.2</strong>
              <small>28 amostras aprovadas</small>
            </span>
          </div>
          <div className={styles.approvalItem}>
            <Icon name="eye" />
            <span>
              <strong>Acesso restrito</strong>
              <small>Responsável e profissional</small>
            </span>
          </div>
          <div className={styles.approvalActions}>
            <button className={styles.secondaryButton} type="button">Descartar</button>
            <button
              className={`${styles.primaryButton} ${
                sampleApproved ? styles.approvedButton : ''
              }`}
              onClick={() => setSampleApproved(true)}
              type="button">
              <Icon name="check" />
              {sampleApproved ? 'Amostra aprovada' : 'Aprovar amostra'}
            </button>
          </div>
        </aside>
      </div>
    </div>
  );

  const renderComparison = () => (
    <div className={styles.contentScreen}>
      <header className={styles.screenHeader}>
        <div>
          <div className={styles.sectionEyebrow}>04 · Evidência técnica</div>
          <h1>A tecnologia aprendeu a compreender melhor.</h1>
          <p>Mesma gravação, modelo adaptado à voz da Lia.</p>
        </div>
        <Tag tone="green">Adaptador pessoal v3</Tag>
      </header>

      <div className={styles.comparisonIntro}>
        <div className={styles.comparisonAudio}>
          <button aria-label="Reproduzir gravação comparada" type="button">
            <Icon name="play" />
          </button>
          <Waveform compact />
          <span>“Quero água” · 0:03</span>
        </div>
        <div className={styles.datasetPill}>
          <Icon name="database" />
          Dataset pessoal v1.2 · 30 amostras
        </div>
      </div>

      <div className={styles.compareGrid}>
        <article className={styles.beforeCard}>
          <div className={styles.compareLabel}>
            <span>ANTES</span>
            Modelo-base
          </div>
          <div className={styles.transcriptResult}>
            <small>Transcrição</small>
            <strong>“Quero <mark>guarda</mark>”</strong>
          </div>
          <div className={styles.scoreLine}>
            <span>Confiança</span>
            <strong>42%</strong>
          </div>
          <div className={styles.progressTrack}>
            <span style={{width: '42%'}} />
          </div>
          <div className={styles.intentStatusBad}>
            <Icon name="close" />
            Intenção não compreendida
          </div>
        </article>

        <div className={styles.compareArrow}>
          <Icon name="arrow" size={27} />
        </div>

        <article className={styles.afterCard}>
          <div className={styles.compareLabel}>
            <span>DEPOIS</span>
            Modelo adaptado
          </div>
          <div className={styles.transcriptResult}>
            <small>Transcrição</small>
            <strong>“Quero <mark>água</mark>”</strong>
          </div>
          <div className={styles.scoreLine}>
            <span>Confiança</span>
            <strong>91%</strong>
          </div>
          <div className={styles.progressTrack}>
            <span style={{width: '91%'}} />
          </div>
          <div className={styles.intentStatusGood}>
            <Icon name="check" />
            Intenção compreendida
          </div>
        </article>
      </div>

      <div className={styles.improvementMetrics}>
        <Metric helper="redução relativa" label="WER" tone="green" value="−38%" />
        <Metric helper="redução relativa" label="CER" tone="green" value="−44%" />
        <Metric helper="nesta amostra" label="Confiança" tone="blue" value="+49pp" />
        <div className={styles.clinicalNotice}>
          <Icon name="shield" />
          <p>
            <strong>Esta é uma melhora técnica.</strong>
            Não representa diagnóstico ou evolução clínica.
          </p>
        </div>
      </div>
    </div>
  );

  const renderProvenance = () => {
    const events = [
      {
        icon: 'shield',
        title: 'Consentimento registrado',
        meta: 'Personalização individual · ativo',
        hash: '0x7A4F...19C2',
        time: '19:41',
      },
      {
        icon: 'database',
        title: 'Dataset v1.2 criado',
        meta: '30 amostras autorizadas · hash verificado',
        hash: '0x91BD...A730',
        time: '19:48',
      },
      {
        icon: 'brain',
        title: 'Treinamento executado',
        meta: 'Run privada #PYS-2048 · Universidade Alfa',
        hash: '0xC18E...52B4',
        time: '19:52',
      },
      {
        icon: 'sparkle',
        title: 'Adaptador pessoal v3',
        meta: 'Avaliação aprovada · acesso controlado',
        hash: '0xE230...7D91',
        time: '20:01',
      },
    ];

    return (
      <div className={styles.contentScreen}>
        <header className={styles.screenHeader}>
          <div>
            <div className={styles.sectionEyebrow}>05 · Confiança verificável</div>
            <h1>Da autorização ao modelo, sem expor a criança.</h1>
            <p>Uma trilha compartilhada entre família, profissional e instituição.</p>
          </div>
          <div className={styles.verifiedBadge}>
            <Icon name="shield" />
            Trilha verificada
          </div>
        </header>

        <div className={styles.provenanceLayout}>
          <section className={styles.timelineCard}>
            <div className={styles.timelineHeader}>
              <div>
                <h3>Proveniência do modelo</h3>
                <p>ID pseudonimizado · CR-8F21</p>
              </div>
              <Tag tone="green">Consentimento ativo</Tag>
            </div>
            <div className={styles.timeline}>
              {events.map((event, index) => (
                <article className={styles.timelineEvent} key={event.title}>
                  <div className={styles.timelineIcon}>
                    <Icon name={event.icon} />
                  </div>
                  <div className={styles.timelineContent}>
                    <div>
                      <strong>{event.title}</strong>
                      <small>{event.time}</small>
                    </div>
                    <p>{event.meta}</p>
                    <button type="button">
                      {event.hash}
                      <Icon name="eye" size={15} />
                    </button>
                  </div>
                  {index < events.length - 1 && <span className={styles.timelineLine} />}
                </article>
              ))}
            </div>
          </section>

          <aside className={styles.chainSummary}>
            <div className={styles.chainShield}>
              <Icon name="lock" size={30} />
            </div>
            <h3>O áudio não está na blockchain.</h3>
            <p>
              A rede registra somente provas de integridade, autorizações e vínculos entre
              versões.
            </p>
            <div className={styles.storageSplit}>
              <div>
                <span className={styles.storageIcon}>
                  <Icon name="lock" />
                </span>
                <strong>Off-chain</strong>
                <small>Áudio, identidade e transcrições</small>
              </div>
              <div>
                <span className={styles.storageIcon}>
                  <Icon name="chain" />
                </span>
                <strong>On-chain</strong>
                <small>Hashes, versões e autorizações</small>
              </div>
            </div>
            <button className={styles.secondaryButton} type="button">
              <Icon name="file" />
              Ver comprovante completo
            </button>
          </aside>
        </div>
      </div>
    );
  };

  const screens = [
    renderProfileSelection,
    renderBaseFailure,
    renderConsent,
    renderChildHome,
    renderMissionIntro,
    renderRecording,
    renderFeedback,
    renderIntentConfirmation,
    renderProfessionalDashboard,
    renderSampleReview,
    renderComparison,
    renderProvenance,
    renderGuardianDashboard,
  ];
  const currentFlowIndex = Math.max(0, visibleSteps.indexOf(step));
  const currentUser = session ? DEMO_USERS[session.role] : null;
  const moveInFlow = (direction) => {
    const nextIndex = Math.max(
      0,
      Math.min(visibleSteps.length - 1, currentFlowIndex + direction),
    );
    goTo(visibleSteps[nextIndex]);
  };

  const isChildExperience = session?.role === 'child' || professionalPreview;

  if (showLanding) {
    return <LandingPage onEnter={openPlatform} />;
  }

  return (
    <div className={`${styles.appShell} ${isChildExperience ? styles.childAppShell : ''}`}>
      {!isChildExperience && (
        <header className={styles.appHeader}>
          <button
            className={styles.brand}
            onClick={() => goTo(currentUser?.home ?? 0)}
            type="button">
            <BrandMark />
            <span>
              <strong>ECOA</strong>
              <small>tecnologia que escuta</small>
            </span>
          </button>
          <div className={styles.demoStatus}>
            <span className={styles.liveDot} />
            {session ? `Sessão de ${session.roleLabel}` : 'Ambiente demonstrativo'}
          </div>
          <div className={styles.headerActions}>
            <button className={styles.iconButton} aria-label="Acessibilidade" type="button">
              <Icon name="eye" />
            </button>
            {session && (
              <>
                <div className={styles.sessionIdentity}>
                  <span>{session.name.charAt(0)}</span>
                  <div>
                    <strong>{session.name}</strong>
                    <small>{session.roleLabel}</small>
                  </div>
                </div>
                <button className={styles.exitButton} onClick={logout} type="button">
                  Sair
                </button>
              </>
            )}
          </div>
        </header>
      )}

        <div
          className={`${styles.appBody} ${!session ? styles.authBody : ''} ${
            isChildExperience ? styles.childModeBody : ''
          }`}>
          {session && !isChildExperience && (
            <aside className={styles.demoRail}>
            <div className={styles.railHeader}>
              <small>{session.role === 'guardian' ? 'MENU DA FAMÍLIA' : 'NAVEGAÇÃO'}</small>
              <strong>
                {String(currentFlowIndex + 1).padStart(2, '0')} / {visibleSteps.length}
              </strong>
            </div>
            <div className={styles.railProgress}>
              <span
                style={{height: `${((currentFlowIndex + 1) / visibleSteps.length) * 100}%`}}
              />
            </div>
            <nav aria-label={`Telas do perfil ${session.roleLabel}`}>
              {visibleSteps.map((stepIndex, index) => {
                const item = STEPS[stepIndex];
                return (
                <button
                  aria-current={step === stepIndex ? 'step' : undefined}
                  className={`${styles.railStep} ${
                    step === stepIndex ? styles.railStepActive : ''
                  } ${
                    currentFlowIndex > index ? styles.railStepDone : ''
                  }`}
                  key={item.title}
                  onClick={() => goTo(stepIndex)}
                  type="button">
                  <span className={styles.stepNumber}>
                    {currentFlowIndex > index ? <Icon name="check" size={14} /> : index + 1}
                  </span>
                  <span>
                    <small>{item.group}</small>
                    <strong>{item.short}</strong>
                  </span>
                </button>
                );
              })}
            </nav>
          </aside>
          )}

          <main className={`${styles.appMain} ${!session ? styles.loginMain : ''}`}>
            <div className={styles.screenViewport}>{screens[step]()}</div>
            {session && !isChildExperience && (
              <footer className={styles.demoControls}>
              <button
                className={styles.previousButton}
                disabled={currentFlowIndex === 0}
                onClick={() => moveInFlow(-1)}
                type="button">
                <Icon name="back" />
                Anterior
              </button>
              <div>
                <span>{STEPS[step].group}</span>
                <strong>{STEPS[step].title}</strong>
              </div>
              <button
                className={styles.nextButton}
                disabled={
                  currentFlowIndex === visibleSteps.length - 1 ||
                  (step === 5 && !hasRecording)
                }
                onClick={() => moveInFlow(1)}
                type="button">
                Próxima tela
                <Icon name="arrow" />
              </button>
            </footer>
            )}
          </main>
        </div>
    </div>
  );
}
