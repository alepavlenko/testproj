import axios from "axios";
import {getItems} from "./gettingItems";

export  const moveProduct = async (values ,warehouseId ,stateSelected, setStateSelected,  token, items, setItems, setIsAuth) => {

    for (const select of stateSelected) {
        await axios.patch(`http://localhost:5000/api/products/${select}/${values.selectWarehouses}`,
            {

            },{
                headers: {
                    'Authorization': token
                }
            })
            .then((res) => {
                // const tempWarehouses = wareHouses.filter((warehouse) => !stateSelected.includes(warehouse._id))
                // setWareHouses(tempWarehouses)
                // setItems(items)
                return true;
            })
            .catch(e => {
                console.log(e)
                return false

            });
    }
    setStateSelected([])
     await getItems(token, setIsAuth, warehouseId).then((res) => {
         setItems(res)
     })

}