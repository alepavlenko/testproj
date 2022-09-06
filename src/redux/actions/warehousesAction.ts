import {InferActions} from "../../types/actionTypes";
import {warehousesItem} from "../../types/warehouse";
import {DeleteReduceProduct, ReduceProduct} from "../../types/warehouseReducer";

export const SET_WAREHOUSES = "SET_WAREHOUSES"
export const FETCH_WAREHOUSES = "FETCH_WAREHOUSES"
export const ADD_WAREHOUSES = "ADD_WAREHOUSES"
export const DELETE_WAREHOUSES = "DELETE_WAREHOUSES"
export const LOADING_WAREHOUSES = "LOADING_WAREHOUSES"
export const ERROR_WAREHOUSES = "ERROR_WAREHOUSES"

export const warehousesActions = {
    setWarehouses:  (payload: warehousesItem[]) => ({type: SET_WAREHOUSES, payload}),
    fetchWarehouses:  (payload: any) => ({type: FETCH_WAREHOUSES, payload}),
    addWarehouses:  (payload: ReduceProduct) => ({type: ADD_WAREHOUSES, payload}),
    deleteWarehouses:  (payload: DeleteReduceProduct) => ({type: DELETE_WAREHOUSES, payload}),
    loadingWarehouses:  (payload: boolean) => ({type: LOADING_WAREHOUSES, payload}),
    errorWarehouses:  (payload: string) => ({type: ERROR_WAREHOUSES, payload}),
}
export type WarehousesActions = InferActions<typeof warehousesActions>
