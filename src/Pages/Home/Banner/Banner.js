import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("//cdn.shopify.com/s/files/1/0077/2970/9137/files/slider-img_4.png?v=1613714145")` }}>
            <div className="hero-overlay bg-opacity-5"></div>
            <div className="hero-content ml-auto mr-8 text-center text-gray-900">
                <div className="max-w-md">
                    <h1 className="ml-auto text-5xl lg:text-6xl font-SemiBold">The Brighten Up Interior Collection</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;