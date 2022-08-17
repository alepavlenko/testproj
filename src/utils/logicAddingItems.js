export const addItems = (setItems, values, warehouseId) => {
    console.log('11111')
    const {name, manufacturer, number, purchasing, delivery} = values

    if(!localStorage.getItem('items')){
        const array = []
        localStorage.setItem('items', JSON.stringify(array))
    }
    const localItem = JSON.parse(localStorage.getItem('items'))
    console.log(localItem)
    const item = {
        warehouseId,
        id: Math.random().toString(36).substring(2),
        name,
        manufacturer,
        number,
        purchasing,
        delivery,
    }

    localItem.push(item)
    localStorage.setItem("items", JSON.stringify(localItem))
    setItems(localItem)

    return;
}