import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaMoneyCheck } from 'react-icons/fa';
import { IoMdDoneAll } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    //api to get orders by user email
    const { data: myOrders = [] } = useQuery({
        queryKey: ['myOrders', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myOrders?email=${user?.email}`);
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    return (
        <div>
            <div className="overflow-x-auto p-5 mx-auto">
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
                            myOrders?.map((product, i) => <tr key={product._id}>
                                <td className="text-center font-bold">{i + 1}</td>
                                <td>
                                    <div className="avatar flex items-center justify-center">
                                        <div className="w-12 rounded-md">
                                            <img src={product.productImage} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td className="font-bold text-sm">{product.productName}</td>
                                <td className="font-bold text-xs text-center">${product.productPrice}</td>
                                {/* <td>
                                    {
                                        product?.onStock ||
                                        <label htmlFor="confirmation-modal" className="flex justify-center text-red-500 font-bold text-xs uppercase">sold</label>
                                    }
                                    {
                                        product?.onStock &&
                                        <label htmlFor="confirmation-modal" className="flex items-center text-green-600 font-bold text-xs uppercase">Available
                                        </label>
                                    }
                                </td> */}
                                <td>
                                    {
                                        product?.paid &&
                                        <label htmlFor="confirmation-modal" className="flex items-center justify-center text-green-600 font-semibold text-xs uppercase"><IoMdDoneAll />&nbsp;Paid</label>
                                    }
                                    {
                                        product?.paid ||
                                        <Link to={`/dashboard/payment/${product.productId}`} className="btn btn-xs rounded flex items-center font-bold text-xs hover:text-gray-900 hover:bg-white">
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
            </div >
        </div >
    );
};

export default MyOrders;