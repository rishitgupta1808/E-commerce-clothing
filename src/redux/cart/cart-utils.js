/*export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }; */
 
 export const addItemToCart = (allItems,itemToAdd)=>{

    const itemFound = allItems.find(item=>item.id===itemToAdd.id);

    if(itemFound){
        return allItems.map(item=>
             (item.id===itemToAdd.id?
                {...item,quantity:item.quantity+1}
                :{...item}
                )
        )
    }

    return [...allItems,{...itemToAdd,quantity:1}];
 } 

 export const removeItemFromCart = (allItems,itemToRemove)=>{

    const itemFound = allItems.find(item=>item.id===itemToRemove.id);

    if(itemFound.quantity===1){
        return allItems.filter((collection)=>(
            collection.id !== itemFound.id
        ))
    }else if(itemFound){
        return allItems.map(item=>
             (item.id===itemToRemove.id?
                {...item,quantity:item.quantity-1}
                
                :{...item}
                )
        )
    } 



        return [...allItems];
    
 } 

