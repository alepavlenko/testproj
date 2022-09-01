import {put,takeEvery, call, select} from "redux-saga/effects"

import {getRows} from "../../utils/gettingRowsWarehouses";
import {addWarehouses} from "../../utils/logicAddingWarehouses";
import {removeSelectedRow} from "../../utils/deletedSelectedWarehouses";
import {
    ADD_WAREHOUSES,
    DELETE_WAREHOUSES,
    errorWarehouses,
    FETCH_WAREHOUSES,
    loadingWarehouses, setWarehouses
} from "../actions/warehousesAction";
import {setAuth} from "../actions/authActions";


function* fetchWarehousesWorker() {
    try  {
        yield put(loadingWarehouses(true))
        const data = yield call(() => getRows())
        if (data === false){
            yield put(setAuth(false))
        }
        yield put(setWarehouses(data))
    } catch (e){
        yield put(errorWarehouses(e))
    } finally {
        yield put(loadingWarehouses(false))
    }

}

function* addWarehousesWorker(action) {
    try  {
        yield put(loadingWarehouses(true))
        const state = yield select()
        const warehouses = [...state.warehousesReducer.warehouses]
        const data = yield call(() => addWarehouses(action.payload.values) )
        if (data === false){
            yield put(setAuth(false))
        }
        warehouses.push(data.data)
        yield put(setWarehouses(warehouses))
    } catch (e){
        yield put(errorWarehouses(e))
    } finally {
        yield put(loadingWarehouses(false))
    }
}

function* deleteWarehousesWorker(action) {
    try  {
        yield put(loadingWarehouses(true))
        const state = yield select()
        const product = [...state.warehousesReducer.warehouses]
        const data = yield call(() => removeSelectedRow(
            action.payload.categoy,
            action.payload.stateSelected,
            action.payload.setStateSelected,
            product
            ))
        if (data === false){
            yield put(setAuth(false))
        }
        yield put(setWarehouses(data))
    } catch (e){
        yield put(errorWarehouses(e))
    } finally {
        yield put(loadingWarehouses(false))
    }
}


export function* warehousesWatcher() {
    yield takeEvery(FETCH_WAREHOUSES, fetchWarehousesWorker)
    yield takeEvery(ADD_WAREHOUSES, addWarehousesWorker)
    yield takeEvery(DELETE_WAREHOUSES, deleteWarehousesWorker)
}