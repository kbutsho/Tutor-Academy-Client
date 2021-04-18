import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
// import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51GqusMAY9bkpmWc6zF3KkEJWSfLGPr69DRyv4br6kbS8xCHNZsp3Yectqz1Zw23vceqYfmGABdDdLlZ7LHogsH3T00FSw6kwF2');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment} ></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;