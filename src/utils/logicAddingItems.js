import axios from "axios";

export const addItems = async (token, values, items, setItems, warehouseId) => {
    return await axios.post(`http://localhost:5000/api/products/${warehouseId}`,
        {
            name: values.name.trim(),
            manufacturer: values.manufacturer.trim(),
            itemNumber: values.number.trim(),
            purchasing: values.purchasing.trim(),
            shipment: values.delivery.trim(),
        },
        {
            headers: {
                'Authorization': token
            }
        })
        .then((res) => {
            setItems([...items, {...res.data}])
            return true;
        })
        .catch(e => {
            console.log(e)
            return false

        })

}