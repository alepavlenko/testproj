import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../saga";
import warehousesReducer from "./warehousesReducer";
import productsReducer from "./productsReducer";
import authReducer from "./authReducer";


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    warehousesReducer,
    productsReducer,
    authReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
console.log(store.getState())
sagaMiddleware.run(rootWatcher)

