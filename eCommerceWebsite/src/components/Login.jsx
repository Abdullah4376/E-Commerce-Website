import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { login as storeLogin} from '../features/productSlice'
import { Button, Input } from './index'
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form'


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState('');

    const login = async (data) => {
        setError('');
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(storeLogin(userData));
                };
                navigate('/dashboard');
            }
        } catch (error) {
            setError(error.message)
        }
    }


    return(
        <div className='flex items-center justify-center w-full py-14'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link to="/signup" className="font-medium text-primary transition-all duration-200 hover:underline">
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(login)} className="mt-8">
                    <div className="space-y-5">
                        <Input
                        label='Email: ' 
                        type='email' 
                        placeholder='Enter your Email'
                        {...register('email', {
                            required: true,
                            matchPattern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || 'Email Address must be a Valid Address!'
                        })}
                        />

                        <Input 
                        label='Password: ' 
                        type='password' 
                        placeholder='Enter your Password'
                        {...register('password', {
                            required: true,
                            matchPattern: (value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value) || 'Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number!'
                        })}
                        />

                        <Button
                        type="submit"
                        className="w-full"
                        >LogIn</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;