import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../components/Loader/Loader';
import { ImPriceTag } from 'react-icons/im';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const AdvertiseSection = () => {

    // getting product categories from api
    const { data: advertisedProducts = [], isLoading } = useQuery({
        queryKey: ['advertisedProducts'],
        queryFn: async () => {
            const res = await fetch("https://woodpecker12-server-numangit.vercel.app/products/advertised");
            const data = await res.json();
            return data;
        }
    });

    //loader
    if (isLoading) {
        return <Loader></Loader>
    };
    
    return (
        <div className='p-6 lg:p-8 bg-[#f2f2f2]'>
            <div className=''>
                <h1 data-aos="fade-up" data-aos-duration="500" className='text-3xl font-bold text-center'>Checkout Our Product</h1>
                <p data-aos="fade-right" data-aos-duration="600" className='mx-auto text-center font-thin mt-4 my-1 max-w-2xl'>Moving to a new space or redecorating? <br className='hidden md:block' /> Extend the life of great design by buying pre-loved and save up to 90% on top furniture brands.</p>
            </div>
            <div className='p-3 lg:px-9'>
                <Swiper
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            width: 640,
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 3,
                        },
                    }}
                    // slidesPerView={4}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        advertisedProducts?.map(product => <SwiperSlide key={product._id}>
                            <div key={product._id} className="card w-96 bg-base-100 shadow-xl rounded-2xl relative">
                                <figure><img src={product.productImage} alt="Shoes" /></figure>
                                <div className="card-actions justify-end absolute top-2 ml-50">
                                    <div className="badge badge-sm badge-error">Advertised</div>
                                </div>
                                <div className="card-body">

                                    <h2 className="card-title text-xs">
                                        {product.productName}
                                    </h2>
                                    <p className='text-2xl flex items-center '>
                                        <ImPriceTag />&nbsp;$
                                        <span className='font-semibold text-orange-500'>{product.resalePrice}</span>&nbsp;
                                        <span className='text-xl line-through text-slate-700'>${product.originalPrice}</span>
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default AdvertiseSection;