export interface ProductsItem {
    name: string
    manufacturer: string
    itemNumber: number
    purchasing: string
    shipment: string
    warehouse: string
    user: string
    _id: string
}
export interface MoveProductsItem {
    baseWarehouses: string
    selectWarehouses: string
    delivery: string
    payment: string
}