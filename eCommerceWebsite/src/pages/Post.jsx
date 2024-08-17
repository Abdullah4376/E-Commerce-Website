import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { Footer } from "../components";
import parse from "html-react-parser";

export default function Post() {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const { slug } = useParams();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const brand = JSON.parse(localStorage.getItem('brand'));
    const { userData } = JSON.parse(localStorage.getItem('userData'));
    console.log(slug);
    

    const openCloseDropdown = () => {
        setIsOpen(!isOpen);
    };

    const isAuthor = product && userData ? product.UserID === userData.$id : false;

    useEffect(() => {
        if (slug) {
            service.getProduct(slug).then((product) => {
                if (product) {
                    setProduct(product)
                } else {
                    navigate("/seller-dashboard-products")
                };
            });
        } else navigate("/seller-dashboard-products");
    }, [slug, navigate]);

    const deleteProduct = () => {
        service.deleteProduct(product.$id).then((status) => {
            if (status) {
                service.deleteFile(product.featuredImage);
                alert('Product Deleted successfully!')
                navigate("/seller-dashboard-home");
            }
        });
    };

    return product ? (
        <>
            <div className="px-28 py-8">
                <div className="h-full w-full mb-4 p-6 grid grid-cols-8 items-start">
                    <div className="col-span-5 relative">
                        <img
                            src={service.getFilePreview(product.featuredImage)}
                            alt={product.title}
                            className="w-[95%] max-h-[450px] min-h-[400px] rounded-lg"
                        />
                        {isAuthor &&
                            <div>
                                <button onClick={() => navigate(`/edit-product/${product.$id}`)} className="hover:text-black absolute top-4 left-5 text-white bg-emerald-500 px-10 py-2 hover:bg-transparent border-emerald-500 border-y-[2px] duration-500">Edit</button>
                                <button onClick={deleteProduct} className="hover:text-black absolute top-4 right-[52px] text-white bg-emerald-500 px-10 py-2 hover:bg-transparent border-emerald-500 border-y-[2px] duration-500">Delete</button>
                            </div>
                        }
                    </div>

                    <div className="col-span-3 font-assistant">
                        <div className="flex justify-between items-center mb-2 relative">
                            <h1 className="font-poppins">By: <span className="font-medium">{brand}</span></h1>
                            <span onClick={openCloseDropdown} style={{fontSize: 30}} className="p-2 rounded-full duration-300 select-none hover:bg-[#e4e4e4] cursor-pointer material-symbols-outlined">more_horiz</span>
                            {isOpen &&
                                <div className="shadow-lg text-blue-400 border text-xl bg-white py-3 px-5 absolute right-0 top-12 rounded-2xl z-50">
                                    <Link /* When Clicked navigate to the seller's profile */ className='flex gap-1 items-center'>
                                        <span className="material-symbols-outlined ">open_in_new</span>
                                        <button className="decoration-dashed hover:underline">
                                            Go To Brand Profile
                                        </button>
                                    </Link>
                                </div>
                            }
                        </div>
                        <h1 className="text-4xl">{product.title}</h1>
                        <h6 className="tracking-wider mt-5 font-light text-xl">${product.price - 1}.99 USD</h6>
                        
                        <h3 className="font-light text-sm mt-5">Quantity ({product.quantity} in stock)</h3>
                        <div className="mt-2 w-2/5 py-2 px-4 text-xl border border-slate-400 flex justify-between items-center select-none">
                            <button className="tracking-[-2px]" onClick={() => quantity === 0 ? setQuantity(quantity) : setQuantity(quantity - 1)}>&#8208;&#8208;</button>
                            <h1>{quantity}</h1>
                            <button onClick={() => product.quantity > quantity ? setQuantity(quantity + 1) : setQuantity(quantity)}>+</button>
                        </div>

                        <div className="flex flex-col gap-4 items-center w-full pt-6">
                            <button className="px-5 py-3 border border-black w-full duration-300 hover:bg-slate-100">Add to Cart</button>
                            <button className="px-5 py-3 bg-black w-full text-white hover:bg-transparent hover:text-black border-black border-y-[1px] duration-500">Buy It Now!</button>
                        </div>

                        <div className="browser-css mt-6 max-h-[400px] overflow-scroll overflow-x-hidden">
                            {parse(product.content)}
                        </div>

                    </div>

                </div>
            </div>
            <Footer />
        </>
    ) : null;
}