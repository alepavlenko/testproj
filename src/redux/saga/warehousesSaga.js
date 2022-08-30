import {put,takeEvery, call, select} from "redux-saga/effects"

import {getRows} from "../../utils/gettingRowsWarehouses";
import {
    ADD_WAREHOUSES,
    DELETE_WAREHOUSES,
    FETCH_WAREHOUSES,
    setWarehouses
} from "../store/warehousesReducer";
import {addWarehouses} from "../../utils/logicAddingWarehouses";
import {removeSelectedRow} from "../../utils/deletedSelectedWarehouses";


function* fetchWarehousesWorker(action) {
    const data = yield call(() => getRows(action.payload.token , action.payload.setIsAuth) )
    yield put(setWarehouses(data))
}

function* addWarehousesWorker(action) {
    const state = yield select()
    const warehouses = [...state.warehousesReducer.warehouses]
    const data = yield call(() => addWarehouses(action.payload.token , action.payload.values) )
    warehouses.push(data.data)
    yield put(setWarehouses(warehouses))
}

function* deleteWarehousesWorker(action) {
    const data = yield call(() => removeSelectedRow(
        action.payload.categoy,
        action.payload.stateSelected,
        action.payload.setStateSelected,
        action.payload.token))

    yield put(setWarehouses(data.data))
}


export function* warehousesWatcher() {
    yield takeEvery(FETCH_WAREHOUSES, fetchWarehousesWorker)
    yield takeEvery(ADD_WAREHOUSES, addWarehousesWorker)
    yield takeEvery(DELETE_WAREHOUSES, deleteWarehousesWorker)
}