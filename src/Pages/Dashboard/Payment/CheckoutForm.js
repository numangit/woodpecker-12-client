import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaDollarSign } from 'react-icons/fa';

const CheckoutForm = ({ order }) => {
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const { _id, productId, productName, productPrice, buyerName, buyerEmail, buyerLocation } = order;

    useEffect(() => {
        // api for Payment Intent 
        fetch("https://woodpecker12-server-numangit.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('woodpecker-token')}`
            },
            body: JSON.stringify({ productPrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [productPrice]);

    // handler function for the checkout form
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setIsLoading(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: buyerEmail
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        //when payment is successful
        if (paymentIntent.status === "succeeded") {
            // store payment info in the database
            const payment = {
                transactionId: paymentIntent.id,
                orderId: _id,
                productId,
                productPrice,
                buyerEmail,
            }
            fetch('https://woodpecker12-server-numangit.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        toast.success("Payment Successful!");
                    }
                })
        }
        setIsLoading(false);
    };

    return (
        <div className='bg-white mx-auto lg:w-1/2 p-10 rounded-md mt-19' data-aos="fade-down">
            <form onSubmit={handleSubmit}>
                <h1 className='text-2xl font-semibold mb-1'>Order Summary</h1>
                <p className='text-xs mb-10'>Need help? Call us at +384-646-4739 or email us.</p>
                <div className="flex items-center justify-between text-xs lg:text-sm px-3">
                    <p className='flex items-center '>
                        Product Name  :
                    </p>
                    <div className="font-semibold flex items-center">{productName}</div>
                </div>
                <div className="flex items-center justify-between text-xs lg:text-sm px-3 mt-2">
                    <p className='flex items-center '>
                        Destination :
                    </p>
                    <div className="font-semibold flex items-center">{buyerLocation}</div>
                </div>
                <div className="flex items-center justify-between text-xs lg:text-sm px-3 mt-2">
                    <p className='flex items-center '>
                        Buyer :
                    </p>
                    <div className="font-semibold flex items-center">{buyerName}</div>
                </div>
                <div className="flex items-center justify-between text-xs lg:text-sm px-3 mt-2">
                    <p className=' flex items-center '>
                        Tax :
                    </p>
                    <div className="font-semibold flex items-center"><FaDollarSign />0</div>
                </div>
                <div className="flex items-center justify-between text-xs lg:text-sm px-3 mt-2">
                    <p className=' flex items-center '>
                        Price :
                    </p>
                    <div className="font-semibold flex items-center"><FaDollarSign />{productPrice}</div>
                </div>
                <div className='divider'></div>

                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <p className="text-red-500 text-center text-sm mt-2">{cardError}</p>
                <button
                    className='btn rounded-lg mt-5 btn-primary w-full' type="submit"
                    disabled={!stripe || !clientSecret || isLoading}>
                    Pay
                </button>
            </form>

        </div>
    );
};

export default CheckoutForm;