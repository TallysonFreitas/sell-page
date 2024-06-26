import React from "react";

type ParagraphType = {
    size: "small" | "normal";
    children: string;
};

const Paragraph = ({ size, children }: ParagraphType) => {
    return (
        <p className={size == "small" ? "lead fs-8 mb-0" : "lead fs-6 mb-0"}>
            {children}
        </p>
    );
};

export default Paragraph;
