import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { MdLocationOn, MdVerified, MdDateRange } from 'react-icons/md';
import { BiTime } from 'react-icons/bi';
import { SlCalender } from 'react-icons/sl';
import { ImUserTie, ImPriceTag } from 'react-icons/im';
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from 'react-hot-toast';

const CategoryPage = () => {
    const { user: currentUser } = useContext(AuthContext);
    const [selectedProduct, setSelectedProduct] = useState([]);
    const products = useLoaderData();

    //scroll at the top after page is rendered
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    //function to handle form submit
    const handleOrderNow = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const productPrice = form.productPrice.value;
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const buyerPhone = form.buyerPhone.value;
        const buyerLocation = form.buyerLocation.value;
        const order = {
            productName,
            productPrice,
            buyerName,
            buyerEmail,
            buyerPhone,
            buyerLocation,
        }
        console.log(order);
        // //save data to orders collection
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Order placed successfully');
                }
                else {
                    toast.error(data.message)
                }
            })
    }

    return (
        <div className="bg-[#e6e6e6]">
            <h1 className='text-center text-4xl font-thin font-serif text-white py-4 lg:py-12' style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9T6Prp4Mp7D8klfwOxuKPLXbjzs5BoacasgemWaOOJUJirMHuUjYSXYboJiyOhb6nAPk&usqp=CAU")` }}>
                Available product{products.length > 1 && "s"}
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 p-5 lg:p-10'>
                {
                    products?.map(product =>
                        <div key={product._id} className="card lg:card-side bg-base-100 shadow-xl rounded-2xl">
                            <figure><img src={product.productImage} alt="Album" /></figure>
                            <div className="card-body lg:p-6">
                                <h2 className="card-title text-lg">{product.productName}</h2>
                                <p className='text-sm'>{product.productDescription.slice(0, 60)}..</p>
                                <p className='text-xs flex items-center '>
                                    <ImPriceTag />&nbsp;Original Price: $
                                    <span className='font-semibold'>{product.originalPrice}</span>
                                </p>
                                <p className='text-xs flex items-center '>
                                    <ImPriceTag />&nbsp;Resale Price: $
                                    <span className='font-semibold'>{product.resalePrice}</span>&nbsp;
                                    <span className='text-xs line-through text-slate-700'>${product.originalPrice}</span>
                                </p>
                                <p className='text-xs flex items-center '>
                                    <SlCalender />&nbsp;Used:&nbsp;
                                    <span className='font-semibold'>
                                        {product.yearsOfUse} year{product.yearsOfUse > 1 && "s"}
                                    </span>
                                </p>
                                <p className='text-xs flex items-center '>
                                    <ImUserTie />&nbsp;by&nbsp;<span className='font-semibold'>{product.sellerName}</span>
                                    {
                                        product?.sellerVerified && <MdVerified className='text-blue-500' />
                                    }
                                </p>
                                <p className='text-xs flex items-center'><MdLocationOn />
                                    {product?.sellerLocation}
                                </p>
                                <p className='text-xs font-semibold flex items-center'>
                                    <MdDateRange />{product.postedDate.slice(2, -14)}&nbsp;&nbsp;
                                    <BiTime />{product.postedDate.slice(11, -5)}
                                </p>
                                <div className="card-actions justify-end">
                                    <label
                                        htmlFor="order-modal"
                                        className="btn btn-sm btn-primary rounded-md w-full"
                                        onClick={() => setSelectedProduct(product)}>
                                        PLACE ORDER
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
            <div>
                <input type="checkbox" id="order-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative backdrop-blur bg-base-100/60 lg:w-1/3">
                        <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form onSubmit={handleOrderNow} className='grid grid-cols-1 gap-3 mt-5'>
                            <div className='grid grid-cols-2'>
                                <label className="label">
                                    <span className="label-text font-semibold text-md "> Product Name<span className='text-red-600'>*</span> : </span>
                                </label>
                                <input disabled name="productName" type="text" defaultValue={selectedProduct?.productName} className="input input-sm w-full input-bordered rounded-md" />
                            </div>
                            <div className='grid grid-cols-2'>
                                <label className="label">
                                    <span className="label-text font-semibold text-md "> Product Price <span className='text-red-600'>*</span> : </span>
                                </label>
                                <input disabled name="productPrice" type="number" defaultValue={selectedProduct?.resalePrice} className="input input-sm w-full input-bordered rounded-md" />
                            </div>
                            <div className='grid grid-cols-2'>
                                <label className="label">
                                    <span className="label-text font-semibold text-md "> Your Name<span className='text-red-600'>*</span> : </span>
                                </label>
                                <input disabled name="buyerName" type="text" defaultValue={currentUser?.displayName} placeholder="Your Name" className="input input-sm w-full input-bordered rounded-md" />
                            </div>
                            <div className='grid grid-cols-2'>
                                <label className="label">
                                    <span className="label-text font-semibold text-md "> Your email<span className='text-red-600'>*</span> : </span>
                                </label>
                                <input disabled name="buyerEmail" type="email" defaultValue={currentUser?.email} placeholder="Email Address" className="input input-sm w-full input-bordered rounded-md" readOnly />
                            </div>
                            <div className='grid grid-cols-2'>
                                <label className="label">
                                    <span className="label-text font-semibold text-md "> Your phone number<span className='text-red-600'>*</span> : </span>
                                </label>
                                <input name="buyerPhone" type="number" placeholder="+179 XXX XXX" className="input input-sm w-full input-bordered rounded-md" required />
                            </div>
                            <div className='grid grid-cols-2'>
                                <label className="label">
                                    <span className="label-text font-semibold text-md "> Meeting Location<span className='text-red-600'>*</span> : </span>
                                </label>
                                <input name="buyerLocation" type="text" placeholder={selectedProduct?.sellerLocation} className="input input-sm w-full input-bordered rounded-md" required />
                            </div>
                            <input className='btn btn-sm btn-accent w-full' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CategoryPage;