import React from "react";
import './cart-dropdown.scss';
import { CustomButton } from "./custombutton";
import CartItem from "./cart-item";
import { connect } from "react-redux";
import { selectCartCollection } from "../redux/cart/cart-selectors";
import { withRouter } from "react-router-dom";
import { toggleCart } from "../redux/cart/cart-action";

const CartDropDown = ({collection,history,dispatch}) =>{
    console.log(collection.length);
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
        {collection.length ? (
           collection.map(item => (
              <CartItem key={item.id} item={item} />
        ))
      ) : (
        <span className='empty-string'>Your cart is empty</span>
      )}</div>
            <CustomButton onClick={()=>
                {history.push('/checkout');
                 dispatch(toggleCart())}}>
            Go To Checkout</CustomButton>
                
        </div>
    )
}

const mapStateToProps = (state) =>({
    collection : selectCartCollection(state)
})

export default withRouter(connect(mapStateToProps)(CartDropDown));




