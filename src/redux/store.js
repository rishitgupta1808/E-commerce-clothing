import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from "./root-saga";;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];


  middlewares.push(logger);


export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };


/*
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from "redux-persist";
import rootReducer from './root-reducer';
import thunk from "redux-thunk";


const middlewares = [thunk];

if(process.env.NODE_ENV === 'development'){

    middlewares.push(logger);

}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));


export const persistor = persistStore(store);

export default { store, persistStore };

*/