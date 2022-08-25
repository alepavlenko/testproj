import React, {useContext, useState} from 'react';

import MyButton from "../../../Common/MyButton/MyButton";
import MyModal from "../../../Common/MyModal/MyModal";
import LogInForm from "../../AuthForm/LogInForm/LogInForm";

import {Context} from "../../../../App";
import style from './LoginGroup.module.css'
import {loginAuth, signUpAuth} from "../../../../utils";


const LoginGroup = () => {
    const {isAuth, setIsAuth, setToken} = useContext(Context)

    const [openSignUp, setOpenSignUp] = useState(false)
    const [openLogIn, setOpenLogIn] = useState(false)
    const [validError, setValidError] = useState(null)


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
        setIsAuth(false)
        localStorage.removeItem('auth')
        setToken('')
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