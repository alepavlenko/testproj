import axios from "axios";

export const addWarehouses = async (token, values) => {
    const num = '1'
    return await axios.post('http://localhost:5000/api/warehouses/',
        {
            name: values.nameWarehouses.trim(),
            numberProduct: num,
            length: values.length.trim(),
            width: values.width.trim(),
            height: values.height.trim(),

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
            return e

        })

}