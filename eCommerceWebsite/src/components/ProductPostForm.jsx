import React, { useCallback, useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { Input, Button, Select } from './index';
import service from '../appwrite/config';
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import RTE from "./RTE";

function ProductPostForm({product, slug}) {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, setValue, control, getValues, formState: { errors } } = useForm({
        defaultValues: {
            title: product?.title || '',
            slug: slug ? slug : '',
            content: product?.content || '',
            status: product?.status || 'actve',
            quantity: product?.quantity || null,
            price: product?.price || null
        }
    });

    const userData = useSelector(state => state.auth.userData);

    const submit = async (data) => {
        try {
            console.log(data);
            let dbPost;
            if (product) {
                const file = data.image[0] ? await service.uploadFile(data.image[0]) : null;

                if (file) {
                    await service.deleteFile(product.featuredImage);
                }

                dbPost = await service.updateProduct({
                    ...data,
                    id: product.$id,
                    featuredImage: file ? file.$id : product.featuredImage    
                });
            } else {
                const file = await service.uploadFile(data.image[0]);

                if (file) {
                    const fileId = file.$id;
                    data.featuredImage = fileId;
                    dbPost = await service.addProduct({
                        ...data,
                        UserID: userData.$id
                    });
                }
            }

            if (dbPost) {
                // Assuming dbPost returns the document ID after creation/update
                console.log('Navigation to product:', dbPost.$id); // Debug log for navigation
                navigate(`/product/${dbPost.$id}`);
            } else {
                console.error('Product creation/update failed. dbPost:', dbPost);
            }
        } catch (error) {
            console.error('An error occurred while submitting the form:', error);
        }
    };

    const slugTransform = useCallback(value => {
        if (value && typeof value === 'string') {
            return value.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
        }
        return '';
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title, { shouldValidate: true }));
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [watch, slugTransform, setValue]);


    return (
        <div className="bg-[#F1F1F1] h-full pt-8 pb-8">
            <h1 className="text-2xl font-semibold ml-20 flex items-center gap-3">
                <Link to='/seller-dashboard-products' className="material-symbols-outlined text-gray-500">keyboard_backspace</Link>
                {product ? 'Edit Product' : 'Add Product'}
            </h1>
            <form onSubmit={handleSubmit(submit)} className="flex items-start gap-6 flex-row">
                
                {/* Left Section */}
                <div className="w-2/3">
                    <div className="ml-20 my-8 px-5 py-4 bg-white border border-slate-300 rounded-xl">
                        <label htmlFor="title" className="block">Title</label>
                        <Input
                            maxLength='255'
                            id="title"
                            placeholder="Ripped jeans"
                            className="text-sm text-[#616161] mt-1 w-full border border-slate-500 outline-none px-3 py-1 rounded-lg"
                            {...register("title", { required: true })}
                        />
                        {errors.title && <span className="text-red-500">Title is required</span>}
                            
                        <label htmlFor="slug" className="block mt-4">Slug</label>
                        <Input
                            disabled
                            placeholder="Slug will be auto-picked from title"
                            className="text-sm text-[#616161] mt-1 select-none w-full border border-slate-500 outline-none px-3 py-1 rounded-lg bg-white"
                            {...register("slug", { required: true })}
                            onInput={(e) => {
                                setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                            }}
                        />

                        <h1 className="block mt-6 mb-2">Description</h1>
                        <RTE name="content" control={control} defaultValue={getValues("content")} />
                        
                        <h1 className="block mt-5 mb-2">Media</h1>
                        <div className="border-dashed border-2 border-gray-500 p-4 rounded-md flex flex-col items-center justify-center">
                            <div className="flex md:flex-row md:gap-6 gap-2 flex-col">
                                <button className="bg-gray-100 py-2 px-4 rounded-md mb-2 hover:bg-gray-200" onClick={() => document.getElementById('file-input').click()}>
                                    Upload File
                                </button>
                                <p className="text-gray-500 mt-2">Acceptable image types: JPEG, JPG, PNG, GIF</p>
                            </div>
                            <Input  
                                type="file" 
                                accept="image/png, image/jpg, image/jpeg, image/gif"
                                className="hidden" 
                                {...register("image", { required: !product })}
                            />
                            {product && <img className="h-1/4 w-1/4 rounded-lg mt-7" src={service.getFilePreview(product.featuredImage)} alt={product.title} />}
                        </div>
                    </div>

                    <div className="ml-20 mt-8 px-5 py-4 bg-white border border-slate-300 rounded-xl">
                        <h1 className="text-xl font-semibold mb-5">Pricing</h1>
                        <label htmlFor="price">Price</label>
                        <div className="flex items-center mt-1 border w-full border-slate-500 rounded-lg">
                            <span className="ml-1 px-1 font-semibold">$</span>
                            <Input
                                id="price"
                                type="text" 
                                className="text-sm text-[#4b4b4b] w-full rounded-lg outline-none px-[2px] py-1"
                                maxLength='24'
                                placeholder="0.00"
                                {...register('price', {required: true})}
                            />
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-1/3 flex flex-col gap-6">
                    <div className="bg-white border border-slate-300 rounded-xl px-5 py-4 mr-12 mt-8">
                        <h1 className="text-xl font-semibold mb-2">Status</h1>
                        <div className="custom-select">
                            <Select
                                className="cursor-pointer w-full text-lg outline-none border border-slate-500 rounded-lg px-2 py-2 text-[#303030]"
                                {...register("status", { required: !product })}d
                                defaultValue={`active`}
                            />
                        </div>
                    </div>

                    <div className="bg-white border border-slate-300 rounded-xl px-5 py-4 mr-12">
                        <h1 className="text-xl font-semibold mb-3">Inventory</h1>
                        <div className="flex items-center">
                            <label htmlFor="quantity" className="text-sm font-semibold">Quantity</label>
                            <Input
                                id="quantity"
                                type="number"
                                className="text-sm text-[#4b4b4b] w-full rounded-lg outline-none px-[2px] py-1"
                                maxLength='24'
                                placeholder="0"
                                {...register('quantity', {required: true})}
                            />
                        </div>
                    </div>

                </div>

            </form>
        </div>
    );
}

export default ProductPostForm;



    // <Button type="submit" bgcolor={product ? "bg-green-500" : undefined} className="w-full">
    //     {product ? "Update" : "Save"}
    // </Button>