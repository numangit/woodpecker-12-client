import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("//cdn.shopify.com/s/files/1/0077/2970/9137/files/slider-img_4.png?v=1613714145")` }}>
            <div className=" bg-opacity-0"></div>
            <div className="hero-content ml-auto mr-20 text-center text-gray-900">
                <div className="max-w-md">
                    <h1 className="my-1 text-5xl font-serif lg:text-6xl font-bold">Woodpecker</h1>
                    <p className="ml-auto text-2xl lg:text-3xl font-thin">The Best Quality Used Furniture</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;