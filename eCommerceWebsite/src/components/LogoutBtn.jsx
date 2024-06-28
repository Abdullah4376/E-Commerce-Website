import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { logout } from '../features/productSlice.js'
import { removeUserProfileImage } from '../features/productSlice.js'

function LogoutBtn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
            dispatch(removeUserProfileImage());
        }).catch((e) => {
            console.log('Error Using logoutHandler in src/components/LogoutBtn.jsx', e);
        });
        navigate('/')
    }


    return(
        <Link onClick={logoutHandler} className="font-poppins hover:text-[#5F3AFC] duration-300">
            Logout
        </Link>
    )
}

export default LogoutBtn;