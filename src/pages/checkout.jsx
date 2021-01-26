import React from "react";
import './checkout.scss';
import { connect } from "react-redux";
import { selectTotalPrice,selectCartCollection } from "../redux/cart/cart-selectors";
import  CheckoutItem  from "../components/checkout-item.jsx";
import StripeButton from "../components/strip-button.jsx";

const Checkout = ({totalPrice,collection})=>{
    return(
        <div className='checkout-page'>
        <div className='checkout-header'>
          <div className='header-block'>
            <span>Product</span>
          </div>
          <div className='header-block'>
            <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </div>
        {collection.map(item => (
          <CheckoutItem key={item.id} item={item} />
        ))}
        <div className='total'>TOTAL: ${totalPrice}</div>
        <StripeButton price={totalPrice}/>
        <div className="test-info">
          *For Test Payment use Card number-4242 4242 4242 4242 <br/>Exp. date-any future date<br/> CVV-any 3 digit Number*
        </div>
      </div>
    );
    
}

const mapStateToProps = state =>({

    totalPrice : selectTotalPrice(state),
    collection : selectCartCollection(state),


})

export default connect(mapStateToProps)(Checkout);