import React, { useEffect, useState } from "react";
import { Sidebar } from '../index';
import service from "../../appwrite/config";

function SellerDashboardHome() {
    // Array of label texts for checkboxes
    const labelTexts = [
        "Add your first product",
        "Add a Custom Domain",
        "Customize Your Online Store",
        "Name Your Store",
        "Set  Your Shipping Rates",
        "Set up a Payment Provider",
        "Place a test order"
    ];

    const [tickCount, setTickCount] = useState(0);
    const [checkboxStates, setCheckboxStates] = useState(Array(labelTexts.length).fill(false)); // Create states for checkboxes

    const handleCheckboxChange = (index) => {
        const newCheckboxStates = [...checkboxStates];
        newCheckboxStates[index] = !newCheckboxStates[index];
        setCheckboxStates(newCheckboxStates);

        // Update tick count
        const newTickCount = newCheckboxStates.filter(Boolean).length;
        setTickCount(newTickCount);
    };

    const [userHasProducts, setUserHasProducts] = useState(false);

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
        };
        // fetchProducts();
    }, []);

    return (
        <div className="bg-[#F1F1F1] flex justify-center w-full min-h-fit rounded-t-lg font-poppins">
            <Sidebar active='home' settingsActive='' />
            <div className="px-3 py-6 w-[60%] ml-60">
                {/* Check whether User has Products or not! */}
                {userHasProducts ? (
                    <div className="w-full bg-white">
                        <h1>Add Products to get started!</h1>
                    </div>
                ) : (
                    <div>
                        <div className="w-full bg-white p-3 rounded-md shadow-md mb-3">
                            <h1 className="flex items-center">
                                <span className="material-symbols-outlined text-gray-700 mr-3">
                                    add_shopping_cart
                                </span>
                                You have currently&nbsp;
                                <span className="text-gray-600 font-normal">0 Orders to fulfill!</span>
                            </h1>
                        </div>
                        <h1 className="text-xl font-medium mt-7">Get Ready to sell</h1>
                        <p className="text-sm text-gray-700">Here's a guide to get started.</p>
                        <div className="w-full border-[1px] border-gray-200 bg-white rounded-md shadow-md mb-3 p-4 mt-5">
                            <h1 className="text-md font-medium">Setup Guide</h1>
                            <p className="text-sm text-gray-700">Use this guide to get your store up and running.</p>
                            <button 
                                className="text-sm border-[1px] border-gray-200 py-[2px] px-2 rounded-lg mt-2 cursor-text mb-3"
                            >
                                {tickCount} / {labelTexts.length} completed
                            </button>
                            <div className="mt-2 grid grid-cols-1 gap-1">
                                {labelTexts.map((text, index) => (
                                    <div key={index} className="flex hover:bg-slate-50 p-2 rounded-lg">
                                        <input
                                            type="checkbox"
                                            className={`appearance-none border border-dashed hover:border-solid cursor-pointer h-5 w-5 rounded-full ${checkboxStates[index] ? 'bg-black border-solid border-black' : 'border-gray-500'} custom-checkbox`}
                                            checked={checkboxStates[index]}
                                            id={`checkbox_${index}`}
                                            onChange={() => handleCheckboxChange(index)}
                                        />
                                        <label className="w-full h-full ml-2 text-sm hover:cursor-pointer">
                                            {text}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SellerDashboardHome;
