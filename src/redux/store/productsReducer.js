const defaultState = {
    products: []
}

export const SET_PRODUCTS = "SET_PRODUCTS"
export const FETCH_PRODUCTS = "FETCH_PRODUCTS"
export const ADD_PRODUCTS = "ADD_PRODUCTS"
export const DELETE_PRODUCTS = "DELETE_PRODUCTS"
export const MOVE_PRODUCTS = "MOVE_PRODUCTS"

export default function productsReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_PRODUCTS:
            return {products: action.payload}
    }
    return state
}

export const setProducts = payload => ({type: SET_PRODUCTS, payload})
export const fetchProducts = payload => ({type: FETCH_PRODUCTS,payload})
export const addProducts = payload => ({type: ADD_PRODUCTS,payload})
export const deleteProducts = payload => ({type: DELETE_PRODUCTS,payload})
export const moveProducts = payload => ({type: MOVE_PRODUCTS,payload})
