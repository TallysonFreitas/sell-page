import React, { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import {
    addProduct,
    incrementTotalPrice,
} from "../../redux/reducers/cartReducer";

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

export type ProductType = {
    assessment: number | null;
    description: string | null;
    id: number | null;
    image: string | null;
    mark: string | null;
    name: string | null;
    price: string | null;
    rate: string | null;
    short_description: string | null;
};

type Props = {
    items: ProductType;
};

const About = ({ items }: Props) => {
    const dispatch = useAppDispatch();

    const [cepTemp, setCepTemp] = useState<string>("");
    const [cep, setCep] = useState<CEPType>();
    const [quantity, setQuantity] = useState(1);

    function buscaCEP() {
        if (cepTemp.length == 8) {
            try {
                fetch(`https://viacep.com.br/ws/${cepTemp}/json/`)
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        setCep(data);
                    });
            } catch (error) {
                console.log(error);
            }
        } else {
            window.alert("CEP invalido");
        }
    }

    return (
        <>
            <div className="container-lg py-5 mb-6 text-blacked">
                {/* Way */}
                <div className="row pt-5">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li
                                className={`breadcrumb-item active ${
                                    items.name == null &&
                                    "placeholder col-2 ms-1"
                                }`}
                                aria-current="page"
                            >
                                {items.name}
                            </li>
                        </ol>
                    </nav>
                </div>

                {/* Product */}
                <div className="row pt-3">
                    {/* Carousel image */}
                    <div className="col-lg placeholder-glow">
                        <div
                            id="carouselExample"
                            className="carousel slide carousel-dark h-100"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner h-100">
                                <div className="carousel-item active h-100">
                                    {items.image == null ? (
                                        <div className="placeholder col-12 h-100"></div>
                                    ) : (
                                        <img
                                            className="d-block w-100 object-fit-cover h-100"
                                            src={
                                                items.image != null
                                                    ? items.image
                                                    : ""
                                            }
                                            alt={
                                                items.name != null
                                                    ? items.name
                                                    : ""
                                            }
                                        />
                                    )}
                                </div>
                                <div className="carousel-item h-100">
                                    {items.image == null ? (
                                        <div className="placeholder col-12 h-100"></div>
                                    ) : (
                                        <img
                                            className="d-block w-100 object-fit-cover h-100"
                                            src={
                                                items.image != null
                                                    ? items.image
                                                    : ""
                                            }
                                            alt={
                                                items.name != null
                                                    ? items.name
                                                    : ""
                                            }
                                        />
                                    )}
                                </div>
                                <div className="carousel-item h-100">
                                    {items.image == null ? (
                                        <div className="placeholder col-12 h-100"></div>
                                    ) : (
                                        <img
                                            className="d-block w-100 object-fit-cover h-100"
                                            src={
                                                items.image != null
                                                    ? items.image
                                                    : ""
                                            }
                                            alt={
                                                items.name != null
                                                    ? items.name
                                                    : ""
                                            }
                                        />
                                    )}
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
                                <span className="visually-hidden">
                                    Previous
                                </span>
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
                    <div className="col placeholder-glow">
                        <div className="bg-white container-fluid h-100 p-4">
                            {/* Title */}
                            <h2
                                className={`fw-normal my-4 ${
                                    items.name == null && "placeholder col-12"
                                }`}
                            >
                                {items.name}
                            </h2>

                            {/* Code, minimal description */}
                            <div className={`mb-4`}>
                                <p
                                    className={`${
                                        items.mark == null &&
                                        "placeholder col-6"
                                    }`}
                                >
                                    {items.mark}
                                </p>
                                <p
                                    className={`${
                                        items.mark == null &&
                                        "placeholder col-12"
                                    }`}
                                >
                                    {items.mark != null && "Cod."} {items.id}
                                    {" - "}
                                    {items.short_description}
                                </p>
                            </div>

                            {/* Assessments */}
                            <div
                                className={`mb-3 ${
                                    items.name == null && "placeholder col-8"
                                }`}
                            >
                                {Array.from({ length: Number(items.rate) }).map(
                                    (_, index) => (
                                        <i
                                            className="bi bi-star-fill pe-1"
                                            key={index}
                                            style={{ color: "#FCC433" }}
                                        ></i>
                                    )
                                )}
                                {items.rate != null &&
                                    Array.from({
                                        length: Math.ceil(
                                            5 - Number(items.rate)
                                        ),
                                    }).map((_, index) => (
                                        <i
                                            className="bi bi-star-fill pe-1"
                                            key={index}
                                            style={{ color: "#cacaca" }}
                                        ></i>
                                    ))}{" "}
                                - {Number(items.rate)}
                                <span className="fs-8 ms-3">
                                    {items.assessment} avaliacoes
                                </span>
                            </div>

                            {/* Prices */}
                            <div className=" mb-4">
                                <p
                                    className={`text-danger fw-bold fs-2 mb-0 ${
                                        items.price == null &&
                                        "text-dark placeholder col-6 mb-2"
                                    }`}
                                >
                                    {items.price}
                                </p>
                                <p
                                    className={` ${
                                        items.price == null &&
                                        "text-dark placeholder col-8"
                                    }`}
                                >
                                    À vista ou em até{" "}
                                    <strong className="fw-bold">
                                        6x de R$ 33,32
                                    </strong>{" "}
                                    sem juros
                                </p>
                            </div>

                            {/* Quantity control */}
                            <div
                                className={`mb-4 d-flex justify-content-start gap-3`}
                            >
                                {items.id != null ? (
                                    <>
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
                                                className={"btn btn-danger"}
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
                                        <button
                                            className="btn btn-danger px-5 rounded-pill fw-normal"
                                            id="liveToastBtn"
                                            onClick={() => {
                                                if (items.price != null) {
                                                    dispatch(
                                                        incrementTotalPrice(
                                                            quantity
                                                        )
                                                    );
                                                    dispatch(addProduct(items));
                                                }
                                            }}
                                        >
                                            <i className="bi bi-basket3 pe-1"></i>
                                            adicionar
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <div className="col-3 placeholder p-2 rounded-pill">
                                            1
                                        </div>
                                        <div className="col-4 placeholder p-2 rounded-pill">
                                            1
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* CEP Buttons  */}
                            {cep == null ? (
                                <button
                                    type="button"
                                    className={`btn btn-outline-danger w-100 py-3 fs-6 ${
                                        items.id == null && "placeholder"
                                    }`}
                                    data-bs-toggle="modal"
                                    data-bs-target="#searchCEP"
                                    disabled={items.id == null}
                                >
                                    <i className="bi bi-geo-alt pe-2"></i>Insira
                                    seu CEP e confirme a disponibilidade para
                                    sua região.
                                </button>
                            ) : (
                                <div className="border border-1 border-dark p-3 rounded d-flex justify-content-between align-items-center">
                                    <p className="mb-0 fw-bold">
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
                                                    pode variar dependendo da
                                                    região
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
                                                        Please provide a valid
                                                        city.
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
                            <p
                                className={`mt-4 ${
                                    items.id == null && "placeholder p-5 col-12"
                                }`}
                            >
                                {items.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-5"></div>
        </>
    );
};

export default About;
