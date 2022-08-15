export const addWarehouses = (values) => {
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

    return flag;
}