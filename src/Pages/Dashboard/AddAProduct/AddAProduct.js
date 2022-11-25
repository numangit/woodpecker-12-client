import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcInfo } from 'react-icons/fc';
import { useQuery } from '@tanstack/react-query';

const AddAProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [formError, setFormError] = useState('')

    // getting product categories from api
    const { data: productCategories = [] } = useQuery({
        queryKey: ['productCategories'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/productCategories");
            const data = await res.json();
            return data;
        }
    });

    //function to handle form submit  
    const handleAddAProduct = data => {
        console.log(data)
        setFormError('');
    }

    return (
        <div>
            <div className="shadow-lg p-8 lg:mx-auto w-full lg:w-5/6 rounded-xl my-2 lg:my-5 border text-dark bg-white">
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
                    <div className="grid grid-cols-3 gap-2 my-3">
                        <div>
                            <input {...register("sellerEmail", { required: "Email Address is required" })} type="email" className="input input-bordered input-sm w-full focus:border-none" placeholder="Seller email*" />
                            {errors.sellerEmail && <p className="text-red-500 text-xs" role="alert">{errors.sellerEmail?.message}</p>}
                        </div>
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
                    <div className="grid grid-cols-2 gap-5 my-3">
                        <div className="form-control w-full flex flex-wrap">
                            <div>
                                <input {...register("productName", { required: "Product name is required" })}
                                    type="text" className="input input-bordered input-sm w-full focus:border-none" placeholder="Product Name *" />
                            </div>
                            {errors.productName && <p className="text-red-500 text-xs" role="alert">{errors.productName?.message}</p>}
                        </div>
                    </div>
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
                        <div className='flex items-center'>
                            <label className="label"><span className="label-text font-semibold text-xs "> Category: </span></label>
                            <select {...register("productCategory")} className="select select-sm rounded select-bordered w-3/4 focus:border-none mx-auto">
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
                        <div className='flex items-center'>
                            <label className="label"><span className="label-text font-semibold text-xs "> Condition : </span></label>
                            <select {...register("productCondition")} className="select select-sm rounded select-bordered w-3/4 focus:border-none mx-auto">
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
        </div>
    );
};

export default AddAProduct;