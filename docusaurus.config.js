// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Documentation",
  tagline: "Efficient documentation solutions for everyone.",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "your-organisation", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/dhub-dev/template-docusaurus-blog/tree/main",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Universal Docs",
        items: [
          {
            "aria-label": "Discord Invite",
            className: "navbar--discord-link",
            href: "https://discord.gg/6qGnyrt7xy",
            position: "right",
          },
          {
            "aria-label": "GitHub Repository",
            className: "navbar--github-link",
            href: "https://github.com/dhub-dev/template-docusaurus-docs",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/dhub",
              },
              {
                label: "Discord",
                href: "https://discord.com/invite/6qGnyrt7xy",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/withdhub",
              },
            ],
          },
          {
            title: "Docusaurus",
            items: [
              {
                label: "Home",
                href: "https://docusaurus.io",
              },
              {
                label: "Documentation",
                href: "https://docusaurus.io/docs/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
          {
            title: "Dhub",
            items: [
              {
                label: "Home",
                href: "https://dhub.dev",
              },
              {
                label: "Get in touch",
                href: "mailto:hello@dhub.dev",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Blog Website, Inc. Built with Docusaurus, edited with Dhub`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
