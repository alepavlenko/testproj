import axios from "axios";

export const moveProduct = async (values, warehouseId, stateSelected, setStateSelected) => {
    const token = localStorage.getItem('token')
    let temp = []
    for (const select of stateSelected) {
        await axios.patch(`http://localhost:5000/api/products/${select}/${values.selectWarehouses}`,
            {}, {
                headers: {
                    'Authorization': token
                }
            })
            .then((res) => {
                temp.push(res.data)
                return true;
            })
            .catch(e => {
                console.log(e)
                return false

            });
    }
    setStateSelected([])
    return temp
}

export const syncMoveProduct = async (product, data) => {
    let tempProd = []
    tempProd = product.filter(prod => !data.some(dat => dat._id === prod._id))
    return tempProd
}