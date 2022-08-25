import axios from "axios";

export const loginAuth = async (values, validErr ,token, setToken) => {

return await axios.post('http://localhost:5000/api/auth/login',
        {
            email: values.email.trim(),
            password: values.password.trim()
        }).then((res) => {
    setToken(res.data.token)
    localStorage.setItem('auth', 'true')
    localStorage.setItem('token', res.data.token)
    console.log('tik tok',token)
        return true
    })
        .catch(e => {
            validErr(true)
            return false
        })
}