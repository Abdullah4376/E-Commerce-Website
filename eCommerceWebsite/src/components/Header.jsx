import React from "react";
import { LogoutBtn } from './index.js'
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {

    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Dashboard',
            slug: '/dashboard',
            active: authStatus
        },
        {
            name: 'Services',
            slug: '/services',
            active: false
        },
        {
            name: 'Contact Us',
            slug: '/contact-us',
            active: false
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
        }
    ]

    return(
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <header className="h-14">
                    <nav className="my-4 flex justify-between content-center px-24">
                        <div className="sec-l">
                            <Link to='/'>
                                <p className="text-black text-3xl font-semibold font-poppins cursor-pointer">E-Coma.</p>
                            </Link>
                        </div>
                        <div className="sec-m mt-2 font-medium font-poppins">
                            <ul className="flex justify-between content-center ">
                                {navItems.map(item => (
                                    item.active ? (
                                        <li key={item.slug} className="mx-5">
                                            <Link onClick={() => navigate(item.slug)} className="hover:text-[#5F3AFC] duration-300">{item.name}</Link>
                                        </li>
                                    ) : null
                                ))}
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
        </>
    )
}

export default Header;