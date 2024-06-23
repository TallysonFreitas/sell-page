import React, { useEffect, useState } from "react";
import { EstiloGlobal } from "./style";
import Header from "./containers/Header";
import About from "./containers/About";

function App() {
    const [product_data, setProduct_data] = useState({
        id: null,
        name: "",
        price: null,
        img: "",
        description: "",
    });

    useEffect(() => {
        fetch("http://127.0.0.1:5000/get-product/1")
            .then((data) => data.json())
            .then((res) => {
                setProduct_data(res);
            });
    }, []);

    return (
        <>
            <EstiloGlobal />
            <Header />
            <About
                description={product_data.description}
                img={product_data.img}
                name={product_data.name}
                price={product_data.price}
            />
        </>
    );
}

export default App;
