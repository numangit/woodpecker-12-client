import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcInfo } from 'react-icons/fc';
import { IoMdImages } from 'react-icons/io';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../components/Loader/Loader';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AddAProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [formError, setFormError] = useState('')

    // getting product categories from api
    const { data: productCategories = [], isLoading } = useQuery({
        queryKey: ['productCategories'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/productCategories");
            const data = await res.json();
            return data;
        }
    });

    //upload image to thirparty hosting service
    const imageAPIKey = process.env.REACT_APP_imgbb_key;

    //function to handle form submit  
    const handleAddAProduct = data => {
        console.log(data)
        setFormError('');
        //get image data from form and upload to image bb
        const image = data.productImage[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageAPIKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                //sending the data from form to end point to save the data in data base
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const productDetails = {
                        productImage: imgData.data.url,
                        productName: data.productName,
                        originalPrice: data.originalPrice,
                        resalePrice: data.resalePrice,
                        yearsOfPurchase: data.yearsOfPurchase,
                        yearsOfUse: data.yearsOfUse,
                        productCategory: data.productCategory,
                        productCondition: data.productCondition,
                        productDescription: data.productDescription,
                        sellerName: user.displayName,
                        sellerEmail: user.email,
                        sellerLocation: data.sellerLocation,
                        sellerPhone: data.sellerPhone,
                        onStock: true,
                        paid: false,
                        postedDate: new Date()
                    }
                    console.log(productDetails);

                    // save products information to the database
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(productDetails)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                        })
                }
            })

    }


    //show loader on data fetch process
    if (isLoading) {
        return <div className='flex items-center justify-center h-screen'> <Loader></Loader></div>
    }

    return (
        <div className="shadow-lg p-4 lg:p-8 mx-1 lg:mx-auto w-full lg:w-5/6 rounded-xl my-2 lg:my-5 border text-dark bg-white">
            <h2 className="text-xl text-start font-semibold ">
                <span className='flex items-center'><FcInfo className='mx-2 text-lg' /> Please fill up the form</span>
            </h2>
            <div className="divider my-1"></div>
            <form onSubmit={handleSubmit(handleAddAProduct)}>
                <div>
                    {formError && <p className='text-red-600'>{formError.slice(22, -2)}</p>}
                </div>
                {/* seller info  */}
                <h2 className='text-start font-bold text-sm'>Seller info</h2>
                <div className="grid grid-cols-2 gap-5 my-3">
                    {/* <div>
                        <input {...register("sellerName", { required: "Location is required" })}
                            type="text" className="input input-bordered input-sm w-full focus:border-none" placeholder="Seller Name*" />
                        {errors.sellerName && <p className="text-red-500 text-xs" role="alert">{errors.sellerName?.message}</p>}
                    </div>
                    <div>
                        <input {...register("sellerEmail", { required: "Email Address is required" })} type="email" className="input input-bordered input-sm w-full focus:border-none" placeholder="Seller email*" />
                        {errors.sellerEmail && <p className="text-red-500 text-xs" role="alert">{errors.sellerEmail?.message}</p>}
                    </div> */}
                    <div>
                        <input {...register("sellerPhone", { required: "Mobile number is required" })}
                            type="number" className="input input-bordered input-sm w-full focus:border-none" placeholder="Seller mobile number*" />
                        {errors.sellerPhone && <p className="text-red-500 text-xs" role="alert">{errors.sellerPhone?.message}</p>}
                    </div>
                    <div>
                        <input {...register("sellerLocation", { required: "Location is required" })}
                            type="text" className="input input-bordered input-sm w-full focus:border-none" placeholder="Seller location*" />
                        {errors.sellerLocation && <p className="text-red-500 text-xs" role="alert">{errors.sellerLocation?.message}</p>}
                    </div>
                </div>
                {/* product info */}
                <h2 className='text-start font-bold text-sm'>Product </h2>
                {/* name and image  */}
                <div className="grid grid-cols-2 gap-5 my-3">
                    <div className="form-control w-full flex flex-wrap">
                        <div>
                            <input {...register("productName", { required: "Product name is required" })}
                                type="text" className="input input-bordered input-sm w-full focus:border-none" placeholder="Product Name *" />
                        </div>
                        {errors.productName && <p className="text-red-500 text-xs" role="alert">{errors.productName?.message}</p>}
                    </div>
                    <div>
                        <label className="w-full shadow-sm mx-auto flex items-center p-1 bg-white text-black rounded tracking-wide border cursor-pointer">
                            <div className='mx-auto flex items-center'>
                                <IoMdImages className='mx-2' />
                                <span className="text-xs font-bold">Product image</span>
                            </div>
                            <input type="file"
                                {...register("productImage", { required: "Photo is Required" })}
                                className="hidden" />
                        </label>
                        {errors.productImage && <p className='text-red-500 text-xs'>{errors.productImage.message}</p>}
                    </div>
                </div>
                {/* price and uses  */}
                <div className="grid grid-cols-4 gap-2 my-3">
                    <div>
                        <input {...register("originalPrice", { required: "Original price is required" })} type="number" className="input input-bordered input-sm w-full focus:border-none" placeholder="Original price*" />
                        {errors.originalPrice && <p className="text-red-500 text-xs" role="alert">{errors.originalPrice?.message}</p>}
                    </div>
                    <div>
                        <input {...register("resalePrice", { required: "Resale price is required" })}
                            type="number" className="input input-bordered input-sm w-full focus:border-none" placeholder="Resale price*" />
                        {errors.resalePrice && <p className="text-red-500 text-xs" role="alert">{errors.resalePrice?.message}</p>}
                    </div>
                    <div>
                        <input {...register("yearsOfUse", { required: "Years of use is required" })}
                            type="number" className="input input-bordered input-sm w-full focus:border-none" placeholder="Years of use*" />
                        {errors.yearsOfUse && <p className="text-red-500 text-xs" role="alert">{errors.yearsOfUse?.message}</p>}
                    </div>
                    <div>
                        <input {...register("yearsOfPurchase", { required: "Years of purchase is required" })}
                            type="number" className="input input-bordered input-sm w-full focus:border-none" placeholder="Years of purchase*" />
                        {errors.yearsOfPurchase && <p className="text-red-500 text-xs" role="alert">{errors.yearsOfPurchase?.message}</p>}
                    </div>
                </div>
                {/* category and condition */}
                <div className="grid grid-cols-2 gap-5 my-3" >
                    <div className='block md:flex items-center'>
                        <label className="label"><span className="label-text font-semibold text-xs "> Category: </span></label>
                        <select {...register("productCategory")} className="select select-sm rounded select-bordered w-4/5 focus:border-none mx-auto">
                            {
                                productCategories?.map(category =>
                                    <option
                                        key={category._id}
                                        value={category._id}
                                    >{category.categoryName}
                                    </option>)
                            }
                        </select>
                    </div>
                    <div className='block md:flex items-center'>
                        <label className="label"><span className="label-text font-semibold text-xs "> Condition : </span></label>
                        <select {...register("productCondition")} className="select select-sm rounded select-bordered w-4/5 focus:border-none mx-auto">
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                        </select>
                    </div>
                </div>
                {/* description */}
                <div className="w-full my-3">
                    <textarea className="textarea textarea-bordered w-full focus:border-none" placeholder="Product description*"
                        {...register("productDescription", { required: "Description must be filled" })}></textarea>
                    {errors.productDescription && <p className="text-red-500 text-xs" role="alert">{errors.productDescription?.message}</p>}
                </div>
                <input className='btn btn-accent w-full' value="Add Product" type="submit" />
            </form>

        </div>
    );
};

export default AddAProduct;