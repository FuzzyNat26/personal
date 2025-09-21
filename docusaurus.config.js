// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "FuzzyNat26",
    tagline: "Self-proclaimed Generalist Developer",
    favicon: "img/personal_avatar.webp",

    // Set the production url of your site here
    url: "https://fuzzynat26.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/personal/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "FuzzyNat26", // Usually your GitHub org/user name.
    projectName: "personal", // Usually your repo name.
    trailingSlash: false,

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: false,
                blog: {
                    showReadingTime: true,
                    blogDescription:
                        "Blog articles that were written by Jonathan.",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        {
            image: "img/personal_avatar.webp",
            navbar: {
                title: "FuzzyNat26",
                items: [
                    { to: "/resume", label: "Resume", position: "left" },
                    { to: "/blog", label: "Blog", position: "left" },
                    { to: "/portfolio", label: "Portfolio", position: "left" },
                    {
                        type: "search",
                        position: "right",
                    },
                ],
            },
            footer: {
                copyright: `Copyright © ${new Date().getFullYear()} FuzzyNat26. All right reserved.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
              },
            colorMode: {
                defaultMode: "dark",
            },
            algolia: {
                // The application ID provided by Algolia
                appId: "YPKO3VKJOT",

                // Public API key: it is safe to commit it
                apiKey: "70d86192533655a90acdd9cbc4410982",

                indexName: "personal",

                contextualSearch: true,
            },
        },

    plugins: [
        async function myPlugin(context, options) {
            return {
                name: "docusaurus-tailwindcss",
                configurePostCss(postcssOptions) {
                    // Appends TailwindCSS and AutoPrefixer.
                    postcssOptions.plugins.push(require("tailwindcss"));
                    postcssOptions.plugins.push(require("autoprefixer"));
                    return postcssOptions;
                },
            };
        },
        [
            "@docusaurus/plugin-content-blog",
            {
                /**
                 * Required for any multi-instance plugin
                 */
                id: "portfolio",
                /**
                 * URL route for the blog section of your site.
                 * *DO NOT* include a trailing slash.
                 */
                routeBasePath: "portfolio",
                /**
                 * Path to data on filesystem relative to site dir.
                 */
                path: "./portfolio",
                blogTitle: "Portfolio",
                blogDescription:
                    "Projects that were developed by Jonathan along his developer journey 🌱",
                blogSidebarTitle: "Recent projects",
                exclude: ["**/_template/**"],
            },
        ],
    ],
    clientModules: [
        require.resolve('./src/extensions/LightenseModule.ts'),
    ],
};

module.exports = config;
