import React, { useEffect, useState } from "react";
import { 
    Sidebar, AddProductRight, CustomDomain, OnlineStore, StoreName, Shipping, GeneralPayments, TestOrder
} from '../index';
import service from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function SellerDashboardHome() {

    const navigate = useNavigate();
    const userName = useSelector(state => state.auth.userData.name);
    console.log(userName)

    const descriptionTexts = [
        (
            <div>
                <div className='w-full flex justify-between items-center gap-3 px-7 pb-3 -mt-7'>
                    <div>
                        <p>
                            Write a description, add photos, and set pricing for the products you plan to sell.
                        </p>
                        <button className="text-xs hover:bg-black text-white duration-500 mt-3 p-2 rounded-lg bg-slate-700" onClick={() => navigate('/add-product')}>Add Product</button>
                    </div>
                    <div>
                        <img className="w-[164px] h-[124px] -mt-3" src={AddProductRight} />
                    </div>
                </div>
            </div>
        ),
        (
            <div>
                <div className='w-full flex justify-between items-center gap-3 px-7 pb-3 -mt-7'>
                    <div>
                        <p>
                            Choose a theme and add your logo, colors, and images to reflect your brand.
                        </p>
                        <button className="text-xs hover:bg-black text-white duration-500 mt-3 p-2 rounded-lg bg-slate-700" onClick={() => navigate('/profile')}>Customize Theme</button>
                    </div>
                    <div>
                        <img className="w-[164px] h-[124px] -mt-3" src={OnlineStore} />
                    </div>
                </div>
            </div>
        ),
        (
            <div>
                <div className='w-full flex justify-between items-center gap-3 px-7 pb-3 -mt-7'>
                    <div>
                        <p>
                            Your store name is <strong>{userName}</strong>. The store name appears in your admin and your online store.
                        </p>
                        <button className="text-xs hover:bg-black text-white duration-500 mt-3 p-2 rounded-lg bg-slate-700" onClick={() => navigate('/profile')}>Change Store Name</button>
                    </div>
                    <div>
                        <img className="w-[164px] h-[124px] -mt-3" src={StoreName} />
                    </div>
                </div>
            </div>
        ),

        // Change the Shipping Rates in Settings page!
        // Change the Shipping Rates in Settings page!
        // Change the Shipping Rates in Settings page!
        // Change the Shipping Rates in Settings page!
        // Change the Shipping Rates in Settings page!
        // Change the Shipping Rates in Settings page!
        // Change the Shipping Rates in Settings page!
        // Change the Shipping Rates in Settings page!
        (
            <div>
                <div className='w-full flex justify-between items-center gap-3 px-7 pb-3 -mt-5'>
                    <div>
                        <p>
                            Choose where you ship and how much you charge so your customers can see their shipping costs at checkout.
                        </p>
                        <button className="text-xs hover:bg-black text-white duration-500 mt-3 p-2 rounded-lg bg-slate-700" onClick={() => navigate('/seller-dashboard-settings')}>Set Shipping Rates</button>
                    </div>
                    <div>
                        <img className="w-[70%] h-[70%] -mt-3" src={Shipping} />
                    </div>
                </div>
            </div>
        ),

        // Add a payment method
        // Add a payment method
        // Add a payment method
        // Add a payment method
        // Add a payment method
        // Add a payment method
        // Add a payment method
        // Add a payment method
        // Add a payment method
        // Add a payment method

        (
            <div>
                <div className='w-full flex justify-between items-center gap-3 px-7 pb-3 -mt-7'>
                    <div>
                        <p>
                            Add a payment method so that you get paid when your customers purchase your products.
                        </p>
                        <button className="text-xs hover:bg-black text-white duration-500 mt-3 p-2 rounded-lg bg-slate-700">Add a Method</button>
                    </div>
                    <div>
                        <img className="w-[164px] h-[124px] -mt-3" src={GeneralPayments} />
                    </div>
                </div>
            </div>
        ),
        (
            <div>
                <div className='w-full flex justify-between items-center gap-3 px-7 pb-3 -mt-5'>
                    <div>
                        <p>
                            Make sure things are running smoothly by continously testing your products, and your store so that
                             it stays out of every danger.
                        </p>
                        <button className="text-xs hover:bg-black text-white duration-500 mt-3 p-2 rounded-lg bg-slate-700" onClick={() => navigate('/profile')}>Go to Profile</button>
                    </div>
                    <div>
                        <img className="w-[164px] h-[124px] -mt-3" src={TestOrder} />
                    </div>
                </div>
            </div>
        ),
    ]

    const labelTexts = [
        "Add your first product",
        "Customize Your Online Store",
        "Name Your Store",
        "Set  Your Shipping Rates",
        "Add a Payment Method",
        "Continous Testing"
    ];

    const [tickCount, setTickCount] = useState(0);
    const [checkboxStates, setCheckboxStates] = useState(Array(labelTexts.length).fill(false));
    const [dropdownStates, setDropdownStates] = useState(Array(labelTexts.length).fill(false));

    // Load checkbox states and tick count from local storage on mount
    useEffect(() => {
        try {
            const storedCheckboxStates = JSON.parse(localStorage.getItem('checkboxStates'));
            if (storedCheckboxStates) {
                setCheckboxStates(storedCheckboxStates);
                const storedTickCount = storedCheckboxStates.filter(Boolean).length;
                setTickCount(storedTickCount);
            }
        } catch (error) {
            console.error('Failed to parse checkbox states from local storage:', error);
        }
    }, []);

    const handleCheckboxChange = (index) => {
        const newCheckboxStates = [...checkboxStates];
        newCheckboxStates[index] = !newCheckboxStates[index];
        setCheckboxStates(newCheckboxStates);

        const newTickCount = newCheckboxStates.filter(Boolean).length;
        setTickCount(newTickCount);
        
        // Save checkbox states and tick count to local storage
        localStorage.setItem('checkboxStates', JSON.stringify(newCheckboxStates));
        localStorage.setItem('tickCount', newTickCount);
    };

    const handleLabelClick = (index) => {
        const originalDropdownStates = [...dropdownStates]
        const newDropdownStates = Array(dropdownStates.length).fill(false);
        newDropdownStates[index] = !originalDropdownStates[index];
        setDropdownStates(newDropdownStates);
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
            <div className="px-3 py-6 w-[75%] ml-60">
                {userHasProducts ? (
                    <div className="w-full">
                        <div className="w-full bg-[#F2F7FA] border-[2px]">
                            hello
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="w-full bg-white p-3 py-4 rounded-md shadow-md mb-3">
                            <h1 className="flex items-center">
                                <span className="material-symbols-outlined text-gray-700 mr-3">
                                    add_shopping_cart
                                </span>
                                You have currently&nbsp;
                                <span className="text-amber-600 font-normal">0 Products!</span>
                                &nbsp;Add Some Products to Generate Sales
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
                                    <div key={index} className="flex flex-col hover:bg-slate-100 p-2 gap-2 rounded-lg">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className={`appearance-none border border-dashed hover:border-solid cursor-pointer h-5 w-5 rounded-full ${checkboxStates[index] ? 'bg-black border-solid border-black' : 'border-gray-500'} custom-checkbox`}
                                                checked={checkboxStates[index]}
                                                id={`checkbox_${index}`}
                                                onChange={() => handleCheckboxChange(index)}
                                            />
                                            <label
                                                className="z-50 select-none w-full h-full ml-2 text-sm hover:cursor-pointer"
                                                onClick={() => handleLabelClick(index)}
                                            >
                                                {text}
                                            </label>
                                        </div>
                                        {dropdownStates[index] && (
                                            <div className="mt-2 text-gray-700 text-sm">
                                                {descriptionTexts[index]}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-7">
                            <hr className="w-[40%] bg-[#a7a7a7] h-[2px]" />
                            <h3 className="flex items-center">
                                <span className="material-symbols-outlined text-[#666666]" style={{fontSize: 17}}>check_circle</span>
                                <span className="text-sm text-[#666666] font-medium">All Caught Up!</span>
                            </h3>
                            <hr className="w-[40%] h-[2px] bg-[#a7a7a7]" />
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}

export default SellerDashboardHome;
