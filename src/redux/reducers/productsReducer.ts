import {ERROR_PRODUCTS, LOADING_PRODUCTS, ProductsActions, SET_PRODUCTS} from "../actions/productAction";
import {ProductsItem} from "../../types/products";

interface DefaultState {
    products: ProductsItem[],
    error: string,
    loading: boolean
}

const defaultState: DefaultState = {
    products: [],
    error: '',
    loading: false
}

export default function productsReducer(state = defaultState, action: ProductsActions) {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case LOADING_PRODUCTS:
            return {
                ...state,
                loading: action.payload
            }
        case ERROR_PRODUCTS:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
    return state
}