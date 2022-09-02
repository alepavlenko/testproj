import axios from "axios";

export const addItems = async (values, warehouseId) => {
    const token = localStorage.getItem('token')
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
            return res;
        })
        .catch(e => {
            console.log(e)
            localStorage.setItem('auth', '')
            return false

        })

}