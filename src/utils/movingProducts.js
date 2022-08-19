export const moveProduct = (
        items,
        setItems,
        values,
        warehouseId,
        stateSelected,
        setStateSelected,

    ) => {

    const localItem = JSON.parse(localStorage.getItem('items'))

    const tempLocalItems = localItem.filter((item) =>  !stateSelected.includes(item.id) )

    const tempLocalSelectedItems = localItem.filter((item) =>  stateSelected.includes(item.id) )

    tempLocalSelectedItems.forEach((item) => {
        item.warehouseId = values.selectWarehouses;
    })
const finishProducts = [...tempLocalItems, ...tempLocalSelectedItems]
    localStorage.setItem("items", JSON.stringify(finishProducts))
    setItems(finishProducts)
    setStateSelected([])
}
