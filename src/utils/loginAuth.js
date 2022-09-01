import axios from "axios";

export const loginAuth = async (values, validErr) => {
    return await axios.post('http://localhost:5000/api/auth/login',
        {
            email: values.email.trim(),
            password: values.password.trim()
        }).then((res) => {
        localStorage.setItem('auth', 'true')
        localStorage.setItem('token', res.data.token)
        return true
    })
        .catch(e => {
            validErr(true)
            return false
        })
}