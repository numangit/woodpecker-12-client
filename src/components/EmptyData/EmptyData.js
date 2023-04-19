import Lottie from 'lottie-react';
import React from 'react';
import noData from '../../assets/25943-nodata.json';

const EmptyData = () => {
    return (
        <div className='h-screen'>
            <div className='w-4/5 lg:w-2/5 mx-auto lg:my-0 lg:py-0'>
                <Lottie animationData={noData} loop={true} />
            </div>
            <h1 data-aos="fade-right" className="text-2xl font-semibold text-center text-gray-400"> No Data Registered</h1>
        </div>
    );
};

export default EmptyData;