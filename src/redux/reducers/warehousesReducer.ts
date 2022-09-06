import {ERROR_WAREHOUSES, LOADING_WAREHOUSES, SET_WAREHOUSES, WarehousesActions} from "../actions/warehousesAction";
import {warehousesItem} from "../../types/warehouse";

interface DefaultState {
    warehouses: warehousesItem[],
    error: string,
    loading: boolean
}

const defaultState: DefaultState = {
    warehouses: [],
    error: '',
    loading: false
}

export default function warehousesReducer(state = defaultState, action: WarehousesActions) {
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
