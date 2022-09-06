import {warehousesItem} from "./warehouse";

export interface ReduceProduct{
    values: warehousesItem
}

export interface DeleteReduceProduct{
    category: string
    product?: warehousesItem[]
    stateSelected: string[]
    setStateSelected: (value: string[]) => void
}
