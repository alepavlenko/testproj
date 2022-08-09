import React, {useState} from 'react';

import MyButton from "../../../Common/MyButton/MyButton";

import style from './LoginGroup.module.css'
import MyModal from "../../../Common/MyModal/MyModal";


const LoginGroup = () => {
    const [open, setOpen] = useState(false)
    const handleClose = () =>  setOpen(false);

    return (
        <div className={style.button}>
            <MyButton variant="text" value="Log in" setOpen={setOpen}/>
            <MyButton variant="contained" value="Sigin up" setOpen={setOpen}/>
            <MyModal open={open} handleClose={handleClose} value="Sign up" />
        </div>
    );
};

export default LoginGroup;