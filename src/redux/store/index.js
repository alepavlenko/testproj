import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../saga";
import warehousesReducer from "../reducers/warehousesReducer";
import productsReducer from "../reducers/productsReducer";
import authReducer from "../reducers/authReducer";

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    warehousesReducer,
    productsReducer,
    authReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootWatcher)

