import Lottie from 'lottie-react';
import React from 'react';
import preloader from '../../assets/9582-liquid-4-dot-loader.json';

const Preloading = () => {
    return (
        <div className='h-screen bg-slate-900 flex justify-center items-center'>
        <div className='w-1/3'>
            <Lottie animationData={preloader} loop={true} />
        </div>
    </div>
    );
};

export default Preloading;