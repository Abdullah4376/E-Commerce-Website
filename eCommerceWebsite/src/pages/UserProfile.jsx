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
    const [userCountry, setUserCountry] = useState('');
    const userData = useSelector((state) => state.auth.userData);

    const extractMonthYear = (dateString) => {
        const date = new Date(dateString);
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return `${month} ${year}`;
    }

    const dateData = extractMonthYear(userData.$createdAt);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (userData) {
                    const fetchedProducts = await service.getProducts([
                        Query.equal('UserID', userData.$id)
                    ]);
                    setProducts(fetchedProducts.documents);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [userData]);

    // console.log(products);
    console.log(userData);

    return (
        <div className="w-full bg-[#EEEDF2] pt-14 px-14 pb-32 font-poppins">
            <div className="flex gap-28 items-start">
                <div className="bg-white p-8 min-w-[500px] text-center border-[1px] border-[#c6c7c9]">
                    <div className="relative">
                        {/* Add the featuredImage of the user */}
                        <img src={Shoes} alt="User Image" className="w-40 h-40 rounded-full mx-auto"/>
                        <p className="absolute top-0 right-0 border-[#1DBF73] border-[1px] text-sm text-[#1DBF73] px-2 rounded-xl">Online</p>
                    </div>

                    <h3 className="mt-3 text-xl font-medium text-[#222325]">{userData.name}</h3>
                    <p className="text-[#7A7D85] text-sm mt-1"><span className="font-medium text-red-500">User ID:</span> {userData.$id}</p>
                    <h4 className="flex items-center justify-center mt-2 mb-2"><span className="material-symbols-outlined">edit</span>Edit Description</h4>
                    <button className="mt-2 mb-6 border-[#62646A] border-[1px] w-full py-2 duration-300 rounded-md text-sm text-[#62646A] font-medium hover:bg-[#62646A] hover:text-white">Preview E-Coma Profile</button>
                    
                    <hr className="bg-[#c6c7c9]" />

                    <div className="flex justify-between items-center mt-4 text-sm text-[#2c2c2e]">
                        <h5 className="flex items-center"><span className="material-symbols-outlined mr-2">mail</span>Email</h5>
                        <p className="font-semibold text-[#4a4c50]">{userData.email}</p>
                    </div>

                    <div className="flex justify-between items-center text-sm text-[#2c2c2e] mt-4">
                        <h5 className="flex items-center"><span className="material-symbols-outlined mr-2">person</span>Member Since</h5>
                        <p className="font-semibold text-[#4a4c50]">{dateData}</p>
                    </div>
                </div>

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
                                                <p><span class="material-symbols-outlined">more_horiz</span></p>
                                                {/* <p>Price {product.price}</p> */}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                        ))}
                        </section>
                    </div>
            </div>
        </div>
    );
}

export default UserProfile;