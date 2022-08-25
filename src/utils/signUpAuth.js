import axios from "axios";

export const signUpAuth = async (values, setValidError) => {

    return await axios.post('http://localhost:5000/api/auth/register',
        {
            email: values.email.trim(),
            password: values.password.trim()
        }).then((res) => {
        return true
    })
        .catch(e => {
            console.log(e)
            setValidError(true)
            return false
        })
}
