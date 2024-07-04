import React from "react";
import { useAppSelector } from "../../redux/hooks";

const Header = () => {
    const { products } = useAppSelector((state) => {
        return state.cart;
    });
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light position-fixed top-0 start-0 w-100 z-2">
                <div className="container-md p-1">
                    {/* toggle button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* navbar */}
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
                            <li className="nav-item">
                                <a
                                    className="nav-link active text-danger fw-medium"
                                    aria-current="page"
                                    href="#"
                                >
                                    Sobre
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle text-danger fw-medium"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Produtos
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Fragrancias
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Desodorantes
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    {/* cart icon */}
                    <button
                        className="btn btn-danger position-relative me-4"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#cartCanvas"
                        aria-controls="cartCanvas"
                    >
                        <i
                            className="bi bi-basket3"
                            style={{ color: "#FFF" }}
                        ></i>
                        {products.length > 0 && (
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {products.length}
                                <span className="visually-hidden">
                                    unread messages
                                </span>
                            </span>
                        )}
                    </button>
                </div>
            </nav>
            {/* Canvas Cart */}
            <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="cartCanvas"
                aria-labelledby="labelCart"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="labelCart">
                        carrinho
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    {products.length == 0 ? (
                        <div>
                            Quando voce adicionar um item ele aparecerá aqui!
                        </div>
                    ) : (
                        <>
                            {products.map((each) => (
                                <div
                                    key={each.id}
                                    className="card mb-3"
                                    style={{ maxWidth: "540px" }}
                                >
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img
                                                src={
                                                    each.image != null
                                                        ? each.image
                                                        : ""
                                                }
                                                className="w-100 object-fit-cover h-100"
                                                alt={
                                                    each.name != null
                                                        ? each.name
                                                        : ""
                                                }
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title fs-6">
                                                    {each.name}
                                                </h5>
                                                <p className="card-text fs-7 mb-1">
                                                    {each.description}
                                                </p>
                                                <p className="card-text">
                                                    <small className="text-body-secondary fs-5">
                                                        {each.price}
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}

                    <div className="dropdown mt-3">
                        <button
                            className="btn btn-danger"
                            disabled={products.length == 0}
                        >
                            checkout <i className="bi bi-arrow-right ms-1"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
