import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';

const ProductCategory = () => {
    // getting product categories from api
    const { data: productCategories = [], isLoading } = useQuery({
        queryKey: ['productCategories'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/productCategories");
            const data = await res.json();
            return data;
        }
    });

    //loader
    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className="lg:py-10 py-4 bg-fixed bg-cover" style={{ backgroundImage: `url("https://t3.ftcdn.net/jpg/04/09/81/22/360_F_409812204_DB79pC30Mid4zQgUwEFOMbniRhzUUk2X.jpg")` }}>
            <div className=''>
                <h1 className='text-3xl font-bold text-center'> Checkout Our Products</h1>
                <p className='mx-auto text-center font-semibold mt-4 my-1 max-w-2xl'>Some of our customers say that they trust us and buy our product without any hesitation because they believe us and always happy to buy our product.</p>
            </div>
            <div className='p-5 lg:p-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6'>
                {
                    productCategories?.map(category =>
                        <Link key={category._id} to={`/category/${category.categoryName}`} >
                            <div className="p-3 rounded-lg bg-white shadow-md hover:-mt-2 duration-300 m-1">
                                <img className="" src={category.imgUrl} alt="" />
                                <div className="hidden lg:block divider my-0 py-0"></div>
                                <p className='text-xl font-semibold text-center'>{category.categoryName}</p>
                            </div>
                        </Link>
                    )
                }
            </div>

        </div>
    );
};

export default ProductCategory;