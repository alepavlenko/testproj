import React, {useState} from 'react';

import MyButton from "../../../Common/MyButton/MyButton";
import MyModal from "../../../Common/MyModal/MyModal";
import LogInForm from "../../AuthForm/LogInForm/LogInForm";
import {loginAuth, signUpAuth} from "../../../../utils";

import style from './LoginGroup.module.css'

import {getAuth} from "../../../../redux/selectors/authSelectors";
import {useAppDispatch, useAppSelector} from "../../../../redux/store";
import {authActions} from "../../../../redux/actions/authActions";


const LoginGroup = () => {
    const dispatch = useAppDispatch()
    const isAuth: boolean = useAppSelector(getAuth)

    const [openSignUp, setOpenSignUp] = useState<boolean>(false)
    const [openLogIn, setOpenLogIn] = useState<boolean>(false)
    const [validError, setValidError] = useState<boolean>(false)

    const handleClose1 = () => {
        setValidError(false)
        setOpenSignUp(false);
        setOpenLogIn(false);
    };

    const handleClose = () => {
        setValidError(false)
        setOpenLogIn(false);
    };

    const logOut = () => {
        dispatch(authActions.setAuth(false))
        localStorage.removeItem('auth')
        localStorage.removeItem('token')
    }

    return (
        <div className={style.button}>
            {isAuth
                ? <MyButton variant="contained" value="Log out" onClick={logOut}/>
                : <>
                    <MyButton variant="text" value="Log in" onClick={setOpenLogIn}/>
                    <MyButton variant="contained" value="Sign up" onClick={setOpenSignUp}/>
                </>
            }
            <MyModal open={openSignUp} handleClose={handleClose1}>
                <LogInForm
                    checkAuth={signUpAuth}
                    handleClose={handleClose1}
                    validError={validError}
                    setValidError={setValidError}
                    openNext={setOpenLogIn}
                    value="Sign up"
                />
            </MyModal>
            <MyModal open={openLogIn} handleClose={handleClose}>
                <LogInForm
                    checkAuth={loginAuth}
                    handleClose={handleClose}
                    validError={validError}
                    setValidError={setValidError}
                    openNext={setOpenSignUp}
                    value="Log in"
                />
            </MyModal>
        </div>
    );
};

export default LoginGroup;