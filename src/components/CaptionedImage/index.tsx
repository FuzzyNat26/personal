import React from "react";

type CaptionedImageItem = {
    title: string;
    src: string;
    alt: string;
    className: string;
};

export default function Callout({
    title,
    src,
    alt,
    className,
}: CaptionedImageItem): JSX.Element {
    if (title !== undefined) {
        return (
            <figure className={className}>
                <img src={src} alt={alt} className="w-100 lightense" />
                <figcaption className="text-center text-gray-600 dark:text-gray-400">
                    {title}
                </figcaption>
            </figure>
        );
    } else {
        return <img src={src} alt={alt} className={className} />;
    }
}
