import React, { useEffect, useState } from "react";
import { EstiloGlobal } from "./style";
import Header from "./containers/Header";
import About from "./containers/About";

function App() {
    // URL REQUEST
    const product = new URLSearchParams(window.location.search);

    // Product state
    const [product_data, setProduct_data] = useState({
        assessment: null,
        description: null,
        id: null,
        image: null,
        mark: null,
        name: null,
        price: null,
        rate: null,
        short_description: null,
    });

    // Requisition
    useEffect(() => {
        try {
            fetch(
                `http://127.0.0.1:5000/get-product/${product.get("product-id")}`
            )
                .then((data) => {
                    return data.json();
                })
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
            <About items={product_data} />
        </>
    );
}

export default App;
