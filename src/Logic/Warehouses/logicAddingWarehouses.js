export const addWarehouses = (values, setWareHouses) => {
    const warehouses = {};
    let flag = true
    if(!localStorage.getItem('warehouses')){
        const array = []
        localStorage.setItem('warehouses', JSON.stringify(array))
    }
    const localWarehouses = JSON.parse(localStorage.getItem('warehouses'))

    if(!localStorage.getItem('user')){
        flag = false
    }
    const thisUser = JSON.parse(localStorage.getItem('user'))



    warehouses.userid = thisUser.id
    warehouses.warehousesid = Math.random().toString(36).substring(2)
    warehouses.nameWarehouses = values.nameWarehouses.trim()
    warehouses.length = values.length.trim()
    warehouses.width = values.width.trim()
    warehouses.height = values.height.trim()


    localWarehouses.push(warehouses)
    localStorage.setItem("warehouses", JSON.stringify(localWarehouses))
    setWareHouses(localWarehouses)

    return flag;
}

export const createData = (id,name, wirehousesNumber, length, width, height) => {
    return {
        id,
        name,
        wirehousesNumber,
        length,
        width,
        height,
    };
}

export const getRows = (wareHouses ) => {
    const localRows = [];
    const thisUser = JSON.parse(localStorage.getItem('user'))


    if(!wareHouses){
        const array = []
        localStorage.setItem('warehouses', JSON.stringify(array))
    }
    const thisWare = JSON.parse(localStorage.getItem('warehouses'))

    if(wareHouses.length !== thisWare.length){
        localStorage.setItem('warehouses', JSON.stringify(wareHouses))
    }

    wareHouses.forEach((warehouses) => {
        if (thisUser.id === warehouses.userid) {
            localRows.push(createData(warehouses.warehousesid ,warehouses.nameWarehouses, 1, warehouses.length, warehouses.width, warehouses.height,))
        }
    })
    return localRows;
}