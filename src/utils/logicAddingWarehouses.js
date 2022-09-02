import axios from "axios";

export const addWarehouses = async (values) => {
    const num = '1'
    const token = localStorage.getItem('token')
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
            localStorage.setItem('auth', '')
            return e

        })

}