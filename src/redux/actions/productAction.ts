import {InferActions} from "../../types/actionTypes";
import {ProductsItem} from "../../types/products";
import {DeleteReduceProduct, ReduceMoveProduct, ReduceProduct} from "../../types/productReducer";

export const SET_PRODUCTS = "SET_PRODUCTS"
export const FETCH_PRODUCTS = "FETCH_PRODUCTS"
export const ADD_PRODUCTS = "ADD_PRODUCTS"
export const DELETE_PRODUCTS = "DELETE_PRODUCTS"
export const MOVE_PRODUCTS = "MOVE_PRODUCTS"
export const LOADING_PRODUCTS = "LOADING_PRODUCTS"
export const ERROR_PRODUCTS = "ERROR_PRODUCTS"

export const productsActions = {
    setProducts: (payload: ProductsItem[]) => ({type: SET_PRODUCTS, payload}),
    fetchProducts: (payload: ReduceProduct) => ({type: FETCH_PRODUCTS,payload}),
    addProducts: (payload: ReduceProduct) => ({type: ADD_PRODUCTS,payload}),
    deleteProducts: (payload: DeleteReduceProduct) => ({type: DELETE_PRODUCTS,payload}),
    moveProducts: (payload: ReduceMoveProduct) => ({type: MOVE_PRODUCTS,payload}),
    loadingProducts: (payload: boolean) => ({type: LOADING_PRODUCTS,payload}),
    errorProducts: (payload: string) => ({type: ERROR_PRODUCTS,payload}),
}
export type ProductsActions = InferActions<typeof productsActions>