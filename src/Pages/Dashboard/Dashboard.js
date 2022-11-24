import Lottie from "lottie-react";
import React from 'react';
import hello from '../../assets/28826-hello-gilbert.json';

const Dashboard = () => {
    return (
        <div className='flex items-center justify-center'>
            <div>`
                <div className='w-4/5 lg:w-1/2 mx-auto lg:my-0 lg:py-0'>
                    <Lottie animationData={hello} loop={true} />
                </div>
                <h1 className="text-3xl font-semibold text-center">Welcome to your Dashbaord</h1>

            </div>
        </div>
    );
};

export default Dashboard;