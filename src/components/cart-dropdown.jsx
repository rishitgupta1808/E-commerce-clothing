import React from "react";
import './cart-dropdown.scss';
import { CustomButton } from "./custombutton";
import CartItem from "./cart-item";
import { connect } from "react-redux";
import { selectCartCollection } from "../redux/cart/cart-selectors";
import { withRouter } from "react-router-dom";
import { toggleCart } from "../redux/cart/cart-action";
import { selectCurrentUser } from "../redux/user.reducer/user.selectors";

const CartDropDown = ({collection,history,dispatch,currUser}) =>{
    console.log(collection.length);
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    currUser?(<div className="empty-string" style={{color:`black`}}> {currUser.displayName}</div>):(<div></div>)
                }
        {collection.length ? (
           collection.map(item => (
              <CartItem key={item.id} item={item} />
        ))
      ) : (
        <span className='empty-string' style={{padding:`0px 0px 0px 30px`}}>Your cart is empty</span>
      )}</div>
            <CustomButton onClick={()=>
                {history.push('/checkout');
                 dispatch(toggleCart())}}>
            Go To Checkout</CustomButton>
                
        </div>
    )
}

const mapStateToProps = (state) =>({
    collection : selectCartCollection(state),
    currUser : selectCurrentUser(state)
})

export default withRouter(connect(mapStateToProps)(CartDropDown));




