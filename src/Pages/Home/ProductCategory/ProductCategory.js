import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';

const ProductCategory = () => {
    const [productCategories, setProductCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //getting product categories from api using axios
    useEffect(() => {
        setIsLoading(true)
        axios.get('http://localhost:5000/productCategories')
            .then((res) => {
                setProductCategories(res?.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            })
    }, [])

    //loader
    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className="lg:py-10 py-4 bg-fixed bg-cover text-white" style={{ backgroundImage: `url("https://wallpaperaccess.com/full/773433.jpg")` }}>
            <div className='p-4 md:p-0:'>
                <h1 data-aos="fade-up" data-aos-duration="500" className='text-3xl font-bold text-center '>Product Categories</h1>
                <p data-aos="fade-right" data-aos-duration="600" className='mx-auto text-center font-thin mt-4 my-1 max-w-2xl'>Some of our customers say that they trust us and buy our product without any hesitation because they believe us and always happy to buy our product.</p>
            </div>
            <div className='p-5 lg:p-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4'>
                {
                    productCategories?.map(category =>
                        <Link key={category._id} to={`/category/${category._id}`} >
                            <div className="p-3 rounded-lg backdrop-blur bg-white/10 hover:bg-white hover:text-gray-900 shadow-md hover:-mt-1 duration-300 m-1 flex items-center">
                                <img className="w-1/3 rounded-full" src={category.imgUrl} alt="" />
                                <p className='text-md uppercase font-bold text-center mx-auto'>{category.categoryName}</p>
                            </div>
                        </Link>
                    )
                }
            </div>

        </div>
    );
};

export default ProductCategory;