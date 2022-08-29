import {put,take ,takeEvery, call} from "redux-saga/effects"

import {getRows} from "../../utils/gettingRowsWarehouses";
import warehousesReducer, {FETCH_WAREHOUSES, setWarehouses} from "../store/warehousesReducer";


const fetchWarehousesFromApi = (payload) => getRows(payload)

function* fetchWarehousesWorker(payload) {
    console.log('in saga',payload)

    // const action = yield take(warehousesReducer.FETCH_WAREHOUSES);

    console.log('in saga',data)
    const data = yield fetchWarehousesFromApi()
    yield put(setWarehouses(data))
}

export function* warehousesWatcher(payload) {
    console.log('sagasgags')
    console.log('in saga',payload)

    yield takeEvery(FETCH_WAREHOUSES, fetchWarehousesWorker(payload))
}