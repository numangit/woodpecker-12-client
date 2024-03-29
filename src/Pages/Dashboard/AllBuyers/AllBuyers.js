import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import Loader from '../../../components/Loader/Loader';

const AllBuyers = () => {

    //api to get products by user email
    const { data: allBuyers = [], isLoading, refetch } = useQuery({
        queryKey: ['allBuyers'],
        queryFn: async () => {
            const res = await fetch("https://woodpecker12-server-numangit.vercel.app/users/buyers", {
                headers: {
                    authorization: `bearer ${localStorage.getItem('woodpecker-token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    //function to delete Buyer
    const handleDeleteBuyer = user => {
        fetch(`https://woodpecker12-server-numangit.vercel.app/users/buyers/${user._id}`, {
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
        <div>
            <div className="overflow-x-auto p-5 mx-auto">
                <table data-aos="fade-down" data-aos-duration="500" className="table w-full">
                    <thead >
                        <tr>
                            <th className="bg-gray-900 text-white text-center">Buyer No.</th>
                            <th className="bg-gray-900 text-white text-center">Buyer Name</th>
                            <th className="bg-gray-900 text-white text-center">Buyer Email</th>
                            <th className="bg-gray-900 text-white text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allBuyers?.length &&
                            allBuyers?.map((buyer, i) => <tr key={buyer._id}>
                                <td className="text-center font-bold">{i + 1}</td>
                                <td className="text-center font-bold text-sm">{buyer.name}</td>
                                <td className="text-center font-bold text-sm">{buyer.email}</td>
                                <td>
                                    <label onClick={() => handleDeleteBuyer(buyer)} className="flex justify-center text-2xl hover:text-red-600"><RiDeleteBin2Fill />
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

export default AllBuyers;