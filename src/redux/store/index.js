import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../saga";
import warehousesReducer from "./warehousesReducer";


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    warehousesReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)

