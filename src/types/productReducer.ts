import {MoveProductsItem, ProductsItem} from "./products";

export interface ReduceProduct{
    warehouseId?: string
    values?: ProductsItem
    stateSelected?: string[]
    setStateSelected?: (value: string[]) => void
}
export interface ReduceMoveProduct{
    warehouseId?: string
    values: MoveProductsItem
    stateSelected?: string[]
    setStateSelected?: (value: string[]) => void
}

export interface DeleteReduceProduct{
    category: string
    product?: ProductsItem[]
    stateSelected: string[]
    setStateSelected: (value: string[]) => void
}
