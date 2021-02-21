import { call,all,takeLatest, put } from "redux-saga/effects";

import { signOutClearCart } from "./cart-action";

import { auth,firestore,getCurrentUser } from "../../firebase/firebase.config";


function* ClearCart() {

    yield put(signOutClearCart());
}

export function* removeItemsWhenSignOut(){
    yield takeLatest('SIGN_OUT_SUCCESS',ClearCart)
}

export function* cartSaga(){
    yield all([call(removeItemsWhenSignOut)])
}