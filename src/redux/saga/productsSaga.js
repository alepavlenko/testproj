import {put,takeEvery, call, select} from "redux-saga/effects"

import {getItems} from "../../utils/gettingItems";
import {addItems} from "../../utils/logicAddingItems";
import {removeSelectedRow} from "../../utils/deletedSelectedWarehouses";
import {moveProduct, syncMoveProduct} from "../../utils/movingProducts";
import {
    ADD_PRODUCTS,
    DELETE_PRODUCTS,
    FETCH_PRODUCTS,
    MOVE_PRODUCTS, productsActions, productsActions as ProductActions
} from "../actions/productAction";
import {authActions} from "../actions/authActions";

function* fetchProductsWorker(action) {
    try {
        yield put(productsActions.loadingProducts(true))
        const data = yield call(() => getItems(action.payload.warehouseId) )
        if (data === false){
            yield put(authActions.setAuth(false))
        }
        yield put(ProductActions.setProducts(data))
    } catch (e){
        yield put(productsActions.errorProducts(e))
    } finally {
        yield put(productsActions.loadingProducts(false))
    }
}

function* addProductsWorker(action) {
    try {
        yield put(productsActions.loadingProducts(true))
        const state = yield select()
        const product = [...state.productsReducer.products]
        const data = yield call(() => addItems(action.payload.values, action.payload.warehouseId) )
        if (data === false){
            yield put(authActions.setAuth(false))
        }
        product.push(data.data)
        yield put(ProductActions.setProducts(product))
    } catch (e){
        yield put(productsActions.errorProducts(e))
    } finally {
        yield put(productsActions.loadingProducts(false))
    }
}

function* deleteProductsWorker(action) {
    try {
        yield put(productsActions.loadingProducts(true))
        const state = yield select()
        const product = [...state.productsReducer.products]
        const data = yield call(() => removeSelectedRow(
            action.payload.category,
            action.payload.stateSelected,
            action.payload.setStateSelected,
            product))
        if (data === false){
            yield put(authActions.setAuth(false))
        }
        yield put(ProductActions.setProducts(data))
    } catch (e){
        yield put(productsActions.errorProducts(e))
    } finally {
        yield put(productsActions.loadingProducts(false))
    }
}

function* moveProductsWorker(action) {
    try {
        yield put(productsActions.loadingProducts(true))
        const state = yield select()
        const product = [...state.productsReducer.products]
        const data = yield call(() => moveProduct(
            action.payload.values,
            action.payload.warehouseId,
            action.payload.stateSelected,
            action.payload.setStateSelected,
        ))
        if (data === false){
            yield put(authActions.setAuth(false))
        }
        const syncProduct = yield call(() => syncMoveProduct(product, data));
        yield put(ProductActions.setProducts(syncProduct))
    } catch (e){
        yield put(productsActions.errorProducts(e))
    } finally {
        yield put(productsActions.loadingProducts(false))
    }
}

export function* productsWatcher() {
    yield takeEvery(FETCH_PRODUCTS, fetchProductsWorker)
    yield takeEvery(ADD_PRODUCTS, addProductsWorker)
    yield takeEvery(DELETE_PRODUCTS, deleteProductsWorker)
    yield takeEvery(MOVE_PRODUCTS, moveProductsWorker)
}