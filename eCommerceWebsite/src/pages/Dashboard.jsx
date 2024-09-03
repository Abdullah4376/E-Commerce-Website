import React, { useEffect, useState } from "react";
import service, { Service } from "../appwrite/config.js";
import { ProductCard } from "../components/index.js";
import { Query } from "appwrite";
import { useSelector } from "react-redux";

function Dashboard() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const searchData = useSelector(state => state.auth.searchQuery);
    const [inputValue, setInputValue] = useState(searchData ? searchData : '');

    const fetchAllProducts = async () => {
        try {
            const response = await service.getProducts([
                Query.notEqual('status', 'inactive')
            ]);
            setProducts(response.documents);
            console.log(products);
        } catch (e) {
            console.error("Error fetching products:", e);
        } finally {
            setLoading(false)
        }
    }

    // const fetchSellersBrandNames = async () => {
    //     try {
    //         products.
    //     } catch (error) {
    //         console.log('Cannot fetch Sellers Brand Names', error);
            
    //     }
    // }

    useEffect(() => {
        if (searchData) {
            searchProducts();
        } else if (inputValue) {
            searchProducts();
        } else {
            fetchAllProducts();
        }
    }, []);

    console.log(products);
    

    const searchProducts = async () => {
        if (!inputValue === null && '') {
            setLoading(true);
            try {
                const response = await service.getProducts([
                    Query.search('title', inputValue),
                    Query.notEqual('status', 'inactive')
                ]);
                setProducts(response.documents);
            } catch (error) {
                console.log('Error while searching products', error);
            }
            finally {
                setLoading(false);
            }
        } else {
            alert('A Search Query is required!')
        }
    };

    if (loading) {
        return (
            <div className="w-full text-center py-72" role="status">
                <svg aria-hidden="true" className="inline w-14 h-14 text-gray-300 animate-spin fill-blue-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="text-blue-700 ml-3 text-2xl font-poppins font-medium">Loading...</span>
            </div>
        )
    }

    if (products.length === 0) {
        return (
            <div className="w-full py-10 px-5 bg-[#F6F6F7] min-h-screen">
                <div className="flex justify-center items-center">
                    <div id="search" className="w-2/3 flex items-center mb-10">
                        <label htmlFor="searchField" className=" cursor-pointer material-symbols-outlined absolute z-50 ml-[14px] text-[#9B9AA5]">search</label>
                        <div className="w-full flex items-center relative">
                            <input 
                                onChange={(e) => setInputValue(e.target.value)} 
                                value={inputValue} 
                                placeholder="Pet Toys" 
                                id="searchField" 
                                type="text" 
                                className="rounded-md p-5 pl-11 w-full h-[60px]"
                            />
                            {
                                inputValue ? <span 
                                                style={{fontSize: 18}} 
                                                onClick={() => setInputValue('')} 
                                                className="p-[3px] cursor-pointer bg-gray-600 text-white font-bold material-symbols-outlined z-50 absolute right-[14px] rounded-full"
                                            >
                                                close
                                            </span> : null
                            }
                        </div>
                        <button onClick={searchProducts} className="bg-[#5F3AFC] ml-5 text-[#F7F6FF] px-8 py-[18px] rounded-md font-medium hover:bg-black duration-500">Search</button>
                    </div>
                </div>
                <h1>No Products Found!</h1>
            </div>
        )
    }

    return (
        <div className="px-5 py-10 bg-[#F6F6F7] min-h-screen">
            <div className="flex justify-center items-center">
                <div id="search" className="w-2/3 flex items-center mb-10">
                    <label htmlFor="searchField" className=" cursor-pointer material-symbols-outlined absolute z-50 ml-[14px] text-[#9B9AA5]">search</label>
                    <div className="w-full flex items-center relative">
                        <input 
                            onChange={(e) => setInputValue(e.target.value)} 
                            value={inputValue} 
                            placeholder="Pet Toys" 
                            id="searchField" 
                            type="text" 
                            className="rounded-md p-5 pl-11 w-full h-[60px]"
                        />
                        {
                            inputValue ? <span 
                                            style={{fontSize: 18}} 
                                            onClick={() => setInputValue('')} 
                                            className="p-[3px] cursor-pointer bg-gray-600 text-white font-bold material-symbols-outlined z-50 absolute right-[14px] rounded-full"
                                        >
                                            close
                                        </span> : null
                        }
                    </div>
                    <button onClick={searchProducts} className="bg-[#5F3AFC] ml-5 text-[#F7F6FF] px-8 py-[18px] rounded-md font-medium hover:bg-black duration-500">Search</button>
                </div>
            </div>
            <div className="w-full grid grid-cols-5 text-left gap-7">
                    {products.map(product => (
                        <div key={product.$id} className="col-span-1">
                            <ProductCard {...product} />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Dashboard;