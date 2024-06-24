import React, { useState, useEffect } from "react";
import { Camera, Input } from '../components/index'
import service from "../appwrite/config";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Query } from "appwrite";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function UserProfile() {
// Don't Forget to add Price in the attributes in appwrite and config.js!
// Don't Forget to add Price in the attributes in appwrite and config.js!
// Don't Forget to add Price in the attributes in appwrite and config.js!
// Don't Forget to add Price in the attributes in appwrite and config.js!
// Don't Forget to add Price in the attributes in appwrite and config.js!
    const {register, handleSubmit} = useForm();
    const userData = useSelector((state) => state.auth.userData);
    const navigate = useNavigate();
    const [userImage, setUserImage] = useState('')
    const [tabOfActiveProducts, setTabOfActiveProducts] = useState([]);
    const [activeTab, setActiveTab] = useState('active');
    const [tabOfInactiveProducts, setTabOfInactiveProducts] = useState([]);
    const [activeVisible, setActiveVisible] = useState('')
    const [inactiveVisible, setInactiveVisible] = useState('hidden')
    const [activeProductId, setActiveProductId] = useState(null);

    const extractMonthYear = (dateString) => {
        const date = new Date(dateString);
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return `${month} ${year}`;
    }

    const dateData = extractMonthYear(userData.$createdAt);

    const uploadUserImage = async (data) => {
        try {
            const file = await service.uploadFile(data.userProfileImage[0]);
            if (file) {
                const fileId = uploadedFile.$id;
                data.userProfileImage = fileId;
                setUserImage(fileId);
            }
        } catch (error) {
            console.log('Error while uploading file at UserProfile.jsx');
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (userData) {
                    const fetchedProducts = await service.getProducts([
                        Query.equal('UserID', userData.$id),
                        Query.notEqual('status', 'inactive')
                    ]);
                    setTabOfActiveProducts(fetchedProducts.documents);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        const fetchInactiveData = async () => {
            try {
                if (userData) {
                    const fetchedProducts = await service.getProducts([
                        Query.equal('UserID', userData.$id),
                        Query.equal('status', 'inactive')
                    ]);
                    setTabOfInactiveProducts(fetchedProducts.documents);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchInactiveData();
    }, [userData]);

    // console.log(products);
    // console.log(userData);

    return (
        <div className="w-full bg-[#EEEDF2] pt-14 px-14 pb-32 font-poppins">
            <div className="flex gap-16 items-start">
                <div className="bg-white p-8 min-w-[450px] text-center border-[1px] border-[#c6c7c9]">
                    <div className="relative">
                        {/* Add the featuredImage of the user */}
                        <form onSubmit={handleSubmit(uploadUserImage)} className="w-40 h-40 mx-auto rounded-full relative">
                            <Input
                            label="Featured Image :"
                            type="file"
                            className={`mb-4 bg-[${Camera}] bg-no-repeat bg-center bg-contain p-[10px] border-[1px] border-[#c6c7c9] rounded-[5px]`}
                            accept="image/png, image/jpg, image/jpeg, image/gif"
                            {...register("userFeaturedImage", { required: false })}
                            />
                            {!userImage && (
                                <img
                                    src={Camera}
                                    alt="User Image"
                                    className="w-[40px] h-[40px] rounded-full"
                                />
                            )}
                            {userImage && (
                                <img src={userImage} alt="User Image" className="bg-black rounded-full" />
                            )}
                        </form>
                        <p className="absolute top-0 right-0 border-[#1DBF73] border-[1px] text-sm text-[#1DBF73] px-2 rounded-xl">Online</p>
                    </div>

                    <h3 className="mt-3 text-xl font-medium text-[#222325]">{userData.name}</h3>
                    <p className="text-[#7A7D85] text-sm mt-1"><span className="font-medium text-red-500">User ID:</span> {userData.$id}</p>
                    <h4 className="flex items-center justify-center mt-2 mb-2"><span className="material-symbols-outlined">edit</span>Edit Description</h4>
                    <button className="mt-2 mb-6 border-[#62646A] border-[1px] w-full py-2 duration-300 rounded-md text-sm text-[#62646A] font-medium hover:bg-[#62646A] hover:text-white">Preview E-Coma Profile</button>
                    
                    <hr className="bg-[#c6c7c9]" />

                    <div className="flex justify-between items-center mt-4 text-sm text-[#2c2c2e]">
                        <h5 className="flex items-center"><span className="material-symbols-outlined mr-2">mail</span>Email</h5>
                        <p className="font-semibold text-[#4a4c50]">{userData.email}</p>
                    </div>

                    <div className="flex justify-between items-center text-sm text-[#2c2c2e] mt-4">
                        <h5 className="flex items-center"><span className="material-symbols-outlined mr-2">person</span>Member Since</h5>
                        <p className="font-semibold text-[#4a4c50]">{dateData}</p>
                    </div>
                </div>

                <div className="w-[59%]">
                    <header id="tab" className="overflow-hidden border-[1px] border-[#c6c7c9] flex text-left w-[100%] px-5 py-5 font-medium uppercase tracking-tighter bg-white">
                        <h1 
                        onClick={() => {
                            setActiveVisible('');
                            setInactiveVisible('hidden');
                            setActiveTab('active')
                        }} 
                        className={`${
                            activeTab === "active" ? "text-[#1DBF73]" : ""
                        } duration-300 hover:text-[#1DBF73] cursor-pointer mr-8`}>
                            Active Products
                        </h1>
                        <h1 
                        onClick={() => {
                            setActiveVisible('hidden');
                            setInactiveVisible('');
                            setActiveTab('inactive')
                        }} 
                        className={`${
                            activeTab === "inactive" ? "text-[#1DBF73]" : ""
                        } duration-300 hover:text-[#1DBF73] cursor-pointer`}>
                            Inactive
                        </h1>
                    </header>
                    <section id="Active" className={`tabContent mt-7 grid grid-cols-3 gap-3 ${activeVisible}`}>
                        {tabOfActiveProducts.length > 0 && tabOfActiveProducts.map((product, index) => (
                            <div key={index} className="w-[230px] h-[250px] max-h-[250px] overflow-hidden bg-white border-[1px] border-[#c6c7c9]">
                                <Link to={`/product/${product.$id}`}>
                                    <img className='max-h-[128px] min-h-[128px] w-full' src={service.getFilePreview(product.featuredImage)} alt={product.title} />
                                    <h3 className="hover:underline py-2 text-sm px-3">
                                        {product.title}
                                    </h3>
                                </Link>
                                <div className="relative float-left h-full w-full mt-5">
                                    <span onClick={() => setActiveProductId(activeProductId === product.$id ? null : product.$id)} className={`mx-2 material-symbols-outlined opacity-30 cursor-pointer hover:opacity-80 translate-y-6`} style={{fontSize: 30}}>
                                        more_horiz
                                    </span>
                                    {/* <p>Price {product.price}</p> */}
                                    {activeProductId === product.$id && (
                                        <ul className={`bg-white h-full relative -top-[221px]`}>
                                            <span onClick={() => setActiveProductId(null)}  class="material-symbols-outlined absolute right-0 mt-[6px] mr-1 cursor-pointer hover:bg-black hover:text-white rounded-full py-1 px-1">cancel</span>
                                            <Link to={`/edit-product/${product.$id}`}><li className="cursor-pointer hover:bg-[#F7F7F7] py-3 px-2 flex items-center text-sm"><span style={{fontSize: 20}} className="material-symbols-outlined mr-3">edit</span>Edit</li></Link>
                                            <Link to={`/product/${product.$id}`}><li className="cursor-pointer hover:bg-[#F7F7F7] py-3 px-2 flex items-center text-sm"><span className="material-symbols-outlined mr-3" style={{fontSize: 20}}>visibility</span>View</li></Link>
                                            <li onClick={() => service.deleteProduct(product.$id).then((status) => status && service.deleteFile(product.featuredImage))} className="cursor-pointer hover:bg-[#F7F7F7] py-3 px-2 flex items-center text-sm absolute bottom-0 w-full border-t border-[#c6c7c9]"><span className="material-symbols-outlined mr-3" style={{fontSize: 20}}>delete</span>Delete</li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                        <div className="w-[230px] h-[250px] bg-white border-[1px] text-center border-[#c6c7c9]">
                            <div onClick={() => navigate('/add-product')} className="cursor-pointer h-full w-full flex flex-col justify-center">
                                <h1 className="h-16 w-16 text-white rounded-full mx-auto py-2 text-5xl bg-black">+</h1>
                                <h3 className="font-semibold mt-3 py-2 text-sm px-3">Add New Product</h3>
                            </div>
                        </div>
                    </section>
                    <section id="Inactive" className={`tabContent mt-7 grid grid-cols-3 gap-3 ${inactiveVisible}`}>
                    {tabOfInactiveProducts.length > 0 && tabOfInactiveProducts.map((product, index) => (
                            <div key={index} className="w-[230px] h-[250px] max-h-[250px] overflow-hidden bg-white border-[1px] border-[#c6c7c9]">
                                <Link to={`/product/${product.$id}`}>
                                    <img className='max-h-[128px] min-h-[128px] w-full' src={service.getFilePreview(product.featuredImage)} alt={product.title} />
                                    <h3 className="hover:underline py-2 text-sm px-3">
                                        {product.title}
                                    </h3>
                                </Link>
                                <div className="relative float-left h-full w-full mt-5">
                                    <span onClick={() => setActiveProductId(activeProductId === product.$id ? null : product.$id)} className={`mx-2 material-symbols-outlined opacity-30 cursor-pointer hover:opacity-80 translate-y-6`} style={{fontSize: 30}}>
                                        more_horiz
                                    </span>
                                    {/* <p>Price {product.price}</p> */}
                                    {activeProductId === product.$id && (
                                        <ul className={`bg-white h-full relative -top-[221px]`}>
                                            <span onClick={() => setActiveProductId(null)}  class="material-symbols-outlined absolute right-0 mt-[6px] mr-1 cursor-pointer hover:bg-black hover:text-white rounded-full py-1 px-1">cancel</span>
                                            <Link to={`/edit-product/${product.$id}`}><li className="cursor-pointer hover:bg-[#F7F7F7] py-3 px-2 flex items-center text-sm"><span style={{fontSize: 20}} className="material-symbols-outlined mr-3">edit</span>Edit</li></Link>
                                            <Link to={`/product/${product.$id}`}><li className="cursor-pointer hover:bg-[#F7F7F7] py-3 px-2 flex items-center text-sm"><span className="material-symbols-outlined mr-3" style={{fontSize: 20}}>visibility</span>View</li></Link>
                                            <li onClick={() => service.deleteProduct(product.$id).then((status) => status && service.deleteFile(product.featuredImage))} className="cursor-pointer hover:bg-[#F7F7F7] py-3 px-2 flex items-center text-sm absolute bottom-0 w-full border-t border-[#c6c7c9]"><span className="material-symbols-outlined mr-3" style={{fontSize: 20}}>delete</span>Delete</li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                        <div className="w-[230px] h-[250px] bg-white border-[1px] text-center border-[#c6c7c9]">
                            <div onClick={() => navigate('/add-product')} className="cursor-pointer h-full w-full flex flex-col justify-center">
                                <h1 className="h-16 w-16 text-white rounded-full mx-auto py-2 text-5xl bg-black">+</h1>
                                <h3 className="font-semibold mt-3 py-2 text-sm px-3">Add New Product</h3>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;