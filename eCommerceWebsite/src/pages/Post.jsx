import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { Button } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [product, setProduct] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    console.log(userData);

    const isAuthor = product && userData ? product.UserID === userData.$id : false;

    useEffect(() => {
        if (slug) {
            service.getProduct(slug).then((product) => {
                if (product) {
                    setProduct(product)
                } else {
                    navigate("/seller-dashboard-products")
                };
            });
        } else navigate("/seller-dashboard-products");
    }, [slug, navigate]);

    const deleteProduct = () => {
        service.deleteProduct(product.$id).then((status) => {
            if (status) {
                service.deleteFile(product.featuredImage);
                navigate("/");
            }
        });
    };

    return product ? (
        <div className="py-8">
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={service.getFilePreview(product.featuredImage)}
                        alt={product.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-product/${product.$id}`}>
                                <Button bgcolor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgcolor="bg-red-500" onClick={deleteProduct}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{product.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(product.content)}
                </div>
        </div>
    ) : null;
}