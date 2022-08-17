import React from 'react';

import {CssBaseline} from "@mui/material";
import CustomDrawer from "./Drawer/CustomDrawer";
import NavBarWereHouses from './NavBarWereHouses/NavBarWereHouses';
import Warehouses from "./Warehouses/Warehouses";

import style from './WarehousesPage.module.css'
import {BoxItemWrapper, BoxStyledInner} from "./WarehousesPage.style";

const WarehousesPage = () => {
    return (
        <BoxItemWrapper>
            <CssBaseline/>
            <NavBarWereHouses/>
            <BoxStyledInner
                component="nav"
                aria-label="mailbox folders"
            >
                <CustomDrawer/>
            </BoxStyledInner>
            <div className={style.wrapContent}>
                <Warehouses/>
            </div>

        </BoxItemWrapper>

    );
};

export default WarehousesPage;