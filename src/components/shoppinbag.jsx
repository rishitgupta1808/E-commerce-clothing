import React from "react";

import { ReactComponent as Cart } from "../assets/shopping-bag.svg";
import './shoppingbag.scss';
import {toggleCart} from '../redux/cart/cart-action.js'
import {connect} from "react-redux"
import { selectCartItemCount } from "../redux/cart/cart-selectors.js";

const ShopCart = ({toggleCart,itemCount}) =>(

    <div className="cart-icon"  onClick={toggleCart}>
        <Cart className = "shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapStateToProps = state =>({

    itemCount : selectCartItemCount(state)
})
const dispatchToProps = dispatch =>({
    toggleCart : ()=>dispatch(toggleCart())
});

export default connect(mapStateToProps,dispatchToProps)(ShopCart);

