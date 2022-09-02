import React from 'react';
import {NavigateFunction, useNavigate} from "react-router-dom";

import Logo from "../../Common/Icons/Logo";
import BarItem from "./BarItem/BarItem";
import LoginGroup from "./LoginGroup/LoginGroup";

import style from './NavBar.module.css'

const NavBar = () => {

    let navigate: NavigateFunction = useNavigate();

    return (
        <div className={style.wrapperNav}>
            <div className={style.leftSide}>
                <div onClick={() => {navigate('/', {replace: true})}} className={style.wrapperLogo}>
                    <Logo/>
                </div>
                <BarItem/>
            </div>
            <div className={style.wrapperLogin}>
                <LoginGroup/>
            </div>
        </div>
    );
};

export default NavBar;