import React, { useCallback, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { Button, Input, Select } from './index';
import service from '../appwrite/config';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import RTE from "./RTE";

function ProductPostForm({product}) {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, setValue, control, getValues, formState: { errors } } = useForm({
        defaultValues: {
            title: product?.title || '',
            slug: product?.slug || '',
            content: product?.content || '',
            status: product?.status || 'active',
        }
    });

    const userData = useSelector(state => state.auth.userData);

    const submit = async (data) => {
        try {
            let dbPost;
            if (product) {
                const file = data.image[0] ? await service.uploadFile(data.image[0]) : null;

                if (file) {
                    await service.deleteFile(product.featuredImage);
                }

                dbPost = await service.updateProduct({
                    ...data,
                    id: product.$id, // Pass the existing product ID for updating
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
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                {errors.title && <span className="text-red-500">Title is required</span>}
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                {errors.slug && <span className="text-red-500">Slug is required</span>}
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !product })}
                />
                {errors.image && <span className="text-red-500">Image is required</span>}
                {product && (
                    <div className="w-full mb-4">
                        <img
                            src={service.getFilePreview(product.featuredImage)}
                            alt={product.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                {errors.status && <span className="text-red-500">Status is required</span>}
                <Button type="submit" bgcolor={product ? "bg-green-500" : undefined} className="w-full">
                    {product ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}

export default ProductPostForm;