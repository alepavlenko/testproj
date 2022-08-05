import React from 'react';
import Logo from "../../Common/Logo/Logo";
import BarItem from "./BarItem/BarItem";
import LoginGroup from "./LoginGroup/LoginGroup";
import style from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={style.wrapperNav}>
            <div className={style.leftSide}>
                <div className={style.wrapperLogo}>
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