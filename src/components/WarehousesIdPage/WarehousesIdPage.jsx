import React from 'react';


import {BoxItemWrapper, BoxStyledInner} from "./WarehousesIdPage.style";
import {CssBaseline} from "@mui/material";
import style from './WarehousesIdPage.module.css'
import NavBarWereHouses from "../WarehousesPage/NavBarWereHouses/NavBarWereHouses";
import CustomDrawer from "../WarehousesPage/Drawer/CustomDrawer";

const WarehousesIdPage = () => {
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
                {/*<Warehouses/>*/}
            </div>

        </BoxItemWrapper>
    );
};

export default WarehousesIdPage;