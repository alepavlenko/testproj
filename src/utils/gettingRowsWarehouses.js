import axios from "axios";

export const getRows = (wareHouses) => {
    const localRows = [];
    const thisUser = JSON.parse(localStorage.getItem('user'))
    
    if(!wareHouses){
        const array = []
        localStorage.setItem('warehouses', JSON.stringify(array))
        return localRows
    }
    const thisWare = JSON.parse(localStorage.getItem('warehouses'))

    if(wareHouses.length !== thisWare.length){
        localStorage.setItem('warehouses', JSON.stringify(wareHouses))
    }

    wareHouses.forEach((warehouses) => {
        if (thisUser.id === warehouses.userid) {
            localRows.push({
                id: warehouses.warehousesid,
                name: warehouses.nameWarehouses,
                wirehousesNumber: 1,
                length: warehouses.length,
                width: warehouses.width,
                height: warehouses.height,
            })
        }
    })
    return localRows;

//     await axios.post('http://localhost:5000/api/auth/login',
//         {
//             password: 123
//         }).then((res) => {
//
//     })
//         .catch(e => {
//
//         })
// }
}