import {all} from "redux-saga/effects"
import {warehousesWatcher} from "./warehousesSaga";
import {productsWatcher} from "./productsSaga";

export function* rootWatcher() {
    yield all([warehousesWatcher(), productsWatcher()])
}
