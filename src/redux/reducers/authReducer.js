import {SET_AUTH} from "../actions/authActions";

const defaultState = {
    isAuth: false
}

export default function authReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_AUTH:
            return {isAuth: action.payload}
    }
    return state
}