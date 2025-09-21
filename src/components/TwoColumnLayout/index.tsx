import React from "react";

type ColumnLayout = {
    column: number;
    children: React.ReactNode;
};

const TwoColumnLayout = ({ column, children }: ColumnLayout) => {
    return <div className="grid grid-cols-2 gap-4">{children}</div>;
};

export default TwoColumnLayout;
