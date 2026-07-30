/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'visao_geral',
    {
      type: 'category',
      label: 'Problema',
      link: {
        type: 'generated-index',
        title: 'Problema',
        description:
          'Contexto, pessoas afetadas e jornada de quem utiliza a solução.',
        slug: '/category/problema',
      },
      items: [
        'problema/problema',
        'problema/publico_alvo',
        'problema/personas',
        'problema/jornada_usuario',
      ],
    },
    {
      type: 'category',
      label: 'Solução',
      link: {
        type: 'generated-index',
        title: 'Solução',
        description:
          'Proposta de valor, arquitetura, impacto e sustentabilidade.',
        slug: '/category/solucao',
      },
      items: [
        'solucao/proposta_valor',
        'solucao/arquitetura',
        'solucao/ODS',
        'solucao/analise_mercado',
        'solucao/banchmarking',
        'solucao/modelo_financeiro',
      ],
    },
    {
      type: 'category',
      label: 'Stack de tecnologia',
      link: {
        type: 'generated-index',
        title: 'Stack de tecnologia',
        description:
          'Decisões técnicas sobre blockchain, dados sensíveis e treinamento distribuído.',
        slug: '/category/stack-tecnologia',
      },
      items: [
        'stack_tecnologias/porque_blockchain',
        'stack_tecnologias/arquitetura_blockchain',
      ],
    },
    'equipe',
    'status_projeto',
    'roadmap',
  ],
};

export default sidebars;
