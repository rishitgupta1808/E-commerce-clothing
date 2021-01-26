import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IDmL3C33wEk9n0eXIVMwYIeLZbL6mQ3zndhSxgNrZ95ioFVPxyMEkaSzs8R0ew7mb9m5YssY3GJO5jLkZHZhsQp001XSYD2sH';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Diamond Cloth House'
      billingAddress
      shippingAddress

      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;