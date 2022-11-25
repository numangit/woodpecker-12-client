import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImCross } from 'react-icons/im';
import { IoMdDoneAll } from 'react-icons/io';
import { HiSpeakerphone } from 'react-icons/hi';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    //api to get products by user email
    const { data: myProducts = [] } = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myProducts?email=${user?.email}`);
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    return (
        <div>
            <div className="overflow-x-auto p-10 mx-auto">
                <table className="table w-full">
                    <thead >
                        <tr>
                            <th className="bg-gray-900 text-white">Product No.</th>
                            <th className="bg-gray-900 text-white">Product image</th>
                            <th className="bg-gray-900 text-white">Product Name</th>
                            <th className="bg-gray-900 text-white">Price</th>
                            <th className="bg-gray-900 text-white">Sale status</th>
                            <th className="bg-gray-900 text-white">Paid Status</th>
                            <th className="bg-gray-900 text-white">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts?.map((product, i) => <tr key={product._id}>
                                <td className="text-center font-bold">{i + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-12 rounded-md">
                                            <img src={product.productImage} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td className="font-bold text-sm">{product.productName}</td>
                                <td className="font-bold text-xs">${product.resalePrice}</td>
                                <td>
                                    {
                                        product?.onStock ||
                                        <label htmlFor="confirmation-modal" className="flex justify-center font-bold text-xs uppercase">sold</label>
                                    }
                                    {
                                        product?.onStock &&
                                        <label htmlFor="confirmation-modal" className="flex items-center hover:text-blue-500 font-semibold text-xs uppercase"><HiSpeakerphone /> &nbsp;Advertise
                                        </label>
                                    }
                                </td>
                                <td>
                                    {
                                        product?.paid &&
                                        <label htmlFor="confirmation-modal" className="flex items-center text-green-500 font-semibold text-xs uppercase"><IoMdDoneAll />&nbsp;Paid</label>
                                    }
                                    {
                                        product?.paid ||
                                        <label htmlFor="confirmation-modal" className="flex items-center text-red-600 font-bold text-xs uppercase"><ImCross /> &nbsp;Not Paid</label>
                                    }

                                </td>
                                <td>
                                    <label htmlFor="confirmation-modal" className="flex justify-center text-2xl hover:text-red-600"><RiDeleteBin2Fill />
                                    </label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table >
            </div >
        </div >
    );
};

export default MyProducts;