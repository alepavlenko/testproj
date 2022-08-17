export const getItems = (items,warehouseId) => {
    const localRows = [];

    if(!items){
        const array = []
        localStorage.setItem('items', JSON.stringify(array))
    }
    const thisItems = JSON.parse(localStorage.getItem('items'))

    if(items.length !== thisItems.length){
        localStorage.setItem('items', JSON.stringify(items))
    }
    console.log('111', localRows)
    items.forEach((item) => {
        console.log()
        if (warehouseId === item.warehouseId) {
            localRows.push(item)
        }
    })
    console.log('222', localRows)

    return localRows;
}







// export const getItems = (items, setItems, warehouseId) => {
//
//     const localRows = [];
//
//     if(!JSON.parse(localStorage.getItem('items'))){
//         const array = []
//         localStorage.setItem('items', JSON.stringify(array))
//     }
//
//     const thisItems = JSON.parse(localStorage.getItem('items'))
//
//
//     if(items.length !== thisItems.length){
//         if(items.length === 0){
//             setItems(thisItems)
//         } else {
//             localStorage.setItem('items', JSON.stringify(items))
//         }
//     }
//
//     items.forEach((item) => {
//         if (warehouseId === item.warehouseId) {
//             localRows.push(item)
//         }
//     })
//     // setItems(localRows)
//     console.log('local',localRows)
//     return localRows;
// }
