import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    description: JSX.Element;
};

type ContactItem = {
    Link: string;
    Svg: React.ComponentType<React.ComponentProps<"svg">>;
};

const ContactList: ContactItem[] = [
    {
        Link: "https://linkedin.com/in/jonathann-dev",
        Svg: require("@site/static/img/contact-linkedin.svg").default,
    },
    {
        Link: "https://github.com/FuzzyNat26",
        Svg: require("@site/static/img/contact-github.svg").default,
    },
    {
        Link: "mailto:jonathann.dev@gmail.com",
        Svg: require("@site/static/img/contact-envelope.svg").default,
    },
];

const FeatureList: FeatureItem[] = [
    {
        title: "Current Activity",
        description: (
            <p>
                Writing my thesis related to Machine Learning while exploring
                iOS and Web Development. Also preparing the next blog post 😉
            </p>
        ),
    },
    {
        title: "About Me",
        description: (
            <p>
                 WWDC2022 Swift Student Challenge Winner, UIB Information
                Systems Student, and Apple Developer Academy @IL C22 Graduate.
            </p>
        ),
    },
    {
        title: "Find Me",
        description: (
            <>
                <div className="row gap-6 justify-center">
                    {ContactList.map((props, idx) => (
                        <Contact key={idx} {...props} />
                    ))}
                </div>
            </>
        ),
    },
];

function Contact({ Svg, Link }: ContactItem) {
    return (
        <div className={clsx("")}>
            <div className="text--center">
                <a href={Link} target="_blank">
                    <Svg
                        width={25}
                        height={25}
                        className="fill-black dark:fill-white hover:opacity-60"
                    />
                </a>
            </div>
        </div>
    );
}

function Feature({ title, description }: FeatureItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center padding-horiz--md padding-vert--md">
                <h3>{title}</h3>
                {description}
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
