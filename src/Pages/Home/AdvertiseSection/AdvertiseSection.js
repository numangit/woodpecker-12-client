import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../components/Loader/Loader';
import { ImPriceTag } from 'react-icons/im';

const AdvertiseSection = () => {
    // getting product categories from api
    const { data: advertisedProducts = [], isLoading } = useQuery({
        queryKey: ['advertisedProducts'],
        queryFn: async () => {
            const res = await fetch("https://woodpecker12-server.vercel.app/advertisedProducts");
            const data = await res.json();
            return data;
        }
    });

    //loader
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='p-6 lg:p-8 bg-[#f2f2f2]'>
            <div className=''>
                <h1 data-aos="fade-up" data-aos-duration="500" className='text-3xl font-bold text-center'>Checkout Our Product</h1>
                <p data-aos="fade-right" data-aos-duration="600" className='mx-auto text-center font-thin mt-4 my-1 max-w-2xl'>Moving to a new space or redecorating? <br className='hidden md:block' /> Extend the life of great design by buying pre-loved and save up to 90% on top furniture brands.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 my-10'>
                {
                    advertisedProducts?.map(product =>
                        <div key={product._id} className="card w-full bg-base-100 shadow-xl rounded-2xl">
                            <figure><img src={product.productImage} alt="Shoes" /></figure>
                            <div className="card-body">
                                <div className="card-actions justify-end">
                                    <div className="badge badge-sm badge-outline -mr-5">Advertised</div>
                                </div>
                                <h2 className="card-title text-xl">
                                    {product.productName}
                                </h2>
                                <p className='text-2xl flex items-center '>
                                    <ImPriceTag />&nbsp;$
                                    <span className='font-semibold text-orange-500'>{product.resalePrice}</span>&nbsp;
                                    <span className='text-xl line-through text-slate-700'>${product.originalPrice}</span>
                                </p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default AdvertiseSection;