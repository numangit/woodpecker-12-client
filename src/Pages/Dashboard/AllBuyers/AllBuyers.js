import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin2Fill } from 'react-icons/ri';

const AllBuyers = () => {
    // const { user } = useContext(AuthContext);

    //api to get products by user email
    const { data: allBuyers = [], refetch } = useQuery({
        queryKey: ['allBuyers'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/allBuyers");
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    //function to delete Buyer
    const handleDeleteBuyer = user => {
        fetch(`http://localhost:5000/allBuyers/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${user.name} deleted successfully`)
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto p-10 mx-auto">
                <table className="table w-full">
                    <thead >
                        <tr>
                            <th className="bg-gray-900 text-white">Buyer No.</th>
                            <th className="bg-gray-900 text-white">Buyer Name</th>
                            <th className="bg-gray-900 text-white">Buyer Email</th>
                            <th className="bg-gray-900 text-white">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBuyers?.map((buyer, i) => <tr key={buyer._id}>
                                <td className="text-center font-bold">{i + 1}</td>
                                <td className="font-bold text-sm">{buyer.name}</td>
                                <td className="font-bold text-sm">{buyer.email}</td>
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