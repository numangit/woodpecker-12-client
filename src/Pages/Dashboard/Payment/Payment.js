import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const order = useLoaderData();
    return (
        <div>
            <h1>This is payment {order.productName}</h1>

        </div>
    );
};

export default Payment;