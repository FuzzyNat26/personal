import React, { Children, ReactPropTypes } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

type CalloutItem = {
    children: React.ReactNode;
    Icon: String;
    Color: String;
};

export default function Callout({
    children,
    Icon,
    Color,
}: CalloutItem): JSX.Element {
    return (
        <>
            <div
                className={`flex gap-2 border-solid border-0 border-l-2 bg-opacity-[15%] py-2 px-3 mb-5 ${Color}`}
            >
                {Icon ? <span className="text-xl">{Icon}</span> : ""}
                <div>{children}</div>
            </div>
        </>
    );
}
