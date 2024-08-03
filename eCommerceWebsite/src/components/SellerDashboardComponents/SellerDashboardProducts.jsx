import React, { useEffect, useState } from 'react';
import { Sidebar } from '../index.js'
import { Link } from 'react-router-dom';
import service from '../../appwrite/config';
import { Query } from 'appwrite';
import { useSelector } from 'react-redux';

// We'll have to show the user:
// product preview image, in stock count, status, type, product title

function SellerDashboardProducts() {

    const [products, setProducts] = useState([]);
    const userData = useSelector(state => state.auth.userData);
    const [loading, setLoading] = useState(true)

    const fetchProducts = async () => {
        try {
            const products = await service.getProducts([
                Query.equal('UserID', userData.$id)
            ]);
            console.log(products);
            setProducts(products.documents);
        } catch (error) {
            console.log('Error while fetching products', error);
        } finally {
            setLoading(false);            
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="w-full text-center py-72" role="status">
                <svg aria-hidden="true" className="inline w-14 h-14 text-gray-300 animate-spin fill-blue-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="text-blue-700 ml-3 text-2xl font-poppins font-medium">Loading...</span>
            </div>
        );
    }

    return (
        <div className="bg-[#F1F1F1] flex justify-center w-full min-h-[90vh] rounded-t-lg font-inter">
            <Sidebar active='sell' settingsActive='' />
            <div className="px-3 py-6 w-[75%] ml-60">
                <header className='text-xl font-semibold flex justify-between'>
                    <h1>Products</h1>
                    <Link to='/add-product' className='text-sm font-normal bg-green-700 text-white p-3 py-2 rounded-md'>Add Product</Link>
                </header>
                <main className='bg-white mt-4 py-2 rounded-lg rounded-b-lg border border-slate-300'>
                    <header className="px-3 flex justify-between items-center">
                        {/* Left Section */}
                        <div className="flex gap-2 text-sm">
                        <button className="p-2 hover:bg-blue-50 hover:text-blue-600 px-3 rounded-lg">
                            All
                        </button>
                        <button className="p-2 hover:bg-blue-50 hover:text-blue-600 px-3 rounded-lg">
                            Active
                        </button>
                        <button className="p-2 hover:bg-blue-50 hover:text-blue-600 px-3 rounded-lg">
                            Inactive
                        </button>
                        </div>

                        {/* Right Section */}
                        
                        <button className="px-1 py-1 rounded-lg border border-slate-400 flex items-center">
                            <span
                            style={{ fontSize: "22px" }}
                            className="material-symbols-outlined"
                            >
                            filter_list
                            </span>
                        </button>
                    </header>

                    <div className="text-xs grid grid-cols-8 gap-4 items-center border-t px-4 mt-2 py-3 border-slate-300 bg-[#fafafa]">
                        {/* Checkbox at the left! */}
                        <div className="flex items-center col-span-1">
                            <input
                                type="checkbox"
                                value=""
                                className="border-[#575757] checked:border-solid checked:bg-[#575757] appearance-none border border-dashed hover:border-solid cursor-pointer h-5 min-w-5 rounded-full custom-checkbox"
                            />
                            {/* <label
                                htmlFor="order"
                                className="z-50 select-none w-full h-full pl-3 text-xs font-semibold hover:cursor-pointer"
                            >
                                Order
                            </label> */}
                        </div>

                        <h1 className="col-span-2 font-semibold">Product</h1>
                        <h1 className="col-span-1 font-semibold">Status</h1>
                        <h1 className="col-span-1 font-semibold">Stock Status</h1>
                        <h1 className="col-span-2 font-semibold">Type</h1>
                        <h1 className="col-span-1 font-semibold">Live Link</h1>
                    </div>

                    {products.length !== 0 ? products.map(product => (
                        <div key={product.$id} className="grid grid-cols-8 gap-4 items-center text-sm text-[#575757] border-t border-slate-300 px-4 py-2">
                            <div className="flex items-center col-span-1">
                                <input
                                id={product.$id}
                                type="checkbox"
                                value=""
                                className="border-[#575757] checked:border-solid checked:bg-[#575757] appearance-none border border-dashed hover:border-solid cursor-pointer h-5 min-w-5 rounded-full custom-checkbox"
                                />
                                <label
                                htmlFor={product.$id}
                                className="z-50 select-none w-full h-full pl-3 text-sm hover:cursor-pointer text-black"
                                >
                                    <img src={service.getFilePreview(product.featuredImage)} alt='Clothes' className='h-12 p-1 border rounded-md' />
                                </label>
                            </div>

                            <h1 className="col-span-2 font-semibold">{product.title}</h1>
                            <h1 className="col-span-1 font-semibold">{product.status}</h1>
                            <h1 className="col-span-1 font-semibold">{product.quantity}</h1>
                            <h1 className="col-span-2 font-semibold">Type</h1>
                            <Link
                                to={`/product/${product.$id}`} 
                                className="col-span-1 font-semibold text-green-400 cursor-pointer active:text-black select-none"
                            >
                                View
                            </Link>
                        </div>
                    )) : (
                        <div className='flex justify-center items-center'>
                            <h1>No data to show! Try refreshing or adding some products.</h1>
                        </div>
                    )}

                    
                </main>
            </div>
        </div>
    );
};

export default SellerDashboardProducts;