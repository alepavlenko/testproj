import axios from "axios";

export const getRows = async (token, setIsAuth) => {

    return await axios.get('http://localhost:5000/api/warehouses/',
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