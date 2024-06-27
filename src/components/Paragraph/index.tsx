import React from "react";

type ParagraphType = {
    size: "small" | "normal";
    children: string | React.ReactNode;
};

const Paragraph = ({ size, children }: ParagraphType) => {
    return (
        <p
            className={
                size == "small"
                    ? "lead fs-8 mb-0 text-gray"
                    : "lead fs-6 mb-0 text-gray fw-normal"
            }
        >
            {children}
        </p>
    );
};

export default Paragraph;
