import React from "react";
import Paragraph from "../../components/Paragraph";

export type SectionsType = {
    title: string;
    img: string;
    link: string;
    description: string;
};

export type Props = {
    direction: "clockwise" | "anticlockwise";
    info: SectionsType | null;
};

const Section = ({ direction, info }: Props) => {
    return info == null ? (
        <div className="container-lg mb-6 placeholder-glow">
            <div
                className={
                    direction === "clockwise" ? "row" : "row flex-row-reverse"
                }
            >
                {/* image */}
                <div className="col-md-6">
                    <div
                        className="w-100 placeholder"
                        style={{ minHeight: "400px" }}
                    ></div>
                </div>

                {/* Text */}
                <div className="col-md-6 d-flex flex-column justify-content-center gap-md-4">
                    <p className="fw-bold mt-3 col-4 placeholder h2"></p>
                    <p className="placeholder col-12 mb-0"></p>
                    <p className="placeholder col-12 mb-0"></p>
                    <p className="placeholder col-4 mb-0"></p>
                </div>
            </div>
        </div>
    ) : (
        <div className="container-lg mb-6 text-blacked">
            <div
                className={
                    direction === "clockwise" ? "row" : "row flex-row-reverse"
                }
            >
                {/* image */}
                <div className="col-md-6">
                    <img
                        className="img-fluid"
                        src={info.img}
                        alt={info.title}
                    />
                </div>

                {/* Text */}
                <div className="col-md-6 d-flex flex-column justify-content-center gap-md-4">
                    <h2 className="fw-bold mt-3">{info.title}</h2>
                    <Paragraph size="normal">{info.description}</Paragraph>
                </div>
            </div>
        </div>
    );
};

export default Section;
