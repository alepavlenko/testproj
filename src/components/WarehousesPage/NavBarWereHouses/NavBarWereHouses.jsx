import React, {memo} from 'react';

import Person from "../../Common/Icons/Person";
import Settings from "../../Common/Icons/Settings";
import Notification from "../../Common/Icons/Notification";
import {AppBarStyled, TextFieldStyled} from "./NavBarWereHouses.style";

import style from './NavBarWereHouses.module.css'
import {IconButton} from "@mui/material";
import {Menu} from "@mui/icons-material";

const NavBarWereHouses = memo(({setMobileOpen}) => {

    const arrayLogo = [<Person/>, <Settings/>, <Notification/>]

    return (
        <AppBarStyled position="fixed" sx={{width:{xs:'100%' , sm:'calc(100% - 240px)'  }}}>
            <div className={style.wrapNavBar}>
                <div className={style.WrapLeftNav}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={setMobileOpen}
                        edge="start"
                        sx={{ mr: 2, display: {xs: 'block', sm: 'none' } }}
                    >
                        <Menu/>
                    </IconButton>
                    <TextFieldStyled label="Search" sx={{display: {xs: 'none', sm: 'block'}}}/>
                </div>
                <div className={style.wrapNavLogo}>
                    {arrayLogo.map(logo => <div className={style.styledSvg}>{logo}</div>)}
                </div>
            </div>
        </AppBarStyled>
    );
});

export default NavBarWereHouses;