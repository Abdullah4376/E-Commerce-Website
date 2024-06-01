import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protection({children, authentication = true}) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {

        // Easy Version: 

        // if (authStatus === true) {
        //     navigate('/');
        // } else if (authStatus === false) {
        //     navigate('/login')
        // }


        // if authentication is true, auth status is false, so they should not be equal to authentication
        // true, false !== true
        // false is not equal to true then it will return true
        // then it will be true & true
        if (authentication && authStatus !== authentication) {
            navigate('/login')
        }
        // if authentication is false, auth status is true, so they should not be equal to authentication
        // false, true !== true
        // true is equal to true then it will return false
        // then it will be false & false
        else if (!authentication && authStatus !== authentication) {
            navigate('/');
        }

        setLoading(false);
    }, [authStatus, navigate, authentication])

    return loading ? <h1>Loading...</h1> : <>{children}</>
}