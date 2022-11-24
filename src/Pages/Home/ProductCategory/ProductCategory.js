import React from 'react';

const categories = [
    {
        _id: 1,
        categoryName: "Chairs",
        imgUrl: "https://images.prismic.io/aptdeco/ea2e1a6b-12dc-445a-9e75-124d7adfa933_dining_room%402x_SM.jpg?auto=compress,format&rect=10,0,900,900&w=450&h=450"

    },
    {
        _id: 2,
        categoryName: "Tables",
        imgUrl: "https://images.prismic.io/aptdeco/bf02d67d-93c9-4b6d-b31a-cb10c1e28e2b_50_off%402x_SM.jpg?auto=compress,format&rect=0,0,900,900&w=450&h=450"
    },
    {
        _id: 3,
        categoryName: "Storages",
        imgUrl: "https://images.prismic.io/aptdeco/b9e2367f-d8c6-4daa-88b7-47d4dfd23b31_bedroom%402x_SM.jpg?auto=compress,format&rect=0,0,900,900&w=450&h=450"
    },
    {
        _id: 4,
        categoryName: "Sofas",
        imgUrl: "https://images.prismic.io/aptdeco/f93846f3-cf29-40f6-8e8f-5bd4e0ea13cc_living_room%402x_SM.jpg?auto=compress,format&rect=0,0,900,900&w=450&h=450"
    }
]

const ProductCategory = () => {
    return (
        <div className="lg:py-10 py-4 bg-fixed bg-cover" style={{ backgroundImage: `url("https://t3.ftcdn.net/jpg/04/09/81/22/360_F_409812204_DB79pC30Mid4zQgUwEFOMbniRhzUUk2X.jpg")` }}>
            <div className=''>
                <h1 className='text-3xl font-bold text-center'> Checkout Our Products</h1>
                <p className='mx-auto text-center font-semibold mt-4 my-1 max-w-2xl'>Some of our customers say that they trust us and buy our product without any hesitation because they believe us and always happy to buy our product.</p>
            </div>
            <div className='p-5 lg:p-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6'>
                {
                    categories?.map(category =>
                        <div key={category._id} className="p-3 rounded-lg bg-white shadow-md">
                            <img src={category.imgUrl} alt="" />
                            <div className="divider my-0 py-0"></div>
                            <p className='text-xl font-semibold text-center'>{category.categoryName}</p>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default ProductCategory;