import {put,takeEvery, call, select} from "redux-saga/effects"

import {getRows} from "../../utils/gettingRowsWarehouses";
import {removeSelectedRow} from "../../utils/deletedSelectedWarehouses";
import {
    ADD_WAREHOUSES,
    DELETE_WAREHOUSES,
    FETCH_WAREHOUSES,
    warehousesActions
} from "../actions/warehousesAction";

import {addWarehouses} from "../../utils/logicAddingWarehouses";
import {authActions} from "../actions/authActions";


function* fetchWarehousesWorker() {
    try  {
        yield put(warehousesActions.loadingWarehouses(true))
        const data = yield call(() => getRows())
        if (data === false){
            yield put(authActions.setAuth(false))
        }
        yield put(warehousesActions.setWarehouses(data))
    } catch (e){
        yield put(warehousesActions.errorWarehouses(e))
    } finally {
        yield put(warehousesActions.loadingWarehouses(false))
    }

}

function* addWarehousesWorker(action) {
    try  {
        yield put(warehousesActions.loadingWarehouses(true))
        const state = yield select()
        const warehouses = [...state.warehousesReducer.warehouses]
        const data = yield call(() => addWarehouses(action.payload.values) )
        if (data === false){
            yield put(authActions.setAuth(false))
        }
        warehouses.push(data.data)
        yield put(warehousesActions.setWarehouses(warehouses))
    } catch (e){
        yield put(warehousesActions.errorWarehouses(e))
    } finally {
        yield put(warehousesActions.loadingWarehouses(false))
    }
}

function* deleteWarehousesWorker(action) {
    try  {
        yield put(warehousesActions.loadingWarehouses(true))
        const state = yield select()
        const product = [...state.warehousesReducer.warehouses]
        const data = yield call(() => removeSelectedRow(
            action.payload.category,
            action.payload.stateSelected,
            action.payload.setStateSelected,
            product
            ))
        if (data === false){
            yield put(authActions.setAuth(false))
        }
        yield put(warehousesActions.setWarehouses(data))
    } catch (e){
        yield put(warehousesActions.errorWarehouses(e))
    } finally {
        yield put(warehousesActions.loadingWarehouses(false))
    }
}


export function* warehousesWatcher() {
    yield takeEvery(FETCH_WAREHOUSES, fetchWarehousesWorker)
    yield takeEvery(ADD_WAREHOUSES, addWarehousesWorker)
    yield takeEvery(DELETE_WAREHOUSES, deleteWarehousesWorker)
}