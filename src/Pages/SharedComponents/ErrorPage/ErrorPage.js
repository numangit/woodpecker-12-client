import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import notfound from "../../../assets/67548-404-error-page.json";

const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center my-0 py-3 md:py-0" id="main">
            <div className="text-center">
                <div className='w-4/5 lg:w-1/2 mx-auto lg:my-0 lg:py-0'><Lottie animationData={notfound} loop={true} /></div>
                <div className='col-10 col-md-8 mx-auto my-lg-0 py-5 pt-lg-3 pb-lg-5'>
                    <p className='text-4xl font-bold'>Oops! Something went wrong <br className='hidden md:block' /> Please return to home page.</p>
                    <Link to="/"><button type="button" className="btn my-3">Return Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;