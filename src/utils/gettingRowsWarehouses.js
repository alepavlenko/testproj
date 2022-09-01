import axios from "axios";

export const getRows = async () => {
    const token = localStorage.getItem('token')
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
            localStorage.setItem('auth', '')
            return false
        })
}