export const moveProduct = (
        items,
        setItems,
        values,
        warehouseId,
        stateSelected,

    ) => {

    const localItem = JSON.parse(localStorage.getItem('items'))

    const tempLocalItems = localItem.filter((item) =>  !stateSelected.includes(item.id) )
    console.log("без",tempLocalItems)

    const tempLocalSelectedItems = localItem.filter((item) =>  stateSelected.includes(item.id) )
    console.log('онли они ',  tempLocalSelectedItems)

    tempLocalSelectedItems.forEach((item) => {
        item.warehouseId = values.selectWarehouses;

    })
const finishProducts = [...tempLocalItems, ...tempLocalSelectedItems]
    setItems(finishProducts)
}
