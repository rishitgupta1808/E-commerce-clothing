import { addItemToCart,removeItemFromCart} from "./cart-utils";

const INITIAL_STATE ={
    hidden : true,
    collection : []
}

const cartReducer = (state  = INITIAL_STATE,action) =>{

    switch (action.type) {
        case 'TOGGLE_LIST': return{
            ...state,
            hidden : !state.hidden
        }  
        
        case "ADD_ITEM" : return{
            ...state,
            collection : addItemToCart(state.collection,action.payload)
        }

        case "CLEAR_ITEM" : return{
            ...state,
            collection : state.collection.filter((collection)=>(
                collection.id !== action.payload.id
            ))
        }

        case "REMOVE_ITEM" : return{
            ...state,
            collection : removeItemFromCart(state.collection,action.payload)
        }
        case 'SIGN_OUT_CLEAR_CART' : return{
            ...state,
            collection : []
        }  
    
        default: return state
            
    }
}

export default cartReducer;