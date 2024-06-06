import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { logout } from '../features/productSlice'

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        }).catch((e) => {
            console.log('Error Using logoutHandler in src/components/LogoutBtn.jsx', e);
        })
    }


    return(
        <Link to={'/logout'} onClick={logoutHandler} className="font-poppins hover:text-[#5F3AFC] duration-300">
            Logout
        </Link>
    )
}

export default LogoutBtn;