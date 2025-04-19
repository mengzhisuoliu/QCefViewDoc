// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "QCefView",
  tagline: "A QWidget-based WebView Component Integrated with CEF",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://CefView.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/QCefView/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/CefView/QCefViewDoc/tree/master",
          editLocalizedFiles: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: "keywords", content: "Qt, CEF, Qt+CEF, Qt CEF integration" },
      ],

      navbar: {
        title: "QCefView",
        logo: {
          src: "img/logo.svg",
        },

        items: [
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "left",
            label: "Docs",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/cefview/qcefview",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
