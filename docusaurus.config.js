// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "FuzzyNat26",
    tagline: "Self-proclaimed Generalist Developer",
    favicon: "img/personal_avatar.png",

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
                // blog: {
                //     showReadingTime: true,
                //     blogDescription: "Blog articles that were written by Jonathan."
                // },
                blog: false,
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
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
                title: "FuzzyNat26",
                // logo: {
                //   alt: 'My Site Logo',
                //   src: 'img/personal_avatar.png',
                // },
                items: [
                    { to: "/resume", label: "Resume", position: "right" },
                    // { to: "/blog", label: "Blog", position: "right" },
                    { to: "/portfolio", label: "Portfolio", position: "right" },
                ],
            },
            footer: {
                copyright: `Copyright © ${new Date().getFullYear()} FuzzyNat26. All right reserved.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            colorMode: {
                defaultMode: "dark",
            },
        }),

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
};

module.exports = config;
