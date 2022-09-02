export const SET_WAREHOUSES = "SET_WAREHOUSES"
export const FETCH_WAREHOUSES = "FETCH_WAREHOUSES"
export const ADD_WAREHOUSES = "ADD_WAREHOUSES"
export const DELETE_WAREHOUSES = "DELETE_WAREHOUSES"
export const LOADING_WAREHOUSES = "LOADING_WAREHOUSES"
export const ERROR_WAREHOUSES = "ERROR_WAREHOUSES"

export const setWarehouses = payload => ({type: SET_WAREHOUSES, payload})
export const fetchWarehouses = payload => ({type: FETCH_WAREHOUSES,payload})
export const addWarehouses = payload => ({type: ADD_WAREHOUSES,payload})
export const deleteWarehouses = payload => ({type: DELETE_WAREHOUSES,payload})
export const loadingWarehouses = payload => ({type: LOADING_WAREHOUSES,payload})
export const errorWarehouses = payload => ({type: ERROR_WAREHOUSES,payload})