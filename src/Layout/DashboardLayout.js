import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/SharedComponents/Footer/Footer';
import Navbar from '../Pages/SharedComponents/Navbar/Navbar';
import { AiOutlineShopping } from 'react-icons/ai';
import { MdOutlinePlaylistAdd, MdReportProblem } from 'react-icons/md';
import { BsFileEarmarkPerson } from 'react-icons/bs';
import { FaUserTie } from 'react-icons/fa';
import { RiFolderUserFill, RiShoppingBag3Line } from 'react-icons/ri';

const DashboardLayout = () => {



    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile ">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-[#e6e6e6]">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 bg-slate-800 text-white">

                        <li><Link to="/dashboard/myorders"><AiOutlineShopping /> My Orders</Link></li>
                        <li><Link to="/dashboard/addaproduct"><MdOutlinePlaylistAdd />Add a Prodcut</Link></li>
                        <li><Link to="/dashboard/myproducts"><RiShoppingBag3Line />My Products</Link></li>
                        <li><Link to="/dashboard/allsellers"><BsFileEarmarkPerson />All Sellers</Link></li>
                        <li><Link to="/dashboard/allbuyers"><RiFolderUserFill />All Buyers</Link></li>
                        <li><Link to="/dashboard/reporteditems"><MdReportProblem />Reported Items</Link></li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;