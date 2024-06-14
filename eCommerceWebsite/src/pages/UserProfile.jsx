import React, { useState, useEffect } from "react";
import { Shoes } from '../components/index'
import service from "../appwrite/config";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Query } from "appwrite";

function UserProfile() {
// Don't Forget to add Price in the attributes in appwrite and config.js!
// Don't Forget to add Price in the attributes in appwrite and config.js!
// Don't Forget to add Price in the attributes in appwrite and config.js!
// Don't Forget to add Price in the attributes in appwrite and config.js!
// Don't Forget to add Price in the attributes in appwrite and config.js!
    const [products, setProducts] = useState([]);
    const userData = useSelector((state) => state.auth.userData);
    console.log(userData)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const fetchedProducts = await service.getProducts(
                [Query.equal('userID', useSelector((state) => state.auth.userData.$id))]
              );
            setProducts(fetchedProducts.documents);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

    console.log(products);

    const isAuthor = products && userData ? products.UserID === userData.$id : false;

    return (
        <div className="w-full bg-[#EEEDF2] pt-14 px-14 pb-32 font-poppins">
            <div className="flex gap-28 items-start">
                <div className="bg-white p-8 min-w-96 text-center border-[1px] border-[#c6c7c9]">
                    <div className="relative">
                        {/* Add the featuredImage of the user */}
                        <img src={Shoes} alt="User Image" className="w-40 h-40 rounded-full mx-auto"/>
                        <p className="absolute top-0 right-0">- Online</p>
                    </div>
                    <h3 className="mt-1">Name</h3>
                    <p>User ID</p>
                    <h4>Edit Description</h4>
                    <button>Preview E-Coma Profile</button>
                    <hr />
                    <div className="flex justify-between items-center">
                        <h5>From</h5>
                        <p>Location</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <h5>Member Since</h5>
                        <p>Data</p>
                    </div>
                </div>

                {isAuthor && 
                    <div className="w-[59%]">
                        <header className="border-[1px] border-[#c6c7c9] flex text-left w-[100%] px-5 py-5 font-medium uppercase tracking-tighter bg-white">
                            <h1 className="cursor-pointer mr-8">Active Products</h1>
                            <h1 className="cursor-pointer">Inactive</h1>
                        </header>
                        <section className="mt-7 grid grid-cols-3 gap-4">
                            {products.length > 0 && products.map((product, index) => (
                                    <div key={index} className="w-[230px] bg-white border-[1px] border-[#c6c7c9]">
                                        <Link to={`/product/${product.$id}`}>
                                            <img src={service.getFilePreview(product.featuredImage)} alt={product.title} />
                                            <div className="py-3 px-2">
                                                <h3>{product.title}</h3>
                                                <div className="flex justify-between">
                                                    <p>Icon</p>
                                                    {/* <p>Price {product.price}</p> */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                            ))}
                        </section>
                    </div>
                }
            </div>
        </div>
    );
}

export default UserProfile;