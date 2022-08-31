import {put,takeEvery, call, select} from "redux-saga/effects"

import {getRows} from "../../utils/gettingRowsWarehouses";
import {
    ADD_WAREHOUSES,
    DELETE_WAREHOUSES, errorWarehouses,
    FETCH_WAREHOUSES, loadingWarehouses,
    setWarehouses
} from "../store/warehousesReducer";
import {addWarehouses} from "../../utils/logicAddingWarehouses";
import {removeSelectedRow} from "../../utils/deletedSelectedWarehouses";
import {setAuth} from "../store/authReducer";


function* fetchWarehousesWorker(action) {
    try  {
        yield put(loadingWarehouses(true))
        const data = yield call(() => getRows( action.payload.token ,setAuth) )
        yield put(setWarehouses(data))
    } catch (e){
        yield put(setAuth(false))
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
        const data = yield call(() => addWarehouses(action.payload.token , action.payload.values) )
        warehouses.push(data.data)
        yield put(setWarehouses(warehouses))
    } catch (e){
        yield put(setAuth(false))
        yield put(errorWarehouses(e))
    } finally {
        yield put(loadingWarehouses(false))
    }
}

function* deleteWarehousesWorker(action) {
    try  {
        yield put(loadingWarehouses(true))
        const data = yield call(() => removeSelectedRow(
            action.payload.categoy,
            action.payload.stateSelected,
            action.payload.setStateSelected,
            action.payload.token))
        yield put(setWarehouses(data.data))
    } catch (e){
        yield put(setAuth(false))
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