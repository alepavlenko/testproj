import axios from "axios";

export const getItems = async (token, setIsAuth, warehouseId) => {

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
                setIsAuth(false)
            }
            return false

        })
}