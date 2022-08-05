import React from 'react';

import MyButton from "../../../Common/MyButton/MyButton";

import style from './LoginGroup.module.css'

const LoginGroup = () => {
    return (
        <div className={style.button}>
            <MyButton variant="text" value="Log in" />
            <MyButton variant="contained" value="Sigin up" />
        </div>
    );
};

export default LoginGroup;