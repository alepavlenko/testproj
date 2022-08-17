import React from 'react';

import {AppBarStyled, TextFieldStyled} from "./NavBarWereHouses.style";
import Person from "../../Common/Icons/Person";
import Settings from "../../Common/Icons/Settings";
import Notification from "../../Common/Icons/Notification";

import style from './NavBarWereHouses.module.css'

const NavBarWereHouses = () => {
    return (
        <AppBarStyled position="fixed">
                <div className={style.wrapNavBar}>
                    <TextFieldStyled label="Search"/>
                    <div className={style.wrapNavLogo}>
                        <div className={style.styledSvg}><Person/></div>
                        <div className={style.styledSvg}><Settings/></div>
                        <div className={style.styledSvg}><Notification/></div>
                    </div>
                </div>
            </AppBarStyled>
    );
};

export default NavBarWereHouses;