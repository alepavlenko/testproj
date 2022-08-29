import {all} from "redux-saga/effects"
import {warehousesWatcher} from "./warehousesSaga";

export function* rootWatcher() {
    yield all([warehousesWatcher()])
}
