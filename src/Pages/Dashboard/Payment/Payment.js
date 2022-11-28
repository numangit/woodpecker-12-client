import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const order = useLoaderData();
    return (
        <div className=' p-3 lg:p-8'>
            {/* <h1>This is payment {order.productName}</h1> */}

            <Elements stripe={stripePromise}>
                <CheckoutForm
                    order={order}
                />
            </Elements>

        </div>
    );
};

export default Payment;