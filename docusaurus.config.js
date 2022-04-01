// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Aprilbeat Documentation",
  tagline:
    "rythm game shouldn't be limited. Now publicly available, running fully on web.",
  url: "https://aprilbeat.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "boneapriltea", // Usually your GitHub org/user name.
  projectName: "aprilbeat-public", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/boneapriltea/aprilbeat-docs/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/boneapriltea/aprilbeat-docs/tree/main/packages/create-docusaurus/templates/shared/",
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
      navbar: {
        title: "Aprilbeat Docs",
        logo: {
          alt: "Aprilbeat Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Get Started",
          },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Aprilbeat Mechanism",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/boneapriltea/aprilbeat-public",
            label: "Game GitHub",
            position: "right",
          },
          {
            href: "https://github.com/boneapriltea/aprilbeat-docs",
            label: "Docs GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/E8P6JFCRW7",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/boneapriltea",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/boneapriltea/aprilbeat-docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bone April Tea, Inc. Made with love. 💖`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
