const defaultState = {
    products: [],
    error: '',
    loading: false
}

export const SET_PRODUCTS = "SET_PRODUCTS"
export const FETCH_PRODUCTS = "FETCH_PRODUCTS"
export const ADD_PRODUCTS = "ADD_PRODUCTS"
export const DELETE_PRODUCTS = "DELETE_PRODUCTS"
export const MOVE_PRODUCTS = "MOVE_PRODUCTS"
export const LOADING_PRODUCTS = "LOADING_PRODUCTS"
export const ERROR_PRODUCTS = "ERROR_PRODUCTS"


export default function productsReducer(state = defaultState, action) {
    switch(action.type) {
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

export const setProducts = payload => ({type: SET_PRODUCTS, payload})
export const fetchProducts = payload => ({type: FETCH_PRODUCTS,payload})
export const addProducts = payload => ({type: ADD_PRODUCTS,payload})
export const deleteProducts = payload => ({type: DELETE_PRODUCTS,payload})
export const moveProducts = payload => ({type: MOVE_PRODUCTS,payload})
export const loadingProducts = payload => ({type: LOADING_PRODUCTS,payload})
export const errorProducts = payload => ({type: ERROR_PRODUCTS,payload})
