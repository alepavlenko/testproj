import {AuthActions, SET_AUTH} from "../actions/authActions";

interface DefaultState {
    isAuth: boolean
}

const defaultState: DefaultState = {
    isAuth: false
}

export default function authReducer(state = defaultState, action: AuthActions) {
    switch(action.type) {
        case SET_AUTH:
            return {isAuth: action.payload}
    }
    return state
}