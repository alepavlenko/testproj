import {ERROR_WAREHOUSES, LOADING_WAREHOUSES, SET_WAREHOUSES} from "../actions/warehousesAction";

const defaultState = {
    warehouses: [],
    error: '',
    loading: false
}

export default function warehousesReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_WAREHOUSES:
            return {
                ...state,
                warehouses: action.payload
            }
        case LOADING_WAREHOUSES:
            return {
                ...state,
                loading: action.payload
            }
        case ERROR_WAREHOUSES:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
    return state
}
