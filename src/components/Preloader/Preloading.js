import Lottie from 'lottie-react';
import React from 'react';
import preloader from '../../assets/9606-wave-loader.json';

const Preloading = () => {
    return (
        <div className='h-screen bg-slate-900 flex justify-center items-center'>
        <div className='w-1/5'>
            <Lottie animationData={preloader} loop={true} />
        </div>
    </div>
    );
};

export default Preloading;