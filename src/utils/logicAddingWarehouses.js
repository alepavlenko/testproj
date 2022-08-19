export const addWarehouses = (values, setWareHouses) => {
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

    const warehouses = {
        userid: thisUser.id,
        warehousesid: Math.random().toString(36).substring(2),
        nameWarehouses: values.nameWarehouses.trim(),
        length: values.length.trim(),
        width: values.width.trim(),
        height: values.height.trim(),
    }

    localWarehouses.push(warehouses)
    localStorage.setItem("warehouses", JSON.stringify(localWarehouses))
    setWareHouses(localWarehouses)

    return flag;
}