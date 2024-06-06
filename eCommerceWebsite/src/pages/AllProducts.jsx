import React, { useState, useEffect }  from "react";
import service from '../appwrite/config';
import ProductCard from '../components/ProductCard';


function AllProducts() {
    const [products, setProducts] = useState([])
    useEffect(() => {}, []);
    service.getProducts([]).then(products => {
        if (products) {
            setProducts(products.documents);
        }
    }).catch(e => console.log(`Error While gettingAllProducts at src/pages/AllPosts.jsx`, e))

    return(
        <div className="w-full py-8">
            <div className="flex flex-wrap">
                {products.map((product) => (
                    <div key={product.$id} className="p-2 w-1/4">
                        <ProductCard post={product} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllProducts;