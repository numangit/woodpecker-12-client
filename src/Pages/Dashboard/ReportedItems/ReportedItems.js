import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import Loader from '../../../components/Loader/Loader';

const ReportedItems = () => {
    // getting product categories from api
    const { data: reportedProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['reportedProducts'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/products/reported");
            const data = await res.json();
            return data;
        }
    });

    //function to delete product
    const handleDeleteProduct = id => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success("Product deleted successfully")
                }
            })
    }

    //loader
    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <div className="overflow-x-auto p-5 mx-auto">
                <table data-aos="fade-down" data-aos-duration="500" className="table w-full">
                    <thead >
                        <tr>
                            <th className="bg-gray-900 text-white text-center">Product No.</th>
                            <th className="bg-gray-900 text-white text-center">Product image</th>
                            <th className="bg-gray-900 text-white">Product Name</th>
                            <th className="bg-gray-900 text-white text-center">Price</th>
                            <th className="bg-gray-900 text-white text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reportedProducts?.map((product, i) => <tr key={product._id}>
                                <td className="text-center font-bold">{i + 1}</td>
                                <td>
                                    <div className="avatar flex justify-center">
                                        <div className="w-12 rounded-md ">
                                            <img src={product.productImage} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td className="font-bold text-sm">{product.productName}</td>
                                <td className="text-center font-bold text-xs">${product.resalePrice}</td>
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

export default ReportedItems;