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
};

const Section = ({ direction }: Props) => {
    const mock: SectionsType = {
        img: "https://production.na01.natura.com/on/demandware.static/-/Sites-NatBrazil-Library/default/dwf179e8dd/53255-53255_caminho_olfativo.jpg",
        link: "",
        title: "Fragrância",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum nihil, aliquam fuga nulla accusamus voluptatem enim sit molestias velit cumque quas illo nesciunt, labore quibusdam vitae alias aspernatur quia id!",
    };

    return (
        <div className="container-lg mb-6">
            <div
                className={
                    direction == "clockwise" ? "row" : "row flex-row-reverse"
                }
            >
                {/* image */}
                <div className="col-md-6">
                    <img
                        className="img-fluid"
                        src={mock.img}
                        alt={mock.title}
                    />
                </div>

                {/* Text */}
                <div className="col-md-6 d-flex flex-column justify-content-center gap-md-4">
                    <h2 className="fw-bold mt-3">{mock.title}</h2>
                    <Paragraph size="normal">{mock.description}</Paragraph>
                </div>
            </div>
        </div>
    );
};

export default Section;
