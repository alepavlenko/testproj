import axios from "axios";

export const getItems = async (warehouseId) => {
    const token = localStorage.getItem('token')
    return await axios.get(`http://localhost:5000/api/products/${warehouseId}`,
        {
            headers: {
                'Authorization': token
            }
        })
        .then((res) => {
            return res.data;
        })
        .catch(e => {
            console.log(e)
            localStorage.setItem('auth', '')
            return false

        })
}