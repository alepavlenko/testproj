import {put,takeEvery, call, select} from "redux-saga/effects"
import {
    ADD_PRODUCTS,
    DELETE_PRODUCTS,
    FETCH_PRODUCTS, MOVE_PRODUCTS,
    setProducts
} from "../store/productsReducer";
import {getItems} from "../../utils/gettingItems";
import {addItems} from "../../utils/logicAddingItems";
import {removeSelectedRow} from "../../utils/deletedSelectedWarehouses";
import {moveProduct} from "../../utils/movingProducts";

function* fetchProductsWorker(action) {
    const data = yield call(() => getItems(action.payload.token , action.payload.setIsAuth, action.payload.warehouseId) )
    yield put(setProducts(data))
}

function* addProductsWorker(action) {
    const state = yield select()
    const product = [...state.productsReducer.products]
    const data = yield call(() => addItems(action.payload.token , action.payload.values, action.payload.warehouseId) )
    product.push(data.data)
    yield put(setProducts(product))
}

function* deleteProductsWorker(action) {
    const state = yield select()
    const product = [...state.productsReducer.products]
    const data = yield call(() => removeSelectedRow(
        action.payload.categoy,
        action.payload.stateSelected,
        action.payload.setStateSelected,
        action.payload.token,
        product))
    yield put(setProducts(data))
}

function* moveProductsWorker(action) {
    const state = yield select()
    const product = [...state.productsReducer.products]
    const data = yield call(() => moveProduct(
        action.payload.values,
        action.payload.warehouseId,
        action.payload.stateSelected,
        action.payload.setStateSelected,
        action.payload.token,
        action.payload.setItems,
        ))
    yield put(setProducts(data))
}

export function* productsWatcher() {
    yield takeEvery(FETCH_PRODUCTS, fetchProductsWorker)
    yield takeEvery(ADD_PRODUCTS, addProductsWorker)
    yield takeEvery(DELETE_PRODUCTS, deleteProductsWorker)
    yield takeEvery(MOVE_PRODUCTS, moveProductsWorker)
}