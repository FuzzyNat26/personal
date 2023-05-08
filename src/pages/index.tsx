import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    const repositoryUrl =
        "https://github.com/" +
        siteConfig.organizationName +
        siteConfig.baseUrl;

    return (
        <>
            <header>
                <div className="container text-center py-16">
                    <img
                        className="w-[280px] h-[280px] rounded-full"
                        src={"https://github.com/FuzzyNat26.png"}
                        alt="Jonathan's Personal Avatar"
                    />
                    <h1 className="text-2xl sm:text-4xl">{siteConfig.title}</h1>
                    <p className="text-md sm:text-xl text-gray-600 dark:text-gray-400">
                        {siteConfig.tagline}
                    </p>

                    <div className="flex gap-4 justify-center align-stretch sm:align-middle flex-col sm:flex-row">
                        <Link
                            className="button button--primary button--lg"
                            to="/resume"
                        >
                            Learn more
                        </Link>

                        <a
                            href={repositoryUrl}
                            target="_blank"
                            className="button button--secondary button--lg"
                        >
                            ⭐️ Star this repo
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="A collection of Jonathan's journey in Software Development along the years."
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
