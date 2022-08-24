import axios from "axios";

export const getRows = async (token) => {
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
            // let emptyArr =[]
            console.log(e)
            return false

        })
    // return localRows;
}