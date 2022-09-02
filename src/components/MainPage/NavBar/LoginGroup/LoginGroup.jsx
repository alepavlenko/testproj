import React, {useState} from 'react';

import MyButton from "../../../Common/MyButton/MyButton";
import MyModal from "../../../Common/MyModal/MyModal";
import LogInForm from "../../AuthForm/LogInForm/LogInForm";
import {loginAuth, signUpAuth} from "../../../../utils";

import style from './LoginGroup.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setAuth} from "../../../../redux/actions/authActions";
import {getAuth} from "../../../../redux/selectors/authSelectors";


const LoginGroup = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(getAuth)

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
        dispatch(setAuth(false))
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