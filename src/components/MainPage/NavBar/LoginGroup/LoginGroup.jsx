import React, {useContext, useState} from 'react';

import MyButton from "../../../Common/MyButton/MyButton";
import MyModal from "../../../Common/MyModal/MyModal";
import {signUpAuth, loginAuth} from '../../../../Auth/checkAuth'

import {Context} from "../../../../App";
import style from './LoginGroup.module.css'


const LoginGroup = () => {
    const [openSignUp, setOpenSignUp] = useState(false)
    const [openLogIn, setOpenLogIn] = useState(false)
    const [validError, setValidError] = useState(null)
    const {isAuth, setIsAuth} = useContext(Context)


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
        localStorage.removeItem('user')
    }

    return (
        <div className={style.button}>
            {isAuth
                ?<MyButton variant="contained" value="Log out" onClick={logOut} />
                : <>
                    <MyButton variant="text" value="Log in" onClick={() => setOpenLogIn(true)}/>
                    <MyButton variant="contained" value="Sign up" onClick={setOpenSignUp}/>
                </>
            }
            <MyModal
                open={openSignUp}
                openNext={setOpenLogIn}
                handleClose={handleClose1}
                checkAuth={signUpAuth}
                validError={validError}
                setValidError={setValidError}
                value="Sign up"
            />
            <MyModal open={openLogIn}
                     openNext={setOpenSignUp}
                     handleClose={handleClose}
                     checkAuth={loginAuth}
                     validError={validError}
                     setValidError={setValidError}
                     value="Log in"
            />

        </div>
    );
};

export default LoginGroup;