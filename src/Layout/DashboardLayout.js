import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/SharedComponents/Footer/Footer';
import Navbar from '../Pages/SharedComponents/Navbar/Navbar';
import { AiOutlineShopping } from 'react-icons/ai';
import { MdOutlinePlaylistAdd, MdReportProblem } from 'react-icons/md';
import { BsFileEarmarkPerson } from 'react-icons/bs';
import { RiFolderUserFill, RiShoppingBag3Line } from 'react-icons/ri';
import { GoHome } from 'react-icons/go';
import { AuthContext } from '../Contexts/AuthProvider';
import useRoleCheck from '../hooks/useRoleCheck';

const DashboardLayout = () => {
    
    const { user } = useContext(AuthContext);
    const [role] = useRoleCheck(user?.email);

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
                    <ul className="menu p-4 w-72 bg-gray-900 text-white">
                    <li className="text-sm hover:translate-x-2 duration-300 lg:hidden"><Link to="/"><GoHome/> Home</Link></li>
                        {
                            role === "buyer" &&
                            <li className='text-sm hover:translate-x-2 duration-300'><Link to="/dashboard/myorders"><AiOutlineShopping /> My Orders</Link></li>
                        }
                        {
                            role === "seller" &&
                            <>
                                <li className='text-sm hover:translate-x-2 duration-300'>
                                    <Link to="/dashboard/addaproduct"><MdOutlinePlaylistAdd />Add a Product</Link>
                                </li>
                                <li className='text-sm hover:translate-x-2 duration-300'>
                                    <Link to="/dashboard/myproducts"><RiShoppingBag3Line />My Products</Link>
                                </li>
                            </>
                        }
                        {
                            role === "admin" &&
                            <>
                                <li className='text-sm hover:translate-x-2 duration-300'>
                                    <Link to="/dashboard/allsellers"><BsFileEarmarkPerson />All Sellers</Link>
                                </li>
                                <li className='text-sm hover:translate-x-2 duration-300'>
                                    <Link to="/dashboard/allbuyers"><RiFolderUserFill />All Buyers</Link>
                                </li>
                                <li className='text-sm hover:translate-x-2 duration-300'>
                                    <Link to="/dashboard/reporteditems"><MdReportProblem />Reported Items</Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;