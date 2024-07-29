import React, { useState, useEffect }  from "react";
import ProductPostForm from '../components/ProductPostForm'
import { useNavigate } from "react-router-dom";
import service from "../appwrite/config";
import { useParams } from "react-router-dom";


function EditProduct() {
    const [product, setProduct] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            service.getProduct(slug)
            .then((product) => {
                if (product) {
                    console.log('Fetched Product', product);
                    setProduct(product)
                }
            })
            .catch(e => console.log(`Error while getting product at src/pages/EditProduct: ${e}`))
        }
        else {
            navigate('/')
        }
    }, [slug, navigate])

    return product ? (
        <div>
            <ProductPostForm product={product} slug={slug}/>
        </div>
    ) : null
}

export default EditProduct;