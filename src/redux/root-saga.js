import { all,call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop/shop-sagas";

import { userSaga } from "./user.reducer/user-saga";

import { cartSaga } from "./cart/cart-saga";

function* rootSaga(){
   yield all([call(fetchCollectionsStart),
              call(userSaga),
              call(cartSaga)
   ]);
}

export default rootSaga;