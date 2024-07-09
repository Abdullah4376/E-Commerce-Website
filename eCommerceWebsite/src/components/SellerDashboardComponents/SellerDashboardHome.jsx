import React, { useEffect, useState } from "react";
import { Sidebar } from '../index'
import service from "../../appwrite/config";

function SellerDashboardHome() {

    // Check User Orders and display them on the UI
    // Check Whether If the user has some products or not

    const [userHasProducts, setUserHasProducts] = useState(false)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await service.getProducts();
                if (products) {
                    setUserHasProducts(true);
                }
            } catch (error) {
                console.log(error);
                setUserHasProducts(false);
            }
        }
        
    }, []);


    return(
        <div className="bg-[#F1F1F1] flex justify-center w-full min-h-fit rounded-t-lg font-poppins">
            <Sidebar active='home' settingsActive='' />
            <div className="px-3 py-6 flex justify-center ml-60">

                {/* Check whether User has Products or not! */}
                {userHasProducts ? (
                    <div className="w-full max-w-4xl bg-white">
                        <h1>No Orders to fulfill!</h1>
                    </div>
                ) : (
                    <div className="w-full max-w-4xl bg-white">
                        <h1>
                            <span className="material-symbols-outlined text-gray-700">
                                add_shopping_cart
                            </span>
                            You have currently <span>0 Products!</span>
                        </h1>
                    </div>
                )}

            </div>
        </div>
    )
}

export default SellerDashboardHome;