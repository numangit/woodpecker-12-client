import Lottie from "lottie-react";
import React, { useEffect } from 'react';
import hello from '../../../assets/28826-hello-gilbert.json';

const Dashboard = () => {

    //scroll at the top after page is rendered
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='flex items-center justify-center'>
            <div>`
                <div className='w-4/5 lg:w-1/2 mx-auto lg:my-0 lg:py-0'>
                    <Lottie animationData={hello} loop={true} />
                </div>
                <h1 data-aos="fade-right" className="text-4xl font-semibold text-center">Welcome to your Dashboard</h1>
                <p data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500" className="text-center text-xl font-thin my-1">Explore the available options for your role.</p>
            </div>
        </div>
    );
};

export default Dashboard;