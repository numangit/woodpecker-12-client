import React from 'react';
import { FaHeart } from 'react-icons/fa';

const OurStory = () => {
    return (
        <div className='bg-yellow-500 lg:p-10 p-5'>
            <div className=''>
                <h1 data-aos="fade-up" data-aos-duration="500" className='text-5xl font-bold text-center font-typeWriter'>4,005,488</h1>
                <p data-aos="fade-right" data-aos-duration="600" className='mx-auto text-center font-thin mt-4 my-1 flex items-center justify-center'>pounds of furniture kept out of landfills, thanks to you <FaHeart className='text-red-700' /></p>
            </div>
        </div>
    );
};

export default OurStory;