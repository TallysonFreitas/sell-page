import React, { useEffect, useState } from "react";
import { EstiloGlobal } from "./style";
import Header from "./containers/Header";
import About from "./containers/About";

function App() {
    const product = new URLSearchParams(window.location.search);

    const [product_data, setProduct_data] = useState(null);

    useEffect(() => {
        try {
            fetch(
                `http://127.0.0.1:5000/get-product/${product.get("product-id")}`
            )
                .then((data) => data.json())
                .then((res) => {
                    setTimeout(() => {
                        setProduct_data(res);
                    }, 2000);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <>
            <EstiloGlobal />
            <Header />
            <About caracteristicas={product_data} />
        </>
    );
}

export default App;
