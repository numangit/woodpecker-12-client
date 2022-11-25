import React from 'react';

import { useLoaderData, useNavigation } from 'react-router-dom';
import Loader from '../../../src/components/Loader/Loader';

const CategoryPage = () => {
    const products = useLoaderData();
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loader></Loader>
    }
    return (
        <div className=' bg-[#e6e6e6]'>
            <h1 className='text-center text-4xl py-4 lg:py-10'>Available products</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 p-5 lg:p-20'>
                {
                    products?.map(product =>
                        <div key={product._id} className="card lg:card-side bg-base-100 shadow-xl rounded-2xl">
                            <figure><img src={product.productImage} alt="Album" /></figure>
                            <div className="card-body ">
                                <h2 className="card-title text-lg">{product.productName}</h2>
                                <p className='text-sm'>{product.productDescription.slice(0, 60)}..</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-sm btn-primary rounded-md">Buy Now</button>
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