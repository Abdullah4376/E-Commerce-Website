import React, { useCallback, useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { Button, Input, Select } from './index';
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
            status: product?.status || 'active',
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
        <div className="bg-[#F1F1F1] pt-8">
            <h1 className="text-2xl font-semibold ml-20 flex items-center gap-3">
                <Link to='/seller-dashboard-products' className="material-symbols-outlined text-gray-500">keyboard_backspace</Link>
                Add Product
            </h1>
            <form onSubmit={handleSubmit(submit)} className="mx-20 my-8 px-3 py-4 bg-white border border-slate-300 rounded-xl">
                <label htmlFor="title" className="block">Title</label>
                <input
                    maxLength='255'
                    id="title"
                    placeholder="Ripped jeans"
                    className="text-sm text-[#616161] mt-1 w-full border border-slate-500 outline-none px-3 py-1 rounded-lg"
                    {...register("title", { required: true })}
                />
                {errors.title && <span className="text-red-500">Title is required</span>}
                    
                <label htmlFor="slug" className="block mt-4">Slug</label>
                <input
                    disabled
                    placeholder="Slug will be auto-picked from title"
                    className="text-sm text-[#616161] mt-1 select-none w-full border border-slate-500 outline-none px-3 py-1 rounded-lg bg-white"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />

                <h1 className="block mt-5 mb-2">Description</h1>
                <RTE id='rte' name="content" control={control} defaultValue={getValues("content")} />
                
                <div className="border-dashed border-2 border-gray-300 p-4 rounded-md flex flex-col items-center justify-center">
                    <button className="bg-gray-100 py-2 px-4 rounded-md mb-2 hover:bg-gray-200" onClick={() => document.getElementById('file-input').click()}>
                        Upload File
                    </button>
                    <input 
                        id="file-input" 
                        type="file" 
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        className="hidden" 
                        {...register("image", { required: !product })}
                    />
                    <p className="text-gray-500 mt-2">Acceptable image types: JPEG, JPG, PNG, GIF</p>
                    {product && <img src={service.getFilePreview(product.featuredImage)} alt={product.title} />}
                </div>
                    <Select
                        options={["active", "inactive"]}
                        label="Status"
                        className=""
                        {...register("status", { required: true })}
                    />
                    {errors.status && <span className="text-red-500">Status is required</span>}
                    <Button type="submit" bgcolor={product ? "bg-green-500" : undefined} className="w-full">
                        {product ? "Update" : "Submit"}
                    </Button>
            </form>
        </div>
    );
}

export default ProductPostForm;