import axios from "axios";

export const getItems = async (setToken, token, warehouseId) => {

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

            if (e.response.data === 'Unauthorized') {
                setToken('')
            }
            return false

        })
}