import {InferActions} from "../../types/actionTypes";

export const SET_AUTH = "SET_AUTH"

export const authActions = {
    setAuth:  (payload: boolean) => ({type: SET_AUTH, payload})
}
export type AuthActions = InferActions<typeof authActions>