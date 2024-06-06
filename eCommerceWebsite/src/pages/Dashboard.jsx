import React, { useEffect, useState } from "react";
import service from "../appwrite/config.js";
import ProductCard from "../components/index.js";

function Dashboard() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        service.getProducts()
        .then(products => {
            if (products) {
                setProducts(products.documents)
            }
        })
        .catch(e => console.log(`Error while getting products at src/pages/Home.jsx: ${e}`))
    }, [])

    if (products.length <= 0) {
        return (
            <div className="w-full py-8">
                <h1>Login To Browse Products!</h1>
            </div>
        )
    }
    return (
        <div className="w-full py-8">
                {products.map(product => {
                    <div key={product.$id} className="grid grid-cols-3 mt-12 text-left gap-7">
                        <ProductCard {...product} />
                    </div>
                })}
        </div>
    )
}