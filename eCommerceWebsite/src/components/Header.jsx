import React from "react";
import { Logo, LogoutBtn } from './index.js'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {

    const authStatus = useSelector((state) => state.auth.status);

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Profile',
            slug: '/profile',
            active: authStatus
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: 'Shopping Cart',
            slug: '/shopping-cart',
            active: !authStatus
        },
        {
            name: 'Seller Dashboard',
            slug: '/seller-dashboard-home',
            active: authStatus
        }
    ]

    return(
        <div className="fixed top-0 z-[100] w-full overflow-hidden shadow-md">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
            <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&display=swap" rel="stylesheet" />
            <header className="h-[13vh] bg-white text-black w-full">
                    <nav className="pt-5 flex justify-between z-50 content-center px-24">
                        <div className="sec-l">
                            <Link to='/' className="flex gap-3 items-center">
                                <img src={Logo} alt="Logo" className="h-10" />
                                <p className="text-3xl font-semibold font-poppins cursor-pointer">E-Coma.</p>
                            </Link>
                        </div>
                        <div className="sec-m mt-2 font-medium font-poppins">
                            <ul className="flex justify-between content-center ">
                                {navItems.map(item => 
                                    item.active ? (
                                        <li key={item.slug} className="mx-5">
                                            <Link to={item.slug} className="hover:text-[#5F3AFC] duration-300">{item.name}</Link>
                                        </li>
                                    ) : null
                                )}
                                {authStatus && (
                                    <li className="mx-5">
                                        <LogoutBtn />
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="sec-r flex justify-between items-center font-medium font-poppins">
                            <Link to='/' className="flex items-center"><span className="material-symbols-outlined">lock_open</span>&nbsp;Log In</Link>
                            <span className="self-center">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                            <Link to='/' className="flex items-center"><span className="material-symbols-outlined">shopping_cart</span></Link>
                        </div>
                    </nav>
            </header>
        </div>
    )
}

export default Header;