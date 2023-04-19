import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/icons8-bird-64.png';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();

    //function to handle logout
    const handleLogOut = () => {
        logOut()
            .then(() => {
                localStorage.removeItem('woodpecker-token');
            })
            .catch(err => console.log(err));
    };
   
    //Nav links
    const menuItems = <>
        <li className="text-sm hover:text-yellow-400"><Link to="/">Home</Link></li>
        <li className="text-sm hover:text-yellow-400"><Link to="/blogs">FAQ</Link></li>
        {
            user?.uid ?
                <>
                    <li className="text-sm hover:text-yellow-400"><Link to="/dashboard">Dashboard</Link></li>
                    <div className="h-auto m-0 p-0 bg-zinc-700 w-[1px]"></div>
                    {
                        user?.photoURL ?
                            <div className="avatar p-2 mx-2 hidden lg:block">
                                <div className="w-8 rounded-full">
                                    <img className="" src={user?.photoURL} title={user?.displayName} alt="" />
                                </div>
                            </div>
                            : <FaUserCircle className="text-xl my-auto mx-2 hidden lg:block" title={user?.displayName} />
                    }
                    <li className="text-sm hover:text-yellow-400"><button className='lg:p-0' onClick={handleLogOut}>Log out</button></li>
                </>
                :
                <>
                    <li className="text-sm hover:text-yellow-400"><Link to="/register">Register</Link></li>
                    <li className="text-sm hover:text-yellow-400"><Link to="/login">Login</Link></li>
                </>
        }
    </>

    return (
        <div data-theme="" className='sticky top-0 z-50 backdrop-blur bg-primary/95 text-white'>
            {/* change nav color when scrolling conditional className */}
            <div className="navbar flex justify-between py-0 my-0">
                <div className="navbar-start">
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img className="w-10 mr-1" src={logo} alt="" />
                        <span className='font-comfortaa font-thin'> Woodpecker</span>
                    </Link>
                </div>
                {/* small screen */}
                {
                        location?.pathname !== "/dashboard" 
                        &&<div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-white rounded-box w-52 right-0">
                            {menuItems}
                        </ul>
                    </div>
                    }
                {/* large screen screen */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal mr-3 p-0">
                        {menuItems}
                    </ul>
                </div>
                {/* dashboard drawer for small device */}
                {
                    location?.pathname === "/dashboard"
                    &&<label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <GiHamburgerMenu />
                </label>
                }
                
            </div>
        </div>
    );
};

export default Navbar;