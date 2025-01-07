// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
// const typesenseSearchPlugin = require('docusaurus-typesense-search-plugin');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cloud Azure Platform',
  tagline: 'Innovative',
  favicon: 'img/cloud.ico',

  // Set the production url of your site here
  url: 'http://192.168.0.216:3000',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  // themes: ['docusaurus-theme-search-typesense'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,  // Enable hashed filenames for better cache management
        language: ["en"],  // Specify the language(s) for indexing
        indexDocs: true,  // Set to true to index documents
        indexPages: true,  // Set to true to index standalone pages
        highlightSearchTermsOnTargetPage: true, // Highlight search terms on the target page
        explicitSearchResultPath: true,  // Adds a search result path
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
  // algolia: {
  //   apiKey: '4d2da821daad24ec4d0fb575e6502525',
  //   indexName: 'AlgoliaSearch',
  //   contextualSearch: true,
  //   placeholder: 'Search any WIKI info',
  //   appId: 'HQJKR62WLA',
  // },
  // typesense: {
  //   typesenseCollectionName: 'docusaurus_WIKI',

  //   typesenseServerConfig: {
  //     nodes: [
  //       {
  //        host: 'localhost',
  //        port: '8108',
  //        protocol: 'http',
  //       },
  //     ],
  //     apiKey: 'e3xLYuTOuBx0nkL34Q13m93arvHXrNH1E4z1jeZZiM2msXtH',
  //   },
  //   typesenseSearchParameters: {},

  //     // Customize according to your needs
  //   contextualSearch: true,
  //   searchPagePath: 'search'
  // },

      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'B Cloud',
        logo: {
          alt: 'Cloud Logo',
          src: 'img/cloud.svg',
        },
        items: [
          {
            to: 'docs/Introduction/Intro',
            // sidebarId: 'introSidebar',
            position: 'left',
            label: 'Home',
          },
          {
            type: 'search',
            position: 'right'
          },
          {
            type: 'docSidebar',
            sidebarId: 'ccoeSidebar',
            position: 'left',
            label: 'CCOE Platform',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // search: {
      //   // Enable the built-in search bar
      //   search: true,
      // },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Home',
                to: 'docs/Introduction/Intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
