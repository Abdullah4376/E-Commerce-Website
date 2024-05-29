import React from "react";
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
        <button className="font-poppins px-9 font-light text-base duration-500 hover:border-[#E5E7EB] hover:bg-transparent hover:text-black border-[#5F3AFC] border-2 py-[10px] bg-[#5F3AFC] text-white rounded-lg">
            Logout
        </button>
    )
}

export default LogoutBtn;