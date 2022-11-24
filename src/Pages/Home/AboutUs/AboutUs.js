import React from 'react';

const AboutUs = () => {
    return (
        <div className="hero py-4 lg:py-8 bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://static.toiimg.com/photo/79679098.cms" className="min-w-sm lg:max-w-md rounded-lg shadow-2xl" alt='' />
                <div className='p-3 lg:p-8'>
                    <h1 className="text-5xl font-bold">Furnish forward <br /> and sustain forests</h1>
                    <p className="py-6 text-xl">We’ll plant a tree through the National Forest Foundation for every order completed on Woodpecker</p>
                    <button className="btn btn-accent">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;