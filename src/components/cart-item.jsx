import React  from "react";

import './cart-item.scss'

const CartItem = ({item}) =>{

    const {imageUrl,price,quantity,name} = item;
 
    
    return(
        <div className="cart-item">
            <img src={imageUrl} alt="icon"/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">
                    {quantity} x ${price}
                </span>
            </div>

        </div>

    )
}

export default CartItem;