import axios from "axios";

export const removeSelectedRow = async (categoy, stateSelected, setStateSelected, token, product) => {

    let tempArray = []
    for (const select of stateSelected) {
        await axios.delete(`http://localhost:5000/api/${categoy}/${select}`,
            {
                headers: {
                    'Authorization': token
                }
            })
            .then((res) => {
                const tempProduct = product.filter((warehouse) => !stateSelected.includes(warehouse._id))
                // setWareHouses(tempWarehouses)
                tempArray = tempProduct
                return true;
            })
            .catch(e => {
                console.log(e)
                return false

            });
    }
    setStateSelected([])
    return tempArray
}