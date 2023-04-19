import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { HiSpeakerphone } from 'react-icons/hi';
import toast from 'react-hot-toast';
import EmptyData from '../../../components/EmptyData/EmptyData';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    //api to get products by user email
    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://woodpecker12-server-numangit.vercel.app/products/user?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    //function to advertise product
    const handleAdvertise = (id) => {
        fetch(`https://woodpecker12-server-numangit.vercel.app/products/advertised/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('woodpecker-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Product advertised successfully')
                    refetch();
                }
            })
    };

    //function to delete product
    const handleDeleteProduct = id => {
        fetch(`https://woodpecker12-server-numangit.vercel.app/products/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success("Product deleted successfully")
                }
            })
    };

    return (
        <div>
            <div className="overflow-x-auto p-5 mx-auto">
                {/* {
                    myProducts?.length === 0
                        ? <EmptyData />
                        : <table data-aos="fade-down" data-aos-duration="500" className="table w-full">
                            <thead >
                                <tr>
                                    <th className="bg-gray-900 text-white text-center">Product No.</th>
                                    <th className="bg-gray-900 text-white text-center">Product image</th>
                                    <th className="bg-gray-900 text-white">Product Name</th>
                                    <th className="bg-gray-900 text-white text-center">Price</th>
                                    <th className="bg-gray-900 text-white text-center">Sale status</th>
                                    <th className="bg-gray-900 text-white text-center">Advertise</th>
                                    <th className="bg-gray-900 text-white text-center">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myProducts?.map((product, i) => <tr key={product._id}>
                                        <td className="text-center font-bold">{i + 1}</td>
                                        <td>
                                            <div className="avatar flex justify-center">
                                                <div className="w-12 rounded-md">
                                                    <img src={product.productImage} alt="" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="font-bold text-sm">{product.productName}</td>
                                        <td className="text-center font-bold text-xs">${product.resalePrice}</td>
                                        <td>
                                            {
                                                product?.onStock ||
                                                <label htmlFor="confirmation-modal" className="flex justify-center text-red-500 font-bold text-xs uppercase text-center">sold</label>
                                            }
                                            {
                                                product?.onStock &&
                                                <label htmlFor="confirmation-modal" className="flex justify-center items-center text-green-600 font-bold text-xs uppercase">Available
                                                </label>
                                            }
                                        </td>
                                        <td>
                                            {
                                                (product?.onStock && !product?.advertised)
                                                    ? <label className="btn btn-accent btn-sm rounded-md flex items-center justify-center hover:text-blue-500 font-bold text-xs uppercase">
                                                        <div onClick={() => handleAdvertise(product._id)} className="flex">
                                                            <HiSpeakerphone /> &nbsp;<p>Advertise</p>
                                                        </div>
                                                    </label>
                                                    : <button disabled className="btn btn-ghost btn-sm rounded-md flex items-center justify-center hover:text-blue-500 font-bold text-xs uppercase">
                                                        <div onClick={() => handleAdvertise(product._id)} className="flex">
                                                            <HiSpeakerphone /> &nbsp;<p>Advertised</p>
                                                        </div>
                                                    </button>
                                            }
                                        </td>
                                        <td>
                                            <label onClick={() => handleDeleteProduct(product._id)} className="flex justify-center text-2xl hover:text-red-600"><RiDeleteBin2Fill />
                                            </label>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table >
                } */}

                <table data-aos="fade-down" data-aos-duration="500" className="table w-full">
                    <thead >
                        <tr>
                            <th className="bg-gray-900 text-white text-center">Product No.</th>
                            <th className="bg-gray-900 text-white text-center">Product image</th>
                            <th className="bg-gray-900 text-white">Product Name</th>
                            <th className="bg-gray-900 text-white text-center">Price</th>
                            <th className="bg-gray-900 text-white text-center">Sale status</th>
                            <th className="bg-gray-900 text-white text-center">Advertise</th>
                            <th className="bg-gray-900 text-white text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts?.map((product, i) => <tr key={product._id}>
                                <td className="text-center font-bold">{i + 1}</td>
                                <td>
                                    <div className="avatar flex justify-center">
                                        <div className="w-12 rounded-md">
                                            <img src={product.productImage} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td className="font-bold text-sm">{product.productName}</td>
                                <td className="text-center font-bold text-xs">${product.resalePrice}</td>
                                <td>
                                    {
                                        product?.onStock ||
                                        <label htmlFor="confirmation-modal" className="flex justify-center text-red-500 font-bold text-xs uppercase text-center">sold</label>
                                    }
                                    {
                                        product?.onStock &&
                                        <label htmlFor="confirmation-modal" className="flex justify-center items-center text-green-600 font-bold text-xs uppercase">Available
                                        </label>
                                    }
                                </td>
                                <td>
                                    {
                                        (product?.onStock && !product?.advertised)
                                            ? <label className="btn btn-accent btn-sm rounded-md flex items-center justify-center hover:text-blue-500 font-bold text-xs uppercase">
                                                <div onClick={() => handleAdvertise(product._id)} className="flex">
                                                    <HiSpeakerphone /> &nbsp;<p>Advertise</p>
                                                </div>
                                            </label>
                                            : <button disabled className="btn btn-ghost btn-sm rounded-md flex items-center justify-center hover:text-blue-500 font-bold text-xs uppercase">
                                                <div onClick={() => handleAdvertise(product._id)} className="flex">
                                                    <HiSpeakerphone /> &nbsp;<p>Advertised</p>
                                                </div>
                                            </button>
                                    }
                                </td>
                                <td>
                                    <label onClick={() => handleDeleteProduct(product._id)} className="flex justify-center text-2xl hover:text-red-600"><RiDeleteBin2Fill />
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