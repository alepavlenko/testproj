import React, {useState} from 'react';

import MyButton from "../../../Common/MyButton/MyButton";
import MyModal from "../../../Common/MyModal/MyModal";
import {signUpAuth, loginAuth} from '../../../../Auth/checkAuth'

import style from './LoginGroup.module.css'


const LoginGroup = () => {
    const [open, setOpen] = useState(false)
    const [openToo, setOpenToo] = useState(false)
    const [validError, setValidError] = useState(null)

    const handleClose = () => {
        setValidError(false)
        setOpen(false);
        setOpenToo(false);
    };

    return (
        <div className={style.button}>
            <MyButton variant="text" value="Log in" setOpen={setOpenToo}/>
            <MyButton variant="contained" value="Sign up" setOpen={setOpen}/>
            <MyModal open={open} openNext={setOpenToo} handleClose={handleClose} checkAuth={signUpAuth}
                     validError={validError} setValidError={setValidError} value="Sign up"/>
            <MyModal open={openToo} openNext={setOpen} handleClose={handleClose} checkAuth={loginAuth}
                     validError={validError} setValidError={setValidError} value="Log in"/>
        </div>
    );
};

export default LoginGroup;