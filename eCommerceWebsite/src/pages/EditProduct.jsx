import React, { useState, useEffect }  from "react";
import ProductPostForm from '../components/ProductPostForm'
import { useNavigate } from "react-router-dom";
import service from "../appwrite/config";
import { useParams } from "react-router-dom";


function EditProduct() {
    const [products, setProducts] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            service.getProduct(slug)
            .then((product) => {
                if (product) {
                    console.log('Fetched Product', product);
                    setProducts(product)
                }
            })
            .catch(e => console.log(`Error while getting product at src/pages/EditProduct: ${e}`))
        }
        else {
            navigate('/')
        }
    }, [slug, navigate])

    return products ? (
        <div className="py-8">
            <ProductPostForm product={products} slug={slug}/>
        </div>
    ) : null
}

export default EditProduct;