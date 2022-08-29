const defaultState = {
    warehouses: []
}

export const SET_WAREHOUSES = "SET_WAREHOUSES"
export const FETCH_WAREHOUSES = "FETCH_WAREHOUSES"

export default function warehousesReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_WAREHOUSES:
            return {...state, users: action.payload}
    }
    return state
}

export const setWarehouses = payload => ({type: SET_WAREHOUSES, payload})
export const fetchWarehouses = payload => ({type: FETCH_WAREHOUSES},payload)
