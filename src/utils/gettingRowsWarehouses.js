import axios from "axios";

export const getRows = async (token, setIsAuth) => {
    // const localRows = [];

    return await axios.get('http://localhost:5000/api/warehouses/',
        {
            headers: {
                'Authorization': token
            }
        })
        .then((res) => {
            console.log('ware', res.data)
            return res.data;
        })
        .catch(e => {
            console.log('inner',token)
            console.log(e)

            if(e.response.data === 'Unauthorized'){
                setIsAuth(false)
            }
            return false

        })
    // return localRows;
}