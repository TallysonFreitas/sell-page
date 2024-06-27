import React from "react";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light position-fixed top-0 start-0 w-100 z-2">
            <div className="container-md p-1">
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
                                About
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
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Fragrancias
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
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
                <button className="btn btn-danger position-relative me-4">
                    <i className="bi bi-basket3" style={{ color: "#FFF" }}></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        99+
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
            </div>
        </nav>
    );
};

export default Header;
