import {put,takeEvery, call, select} from "redux-saga/effects"
import {
    ADD_PRODUCTS,
    DELETE_PRODUCTS, errorProducts,
    FETCH_PRODUCTS, loadingProducts, MOVE_PRODUCTS,
    setProducts
} from "../store/productsReducer";
import {getItems} from "../../utils/gettingItems";
import {addItems} from "../../utils/logicAddingItems";
import {removeSelectedRow} from "../../utils/deletedSelectedWarehouses";
import {moveProduct, syncMoveProduct} from "../../utils/movingProducts";
import {setAuth} from "../store/authReducer";

function* fetchProductsWorker(action) {
    try {
        yield put(loadingProducts(true))
        const data = yield call(() => getItems(action.payload.setToken, action.payload.token , action.payload.warehouseId) )
        console.log('ddddata', data)
        yield put(setProducts(data))
    } catch (e){
        yield put(setAuth(false))
        yield put(errorProducts(e))
    } finally {
        yield put(loadingProducts(false))
    }
}

function* addProductsWorker(action) {
    try {
        yield put(loadingProducts(true))
        const state = yield select()
        const product = [...state.productsReducer.products]
        const data = yield call(() => addItems(action.payload.token , action.payload.values, action.payload.warehouseId) )
        product.push(data.data)
        yield put(setProducts(product))
    } catch (e){
        yield put(errorProducts(e))
    } finally {
        yield put(loadingProducts(false))
    }
}

function* deleteProductsWorker(action) {
    try {
        yield put(loadingProducts(true))
        const state = yield select()
        const product = [...state.productsReducer.products]
        const data = yield call(() => removeSelectedRow(
            action.payload.categoy,
            action.payload.stateSelected,
            action.payload.setStateSelected,
            action.payload.token,
            product))
        yield put(setProducts(data))
    } catch (e){
        yield put(errorProducts(e))
    } finally {
        yield put(loadingProducts(false))
    }
}

function* moveProductsWorker(action) {
    try {
        yield put(loadingProducts(true))
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
        const syncProduct = yield call(() => syncMoveProduct(product, data));
        yield put(setProducts(syncProduct))
    } catch (e){
        yield put(errorProducts(e))
    } finally {
        yield put(loadingProducts(false))
    }
}

export function* productsWatcher() {
    yield takeEvery(FETCH_PRODUCTS, fetchProductsWorker)
    yield takeEvery(ADD_PRODUCTS, addProductsWorker)
    yield takeEvery(DELETE_PRODUCTS, deleteProductsWorker)
    yield takeEvery(MOVE_PRODUCTS, moveProductsWorker)
}