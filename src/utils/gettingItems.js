export const getItems = (items,warehouseId) => {
    const localRows = [];

    if(!items){
        localStorage.setItem('items', JSON.stringify(localRows))
        return localRows

    }
    const thisItems = JSON.parse(localStorage.getItem('items'))

    if(items.length !== thisItems.length){
        localStorage.setItem('items', JSON.stringify(items))
    }
    items.forEach((item) => {
        if (warehouseId === item.warehouseId) {
            localRows.push(item)
        }
    })

    return localRows;
}
