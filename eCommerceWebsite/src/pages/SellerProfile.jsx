import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import service from '../appwrite/config';
import { Query } from 'appwrite';

function SellerProfile() {
    const { sellerId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchSellerProducts = async () => {
            try {
                const fetchedProducts = await service.getProducts([
                    Query.equal('UserID', sellerId),
                    Query.equal('status', 'active')
                ])
                setProducts(fetchedProducts.documents);
            } catch (error) {
                console.log('Error while fetching seller products!', error);
            }
        };
    
        fetchSellerProducts();
    }, [])
    
    // Successfully fetched products
    console.log(products);
    

    return (
        <>
            
        </>
    );
}

export default SellerProfile;