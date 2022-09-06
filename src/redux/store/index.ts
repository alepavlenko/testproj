import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../saga";
import warehousesReducer from "../reducers/warehousesReducer";
import productsReducer from "../reducers/productsReducer";
import authReducer from "../reducers/authReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
    warehousesReducer,
    productsReducer,
    authReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootWatcher)

export type RootStatee = ReturnType<typeof store.getState>
export type AppDispatchh = typeof store.dispatch

export const useAppDispatch: () => AppDispatchh = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootStatee> = useSelector
