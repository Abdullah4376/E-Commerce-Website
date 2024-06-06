import React from "react";
import {
    img,
    card1,
    card2,
    card3,
    card4,
    Clothes,
    GymEquipment,
    Headsets,
    Makeup,
    Monitors,
    Shoes,
    Brand1,
    Brand2,
    Brand3,
    Brand4,
    Brand5
} from '../components/index.js'

function Home() {
    return(
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        {/* Section 1 starts here! */}
        <section id="section-1" className="bg-[#EEEDF2] h-[700px] flex justify-center items-center font-poppins px-32">
                <div className="left mr-12">
                    <div id="h1" className="w-[90%]">
                        <h1 className="text-6xl leading-[1.19] font-light text-[#1A152E]">The world's largest<br /><span className="font-bold">E-Commerce Store.</span></h1>
                    </div>
                    <div id="p" className="w-[65%] mt-3">
                        <p className="text-[#55545B]">Beyond the ordinary, into the awesome. Find the perfect pieces to tell your unique story.</p>
                    </div>
                    <div id="search" className="flex items-center mt-10">
                        <span className="material-symbols-outlined absolute z-50 ml-[14px] text-[#9B9AA5]">search</span>
                        <input placeholder="Search E-Coma" type="text" name="s" className="relative rounded-md p-5 pl-11 w-96 h-[60px]" />
                        <button className="bg-[#5F3AFC] ml-5 text-[#F7F6FF] px-8 py-[18px] rounded-md font-medium hover:bg-black duration-500">Search</button>
                    </div>
                </div>
                <div className="right">
                    <img src={img} className="h-[450px] min-w-max rounded-xl" alt="" />
                </div>
        </section>

        {/* Section 1 Ends Here! */}


        {/* Section 2 starts here! */}

        <section id="section-2" className="bg-white p-28 font-poppins text-center">
            <div id="sect2TopText" className="text-center">
                <h1 className="text-5xl font-medium text-[#000000]">Browse <br />Popular Categories</h1>
                <p className="mt-5 text-[#55545B]">Find many products and items goods for your need.</p>
            </div>
            <div id="sect2Cards" className="mt-16 flex gap-6">
                <div id="card1" className="hover:-translate-y-5 border-white border-x-2 border-y-2 hover:border-[#5F3AFC] hover:border-x-2 hover:border-y-2 duration-500 shadow-2xl rounded-xl w-[265px] h-[281px] text-center pt-10 ">
                    <img src={card1} alt="image" className="m-auto" />
                    <h1 className="text-2xl font-semibold mt-4">Buy At Home</h1>
                    <button className="text-sm font-medium text-[#55545B]">Learn More</button>
                </div>
                <div id="card2" className="hover:-translate-y-5 border-white border-x-2 border-y-2 hover:border-[#5F3AFC] hover:border-x-2 hover:border-y-2 duration-500 shadow-2xl rounded-xl w-[265px] h-[281px] text-center pt-10 ">
                    <img src={card2} alt="image" className="m-auto" />
                    <h1 className="text-2xl font-semibold mt-4">Shop Anything</h1>
                    <button className="text-sm font-medium text-[#55545B]">Learn More</button>
                </div>
                <div id="card3" className="hover:-translate-y-5 border-white border-x-2 border-y-2 hover:border-[#5F3AFC] hover:border-x-2 hover:border-y-2 duration-500 shadow-2xl rounded-xl w-[265px] h-[281px] text-center pt-10 ">
                    <img src={card3} alt="image" className="m-auto" />
                    <h1 className="text-2xl font-semibold mt-4">Customer Service</h1>
                    <button className="text-sm font-medium text-[#55545B]">Learn More</button>
                </div>
                <div id="card4" className="hover:-translate-y-5 border-white border-x-2 border-y-2 hover:border-[#5F3AFC] hover:border-x-2 hover:border-y-2 duration-500 shadow-2xl rounded-xl w-[265px] h-[281px] text-center pt-10 ">
                    <img src={card4} alt="image" className="m-auto" />
                    <h1 className="text-2xl font-semibold mt-4">Email Marketing</h1>
                    <button className="text-sm font-medium text-[#55545B]">Learn More</button>
                </div>
            </div>
            <button className="mt-16 px-10 py-3 font-normal text-sm bg-[#5F3AFC] text-white rounded-md hover:bg-black duration-500">View All Categories</button>
        </section>        

        {/* Section 2 ends here! */}

        {/* Section 3 Starts Here! */}

        <section id="section-3" className="bg-[#F6F6F7] p-28 text-center font-poppins">

            <div id="sect-3-TopText">
                <h1 className="text-[40px] leading-[44px] font-semibold text-[#1A152E]">Latest<br />Special Products</h1>
                <p className="text-lg text-[#55545B] mt-5">From resistance bands to home appliances</p>
            </div>

            <div id="sect-3-cards" className="grid grid-cols-3 mt-12 text-left gap-7">
                <div className="p-3 rounded-md bg-white group shadow-2xl mb-2">
                    <div className="overflow-hidden relative">
                        <img src={Shoes} alt="" className="rounded-t-md group-hover:scale-110 group-hover:brightness-50 duration-500"/>
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 duration-500 group-hover:opacity-100 text-center">
                            <button className="px-10 duration-500 rounded-md py-2 font-normal bg-white mb-3 hover:text-white hover:bg-[#5F3AFC]">Buy Now</button>
                            <button className="font-normal px-6 py-2 border-2 rounded-md text-white duration-500 hover:bg-[#5F3AFC] hover:border-[#5F3AFC]">Add To Cart</button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mx-3 mt-6 mb-2">
                        <button className="text-sm font-medium rounded-md text-[#55545B] px-3 py-1 bg-[#F6F6F7]">Footwear</button>
                        <h3 className="text-xl font-medium text-[#1A152E]">$49</h3>
                    </div>

                    <div className="mx-3">
                        <h1 className="text-lg font-semibold">Nike Running Shoes</h1>
                        <p className="text-sm text-[#55545B]">by Nike</p>
                    </div>
                </div>

                <div className="p-3 rounded-md bg-white group shadow-2xl mb-2">
                    <div className="overflow-hidden relative">
                        <img src={Clothes} alt="" className="rounded-t-md group-hover:scale-110 group-hover:brightness-50 duration-500"/>
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 duration-500 group-hover:opacity-100 text-center">
                            <button className="px-10 duration-500 rounded-md py-2 font-normal bg-white mb-3 hover:text-white hover:bg-[#5F3AFC]">Buy Now</button>
                            <button className="font-normal px-6 py-2 border-2 rounded-md text-white duration-500 hover:bg-[#5F3AFC] hover:border-[#5F3AFC]">Add To Cart</button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mx-3 mt-6 mb-2">
                        <button className="text-sm font-medium rounded-md text-[#55545B] px-3 py-1 bg-[#F6F6F7]">Clothes</button>
                        <h3 className="text-xl font-medium text-[#1A152E]">$8</h3>
                    </div>

                    <div className="mx-3 mb-3">
                        <h1 className="text-lg font-semibold">T-Shirts</h1>
                        <p className="text-sm text-[#55545B]">by L'Oréal Paris</p>
                    </div>
                </div>

                <div className="p-3 rounded-md bg-white group shadow-2xl mb-2">
                    <div className="overflow-hidden relative">
                        <img src={Headsets} alt="" className="rounded-t-md group-hover:scale-110 group-hover:brightness-50 duration-500"/>
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 duration-500 group-hover:opacity-100 text-center">
                            <button className="px-10 duration-500 rounded-md py-2 font-normal bg-white mb-3 hover:text-white hover:bg-[#5F3AFC]">Buy Now</button>
                            <button className="font-normal px-6 py-2 border-2 rounded-md text-white duration-500 hover:bg-[#5F3AFC] hover:border-[#5F3AFC]">Add To Cart</button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mx-3 mt-6 mb-2">
                        <button className="text-sm font-medium rounded-md text-[#55545B] px-3 py-1 bg-[#F6F6F7]">Technology</button>
                        <h3 className="text-xl font-medium text-[#1A152E]">$14</h3>
                    </div>

                    <div className="mx-3 mb-3">
                        <h1 className="text-lg font-semibold">Gaming Headphones</h1>
                        <p className="text-sm text-[#55545B]">by HKB Collection</p>
                    </div>
                </div>

                <div className="p-3 rounded-md bg-white group shadow-2xl mb-2">
                    <div className="overflow-hidden relative">
                        <img src={Monitors} alt="" className="rounded-t-md group-hover:scale-110 group-hover:brightness-50 duration-500"/>
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 duration-500 group-hover:opacity-100 text-center">
                            <button className="px-10 duration-500 rounded-md py-2 font-normal bg-white mb-3 hover:text-white hover:bg-[#5F3AFC]">Buy Now</button>
                            <button className="font-normal px-6 py-2 border-2 rounded-md text-white duration-500 hover:bg-[#5F3AFC] hover:border-[#5F3AFC]">Add To Cart</button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mx-3 mt-6 mb-2">
                        <button className="text-sm font-medium rounded-md text-[#55545B] px-3 py-1 bg-[#F6F6F7]">Technology</button>
                        <h3 className="text-xl font-medium text-[#1A152E]">$130</h3>
                    </div>

                    <div className="mx-3 mb-3">
                        <h1 className="text-lg font-semibold">24 Inch Monitor</h1>
                        <p className="text-sm text-[#55545B]">by NVIDIA</p>
                    </div>
                </div>

                <div className="p-3 rounded-md bg-white group shadow-2xl mb-2">
                    <div className="overflow-hidden relative">
                        <img src={Makeup} alt="" className="rounded-t-md group-hover:scale-110 group-hover:brightness-50 duration-500"/>
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 duration-500 group-hover:opacity-100 text-center">
                            <button className="px-10 duration-500 rounded-md py-2 font-normal bg-white mb-3 hover:text-white hover:bg-[#5F3AFC]">Buy Now</button>
                            <button className="font-normal px-6 py-2 border-2 rounded-md text-white duration-500 hover:bg-[#5F3AFC] hover:border-[#5F3AFC]">Add To Cart</button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mx-3 mt-6 mb-2">
                        <button className="text-sm font-medium rounded-md text-[#55545B] px-3 py-1 bg-[#F6F6F7]">Skincare</button>
                        <h3 className="text-xl font-medium text-[#1A152E]">$100</h3>
                    </div>

                    <div className="mx-3 mb-3">
                        <h1 className="text-lg font-semibold">Professional Makeup Kit</h1>
                        <p className="text-sm text-[#55545B]">by Too Faced</p>
                    </div>
                </div>

                <div className="p-3 rounded-md bg-white group shadow-2xl mb-2">
                    <div className="overflow-hidden relative">
                        <img src={GymEquipment} alt="" className="rounded-t-md group-hover:scale-110 group-hover:brightness-50 duration-500"/>
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 duration-500 group-hover:opacity-100 text-center">
                            <button className="px-10 duration-500 rounded-md py-2 font-normal bg-white mb-3 hover:text-white hover:bg-[#5F3AFC]">Buy Now</button>
                            <button className="font-normal px-6 py-2 border-2 rounded-md text-white duration-500 hover:bg-[#5F3AFC] hover:border-[#5F3AFC]">Add To Cart</button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mx-3 mt-6 mb-2">
                        <button className="text-sm font-medium rounded-md text-[#55545B] px-3 py-1 bg-[#F6F6F7]">Exercise Equipment</button>
                        <h3 className="text-xl font-medium text-[#1A152E]">$40</h3>
                    </div>

                    <div className="mx-3 mb-3">
                        <h1 className="text-lg font-semibold">Resistance Bands and Weights</h1>
                        <p className="text-sm text-[#55545B]">by Winkers</p>
                    </div>
                </div>
            </div>

            <button className="mt-14 px-9 font-normal text-base duration-500 hover:bg-black hover:text-white py-[10px] bg-[#5F3AFC] text-white rounded-lg">Explore More!</button>

        </section>

        {/* Section 3 Ends Here! */}

        {/* Section 4 Starts Here! */}

        <section id="section-4" className="font-poppins p-28 text-center">

            <div>
                <h1 className="text-[40px] leading-[44px] font-semibold text-[#1A152E]">Grow Your Revenue <span className="text-[#5F3AFC]">Today</span></h1>
                <p className="text-lg text-[#55545B] mt-5">Thousands of Brands have made the decisions for marketing with the customer in mind!</p>
            </div>
            <div>
                <button className="mr-6 mt-14 px-9 font-light text-base duration-500 hover:border-[#E5E7EB] hover:bg-transparent hover:text-black border-[#5F3AFC] border-2 py-[10px] bg-[#5F3AFC] text-white rounded-lg">Log In</button>
                <button className="mt-14 px-9 font-light text-base duration-500 hover:border-[#5F3AFC] hover:bg-[#5F3AFC] hover:text-white py-[10px] border-2 text-black  rounded-lg">Sign Up</button>
            </div>
            <p className="text-sm text-[#363538] mt-4">Start Selling Products - Credit Card is Required</p>

            <div className="mt-12">
                <h1 className="text-2xl font-medium">Brands We've Worked With:</h1>
                <div className="grid grid-cols-5 gap-12 items-center mt-14">
                    <img src={Brand1} className="opacity-50 hover:opacity-100 duration-500"/>
                    <img src={Brand2} className="opacity-50 hover:opacity-100 duration-500"/>
                    <img src={Brand3} className="opacity-50 hover:opacity-100 duration-500"/>
                    <img src={Brand4} className="opacity-50 hover:opacity-100 duration-500"/>
                    <img src={Brand5} className="opacity-50 hover:opacity-100 duration-500"/>
                </div>
            </div>

        </section>

        {/* Section 4 Ends Here! */}

        </>
    )
}

export default Home;