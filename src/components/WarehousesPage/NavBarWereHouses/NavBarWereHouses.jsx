import React from 'react';
import { AppBar } from '@mui/material';
import {TextFieldStyled} from "./NavBarWereHouses.style";
import Person from "../../Common/Icons/Person";
import Settings from "../../Common/Icons/Settings";
import Notification from "../../Common/Icons/Notification";
import style from './NavBarWereHouses.module.css'

const drawerWidth = 240;

const NavBarWereHouses = () => {
    return (
        <AppBar
                position="fixed"
                sx={{
                    boxShadow: 'none',
                    borderBottom: 1,
                    borderColor: "#ECEFF2",
                    height: 112,
                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                    ml: {sm: `${drawerWidth}px`},
                }}
            >
                <div className={style.wrapNavBar}>
                    <TextFieldStyled label="Search"/>
                    <div className={style.wrapNavLogo}>
                        <div className={style.styledSvg}><Person/></div>
                        <div className={style.styledSvg}><Settings/></div>
                        <div className={style.styledSvg}><Notification/></div>
                    </div>
                </div>
            </AppBar>
    );
};

export default NavBarWereHouses;