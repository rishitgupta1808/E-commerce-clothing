import { combineReducers } from 'redux';

import userReducer from './user.reducer/user-reducer';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart/cart-reducer.js";
import directoryReducer from "./directory/directory-reducer.js";
import shopReducer from './shop/shop-reducer';


const congfigPersist = {
    key : 'root',
    storage,
    whitelist : ['cart']
}


const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory : directoryReducer,
  shopdata : shopReducer
});

export default persistReducer(congfigPersist,rootReducer);