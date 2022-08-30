import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../saga";
import warehousesReducer from "./warehousesReducer";
import productsReducer from "./productsReducer";


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    warehousesReducer,
    productsReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)

