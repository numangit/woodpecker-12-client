import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const order = useLoaderData();
    return (
        <div className='flex item-center'>
            <div className='bg-lime-400'>
                <h1>This is payment {order.productName}</h1>
                <div >
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            order={order}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;