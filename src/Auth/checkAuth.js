export const signUpAuth = (values, setValidError) => {
    let flag = false;
    const user = {};
    if(!localStorage.getItem('users')){
        const array = []
        localStorage.setItem('users', JSON.stringify(array))
    }
    const localUsers = JSON.parse(localStorage.getItem('users'))
    localUsers.forEach((user) => {
        if (user.email === values.email.trim()) {
            flag = true;
            setValidError(true)
        }
    })
    if (!flag) {
        setValidError(false)
        user.password = values.password.trim()
        user.email = values.email.trim()
        user.id = Math.random().toString(36).substring(2)
        localUsers.push(user)
        localStorage.setItem("users", JSON.stringify(localUsers))
        return true;
    }
}

export const loginAuth = (values) => {
    let flag = false;
    const userTemp = {};
    userTemp.password = values.password.trim()
    userTemp.email = values.email.trim()

    let localUsers = JSON.parse(localStorage.getItem("users"))
    localUsers.forEach((user) => {
        if (user.email === values.email.trim() && user.password === values.password.trim()) {
            userTemp.id = user.id;
            localStorage.setItem("user", JSON.stringify(userTemp))
            flag = true;
        }
    })

    return flag
}