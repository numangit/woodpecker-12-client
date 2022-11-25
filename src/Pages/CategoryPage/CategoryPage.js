import React, { useContext, useEffect } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loader from '../../../src/components/Loader/Loader';
import { MdLocationOn, MdVerified, MdDateRange } from 'react-icons/md';
import { BiTime } from 'react-icons/bi';
import { SlCalender } from 'react-icons/sl';
import { ImUserTie, ImPriceTag } from 'react-icons/im';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Contexts/AuthProvider';

const CategoryPage = () => {
    const { currentUser } = useContext(AuthContext);
    const products = useLoaderData();
    const navigation = useNavigation();

    //scroll at the top after page is rendered
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    //api to get user data by email
    const { data: userData = [] } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?email=${currentUser?.email}`);
            const data = await res.json();
            return data;
        }
    });

    if (navigation.state === "loading") {
        return <Loader></Loader>
    }
    return (
        <div className=' bg-[#e6e6e6]'>
            <h1 className='text-center text-4xl font-semibold pt-4 lg:pt-5'>Available product{products.length > 1 && "s"} </h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 p-5 lg:p-10'>
                {
                    products?.map(product =>
                        <div key={product._id} className="card lg:card-side bg-base-100 shadow-xl rounded-2xl">
                            <figure><img src={product.productImage} alt="Album" /></figure>
                            <div className="card-body lg:p-6">
                                <h2 className="card-title text-lg">{product.productName}</h2>
                                <p className='text-sm'>{product.productDescription.slice(0, 60)}..</p>
                                <p className='text-xs flex items-center '>
                                    <ImPriceTag />&nbsp;Original Price: $
                                    <span className='font-semibold'>{product.originalPrice}</span>
                                </p>
                                <p className='text-xs flex items-center '>
                                    <ImPriceTag />&nbsp;Resale Price: $
                                    <span className='font-semibold'>{product.resalePrice}</span>&nbsp;
                                    <span className='text-xs line-through text-slate-700'>${product.originalPrice}</span>
                                </p>
                                <p className='text-xs flex items-center '>
                                    <SlCalender />&nbsp;Used:&nbsp;
                                    <span className='font-semibold'>
                                        {product.yearsOfUse} year{product.yearsOfUse > 1 && "s"}
                                    </span>
                                </p>
                                <p className='text-xs flex items-center '>
                                    <ImUserTie />&nbsp;by&nbsp;<span className='font-semibold'>{product.sellerName}</span>
                                    {
                                        userData.verified && <MdVerified className='text-blue-500' />
                                    }
                                </p>
                                <p className='text-xs flex items-center'><MdLocationOn />
                                    {product.sellerLocation}
                                </p>
                                <p className='text-xs font-semibold flex items-center'>
                                    <MdDateRange />{product.postedDate.slice(2, -14)}&nbsp;&nbsp;
                                    <BiTime />{product.postedDate.slice(11, -5)}
                                </p>
                                {/* <p className='text-xs font-semibold flex items-center justify-between'>
                                    <div className='text-xs font-semibold flex items-center'>
                                        <MdDateRange /> {product.postedDate.slice(2, -14)}
                                    </div>
                                    <div className='text-xs font-semibold flex items-center'>
                                        <BiTime /> {product.postedDate.slice(11, -5)}
                                    </div>
                                </p> */}
                                <div className="card-actions justify-end">
                                    <button className="btn btn-sm btn-primary rounded-md w-full">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default CategoryPage;