import React, {memo} from 'react';

import Person from "../../Common/Icons/Person";
import Settings from "../../Common/Icons/Settings";
import Notification from "../../Common/Icons/Notification";
import {AppBarStyled, TextFieldStyled} from "./NavBarWereHouses.style";

import style from './NavBarWereHouses.module.css'

const NavBarWereHouses = memo(() => {

    const arrayLogo = [<Person/>, <Settings/>, <Notification/>]

    return (
        <AppBarStyled position="fixed">
            <div className={style.wrapNavBar}>
                <TextFieldStyled label="Search"/>
                <div className={style.wrapNavLogo}>
                    {arrayLogo.map(logo => <div className={style.styledSvg}>{logo}</div>)}
                </div>
            </div>
        </AppBarStyled>
    );
});

export default NavBarWereHouses;