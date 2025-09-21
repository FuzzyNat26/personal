import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import personalAvatarUrl from "@site/static/img/personal_avatar.webp";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <>
            <header>
                <div className="container py-16 text-center">
                    <img
                        className="w-[280px] h-[280px] rounded-full lightense"
                        src={personalAvatarUrl}
                        alt="Jonathan's Personal Avatar"
                    />
                    <h1 className="text-2xl sm:text-4xl">{siteConfig.title}</h1>
                    <p className="text-gray-600 text-md sm:text-xl dark:text-gray-400">
                        {siteConfig.tagline}
                    </p>

                    <div className="flex flex-col justify-center gap-4 align-stretch sm:align-middle sm:flex-row">
                        <Link
                            className="button button--primary button--lg"
                            to="/resume"
                        >
                            Learn more
                        </Link>

                        <Link
                            className="button button--secondary button--lg"
                            to="/portfolio"
                        >
                            Explore portfolio
                        </Link>
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
