import React from "react";
import { Link } from 'react-router-dom'

function Footer() {
    return(
        <footer className="bg-[#14121D] font-poppins text-white text-center">
            <div className="grid grid-cols-3 p-20">
                <div>
                    <h1 className="text-lg font-medium mb-5">Products</h1>
                    <ul className="text-[#8c8c8f] text-[15px] leading-8">
                        <li><Link to='/'>Footwear</Link></li>
                        <li><Link to='/'>Clothes</Link></li>
                        <li><Link to='/'>Technology</Link></li>
                        <li><Link to='/'>Skincare</Link></li>
                        <li><Link to='/'>Exercise Equipment</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-lg font-medium mb-5">Resources</h1>
                    <ul className="text-[#8c8c8f] text-[15px] leading-8">
                        <li><Link to='/'>Promotion</Link></li>
                        <li><Link to='/'>Open Store</Link></li>
                        <li><Link to='/'>Dashboard</Link></li>
                        <li><Link to='/'>Products</Link></li>
                        <li><Link to='/'>Selling Strategies</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-lg font-medium mb-5">Pages</h1>
                    <ul className="text-[#8c8c8f] text-[15px] leading-8">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Dashboard</Link></li>
                        <li><Link to='/'>Services</Link></li>
                        <li><Link to='/'>Support</Link></li>
                        <li><Link to='/'>Contact Us</Link></li>
                    </ul>
                </div>
            </div>
            

            <hr className="h-[1px] border-none bg-[#343435] w-[85%] m-auto" />

            <h3 className="mt-5 pb-8 font-light text-[#8c8c8f]">Copyright © 2024 E-Coma. All Rights Reserved, Designed & Developed by <span className="text-white">Muhammad Abdullah</span></h3>
        </footer>
    )
}

export default Footer;