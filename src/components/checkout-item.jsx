import React from "react";
import './checkout-item.scss';
import { connect } from "react-redux";
import { clearItem,removeItem } from "../redux/cart/cart-action";
import { addItem } from "../redux/cart/cart-action";

const CheckoutItem = ({item,clearItem,addItem,removeItem})=>{

const {imageUrl,name,price,quantity}=item;

    return(
        <div className="checkout-item">
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>removeItem(item)}>&#10094;</div>

                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>addItem(item)}>&#10095;</div>
                </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=>clearItem(item)}>&#10005;</div>
        </div>
    )
}

const dispatchToProps = dispatch =>({

    clearItem : (item)=>dispatch(clearItem(item)),
    removeItem : (item)=>dispatch(removeItem(item)),
    addItem : (item)=>dispatch(addItem(item))

})


export default connect(null,dispatchToProps)(CheckoutItem);

