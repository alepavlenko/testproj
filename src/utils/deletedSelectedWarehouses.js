import axios from "axios";

export const removeSelectedRow = async (categoy, stateSelected, setStateSelected, wareHouses, setWareHouses, token) => {

    for (const select of stateSelected) {
        await axios.delete(`http://localhost:5000/api/${categoy}/${select}`,
            {
                headers: {
                    'Authorization': token
                }
            })
            .then((res) => {
                const tempWarehouses = wareHouses.filter((warehouse) => !stateSelected.includes(warehouse._id))
                setWareHouses(tempWarehouses)
                return true;
            })
            .catch(e => {
                console.log(e)
                return false

            });
    }
    setStateSelected([])
}