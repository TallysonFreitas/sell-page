import React, { useEffect, useState } from "react";
import { EstiloGlobal } from "./style";
import Header from "./containers/Header";
import About from "./containers/About";

function App() {
    const [product_data, setProduct_data] = useState(null);

    console.log(product_data);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/get-product/1")
            .then((data) => data.json())
            .then((res) => {
                setTimeout(() => {
                    setProduct_data(res);
                }, 1000);
            });
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
