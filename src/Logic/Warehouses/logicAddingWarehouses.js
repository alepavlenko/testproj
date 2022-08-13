//
// export const loginAuth = (values) => {
//     let flag = false;
//     const userTemp = {};
//     userTemp.password = values.password.trim()
//     userTemp.email = values.email.trim()
//
//     let localUsers = JSON.parse(localStorage.getItem("users"))
//     localUsers.forEach((user) => {
//         if (user.email === values.email.trim() && user.password === values.password.trim()) {
//             localStorage.setItem("user", JSON.stringify(userTemp))
//             flag = true;
//         }
//     })
//
//     return flag
// }