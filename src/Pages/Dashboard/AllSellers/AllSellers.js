import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { MdVerified } from 'react-icons/md';
import Loader from '../../../components/Loader/Loader';

const AllSellers = () => {

    //api to get products by user email
    const { data: allSellers = [], isLoading, refetch } = useQuery({
        queryKey: ['allSellers'],
        queryFn: async () => {
            const res = await fetch("https://woodpecker12-server-numangit.vercel.app/users/sellers");
            const data = await res.json();
            return data;
        }
    });

    //function to advertise product
    const handleVerify = (user) => {
        fetch(`https://woodpecker12-server-numangit.vercel.app/users/verify/${user._id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('woodpecker-token')}`
            }
        })
            .then(res => res.json())
            .then(verifyData => {
                fetch(`https://woodpecker12-server-numangit.vercel.app/products/sellerVerify/${user.email}`, {
                    method: 'PUT'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            toast.success(`${user.name} verified`)
                            refetch();
                        }
                    })
            })
    };

    //function to delete Buyer
    const handleDeleteSeller = user => {
        fetch(`https://woodpecker12-server-numangit.vercel.app/users/sellers/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${user.name} deleted successfully`)
                }
            })
    };

    //loader
    if (isLoading) {
        return <div className='h-screen flex items-center justify-center'><Loader></Loader></div>
    };

    return (
        <div >
            <div className="overflow-x-auto p-5 mx-auto">
                <table data-aos="fade-down" data-aos-duration="500" className="table w-full">
                    <thead >
                        <tr>
                            <th className="bg-gray-900 text-white text-center">Seller No.</th>
                            <th className="bg-gray-900 text-white text-center">Seller Name</th>
                            <th className="bg-gray-900 text-white text-center">Seller Email</th>
                            <th className="bg-gray-900 text-white text-center">Verify</th>
                            <th className="bg-gray-900 text-white text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSellers?.map((seller, i) => <tr key={seller._id}>
                                <td className="text-center font-bold">{i + 1}</td>
                                <td className="font-bold text-sm text-center">{seller.name}</td>
                                <td className="font-bold text-sm text-center">{seller.email}</td>
                                <td>
                                    {
                                        (seller?.verified)
                                            ? <label className="rounded-md flex items-center text-blue-500 font-bold text-xs uppercase justify-center">
                                                <div onClick={() => handleVerify(seller)} className="flex justify-center text-center">
                                                    <MdVerified /> &nbsp;<p className='text-center'>Verified</p>
                                                </div>
                                            </label>
                                            : <label className="btn btn-accent btn-sm rounded-md flex items-center hover:text-blue-300 font-bold text-xs uppercase">
                                                <div onClick={() => handleVerify(seller)} className="">
                                                    Verify
                                                </div>
                                            </label>
                                    }
                                </td>
                                <td>
                                    <label onClick={() => handleDeleteSeller(seller)} className="flex justify-center text-2xl hover:text-red-600"><RiDeleteBin2Fill />
                                    </label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table >
            </div >
        </div>
    );
};

export default AllSellers;