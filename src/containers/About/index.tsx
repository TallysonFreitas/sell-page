import React, { useState } from "react";
import Paragraph from "../../components/Paragraph";

export type CEPType = {
    bairro: string;
    cep: string;
    complemento: string;
    ddd: string;
    gia: string;
    ibge: string;
    localidade: string;
    logradouro: string;
    siafi: string;
    uf: string;
    unidade: string;
};

export type data = {
    name: string;
    price: number | null;
    img: string;
    description: string;
};

const About = ({ description, img, name, price }: data) => {
    const [cepTemp, setCepTemp] = useState<string>("");
    const [cep, setCep] = useState<CEPType>();
    const [quantity, setQuantity] = useState(1);

    function buscaCEP() {
        if (cepTemp.length == 8) {
            fetch(`https://viacep.com.br/ws/${cepTemp}/json/`)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setCep(data);
                });
        } else {
            window.alert("CEP invalido");
        }
    }

    return (
        <div className="container-lg py-5">
            <div className="row pt-5">
                <div className="col">
                    <div
                        id="carouselExample"
                        className="carousel slide carousel-dark"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    className="d-block w-100"
                                    src={img}
                                    alt="Natura Homem ESSENC"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    className="d-block w-100"
                                    src="https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwee0be46b/Produtos/NATBRA-59847_4.jpg"
                                    alt="Natura Homem ESSENC"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    className="d-block w-100"
                                    src="https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwf1a82e09/Produtos/NATBRA-59847_1.jpg"
                                    alt="Natura Homem ESSENC"
                                />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="bg-light container-fluid h-100 p-4">
                        {/* Title */}
                        <h2 className="fw-normal my-4">{name}</h2>

                        {/* Code, minimal description */}
                        <div className="mb-4">
                            <Paragraph size="normal">NATURA HOMEM</Paragraph>
                            <Paragraph size="small">
                                Cod. NATBRA-59847 - Desodorante Perfume Natura
                                Homem Essence 100 ml
                            </Paragraph>
                        </div>

                        {/* Assessments */}
                        <div className="mb-3">
                            <i
                                className="bi bi-star-fill pe-1"
                                style={{ color: "#FCC433" }}
                            ></i>
                            <i
                                className="bi bi-star-fill pe-1"
                                style={{ color: "#FCC433" }}
                            ></i>
                            <i
                                className="bi bi-star-fill pe-1"
                                style={{ color: "#FCC433" }}
                            ></i>
                            <i
                                className="bi bi-star-fill pe-1"
                                style={{ color: "#FCC433" }}
                            ></i>
                            <i
                                className="bi bi-star-fill pe-1"
                                style={{ color: "#FCC433" }}
                            ></i>
                            <span className="fs-8 ms-3">534 avaliacoes</span>
                        </div>

                        {/* Prices */}
                        <div className=" mb-4">
                            <p className="text-danger fw-bold fs-2 mb-0">
                                R$ {price},99
                            </p>
                            <p className="lead fs-6">
                                À vista ou em até{" "}
                                <strong className="fw-bold">
                                    6x de R$ 33,32
                                </strong>{" "}
                                sem juros
                            </p>
                        </div>

                        {/* Quantity control */}
                        <div className="mb-4 d-flex justify-content-start gap-3">
                            <div
                                className="btn-group"
                                role="group"
                                aria-label="Basic example"
                            >
                                <button
                                    type="button"
                                    className="btn btn-danger rounded-start-pill ps-3"
                                    disabled={quantity == 1}
                                    onClick={() => {
                                        setQuantity(quantity - 1);
                                    }}
                                >
                                    -
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    disabled
                                >
                                    {quantity}
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger rounded-end-pill pe-3"
                                    onClick={() => {
                                        setQuantity(quantity + 1);
                                    }}
                                >
                                    +
                                </button>
                            </div>
                            <button className="btn btn-danger px-5 rounded-pill fw-normal">
                                <i className="bi bi-basket3 pe-1"></i>adicionar
                            </button>
                        </div>

                        {/* CEP Buttons  */}
                        {cep == null ? (
                            <button
                                type="button"
                                className="btn btn-outline-danger w-100 py-3 fs-6"
                                data-bs-toggle="modal"
                                data-bs-target="#searchCEP"
                            >
                                Insira seu CEP e confirme a disponibilidade para
                                sua região.
                            </button>
                        ) : (
                            <div className="border border-1 border-dark p-3 rounded d-flex justify-content-between align-items-center">
                                <p className="mb-0 fs-6 fw-bold">
                                    Entregar em:{" "}
                                    <span className="fw-normal">
                                        {cep.localidade} - {cep.uf}
                                    </span>
                                </p>
                                <button
                                    className="btn btn-link"
                                    data-bs-toggle="modal"
                                    data-bs-target="#searchCEP"
                                >
                                    alterar
                                </button>
                            </div>
                        )}

                        {/* Modal */}
                        <div
                            className="modal fade"
                            id="searchCEP"
                            tabIndex={-1}
                            aria-labelledby="searchCEPLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1
                                            className="modal-title fs-5"
                                            id="searchCEPLabel"
                                        >
                                            insira seu CEP de entrega
                                        </h1>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="modal-body">
                                        <form
                                            className="needs-validation"
                                            noValidate
                                        >
                                            <p>
                                                a disponibilidade de estoque
                                                pode variar dependendo da região
                                            </p>
                                            <div className="my-4">
                                                <label
                                                    htmlFor="cep"
                                                    className="form-label fw-bold text-muted"
                                                >
                                                    CEP
                                                </label>
                                                <input
                                                    type="number"
                                                    minLength={8}
                                                    maxLength={8}
                                                    className="form-control p-3"
                                                    id="cep"
                                                    placeholder="digite seu CEP"
                                                    required
                                                    onChange={(e) =>
                                                        setCepTemp(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={cepTemp}
                                                />
                                                <div className="invalid-feedback">
                                                    Please provide a valid city.
                                                </div>
                                            </div>
                                            <a
                                                href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                nao sei meu CEP
                                            </a>

                                            <div className="modal-footer mt-4">
                                                <button
                                                    id="confirma-cep"
                                                    type="button"
                                                    className="btn btn-dark w-100 rounded-pill"
                                                    data-bs-dismiss="modal"
                                                    onClick={() => {
                                                        buscaCEP();
                                                    }}
                                                >
                                                    confirmar
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="mt-4">
                            {description} Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Perferendis fugit fugiat, qui
                            debitis adipisci alias modi ipsum dolorum, assumenda
                            rerum repellendus. Animi eveniet quasi, accusamus
                            omnis dolores eum unde eos. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Unde aspernatur
                            facere error corporis fuga fugiat molestiae sint,
                            numquam distinctio facilis. Magni aliquam molestiae
                            reiciendis illo at a atque mollitia? Quis!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
