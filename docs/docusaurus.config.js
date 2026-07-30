import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ecoa',
  tagline:
    'Comunicação acessível, gamificada e construída para compreender diferentes formas de falar.',
  favicon: 'img/mascote.png',

  future: {
    v4: true,
  },

  url: 'https://arielly-lima.github.io',
  baseUrl: '/YC-Blockchain/',
  organizationName: 'arielly-lima',
  projectName: 'YC-Blockchain',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl:
            'https://github.com/arielly-lima/YC-Blockchain/edit/main/docs/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Documentação',
      logo: {
        alt: 'Lumi, mascote do Ecoa',
        src: 'img/mascote.png',
      },
      items: [
        {
          href: 'https://ecoa-zeta.vercel.app/',
          label: 'Experimentar o MVP',
          position: 'right',
        },
        {
          href: 'https://github.com/arielly-lima/YC-Blockchain',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Comece aqui',
          items: [
            {
              label: 'Visão geral',
              to: '/',
            },
            {
              label: 'Status do projeto',
              to: '/status_projeto',
            },
          ],
        },
        {
          title: 'Solução',
          items: [
            {
              label: 'Proposta de valor',
              to: '/solucao/proposta_valor',
            },
            {
              label: 'Arquitetura',
              to: '/solucao/arquitetura',
            },
          ],
        },
        {
          title: 'Projeto',
          items: [
            {
              label: 'Por que blockchain?',
              to: '/stack_tecnologias/porque_blockchain',
            },
            {
              label: 'Repositório no GitHub',
              href: 'https://github.com/arielly-lima/YC-Blockchain',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ecoa. Construído com Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
