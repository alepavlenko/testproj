import {ERROR_PRODUCTS, LOADING_PRODUCTS, SET_PRODUCTS} from "../actions/productAction";

const defaultState = {
    products: [],
    error: '',
    loading: false
}

export default function productsReducer(state = defaultState, action) {
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