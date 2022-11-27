import Lottie from 'lottie-react';
import React from 'react';
import noData from '../../assets/25943-nodata.json';

const EmptyData = () => {
    return (
        <div className='h-screen'>
            <div className='w-4/5 lg:w-1/2 mx-auto lg:my-0 lg:py-0'>
                <Lottie animationData={noData} loop={true} />
            </div>
        </div>
    );
};

export default EmptyData;