import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaMoneyCheck } from 'react-icons/fa';
import { IoMdDoneAll } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
import { AuthContext } from '../../../Contexts/AuthProvider';
import EmptyData from '../../../components/EmptyData/EmptyData';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    //api to get orders by user email
    const { data: myOrders, isLoading } = useQuery({
        queryKey: ['myOrders', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://woodpecker12-server-numangit.vercel.app/orders/user?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('woodpecker-token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    //loader
    if (isLoading) {
        return <div className='flex items-center justify-center h-screen'> <Loader></Loader></div>
    };

    return (
        <div>
            <div className="overflow-x-auto p-5 mx-auto">
                {
                    myOrders?.length === 0 && <EmptyData />     
                }
                {
                    myOrders?.length > 0 &&
                    <table data-aos="fade-down" data-aos-duration="500" className="table w-full">
                    <thead >
                        <tr>
                            <th className="bg-gray-900 text-white text-center">Product No.</th>
                            <th className="bg-gray-900 text-white text-center">Product image</th>
                            <th className="bg-gray-900 text-white ">Product Name</th>
                            <th className="bg-gray-900 text-white text-center">Price</th>
                            <th className="bg-gray-900 text-white text-center">Pay status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders?.map((order, i) => <tr key={order?._id}>
                                <td className="text-center font-bold">{i + 1}</td>
                                <td>
                                    <div className="avatar flex items-center justify-center">
                                        <div className="w-12 rounded-md">
                                            <img src={order?.productImage} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td className="font-bold text-sm">{order?.productName}</td>
                                <td className="font-bold text-xs text-center">${order?.productPrice}</td>
                                <td>
                                    {
                                        order?.paid &&
                                        <label htmlFor="confirmation-modal" className="flex items-center justify-center text-green-600 font-semibold text-xs uppercase"><IoMdDoneAll />&nbsp;Paid</label>
                                    }
                                    {
                                        order?.paid ||
                                        <Link to={`/dashboard/payment/${order?._id}`} className="btn btn-xs rounded flex items-center font-bold text-xs hover:text-gray-900 hover:bg-white">
                                            <div className="flex items-center">
                                                <FaMoneyCheck /> &nbsp;<p>Pay</p>
                                            </div>
                                        </Link>
                                    }

                                </td>
                            </tr>)
                        }
                    </tbody>
                </table >
                }
                
            </div >
        </div >
    );
};

export default MyOrders;