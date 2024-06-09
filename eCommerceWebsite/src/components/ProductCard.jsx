import React from "react";
import service from '../appwrite/config.js'
import { Link } from 'react-router-dom'

function ProductCard({$id, title, featuredImage}) {
    return(
        <>
                <div className="p-3 rounded-md bg-white group shadow-2xl mb-2">
                        <div className="overflow-hidden relative">
                            
                            <img src={service.getFilePreview(featuredImage)} alt={title} className="rounded-t-md group-hover:scale-110 group-hover:brightness-50 duration-500"/>

                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 duration-500 group-hover:opacity-100 text-center">
                                <Link to={`/product/${$id}`} className="px-10 duration-500 rounded-md py-2 font-normal bg-white mb-3 hover:text-white hover:bg-[#5F3AFC]">Buy Now</Link>
                                <button className="font-normal px-6 py-2 border-2 rounded-md text-white duration-500 hover:bg-[#5F3AFC] hover:border-[#5F3AFC]">Add To Cart</button>
                            </div>

                        </div>

                        {/* <div className="flex justify-between items-center mx-3 mt-6 mb-2"> */}
                            {/* <button className="text-sm font-medium rounded-md text-[#55545B] px-3 py-1 bg-[#F6F6F7]">{category}</button> */}
                            {/* <h3 className="text-xl font-medium text-[#1A152E]">{price}</h3> */}
                        {/* </div> */}

                        <div className="mx-3 mb-3">
                            <h1 className="text-lg font-semibold">{title}</h1>
                            {/* <p className="text-sm text-[#55545B]">{`by ${brand}`}</p> */}
                        </div>

                    </div>
        </>
    )
}

export default ProductCard;