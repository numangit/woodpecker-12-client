import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/SharedComponents/Footer/Footer';
import Navbar from '../Pages/SharedComponents/Navbar/Navbar';

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;