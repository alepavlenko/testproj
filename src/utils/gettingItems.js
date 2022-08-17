export const getItems = (items) => {
    const localRows = [];
    const thisWarehouses = JSON.parse(localStorage.getItem('warehouses'))
    //
    //
    // if(!items){
    //     const array = []
    //     localStorage.setItem('items', JSON.stringify(array))
    // }
    // const thisItems = JSON.parse(localStorage.getItem('items'))
    //
    // if(items.length !== thisItems.length){
    //     localStorage.setItem('items', JSON.stringify(items))
    // }

    // console.log(thisWarehouses[0].warehousesid)
    localRows.push({
                    warehousesid: thisWarehouses.warehousesid,
                    name: 2,
                    wirehousesNumber: 1,
                    length: 3,
                    width: 4,
                    height: 5,
                })

    // по юзеру аходим склад а по кладу

    // items.forEach((item) => {
    //     if (thisWarehouses.warehousesid === item.id) {
    //         localRows.push({
    //             id: item.warehousesid,
    //             name: item.nameWarehouses,
    //             wirehousesNumber: 1,
    //             length: item.length,
    //             width: item.width,
    //             height: item.height,
    //         })
    //     }
    // })
    return localRows;
}