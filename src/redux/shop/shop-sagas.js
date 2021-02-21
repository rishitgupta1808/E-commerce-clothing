import { takeEvery, call, put } from 'redux-saga/effects';

import {
  firestore,
  convertDataToMap
} from '../../firebase/firebase.config';

import {
  successCollections,
  errorCollections
} from './shop-actions';



export function* fetchCollections() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertDataToMap,
      snapshot
    );
    yield put(successCollections(collectionsMap));
  } catch (error) {
    yield put(errorCollections(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery('START_FETCHING_COLLECTION',fetchCollections)
}