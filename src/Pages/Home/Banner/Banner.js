import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("//cdn.shopify.com/s/files/1/0077/2970/9137/files/slider-img_4.png?v=1613714145")` }}>
            <div className=" bg-opacity-0"></div>
            <div className="hero-content lg:ml-auto lg:mr-20 text-center text-gray-900">
                <div className="max-w-md">
                    <h1 data-aos="fade-down" className="my-1 text-5xl lg:text-6xl font-bold">Woodpecker</h1>
                    <p data-aos="fade-left" data-aos-duration="800" className="ml-auto text-xl lg:text-2xl font-thin">The Best Quality Used Furniture</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;