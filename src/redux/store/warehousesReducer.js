const defaultState = {
    warehouses: []
}

export const SET_WAREHOUSES = "SET_WAREHOUSES"
export const FETCH_WAREHOUSES = "FETCH_WAREHOUSES"
export const ADD_WAREHOUSES = "ADD_WAREHOUSES"
export const DELETE_WAREHOUSES = "DELETE_WAREHOUSES"

export default function warehousesReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_WAREHOUSES:
            return {warehouses: action.payload}
    }
    return state
}

export const setWarehouses = payload => ({type: SET_WAREHOUSES, payload})
export const fetchWarehouses = payload => ({type: FETCH_WAREHOUSES,payload})
export const addWarehouses = payload => ({type: ADD_WAREHOUSES,payload})
export const deleteWarehouses = payload => ({type: DELETE_WAREHOUSES,payload})
