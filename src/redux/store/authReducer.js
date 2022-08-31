const defaultState = {
    isAuth: false
}

export const SET_AUTH = "SET_AUTH"

export default function authReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_AUTH:
            return {isAuth: action.payload}
    }
    return state
}
export const setAuth = payload => ({type: SET_AUTH, payload})