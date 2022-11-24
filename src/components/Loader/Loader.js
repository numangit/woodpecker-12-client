import React from 'react';
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className='flex justify-center items-center'>
            <InfinitySpin
                width='200'
                color="#0f1729"
            />
        </div>
    );
};

export default Loader;