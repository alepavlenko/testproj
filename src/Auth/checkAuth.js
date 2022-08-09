export const signUpAuth = (values) => {
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
            console.log(user.email, ' Уже существует')
        }
    })
    if (!flag) {
        user.password = values.password.trim()
        user.email = values.email.trim()
        localUsers.push(user)
        localStorage.setItem("users", JSON.stringify(localUsers))
        return true;
    }
}

export const loginAuth = (values) => {
    let flag = false;
    let localUsers = JSON.parse(localStorage.getItem("users"))
    localUsers.forEach((user) => {
        if (user.email === values.email.trim() && user.password === values.password.trim()) {
            flag = true;
        }
    })
    if(flag) return true
}