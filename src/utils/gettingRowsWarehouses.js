import axios from "axios";

export const getRows = async (payload) => {

    return await axios.get('http://localhost:5000/api/warehouses/',
        {
            headers: {
                'Authorization': payload.token
            }
        })
        .then((res) => {
            return res.data;
        })
        .catch(e => {
            console.log(e)

            if (e.response.data === 'Unauthorized') {
                payload.setIsAuth(false)
            }
            return false

        })
}