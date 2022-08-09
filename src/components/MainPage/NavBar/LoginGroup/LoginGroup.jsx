import React, {useState} from 'react';

import MyButton from "../../../Common/MyButton/MyButton";

import style from './LoginGroup.module.css'
import MyModal from "../../../Common/MyModal/MyModal";
import {signUpAuth, loginAuth} from '../../../../Auth/checkAuth'


const LoginGroup = () => {
    const [open, setOpen] = useState(false)
    const [openToo, setOpenToo] = useState(false)
    const handleClose = () =>  {
        setOpen(false);
        setOpenToo(false);
    };

    return (
        <div className={style.button}>
            <MyButton variant="text" value="Log in" setOpen={setOpenToo}/>
            <MyButton variant="contained" value="Sign up" setOpen={setOpen}/>
            <MyModal open={open} openNext={setOpenToo} handleClose={handleClose} checkAuth={signUpAuth} value="Sign up" />
            <MyModal open={openToo} openNext={setOpen} handleClose={handleClose} checkAuth={loginAuth} value="Log in" />
        </div>
    );
};

export default LoginGroup;