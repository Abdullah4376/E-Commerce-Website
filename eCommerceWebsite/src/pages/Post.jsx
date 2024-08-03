import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { Button, Footer } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    console.log(userData);

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
                navigate("/");
            }
        });
    };

    return product ? (
        <>
            <div className="px-28 py-8">

            
                <div className="h-full w-full mb-4 p-6 grid grid-cols-3 items-start">
                    <img
                        src={service.getFilePreview(product.featuredImage)}
                        alt={product.title}
                        className="col-span-2 w-[95%] max-h-[450px] min-h-[400px] rounded-lg"
                    />

                    <div className="col-span-1 font-assistant">
                        <h1 className="text-4xl">{product.title}</h1>
                        <h6 className="tracking-wider mt-5 font-light text-xl">${product.price} USD</h6>
                        
                        <h3 className="font-light text-sm mt-5">Quantity ({product.quantity} in stock)</h3>
                        <div className="mt-2 w-2/5 py-2 px-4 text-xl border border-slate-400 flex justify-between items-center">
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
                    // {isAuthor && (
                    //     <div className="absolute right-6 top-6">
                    //         <Link to={`/edit-product/${product.$id}`}>
                    //             <Button bgcolor="bg-green-500" className="mr-3">
                    //                 Edit
                    //             </Button>
                    //         </Link>
                    //         <Button bgcolor="bg-red-500" onClick={deleteProduct}>
                    //             Delete
                    //         </Button>
                    //     </div>
                    // )}