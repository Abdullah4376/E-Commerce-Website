import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import authService from "../appwrite/auth";
import { login } from "../features/productSlice";
import { Button, Input } from './index.js'
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";


function Signup() {
    const navigate = useNavigate();
    const dispatch  = useDispatch();
    const {register, handleSubmit, formState: { errors }} = useForm();
    const [error, setError] = useState();
    
    const signup = async (data) => {
        
        setError('');
        try {
            const session = await authService.signup(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(login(userData));
                }
                navigate('/dashboard')
            }
        } catch (error) {
            setError(error.message);
        }
    }
    
    return(
        <div className="flex items-center justify-center py-14">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Login
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(signup)}>
                    <div className="space-y-5">
                        <Input
                        label='Name: '
                        placeholder='Enter your Name'
                        type='text'
                        {...register('name', {
                            required: true
                        })}
                        on
                        />
                        {errors.name && <span className="text-red-500">Name is required</span>}
                        

                        <Input
                        label='Email: '
                        placeholder='Enter your Email'
                        type='email'
                        {...register('email', {
                            required: true,
                            matchPattern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || 'Email Address must be a Valid Address!'
                        })}
                        />
                        {errors.email && <span className="text-red-500">Email is required</span>}

                        <Input
                        label='Password: '
                        placeholder='Enter your Password'
                        type='password'
                        {...register('password', {
                            required: true,
                            matchPattern: (value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value) || 'Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number!'
                        })}
                        />
                        {errors.Password && <span className="text-red-500">Password is required</span>}

                        <Button className="w-full" type="submit">Create Account</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;