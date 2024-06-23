import React, { useState } from "react";

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

    function buscaCEP() {
        fetch(`https://viacep.com.br/ws/${cepTemp}/json/`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setCep(data);
            });
    }

    return (
        <div className="container py-5">
            <div className="row pt-5">
                <div className="col">
                    <img
                        className="img-fluid"
                        src={img}
                        alt="Natura Homem ESSENC"
                    />
                </div>
                <div className="col">
                    <div className="bg-light container-fluid h-100">
                        <h2 className="fw-normal pt-4 pb-1">{name}</h2>
                        <p className="lead fs-6 pb-2 mb-0">NATURA HOMEM</p>
                        <p className="lead fs-6 pb-4 mb-0">
                            Cod. NATBRA-59847 - Desodorante Perfume Natura Homem
                            Essence 100 ml
                        </p>
                        <p className="text-danger fw-bold fs-2 mb-0">
                            R$ {price}
                        </p>
                        <p className="lead fs-6">
                            À vista ou em até{" "}
                            <strong className="fw-bold">6x de R$ 33,32</strong>{" "}
                            sem juros
                        </p>
                        {cep == null ? (
                            <button
                                type="button"
                                className="btn btn-outline-dark w-100 py-2 fs-6"
                                data-bs-toggle="modal"
                                data-bs-target="#searchCEP"
                            >
                                Insira seu CEP e confirme a disponibilidade para
                                sua região.
                            </button>
                        ) : (
                            <div className="border border-1 border-dark p-3 rounded">
                                <p className="mb-0 fs-6 fw-bold">
                                    Entregar em:{" "}
                                    <span className="fw-normal">
                                        {cep.localidade} - {cep.uf}
                                    </span>
                                </p>
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
                                        <form className="needs-validation">
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
                                            <a href="https://buscacepinter.correios.com.br/app/endereco/index.php">
                                                nao sei meu CEP
                                            </a>

                                            <div className="modal-footer mt-4">
                                                <button
                                                    id="confirma-cep"
                                                    type="button"
                                                    className="btn btn-dark w-100 rounded-pill"
                                                    onClick={() => {
                                                        if (
                                                            cepTemp.length == 8
                                                        ) {
                                                            buscaCEP();
                                                        }
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
                        <p className="mt-5">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
