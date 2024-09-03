import React from "react";
import service from '../appwrite/config.js'
import { Link } from 'react-router-dom'

function ProductCard({$id, title, featuredImage, price, brand}) {
    
    return(
        <>
                <div className="p-3 rounded-md group shadow-[#b6b6b6] shadow-2xl mb-2 min-h-72 cursor-pointer">
                    <Link to={`/product/${$id}`}>
                        <div className="overflow-hidden rounded-md relative">
                            <img src={service.getFilePreview(featuredImage)} alt={title} className="min-h-52 max-h-52 min-w-full rounded-md group-hover:scale-[1.07] group-hover:brightness-90 duration-300"/>
                        </div>

                        <div className="flex justify-between items-center mx-3 mt-6 mb-2">
                            {/* <button className="text-sm font-medium rounded-md text-[#55545B] px-3 py-1 bg-[#F6F6F7]">{category}</button> */}
                            <h3 className="text-xl font-medium text-[#1A152E]">{price}</h3>
                        </div>

                        <div className="">
                            <h1 className="text-sm">{title}</h1>
                            <p className="text-sm text-[#55545B]">by <span className="font-semibold">{brand}</span></p>
                        </div>
                    </Link>

                </div>
        </>
    )
}

export default ProductCard;