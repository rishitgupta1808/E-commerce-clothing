import { takeLatest,call,all,put,select } from "redux-saga/effects";

import { auth,Googleprovider,registerUser,getCurrentUser, firestore } from "../../firebase/firebase.config";

import { signOutError,signOutSuccess, signInError,signInSuccess} from "./user-action";

import { selectCartCollection } from "../cart/cart-selectors";


function* googleSignInAsync(){
  try{
    let {user} = yield auth.signInWithPopup(Googleprovider);
    let userRef = yield call(registerUser,user);
    const userSnapshot = yield userRef.get();
   
    yield put(signInSuccess({id: userSnapshot.id,...userSnapshot.data()}))
  } catch(error){
      yield put(signInError(error.message))
  }

}

function* emailSignInAsync({payload:{email,password}}){
   
    try{
        let {user} = yield auth.signInWithEmailAndPassword(email,password)
        let userRef = yield call(registerUser,user);
        const userSnapshot = yield userRef.get();
        
        yield put(signInSuccess({id: userSnapshot.id,...userSnapshot.data()}))
      } catch(error){
          yield put(signInError(error.message))
      }

}

function* isAuthenticated() {
    try{
        const user = yield getCurrentUser();
        if(!user) return;
        let userRef = yield call(registerUser,user);
        const userSnapshot = yield userRef.get();
        
        yield put(signInSuccess({id: userSnapshot.id,...userSnapshot.data()}))
        


    }catch(error){
        yield put(signInError(error))
    }
}

function* signOut() {
    try{
      /*  const user = yield getCurrentUser();
        console.log('1');
        const cartItemRef = yield firestore.doc(`users/${user.uid}`);
        console.log('2');
        const cartSnapshot = yield cartItemRef.get();

       console.log('2');
        const collection = yield select(selectCartCollection);
        console.log('2.5');
        cartItemRef.set({
          cartItems:collection,
        ...cartSnapshot.data()})
        console.log('3');*/
        yield auth.signOut();
        yield put(signOutSuccess())
    }catch(error){
        put(signOutError(error))
    }

}

export function* userLoginWithGoogle() {
    yield takeLatest('GOOGLE_START',googleSignInAsync)
}

export function* userLoginWithEmail() {
    yield takeLatest('EMAIL_START',emailSignInAsync)
}

export function* checkUserAuthentication() {
    yield takeLatest('CHECK_CURRENT_USER',isAuthenticated)
}

export function* signOutUser(){
    yield takeLatest('SIGN_OUT_START',signOut)
}

export function* userSaga(){
    yield all([
        call(userLoginWithGoogle),
        call(userLoginWithEmail),
        call(checkUserAuthentication),
        call(signOutUser)
    ]);
}