import React from 'react';
import style from './LoginGroup.module.css'
import MyButton from "../../../Common/MyButton/MyButton";

const LoginGroup = () => {
    return (
        <div className={style.button}>
            <MyButton variant={"text"} value={"Log in"} />
            <MyButton variant={"contained"} value={"Sigin up"} />
        </div>
    );
};

export default LoginGroup;